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
const AGENTS_DIR  = path.join(ROOT, '.github', 'agents');
const SKILLS_DIR  = path.join(ROOT, '.github', 'skills');

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
): Promise<string> {
  if (backend.type === 'cli') {
    const tmpSys = path.join(os.tmpdir(), `simerp-sys-${Date.now()}.txt`);
    fs.writeFileSync(tmpSys, systemPrompt, 'utf8');
    return new Promise<string>((resolve, reject) => {
      const proc = spawn(
        backend.bin,
        ['--print', '--dangerously-skip-permissions', '--system-prompt-file', tmpSys, '--output-format', 'text', userMessage],
        { shell: false, cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'], env: { ...process.env, TERM: 'dumb' } },
      );
      let stdout = '';
      let stderr = '';
      const start = Date.now();
      const timer = onTick
        ? setInterval(() => onTick(`${Math.round((Date.now() - start) / 1000)}s`), 1000)
        : null;
      const timeout = setTimeout(() => {
        proc.kill('SIGTERM');
        reject(new Error('Claude CLI timed out after 4 minutes — try a shorter input or check your connection'));
      }, 4 * 60 * 1000);
      proc.stdout?.on('data', (d: Buffer) => { stdout += d.toString(); });
      proc.stderr?.on('data', (d: Buffer) => { stderr += d.toString(); });
      proc.on('close', (code: number | null) => {
        if (timer) clearInterval(timer);
        clearTimeout(timeout);
        fs.rmSync(tmpSys, { force: true });
        if ((code ?? 1) !== 0) reject(new Error(`[exit ${code}] ${stderr.trim() || '(no stderr)'}`));
        else resolve(stdout.trim());
      });
    });
  }
  const msg = await backend.client.messages.create({
    model: 'claude-sonnet-4-6', max_tokens: 8192,
    system: systemPrompt,
    messages: [{ role: 'user', content: userMessage }],
  });
  return msg.content[0].type === 'text' ? msg.content[0].text : '';
}

async function aiGenerateAutomation(backend: AIBackend, systemPrompt: string, casesJson: string, onTick?: (s: string) => void): Promise<AIFile[]> {
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
      model: 'claude-sonnet-4-6', max_tokens: 16000, system: systemPrompt,
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
  const response = await aiChat(backend, augmented, `Generate page objects and spec files:\n\n${casesJson}`, onTick);
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
  const res = await axios.post(
    mcpUrl,
    { jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: tool, arguments: args } },
    { headers: { 'Content-Type': 'application/json' }, timeout: 30_000 },
  );
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
  try {
    const input = tasks.length === 1
      ? JSON.stringify(tasks[0], null, 2)
      : JSON.stringify(tasks, null, 2);
    reqText = await aiChat(
      backend, systemPrompt,
      `Analyze ${tasks.length > 1 ? 'these tasks' : 'this task'} and return structured requirements JSON:\n\n${input}`,
      s => spin.message(`${label}… ${s}`),
    );
  } catch (e: unknown) {
    spin.stop(`${label} — failed`);
    throw e;
  }
  let requirements: unknown;
  try { requirements = extractJson(reqText); } catch { requirements = { raw: reqText }; }
  const reqFile = saveJson(CASES_DIR, 'requirements', requirements);
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
      const all = await fetchAllTasks(200);
      for (const id of ids) {
        const target = id.toUpperCase();
        const found = all.find(t =>
          String(t['id']) === target ||
          String(t['prefix']).toUpperCase() === target ||
          String(t['name']).toUpperCase().includes(target),
        );
        if (found) taskRecords.push(found);
        else p.log.warn(`Task "${id}" not found — skipping`);
      }
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
  const reportBugs = await p.confirm({ message: 'Report bugs to Zoho after test run? (Option 5)' });
  if (p.isCancel(reportBugs)) return;

  let backend: AIBackend;
  try { backend = resolveAIBackend(); } catch (e: unknown) { p.log.error((e as Error).message); return; }
  p.log.info(`AI: ${backend.type === 'cli' ? 'Claude Code CLI' : 'Anthropic SDK'}`);

  const ts = Date.now();
  fs.mkdirSync(CASES_DIR, { recursive: true });
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
        const all = await fetchAllTasks(200);
        items = ids.flatMap(id =>
          all.filter(t =>
            String(t['id']) === id ||
            String(t['prefix']).toUpperCase() === id ||
            String(t['name']).toUpperCase().includes(id),
          )
        );
        // deduplicate
        const seen = new Set<string>();
        items = items.filter(t => { const k = String(t['id']); if (seen.has(k)) return false; seen.add(k); return true; });
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
        for (const tlId of selected as string[]) {
          const data = await callZohoMcp(
            'ZohoProjects_get_tasks_by_project',
            { portal_id: portalId, project_id: projectId },
            { tasklist_id: tlId, per_page: 100 },
          ) as Record<string, unknown>;
          const raw: Record<string, unknown>[] = Array.isArray(data['tasks']) ? data['tasks'] as Record<string, unknown>[] : [];
          items.push(...raw.map(normalizeTask));
        }
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
  const rawFile = saveJson(CASES_DIR, `${type}-fetched`, items);
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
  const autoReq = latestFile(CASES_DIR, 'requirements');
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

  const results = JSON.parse(fs.readFileSync(RESULTS_JSON, 'utf8'));

  // Collect unique failures from Playwright JSON reporter format
  interface Failure { title: string; error: string; browser: string; screenshot?: string; }
  const failures: Failure[] = [];
  const seen = new Set<string>();

  function collectFromSuites(suites: unknown[]): void {
    for (const suite of suites) {
      const s = suite as Record<string, unknown>;
      if (Array.isArray(s['suites'])) collectFromSuites(s['suites'] as unknown[]);
      if (Array.isArray(s['specs'])) {
        for (const spec of s['specs'] as Record<string, unknown>[]) {
          const tests = (spec['tests'] as Record<string, unknown>[]) ?? [];
          for (const test of tests) {
            const results2 = (test['results'] as Record<string, unknown>[]) ?? [];
            for (const r of results2) {
              if (r['status'] !== 'failed' && r['status'] !== 'timedOut') continue;
              const title = String(spec['title'] ?? test['title'] ?? 'Unknown');
              const error = String((r['error'] as Record<string, unknown>)?.['message'] ?? r['status']);
              const key = `${title}|${error.slice(0, 80)}`;
              if (seen.has(key)) continue;
              seen.add(key);
              const attachments = (r['attachments'] as Record<string, unknown>[]) ?? [];
              const screenshot = attachments.find(a => String(a['name']).includes('screenshot'))?.['path'] as string | undefined;
              failures.push({ title, error, browser: String(test['projectName'] ?? 'chromium'), screenshot });
            }
          }
        }
      }
    }
  }

  collectFromSuites(results.suites ?? []);

  if (!failures.length) {
    p.log.success('No failures found in results.json — nothing to report!');
    return;
  }

  p.log.info(`Found ${failures.length} unique failure(s) to review.`);
  if (!skipConfirm) {
    const proceed = await p.confirm({ message: `Review and file up to ${failures.length} bug(s) in Zoho?` });
    if (p.isCancel(proceed) || !proceed) return;
  }

  const { portalId, projectId } = portalAndProject();
  const baseUrl = process.env.BASE_URL ?? '';
  let filed = 0, skipped = 0;

  for (let i = 0; i < failures.length; i++) {
    const f = failures[i];
    console.log('');
    p.note(
      [
        `Test  : ${f.title}`,
        `Browser: ${f.browser}`,
        `Error : ${f.error.split('\n')[0].slice(0, 120)}`,
        f.screenshot ? `Screenshot: ${f.screenshot}` : '',
      ].filter(Boolean).join('\n'),
      `Bug ${i + 1} of ${failures.length}`,
    );

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

    // Determine severity
    const isSmoke = /smoke/i.test(f.title) || /login|auth/i.test(f.title);
    const isFunctional = /functional/i.test(f.title);
    const severity = isSmoke ? 'Critical' : isFunctional ? 'Major' : 'Minor';

    const title = `[QA-Auto] ${f.title.slice(0, 180)}`;
    const description =
      `**Environment:** ${baseUrl}  \n` +
      `**Browser:** ${f.browser}  \n` +
      `**Severity:** ${severity}  \n\n` +
      `**Steps to Reproduce:**  \n` +
      `Derived from spec: \`${f.title}\`  \n\n` +
      `**Error:**  \n\`\`\`\n${f.error.slice(0, 2000)}\n\`\`\`  \n` +
      (f.screenshot ? `\n**Screenshot:** ${f.screenshot}` : '');

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
  p.note(`Filed: ${filed}  |  Skipped: ${skipped}  |  Total: ${failures.length}`, 'Bug report summary');
}

// ─── Shared pipeline sub-steps ────────────────────────────────────────────────

async function runTestCaseGeneration(backend: AIBackend, reqFile: string, ts: number): Promise<string | null> {
  const spin = p.spinner();
  spin.start('Generating test cases…');
  const systemPrompt = loadAgentPrompt('test-case-generator.agent.md');
  const reqJson = fs.readFileSync(reqFile, 'utf8');
  let casesText: string;
  try {
    casesText = await aiChat(
      backend, systemPrompt,
      `Generate test cases for these requirements:\n\n${reqJson}`,
      s => spin.message(`Generating test cases… ${s}`),
    );
  } catch (e: unknown) {
    spin.stop('Test case generation failed');
    p.log.error((e as Error).message);
    return null;
  }
  let cases: unknown;
  try { cases = extractJson(casesText); } catch { cases = []; p.log.warn('Could not parse JSON response — empty cases saved.'); }

  const casesFile = path.join(CASES_DIR, `cases-${ts}.json`);
  fs.writeFileSync(casesFile, JSON.stringify(cases, null, 2));
  spin.stop(`${Array.isArray(cases) ? cases.length : '?'} test cases generated`);
  p.note(casesFile, 'cases JSON');

  // Export to Excel via excel-reporter skill
  run('Exporting test cases to Excel…', `npm run report:excel -- --mode=test-cases --input="${casesFile}"`);
  return casesFile;
}

async function runAutomationGeneration(backend: AIBackend, casesFile: string): Promise<AIFile[]> {
  const spin = p.spinner();
  spin.start('Generating Playwright automation…');
  const systemPrompt = loadSkillPrompt('playwright-e2e-generator');
  const casesJson = fs.readFileSync(casesFile, 'utf8');
  let automationFiles: AIFile[] = [];
  try {
    automationFiles = await aiGenerateAutomation(backend, systemPrompt, casesJson, s => spin.message(`Generating Playwright automation… ${s}`));
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

  const { ok, stderr } = run('TypeScript check…', 'npx tsc --noEmit');
  if (!ok) { p.log.warn('TypeScript errors — review before running tests:\n' + stderr.split('\n').slice(0, 5).join('\n')); }

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
  const { ok } = run('Running Playwright tests…', cmd);

  if (ok) {
    p.log.success('All tests passed!');
  } else {
    p.log.warn('Some tests failed — results saved to reports/results/results.json');
  }

  // Export results to Excel
  if (fs.existsSync(RESULTS_JSON)) {
    run('Exporting results to Excel…', 'npm run report:excel -- --mode=results');
  }

  return ok;
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
  if (!process.env.ZOHO_PORTAL_ID || !process.env.ZOHO_PROJECT_ID)
    p.log.warn('ZOHO_PORTAL_ID / ZOHO_PROJECT_ID not set in .env (needed for Options 1, 2, 5)');

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
