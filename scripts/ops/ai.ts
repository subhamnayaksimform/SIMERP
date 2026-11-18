/**
 * The ONLY Claude entry point of the ops dashboard. Everything else (sync, health, test runs,
 * Zoho writes) works without it — scripts/ops/check-deps.js enforces that no other ops file
 * reaches Claude. Uses the Claude Code CLI with the user's own login (no API key), headless:
 *   claude --print --output-format stream-json --verbose --allowedTools … < prompt
 *
 * Claude never writes to Zoho from here: activities that change Zoho end in "needs approval",
 * and the user applies the change from the dashboard's confirm dialog.
 */

import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { spawn, execFileSync } from 'child_process';
import { ROOT } from './store';

/** Newest Claude Code binary: VS Code extension → PATH → ~/.local/bin. */
export function findClaude(): string | null {
  const exts = path.join(os.homedir(), '.vscode', 'extensions');
  if (fs.existsSync(exts)) {
    const dirs = fs.readdirSync(exts).filter(d => d.startsWith('anthropic.claude-code-')).sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
    for (const d of dirs) {
      const bin = path.join(exts, d, 'resources', 'native-binary', process.platform === 'win32' ? 'claude.exe' : 'claude');
      if (fs.existsSync(bin)) return bin;
    }
  }
  try { return execFileSync('which', ['claude'], { encoding: 'utf8' }).trim() || null; } catch { /* not on PATH */ }
  const local = path.join(os.homedir(), '.local', 'bin', 'claude');
  return fs.existsSync(local) ? local : null;
}

let statusCache: { at: number; data: { available: boolean; bin: string | null; version: string } } | null = null;
export function claudeStatus() {
  if (statusCache && Date.now() - statusCache.at < 10 * 60_000) return statusCache.data;
  const bin = findClaude();
  let version = '';
  if (bin) try { version = execFileSync(bin, ['--version'], { encoding: 'utf8', timeout: 15_000 }).trim(); } catch { /* broken install */ }
  statusCache = { at: Date.now(), data: { available: Boolean(bin && version), bin, version } };
  return statusCache.data;
}

/** Tools Claude may use in ops activities: read/edit files, and run only Playwright / tsc / the case renderer. */
export const QA_TOOLS = [
  'Read', 'Glob', 'Grep', 'Write', 'Edit',
  'Bash(npx playwright test:*)', 'Bash(npx tsc --noEmit:*)', 'Bash(npm run report:md:*)',
];

export interface ClaudeRun { text: string; ok: boolean; costUsd?: number; turns?: number }

/**
 * Run one Claude prompt to completion, streaming a readable progress line for every step
 * (text, tool use) to `onLine`. `onSpawn` gets the pid so the activity can be stopped.
 */
export function runClaude(prompt: string, opts: { tools?: string[]; onLine: (line: string) => void; onSpawn?: (pid: number) => void; model?: string; maxTurns?: number }): Promise<ClaudeRun> {
  const bin = findClaude();
  if (!bin) return Promise.reject(new Error('Claude Code is not installed — install the Claude Code VS Code extension (or the CLI), then sign in once by running `claude` in a terminal.'));
  const args = ['--print', '--output-format', 'stream-json', '--verbose', '--allowedTools', ...(opts.tools ?? QA_TOOLS)];
  if (opts.model) args.push('--model', opts.model);
  if (opts.maxTurns) args.push('--max-turns', String(opts.maxTurns));
  // An API key in .env would make the CLI prefer key auth over the user's claude.ai login.
  const { ANTHROPIC_API_KEY, ...env } = process.env;
  return new Promise((resolve, reject) => {
    const child = spawn(bin, args, { cwd: ROOT, env: { ...env, TERM: 'dumb' }, stdio: ['pipe', 'pipe', 'pipe'], detached: true });
    if (child.pid) opts.onSpawn?.(child.pid);
    child.stdin.end(prompt);
    let buf = '', final: ClaudeRun | null = null, lastText = '', stderr = '';
    child.stdout.on('data', (d: Buffer) => {
      buf += d.toString('utf8');
      let nl: number;
      while ((nl = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, nl).trim(); buf = buf.slice(nl + 1);
        if (!line) continue;
        let ev: any; try { ev = JSON.parse(line); } catch { continue; }
        if (ev.type === 'assistant') {
          for (const c of ev.message?.content ?? []) {
            if (c.type === 'text' && c.text?.trim()) { lastText = c.text; opts.onLine(`💬 ${c.text.trim().split('\n')[0].slice(0, 300)}`); }
            if (c.type === 'tool_use') {
              const i = c.input ?? {};
              const what = i.command ?? i.file_path ?? i.pattern ?? i.path ?? '';
              opts.onLine(`🔧 ${c.name}${what ? ` · ${String(what).slice(0, 200)}` : ''}`);
            }
          }
        } else if (ev.type === 'result') {
          final = { text: String(ev.result ?? lastText), ok: !ev.is_error, costUsd: ev.total_cost_usd, turns: ev.num_turns };
        }
      }
    });
    child.stderr.on('data', (d: Buffer) => { stderr += d.toString('utf8'); });
    child.on('error', reject);
    child.on('exit', code => {
      if (final) return resolve(final);
      if (code === 0) return resolve({ text: lastText, ok: true });
      reject(new Error(`Claude exited with code ${code}${stderr ? `: ${stderr.trim().split('\n').slice(-3).join(' ')}` : ''}`));
    });
  });
}

/** The last ```json … ``` block in Claude's answer, parsed (null if none / invalid). */
export function lastJsonBlock(text: string): any | null {
  const blocks = [...text.matchAll(/```json\s*([\s\S]*?)```/g)];
  for (let i = blocks.length - 1; i >= 0; i--) { try { return JSON.parse(blocks[i][1]); } catch { /* try earlier */ } }
  return null;
}

/** Rewrite a bug report into the team's format. Text only — no tools, no Zoho access; the user reviews it. */
export async function draftBug(input: { title: string; description: string; context?: string }): Promise<{ title: string; description: string }> {
  const prompt = `Rewrite this SimERP bug report so a developer can act on it straight away. Keep every fact; do not invent steps, data or results.
Use plain sentences and these sections, each on its own line followed by its content: Environment, Steps to reproduce (numbered), Expected, Actual, Notes.
Title: one line, under 120 characters, says what is broken and where (keep any [key] prefix).

Current title: ${input.title}
Current description:
${input.description}
${input.context ? `\nExtra context (test failure / run data):\n${input.context.slice(0, 6000)}` : ''}

Answer with ONE fenced json block: {"title": "...", "description": "..."}`;
  const r = await runClaude(prompt, { tools: [], onLine: () => {}, maxTurns: 1 });
  const j = lastJsonBlock(r.text);
  if (!j?.title || !j?.description) throw new Error('Claude did not return a draft — try again');
  return { title: String(j.title).slice(0, 250), description: String(j.description) };
}

export interface ChatTurn { role: 'user' | 'assistant'; text: string }
export interface ChatAction { type: string; label?: string; [k: string]: unknown }

/**
 * The system assistant. Read-only: it may read the dashboard snapshot and the repo's test files,
 * and never touches the network, Zoho or the shell. To DO something it returns action cards,
 * which the user runs (and confirms) from the dashboard.
 */
export async function chatReply(contextFile: string, history: ChatTurn[], message: string): Promise<{ text: string; actions: ChatAction[]; costUsd?: number }> {
  const past = history.slice(-12).map(t => `${t.role === 'user' ? 'User' : 'Assistant'}: ${t.text}`).join('\n\n');
  const prompt = `You are the assistant inside the SimERP QA Ops dashboard, talking to the QA engineer who owns it.
Answer from DATA, not memory. The current dashboard data is in ${contextFile} (read it first; search it for keys). For detail you may also read the repo's test files:
reports/test-cases/*.json, docs/test-cases/*.md, docs/findings/*.md, tests/e2e/**/*.spec.ts. You cannot change anything yourself.

When the user wants something DONE, propose it as actions — the dashboard shows each as a button the user clicks and confirms. Available actions:
  {"type":"open","key":"SI4-T1549"}                                   open a task/bug
  {"type":"page","tab":"tbt|work|bugs|health|suite|runs|links|running|overview"}
  {"type":"run-tests","code":"EMPDET","caseIds":["TC-…"],"types":["smoke"],"key":"SI4-T…"}   existing tests, no Claude
  {"type":"retest","key":"SI4-I613"}                                  Claude re-tests a bug
  {"type":"pipeline","key":"SI4-T1619","instructions":"…"}            Claude writes tests for a task
  {"type":"set-status","key":"SI4-I613","status":"Closed"}            exact status name from the data
  {"type":"create-bug","title":"…","description":"…"}
Give every action a short "label". Only use keys, modules and statuses that exist in the data.

Reply in plain, short sentences (the user prefers simple language). Use "- " bullets for lists. If you propose actions, end with ONE fenced json block: {"actions":[…]}.
${past ? `\nConversation so far:\n${past}\n` : ''}
User: ${message}`;
  const r = await runClaude(prompt, { tools: ['Read', 'Grep', 'Glob'], onLine: () => {}, maxTurns: 8 });
  const j = lastJsonBlock(r.text);
  const text = r.text.replace(/```json[\s\S]*?```/g, '').trim();
  return { text, actions: Array.isArray(j?.actions) ? j.actions.slice(0, 8) : [], costUsd: r.costUsd };
}
