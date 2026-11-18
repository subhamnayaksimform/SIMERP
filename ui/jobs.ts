/**
 * QA Workspace — jobs + history.
 *
 * Every button that does work (run tests, new requirement → test cases, refresh a report…)
 * becomes a job: an allow-listed list of commands handed to ui/job-runner.js, which runs
 * detached. The server only reads the job's status/log files, so restarting the UI never
 * kills a running job. Finished jobs are "finalised" lazily: results snapshot, pass/fail
 * stats, produced files, and the uploaded requirement doc moved onto its module.
 */

import * as fs from 'fs';
import * as path from 'path';
import { spawn } from 'child_process';
import { ROOT, REPORTS, HISTORY_DIR, ATTACH_DIR, RESULTS_JSON, rel, readJson, writeJson, listFiles, slug, parseResults, summarize, rowsFor } from './indexer';

const HISTORY_FILE = path.join(HISTORY_DIR, 'history.json');
const JOBS_DIR = path.join(HISTORY_DIR, 'jobs');
const SNAPSHOT_DIR = path.join(HISTORY_DIR, 'results');
const PW_HTML = path.join(REPORTS, 'results', 'html', 'index.html');
export const INBOX_DIR = path.join(ATTACH_DIR, '_inbox');
for (const d of [JOBS_DIR, SNAPSHOT_DIR, INBOX_DIR]) fs.mkdirSync(d, { recursive: true });

export type Stats = ReturnType<typeof summarize>;
export interface HistoryEntry {
  id: string; type: string; label: string; code?: string; startedAt: string; finishedAt?: string;
  status: 'running' | 'passed' | 'failed' | 'done' | 'stopped'; exitCode?: number; command?: string;
  logFile?: string; jobDir?: string; resultsSnapshot?: string; stats?: Record<string, Stats>;
  producedFiles?: string[]; outputs?: { kind: string; path: string }[]; details?: string; inboxFile?: string;
  isTestRun?: boolean; finalized?: boolean;
}

let history: HistoryEntry[] = readJson(HISTORY_FILE, []);
export const getHistory = () => history;
const saveHistory = () => writeJson(HISTORY_FILE, history);

export function addHistory(e: Omit<HistoryEntry, 'id' | 'startedAt'> & { startedAt?: string }): HistoryEntry {
  const entry: HistoryEntry = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, startedAt: new Date().toISOString(), ...e };
  history.unshift(entry);
  saveHistory();
  return entry;
}

// ─── planning (allow-list) ───

type Step = { label: string; cmd: string; args: string[]; ignoreFailure?: boolean; env?: Record<string, string> };
const npx = (...args: string[]): Step => ({ label: `npx ${args.join(' ')}`, cmd: 'npx', args });
const npmRun = (script: string, ...extra: string[]): Step => ({ label: `npm run ${script}`, cmd: 'npm', args: ['run', script, ...(extra.length ? ['--', ...extra] : [])] });
const CODE_RE = /^[A-Z]{2,12}$/;

interface Plan { label: string; code?: string; steps: Step[]; isTestRun?: boolean; inboxFile?: string }

export function planAction(action: string, opts: any): Plan | string {
  const code = typeof opts.code === 'string' && CODE_RE.test(opts.code) ? opts.code : undefined;
  switch (action) {
    case 'run-tests': {
      const args = ['playwright', 'test', '--config=tests/playwright.config.ts', '--project=chromium'];
      if (!code && opts.grep !== undefined && opts.grep !== '' && !(typeof opts.grep === 'string' && /^[@\w\- |]{1,80}$/.test(opts.grep))) {
        return 'A tag can only use letters, numbers, @, -, | and spaces — e.g. @smoke';
      }
      const grep = code ? `TC-${code}-` : (opts.grep as string | undefined) || '';
      if (grep) args.push('--grep', grep);
      if (opts.workers === 1) args.push('--workers=1');
      if (opts.headed) args.push('--headed');
      return {
        label: `Run tests — ${opts.name ?? code ?? (grep || 'all modules')}${opts.workers === 1 ? ' (1 worker)' : ''}`,
        code, isTestRun: true,
        steps: [
          // The config's global-setup logs every role in first — never bypass it.
          { label: 'Run Playwright tests (logs in first)', cmd: 'npx', args },
          { ...npmRun('report:qa'), label: 'Build QA report', ignoreFailure: true },
          { ...npmRun('report:html'), label: 'Build pipeline dashboard', ignoreFailure: true },
          { ...npmRun('report:excel', '--mode=results', '--input=reports/results/results.json', `--label=${code ?? (grep ? slug(grep) : 'all')}`), label: 'Build results Excel', ignoreFailure: true },
        ],
      };
    }
    case 'new-requirement': {
      const source = String(opts.source ?? '');
      let input = String(opts.input ?? '');
      if (source === 'file' || source === 'text') {
        if (!input.startsWith('reports/ui-attachments/_inbox/') || !fs.existsSync(path.join(ROOT, input))) return 'Upload the document first.';
      } else if (source === 'zoho') {
        input = input.replace(/\s+/g, '');
        if (!/^[\w-]+(,[\w-]+)*$/.test(input)) return 'Enter Zoho task IDs like SI4-T501, SI4-T502';
      } else return 'Pick a source: document, pasted text, or Zoho task IDs.';
      const name = String(opts.name ?? '').replace(/[^\w &().,/-]/g, '').slice(0, 120);
      const steps = opts.withAutomation ? 'analyze,cases,automation' : 'analyze,cases';
      const args = ['ts-node', 'scripts/pipeline-headless.ts', `--source=${source}`, `--input=${input}`, `--steps=${steps}`];
      if (name) args.push(`--name=${name}`);
      const what = source === 'zoho' ? input : name || path.basename(input).replace(/^\d+-/, '');
      return {
        label: `New requirement → test cases — ${what}`,
        inboxFile: source === 'zoho' ? undefined : input,
        steps: [{ label: 'Analyze requirement and write test cases (uses your Claude login)', cmd: 'npx', args }],
      };
    }
    case 'generate-automation': {
      const input = String(opts.file ?? '');
      if (!/^reports\/test-cases\/[\w.-]+\.json$/.test(input) || !fs.existsSync(path.join(ROOT, input))) return 'Pick a test cases JSON file.';
      return { label: `Generate test scripts — ${path.basename(input)}`, code, steps: [{ label: 'Generate Playwright scripts (uses your Claude login)', cmd: 'npx', args: ['ts-node', 'scripts/pipeline-headless.ts', '--source=cases', `--input=${input}`] }] };
    }
    case 'report-excel-cases': {
      const input = String(opts.file ?? '');
      if (!/^reports\/test-cases\/[\w.-]+\.json$/.test(input) || !fs.existsSync(path.join(ROOT, input))) return 'Pick a test cases JSON file.';
      return { label: `Excel for ${path.basename(input)}`, code, steps: [npmRun('report:excel', '--mode=test-cases', `--input=${input}`, `--label=${code ?? 'cases'}`)] };
    }
    case 'report-qa': return { label: 'Refresh QA report', steps: [npmRun('report:qa')] };
    case 'report-html': return { label: 'Refresh pipeline dashboard', steps: [npmRun('report:html')] };
    case 'report-md': return { label: 'Re-render test case library (Markdown)', steps: [npmRun('report:md', '--all', '--index')] };
    case 'kb-dry-run': return { label: 'Knowledge base sync (dry run)', steps: [npmRun('kb:update', '--dry-run')] };
    case 'typecheck': return { label: 'Type-check test code', steps: [npx('tsc', '--noEmit')] };
    case 'lint-tests': return { label: 'Lint test conventions', steps: [npmRun('lint:tests')] };
    case 'install-browsers': return { label: 'Install Playwright browser (Chromium)', steps: [npx('playwright', 'install', 'chromium')] };
    default: return `Unknown action: ${action}`;
  }
}

// ─── running ───

function alive(pid?: number): boolean {
  if (!pid) return false;
  try { process.kill(pid, 0); return true; } catch (e: any) { return e?.code === 'EPERM'; }
}

export function activeJob(): HistoryEntry | null {
  refreshJobs();
  return history.find(h => h.status === 'running') ?? null;
}

export function startJob(action: string, opts: any): HistoryEntry | string {
  const running = activeJob();
  if (running) return `“${running.label}” is still running. Wait for it to finish or stop it first.`;
  const plan = planAction(action, opts);
  if (typeof plan === 'string') return plan;
  const entry = addHistory({
    type: action, label: plan.label, code: plan.code, status: 'running', isTestRun: plan.isTestRun, inboxFile: plan.inboxFile,
    command: plan.steps.map(s => `${s.cmd} ${s.args.join(' ')}`).join('  →  '),
  });
  const jobDir = path.join(JOBS_DIR, entry.id);
  fs.mkdirSync(jobDir, { recursive: true });
  writeJson(path.join(jobDir, 'spec.json'), { steps: plan.steps });
  fs.writeFileSync(path.join(jobDir, 'log.txt'), `${entry.label}\nStarted ${new Date().toLocaleString()}\n`);
  entry.jobDir = rel(jobDir);
  entry.logFile = rel(path.join(jobDir, 'log.txt'));
  // Playwright rewrites results.json + its HTML report even when a run is stopped during login,
  // which would wipe the previous run's results — keep a copy to put back in that case.
  if (plan.isTestRun) {
    if (fs.existsSync(RESULTS_JSON)) fs.copyFileSync(RESULTS_JSON, path.join(jobDir, 'results-before.json'));
    if (fs.existsSync(PW_HTML)) fs.copyFileSync(PW_HTML, path.join(jobDir, 'pw-report-before.html'));
  }
  const proc = spawn(process.execPath, [path.join(__dirname, 'job-runner.js'), jobDir], { cwd: ROOT, detached: true, stdio: 'ignore' });
  proc.unref();
  saveHistory();
  return entry;
}

export function stopJob(): string | null {
  const job = activeJob();
  if (!job?.jobDir) return 'Nothing is running.';
  const st = readJson<any>(path.join(ROOT, job.jobDir, 'status.json'), {});
  try { process.kill(st.pid, 'SIGTERM'); } catch { return 'The job had already finished.'; }
  return null;
}

/** Pick up jobs that finished (or died) since we last looked. Cheap — reads small status files. */
export function refreshJobs() {
  let changed = false;
  for (const h of history) {
    if (h.status !== 'running') continue;
    if (!h.jobDir) { h.status = 'failed'; h.details = 'Interrupted (started by an older version of the workspace)'; changed = true; continue; }
    const st = readJson<any>(path.join(ROOT, h.jobDir, 'status.json'), null);
    if (st && st.status !== 'running') { finalize(h, st); changed = true; continue; }
    // Runner gone without writing a final status — machine reboot or it was killed.
    const startedLongAgo = Date.now() - Date.parse(h.startedAt) > 15_000;
    if ((!st && startedLongAgo) || (st && !alive(st.pid))) {
      finalize(h, { exitCode: 1, finishedAt: new Date().toISOString(), status: 'done' });
      h.status = 'failed';
      h.details = 'Interrupted — the job process stopped unexpectedly (computer restarted or the process was killed).';
      changed = true;
    }
  }
  if (changed) saveHistory();
}

function finalize(h: HistoryEntry, st: { exitCode: number; finishedAt: string; status: string }) {
  h.exitCode = st.exitCode;
  h.finishedAt = st.finishedAt;
  const started = Date.parse(h.startedAt);

  if (h.isTestRun && fs.existsSync(RESULTS_JSON) && fs.statSync(RESULTS_JSON).mtimeMs > started) {
    const fresh = parseResults(RESULTS_JSON).rows;
    const before = h.jobDir ? path.join(ROOT, h.jobDir, 'results-before.json') : '';
    if (!fresh.length && before && fs.existsSync(before)) {
      // Stopped (or failed) before any test ran — put the previous run's results back.
      fs.copyFileSync(before, RESULTS_JSON);
      const pwBefore = path.join(ROOT, h.jobDir!, 'pw-report-before.html');
      if (fs.existsSync(pwBefore)) fs.copyFileSync(pwBefore, PW_HTML);
      h.details = 'No tests ran, so the previous results were kept.';
    }
  }
  if (h.isTestRun && fs.existsSync(RESULTS_JSON) && fs.statSync(RESULTS_JSON).mtimeMs > started && parseResults(RESULTS_JSON).rows.length) {
    const snap = path.join(SNAPSHOT_DIR, `${h.id}.json`);
    fs.copyFileSync(RESULTS_JSON, snap);
    h.resultsSnapshot = rel(snap);
    const { rows } = parseResults(snap);
    const stats: Record<string, Stats> = { all: summarize(rows) };
    for (const c of new Set(rows.map(r => r.id?.split('-')[1]).filter(Boolean) as string[])) stats[c] = summarize(rowsFor(rows, c));
    h.stats = stats;
  }

  // Files written during the job.
  const produced: string[] = [];
  for (const d of ['excel', 'html', 'results', 'coverage', 'test-cases-review', 'requirements', 'test-cases']) {
    for (const f of listFiles(path.join(REPORTS, d))) if (fs.statSync(f).mtimeMs >= started - 1000) produced.push(rel(f));
  }
  for (const f of listFiles(path.join(ROOT, 'docs', 'test-cases'))) if (fs.statSync(f).mtimeMs >= started - 1000 && !f.endsWith('README.md')) produced.push(rel(f));
  h.producedFiles = produced;

  // Outputs announced by pipeline-headless (`@@output <kind> <path>`) → module + attach the source doc.
  if (h.logFile && fs.existsSync(path.join(ROOT, h.logFile))) {
    const log = fs.readFileSync(path.join(ROOT, h.logFile), 'utf8');
    h.outputs = [...log.matchAll(/^@@output (\S+) (.+)$/gm)].map(m => ({ kind: m[1], path: m[2].trim() }));
    const casesOut = h.outputs.find(o => o.kind === 'test-cases');
    if (casesOut && !h.code) {
      const cases = readJson<any[]>(path.join(ROOT, casesOut.path), []);
      const counts = new Map<string, number>();
      for (const c of Array.isArray(cases) ? cases : []) { const m = /^TC-([A-Z]{2,12})-/.exec(String(c?.id ?? '')); if (m) counts.set(m[1], (counts.get(m[1]) ?? 0) + 1); }
      h.code = [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
      h.details = `${Array.isArray(cases) ? cases.length : 0} test cases written${h.code ? ` for ${h.code}` : ''}.`;
    }
    if (h.code && h.inboxFile && fs.existsSync(path.join(ROOT, h.inboxFile))) {
      const dest = path.join(ATTACH_DIR, h.code, path.basename(h.inboxFile).replace(/^\d+-/, ''));
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.renameSync(path.join(ROOT, h.inboxFile), fs.existsSync(dest) ? dest.replace(/(\.[^.]+)?$/, `-${Date.now()}$1`) : dest);
      h.producedFiles.push(rel(dest));
    }
  }

  if (st.status === 'stopped') { h.status = 'stopped'; h.details = 'Stopped from the workspace.'; }
  else if (h.isTestRun) h.status = h.stats?.all?.failed ? 'failed' : st.exitCode === 0 ? 'passed' : 'failed';
  else h.status = st.exitCode === 0 ? 'done' : 'failed';
  if (h.isTestRun && st.status !== 'stopped' && st.exitCode !== 0 && !h.stats) h.details = `The test run ended before any test ran — open the log to see why (often login or .env setup).${h.details ? ' ' + h.details : ''}`;
  else if (st.status === 'stopped' && h.isTestRun && !h.stats) h.details = 'Stopped before any test ran. The previous results were kept.';
  h.finalized = true;
}

export function readLog(h: HistoryEntry, since: number): { log: string; size: number } {
  const abs = h.logFile ? path.join(ROOT, h.logFile) : '';
  if (!abs || !fs.existsSync(abs)) return { log: '', size: 0 };
  const size = fs.statSync(abs).size;
  const start = Math.max(since, size - 400_000);
  if (size <= start) return { log: '', size };
  const fd = fs.openSync(abs, 'r');
  const buf = Buffer.alloc(size - start);
  fs.readSync(fd, buf, 0, buf.length, start);
  fs.closeSync(fd);
  return { log: buf.toString('utf8').replace(/\x1b\[[0-9;?]*[A-Za-z]/g, ''), size };
}

/** Plain-language progress for the live view, from the step markers each job writes. */
export function progressOf(h: HistoryEntry): { done: string[]; current?: string; attention?: string } {
  if (!h.logFile || !fs.existsSync(path.join(ROOT, h.logFile))) return { done: [] };
  const log = fs.readFileSync(path.join(ROOT, h.logFile), 'utf8');
  const marks = [...log.matchAll(/^(?:▶ |=== )(.+)$/gm)].map(m => m[1].trim()).filter(m => !/^AI:/.test(m));
  if (h.status !== 'running') return { done: marks };
  // global-setup falls back to a manual login when auto-login fails — a background job then
  // just waits, so say so instead of looking stuck.
  const lastAction = log.lastIndexOf('ACTION REQUIRED');
  const attention = lastAction > -1 && lastAction > log.lastIndexOf('✓ Logged in')
    ? 'A login needs you: a browser window should have opened — log in there, then press ▶ Resume in the Playwright Inspector. If no window appeared, stop this run and check the logins in .env.'
    : undefined;
  return { done: marks.slice(0, -1), current: marks[marks.length - 1], attention };
}

// ─── past runs from QA reports ───
// Runs done from a terminal/the pipeline leave a QA report (reports/html/qa-report-*.html) with
// every test's result embedded, but no log. Turn each distinct run into a history entry so every
// module's Runs tab and trend show its whole history. Re-running is cheap: already-imported
// reports and runs already in history (same start time) are skipped.

const QA_REPORT_RE = /^qa-report-(\d{4}-\d{2}-\d{2}_\d{2}-\d{2})\.html$/;

export function importPastRuns(names: Map<string, string> = new Map()): { imported: number; skipped: number } {
  const dir = path.join(REPORTS, 'html');
  const files = (fs.existsSync(dir) ? fs.readdirSync(dir) : []).filter(f => QA_REPORT_RE.test(f)).sort().reverse(); // newest first
  const known = new Set(history.map(h => (h as any).importedFrom).filter(Boolean));
  const starts = new Set(history.filter(h => h.isTestRun).map(h => h.startedAt.slice(0, 19)));
  let imported = 0, skipped = 0;
  for (const f of files) {
    const rel_ = `reports/html/${f}`;
    if (known.has(rel_)) { skipped++; continue; }
    let data: any;
    try {
      const html = fs.readFileSync(path.join(dir, f), 'utf8');
      const m = /const REPORT_DATA = (\{[\s\S]*?\});\s*\n/.exec(html);
      data = m ? JSON.parse(m[1]) : null;
    } catch { data = null; }
    if (!data?.tests?.length || !data.stats?.startTime) { skipped++; continue; }
    const start = new Date(data.stats.startTime).toISOString();
    if (starts.has(start.slice(0, 19))) { skipped++; continue; } // same run, report regenerated
    starts.add(start.slice(0, 19));

    // Known-defect / not-built tests are expected to fail: Playwright counts them as passing.
    const expectedFail = (t: any) => t.status === 'failed' && /@known-defect|@not-built/.test(String(t.tags ?? ''));
    const outcome = (t: any) => expectedFail(t) || t.status === 'passed' ? 'expected' : t.status === 'flaky' ? 'flaky' : t.status === 'skipped' ? 'skipped' : 'unexpected';
    const specs = data.tests.map((t: any) => ({
      title: `${t.id} ${t.title}`, file: `(from ${f})`,
      tests: [{ status: outcome(t), results: [{ status: t.status, duration: t.duration, ...(t.errorMsg ? { error: { message: t.errorMsg } } : {}) }] }],
    }));
    const stamp = QA_REPORT_RE.exec(f)![1];
    const id = `import-${stamp}`;
    const snap = path.join(SNAPSHOT_DIR, `${id}.json`);
    writeJson(snap, { importedFrom: rel_, note: 'Built from the QA report — no console log was saved for this run. Known-defect/not-built tests count as passing, as Playwright does.', stats: data.stats, suites: [{ title: 'imported', file: `(from ${f})`, specs }] });
    const { rows } = parseResults(snap);
    const stats: Record<string, Stats> = { all: summarize(rows) };
    for (const c of new Set(rows.map(r => r.id?.split('-')[1]).filter(Boolean) as string[])) stats[c] = summarize(rowsFor(rows, c));
    const codes = Object.keys(stats).filter(k => k !== 'all').sort((a, b) => stats[b].total - stats[a].total);
    const who = codes.length === 1 ? (names.get(codes[0]) ?? codes[0]) : codes.length <= 3 ? codes.map(c => names.get(c) ?? c).join(', ') : `${codes.length} modules`;
    const produced = [rel_, ...['excel', 'html'].flatMap(d => (fs.existsSync(path.join(REPORTS, d)) ? fs.readdirSync(path.join(REPORTS, d)) : [])
      .filter(n => n.includes(stamp) && n !== f && /^(results-|pipeline-report-)/.test(n)).map(n => `reports/${n.endsWith('.xlsx') ? 'excel' : 'html'}/${n}`))];
    const entry: HistoryEntry & { importedFrom: string } = {
      id, type: 'run-tests', label: `Run tests — ${who}`, code: codes.length === 1 ? codes[0] : undefined,
      startedAt: start, finishedAt: new Date(Date.parse(start) + (data.stats.duration || 0)).toISOString(),
      status: stats.all.failed ? 'failed' : 'passed', exitCode: stats.all.failed ? 1 : 0, isTestRun: true, finalized: true,
      resultsSnapshot: rel(snap), stats, producedFiles: produced, importedFrom: rel_,
      details: 'From the QA report of a run done outside the workspace (no log was saved).',
    };
    history.push(entry);
    imported++;
  }
  if (imported) { history.sort((a, b) => b.startedAt.localeCompare(a.startedAt)); saveHistory(); }
  return { imported, skipped };
}
