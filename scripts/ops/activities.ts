/**
 * Activities — every long-running thing started from the ops dashboard (Playwright runs and
 * Claude jobs), shown on the Running tab. Each one runs detached (scripts/ops/activity-run.ts),
 * so restarting the dashboard never kills it. Files: reports/ops/activities/<id>/
 *   spec.json (what to do) · status.json (state) · log.txt (progress) · result.json (outcome)
 */

import * as fs from 'fs';
import * as path from 'path';
import { spawn } from 'child_process';
import { ROOT, OPS_DIR, readJson, writeJson } from './store';

export const ACT_DIR = path.join(OPS_DIR, 'activities');

export const TEST_TYPES = ['smoke', 'functional', 'negative', 'boundary', 'regression', 'security', 'a11y', 'integration'] as const;
export type TestType = typeof TEST_TYPES[number];

export type ActivityType = 'tests' | 'ai-retest' | 'ai-pipeline' | 'ai-module';
export interface ActivitySpec {
  type: ActivityType;
  title: string;
  key?: string;                 // Zoho task/bug key the activity belongs to
  code?: string;                // module code
  caseIds?: string[];           // exact cases to run
  types?: TestType[];           // test types to run / cover
  instructions?: string;        // free text from the user (Claude jobs)
  withAutomation?: boolean;     // ai-pipeline / ai-module: also write Playwright specs
  runAfter?: boolean;           // ai-*: run the new tests when done
}
export type ActivityState = 'queued' | 'waiting' | 'running' | 'needs-approval' | 'done' | 'failed' | 'stopped';
export interface ActivityStatus {
  id: string; type: ActivityType; title: string; key?: string; code?: string; usesClaude: boolean;
  status: ActivityState; phase?: string; startedAt: string; finishedAt?: string;
  pid?: number; childPid?: number; error?: string; approval?: { at: string; action: string };
}

const dirOf = (id: string) => path.join(ACT_DIR, id);
export const statusFile = (id: string) => path.join(dirOf(id), 'status.json');
export const logFile = (id: string) => path.join(dirOf(id), 'log.txt');
export const resultFile = (id: string) => path.join(dirOf(id), 'result.json');

const alive = (pid?: number) => { if (!pid) return false; try { process.kill(pid, 0); return true; } catch { return false; } };

export function startActivity(spec: ActivitySpec): ActivityStatus {
  const id = `${new Date().toISOString().replace(/[:.]/g, '-')}-${spec.type}`;
  fs.mkdirSync(dirOf(id), { recursive: true });
  writeJson(path.join(dirOf(id), 'spec.json'), spec);
  const st: ActivityStatus = { id, type: spec.type, title: spec.title, key: spec.key, code: spec.code, usesClaude: spec.type.startsWith('ai-'), status: 'queued', startedAt: new Date().toISOString() };
  writeJson(statusFile(id), st);
  const tsNode = require.resolve('ts-node/dist/bin.js', { paths: [ROOT] });
  const out = fs.openSync(logFile(id), 'a');
  const child = spawn(process.execPath, [tsNode, '--transpile-only', path.join(ROOT, 'scripts/ops/activity-run.ts'), id], { cwd: ROOT, detached: true, stdio: ['ignore', out, out] });
  child.unref();
  st.pid = child.pid;
  writeJson(statusFile(id), st);
  return st;
}

export function readStatus(id: string): ActivityStatus | null {
  const st = readJson<ActivityStatus | null>(statusFile(id), null);
  if (st && ['queued', 'waiting', 'running'].includes(st.status) && !alive(st.pid)) {
    Object.assign(st, { status: 'failed', error: st.error ?? 'The runner stopped unexpectedly — see the log', finishedAt: st.finishedAt ?? new Date().toISOString() });
    writeJson(statusFile(id), st);
  }
  return st;
}

export function listActivities(limit = 100): (ActivityStatus & { summary?: any })[] {
  if (!fs.existsSync(ACT_DIR)) return [];
  return fs.readdirSync(ACT_DIR).sort().reverse().slice(0, limit).map(id => {
    const st = readStatus(id);
    if (!st) return null;
    const r = readJson<any>(resultFile(id), null);
    return { ...st, summary: r?.summary ?? null };
  }).filter(Boolean) as any;
}

export function getActivity(id: string, since = 0) {
  if (!/^[\w.-]+$/.test(id) || !fs.existsSync(dirOf(id))) return null;
  const st = readStatus(id);
  const spec = readJson<ActivitySpec | null>(path.join(dirOf(id), 'spec.json'), null);
  let log = '', size = 0;
  try {
    size = fs.statSync(logFile(id)).size;
    const start = Math.max(since, size - 200_000);
    if (size > start) { const fd = fs.openSync(logFile(id), 'r'); const b = Buffer.alloc(size - start); fs.readSync(fd, b, 0, b.length, start); fs.closeSync(fd); log = b.toString('utf8'); }
  } catch { /* no log yet */ }
  return { ...st, spec, result: readJson<any>(resultFile(id), null), log, logSize: size };
}

export function stopActivity(id: string): string | null {
  const st = readStatus(id);
  if (!st) return 'Unknown activity';
  if (!['queued', 'waiting', 'running'].includes(st.status)) return 'It is not running';
  for (const pid of [st.childPid, st.pid]) if (pid) { try { process.kill(-pid, 'SIGTERM'); } catch { try { process.kill(pid, 'SIGTERM'); } catch { /* gone */ } } }
  Object.assign(st, { status: 'stopped', finishedAt: new Date().toISOString() });
  writeJson(statusFile(id), st);
  return null;
}

/** Record that the user applied (or dismissed) the suggested Zoho change. */
export function recordApproval(id: string, action: string): void {
  const st = readStatus(id);
  if (!st) return;
  Object.assign(st, { status: 'done', approval: { at: new Date().toISOString(), action } });
  writeJson(statusFile(id), st);
}
