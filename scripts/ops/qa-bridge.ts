/**
 * Bridge to the QA Workspace (ui/, http://localhost:4321) — the ops dashboard runs tests through
 * it, so there is one job runner, one run history and one set of reports for both apps.
 * "run-tests" (existing suites) is plain Playwright and needs no Claude. "new-requirement"
 * (generate a suite for a task that has none) is the QA Workspace's AI pipeline — it uses the
 * user's own Claude login inside the workspace; the ops dashboard only asks it to start.
 */

import * as http from 'http';
import * as path from 'path';
import { spawn } from 'child_process';
import { ROOT } from './store';

const UI_PORT = Number(process.env.UI_PORT || 4321);
export const QA_URL = `http://localhost:${UI_PORT}`;

function call(method: 'GET' | 'POST', p: string, body?: unknown, timeout = 10_000): Promise<{ status: number; data: any }> {
  return new Promise((resolve, reject) => {
    const payload = body === undefined ? undefined : JSON.stringify(body);
    const req = http.request({
      host: '127.0.0.1', port: UI_PORT, path: p, method, timeout,
      headers: payload ? { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) } : {},
    }, res => {
      let text = '';
      res.on('data', d => (text += d));
      res.on('end', () => { try { resolve({ status: res.statusCode ?? 0, data: JSON.parse(text) }); } catch { resolve({ status: res.statusCode ?? 0, data: { error: text.slice(0, 200) } }); } });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(new Error('QA Workspace did not answer in time')); });
    if (payload) req.write(payload);
    req.end();
  });
}

export async function qaStatus(): Promise<{ running: boolean; url: string; activeJob: { id: string; label: string; startedAt: string; code?: string } | null }> {
  try {
    const h = await call('GET', '/api/health', undefined, 2000);
    if (h.data?.app !== 'simerp-qa-workspace' || path.resolve(h.data.root ?? '') !== ROOT) return { running: false, url: QA_URL, activeJob: null };
    const hist = await call('GET', '/api/history');
    const j = (Array.isArray(hist.data) ? hist.data : []).find((x: any) => x.status === 'running');
    return { running: true, url: QA_URL, activeJob: j ? { id: j.id, label: j.label, startedAt: j.startedAt, code: j.code } : null };
  } catch {
    return { running: false, url: QA_URL, activeJob: null };
  }
}

/** Start the QA Workspace in the background (never restarts one that is already up). */
export async function qaStart(): Promise<boolean> {
  if ((await qaStatus()).running) return true;
  spawn(process.execPath, [path.join(ROOT, 'ui', 'launch.js'), 'start', '--no-open'], { cwd: ROOT, detached: true, stdio: 'ignore', env: process.env }).unref();
  for (let i = 0; i < 60; i++) {
    await new Promise(r => setTimeout(r, 1000));
    if ((await qaStatus()).running) return true;
  }
  return false;
}

/** Run one module's tests (TC-<CODE>-*) as a QA Workspace job. Returns its history id. */
export async function qaRunModule(code: string, label: string): Promise<{ id: string; label: string }> {
  if (!/^[A-Z]{2,12}$/.test(code)) throw new Error('Bad module code');
  const r = await call('POST', '/api/jobs', { action: 'run-tests', code, name: label });
  if (r.status !== 200) throw new Error(r.data?.error ?? `QA Workspace answered ${r.status}`);
  return { id: r.data.id, label: r.data.label };
}

/** A job's status, progress and failures — without the (large) log. */
export async function qaJob(id: string): Promise<any> {
  if (!/^[\w-]{1,60}$/.test(id)) throw new Error('Bad job id');
  const r = await call('GET', `/api/history/${id}?since=999999999`);
  if (r.status !== 200) throw new Error(r.data?.error ?? `QA Workspace answered ${r.status}`);
  const { log, logSize, ...rest } = r.data;
  return rest;
}

/** The QA Workspace's own setup check — includes whether Claude is available (can take ~1 min the first time). */
export async function qaSetup(): Promise<{ claude: boolean; detail: string; fix?: string }> {
  const r = await call('GET', '/api/setup', undefined, 90_000);
  const ai = (r.data?.items ?? []).find((i: any) => i.key === 'ai');
  return { claude: ai?.state === 'ok', detail: ai?.detail ?? 'Unknown', fix: ai?.fix };
}

/** Generate test cases (+ automation) for a Zoho task through the QA Workspace AI pipeline. Needs Claude. */
export async function qaGenerate(key: string, withAutomation: boolean): Promise<{ id: string; label: string }> {
  if (!/^SI4-T\d+$/.test(key)) throw new Error('Only Zoho tasks (SI4-T…) can go through the pipeline');
  const r = await call('POST', '/api/jobs', { action: 'new-requirement', source: 'zoho', input: key, name: key, withAutomation });
  if (r.status !== 200) throw new Error(r.data?.error ?? `QA Workspace answered ${r.status}`);
  return { id: r.data.id, label: r.data.label };
}
