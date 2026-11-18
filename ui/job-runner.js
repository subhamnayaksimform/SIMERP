#!/usr/bin/env node
/**
 * QA Workspace job runner — runs one job's steps in its own detached process, so a test run
 * or AI generation keeps going even if the UI server is stopped or restarted.
 *
 *   node ui/job-runner.js <jobDir>
 *
 * <jobDir>/spec.json   { steps: [{ label, cmd, args, ignoreFailure? }] }   (written by the server)
 * <jobDir>/log.txt     combined output of every step
 * <jobDir>/status.json { status: running|done|stopped, pid, step, exitCode, finishedAt }
 *
 * Plain JS (no ts-node) so it starts instantly and has no build dependency.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const jobDir = process.argv[2];
if (!jobDir) { console.error('usage: job-runner.js <jobDir>'); process.exit(2); }
const ROOT = path.resolve(__dirname, '..');
const spec = JSON.parse(fs.readFileSync(path.join(jobDir, 'spec.json'), 'utf8'));
const log = fs.openSync(path.join(jobDir, 'log.txt'), 'a');
const write = s => fs.writeSync(log, s);
const status = { status: 'running', pid: process.pid, step: 0, startedAt: new Date().toISOString() };
const saveStatus = () => fs.writeFileSync(path.join(jobDir, 'status.json'), JSON.stringify(status, null, 2));
saveStatus();

let child = null;
let stopped = false;

function finish(code) {
  status.status = stopped ? 'stopped' : 'done';
  status.exitCode = code;
  status.finishedAt = new Date().toISOString();
  saveStatus();
  fs.closeSync(log);
  process.exit(0);
}

function stop() {
  if (stopped) return;
  stopped = true;
  write('\n[workspace] Stop requested — ending the current step…\n');
  // Each step runs in its own process group so browsers/AI subprocesses go down with it.
  if (child) { try { process.kill(-child.pid, 'SIGTERM'); } catch { try { child.kill('SIGTERM'); } catch { /* already gone */ } } }
  setTimeout(() => { if (child) { try { process.kill(-child.pid, 'SIGKILL'); } catch { /* gone */ } } finish(130); }, 8000).unref();
}
process.on('SIGTERM', stop);
process.on('SIGINT', stop);

function runStep(i, worst) {
  if (stopped) return finish(130);
  if (i >= spec.steps.length) return finish(worst);
  const s = spec.steps[i];
  status.step = i;
  saveStatus();
  write(`\n▶ ${s.label}\n`);
  const isWin = process.platform === 'win32';
  child = spawn(s.cmd, s.args, {
    cwd: ROOT,
    detached: !isWin,
    shell: isWin, // npm/npx are .cmd shims on Windows
    stdio: ['ignore', log, log],
    env: { ...process.env, FORCE_COLOR: '0', NO_COLOR: '1', ...(s.env || {}) },
  });
  child.on('error', err => write(`\n[workspace] could not start "${s.cmd}": ${err.message}\n`));
  child.on('close', code => {
    child = null;
    const exit = code == null ? 1 : code;
    write(`\n[workspace] ${s.label} — exit ${exit}\n`);
    runStep(i + 1, s.ignoreFailure ? worst : Math.max(worst, exit));
  });
}

runStep(0, 0);
