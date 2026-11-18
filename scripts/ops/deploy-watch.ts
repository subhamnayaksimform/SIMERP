/**
 * Deploy watcher — run by cron every 10 minutes (npm run ops:cron:install).
 *
 * For each environment it probes the API health-check (status, response time, X-API-Version,
 * uptime) and the frontend (build fingerprint from the asset file names in index.html), and
 * records the probe for the availability/latency charts. A deploy is detected when the API
 * version changes, the API uptime resets (restart), or the frontend build changes — then a full
 * health run (API checks + regression suite) starts in the background for envs that run suites.
 * Plain HTTP + Playwright, no Claude.
 */

import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { spawn } from 'child_process';
import { ROOT, HEALTH_DIR, LOG_DIR, readJson, writeJson } from './store';
import { opsEnvs, OpsEnv } from './envs';
import { isHealthRunning, healthRuns } from './health-check';

export const PROBES_FILE = (env: string) => path.join(HEALTH_DIR, `probes-${env}.json`);
export const DEPLOYS_FILE = path.join(HEALTH_DIR, 'deploys.json');
const STATE_FILE = path.join(HEALTH_DIR, 'watch-state.json');
const KEEP_PROBES = 3000; // ~3 weeks at one probe per 10 minutes

export interface Probe { at: string; up: boolean; status: number; ms: number | null; version: string; uptime: number | null; frontendBuild: string; frontendUp: boolean; error?: string }
export interface DeployEvent { at: string; env: string; kinds: ('backend' | 'restart' | 'frontend')[]; fromVersion: string; toVersion: string; frontendBuild: string; healthRun: 'started' | 'skipped' | 'pending' }

async function probe(env: OpsEnv): Promise<Probe> {
  const p: Probe = { at: new Date().toISOString(), up: false, status: 0, ms: null, version: '', uptime: null, frontendBuild: '', frontendUp: false };
  const started = Date.now();
  try {
    const r = await fetch(`${env.apiUrl}/api/v1/health-check`, { signal: AbortSignal.timeout(15_000) });
    p.ms = Date.now() - started;
    p.status = r.status;
    p.version = r.headers.get('x-api-version') ?? '';
    const body: any = await r.json().catch(() => null);
    p.uptime = typeof body?.data?.uptime === 'number' ? body.data.uptime : null;
    p.up = r.ok;
  } catch (e) { p.error = `API: ${(e as Error).message}`; }
  try {
    const r = await fetch(`${env.baseUrl}/`, { signal: AbortSignal.timeout(15_000) });
    const html = await r.text();
    p.frontendUp = r.ok;
    // Vite emits content-hashed asset names — they change on every frontend build.
    const assets = [...html.matchAll(/(?:src|href)="([^"]*\/assets\/[^"]+)"/g)].map(m => m[1]).sort();
    p.frontendBuild = assets.length ? crypto.createHash('sha1').update(assets.join('|')).digest('hex').slice(0, 10) : '';
  } catch (e) { p.error = [p.error, `Frontend: ${(e as Error).message}`].filter(Boolean).join(' · '); }
  return p;
}

function startHealthRun(env: OpsEnv, frontendBuild: string) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
  const out = fs.openSync(path.join(LOG_DIR, 'health.log'), 'a');
  const tsNode = require.resolve('ts-node/dist/bin.js', { paths: [ROOT] });
  spawn(process.execPath, [tsNode, '--transpile-only', path.join(ROOT, 'scripts/ops/health-check.ts'), `--env=${env.name}`, '--suites=api,regression', '--reason=deploy'], {
    cwd: ROOT, detached: true, stdio: ['ignore', out, out], env: { ...process.env, OPS_FRONTEND_BUILD: frontendBuild },
  }).unref();
}

export async function watch(): Promise<void> {
  const state = readJson<Record<string, { version: string; uptime: number | null; frontendBuild: string; pending?: boolean }>>(STATE_FILE, {});
  for (const env of opsEnvs()) {
    const p = await probe(env);
    const file = PROBES_FILE(env.name);
    writeJson(file, [...readJson<Probe[]>(file, []), p].slice(-KEEP_PROBES));

    const prev = state[env.name];
    const kinds: DeployEvent['kinds'] = [];
    if (prev && p.up) {
      if (p.version && prev.version && p.version !== prev.version) kinds.push('backend');
      else if (p.uptime !== null && prev.uptime !== null && p.uptime < prev.uptime) kinds.push('restart');
    }
    if (prev && p.frontendBuild && prev.frontendBuild && p.frontendBuild !== prev.frontendBuild) kinds.push('frontend');

    let pending = prev?.pending ?? false;
    if (kinds.length) {
      const recent = healthRuns(env.name, 1)[0];
      const justRan = recent && Date.now() - new Date(recent.startedAt).getTime() < 20 * 60_000;
      const event: DeployEvent = { at: p.at, env: env.name, kinds, fromVersion: prev!.version, toVersion: p.version, frontendBuild: p.frontendBuild, healthRun: !env.suites ? 'skipped' : justRan ? 'skipped' : 'pending' };
      writeJson(DEPLOYS_FILE, [event, ...readJson<DeployEvent[]>(DEPLOYS_FILE, [])].slice(0, 500));
      console.log(`[${p.at}] ${env.name}: deploy detected (${kinds.join(', ')}) ${prev!.version} → ${p.version}`);
      if (event.healthRun === 'pending') pending = true;
    }
    // Start (or retry) a pending health run once the env is up and nothing else is running.
    if (pending && env.suites && p.up && !isHealthRunning()) {
      startHealthRun(env, p.frontendBuild);
      pending = false;
      const deploys = readJson<DeployEvent[]>(DEPLOYS_FILE, []);
      const d = deploys.find(x => x.env === env.name && x.healthRun === 'pending');
      if (d) { d.healthRun = 'started'; writeJson(DEPLOYS_FILE, deploys); }
    }
    state[env.name] = {
      version: p.version || prev?.version || '', uptime: p.uptime ?? prev?.uptime ?? null,
      frontendBuild: p.frontendBuild || prev?.frontendBuild || '', pending,
    };
  }
  writeJson(STATE_FILE, state);
}

if (require.main === module) watch().catch(e => { console.error(`✗ deploy watch failed: ${e.message}`); process.exit(1); });
