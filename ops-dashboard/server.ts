/**
 * SimERP QA Ops Dashboard — local page for system health + my Zoho work.
 *
 *   npm run ops         start in the background and open http://localhost:4400
 *   npm run ops:stop    stop it            npm run ops:status   is it running?
 *   npm run ops:dev     run in the foreground (for working on the dashboard itself)
 *
 * Works without Claude: no model, no MCP — Zoho is plain REST (scripts/lib/zoho-rest.ts) and
 * the data comes from cron jobs (scripts/ops/). Listens on localhost only; every Zoho write is
 * confirmed in the browser first and recorded in reports/ops/data/actions-log.json.
 */

import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { createBug, updateBug, createTask, updateTask, isZohoRestConfigured, NewBug, NewTask, fetchComments, fetchAttachments } from '../scripts/lib/zoho-rest';
import { syncZoho } from '../scripts/ops/sync-zoho';
import { cronStatus } from '../scripts/ops/ops-cron';
import { buildTbt, setLink, recordRun } from '../scripts/ops/tbt';
import { taskLinks, mapSource, resetTaskLinks } from '../scripts/ops/task-links';
import { startActivity, listActivities, getActivity, stopActivity, recordApproval, ACT_DIR, TEST_TYPES, ActivitySpec } from '../scripts/ops/activities';
import { claudeStatus, draftBug, chatReply, ChatTurn } from '../scripts/ops/ai';
import { buildChatContext, CHAT_DIR } from '../scripts/ops/chat-context';
import { qaStatus, qaStart, qaRunModule, qaJob, qaSetup, qaGenerate } from '../scripts/ops/qa-bridge';
import { healthRuns as listHealthRuns, isHealthRunning, ARTIFACTS_DIR } from '../scripts/ops/health-check';
import { PROBES_FILE, DEPLOYS_FILE, Probe, DeployEvent } from '../scripts/ops/deploy-watch';
import { opsEnvs, envByName } from '../scripts/ops/envs';
import { spawn } from 'child_process';
import { moduleHealth, moduleDetail, allRuns, topFailing, reportsIndex, codesFromNewCases, passRate, REPORTS_HTML, allCases, caseDetail } from '../scripts/ops/suite';
import { ROOT, WORK_FILE, SYNC_LOG, ACTIONS_LOG, WorkSnapshot, SyncLogEntry, readJson, writeJson, appendLog, isToBeTested } from '../scripts/ops/store';

const PORT = Number(process.env.OPS_PORT || 4400);
const HOST = '127.0.0.1';
const PUBLIC_DIR = path.join(__dirname, 'public');
export const APP_ID = 'simerp-ops-dashboard';

// ─── data ───

let workCache: { mtime: number; data: WorkSnapshot | null } = { mtime: 0, data: null };
function work(): WorkSnapshot | null {
  let mtime = 0;
  try { mtime = fs.statSync(WORK_FILE).mtimeMs; } catch { return null; }
  if (mtime !== workCache.mtime) workCache = { mtime, data: readJson<WorkSnapshot | null>(WORK_FILE, null) };
  return workCache.data;
}

/** Lists without the (large, HTML) descriptions — those come from /api/item. */
function workLists(w: WorkSnapshot) {
  const strip = <T extends { description: string }>(x: T) => ({ ...x, description: undefined });
  return { ...w, tasks: w.tasks.map(strip), bugs: w.bugs.map(strip) };
}

/** Patch the local snapshot after a write so the page reflects it before the next sync. */
function patchItem(kind: 'task' | 'bug', id: string, patch: (x: any) => void): void {
  const w = readJson<WorkSnapshot | null>(WORK_FILE, null);
  if (!w) return;
  const item = (kind === 'task' ? w.tasks : w.bugs).find(x => x.id === id);
  if (!item) return;
  patch(item);
  writeJson(WORK_FILE, w);
}


let syncing: Promise<SyncLogEntry> | null = null;
const extraCache = new Map<string, { at: number; data: unknown }>();

// ─── HTTP helpers ───

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml',
};

function send(res: http.ServerResponse, status: number, body: unknown, type = 'application/json; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  res.end(typeof body === 'string' || Buffer.isBuffer(body) ? body : JSON.stringify(body));
}

function readBody(req: http.IncomingMessage, limit = 1024 * 1024): Promise<any> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []; let n = 0;
    req.on('data', (c: Buffer) => { n += c.length; if (n > limit) { reject(new Error('Request too large')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => { try { resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {}); } catch { reject(new Error('Body is not valid JSON')); } });
    req.on('error', reject);
  });
}

const ID = /^\d{15,20}$/;
const pick = (o: any, keys: string[]) => Object.fromEntries(keys.filter(k => o?.[k] !== undefined && o[k] !== '').map(k => [k, String(o[k])]));

/** Run a Zoho write, record it in the actions log, and return the result. */
async function zohoWrite<T>(action: string, target: string, payload: Record<string, string>, fn: () => Promise<T>): Promise<T> {
  try {
    const result = await fn();
    appendLog(ACTIONS_LOG, { at: new Date().toISOString(), action, target, payload, ok: true });
    return result;
  } catch (e) {
    appendLog(ACTIONS_LOG, { at: new Date().toISOString(), action, target, payload, ok: false, error: (e as Error).message });
    throw e;
  }
}

// ─── routes ───

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', `http://${req.headers.host}`);
  const p = url.pathname;
  let m: RegExpExecArray | null;
  try {
    // Mutations only from pages this server served.
    if (req.method !== 'GET' && req.headers.origin && req.headers.origin !== `http://${req.headers.host}`) return send(res, 403, { error: 'Cross-origin request refused' });

    if (p === '/api/health') return send(res, 200, { app: APP_ID, pid: process.pid, root: ROOT });

    if (p === '/api/overview') {
      const w = work();
      const log = readJson<SyncLogEntry[]>(SYNC_LOG, []);
      const latestByEnv: Record<string, any> = {};
      for (const r of listHealthRuns(undefined, 50)) {
        if (latestByEnv[r.env]) continue;
        const pass = (r.api?.passed ?? 0) + (r.api?.flaky ?? 0) + (r.regression?.passed ?? 0) + (r.regression?.flaky ?? 0);
        latestByEnv[r.env] = { env: r.env, at: r.finishedAt, ok: r.ok, version: r.version, passed: pass, total: (r.api?.total ?? 0) + (r.regression?.total ?? 0) };
      }
      return send(res, 200, {
        zohoConfigured: isZohoRestConfigured(),
        baseUrl: process.env.BASE_URL || null,
        me: w?.me ?? null,
        syncedAt: w?.syncedAt ?? null,
        lastSync: log[0] ?? null,
        lastGoodSync: log.find(x => x.ok) ?? null,
        syncing: Boolean(syncing),
        counts: w ? {
          myOpenTasks: w.tasks.filter(t => t.mine.length && !t.status.closed).length,
          bugsReportedByMeOpen: w.bugs.filter(b => b.mine.includes('reportedByMe') && !b.status.closed).length,
          bugsAssignedToMeOpen: w.bugs.filter(b => b.mine.includes('assignedToMe') && !b.status.closed).length,
          openBugs: w.bugs.filter(b => !b.status.closed).length,
          bugsToBeTestedByMe: w.bugs.filter(b => b.mine.includes('reportedByMe') && isToBeTested(b.status.name)).length,
          tbtTasks: w.tasks.filter(t => isToBeTested(t.status.name)).length,
          tbtBugs: w.bugs.filter(b => isToBeTested(b.status.name)).length,
        } : null,
        health: latestByEnv,
        cron: cronStatus(),
      });
    }

    if (p === '/api/work' && req.method === 'GET') {
      const w = work();
      return w ? send(res, 200, workLists(w)) : send(res, 404, { error: 'No data yet — press “Sync now” or run: npm run ops:sync' });
    }

    if ((m = /^\/api\/item\/(task|bug)\/(\d+)$/.exec(p)) && req.method === 'GET') {
      const w = work();
      const item = w && (m[1] === 'task' ? w.tasks : w.bugs).find(x => x.id === m![2]);
      return item ? send(res, 200, item) : send(res, 404, { error: 'Not found in the last sync' });
    }

    // Live comments + attachments for the detail panel (cached 5 minutes per item).
    if ((m = /^\/api\/item\/(task|bug)\/(\d+)\/extra$/.exec(p)) && req.method === 'GET') {
      const k = `${m[1]}:${m[2]}`;
      const hit = extraCache.get(k);
      if (hit && Date.now() - hit.at < 5 * 60_000 && !url.searchParams.has('refresh')) return send(res, 200, hit.data);
      const kind = m[1] as 'task' | 'bug';
      const [comments, attachments] = await Promise.all([
        fetchComments(kind, m[2]).catch(e => ({ error: (e as Error).message })),
        fetchAttachments(kind, m[2]).catch(e => ({ error: (e as Error).message })),
      ]);
      const data = { comments, attachments, fetchedAt: new Date().toISOString() };
      extraCache.set(k, { at: Date.now(), data });
      return send(res, 200, data);
    }

    if (p === '/api/sync-log') return send(res, 200, readJson(SYNC_LOG, []));
    if (p === '/api/actions-log') return send(res, 200, readJson(ACTIONS_LOG, []));
    // ── Health: deploy-triggered API + regression runs ──

    if (p === '/api/health/summary') {
      const env = url.searchParams.get('env') || 'dev';
      const days = Number(url.searchParams.get('days') ?? 14);
      const since = Date.now() - days * 86_400_000;
      const probes = readJson<Probe[]>(PROBES_FILE(env), []).filter(x => new Date(x.at).getTime() >= since);
      // Strip per-check detail from older runs; the newest 3 keep everything for the failure list.
      const runs = listHealthRuns(env, 120).map((r, i) => i < 3 ? r : { ...r, api: r.api && { ...r.api, checks: r.api.checks.filter(c => c.status === 'failed') }, regression: r.regression && { ...r.regression, failures: r.regression.failures.slice(0, 30) } });
      return send(res, 200, {
        envs: opsEnvs(), env, probes, runs,
        deploys: readJson<DeployEvent[]>(DEPLOYS_FILE, []).filter(d => d.env === env).slice(0, 60),
        running: isHealthRunning(), cron: cronStatus(),
      });
    }

    if (p === '/api/health/run' && req.method === 'POST') {
      const b = await readBody(req);
      const env = envByName(String(b.env ?? 'dev'));
      if (!env || !env.suites) return send(res, 400, { error: 'Health runs work on dev only for now (the saved test logins are dev accounts)' });
      if (isHealthRunning()) return send(res, 409, { error: 'A health run is already in progress' });
      const suites = (Array.isArray(b.suites) ? b.suites : ['api']).filter((x: string) => x === 'api' || x === 'regression');
      if (!suites.length) return send(res, 400, { error: 'Pick API checks and/or the regression suite' });
      const tsNode = require.resolve('ts-node/dist/bin.js', { paths: [ROOT] });
      const log = fs.openSync(path.join(ROOT, 'reports/ops/logs/health.log'), 'a');
      spawn(process.execPath, [tsNode, '--transpile-only', path.join(ROOT, 'scripts/ops/health-check.ts'), `--env=${env.name}`, `--suites=${suites.join(',')}`, '--reason=manual'], { cwd: ROOT, detached: true, stdio: ['ignore', log, log] }).unref();
      return send(res, 200, { ok: true });
    }

    if ((m = /^\/health-artifacts\/([\w.-]+)\/(.+\.png)$/.exec(p)) && req.method === 'GET') {
      const file = path.resolve(ARTIFACTS_DIR, m[1], decodeURIComponent(m[2]));
      if (!file.startsWith(ARTIFACTS_DIR + path.sep) || !fs.existsSync(file)) return send(res, 404, { error: 'Not found' });
      return send(res, 200, fs.readFileSync(file), 'image/png');
    }

    if (p === '/api/sync' && req.method === 'POST') {
      if (!syncing) syncing = syncZoho('dashboard').finally(() => { syncing = null; });
      const entry = await syncing;
      return send(res, entry.ok ? 200 : 502, entry);
    }

    // ── To be tested queue + the QA Workspace test runner ──

    if (p === '/api/tbt' && req.method === 'GET') {
      const w = work();
      if (!w) return send(res, 404, { error: 'No data yet — press “Sync now” or run: npm run ops:sync' });
      return send(res, 200, { ...buildTbt(w, taskLinks(w).tasks), qa: await qaStatus() });
    }

    if ((m = /^\/api\/tbt\/(\d+)\/links$/.exec(p)) && req.method === 'POST') {
      const b = await readBody(req);
      if (!/^[A-Z]{2,12}$/.test(String(b.code ?? ''))) return send(res, 400, { error: 'Bad module code' });
      setLink(m[1], b.code, Boolean(b.remove));
      resetTaskLinks();
      return send(res, 200, { ok: true });
    }

    if (p === '/api/qa/status') return send(res, 200, await qaStatus());

    if (p === '/api/qa/start' && req.method === 'POST') {
      return (await qaStart()) ? send(res, 200, await qaStatus()) : send(res, 502, { error: 'The QA Workspace did not start — check reports/ui-history/server.log' });
    }

    if (p === '/api/qa/run' && req.method === 'POST') {
      const b = await readBody(req);
      const code = String(b.code ?? '');
      const key = String(b.key ?? '');
      if (!/^SI4-[TI]\d+$/.test(key)) return send(res, 400, { error: 'Bad item key' });
      if (!(await qaStatus()).running && !(await qaStart())) return send(res, 502, { error: 'The QA Workspace is not running and did not start' });
      const job = await qaRunModule(code, `${key} re-test (${code})`);
      recordRun(key, job.id, code);
      return send(res, 200, job);
    }

    if (p === '/api/qa/run-module' && req.method === 'POST') {
      const b = await readBody(req);
      if (!(await qaStatus()).running && !(await qaStart())) return send(res, 502, { error: 'The QA Workspace is not running and did not start' });
      return send(res, 200, await qaRunModule(String(b.code ?? ''), String(b.code ?? '')));
    }

    if ((m = /^\/api\/qa\/job\/([\w-]+)$/.exec(p)) && req.method === 'GET') return send(res, 200, await qaJob(m[1]));

    if (p === '/api/qa/setup') {
      if (!(await qaStatus()).running && !(await qaStart())) return send(res, 502, { error: 'The QA Workspace is not running and did not start' });
      return send(res, 200, await qaSetup());
    }

    // Tasks with no test suite: the QA Workspace AI pipeline writes one (needs Claude).
    if (p === '/api/qa/generate' && req.method === 'POST') {
      const b = await readBody(req);
      const key = String(b.key ?? '');
      if (!(await qaStatus()).running && !(await qaStart())) return send(res, 502, { error: 'The QA Workspace is not running and did not start' });
      const job = await qaGenerate(key, b.withAutomation !== false);
      recordRun(key, job.id, 'NEW', 'generate');
      return send(res, 200, job);
    }

    // After a generate job: link the new TC codes to the item.
    if ((m = /^\/api\/tbt\/(\d+)\/autolink$/.exec(p)) && req.method === 'POST') {
      const b = await readBody(req);
      const codes = codesFromNewCases(String(b.key ?? ''), String(b.since ?? new Date(0).toISOString()));
      for (const c of codes) setLink(m[1], c, false);
      return send(res, 200, { codes });
    }

    // ── Activities: Playwright runs + (optional) Claude jobs, shown on the Running tab ──

    if (p === '/api/ai/status') return send(res, 200, claudeStatus());
    // ── Chat assistant (optional, Claude): reads a data snapshot, proposes actions the user clicks ──
    if (p === '/api/chat' && req.method === 'GET') return send(res, 200, readJson(path.join(CHAT_DIR, 'history.json'), []));
    if (p === '/api/chat/reset' && req.method === 'POST') { writeJson(path.join(CHAT_DIR, 'history.json'), []); return send(res, 200, { ok: true }); }
    if (p === '/api/chat' && req.method === 'POST') {
      if (!claudeStatus().available) return send(res, 409, { error: 'Claude Code is not available on this machine' });
      const b = await readBody(req);
      const message = String(b.message ?? '').trim().slice(0, 4000);
      if (!message) return send(res, 400, { error: 'Type a message' });
      const file = path.join(CHAT_DIR, 'history.json');
      const history = readJson<(ChatTurn & { at: string; actions?: unknown[] })[]>(file, []);
      const reply = await chatReply(path.relative(ROOT, buildChatContext()), history, message);
      const turns = [...history, { role: 'user' as const, text: message, at: new Date().toISOString() }, { role: 'assistant' as const, text: reply.text, actions: reply.actions, costUsd: reply.costUsd, at: new Date().toISOString() }].slice(-60);
      writeJson(file, turns);
      return send(res, 200, turns[turns.length - 1]);
    }

    // Optional: Claude rewrites a bug draft (text only). The user still reviews and confirms the send.
    if (p === '/api/ai/draft-bug' && req.method === 'POST') {
      if (!claudeStatus().available) return send(res, 409, { error: 'Claude Code is not available on this machine' });
      const b = await readBody(req);
      return send(res, 200, await draftBug({ title: String(b.title ?? '').slice(0, 300), description: String(b.description ?? '').slice(0, 12_000), context: typeof b.context === 'string' ? b.context : undefined }));
    }
    if (p === '/api/activities' && req.method === 'GET') return send(res, 200, listActivities());
    if ((m = /^\/api\/activities\/([\w.-]+)$/.exec(p)) && req.method === 'GET') {
      const a = getActivity(m[1], Number(url.searchParams.get('since') ?? 0));
      return a ? send(res, 200, a) : send(res, 404, { error: 'Unknown activity' });
    }
    if ((m = /^\/api\/activities\/([\w.-]+)\/stop$/.exec(p)) && req.method === 'POST') {
      const err = stopActivity(m[1]);
      return err ? send(res, 400, { error: err }) : send(res, 200, { ok: true });
    }
    if ((m = /^\/api\/activities\/([\w.-]+)\/approval$/.exec(p)) && req.method === 'POST') {
      const b = await readBody(req);
      recordApproval(m[1], String(b.action ?? 'dismissed').slice(0, 80));
      return send(res, 200, { ok: true });
    }
    if (p === '/api/activities' && req.method === 'POST') {
      const b = await readBody(req);
      const type = String(b.type ?? '');
      if (!['tests', 'ai-retest', 'ai-pipeline', 'ai-module'].includes(type)) return send(res, 400, { error: 'Unknown activity type' });
      const types = (Array.isArray(b.types) ? b.types : []).filter((t: string) => (TEST_TYPES as readonly string[]).includes(t));
      const code = b.code && /^[A-Z]{2,12}$/.test(String(b.code)) ? String(b.code) : undefined;
      const key = b.key && /^SI4-[TI]\d+$/.test(String(b.key)) ? String(b.key) : undefined;
      const caseIds = (Array.isArray(b.caseIds) ? b.caseIds : []).filter((c: string) => /^TC-[A-Z]{2,12}-\d+$/.test(c)).slice(0, 4000);
      const instructions = typeof b.instructions === 'string' ? b.instructions.slice(0, 4000) : undefined;
      if (type === 'tests' && !code && !caseIds.length && !types.length) return send(res, 400, { error: 'Pick a module, cases or test types to run' });
      if (type === 'ai-retest' && !key?.startsWith('SI4-I')) return send(res, 400, { error: 'Re-test needs a bug key' });
      if (type === 'ai-pipeline' && !key?.startsWith('SI4-T')) return send(res, 400, { error: 'The testing pipeline needs a task key' });
      if (type === 'ai-module' && !code) return send(res, 400, { error: 'Pick a module' });
      if (type.startsWith('ai-') && !claudeStatus().available) return send(res, 409, { error: 'Claude Code is not available on this machine — install it and sign in once with `claude`.' });
      const spec: ActivitySpec = { type: type as ActivitySpec['type'], title: String(b.title ?? type).slice(0, 160), key, code, caseIds: caseIds.length ? caseIds : undefined, types: types.length ? types : undefined, instructions, withAutomation: b.withAutomation !== false, runAfter: b.runAfter !== false };
      return send(res, 200, startActivity(spec));
    }
    if ((m = /^\/activity-artifacts\/([\w.-]+)\/(.+\.png)$/.exec(p)) && req.method === 'GET') {
      const file = path.resolve(ACT_DIR, m[1], decodeURIComponent(m[2]));
      if (!file.startsWith(ACT_DIR + path.sep) || !fs.existsSync(file)) return send(res, 404, { error: 'Not found' });
      return send(res, 200, fs.readFileSync(file), 'image/png');
    }

    // ── Task ↔ test links (every past suite tied to its Zoho task) ──

    if (p === '/api/task-links') {
      const w = work();
      if (!w) return send(res, 404, { error: 'No data yet — press “Sync now” or run: npm run ops:sync' });
      return send(res, 200, taskLinks(w));
    }
    if (p === '/api/task-links/source' && req.method === 'POST') {
      const b = await readBody(req);
      const source = String(b.source ?? '');
      const key = b.key ? String(b.key).toUpperCase() : null;
      if (!/^[\w .\/·-]{2,120}$/.test(source) || (key && !/^SI4-[TI]\d+$/.test(key))) return send(res, 400, { error: 'Bad source or task key' });
      mapSource(source, key);
      return send(res, 200, { ok: true });
    }

    // ── Test suite analytics (QA Workspace + QA reports + pipeline reports) ──

    if (p === '/api/suite/modules') return send(res, 200, moduleHealth());
    if (p === '/api/suite/cases') return send(res, 200, allCases());
    if ((m = /^\/api\/suite\/case\/(TC-[A-Z]{2,12}-\d+)$/.exec(p))) {
      const d = caseDetail(m[1]);
      return d ? send(res, 200, d) : send(res, 404, { error: 'Test case not found' });
    }
    if ((m = /^\/api\/reports\/([\w.-]+\.html)\/failures$/.exec(p))) {
      const r = reportsIndex().qa.find(x => x.file === m![1]);
      return r ? send(res, 200, { file: r.file, title: r.title, at: r.at, total: r.total, passed: r.passed, failed: r.failed, failures: r.failures }) : send(res, 200, { file: m[1], failures: [] });
    }
    if ((m = /^\/api\/suite\/module\/([A-Z]{2,12})$/.exec(p))) {
      const d = moduleDetail(m[1]);
      return d ? send(res, 200, d) : send(res, 404, { error: 'Unknown module' });
    }
    if (p === '/api/suite/runs') return send(res, 200, allRuns().slice(0, 300).map(r => ({ ...r, rate: passRate(r) })));
    if (p === '/api/suite/failing') return send(res, 200, topFailing(Number(url.searchParams.get('window') ?? 25)));
    if (p === '/api/reports') {
      const { qa, pipeline } = reportsIndex();
      return send(res, 200, {
        qa: qa.map(({ results, failures, ...r }) => ({ ...r, failureCount: failures.length, rate: passRate(r) })),
        pipeline,
      });
    }
    if ((m = /^\/reports\/([\w.-]+\.html)$/.exec(p)) && req.method === 'GET') {
      const file = path.join(REPORTS_HTML, m[1]);
      if (!/^(qa|pipeline)-report/.test(m[1]) || !fs.existsSync(file)) return send(res, 404, { error: 'Report not found' });
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
      return void fs.createReadStream(file).pipe(res);
    }

    // ── Zoho writes — each one was shown to the user in a confirm dialog first ──

    if (p === '/api/bugs' && req.method === 'POST') {
      const b = await readBody(req);
      if (!b.title?.trim()) return send(res, 400, { error: 'Title is required' });
      const fields = pick(b, ['title', 'description', 'assignee', 'severity_id', 'classification_id', 'module_id', 'flag']) as unknown as NewBug;
      const bug = await zohoWrite('create-bug', fields.title, fields as any, () => createBug(fields));
      return send(res, 200, bug);
    }

    if ((m = /^\/api\/bugs\/(\d+)$/.exec(p)) && req.method === 'POST' && ID.test(m[1])) {
      const id = m[1];
      const b = await readBody(req);
      const fields = pick(b, ['status_id', 'assignee', 'severity_id', 'title']);
      if (!Object.keys(fields).length) return send(res, 400, { error: 'Nothing to change' });
      const bug = await zohoWrite('update-bug', b.key || id, fields, () => updateBug(id, fields));
      if (fields.status_id && bug.status.id && bug.status.id !== fields.status_id) throw new Error(`Zoho kept the status as “${bug.status.name}” — the change was not applied`);
      patchItem('bug', id, x => { if (bug.status.id) x.status = bug.status; if (bug.severity) x.severity = bug.severity; if (bug.assignee) x.assignee = bug.assignee; });
      return send(res, 200, bug);
    }

    if (p === '/api/tasks' && req.method === 'POST') {
      const b = await readBody(req);
      if (!b.name?.trim()) return send(res, 400, { error: 'Task name is required' });
      if (!b.tasklist_id) return send(res, 400, { error: 'Pick a task list' });
      const fields = pick(b, ['name', 'description', 'tasklist_id', 'person_responsible', 'priority', 'start_date', 'end_date']) as unknown as NewTask;
      const task = await zohoWrite('create-task', fields.name, fields as any, () => createTask(fields));
      return send(res, 200, task);
    }

    if ((m = /^\/api\/tasks\/(\d+)$/.exec(p)) && req.method === 'POST' && ID.test(m[1])) {
      const id = m[1];
      const b = await readBody(req);
      const fields = pick(b, ['custom_status', 'person_responsible', 'priority', 'name']);
      if (!Object.keys(fields).length) return send(res, 400, { error: 'Nothing to change' });
      const task = await zohoWrite('update-task', b.key || id, fields, () => updateTask(id, fields));
      const status = fields.custom_status ? work()?.taskStatuses.find(s => s.id === fields.custom_status) : undefined;
      patchItem('task', id, x => { if (status) x.status = status; if (fields.priority) x.priority = fields.priority; });
      return send(res, 200, task);
    }

    // ── static ──
    if (req.method === 'GET') {
      const file = path.resolve(PUBLIC_DIR, '.' + (p === '/' ? '/index.html' : p));
      if (file.startsWith(PUBLIC_DIR + path.sep) && fs.existsSync(file) && fs.statSync(file).isFile()) {
        return send(res, 200, fs.readFileSync(file), MIME[path.extname(file)] ?? 'application/octet-stream');
      }
    }
    return send(res, 404, { error: 'Not found' });
  } catch (e) {
    return send(res, 500, { error: (e as Error).message });
  }
});

server.listen(PORT, HOST, () => console.log(`SimERP QA Ops Dashboard → http://localhost:${PORT}`));
