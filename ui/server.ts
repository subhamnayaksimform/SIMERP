/**
 * SimERP QA Workspace — local web UI for PMs and devs.
 *
 *   npm run ui          start in the background (survives closing the terminal) and open the browser
 *   npm run ui:stop     stop it            npm run ui:status   is it running?
 *   npm run ui:dev      run in the foreground (for working on the UI itself)
 *
 * Everyone runs it from their own checkout; AI steps use that person's own Claude login.
 * Listens on localhost only. Files are grouped per module (ui/indexer.ts); work buttons are
 * allow-listed jobs that run detached (ui/jobs.ts + ui/job-runner.js).
 */

import * as http from 'http';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { execFile } from 'child_process';
import { ROOT, ATTACH_DIR, LINKS_FILE, RESULTS_JSON, rel, readJson, writeJson, buildIndex, latestCases, parseResults, summarize, rowsFor } from './indexer';
import { getHistory, addHistory, startJob, stopJob, activeJob, refreshJobs, readLog, progressOf, importPastRuns, INBOX_DIR } from './jobs';

const PORT = Number(process.env.UI_PORT || 4321);
const HOST = process.env.UI_HOST || '127.0.0.1';
const PUBLIC_DIR = path.join(__dirname, 'public');
export const APP_ID = 'simerp-qa-workspace';

// ─── index cache ───

let indexCache: { at: number; data: ReturnType<typeof buildIndex> } | null = null;
function index(force = false) {
  if (force || !indexCache || Date.now() - indexCache.at > 5000) indexCache = { at: Date.now(), data: buildIndex() };
  return indexCache.data;
}

/** Newest known result for a module: a workspace run snapshot or a terminal run's results.json. */
/** Runs that really tested this module — not one that happened to include a single cross-cutting test. */
export function substantialRuns(code: string) {
  const withCode = getHistory().filter(x => x.stats?.[code] && x.resultsSnapshot);
  const max = Math.max(0, ...withCode.map(x => x.stats![code].total));
  return withCode.filter(x => x.stats![code].total >= Math.max(1, Math.ceil(max * 0.25)));
}
function lastRunFor(code: string) {
  const h = substantialRuns(code)[0];
  const cands: { at: string; file: string; source: string; historyId?: string }[] = [];
  if (h) cands.push({ at: h.finishedAt ?? h.startedAt, file: path.join(ROOT, h.resultsSnapshot!), source: 'workspace', historyId: h.id });
  if (fs.existsSync(RESULTS_JSON)) cands.push({ at: new Date(fs.statSync(RESULTS_JSON).mtimeMs).toISOString(), file: RESULTS_JSON, source: 'results.json' });
  cands.sort((a, b) => b.at.localeCompare(a.at));
  const floor = h ? Math.ceil(h.stats![code].total * 0.25) : 1;
  for (const c of cands) {
    const mine = rowsFor(parseResults(c.file).rows, code);
    if (mine.length >= floor) return { at: c.at, source: c.source, historyId: c.historyId, ...summarize(mine), failures: mine.filter(r => r.status === 'failed').slice(0, 50) };
  }
  return null;
}

// ─── setup check ───

let claudeCheck: { at: number; data: any } | null = null;
function checkClaude(): Promise<any> {
  if (claudeCheck && Date.now() - claudeCheck.at < 5 * 60_000) return Promise.resolve(claudeCheck.data);
  return new Promise(resolve => {
    const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
    execFile(npx, ['ts-node', 'scripts/pipeline-headless.ts', '--check'], { cwd: ROOT, timeout: 60_000, shell: process.platform === 'win32' }, (err, stdout) => {
      let data: any = { claudeCli: null, apiKey: false, zoho: false, error: err ? String(err.message).slice(0, 300) : undefined };
      try { data = JSON.parse(stdout.trim().split('\n').pop() || '{}'); } catch { /* keep default */ }
      claudeCheck = { at: Date.now(), data };
      resolve(data);
    });
  });
}

function readEnv(): Record<string, string> | null {
  const f = path.join(ROOT, '.env');
  if (!fs.existsSync(f)) return null;
  const out: Record<string, string> = {};
  for (const line of fs.readFileSync(f, 'utf8').split(/\r?\n/)) {
    const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/.exec(line);
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  return out;
}
const filled = (v?: string) => !!v && !/^your_|example\.com|changeme|^xxx/i.test(v);

function browsersDir(): string {
  if (process.env.PLAYWRIGHT_BROWSERS_PATH) return process.env.PLAYWRIGHT_BROWSERS_PATH;
  if (process.platform === 'win32') return path.join(process.env.LOCALAPPDATA ?? os.homedir(), 'ms-playwright');
  if (process.platform === 'darwin') return path.join(os.homedir(), 'Library', 'Caches', 'ms-playwright');
  return path.join(os.homedir(), '.cache', 'ms-playwright');
}

async function setupStatus() {
  const env = readEnv();
  const ai = await checkClaude();
  const bdir = browsersDir();
  const hasChromium = fs.existsSync(bdir) && fs.readdirSync(bdir).some(d => d.startsWith('chromium'));
  const sessions = fs.existsSync(path.join(ROOT, 'tests', 'fixtures')) ? fs.readdirSync(path.join(ROOT, 'tests', 'fixtures')).filter(f => /^storageState.*\.json$/.test(f)).length : 0;
  const node = Number(process.versions.node.split('.')[0]);
  type Item = { key: string; label: string; state: 'ok' | 'warn' | 'missing'; detail: string; fix?: string; action?: string; needed: string };
  const items: Item[] = [
    { key: 'node', label: 'Node.js', needed: 'everything', state: node >= 18 ? 'ok' : 'missing', detail: `Version ${process.versions.node}`, fix: node >= 18 ? undefined : 'Install Node.js 18 or newer from nodejs.org.' },
    {
      key: 'env', label: 'Settings file (.env)', needed: 'running tests',
      state: !env ? 'missing' : filled(env.BASE_URL) && filled(env.SIMERP_USERNAME) && filled(env.SIMERP_PASSWORD) ? 'ok' : 'warn',
      detail: !env ? 'No .env file in the project folder.' : [
        `SimERP address (BASE_URL): ${filled(env.BASE_URL) ? 'set' : 'not set'}`,
        `Test login (SIMERP_USERNAME / SIMERP_PASSWORD): ${filled(env.SIMERP_USERNAME) && filled(env.SIMERP_PASSWORD) ? 'set' : 'not set'}`,
      ].join(' · '),
      fix: !env ? 'Copy .env.example to .env in the project folder, then fill in BASE_URL, SIMERP_USERNAME and SIMERP_PASSWORD (ask the QA lead for the values).'
        : filled(env.BASE_URL) && filled(env.SIMERP_USERNAME) && filled(env.SIMERP_PASSWORD) ? undefined : 'Open .env and fill in the values marked “not set”.',
    },
    {
      key: 'ai', label: 'Claude (for writing test cases)', needed: 'writing test cases',
      state: ai.claudeCli || ai.apiKey ? 'ok' : 'missing',
      detail: ai.claudeCli ? 'Using your Claude Code login — no API key needed.' : ai.apiKey ? 'Using the ANTHROPIC_API_KEY in .env.' : 'No Claude login or API key found.',
      fix: ai.claudeCli || ai.apiKey ? undefined : 'Install Claude Code (VS Code extension or `npm i -g @anthropic-ai/claude-code`) and sign in once by running `claude` in a terminal. Or put ANTHROPIC_API_KEY in .env.',
    },
    { key: 'browsers', label: 'Test browser (Chromium)', needed: 'running tests', state: hasChromium ? 'ok' : 'missing', detail: hasChromium ? 'Installed.' : 'Not installed yet.', fix: hasChromium ? undefined : 'Press “Install” — it downloads the browser Playwright uses (about 150 MB).', action: hasChromium ? undefined : 'install-browsers' },
    { key: 'zoho', label: 'Zoho connection', needed: 'Zoho task IDs (optional)', state: ai.zoho ? 'ok' : 'warn', detail: ai.zoho ? 'Configured.' : 'Not configured — you can still upload a document or paste requirement text.', fix: ai.zoho ? undefined : 'Optional: fill the ZOHO_* values in .env to pick tasks straight from Zoho.' },
    { key: 'sessions', label: 'Saved logins', needed: 'faster first run', state: sessions ? 'ok' : 'warn', detail: sessions ? `${sessions} role login(s) saved from the last test run.` : 'None yet — the first test run logs in and saves them automatically.' },
  ];
  const blocking = items.filter(i => i.state === 'missing').length;
  return { items, blocking, warnings: items.filter(i => i.state === 'warn').length };
}

// ─── HTTP helpers ───

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.md': 'text/markdown; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.ts': 'text/plain; charset=utf-8', '.log': 'text/plain; charset=utf-8', '.csv': 'text/plain; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf', '.webm': 'video/webm', '.mp4': 'video/mp4', '.zip': 'application/zip',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};
const SERVABLE = ['reports/', 'docs/', 'tests/e2e/', 'tests/page-objects/', 'test-results/'];

/** Resolve a repo-relative path and refuse anything outside the servable folders or secret-looking. */
function safePath(p: string): string | null {
  const abs = path.resolve(ROOT, p);
  const r = rel(abs);
  if (r.startsWith('..') || !SERVABLE.some(s => r.startsWith(s))) return null;
  if (/(^|\/)\.env|storageState/i.test(r)) return null;
  return abs;
}
function send(res: http.ServerResponse, status: number, body: unknown, type = 'application/json; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  res.end(typeof body === 'string' || Buffer.isBuffer(body) ? body : JSON.stringify(body));
}
function readBody(req: http.IncomingMessage, limit = 100 * 1024 * 1024): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []; let n = 0;
    req.on('data', (c: Buffer) => { n += c.length; if (n > limit) { reject(new Error('File too large (100 MB max)')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}
const json = async (req: http.IncomingMessage) => JSON.parse((await readBody(req, 100_000)).toString() || '{}');
const safeName = (s: string) => s.replace(/[^\w.\- ()]/g, '_').replace(/^\.+/, '').slice(0, 150);

function saveUpload(dir: string, name: string, data: Buffer): string {
  fs.mkdirSync(dir, { recursive: true });
  let target = path.join(dir, name);
  if (fs.existsSync(target)) { const ext = path.extname(name); target = path.join(dir, `${path.basename(name, ext)}-${Date.now()}${ext}`); }
  fs.writeFileSync(target, data);
  return target;
}

async function preview(abs: string) {
  const ext = path.extname(abs).toLowerCase();
  if (ext === '.xlsx') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const ExcelJS = require('exceljs');
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.readFile(abs);
    const sheets: { name: string; rows: string[][]; total: number }[] = [];
    wb.eachSheet((ws: any) => {
      const rows: string[][] = [];
      ws.eachRow({ includeEmpty: false }, (row: any) => {
        if (rows.length >= 500) return;
        const vals: string[] = [];
        row.eachCell({ includeEmpty: true }, (cell: any, col: number) => { vals[col - 1] = cell.text ?? ''; });
        rows.push(Array.from(vals, v => v ?? ''));
      });
      sheets.push({ name: ws.name, rows, total: ws.actualRowCount });
    });
    return { kind: 'sheets', sheets };
  }
  if (ext === '.docx') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mammoth = require('mammoth');
    const r = await mammoth.convertToHtml({ path: abs });
    return { kind: 'html', html: String(r.value).replace(/<script[\s\S]*?<\/script>/gi, '').replace(/\son\w+="[^"]*"/gi, '') };
  }
  return null;
}

// ─── who is asking ───
// Anyone reaching the server through a proxy/share (Tailscale Serve, a tunnel) or from another
// machine is a viewer: they can look at everything but can't start jobs, upload or delete.
// The person at this computer (direct localhost request) keeps full control.
function viewerInfo(req: http.IncomingMessage): { viewer: boolean; name?: string } {
  const h = req.headers;
  const proxied = !!(h['tailscale-user-login'] || h['x-forwarded-for'] || h['x-forwarded-host'] || h['x-forwarded-proto'] || h['cf-connecting-ip']);
  const remote = req.socket.remoteAddress ?? '';
  const local = /^(::1|127\.|::ffff:127\.)/.test(remote);
  const name = (h['tailscale-user-name'] || h['tailscale-user-login']) as string | undefined;
  return { viewer: proxied || !local, name: name ? decodeURIComponent(String(name)) : undefined };
}

// ─── routes ───

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', `http://${req.headers.host}`);
  const p = url.pathname;
  let m: RegExpExecArray | null;
  try {
    const who = viewerInfo(req);
    if (req.method !== 'GET' && who.viewer) return send(res, 403, { error: 'This is a view-only demo link — you can look around, but running tests, uploading and deleting are switched off. Ask the host to do it from their computer.' });
    // Mutations only from pages this server served.
    if (req.method !== 'GET' && req.headers.origin && req.headers.origin !== `http://${req.headers.host}`) return send(res, 403, { error: 'Cross-origin request refused' });

    if (p === '/api/me') return send(res, 200, who);

    if (p === '/api/health') return send(res, 200, { app: APP_ID, pid: process.pid, root: ROOT });

    if (p === '/api/modules' && req.method === 'GET') {
      const { modules, unassigned, tasks } = index(url.searchParams.has('refresh'));
      const list = [...modules.values()].map(mod => {
        const run = lastRunFor(mod.code);
        return {
          code: mod.code, name: mod.name, group: mod.group, fileCount: mod.files.length, caseCount: mod.caseCount,
          scriptCount: mod.files.filter(f => f.stage === 'automation').length,
          taskIds: [...new Set(mod.taskIds)], lastActivity: mod.files[0]?.mtime ?? 0,
          lastRun: run && { ...run, failures: undefined },
        };
      }).sort((a, b) => a.group.localeCompare(b.group) || a.name.localeCompare(b.name));
      return send(res, 200, { modules: list, unassignedCount: unassigned.length, taskCount: tasks.length, activeJob: activeJob() });
    }

    if ((m = /^\/api\/modules\/([A-Z]{2,12})$/.exec(p)) && req.method === 'GET') {
      const mod = index().modules.get(m[1]);
      if (!mod) return send(res, 404, { error: 'This module has no files yet.' });
      refreshJobs();
      const tasks = index().tasks.filter(t => t.modules.includes(mod.code));
      const runs = getHistory().filter(h => h.code === mod.code || h.stats?.[mod.code]).slice(0, 60);
      const trendIds = substantialRuns(mod.code).map(h => h.id);
      return send(res, 200, { ...mod, tasks, runs, trendIds, lastRun: lastRunFor(mod.code) });
    }

    if ((m = /^\/api\/modules\/([A-Z]{2,12})\/cases$/.exec(p)) && req.method === 'GET') {
      const mod = index().modules.get(m[1]);
      if (!mod) return send(res, 404, { error: 'Unknown module' });
      const status = new Map<string, { status: string; at: string; error?: string }>();
      const sources = getHistory().filter(h => h.resultsSnapshot).map(h => ({ file: path.join(ROOT, h.resultsSnapshot!), at: h.finishedAt ?? h.startedAt }));
      if (fs.existsSync(RESULTS_JSON)) sources.push({ file: RESULTS_JSON, at: new Date(fs.statSync(RESULTS_JSON).mtimeMs).toISOString() });
      sources.sort((a, b) => b.at.localeCompare(a.at));
      for (const s of sources) for (const r of rowsFor(parseResults(s.file).rows, mod.code)) if (r.id && !status.has(r.id)) status.set(r.id, { status: r.status, at: s.at, error: r.error });
      return send(res, 200, latestCases(mod).map(c => ({ id: c.id, title: c.title, category: c.category, priority: c.priority, role: c.role, preconditions: c.preconditions, steps: c.steps, expected: c.expected, tags: c.tags, source: c._source, result: status.get(c.id) ?? null })));
    }

    if ((m = /^\/api\/modules\/([A-Z]{2,12})\/attachments$/.exec(p)) && req.method === 'POST') {
      const name = safeName(url.searchParams.get('name') ?? '');
      if (!name) return send(res, 400, { error: 'Missing file name' });
      const target = saveUpload(path.join(ATTACH_DIR, m[1]), name, await readBody(req));
      addHistory({ type: 'attach', label: `Attached ${path.basename(target)}`, code: m[1], status: 'done', finishedAt: new Date().toISOString(), producedFiles: [rel(target)] });
      indexCache = null;
      return send(res, 200, { path: rel(target) });
    }

    if (p === '/api/attachments' && req.method === 'DELETE') {
      const abs = safePath(url.searchParams.get('path') ?? '');
      if (!abs || !/^reports\/ui-attachments\/[A-Z]{2,12}\//.test(rel(abs)) || !fs.existsSync(abs)) return send(res, 400, { error: 'Only files you attached can be removed' });
      fs.unlinkSync(abs);
      addHistory({ type: 'detach', label: `Removed attachment ${path.basename(abs)}`, code: rel(abs).split('/')[2], status: 'done', finishedAt: new Date().toISOString() });
      indexCache = null;
      return send(res, 200, { ok: true });
    }

    // Requirement docs / pasted text for "New requirement" — held in _inbox until the job knows the module.
    if (p === '/api/inbox' && req.method === 'POST') {
      const name = safeName(url.searchParams.get('name') ?? '');
      if (!/\.(pdf|docx?|txt|md)$/i.test(name)) return send(res, 400, { error: 'Use a .pdf, .docx, .txt or .md file.' });
      const body = await readBody(req, 50 * 1024 * 1024);
      if (!body.length) return send(res, 400, { error: 'The file is empty.' });
      return send(res, 200, { path: rel(saveUpload(INBOX_DIR, `${Date.now()}-${name}`, body)) });
    }

    if (p === '/api/tasks' && req.method === 'GET') {
      const { tasks, modules } = index(url.searchParams.has('refresh'));
      return send(res, 200, { tasks, modules: [...modules.values()].map(x => ({ code: x.code, name: x.name })) });
    }
    if ((m = /^\/api\/tasks\/(\w+)\/links$/.exec(p)) && req.method === 'POST') {
      const body = await json(req);
      const code = String(body.code ?? '');
      if (!/^[A-Z]{2,12}$/.test(code)) return send(res, 400, { error: 'Bad module code' });
      const links = readJson<Record<string, string[]>>(LINKS_FILE, {});
      const set = new Set(links[m[1]] ?? []);
      if (body.remove) set.delete(code); else set.add(code);
      links[m[1]] = [...set];
      writeJson(LINKS_FILE, links);
      addHistory({ type: 'link', label: `${body.remove ? 'Unlinked' : 'Linked'} task ${m[1]} ${body.remove ? 'from' : 'to'} ${code}`, code, status: 'done', finishedAt: new Date().toISOString() });
      indexCache = null;
      return send(res, 200, { ok: true });
    }

    if (p === '/api/latest-report' && req.method === 'GET') {
      const dir = path.join(ROOT, 'reports', 'html');
      const f = (fs.existsSync(dir) ? fs.readdirSync(dir) : []).filter(n => /^qa-report-.*\.html$/.test(n))
        .map(n => ({ n, t: fs.statSync(path.join(dir, n)).mtimeMs })).sort((x, y) => y.t - x.t)[0];
      return send(res, 200, { path: f ? `reports/html/${f.n}` : null });
    }

    if (p === '/api/unassigned' && req.method === 'GET') return send(res, 200, index().unassigned.sort((a, b) => b.mtime - a.mtime));
    if (p === '/api/setup' && req.method === 'GET') { if (url.searchParams.has('refresh')) claudeCheck = null; return send(res, 200, await setupStatus()); }

    if (p === '/api/history' && req.method === 'GET') { refreshJobs(); return send(res, 200, getHistory()); }
    if ((m = /^\/api\/history\/([\w-]+)$/.exec(p)) && req.method === 'GET') {
      refreshJobs();
      const h = getHistory().find(x => x.id === m![1]);
      if (!h) return send(res, 404, { error: 'Not found' });
      const { log, size } = readLog(h, Number(url.searchParams.get('since') ?? 0));
      const failures = h.resultsSnapshot ? parseResults(path.join(ROOT, h.resultsSnapshot)).rows.filter(r => r.status === 'failed' && (!h.code || r.id?.startsWith(`TC-${h.code}-`))).slice(0, 100) : [];
      return send(res, 200, { ...h, log, logSize: size, failures, progress: progressOf(h) });
    }

    if (p === '/api/jobs' && req.method === 'POST') {
      const body = await json(req);
      const r = startJob(String(body.action ?? ''), body);
      indexCache = null;
      return typeof r === 'object' ? send(res, 200, r) : send(res, 409, { error: r });
    }
    if (p === '/api/import-past-runs' && req.method === 'POST') {
      const r = importPastRuns(new Map([...index().modules.values()].map(m => [m.code, m.name])));
      return send(res, 200, r);
    }
    if (p === '/api/jobs/stop' && req.method === 'POST') {
      const err = stopJob();
      return err ? send(res, 400, { error: err }) : send(res, 200, { ok: true });
    }

    if (p === '/api/text' && req.method === 'GET') {
      const abs = safePath(url.searchParams.get('path') ?? '');
      if (!abs || !fs.existsSync(abs)) return send(res, 404, { error: 'File not found — it may have been moved or deleted.' });
      const size = fs.statSync(abs).size;
      const fd = fs.openSync(abs, 'r'); const buf = Buffer.alloc(Math.min(size, 2_000_000)); fs.readSync(fd, buf, 0, buf.length, 0); fs.closeSync(fd);
      return send(res, 200, { text: buf.toString('utf8'), truncated: size > buf.length, size });
    }
    if (p === '/api/preview' && req.method === 'GET') {
      const abs = safePath(url.searchParams.get('path') ?? '');
      if (!abs || !fs.existsSync(abs)) return send(res, 404, { error: 'File not found' });
      const out = await preview(abs);
      return out ? send(res, 200, out) : send(res, 400, { error: 'No preview for this file type' });
    }

    if (p.startsWith('/files/') && req.method === 'GET') {
      const abs = safePath(decodeURIComponent(p.slice('/files/'.length)));
      if (!abs || !fs.existsSync(abs) || !fs.statSync(abs).isFile()) return send(res, 404, 'File not found — it may have been moved or deleted.', 'text/plain; charset=utf-8');
      const headers: Record<string, string | number> = { 'Content-Type': MIME[path.extname(abs).toLowerCase()] ?? 'application/octet-stream', 'Content-Length': fs.statSync(abs).size };
      if (url.searchParams.has('download')) headers['Content-Disposition'] = `attachment; filename="${path.basename(abs).replace(/"/g, '')}"`;
      res.writeHead(200, headers);
      return fs.createReadStream(abs).pipe(res);
    }

    const file = path.join(PUBLIC_DIR, p === '/' ? 'index.html' : p);
    if (file.startsWith(PUBLIC_DIR) && fs.existsSync(file) && fs.statSync(file).isFile()) return send(res, 200, fs.readFileSync(file), MIME[path.extname(file)] ?? 'application/octet-stream');
    send(res, 404, { error: 'Not found' });
  } catch (err) {
    console.error(err);
    send(res, 500, { error: (err as Error).message });
  }
});

server.on('error', (err: NodeJS.ErrnoException) => {
  if (err.code === 'EADDRINUSE') console.error(`Port ${PORT} is already in use. Stop the other program, or start with UI_PORT=4322 npm run ui`);
  else console.error(err);
  process.exit(1);
});
process.on('uncaughtException', err => console.error('[workspace] unexpected error (kept running):', err));
process.on('unhandledRejection', err => console.error('[workspace] unexpected error (kept running):', err));

server.listen(PORT, HOST, () => {
  const idx = index(); // warm the file index so the first page load is quick
  // Pick up runs done from a terminal since last time (and, on first start, all past QA reports).
  setTimeout(() => { try { const r = importPastRuns(new Map([...idx.modules.values()].map(m => [m.code, m.name]))); if (r.imported) console.log(`Imported ${r.imported} past run(s) from QA reports`); } catch (e) { console.error('past-run import failed:', e); } }, 500);
  console.log(`SimERP QA Workspace → http://localhost:${PORT}`);
});
