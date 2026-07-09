/**
 * SIM ERP QA Pipeline — Interactive Orchestrator
 *
 * Run with:  npm run pipeline
 *
 * Option 1 — Run Full Pipeline        (task IDs / requirement doc → all steps)
 * Option 2 — Fetch & Analyze          (tasks by ID/suite/filter  OR  issues by status)
 * Option 3 — Create Test Cases        (AI → cases JSON + Excel)
 * Option 4 — Generate & Run Tests     (AI → Playwright scripts → run → results Excel)
 * Option 5 — Report Bugs to Zoho      (results.json → one-by-one confirmation)
 */

import Anthropic from '@anthropic-ai/sdk';
import * as p from '@clack/prompts';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { spawnSync, spawn } from 'child_process';
import * as dotenv from 'dotenv';
import type { ZodTypeAny } from 'zod';
import { requirementsSchema, testCasesSchema } from './lib/schemas';
import { parsePlaywrightResults, isReportable, classifySeverity, dedupeAgainstZoho, reproducibility } from './lib/failure-triage';
import { findDuplicateTestCases, MinimalTestCase } from './lib/test-case-schema';

async function readDocumentText(filePath: string): Promise<string> {
  const ext = path.extname(filePath).toLowerCase();

  if (ext === '.pdf') {
    // Use system pdftotext (poppler-utils) — reliable and available on Linux/macOS
    const result = spawnSync('pdftotext', [filePath, '-'], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
    if (result.status !== 0) throw new Error(`pdftotext failed: ${result.stderr?.trim() || 'unknown error'}`);
    return result.stdout ?? '';
  }

  if (ext === '.docx' || ext === '.doc') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mammoth = require('mammoth') as { extractRawText: (opts: { path: string }) => Promise<{ value: string }> };
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  }

  // .txt / .md / anything else — plain UTF-8
  return fs.readFileSync(filePath, 'utf8');
}

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const ROOT        = path.resolve(__dirname, '..');
const REPORTS_DIR = path.join(ROOT, 'reports');
const RESULTS_JSON = path.join(REPORTS_DIR, 'results', 'results.json');
const CASES_DIR   = path.join(REPORTS_DIR, 'test-cases');
const REQ_DIR     = path.join(REPORTS_DIR, 'requirements');
const RAW_DIR     = path.join(REPORTS_DIR, 'raw');
const EXCEL_DIR   = path.join(REPORTS_DIR, 'excel');
const AGENTS_DIR  = path.join(ROOT, '.claude', 'agents');
const SKILLS_DIR  = path.join(ROOT, '.claude', 'skills');

// Model per pipeline stage — reasoning/correctness-critical stages stay on the
// stronger tier; a weaker model here risks more schema/tsc retries than the
// speed it would save (see parseAndValidate's corrective re-ask loop).
const STAGE_MODELS = {
  requirementAnalysis:  'claude-sonnet-5',
  testCaseGeneration:   'claude-sonnet-5',
  automationGeneration: 'claude-sonnet-5', // tsc-gated — keep on the stronger tier
} as const;

// ─── Generic helpers ─────────────────────────────────────────────────────────

function run(label: string, cmd: string, cwd = ROOT): { ok: boolean; stdout: string; stderr: string } {
  const spin = p.spinner();
  spin.start(label);
  const result = spawnSync(cmd, { shell: true, cwd, stdio: 'pipe', encoding: 'utf8' });
  const ok = result.status === 0;
  spin.stop(ok ? `${label} — done` : `${label} — failed (exit ${result.status})`);
  if (!ok) {
    const detail = (result.stderr?.trim() || result.stdout?.trim() || '').split('\n').slice(0, 8).join('\n');
    if (detail) p.log.error(detail);
  }
  return { ok, stdout: result.stdout?.trim() ?? '', stderr: result.stderr?.trim() ?? '' };
}

/** Non-blocking counterpart to run() — same shape, but lets independent commands run concurrently. */
function runAsync(cmd: string, cwd = ROOT): Promise<{ ok: boolean; stdout: string; stderr: string }> {
  return new Promise(resolve => {
    const proc = spawn(cmd, { shell: true, cwd, stdio: 'pipe' });
    let stdout = '', stderr = '';
    proc.stdout?.on('data', (d: Buffer) => { stdout += d.toString(); });
    proc.stderr?.on('data', (d: Buffer) => { stderr += d.toString(); });
    proc.on('close', (code: number | null) => resolve({ ok: code === 0, stdout: stdout.trim(), stderr: stderr.trim() }));
  });
}

function runBackground(label: string, cmd: string, cwd = ROOT): void {
  spawn(cmd, { shell: true, cwd, stdio: 'ignore' });
  p.log.info(`${label} — started in background`);
}

/** Retry a flaky network call with exponential backoff (1s/2s/4s) before giving up. */
async function withRetry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (e: unknown) {
      if (i === attempts - 1) throw e;
      await new Promise(resolve => setTimeout(resolve, 1000 * 2 ** i));
    }
  }
  throw new Error('unreachable');
}

function latestFile(dir: string, prefix: string, ext = '.json'): string | null {
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir)
    .filter(f => f.startsWith(prefix) && f.endsWith(ext))
    .sort().reverse();
  return files.length ? path.join(dir, files[0]) : null;
}

function loadAgentPrompt(filename: string): string {
  const raw = fs.readFileSync(path.join(AGENTS_DIR, filename), 'utf8');
  return raw.replace(/^---[\s\S]*?---\s*/m, '').trim();
}

const KB_MODULES_DIR = path.join(ROOT, 'reports', 'knowledge-base', 'modules');

function loadAccountContext(): string {
  const primary = process.env.SIMERP_USERNAME?.trim();
  const testUser = process.env.SIMERP_TEST_USERNAME?.trim();
  if (!primary && !testUser) return '';
  const lines = [
    '## Test Accounts — use these exact emails in preconditions, testDataHints, and every test step that involves login',
    '',
  ];
  if (primary)   lines.push(`- **Primary account** (Admin / Microsoft SSO): \`${primary}\`  →  Playwright fixture: \`primaryPage\`  →  storageState.json`);
  if (testUser)  lines.push(`- **Test account** (TM / Employee / direct credentials): \`${testUser}\`  →  Playwright fixture: \`testUserPage\`  →  storageState-punit.json`);
  lines.push('');
  lines.push('Every test case that requires login MUST name the exact email and the Playwright fixture in its preconditions and automationHint. Never write "Log in as Admin" — write the full email.');
  return lines.join('\n');
}

function loadKbContext(text: string): string {
  if (!fs.existsSync(KB_MODULES_DIR)) return '';
  const lower = text.toLowerCase();
  const featureMap: Record<string, string> = {
    'employee': 'employee.json', 'emp': 'employee.json',
    'goal': 'goals.json', 'competenc': 'competencies.json',
    'skill': 'skills.json', 'weekly update': 'weekly-updates.json',
    'weekly': 'weekly-updates.json', 'auth': 'auth-rbac.json',
    'login': 'auth-rbac.json', 'rbac': 'auth-rbac.json',
    'list': 'list-views.json', 'filter': 'list-views.json',
    'config': 'configuration.json', 'setting': 'configuration.json',
    'api': 'api-validation.json', 'team': 'weekly-updates.json',
  };
  let featureFile = 'ui-patterns.json';
  for (const [kw, file] of Object.entries(featureMap)) {
    if (lower.includes(kw)) { featureFile = file; break; }
  }
  const parts: string[] = [];
  const MAX_KB_CHARS = 3000;
  const featurePath = path.join(KB_MODULES_DIR, featureFile);
  if (fs.existsSync(featurePath))
    parts.push(`## Knowledge Base — ${featureFile}\n${fs.readFileSync(featurePath, 'utf8').slice(0, MAX_KB_CHARS)}`);
  const crossPath = path.join(KB_MODULES_DIR, 'cross-module.json');
  if (fs.existsSync(crossPath))
    parts.push(`## Knowledge Base — cross-module patterns\n${fs.readFileSync(crossPath, 'utf8').slice(0, MAX_KB_CHARS)}`);
  return parts.join('\n\n');
}

function loadSkillPrompt(skillName: string): string {
  const raw = fs.readFileSync(path.join(SKILLS_DIR, skillName, 'SKILL.md'), 'utf8');
  return raw.replace(/^---[\s\S]*?---\s*/m, '').trim();
}

function extractJson(text: string): unknown {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const raw = fenced ? fenced[1].trim() : text.trim();
  const start = Math.min(
    raw.indexOf('[') === -1 ? Infinity : raw.indexOf('['),
    raw.indexOf('{') === -1 ? Infinity : raw.indexOf('{'),
  );
  if (start === Infinity) throw new Error('No JSON found in AI response');
  const opener = raw[start], closer = opener === '[' ? ']' : '}';
  let depth = 0, end = start;
  for (let i = start; i < raw.length; i++) {
    if (raw[i] === opener) depth++;
    else if (raw[i] === closer) { depth--; if (depth === 0) { end = i; break; } }
  }
  return JSON.parse(raw.slice(start, end + 1));
}

function saveJson(dir: string, prefix: string, data: unknown): string {
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${prefix}-${Date.now()}.json`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  return file;
}

/**
 * Parse + zod-validate an AI JSON response, retrying (with the validation errors fed
 * back to the model) up to twice before giving up. Malformed/incomplete output must
 * never silently become `{raw: ...}` / `[]` — every downstream stage treats these files
 * as ground truth, so a failure here aborts the stage instead of writing garbage.
 */
async function parseAndValidate<T>(
  backend: AIBackend,
  systemPrompt: string,
  initialText: string,
  schema: ZodTypeAny,
  stageLabel: string,
  onTick?: (elapsed: string) => void,
  originalPrompt?: string,
  model?: string,
): Promise<{ ok: true; data: T } | { ok: false; rawFile: string; reason: string }> {
  let text = initialText;
  const MAX_ATTEMPTS = 3; // 1 initial parse + up to 2 corrective re-asks
  // Retries must re-supply the original task plus the latest (failing) response — aiChat is a
  // fresh, stateless call each time, so without this the model has nothing to correct against.
  const taskContext = () => originalPrompt ? `${originalPrompt}\n\nYour previous response was:\n${text}\n\n` : '';
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    let parsed: unknown;
    let parseError: string | null = null;
    try {
      parsed = extractJson(text);
    } catch (e: unknown) {
      parseError = (e as Error).message;
    }

    if (parseError === null) {
      const result = schema.safeParse(parsed);
      if (result.success) return { ok: true, data: result.data as T };
      if (attempt === MAX_ATTEMPTS - 1) {
        const rawFile = saveJson(RAW_DIR, `failed-${stageLabel}`, { reason: 'schema validation failed after retries', issues: result.error.format(), raw: text });
        return { ok: false, rawFile, reason: 'schema validation failed after retries' };
      }
      const issues = result.error.issues.map(i => `${i.path.join('.') || '(root)'}: ${i.message}`).join('\n');
      text = await aiChat(
        backend, systemPrompt,
        `${taskContext()}It failed schema validation:\n${issues}\n\nReturn the corrected, COMPLETE JSON only — no prose, no markdown fences, no explanation.`,
        onTick, false, model,
      );
      continue;
    }

    if (attempt === MAX_ATTEMPTS - 1) {
      const rawFile = saveJson(RAW_DIR, `failed-${stageLabel}`, { reason: parseError, raw: text });
      return { ok: false, rawFile, reason: parseError };
    }
    text = await aiChat(
      backend, systemPrompt,
      `${taskContext()}It could not be parsed as JSON (${parseError}). Return ONLY valid JSON parseable by JSON.parse from the first character to the last — no prose, no markdown fences.`,
      onTick, false, model,
    );
  }
  // Unreachable — loop always returns within MAX_ATTEMPTS.
  const rawFile = saveJson(RAW_DIR, `failed-${stageLabel}`, { reason: 'exhausted retries', raw: text });
  return { ok: false, rawFile, reason: 'exhausted retries' };
}

// ─── AI backend ──────────────────────────────────────────────────────────────

interface AIFile { path: string; content: string; }
type AIBackend = { type: 'cli'; bin: string } | { type: 'sdk'; client: Anthropic };

function findClaudeBin(): string | null {
  const extRoot = path.join(os.homedir(), '.vscode', 'extensions');
  if (!fs.existsSync(extRoot)) return null;
  const dirs = fs.readdirSync(extRoot)
    .filter(d => d.startsWith('anthropic.claude-code-')).sort().reverse();
  for (const d of dirs) {
    const bin = path.join(extRoot, d, 'resources', 'native-binary', 'claude');
    if (fs.existsSync(bin)) return bin;
  }
  return null;
}

function resolveAIBackend(): AIBackend {
  const bin = findClaudeBin();
  if (bin) return { type: 'cli', bin };
  const key = process.env.ANTHROPIC_API_KEY;
  if (key && key !== 'your_anthropic_api_key_here')
    return { type: 'sdk', client: new Anthropic({ apiKey: key }) };
  throw new Error(
    'No AI backend found.\n' +
    '  Option A: Install the Claude Code VS Code extension.\n' +
    '  Option B: Set ANTHROPIC_API_KEY in .env',
  );
}

async function aiChat(
  backend: AIBackend,
  systemPrompt: string,
  userMessage: string,
  onTick?: (elapsed: string) => void,
  allowTools = false,
  model?: string,
): Promise<string> {
  if (backend.type === 'cli') {
    return new Promise<string>((resolve, reject) => {
      // System prompt goes to a temp file and the user message goes via stdin — both can
      // exceed Linux's per-argv-string cap (MAX_ARG_STRLEN, 128KB) once requirements/test-case
      // JSON payloads are embedded, which previously crashed spawn() with E2BIG.
      const sysPromptFile = fs.mkdtempSync(path.join(os.tmpdir(), 'claude-sp-')) + '/system-prompt.txt';
      fs.writeFileSync(sysPromptFile, systemPrompt);
      const cleanup = () => fs.rm(path.dirname(sysPromptFile), { recursive: true, force: true }, () => {});

      const baseArgs = ['--print', '--dangerously-skip-permissions'];
      if (allowTools) baseArgs.push('--allowedTools', 'Read,Write,Edit,Bash');
      if (model) baseArgs.push('--model', model);
      baseArgs.push('--system-prompt-file', sysPromptFile, '--output-format', 'text');
      const proc = spawn(
        backend.bin,
        baseArgs,
        { shell: false, cwd: ROOT, stdio: ['pipe', 'pipe', 'pipe'], env: { ...process.env, TERM: 'dumb' } },
      );
      proc.stdin.end(userMessage);
      let stdout = '';
      let stderr = '';
      const start = Date.now();
      const timer = onTick
        ? setInterval(() => onTick(`${Math.round((Date.now() - start) / 1000)}s`), 1000)
        : null;
      const timeout = setTimeout(() => {
        proc.kill('SIGTERM');
        reject(new Error('Claude CLI timed out after 15 minutes — try a shorter input or check your connection'));
      }, 15 * 60 * 1000);
      proc.stdout?.on('data', (d: Buffer) => { stdout += d.toString(); });
      proc.stderr?.on('data', (d: Buffer) => { stderr += d.toString(); });
      proc.on('close', (code: number | null) => {
        if (timer) clearInterval(timer);
        clearTimeout(timeout);
        cleanup();
        if ((code ?? 1) !== 0) reject(new Error(`[exit ${code}] ${stderr.trim() || '(no stderr)'}`));
        else resolve(stdout.trim());
      });
    });
  }
  const msg = await backend.client.messages.create({
    model: model ?? STAGE_MODELS.requirementAnalysis, max_tokens: 8192,
    system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: userMessage }],
  });
  return msg.content[0].type === 'text' ? msg.content[0].text : '';
}

async function aiGenerateAutomation(backend: AIBackend, systemPrompt: string, casesJson: string, onTick?: (s: string) => void, model?: string): Promise<AIFile[]> {
  if (backend.type === 'sdk') {
    const tool: Anthropic.Tool = {
      name: 'write_files',
      description: 'Write ALL generated Playwright TypeScript files.',
      input_schema: {
        type: 'object' as const,
        properties: { files: { type: 'array', items: { type: 'object', properties: { path: { type: 'string' }, content: { type: 'string' } }, required: ['path', 'content'] } } },
        required: ['files'],
      },
    };
    const msg = await backend.client.messages.create({
      model: model ?? STAGE_MODELS.automationGeneration, max_tokens: 16000,
      system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }],
      tools: [tool], tool_choice: { type: 'any' },
      messages: [{ role: 'user', content: `Generate page objects and spec files. Call write_files with ALL files:\n\n${casesJson}` }],
    });
    for (const block of msg.content)
      if (block.type === 'tool_use' && block.name === 'write_files')
        return (block.input as { files: AIFile[] }).files ?? [];
    const tb = msg.content.find(b => b.type === 'text');
    return tb?.type === 'text' ? parseFilesFromMarkdown(tb.text) : [];
  }
  const augmented = systemPrompt +
    '\n\n## Output Format (REQUIRED)\n' +
    'After explanation output a ```files block with [{path,content}] JSON.\n' +
    'Escape newlines in content as \\n. Include EVERY file.';
  const response = await aiChat(backend, augmented, `Generate page objects and spec files:\n\n${casesJson}`, onTick, false, model);
  return parseFilesFromResponse(response);
}

function parseFilesFromResponse(text: string): AIFile[] {
  const jsonBlock = text.match(/```files\s*([\s\S]*?)```/);
  if (jsonBlock) {
    try {
      const arr = JSON.parse(jsonBlock[1].trim());
      if (Array.isArray(arr)) return arr.map((f: AIFile) => ({ path: f.path, content: f.content.replace(/\\n/g, '\n') }));
    } catch { /* fall through */ }
  }
  return parseFilesFromMarkdown(text);
}

function parseFilesFromMarkdown(text: string): AIFile[] {
  const files: AIFile[] = [];
  const pattern = /```(?:typescript|ts)\s*\n(?:\/\/\s*(?:File:\s*)?([^\n]+)\n)?([\s\S]*?)```/g;
  let match: RegExpExecArray | null, idx = 0;
  while ((match = pattern.exec(text)) !== null) {
    const fp = match[1]?.trim(), content = match[2]?.trim() ?? '';
    if (fp && content) files.push({ path: fp, content });
    else if (content) files.push({ path: `tests/e2e/generated-${idx++}.spec.ts`, content });
  }
  return files;
}

// ─── Zoho MCP ────────────────────────────────────────────────────────────────

function readMcpUrl(): string | null {
  for (const f of [path.join(ROOT, '.mcp.json'), path.join(ROOT, '.vscode', 'mcp.json')]) {
    if (!fs.existsSync(f)) continue;
    try {
      const cfg = JSON.parse(fs.readFileSync(f, 'utf8'));
      const url = (cfg.mcpServers ?? cfg.servers ?? {})['zoho-projects']?.url;
      if (url) return url as string;
    } catch { /* skip */ }
  }
  return null;
}

async function callZohoMcp(
  tool: string,
  pathVariables: Record<string, string>,
  queryParams: Record<string, unknown> = {},
  bodyParams: Record<string, unknown> = {},
): Promise<unknown> {
  const mcpUrl = readMcpUrl();
  if (!mcpUrl) throw new Error('Zoho MCP URL not found in .mcp.json or .vscode/mcp.json');
  const { default: axios } = await import('axios');
  const args: Record<string, unknown> = { path_variables: pathVariables };
  if (Object.keys(queryParams).length) args['query_params'] = queryParams;
  if (Object.keys(bodyParams).length) args['request_body'] = bodyParams;
  const res = await withRetry(() => axios.post(
    mcpUrl,
    { jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: tool, arguments: args } },
    { headers: { 'Content-Type': 'application/json' }, timeout: 30_000 },
  ));
  const rpc = res.data;
  if (rpc.error) throw new Error(`MCP error ${rpc.error.code}: ${rpc.error.message}`);
  const content = rpc.result?.content ?? rpc.result;
  if (Array.isArray(content) && content[0]?.text) return JSON.parse(content[0].text);
  return content;
}

function portalAndProject(): { portalId: string; projectId: string } {
  const portalId  = process.env.ZOHO_PORTAL_ID;
  const projectId = process.env.ZOHO_PROJECT_ID;
  if (!portalId || !projectId) throw new Error('ZOHO_PORTAL_ID and ZOHO_PROJECT_ID must be set in .env');
  return { portalId, projectId };
}

function isZohoConfigured(): boolean {
  return !!(process.env.ZOHO_PORTAL_ID?.trim() && process.env.ZOHO_PROJECT_ID?.trim() && readMcpUrl());
}

function normalizeTask(t: Record<string, unknown>): Record<string, unknown> {
  return {
    id:          String(t['id'] ?? t['id_string'] ?? ''),
    prefix:      String(t['key'] ?? ''),
    name:        String(t['name'] ?? ''),
    description: String(t['description'] ?? ''),
    status:      String((t['status'] as Record<string, unknown>)?.['name'] ?? t['status'] ?? '').toLowerCase(),
    priority:    String(t['priority'] ?? '').toLowerCase(),
    assignee:    String(((t['details'] as Record<string, unknown>)?.['owners'] as Record<string, unknown>[])?.[0]?.['email'] ?? t['owner_name'] ?? ''),
    tags:        (Array.isArray(t['tags']) ? t['tags'] : []).map((x: unknown) =>
      typeof x === 'object' && x !== null ? String((x as Record<string, unknown>)['name'] ?? x) : String(x)),
    acceptanceCriteria: (Array.isArray(t['custom_fields']) ? t['custom_fields'] : [])
      .find((f: unknown) => /acceptance/i.test(String((f as Record<string, unknown>)?.['label_name'] ?? '')))?.['value'],
    url: String(((t['link'] as Record<string, unknown>)?.['web'] as Record<string, unknown>)?.['url'] ?? ''),
  };
}

async function fetchAllTasks(limit = 200): Promise<Record<string, unknown>[]> {
  const { portalId, projectId } = portalAndProject();
  const data = await callZohoMcp(
    'ZohoProjects_get_tasks_by_project',
    { portal_id: portalId, project_id: projectId },
    { per_page: limit, sort_by: 'DESC(id)' },
  ) as Record<string, unknown>;
  const raw: Record<string, unknown>[] = Array.isArray(data) ? data
    : Array.isArray(data['tasks']) ? data['tasks'] as Record<string, unknown>[] : [];
  return raw.map(normalizeTask);
}

async function fetchAllIssues(limit = 200): Promise<Record<string, unknown>[]> {
  const { portalId, projectId } = portalAndProject();
  const data = await callZohoMcp(
    'ZohoProjects_get_project_issues',
    { portal_id: portalId, project_id: projectId },
    { per_page: limit },
  ) as Record<string, unknown>;
  const raw: Record<string, unknown>[] = Array.isArray(data) ? data
    : Array.isArray(data['bugs']) ? data['bugs'] as Record<string, unknown>[]
    : Array.isArray(data['issues']) ? data['issues'] as Record<string, unknown>[] : [];
  return raw.map(t => ({
    id:          String(t['id'] ?? t['id_string'] ?? ''),
    prefix:      String(t['key'] ?? ''),
    name:        String(t['title'] ?? t['name'] ?? ''),
    description: String(t['description'] ?? ''),
    status:      String((t['status'] as Record<string, unknown>)?.['name'] ?? t['status'] ?? '').toLowerCase(),
    severity:    String(t['severity'] ?? '').toLowerCase(),
    assignee:    String((t['assignee'] as Record<string, unknown>)?.['name'] ?? ''),
    url:         String(((t['link'] as Record<string, unknown>)?.['web'] as Record<string, unknown>)?.['url'] ?? ''),
  }));
}

async function fetchTasklists(): Promise<Array<{ value: string; label: string }>> {
  const { portalId, projectId } = portalAndProject();
  const data = await callZohoMcp(
    'ZohoProjects_get_all_project_task_lists',
    { portal_id: portalId, project_id: projectId },
  ) as Record<string, unknown>;
  const raw: Record<string, unknown>[] = Array.isArray(data) ? data
    : Array.isArray(data['tasklists']) ? data['tasklists'] as Record<string, unknown>[] : [];
  return raw.map(tl => ({ value: String(tl['id'] ?? ''), label: String(tl['name'] ?? tl['id']) }));
}

// ─── Targeted task fetch (avoids pulling all 200 when only a few IDs are needed) ──

async function fetchTasksByIds(ids: string[]): Promise<Record<string, unknown>[]> {
  const { portalId, projectId } = portalAndProject();
  const results: Record<string, unknown>[] = [];
  const missed: string[] = [];

  // Direct single-task lookups are independent — fetch them concurrently.
  const outcomes = await Promise.all(ids.map(async id => {
    try {
      const data = await callZohoMcp(
        'ZohoProjects_get_task',
        { portal_id: portalId, project_id: projectId, task_id: id },
      ) as Record<string, unknown>;
      const task = (data['tasks'] as Record<string, unknown>[])?.[0] ?? data;
      if (task && (task['id'] || task['id_string'])) return { id, task: normalizeTask(task) };
    } catch { /* falls through to missed */ }
    return { id, task: null as Record<string, unknown> | null };
  }));
  for (const o of outcomes) {
    if (o.task) results.push(o.task);
    else missed.push(o.id);
  }

  if (missed.length) {
    // Fall back to full fetch only for IDs the direct call couldn't resolve
    const all = await fetchAllTasks(200);
    for (const id of missed) {
      const target = id.toUpperCase();
      const found = all.find(t =>
        String(t['id']) === target ||
        String(t['prefix']).toUpperCase() === target ||
        String(t['name']).toUpperCase().includes(target),
      );
      if (found) results.push(found);
      else p.log.warn(`Task "${id}" not found — skipping`);
    }
  }

  return results;
}

// ─── Shared AI analysis helper ────────────────────────────────────────────────

async function runRequirementAnalysis(
  backend: AIBackend,
  tasks: Record<string, unknown>[],
  label = 'Analyzing requirements',
): Promise<{ reqFile: string }> {
  const spin = p.spinner();
  spin.start(`${label}…`);
  const systemPrompt = loadAgentPrompt('requirement-analyzer.agent.md');
  let reqText: string;
  let userMessage!: string;
  try {
    const input = tasks.length === 1
      ? JSON.stringify(tasks[0], null, 2)
      : JSON.stringify(tasks, null, 2);
    const kbContext = loadKbContext(input);
    const kbBlock = kbContext
      ? `\n\n<knowledge-base>\n${kbContext}\n</knowledge-base>\n\nUse the knowledge base above to populate roleMatrix[], businessRules[], knownBugEdgeCases[], and integrationPoints[]. DO NOT read any files — all KB context is provided above.`
      : '';
    const accountBlock = loadAccountContext();
    const accountSection = accountBlock ? `\n\n<test-accounts>\n${accountBlock}\n</test-accounts>` : '';
    userMessage = `Analyze ${tasks.length > 1 ? 'these tasks' : 'this task'} and return ONLY the structured requirements JSON (no prose, no file writes — the pipeline saves the file):\n\n${input}${kbBlock}${accountSection}`;
    reqText = await aiChat(backend, systemPrompt, userMessage, s => spin.message(`${label}… ${s}`), false, STAGE_MODELS.requirementAnalysis);
  } catch (e: unknown) {
    spin.stop(`${label} — failed`);
    throw e;
  }
  const validated = await parseAndValidate<unknown>(
    backend, systemPrompt, reqText, requirementsSchema, 'requirements',
    s => spin.message(`${label}… correcting invalid JSON… ${s}`),
    userMessage, STAGE_MODELS.requirementAnalysis,
  );
  if (!validated.ok) {
    spin.stop(`${label} — failed (invalid JSON after retries)`);
    throw new Error(`Requirement analysis produced invalid/malformed JSON after retries (${validated.reason}) — raw response saved to ${validated.rawFile}`);
  }
  const reqFile = saveJson(REQ_DIR, 'requirements', validated.data);
  spin.stop(`${label} — saved`);
  p.note(reqFile, 'requirements JSON');
  return { reqFile };
}

// ─── Option 1: Run Full Pipeline ─────────────────────────────────────────────

async function option1FullPipeline() {
  const source = await p.select({
    message: 'Input source',
    options: [
      { value: 'taskids', label: 'Zoho Task ID(s)',          hint: 'e.g. SI4-T501, SI4-T502' },
      { value: 'manual',  label: 'Paste requirement text',   hint: 'no Zoho needed' },
      { value: 'file',    label: 'Requirement document path', hint: '.pdf / .docx / .txt / .md' },
    ],
  });
  if (p.isCancel(source)) return;

  let taskRecords: Record<string, unknown>[] = [];

  if (source === 'taskids') {
    const input = await p.text({
      message: 'Zoho Task ID(s) — comma-separated',
      placeholder: 'SI4-T501, SI4-T502',
      validate: v => (!v?.trim() ? 'Enter at least one task ID' : undefined),
    });
    if (p.isCancel(input)) return;
    const ids = String(input).split(',').map(s => s.trim()).filter(Boolean);

    const spin = p.spinner();
    spin.start(`Fetching ${ids.length} task(s) from Zoho…`);
    try {
      taskRecords = await fetchTasksByIds(ids);
    } catch (e: unknown) {
      spin.stop('Fetch failed');
      p.log.error((e as Error).message);
      return;
    }
    spin.stop(`${taskRecords.length} task(s) loaded`);
    if (!taskRecords.length) { p.log.warn('No tasks found. Aborting.'); return; }
    taskRecords.forEach(t => p.log.info(`  ✓ ${t['prefix']}  ${t['name']}`));

  } else if (source === 'file') {
    const filePath = await p.text({
      message: 'Path to SRS / requirement document',
      placeholder: '/path/to/srs.pdf  or  requirements.docx  or  spec.md',
      validate: v => {
        if (!v?.trim()) return 'Required';
        if (!fs.existsSync(v.trim())) return 'File not found';
        const ext = path.extname(v.trim()).toLowerCase();
        if (!['.pdf', '.docx', '.doc', '.txt', '.md'].includes(ext))
          return 'Unsupported format — use .pdf, .docx, .doc, .txt, or .md';
      },
    });
    if (p.isCancel(filePath)) return;
    const spin = p.spinner();
    spin.start('Reading document…');
    let content: string;
    try {
      content = await readDocumentText(String(filePath).trim());
      spin.stop(`Read ${content.length.toLocaleString()} characters from ${path.basename(String(filePath))}`);
    } catch (e: unknown) {
      spin.stop('Failed to read document');
      p.log.error((e as Error).message);
      return;
    }
    taskRecords = [{ id: `DOC-${Date.now()}`, name: path.basename(String(filePath)), description: content, source: 'document' }];
  } else {
    try { taskRecords = [await collectManualInput()]; } catch { return; }
  }

  const runTests   = await p.confirm({ message: 'Run tests after generation? (Option 4)' });
  if (p.isCancel(runTests)) return;
  let reportBugs: boolean | symbol = false;
  if (isZohoConfigured()) {
    const ans = await p.confirm({ message: 'Report bugs to Zoho after test run? (Option 5)' });
    if (p.isCancel(ans)) return;
    reportBugs = ans;
  } else {
    p.log.info('Zoho not configured — bug reporting skipped');
  }

  let backend: AIBackend;
  try { backend = resolveAIBackend(); } catch (e: unknown) { p.log.error((e as Error).message); return; }
  p.log.info(`AI: ${backend.type === 'cli' ? 'Claude Code CLI' : 'Anthropic SDK'}`);

  const ts = Date.now();
  fs.mkdirSync(CASES_DIR, { recursive: true });
  fs.mkdirSync(REQ_DIR, { recursive: true });
  fs.mkdirSync(RAW_DIR, { recursive: true });
  fs.mkdirSync(EXCEL_DIR, { recursive: true });
  fs.mkdirSync(path.join(REPORTS_DIR, 'results'), { recursive: true });

  // Step 1 — requirements
  let reqFile: string;
  try {
    ({ reqFile } = await runRequirementAnalysis(backend, taskRecords, 'Step 1 — Analyzing requirements'));
  } catch (e: unknown) { p.log.error((e as Error).message); return; }

  // Step 2 — test cases
  const casesFile = await runTestCaseGeneration(backend, reqFile, ts);
  if (!casesFile) return;

  // Step 3 — automation
  const automationFiles = await runAutomationGeneration(backend, casesFile);

  // Step 4 — run tests
  let testsFailed = false;
  if (!p.isCancel(runTests) && runTests) {
    testsFailed = !(await runPlaywrightTests(automationFiles));
  } else { p.log.info('Step 4 — Tests skipped'); }

  // Step 5 — report bugs
  if (!p.isCancel(reportBugs) && reportBugs && testsFailed) {
    await option5ReportBugs(true);
  } else { p.log.info('Step 5 — Bug report skipped'); }

  p.note(
    [
      `Step 1 — Requirements : ${reqFile}`,
      `Step 2 — Test Cases   : ${casesFile}`,
      `Step 3 — Automation   : ${automationFiles.length} file(s)`,
      `Step 4 — Tests        : ${!p.isCancel(runTests) && runTests ? (testsFailed ? 'FAILED' : 'PASSED') : 'SKIPPED'}`,
      `Step 5 — Bug Report   : ${!p.isCancel(reportBugs) && reportBugs && testsFailed ? 'FILED' : 'SKIPPED'}`,
    ].join('\n'),
    'Full pipeline complete',
  );
}

// ─── Option 2: Fetch & Analyze ───────────────────────────────────────────────

async function option2FetchAndAnalyze() {
  const type = await p.select({
    message: 'Source',
    options: [
      { value: 'tasks',    label: 'Zoho Tasks',         hint: 'filter by ID(s), task list, status, priority' },
      { value: 'issues',   label: 'Zoho Issues (Bugs)', hint: 'filter by status: Open / To Be Tested / Closed / Reopened' },
      { value: 'document', label: 'SRS / Requirement Document', hint: '.pdf / .docx / .txt / .md — no Zoho needed' },
    ],
  });
  if (p.isCancel(type)) return;

  let items: Record<string, unknown>[] = [];
  const spin = p.spinner();

  if (type === 'document') {
    const filePath = await p.text({
      message: 'Path to SRS / requirement document',
      placeholder: '/path/to/srs.pdf  or  requirements.docx  or  spec.md',
      validate: v => {
        if (!v?.trim()) return 'Required';
        if (!fs.existsSync(v.trim())) return 'File not found';
        const ext = path.extname(v.trim()).toLowerCase();
        if (!['.pdf', '.docx', '.doc', '.txt', '.md'].includes(ext))
          return 'Unsupported format — use .pdf, .docx, .doc, .txt, or .md';
      },
    });
    if (p.isCancel(filePath)) return;

    spin.start('Reading document…');
    let content: string;
    try {
      content = await readDocumentText(String(filePath).trim());
      spin.stop(`Read ${content.length.toLocaleString()} characters from ${path.basename(String(filePath))}`);
    } catch (e: unknown) {
      spin.stop('Failed to read document');
      p.log.error((e as Error).message);
      return;
    }

    items = [{ id: `DOC-${Date.now()}`, name: path.basename(String(filePath)), description: content, source: 'document' }];

  } else if (type === 'tasks') {
    const filterBy = await p.select({
      message: 'Filter tasks by',
      options: [
        { value: 'ids',      label: 'Specific ID(s)',   hint: 'comma-separated, e.g. SI4-T501, SI4-T502' },
        { value: 'tasklist', label: 'Task List / Suite', hint: 'pick from dropdown' },
        { value: 'filters',  label: 'Status & Priority', hint: 'multi-select' },
      ],
    });
    if (p.isCancel(filterBy)) return;

    if (filterBy === 'ids') {
      const input = await p.text({
        message: 'Task ID(s) — comma-separated',
        placeholder: 'SI4-T501, SI4-T502',
        validate: v => (!v?.trim() ? 'Required' : undefined),
      });
      if (p.isCancel(input)) return;
      const ids = String(input).split(',').map(s => s.trim().toUpperCase()).filter(Boolean);

      spin.start('Fetching tasks…');
      try {
        items = await fetchTasksByIds(ids);
      } catch (e: unknown) { spin.stop('Failed'); p.log.error((e as Error).message); return; }
      spin.stop(`${items.length} task(s) found`);

    } else if (filterBy === 'tasklist') {
      spin.start('Loading task lists…');
      let lists: Array<{ value: string; label: string }> = [];
      try { lists = await fetchTasklists(); } catch (e: unknown) { spin.stop('Failed'); p.log.error((e as Error).message); return; }
      spin.stop(`${lists.length} task list(s) found`);

      if (!lists.length) { p.log.warn('No task lists found in this project.'); return; }

      const selected = await p.multiselect({
        message: 'Select task list(s)',
        options: lists,
        required: true,
      });
      if (p.isCancel(selected)) return;

      spin.start('Fetching tasks in selected list(s)…');
      try {
        const { portalId, projectId } = portalAndProject();
        const perList = await Promise.all((selected as string[]).map(async tlId => {
          const data = await callZohoMcp(
            'ZohoProjects_get_tasks_by_project',
            { portal_id: portalId, project_id: projectId },
            { tasklist_id: tlId, per_page: 100 },
          ) as Record<string, unknown>;
          const raw: Record<string, unknown>[] = Array.isArray(data['tasks']) ? data['tasks'] as Record<string, unknown>[] : [];
          return raw.map(normalizeTask);
        }));
        items.push(...perList.flat());
      } catch (e: unknown) { spin.stop('Failed'); p.log.error((e as Error).message); return; }
      spin.stop(`${items.length} task(s) loaded`);

    } else {
      const statuses = await p.multiselect({
        message: 'Status (select all that apply)',
        options: [
          { value: 'open',        label: 'Open' },
          { value: 'in progress', label: 'In Progress' },
          { value: 'closed',      label: 'Closed' },
          { value: 'to be tested',label: 'To Be Tested' },
        ],
        required: false,
      });
      if (p.isCancel(statuses)) return;

      const priority = await p.select({
        message: 'Priority',
        options: [
          { value: '', label: 'All' },
          { value: 'high',   label: 'High' },
          { value: 'medium', label: 'Medium' },
          { value: 'low',    label: 'Low' },
        ],
      });
      if (p.isCancel(priority)) return;

      spin.start('Fetching tasks…');
      try {
        const all = await fetchAllTasks(200);
        items = all.filter(t => {
          const st = String(t['status']);
          const selectedStatuses = statuses as string[];
          if (selectedStatuses.length && !selectedStatuses.some(s => st.includes(s))) return false;
          if (priority && t['priority'] !== priority) return false;
          return true;
        });
      } catch (e: unknown) { spin.stop('Failed'); p.log.error((e as Error).message); return; }
      spin.stop(`${items.length} task(s) match filters`);
    }

  } else {
    // Issues
    const statuses = await p.multiselect({
      message: 'Issue status (select all that apply)',
      options: [
        { value: 'open',          label: 'Open' },
        { value: 'to be tested',  label: 'To Be Tested' },
        { value: 'in progress',   label: 'In Progress' },
        { value: 'closed',        label: 'Closed' },
        { value: 'reopened',      label: 'Reopened' },
      ],
      required: false,
    });
    if (p.isCancel(statuses)) return;

    spin.start('Fetching issues…');
    try {
      const all = await fetchAllIssues(200);
      const selectedStatuses = statuses as string[];
      items = selectedStatuses.length
        ? all.filter(t => selectedStatuses.some(s => String(t['status']).toLowerCase().includes(s)))
        : all;
    } catch (e: unknown) { spin.stop('Failed'); p.log.error((e as Error).message); return; }
    spin.stop(`${items.length} issue(s) found`);
  }

  if (!items.length) { p.log.warn('Nothing to analyze.'); return; }

  // Preview
  if (type === 'document') {
    const excerpt = String(items[0]['description']).slice(0, 400).replace(/\n+/g, ' ');
    p.note(`${excerpt}…`, `Document: ${items[0]['name']}`);
  } else {
    const preview = items.slice(0, 8)
      .map(t => `${String(t['prefix'] || t['id']).padEnd(12)} ${String(t['name']).slice(0, 60)}`)
      .join('\n');
    p.note(preview + (items.length > 8 ? `\n…and ${items.length - 8} more` : ''), `${items.length} item(s)`);
  }

  // Save raw fetch result
  const rawFile = saveJson(RAW_DIR, `${type}-fetched`, items);
  p.log.info(`Saved → ${rawFile}`);

  const analyzeLabel = type === 'document'
    ? `Run AI requirement analysis on "${items[0]['name']}"?`
    : `Run AI requirement analysis on ${items.length} item(s)?`;
  const analyze = await p.confirm({ message: analyzeLabel });
  if (p.isCancel(analyze) || !analyze) return;

  let backend: AIBackend;
  try { backend = resolveAIBackend(); } catch (e: unknown) { p.log.error((e as Error).message); return; }

  try {
    await runRequirementAnalysis(backend, items, 'Analyzing requirements');
  } catch (e: unknown) { p.log.error((e as Error).message); }
}

// ─── Option 3: Create Test Cases ─────────────────────────────────────────────

async function option3CreateTestCases() {
  // Auto-detect latest requirements file
  const autoReq = latestFile(REQ_DIR, 'requirements');
  let reqFile: string;

  if (autoReq) {
    const use = await p.confirm({ message: `Use latest requirements file?\n  ${autoReq}` });
    if (p.isCancel(use)) return;
    if (use) {
      reqFile = autoReq;
    } else {
      const custom = await p.text({
        message: 'Path to requirements JSON',
        validate: v => (!v?.trim() ? 'Required' : !fs.existsSync(v.trim()) ? 'File not found' : undefined),
      });
      if (p.isCancel(custom)) return;
      reqFile = String(custom).trim();
    }
  } else {
    p.log.warn('No requirements file found — run Option 2 first, or provide a path.');
    const custom = await p.text({
      message: 'Path to requirements JSON',
      validate: v => (!v?.trim() ? 'Required' : !fs.existsSync(v.trim()) ? 'File not found' : undefined),
    });
    if (p.isCancel(custom)) return;
    reqFile = String(custom).trim();
  }

  let backend: AIBackend;
  try { backend = resolveAIBackend(); } catch (e: unknown) { p.log.error((e as Error).message); return; }

  const casesFile = await runTestCaseGeneration(backend, reqFile, Date.now());
  if (casesFile) {
    p.log.success(`Test cases saved → ${casesFile}`);
    const cases = JSON.parse(fs.readFileSync(casesFile, 'utf8'));
    if (Array.isArray(cases)) {
      const byCat = cases.reduce<Record<string, number>>((acc, c) => {
        acc[c.category ?? 'other'] = (acc[c.category ?? 'other'] ?? 0) + 1;
        return acc;
      }, {});
      p.note(
        Object.entries(byCat).map(([k, v]) => `${k.padEnd(16)} ${v}`).join('\n') +
        `\n${'TOTAL'.padEnd(16)} ${cases.length}`,
        'Test case breakdown',
      );
    }
  }
}

// ─── Option 4: Generate & Run Playwright Tests ───────────────────────────────

async function option4GenerateAndRun() {
  const autoCases = latestFile(CASES_DIR, 'cases');
  let casesFile: string;

  if (autoCases) {
    const use = await p.confirm({ message: `Use latest test cases file?\n  ${autoCases}` });
    if (p.isCancel(use)) return;
    if (use) {
      casesFile = autoCases;
    } else {
      const custom = await p.text({
        message: 'Path to cases JSON',
        validate: v => (!v?.trim() ? 'Required' : !fs.existsSync(v.trim()) ? 'File not found' : undefined),
      });
      if (p.isCancel(custom)) return;
      casesFile = String(custom).trim();
    }
  } else {
    p.log.warn('No test cases file found — run Option 3 first.');
    const custom = await p.text({
      message: 'Path to cases JSON',
      validate: v => (!v?.trim() ? 'Required' : !fs.existsSync(v.trim()) ? 'File not found' : undefined),
    });
    if (p.isCancel(custom)) return;
    casesFile = String(custom).trim();
  }

  let backend: AIBackend;
  try { backend = resolveAIBackend(); } catch (e: unknown) { p.log.error((e as Error).message); return; }

  const automationFiles = await runAutomationGeneration(backend, casesFile);
  const passed = await runPlaywrightTests(automationFiles);

  if (!passed) {
    const reportNow = await p.confirm({ message: 'Tests failed — go to Option 5 to report bugs now?' });
    if (!p.isCancel(reportNow) && reportNow) await option5ReportBugs(true);
  }
}

// ─── Option 5: Report Bugs to Zoho (one by one) ──────────────────────────────

async function option5ReportBugs(skipConfirm = false) {
  if (!fs.existsSync(RESULTS_JSON)) {
    p.log.warn(`No results.json found at ${RESULTS_JSON}`);
    p.log.info('Run Option 4 first to generate test results.');
    return;
  }

  const data = JSON.parse(fs.readFileSync(RESULTS_JSON, 'utf8'));
  const { results, browser } = parsePlaywrightResults(data);

  // Never surface a flaky-on-retry test as reportable — it already recovered.
  const flakyExcluded = results.filter(r => r.isFlaky).length;
  const reportable = results.filter(isReportable);

  // Dedupe identical failures (same title + first line of error) within this run.
  const seenKeys = new Set<string>();
  const unique = reportable.filter(r => {
    const key = `${r.title}|${(r.error ?? r.status).slice(0, 80)}`;
    if (seenKeys.has(key)) return false;
    seenKeys.add(key);
    return true;
  });

  if (!unique.length) {
    p.log.success(`No reportable failures — nothing to file.${flakyExcluded ? ` (${flakyExcluded} flaky test(s) excluded — passed on retry)` : ''}`);
    return;
  }

  p.log.info(`Found ${unique.length} reportable failure(s) to review.${flakyExcluded ? ` (${flakyExcluded} flaky excluded)` : ''}`);
  if (!skipConfirm) {
    const proceed = await p.confirm({ message: `Review and file up to ${unique.length} bug(s) in Zoho?` });
    if (p.isCancel(proceed) || !proceed) return;
  }

  const { portalId, projectId } = portalAndProject();
  const baseUrl = process.env.BASE_URL ?? '';

  let openIssuesRaw: Record<string, unknown>[] = [];
  try { openIssuesRaw = await fetchAllIssues(200); } catch (e: unknown) {
    p.log.warn(`Could not fetch existing Zoho issues for duplicate check: ${(e as Error).message}`);
  }
  const openIssues = openIssuesRaw.map(iss => ({
    id: String(iss['id'] ?? ''), name: String(iss['name'] ?? ''),
    description: String(iss['description'] ?? ''), status: String(iss['status'] ?? ''),
  }));

  let filed = 0, skipped = 0, duplicates = 0;

  for (let i = 0; i < unique.length; i++) {
    const r = unique[i];
    const errorFirstLine = (r.error ?? r.status).split('\n')[0];
    console.log('');
    p.note(
      [
        `Test  : ${r.title}`,
        `Module: ${r.module}`,
        `Browser: ${browser}`,
        `Error : ${errorFirstLine.slice(0, 120)}`,
        `Reproducibility: ${reproducibility(r) === 'unknown' ? 'Unknown (single attempt — file with caution)' : 'Always (failed even after retry)'}`,
        r.screenshotPath ? `Screenshot: ${r.screenshotPath}` : '',
      ].filter(Boolean).join('\n'),
      `Bug ${i + 1} of ${unique.length}`,
    );

    const dup = dedupeAgainstZoho({ title: r.title, module: r.module, testId: r.testId, errorFirstLine }, openIssues);
    if (dup) {
      p.log.info(`Likely duplicate of existing issue "${dup.name}" (#${dup.id}) — skipping creation. File manually if this is actually a new defect.`);
      duplicates++;
      continue;
    }

    const action = await p.select({
      message: 'What to do with this failure?',
      options: [
        { value: 'file',     label: 'File bug in Zoho' },
        { value: 'skip',     label: 'Skip' },
        { value: 'stop',     label: 'Stop — done for now' },
      ],
    });
    if (p.isCancel(action) || action === 'stop') break;
    if (action === 'skip') { skipped++; continue; }

    const severity = classifySeverity(r);

    const title = `[QA-Auto] ${r.title.slice(0, 180)}`;
    const description =
      `**Environment:** ${baseUrl}  \n` +
      `**Browser:** ${browser}  \n` +
      `**Module:** ${r.module}  \n` +
      `**Severity:** ${severity}  \n` +
      `**Reproducibility:** ${reproducibility(r) === 'unknown' ? 'Unknown' : 'Always'}  \n\n` +
      `**Steps to Reproduce:**  \n` +
      `Derived from spec: \`${r.title}\`  \n\n` +
      `**Error:**  \n\`\`\`\n${(r.error ?? r.status).slice(0, 2000)}\n\`\`\`  \n` +
      (r.screenshotPath ? `\n**Screenshot:** ${r.screenshotPath}` : '');

    const spin = p.spinner();
    spin.start('Filing bug in Zoho…');
    try {
      await callZohoMcp(
        'ZohoProjects_create_issue',
        { portal_id: portalId, project_id: projectId },
        {},
        { title, description, severity, classification: 'Bug', status: 'Open' },
      );
      spin.stop(`Bug filed: ${title.slice(0, 60)}…`);
      filed++;
    } catch (e: unknown) {
      spin.stop('Failed to file bug');
      p.log.error((e as Error).message);
    }
  }

  console.log('');
  p.note(
    `Filed: ${filed}  |  Duplicate (skipped): ${duplicates}  |  Skipped: ${skipped}  |  Flaky (not filed): ${flakyExcluded}  |  Reportable total: ${unique.length}`,
    'Bug report summary',
  );
}

// ─── Shared pipeline sub-steps ────────────────────────────────────────────────

async function runTestCaseGeneration(backend: AIBackend, reqFile: string, ts: number): Promise<string | null> {
  const spin = p.spinner();
  spin.start('Generating test cases…');
  const systemPrompt = loadAgentPrompt('test-case-generator.agent.md');
  const reqJson = fs.readFileSync(reqFile, 'utf8');
  let casesText: string;
  const accountCtx = loadAccountContext();
  const accountNote = accountCtx ? `\n\n<test-accounts>\n${accountCtx}\n</test-accounts>` : '';
  const userMessage = `Generate test cases for these requirements. Return ONLY the JSON array — no prose, no file writes:\n\n${reqJson}${accountNote}`;
  try {
    casesText = await aiChat(backend, systemPrompt, userMessage, s => spin.message(`Generating test cases… ${s}`), false, STAGE_MODELS.testCaseGeneration);
  } catch (e: unknown) {
    spin.stop('Test case generation failed');
    p.log.error((e as Error).message);
    return null;
  }
  const validated = await parseAndValidate<unknown[]>(
    backend, systemPrompt, casesText, testCasesSchema, 'test-cases',
    s => spin.message(`Generating test cases… correcting invalid JSON… ${s}`),
    userMessage, STAGE_MODELS.testCaseGeneration,
  );
  if (!validated.ok) {
    spin.stop('Test case generation failed (invalid JSON after retries)');
    p.log.error(`Test cases did not pass schema validation after retries (${validated.reason}) — raw response saved to ${validated.rawFile}`);
    return null;
  }
  // moduleCode is fully derivable from id (TC-<moduleCode>-<NNN>) and taskId is constant across
  // every case in a single-task run — both are pipeline-computed rather than trusted from the
  // model, so the agent prompt no longer needs to ask for them (cheaper output, no correctness
  // dependency on the model getting a purely mechanical value right).
  const reqParsed: unknown = JSON.parse(reqJson);
  const reqArray = Array.isArray(reqParsed) ? reqParsed : [reqParsed];
  const singleTaskId = reqArray.length === 1 ? (reqArray[0] as Record<string, unknown>)?.['taskId'] as string | null ?? null : null;

  const cases = (validated.data as unknown as Record<string, unknown>[]).map(c => {
    const moduleCode = String(c['id'] ?? '').match(/^TC-([A-Z]+)-/)?.[1];
    return {
      ...c,
      ...(moduleCode ? { moduleCode } : {}),
      ...(singleTaskId ? { taskId: singleTaskId } : {}),
    };
  }) as unknown as MinimalTestCase[];
  spin.stop(`${cases.length} test case(s) generated`);

  const existingFiles = fs.existsSync(CASES_DIR)
    ? fs.readdirSync(CASES_DIR).filter(f => f.startsWith('cases-') && f.endsWith('.json'))
      .map(f => path.join(CASES_DIR, f))
      .map(f => {
        try { return { file: f, cases: JSON.parse(fs.readFileSync(f, 'utf8')) as MinimalTestCase[] }; }
        catch { return { file: f, cases: [] as MinimalTestCase[] }; }
      })
      .filter(entry => Array.isArray(entry.cases))
    : [];
  const duplicates = findDuplicateTestCases(cases, existingFiles);
  if (duplicates.length) {
    p.note(
      duplicates.slice(0, 10).map(d =>
        `${d.newCase.id} ~ ${d.existingCase.id} (${path.basename(d.existingFile)}, ${(d.similarity * 100).toFixed(0)}% similar)\n  "${d.newCase.title}"`,
      ).join('\n\n') + (duplicates.length > 10 ? `\n…and ${duplicates.length - 10} more` : ''),
      `${duplicates.length} likely duplicate(s) of previously generated cases`,
    );
    const proceed = await p.confirm({ message: 'Likely-duplicate test cases detected — generate automation for all of them anyway?', initialValue: false });
    if (p.isCancel(proceed) || !proceed) {
      const casesFile = path.join(CASES_DIR, `cases-${ts}.json`);
      fs.writeFileSync(casesFile, JSON.stringify(cases, null, 2));
      p.note(casesFile, 'cases JSON (saved — review/dedupe before generating automation)');
      p.log.warn('Stopping before automation generation — re-run Option 4 once the cases file has been reviewed.');
      return null;
    }
  }

  const casesFile = path.join(CASES_DIR, `cases-${ts}.json`);
  fs.writeFileSync(casesFile, JSON.stringify(cases, null, 2));
  p.note(casesFile, 'cases JSON');

  // Export to Excel → reports/excel/ (non-blocking; next pipeline step doesn't need this file)
  runBackground('Exporting test cases to Excel…', `npm run report:excel -- --mode=test-cases --input="${casesFile}"`);
  const latestXlsx = latestFile(EXCEL_DIR, 'test-cases', '.xlsx');
  if (latestXlsx) p.note(latestXlsx, 'Excel');
  return casesFile;
}

async function runAutomationGeneration(backend: AIBackend, casesFile: string): Promise<AIFile[]> {
  const spin = p.spinner();
  spin.start('Generating Playwright automation…');
  const systemPrompt = loadSkillPrompt('playwright-e2e-generator');
  const allCases = JSON.parse(fs.readFileSync(casesFile, 'utf8')) as Record<string, unknown>[];
  // automatable:false cases (MFA, physical hardware, human-judgment — see test-case-generator.agent.md)
  // are manual-only by design; the automation-generator prompt has no concept of this field, so they
  // must be filtered out here rather than relying on the model to skip them itself.
  const automatableCases = allCases.filter(c => c['automatable'] !== false);
  const nonAutomatable = allCases.length - automatableCases.length;
  if (nonAutomatable) p.log.info(`${nonAutomatable} case(s) marked automatable:false — excluded from automation generation`);
  const casesJson = JSON.stringify(automatableCases, null, 2);
  let automationFiles: AIFile[] = [];
  try {
    automationFiles = await aiGenerateAutomation(backend, systemPrompt, casesJson, s => spin.message(`Generating Playwright automation… ${s}`), STAGE_MODELS.automationGeneration);
  } catch (e: unknown) {
    spin.stop('Automation generation failed');
    p.log.error((e as Error).message);
    return [];
  }

  let written = 0;
  const skipped: string[] = [];
  for (const f of automationFiles) {
    const abs = path.join(ROOT, f.path);
    if (fs.existsSync(abs)) { skipped.push(f.path); continue; }
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, f.content);
    written++;
  }
  spin.stop(`${written} file(s) written${skipped.length ? `, ${skipped.length} skipped (already exist)` : ''}`);
  if (skipped.length) p.note(skipped.join('\n'), 'Skipped — already exist (review manually)');

  const checkSpin = p.spinner();
  checkSpin.start('Running TypeScript check and lint…');
  const [{ ok: tscOk, stderr: tscErr }, { ok: lintOk, stdout: lintOut, stderr: lintErr }] = await Promise.all([
    runAsync('npx tsc --noEmit'),
    runAsync('npm run lint:tests'),
  ]);
  checkSpin.stop(`TypeScript ${tscOk ? 'OK' : 'FAILED'} / Lint ${lintOk ? 'OK' : 'FAILED'}`);
  if (!tscOk) p.log.error('TypeScript errors:\n' + tscErr.split('\n').slice(0, 8).join('\n'));
  if (!lintOk) p.log.error('qa-conventions lint violations:\n' + (lintOut || lintErr).split('\n').slice(0, 15).join('\n'));

  if (!tscOk || !lintOk) {
    const proceedAnyway = await p.confirm({
      message: 'TypeScript and/or lint issues found in generated automation — run tests anyway?',
      initialValue: false,
    });
    if (p.isCancel(proceedAnyway) || !proceedAnyway) {
      p.log.warn('Stopping — fix the issues above (or run `npm run lint:tests -- --update-baseline` if intentional) and re-run automation generation.');
      return [];
    }
  }

  return automationFiles;
}

async function runPlaywrightTests(automationFiles: AIFile[]): Promise<boolean> {
  const browser = await p.select({
    message: 'Browser',
    options: [
      { value: 'chromium', label: 'Chromium' },
      { value: 'firefox', label: 'Firefox' },
      { value: 'webkit',  label: 'WebKit' },
    ],
  });
  if (p.isCancel(browser)) return true;

  const mode = await p.select({
    message: 'Mode',
    options: [
      { value: 'headless', label: 'Headless (fast)' },
      { value: 'headed',   label: 'Headed (show browser)' },
    ],
  });
  if (p.isCancel(mode)) return true;

  const workers = await p.select({
    message: 'Workers',
    options: [
      { value: '1', label: '1 (sequential — easier to debug)' },
      { value: '2', label: '2' },
      { value: '4', label: '4 (fast)' },
    ],
  });
  if (p.isCancel(workers)) return true;

  const specDirs = [...new Set(
    automationFiles.filter(f => f.path.includes('tests/e2e/')).map(f => path.dirname(f.path))
  )];
  const target = specDirs.length === 1 ? specDirs[0] : '';
  const cmd = `npx playwright test --config=tests/playwright.config.ts --project=${browser} --workers=${workers}${mode === 'headed' ? ' --headed' : ''} ${target}`.trim();

  fs.mkdirSync(path.join(REPORTS_DIR, 'results'), { recursive: true });
  const { ok: initialOk } = run('Running Playwright tests…', cmd);

  // A failure backed by only one attempt has "Unknown" reproducibility (per
  // bug-reporter.agent.md) — re-run it once more so it resolves to either
  // "Always" (safe to file) or flaky-and-passing (excluded), never filed on
  // a single data point.
  if (!initialOk) {
    await forceRetrySingleAttemptFailures(String(browser));
  }

  const finalOk = readReportableResults().length === 0;

  if (finalOk) {
    p.log.success(initialOk ? 'All tests passed!' : 'All tests passed! (initial failures were confirmed flaky on forced retry)');
  } else {
    p.log.warn('Some tests failed — results saved to reports/results/results.json');
  }

  // Export results to Excel (non-blocking; bug reporter reads results.json, not the xlsx)
  if (fs.existsSync(RESULTS_JSON)) {
    runBackground('Exporting results to Excel…', 'npm run report:excel -- --mode=results');
  }

  return finalOk;
}

/** Read results.json and return the currently-reportable (non-flaky, still-failing) results, or [] if the file is missing/unparsable. */
function readReportableResults() {
  if (!fs.existsSync(RESULTS_JSON)) return [];
  try {
    const { results } = parsePlaywrightResults(JSON.parse(fs.readFileSync(RESULTS_JSON, 'utf8')));
    return results.filter(isReportable);
  } catch {
    return [];
  }
}

/**
 * Re-run any failure that only had a single attempt (Playwright's own retry
 * didn't kick in — e.g. a worker crash, or a manual --retries=0 override) and
 * merge the extra attempt back into results.json before bug filing sees it.
 */
async function forceRetrySingleAttemptFailures(browser: string): Promise<void> {
  if (!fs.existsSync(RESULTS_JSON)) return;
  let data: unknown;
  try { data = JSON.parse(fs.readFileSync(RESULTS_JSON, 'utf8')); } catch { return; }
  const { results } = parsePlaywrightResults(data);
  const needsRetry = results.filter(r => (r.status === 'failed' || r.status === 'timedOut') && r.retryCount === 0);
  if (!needsRetry.length) return;

  p.log.info(`${needsRetry.length} failure(s) had only a single attempt — re-running once to confirm reproducibility before bug filing…`);
  const grepPattern = needsRetry.map(r => r.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const cmd = `npx playwright test --config=tests/playwright.config.ts --project=${browser} --grep "${grepPattern}" --reporter=json`;
  const { stdout } = run('Confirming reproducibility (forced retry)…', cmd);

  let retryData: unknown;
  try { retryData = JSON.parse(stdout); } catch {
    p.log.warn('Could not parse forced-retry output — these failure(s) remain "Unknown" reproducibility; review manually before filing.');
    return;
  }

  mergeRetryAttempts(data as Record<string, unknown>, retryData as Record<string, unknown>);
  fs.writeFileSync(RESULTS_JSON, JSON.stringify(data, null, 2));
  p.log.success('Forced retry complete — results.json updated with confirmed reproducibility.');
}

/** Append the retry run's attempt(s) onto the matching (by spec title) test entries in the original results tree. */
function mergeRetryAttempts(original: Record<string, unknown>, retry: Record<string, unknown>): void {
  const retryByTitle = new Map<string, Record<string, unknown>>();
  const indexSuite = (suite: Record<string, unknown>): void => {
    for (const s of (suite['suites'] as Record<string, unknown>[]) ?? []) indexSuite(s);
    for (const spec of (suite['specs'] as Record<string, unknown>[]) ?? []) {
      for (const t of (spec['tests'] as Record<string, unknown>[]) ?? []) {
        retryByTitle.set(String(spec['title']), t);
      }
    }
  };
  for (const s of (retry['suites'] as Record<string, unknown>[]) ?? []) indexSuite(s);

  const walkSuite = (suite: Record<string, unknown>): void => {
    for (const s of (suite['suites'] as Record<string, unknown>[]) ?? []) walkSuite(s);
    for (const spec of (suite['specs'] as Record<string, unknown>[]) ?? []) {
      for (const t of (spec['tests'] as Record<string, unknown>[]) ?? []) {
        const retryTest = retryByTitle.get(String(spec['title']));
        const extraResults = (retryTest?.['results'] as Record<string, unknown>[]) ?? [];
        if (!extraResults.length) continue;
        const merged = [...((t['results'] as Record<string, unknown>[]) ?? []), ...extraResults];
        t['results'] = merged;
        t['status'] = merged.some(r => r['status'] === 'passed') ? 'flaky' : (t['status'] ?? extraResults[extraResults.length - 1]['status']);
      }
    }
  };
  for (const s of (original['suites'] as Record<string, unknown>[]) ?? []) walkSuite(s);
}

// ─── Misc helpers ─────────────────────────────────────────────────────────────

async function collectManualInput(): Promise<Record<string, unknown>> {
  const feature = await p.text({
    message: 'Feature name and module',
    placeholder: 'Employee Search – Skills module',
    validate: v => (!v?.trim() ? 'Required' : undefined),
  });
  if (p.isCancel(feature)) throw new Error('Cancelled');

  const requirements = await p.text({
    message: 'Paste requirements / acceptance criteria',
    placeholder: 'As a user I can… / AC: …',
    validate: v => (!v?.trim() ? 'Required' : undefined),
  });
  if (p.isCancel(requirements)) throw new Error('Cancelled');

  return { id: `MANUAL-${Date.now()}`, name: String(feature), description: String(requirements), status: 'open', priority: 'high', assignee: '', tags: [], source: 'manual' };
}

// ─── Main loop ────────────────────────────────────────────────────────────────

async function main() {
  console.clear();
  p.intro(' SIM ERP — QA Pipeline Orchestrator ');

  // Status checks
  if (!process.env.BASE_URL || process.env.BASE_URL.includes('example.com'))
    p.log.warn('BASE_URL not set in .env');
  if (!isZohoConfigured())
    p.log.info('Zoho not configured — task fetch and bug reporting unavailable (Options 2/5 and the taskids path in Option 1)');

  const catalogPath = path.join(REPORTS_DIR, 'knowledge-base', 'edge-cases-catalog.json');
  if (fs.existsSync(catalogPath)) {
    try {
      const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
      if (catalog.lastUpdateMethod === 'cli-fallback-shallow') {
        p.log.warn('Knowledge base was last updated via the CLI fallback (shallow) — entries are unclassified/unenriched. Run the knowledge-base-curator agent before trusting KB-derived business rules or test cases.');
      }
    } catch { /* ignore unparsable catalog */ }
  }

  const bin = findClaudeBin();
  const hasKey = !!process.env.ANTHROPIC_API_KEY && process.env.ANTHROPIC_API_KEY !== 'your_anthropic_api_key_here';
  if (bin)     p.log.info('AI backend: Claude Code CLI (no API key needed)');
  else if (hasKey) p.log.info('AI backend: Anthropic SDK');
  else         p.log.warn('AI backend: none — Options 1–4 will fail. Install Claude Code extension or set ANTHROPIC_API_KEY.');

  while (true) {
    const action = await p.select({
      message: 'Choose an option',
      options: [
        { value: '1', label: '1.  Run Full Pipeline',             hint: 'task IDs or doc → analysis → test cases → scripts → run → bugs' },
        { value: '2', label: '2.  Fetch & Analyze',               hint: 'tasks by ID / list / filter  OR  issues by status  →  AI analysis' },
        { value: '3', label: '3.  Create Test Cases',             hint: 'requirements JSON  →  cases JSON + Excel' },
        { value: '4', label: '4.  Generate & Run Playwright',     hint: 'cases JSON  →  scripts  →  run  →  results Excel' },
        { value: '5', label: '5.  Report Bugs to Zoho',           hint: 'results.json  →  confirm each bug  →  file in Zoho' },
        { value: '6', label: '6.  Exit' },
      ],
    });

    if (p.isCancel(action) || action === '6') { p.outro('Done.'); break; }

    let next: string = action as string;

    while (next !== 'menu' && next !== 'exit') {
      console.log('');
      if      (next === '1') { await option1FullPipeline();      next = await askWhatNext(1); }
      else if (next === '2') { await option2FetchAndAnalyze();   next = await askWhatNext(2); }
      else if (next === '3') { await option3CreateTestCases();   next = await askWhatNext(3); }
      else if (next === '4') { await option4GenerateAndRun();    next = await askWhatNext(4); }
      else if (next === '5') { await option5ReportBugs();        next = await askWhatNext(5); }
      else break;
    }

    if (next === 'exit') { p.outro('Done.'); break; }
    // next === 'menu' → fall through to outer loop, show main menu again
    console.log('');
  }
}

async function askWhatNext(from: number): Promise<string> {
  const opts: Array<{ value: string; label: string; hint?: string }> = [];
  if (from === 2) opts.push({ value: '3', label: '3.  Create Test Cases',         hint: 'requirements JSON → cases JSON + Excel' });
  if (from <= 3)  opts.push({ value: '4', label: '4.  Generate & Run Playwright', hint: 'cases JSON → scripts → run → results Excel' });
  if (from <= 4)  opts.push({ value: '5', label: '5.  Report Bugs to Zoho',       hint: 'results.json → confirm each bug → file in Zoho' });
  opts.push({ value: 'menu', label: '    ↩  Back to main menu' });
  opts.push({ value: 'exit', label: '    ✕  Exit' });

  const next = await p.select({ message: 'What next?', options: opts });
  if (p.isCancel(next)) return 'exit';
  return next as string;
}

main().catch(err => { p.log.error(err?.message ?? String(err)); process.exit(1); });
