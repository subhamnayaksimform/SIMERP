#!/usr/bin/env node
/**
 * QA Workspace launcher.
 *
 *   npm run ui            start in the background (keeps running after the terminal closes,
 *                         restarts itself if it crashes) and open the browser
 *   npm run ui:stop       stop it — test runs already in progress keep going
 *   npm run ui:status     is it running, and is a job running?
 *   npm run ui:restart    stop + start
 *
 * Flags: --no-open (don't open a browser). Port: UI_PORT (default 4321).
 * Plain JS so it starts instantly; the server itself runs through ts-node.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const PORT = Number(process.env.UI_PORT || 4321);
const URL_ = `http://localhost:${PORT}`;
const STATE_DIR = path.join(ROOT, 'reports', 'ui-history');
const PID_FILE = path.join(STATE_DIR, 'workspace.pid');
const LOG_FILE = path.join(STATE_DIR, 'server.log');
fs.mkdirSync(STATE_DIR, { recursive: true });

const cmd = process.argv[2] || 'start';
const noOpen = process.argv.includes('--no-open') || !!process.env.CI;

function health() {
  return new Promise(resolve => {
    const req = http.get({ host: '127.0.0.1', port: PORT, path: '/api/health', timeout: 1500 }, res => {
      let body = '';
      res.on('data', d => (body += d));
      res.on('end', () => { try { resolve(JSON.parse(body)); } catch { resolve({ app: 'other' }); } });
    });
    req.on('error', () => resolve(null));
    req.on('timeout', () => { req.destroy(); resolve(null); });
  });
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
const readPid = () => { try { return JSON.parse(fs.readFileSync(PID_FILE, 'utf8')); } catch { return null; } };
const alive = pid => { if (!pid) return false; try { process.kill(pid, 0); return true; } catch (e) { return e.code === 'EPERM'; } };

function openBrowser(url) {
  if (noOpen) return;
  if (process.platform === 'linux' && !process.env.DISPLAY && !process.env.WAYLAND_DISPLAY) return;
  const [c, a] = process.platform === 'darwin' ? ['open', [url]] : process.platform === 'win32' ? ['cmd', ['/c', 'start', '', url]] : ['xdg-open', [url]];
  try { spawn(c, a, { detached: true, stdio: 'ignore' }).unref(); } catch { /* no browser — URL is printed anyway */ }
}

function runningJob() {
  try {
    const h = JSON.parse(fs.readFileSync(path.join(STATE_DIR, 'history.json'), 'utf8'));
    return h.find(x => x.status === 'running') || null;
  } catch { return null; }
}

async function start() {
  const h = await health();
  if (h && h.app === 'simerp-qa-workspace') {
    if (path.resolve(h.root) !== ROOT) {
      console.error(`Another copy of the workspace (from ${h.root}) is using port ${PORT}.\nStop it with "npm run ui:stop" in that folder, or start this one with: UI_PORT=4322 npm run ui`);
      process.exit(1);
    }
    console.log(`\n  SimERP QA Workspace is already running → ${URL_}\n`);
    openBrowser(URL_);
    return;
  }
  if (h) { console.error(`Port ${PORT} is used by another program. Start on a different port: UI_PORT=4322 npm run ui`); process.exit(1); }
  if (!fs.existsSync(path.join(ROOT, 'node_modules', 'ts-node'))) {
    console.error('Dependencies are not installed yet. Run:  npm install   then  npm run ui');
    process.exit(1);
  }

  process.stdout.write('\n  Starting SimERP QA Workspace');
  const sup = spawn(process.execPath, [__filename, 'supervise'], { cwd: ROOT, detached: true, stdio: 'ignore', env: process.env });
  sup.unref();
  for (let i = 0; i < 90; i++) {
    await sleep(1000);
    process.stdout.write('.');
    const ok = await health();
    if (ok && ok.app === 'simerp-qa-workspace') {
      console.log(`\n\n  Ready → ${URL_}\n\n  It keeps running in the background — you can close this terminal.\n  Stop it with: npm run ui:stop\n`);
      openBrowser(URL_);
      return;
    }
    if (!alive(sup.pid)) break;
  }
  console.error(`\n\n  The workspace did not start. Last lines of ${path.relative(ROOT, LOG_FILE)}:\n`);
  try { console.error(fs.readFileSync(LOG_FILE, 'utf8').split('\n').slice(-25).join('\n')); } catch { /* no log */ }
  process.exit(1);
}

/** Keeps the server alive: restarts it if it exits, gives up after 5 crashes in a minute. */
function supervise() {
  fs.writeFileSync(PID_FILE, JSON.stringify({ supervisor: process.pid, port: PORT, startedAt: new Date().toISOString() }));
  try { if (fs.statSync(LOG_FILE).size > 5 * 1024 * 1024) fs.renameSync(LOG_FILE, LOG_FILE + '.1'); } catch { /* first run */ }
  const tsNode = require.resolve('ts-node/dist/bin.js', { paths: [ROOT] });
  const crashes = [];
  let child = null;
  let stopping = false;

  const launch = () => {
    const out = fs.openSync(LOG_FILE, 'a');
    fs.writeSync(out, `\n[${new Date().toISOString()}] starting server\n`);
    child = spawn(process.execPath, [tsNode, '--transpile-only', path.join(ROOT, 'ui', 'server.ts')], {
      cwd: ROOT, stdio: ['ignore', out, out], env: { ...process.env, UI_PORT: String(PORT) },
    });
    child.on('exit', code => {
      fs.closeSync(out);
      if (stopping) return;
      const now = Date.now();
      crashes.push(now);
      while (crashes.length && now - crashes[0] > 60_000) crashes.shift();
      if (code === 1 && crashes.length >= 5) {
        fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] server crashed 5 times in a minute — giving up. Fix the error above, then: npm run ui\n`);
        try { fs.unlinkSync(PID_FILE); } catch { /* gone */ }
        process.exit(1);
      }
      fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] server exited (${code}) — restarting in 2s\n`);
      setTimeout(launch, 2000);
    });
  };
  const shutdown = () => {
    stopping = true;
    if (child) child.kill('SIGTERM');
    try { fs.unlinkSync(PID_FILE); } catch { /* gone */ }
    setTimeout(() => process.exit(0), 500);
  };
  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
  launch();
}

async function stop(quiet) {
  const info = readPid();
  if (!info || !alive(info.supervisor)) {
    try { fs.unlinkSync(PID_FILE); } catch { /* none */ }
    const h = await health();
    if (h && h.app === 'simerp-qa-workspace' && h.pid) { try { process.kill(h.pid, 'SIGTERM'); } catch { /* gone */ } }
    else if (!quiet) console.log('  The workspace is not running.');
    return;
  }
  process.kill(info.supervisor, 'SIGTERM');
  for (let i = 0; i < 20 && alive(info.supervisor); i++) await sleep(250);
  if (!quiet) {
    console.log('  Stopped the SimERP QA Workspace.');
    const job = runningJob();
    if (job) console.log(`  “${job.label}” is still running in the background and will finish on its own — start the workspace again to see it.`);
  }
}

async function status() {
  const h = await health();
  const job = runningJob();
  console.log(h && h.app === 'simerp-qa-workspace' ? `  Running → ${URL_}` : '  Not running. Start it with: npm run ui');
  if (job) console.log(`  Job in progress: ${job.label} (started ${new Date(job.startedAt).toLocaleString()})`);
}

(async () => {
  if (cmd === 'supervise') return supervise();
  if (cmd === 'stop') return stop(false);
  if (cmd === 'status') return status();
  if (cmd === 'restart') { await stop(true); await sleep(500); return start(); }
  return start();
})();
