/**
 * One health run for an environment: the API checks (tests/e2e/health/api-health.spec.ts) and
 * then the regression suite (@regression), both plain Playwright with the normal global-setup
 * login. Writes reports/ops/health/runs/<id>.json for the dashboard. No Claude.
 *
 *   npm run ops:health -- --env=dev [--suites=api,regression] [--reason=deploy|manual|cron]
 *
 * Started automatically by deploy-watch.ts after a deploy, or from the dashboard's Health page.
 * Only one Playwright run at a time across the ops dashboard (health runs and activities share
 * RUNNING_FILE); it also waits for a running QA Workspace job so two runs never share dev logins.
 */

import * as fs from 'fs';
import * as path from 'path';
import { spawn } from 'child_process';
import { ROOT, HEALTH_DIR, readJson, writeJson } from './store';
import { envByName } from './envs';
import { qaStatus } from './qa-bridge';

export const RUNS_DIR = path.join(HEALTH_DIR, 'runs');
export const ARTIFACTS_DIR = path.join(HEALTH_DIR, 'artifacts');
export const RUNNING_FILE = path.join(HEALTH_DIR, 'running.json');
const KEEP_ARTIFACTS = 40;

type St = 'passed' | 'failed' | 'flaky' | 'skipped';
interface Counts { total: number; passed: number; failed: number; flaky: number; skipped: number }

export interface HealthCheck {
  id: string; title: string; status: St; durationMs: number;
  endpoint?: string; httpStatus?: string; latencyMs?: number;
  file?: string; error?: string; screenshot?: string;
}

export interface HealthRun {
  id: string; env: string; reason: string; startedAt: string; finishedAt: string; ok: boolean;
  version: string; frontendBuild?: string;
  api?: Counts & { checks: HealthCheck[]; avgLatencyMs: number | null };
  regression?: Counts & { byModule: Record<string, Counts>; failures: HealthCheck[]; checks?: HealthCheck[] };
  error?: string;
}

const zero = (): Counts => ({ total: 0, passed: 0, failed: 0, flaky: 0, skipped: 0 });
const stripAnsi = (s: string) => s.replace(/\u001b\[[0-9;]*m/g, '');
const codeOf = (id: string) => /^TC-([A-Z]{2,12})-/.exec(id)?.[1] ?? 'OTHER';

/** Walk Playwright's JSON report into flat checks (final attempt decides; pass after a retry = flaky). */
export function readReport(file: string, runDir: string, baseDir = ARTIFACTS_DIR): HealthCheck[] {
  const report = readJson<any>(file, null);
  if (!report) return [];
  const out: HealthCheck[] = [];
  const walk = (suite: any) => {
    for (const spec of suite.specs ?? []) {
      for (const t of spec.tests ?? []) {
        const results = t.results ?? [];
        const last = results[results.length - 1];
        if (!last) continue;
        const status: St = t.status === 'flaky' ? 'flaky' : t.status === 'skipped' ? 'skipped' : last.status === 'passed' ? 'passed' : 'failed';
        const note = (type: string) => (t.annotations ?? []).filter((a: any) => a.type === type).pop()?.description;
        const shot = (last.attachments ?? []).find((a: any) => a.name === 'screenshot' && a.path)?.path;
        const id = /\bTC-[A-Z]{2,12}-\d+\b/.exec(spec.title)?.[0] ?? '';
        out.push({
          id, title: spec.title.replace(/\s*@[\w-]+/g, '').replace(id, '').trim(), status,
          durationMs: results.reduce((a: number, r: any) => a + (r.duration ?? 0), 0),
          endpoint: note('endpoint'), httpStatus: note('status'), latencyMs: note('latency-ms') ? Number(note('latency-ms')) : undefined,
          file: spec.file,
          error: status === 'failed' ? stripAnsi(last.error?.message ?? last.errors?.[0]?.message ?? '').split('\n').slice(0, 12).join('\n').trim() : undefined,
          screenshot: status === 'failed' && shot && shot.startsWith(runDir) ? path.relative(baseDir, shot) : undefined,
        });
      }
    }
    for (const child of suite.suites ?? []) walk(child);
  };
  for (const s of report.suites ?? []) walk(s);
  return out;
}

export function count(checks: HealthCheck[]): Counts {
  const c = zero();
  for (const x of checks) { c.total++; c[x.status]++; }
  return c;
}

export function playwright(args: string[], env: Record<string, string>, logFile: string, onSpawn?: (pid: number) => void): Promise<number> {
  return new Promise(resolve => {
    const out = fs.openSync(logFile, 'a');
    const child = spawn('npx', ['playwright', 'test', '--config=tests/playwright.config.ts', '--project=chromium', ...args], {
      cwd: ROOT, stdio: ['ignore', out, out], env: { ...process.env, ...env }, detached: true,
    });
    if (child.pid) onSpawn?.(child.pid);
    child.on('exit', code => { fs.closeSync(out); resolve(code ?? 1); });
  });
}

async function probeVersion(apiUrl: string): Promise<string> {
  try {
    const r = await fetch(`${apiUrl}/api/v1/health-check`, { signal: AbortSignal.timeout(10_000) });
    return r.headers.get('x-api-version') ?? '';
  } catch { return ''; }
}

function pruneArtifacts() {
  if (!fs.existsSync(ARTIFACTS_DIR)) return;
  const dirs = fs.readdirSync(ARTIFACTS_DIR).sort().reverse();
  for (const d of dirs.slice(KEEP_ARTIFACTS)) fs.rmSync(path.join(ARTIFACTS_DIR, d), { recursive: true, force: true });
}

export function isHealthRunning(): any | null {
  const r = readJson<any>(RUNNING_FILE, null);
  if (!r) return null;
  try { process.kill(r.pid, 0); return r; } catch { return null; }
}

export async function runHealth(envName: string, suites: string[], reason: string, frontendBuild?: string): Promise<HealthRun | null> {
  const env = envByName(envName);
  if (!env) throw new Error(`Unknown environment: ${envName}`);
  if (!env.suites) throw new Error(`${env.label} is probed only — the saved test logins are dev accounts`);
  if (isHealthRunning()) { console.log('A health run is already in progress — skipping.'); return null; }

  const started = new Date();
  const id = `${started.toISOString().replace(/[:.]/g, '-')}-${env.name}`;
  const runDir = path.join(ARTIFACTS_DIR, id);
  fs.mkdirSync(runDir, { recursive: true });
  const logFile = path.join(runDir, 'run.log');
  const state = { pid: process.pid, id, env: env.name, reason, suites, startedAt: started.toISOString(), phase: 'waiting' };
  writeJson(RUNNING_FILE, state);

  try {
    // Never share the dev logins with a QA Workspace test run.
    for (let i = 0; i < 90 && (await qaStatus()).activeJob; i++) await new Promise(r => setTimeout(r, 20_000));

    const pwEnv = { BASE_URL: env.baseUrl, API_BASE_URL: env.apiUrl };
    const run: HealthRun = { id, env: env.name, reason, startedAt: started.toISOString(), finishedAt: '', ok: true, version: await probeVersion(env.apiUrl), frontendBuild };

    if (suites.includes('api')) {
      writeJson(RUNNING_FILE, { ...state, phase: 'api' });
      await playwright(['tests/e2e/health/api-health.spec.ts', '--reporter=json', `--output=${path.join(runDir, 'api')}`],
        { ...pwEnv, PLAYWRIGHT_JSON_OUTPUT_NAME: path.join(runDir, 'api.json') }, logFile);
      const checks = readReport(path.join(runDir, 'api.json'), runDir);
      const lat = checks.filter(c => c.latencyMs !== undefined);
      run.api = { ...count(checks), checks, avgLatencyMs: lat.length ? Math.round(lat.reduce((a, c) => a + c.latencyMs!, 0) / lat.length) : null };
      if (!checks.length) run.error = 'The API checks produced no results — see run.log';
    }

    if (suites.includes('regression')) {
      writeJson(RUNNING_FILE, { ...state, phase: 'regression' });
      await playwright(['--grep', '@regression', '--reporter=json', `--output=${path.join(runDir, 'regression')}`],
        { ...pwEnv, PLAYWRIGHT_JSON_OUTPUT_NAME: path.join(runDir, 'regression.json') }, logFile);
      const checks = readReport(path.join(runDir, 'regression.json'), runDir);
      const byModule: Record<string, Counts> = {};
      for (const c of checks) { const k = codeOf(c.id); byModule[k] ??= zero(); byModule[k].total++; byModule[k][c.status]++; }
      run.regression = { ...count(checks), byModule, failures: checks.filter(c => c.status === 'failed'), checks: checks.map(({ error, ...c }) => c) };
      if (!checks.length) run.error = (run.error ? run.error + '; ' : '') + 'The regression suite produced no results — see run.log';
    }

    run.finishedAt = new Date().toISOString();
    run.ok = !run.error && !(run.api?.failed) && !(run.regression?.failed);
    writeJson(path.join(RUNS_DIR, `${id}.json`), run);
    pruneArtifacts();
    return run;
  } finally {
    try { fs.unlinkSync(RUNNING_FILE); } catch { /* already gone */ }
  }
}

export function healthRuns(envName?: string, limit = 200): HealthRun[] {
  if (!fs.existsSync(RUNS_DIR)) return [];
  return fs.readdirSync(RUNS_DIR).filter(f => f.endsWith('.json') && (!envName || f.endsWith(`-${envName}.json`))).sort().reverse().slice(0, limit)
    .map(f => readJson<HealthRun | null>(path.join(RUNS_DIR, f), null)).filter((r): r is HealthRun => Boolean(r));
}

if (require.main === module) {
  const arg = (k: string, d: string) => process.argv.find(a => a.startsWith(`--${k}=`))?.split('=')[1] ?? d;
  runHealth(arg('env', 'dev'), arg('suites', 'api,regression').split(','), arg('reason', 'manual'), process.env.OPS_FRONTEND_BUILD).then(run => {
    if (!run) return;
    const line = (n: string, c?: Counts) => (c ? `${n} ${c.passed + c.flaky}/${c.total} passed${c.failed ? `, ${c.failed} failed` : ''}` : '');
    console.log(`${run.ok ? '✓' : '✗'} Health ${run.env} ${run.version} — ${[line('API', run.api), line('regression', run.regression)].filter(Boolean).join(' · ')}${run.error ? ` — ${run.error}` : ''}`);
    process.exit(run.ok ? 0 : 1);
  }).catch(e => { console.error(`✗ ${e.message}`); process.exit(1); });
}
