/**
 * Test-suite analytics for the ops dashboard — everything the QA Workspace and the generated
 * reports already know, merged into one view. Read-only, rule-based, no AI.
 *
 * Sources:
 *   - QA Workspace modules + cases            ui/indexer.ts buildIndex() / latestCases()
 *   - QA Workspace run history                 reports/ui-history/history.json (+ results snapshots)
 *   - QA reports (terminal + workspace runs)   reports/html/qa-report-*.html — each embeds REPORT_DATA
 *   - Pipeline reports                         reports/html/pipeline-report-*.html — stat tiles
 * Parsed report summaries are cached in reports/ops/data/reports-index.json, keyed by file mtime.
 */

import * as fs from 'fs';
import * as path from 'path';
import { buildIndex, latestCases, parseResults, HISTORY_DIR } from '../../ui/indexer';
import { ROOT, OPS_DIR, readJson, writeJson } from './store';

export const REPORTS_HTML = path.join(ROOT, 'reports/html');
const INDEX_FILE = path.join(OPS_DIR, 'data/reports-index.json');

type St = 'passed' | 'failed' | 'flaky' | 'skipped';
interface Counts { total: number; passed: number; failed: number; flaky: number; skipped: number }

export interface QaReportSummary extends Counts {
  file: string; title: string; at: string; mtime: number;
  codes: Record<string, Counts>;
  results: Record<string, St>;                       // test id → status (ids only, no payload)
  failures: { id: string; title: string; error: string }[];
  keys: string[];                                    // Zoho keys from @T1549-style tags
  tagged: Record<string, string[]>;                  // Zoho key → test ids tagged with it
}
export interface PipelineReportSummary { file: string; at: string; mtime: number; stats: { label: string; value: string; section: string }[] }

export interface Run extends Counts {
  id: string; at: string; label: string; source: 'workspace' | 'report';
  codes: string[]; report?: string; historyId?: string; status: string;
}

const zero = (): Counts => ({ total: 0, passed: 0, failed: 0, flaky: 0, skipped: 0 });
const codeOf = (id: string) => /^TC-([A-Z]{2,12})-/.exec(id)?.[1] ?? 'OTHER';
const firstLine = (s: string) => String(s ?? '').replace(/\u001b\[[0-9;]*m/g, '').split('\n').map(l => l.trim()).find(Boolean)?.slice(0, 240) ?? '';
export const passRate = (c: Counts) => (c.total - c.skipped > 0 ? Math.round(((c.passed + c.flaky) / (c.total - c.skipped)) * 100) : null);

// ─── report parsing ───

function parseQaReport(file: string, mtime: number): QaReportSummary | null {
  const text = fs.readFileSync(file, 'utf8');
  const start = text.indexOf('const REPORT_DATA = ');
  if (start < 0) return null;
  const from = start + 'const REPORT_DATA = '.length;
  const end = text.indexOf(';\n', from);
  let data: any;
  try { data = JSON.parse(text.slice(from, end)); } catch { return null; }
  let title = (/<title>([^<]*)<\/title>/.exec(text)?.[1] ?? '').replace(/^QA Report\s*[—-]\s*/, '').trim();
  // Many reports are just titled "SIM ERP" — name those after the file (qa-report-2026-10-21-shdlnk-e2e → "shdlnk e2e").
  if (!title || /^SIM\s*ERP$/i.test(title)) {
    const slug = path.basename(file, '.html').replace(/^qa-report-?/, '').replace(/\d{4}-\d{2}-\d{2}(_\d{2}-\d{2}(-\d{2})?)?/, '').replace(/^-+|-+$/g, '').replace(/-+/g, ' ');
    title = slug ? `SIM ERP · ${slug}` : 'SIM ERP · full run';
  }
  const s: QaReportSummary = { file: path.basename(file), title, at: data.stats?.startTime || new Date(mtime).toISOString(), mtime, ...zero(), codes: {}, results: {}, failures: [], keys: [], tagged: {} };
  const keys = new Set<string>();
  for (const t of data.tests ?? []) {
    const st: St = t.status === 'passed' || t.status === 'failed' || t.status === 'flaky' ? t.status : t.status === 'timedOut' ? 'failed' : 'skipped';
    const code = codeOf(String(t.id ?? ''));
    s.codes[code] ??= zero();
    s.total++; s[st]++; s.codes[code].total++; s.codes[code][st]++;
    if (t.id) s.results[t.id] = st;
    if (st === 'failed') s.failures.push({ id: String(t.id ?? ''), title: String(t.title ?? ''), error: firstLine(t.errorMsg) });
    for (const m of String(t.tags ?? '').matchAll(/@((?:SI4-)?[TI]\d{2,5})\b/gi)) {
      const k = m[1].toUpperCase().replace(/^SI4-/, '');
      keys.add(k);
      if (t.id) (s.tagged[k] ??= []).push(String(t.id));
    }
  }
  s.keys = [...keys];
  return s;
}

function parsePipelineReport(file: string, mtime: number): PipelineReportSummary {
  const text = fs.readFileSync(file, 'utf8');
  const stats: PipelineReportSummary['stats'] = [];
  let section = '';
  for (const m of text.matchAll(/<h2>([^<]*)|class="stat-value"[^>]*>([^<]*)<\/span>\s*<span class="stat-label">([^<]*)/g)) {
    if (m[1] !== undefined) section = m[1].trim();
    else stats.push({ section, value: m[2].trim(), label: m[3].trim() });
  }
  const stamp = /pipeline-report-(\d{4}-\d{2}-\d{2})_(\d{2})-(\d{2})/.exec(file);
  return { file: path.basename(file), at: stamp ? new Date(`${stamp[1]}T${stamp[2]}:${stamp[3]}:00`).toISOString() : new Date(mtime).toISOString(), mtime, stats };
}

let memo: { at: number; qa: QaReportSummary[]; pipeline: PipelineReportSummary[] } | null = null;

/** Parse every report once, then only new/changed files (cache keyed by mtime). */
export function reportsIndex(): { qa: QaReportSummary[]; pipeline: PipelineReportSummary[] } {
  if (memo && Date.now() - memo.at < 30_000) return memo;
  const CACHE_VERSION = 2;
  let cache = readJson<{ v?: number; qa: Record<string, QaReportSummary | null>; pipeline: Record<string, PipelineReportSummary> }>(INDEX_FILE, { qa: {}, pipeline: {} });
  if (cache.v !== CACHE_VERSION) cache = { qa: {}, pipeline: {} };
  const files = fs.existsSync(REPORTS_HTML) ? fs.readdirSync(REPORTS_HTML) : [];
  const qa: QaReportSummary[] = [], pipeline: PipelineReportSummary[] = [];
  const next = { v: CACHE_VERSION, qa: {} as Record<string, QaReportSummary | null>, pipeline: {} as Record<string, PipelineReportSummary> };
  let changed = false;
  for (const f of files) {
    const abs = path.join(REPORTS_HTML, f);
    const mtime = Math.round(fs.statSync(abs).mtimeMs);
    if (/^qa-report.*\.html$/.test(f)) {
      let s = cache.qa[f];
      if (s === undefined || (s && s.mtime !== mtime)) { s = parseQaReport(abs, mtime); changed = true; }
      next.qa[f] = s;
      if (s && s.total) qa.push(s);
    } else if (/^pipeline-report.*\.html$/.test(f)) {
      let s = cache.pipeline[f];
      if (!s || s.mtime !== mtime) { s = parsePipelineReport(abs, mtime); changed = true; }
      next.pipeline[f] = s;
      pipeline.push(s);
    }
  }
  if (changed || Object.keys(cache.qa).length !== Object.keys(next.qa).length) writeJson(INDEX_FILE, next);
  qa.sort((a, b) => b.at.localeCompare(a.at));
  pipeline.sort((a, b) => b.at.localeCompare(a.at));
  memo = { at: Date.now(), qa, pipeline };
  return memo;
}

// ─── runs ───

/**
 * A QA Workspace run and the QA report built from it are the same run — merge entries within
 * 20 minutes of each other with identical counts, keeping the one that has a report to open.
 */
function dedupe<T extends Counts & { at: string; report?: string }>(sorted: T[]): T[] {
  const out: T[] = [];
  for (const r of sorted) {
    const twin = out.find(o => Math.abs(new Date(o.at).getTime() - new Date(r.at).getTime()) < 20 * 60_000 && o.total === r.total && o.passed === r.passed && o.failed === r.failed);
    if (!twin) out.push(r);
    else if (!twin.report && r.report) Object.assign(twin, { report: r.report });
  }
  return out;
}

const history = () => readJson<any[]>(path.join(HISTORY_DIR, 'history.json'), []);

/** Every test run we know of: QA Workspace runs + QA reports, newest first. */
export function allRuns(): Run[] {
  const runs: Run[] = [];
  for (const h of history()) {
    if (!h.isTestRun || !h.finishedAt || !h.stats) continue;
    const all: Counts = h.stats.all ?? Object.values(h.stats as Record<string, Counts>).reduce((a, c) => ({ total: a.total + c.total, passed: a.passed + c.passed, failed: a.failed + c.failed, flaky: a.flaky + c.flaky, skipped: a.skipped + c.skipped }), zero());
    if (!all.total) continue;
    runs.push({ id: `ws:${h.id}`, at: h.finishedAt, label: String(h.label).replace(/^Run tests — /, ''), source: 'workspace', codes: Object.keys(h.stats).filter(c => c !== 'all'), historyId: h.id, status: h.status, ...all });
  }
  for (const r of reportsIndex().qa) {
    runs.push({ id: `qa:${r.file}`, at: r.at, label: r.title, source: 'report', codes: Object.keys(r.codes).filter(c => c !== 'OTHER'), report: r.file, status: r.failed ? 'failed' : 'passed', total: r.total, passed: r.passed, failed: r.failed, flaky: r.flaky, skipped: r.skipped });
  }
  return dedupe(runs.sort((a, b) => b.at.localeCompare(a.at)));
}

/** Per-module runs: [{at, counts, ref}] from both sources, newest first. */
function moduleRuns(code: string) {
  const out: (Counts & { at: string; label: string; source: Run['source']; report?: string; historyId?: string })[] = [];
  for (const h of history()) {
    const c = h.isTestRun && h.finishedAt ? h.stats?.[code] : null;
    if (c?.total) out.push({ at: h.finishedAt, label: String(h.label).replace(/^Run tests — /, ''), source: 'workspace', historyId: h.id, ...c });
  }
  for (const r of reportsIndex().qa) {
    const c = r.codes[code];
    if (c?.total) out.push({ at: r.at, label: r.title, source: 'report', report: r.file, ...c });
  }
  out.splice(0, out.length, ...dedupe(out.sort((a, b) => b.at.localeCompare(a.at))));
  // Same "substantial run" rule as the QA Workspace: ignore runs that touched <25% of the biggest run.
  const max = Math.max(0, ...out.map(r => r.total));
  return out.filter(r => r.total >= Math.max(1, Math.ceil(max * 0.25)));
}

export function moduleHealth() {
  const { modules } = buildIndex();
  return [...modules.values()].filter(m => m.caseCount > 0).map(m => {
    const runs = moduleRuns(m.code);
    const last = runs[0] ?? null;
    return {
      code: m.code, name: m.name, group: m.group, caseCount: m.caseCount,
      specFiles: m.files.filter(f => f.path.startsWith('tests/e2e/')).length,
      lastRun: last ? { at: last.at, label: last.label, source: last.source, report: last.report, total: last.total, passed: last.passed, failed: last.failed, flaky: last.flaky, skipped: last.skipped, rate: passRate(last) } : null,
      trend: runs.slice(0, 12).reverse().map(r => passRate(r) ?? 0),
      runCount: runs.length,
    };
  }).sort((a, b) => a.group.localeCompare(b.group) || a.name.localeCompare(b.name));
}

export function moduleDetail(code: string) {
  const { modules } = buildIndex();
  const m = modules.get(code);
  if (!m) return null;
  const cases = latestCases(m).map((c: any) => ({ id: c.id, title: c.title ?? c.name ?? '', category: c.category ?? '', priority: c.priority ?? '', automated: c.automated ?? c.automatable }));
  const runs = moduleRuns(code).slice(0, 30);
  const lastReport = runs.find(r => r.report);
  const failing = lastReport ? reportsIndex().qa.find(r => r.file === lastReport.report)!.failures.filter(f => codeOf(f.id) === code).slice(0, 50) : [];
  return {
    code, name: m.name, group: m.group, caseCount: m.caseCount, cases, runs, failing,
    docs: m.files.filter(f => f.stage === 'test-case-docs' || f.path.startsWith('docs/')).map(f => f.path).slice(0, 20),
  };
}

/** Tests that failed most across the newest `window` runs (from report data + workspace snapshots). */
export function topFailing(window = 25, limit = 20) {
  const tally = new Map<string, { id: string; title: string; code: string; fails: number; seen: number; lastFailAt: string; lastError: string }>();
  const touch = (id: string, title: string, st: St, at: string, error = '') => {
    if (!id) return;
    const t = tally.get(id) ?? { id, title, code: codeOf(id), fails: 0, seen: 0, lastFailAt: '', lastError: '' };
    t.seen++;
    if (title && !t.title) t.title = title;
    if (st === 'failed') { t.fails++; if (at > t.lastFailAt) { t.lastFailAt = at; t.lastError = error || t.lastError; } }
    tally.set(id, t);
  };
  const runs = allRuns().slice(0, window);
  const qa = new Map(reportsIndex().qa.map(r => [r.file, r]));
  const hist = new Map(history().map(h => [h.id, h]));
  for (const run of runs) {
    if (run.report) {
      const r = qa.get(run.report)!;
      const fails = new Map(r.failures.map(f => [f.id, f]));
      for (const [id, st] of Object.entries(r.results)) touch(id, fails.get(id)?.title ?? '', st, run.at, fails.get(id)?.error);
    } else if (run.historyId) {
      const snap = hist.get(run.historyId)?.resultsSnapshot;
      if (!snap || !fs.existsSync(path.join(ROOT, snap))) continue;
      for (const row of parseResults(path.join(ROOT, snap)).rows) if (row.id) touch(row.id, row.title, row.status, run.at, firstLine(row.error ?? ''));
    }
  }
  return [...tally.values()].filter(t => t.fails > 0).sort((a, b) => b.fails - a.fails || b.lastFailAt.localeCompare(a.lastFailAt)).slice(0, limit)
    .map(t => ({ ...t, flaky: t.fails < t.seen }));
}

/** Zoho keys (short form, e.g. T1549) → TC codes, from @tags inside QA reports. */
export function keysFromReports(): Map<string, Set<string>> {
  const out = new Map<string, Set<string>>();
  for (const r of reportsIndex().qa) for (const k of r.keys) {
    const set = out.get(k) ?? new Set<string>();
    for (const c of Object.keys(r.codes)) if (c !== 'OTHER') set.add(c);
    out.set(k, set);
  }
  return out;
}

/** Newest test-case JSON written after `sinceIso` that mentions the key → its TC codes (after a Claude pipeline run). */
export function codesFromNewCases(key: string, sinceIso: string): string[] {
  const dir = path.join(ROOT, 'reports/test-cases');
  if (!fs.existsSync(dir)) return [];
  const since = new Date(sinceIso).getTime();
  const short = key.replace(/^SI4-/, '');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => path.join(dir, f)).filter(f => fs.statSync(f).mtimeMs >= since)
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);
  for (const f of files) {
    const text = fs.readFileSync(f, 'utf8');
    if (!text.includes(short) && files.length > 1) continue;
    const codes = new Set([...text.matchAll(/\bTC-([A-Z]{2,12})-\d+/g)].map(m => m[1]));
    if (codes.size) return [...codes];
  }
  return [];
}

/** Every test case in the suite, merged across modules (latest version of each id). */
export function allCases() {
  const { modules } = buildIndex();
  const out: { id: string; title: string; module: string; moduleName: string; category: string; priority: string }[] = [];
  for (const m of modules.values()) {
    if (!m.caseCount) continue;
    for (const c of latestCases(m) as any[]) out.push({ id: c.id, title: String(c.title ?? c.name ?? ''), module: m.code, moduleName: m.name, category: String(c.category ?? ''), priority: String(c.priority ?? '') });
  }
  return out;
}

/** One case in full (steps, preconditions, expected …) plus its results in recent QA reports. */
export function caseDetail(id: string) {
  const code = codeOf(id);
  const { modules } = buildIndex();
  const m = modules.get(code);
  const c = m ? (latestCases(m) as any[]).find(x => x.id === id) : null;
  const history = reportsIndex().qa.filter(r => r.results[id]).slice(0, 15).map(r => ({ report: r.file, title: r.title, at: r.at, status: r.results[id], error: r.failures.find(f => f.id === id)?.error }));
  if (!c && !history.length) return null;
  return { id, module: code, moduleName: m?.name ?? code, case: c ?? null, history };
}
