/**
 * Rich single-run QA report — donut chart, status/category filter pills, search, sortable
 * columns, and expandable rows showing steps/preconditions/expected result/tags, plus
 * embedded screenshots on failure.
 *
 * This is a different, additional report from generate-html-report.ts's consolidated
 * multi-stage pipeline dashboard (requirements → cases → automation → results → bugs) — this
 * one is exclusively about the tests from a single Playwright run, one row per test, meant to
 * be read on its own or shared as a standalone artifact. Do not merge the two.
 *
 * Renders qa-report-template.html (in this same directory) byte-for-byte except:
 *   1. `__REPORT_DATA_JSON__` -> JSON.stringify(the real computed data).
 *   2. The two hardcoded header strings (the <title>, the <meta name="description"> content,
 *      and the <span class="brand-ttl"> text) -> a title dynamically computed from the common
 *      tests/e2e/<module>/<sub-feature>/ path segments actually present in this run's results.
 * No other byte of the template changes — the donut/filter/table/detail-panel CSS and JS must
 * render pixel-identical to the reference template.
 *
 * Data sources joined:
 *   - reports/results/results.json (Playwright's own JSON reporter), parsed with the shared
 *     parsePlaywrightResults() in scripts/lib/failure-triage.ts — the same parser already used
 *     by generate-html-report.ts and the bug-filing path, so "what counts as flaky/failed" can
 *     never diverge between reports. Screenshot attachments are read from disk and inlined as
 *     base64 data URIs; a missing file just yields screenshot: null, never a thrown error.
 *   - every reports/test-cases/cases-*.json on disk, for steps/preconditions/expected/tags/
 *     priority (fields Playwright's own JSON never carries). Same test-case id appearing in
 *     two files resolves to whichever file has the newer mtime. A Playwright result with no
 *     matching test-case id still gets a report row — just with empty steps/preconditions.
 *   - stats.startTime / stats.duration come straight from Playwright JSON's own `stats` object,
 *     not from parsePlaywrightResults (whose returned `startTime` falls back to "now" because
 *     Playwright's JSON reporter puts startTime under `stats`, not top-level).
 *
 * CLI: ts-node generate-qa-report.ts [--results=<path>] [--out=<path>]
 * Output: reports/html/qa-report-<YYYY-MM-DD_HH-MM>.html
 */

import * as fs from 'fs';
import * as path from 'path';
import { parsePlaywrightResults, TestResult } from '../../../../scripts/lib/failure-triage';

const ROOT = path.resolve(__dirname, '..', '..', '..', '..');
const REPORTS_DIR = path.join(ROOT, 'reports');
const CASES_DIR = path.join(REPORTS_DIR, 'test-cases');
const HTML_DIR = path.join(REPORTS_DIR, 'html');
const TEMPLATE_PATH = path.join(__dirname, 'qa-report-template.html');
const DEFAULT_RESULTS = path.join(REPORTS_DIR, 'results', 'results.json');

type Status = 'passed' | 'flaky' | 'failed' | 'skipped';
type Priority = 'critical' | 'high' | 'medium' | 'low';

interface ReportTest {
  id: string;
  title: string;
  category: string;
  status: Status;
  priority: Priority;
  duration: number;
  retries: number;
  preconditions: string[];
  steps: string[];
  expectedResult: string;
  tags: string;
  errorMsg: string;
  screenshot: string | null;
}

interface CaseMeta {
  priority?: unknown;
  preconditions?: string | string[];
  steps?: string[];
  expected?: string;
  expectedResult?: string;
  tags?: string[];
}

function isoStamp(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}`;
}

function parseArgs(argv: string[]): { resultsPath: string; outPath?: string } {
  let resultsPath = DEFAULT_RESULTS;
  let outPath: string | undefined;
  for (const a of argv.slice(2)) {
    const [k, v] = a.replace(/^--/, '').split('=');
    if (k === 'results' && v) resultsPath = path.resolve(ROOT, v);
    if (k === 'out' && v) outPath = path.resolve(ROOT, v);
  }
  return { resultsPath, outPath };
}

// ── Test-case metadata join ──────────────────────────────────────────────────────
// Loads every cases-*.json on disk oldest-mtime-first, so a later assignment into the map
// (a more recently modified file) naturally wins when the same test-case id shows up twice.
function loadCaseMetaMap(): Map<string, CaseMeta> {
  const map = new Map<string, CaseMeta>();
  if (!fs.existsSync(CASES_DIR)) return map;
  const files = fs.readdirSync(CASES_DIR)
    .filter(f => f.startsWith('cases-') && f.endsWith('.json'))
    .map(f => path.join(CASES_DIR, f))
    .sort((a, b) => fs.statSync(a).mtimeMs - fs.statSync(b).mtimeMs);

  for (const file of files) {
    try {
      const parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
      const cases: Record<string, unknown>[] = Array.isArray(parsed) ? parsed : [];
      for (const c of cases) {
        const id = c['id'];
        if (typeof id === 'string' && id) map.set(id, c as CaseMeta);
      }
    } catch {
      // Malformed/unrelated file under the same glob — skip it, don't drop everything else.
    }
  }
  return map;
}

// Test-case JSON's `preconditions` field is a free-text string in most files (observed
// delimiter: "; ") but is already an array in at least one hand-authored file — support both.
function toPreconditionsArray(raw: string | string[] | undefined): string[] {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw.map(s => String(s).trim()).filter(Boolean);
  return raw.split(/;\s*/).map(s => s.trim()).filter(Boolean);
}

function normalizePriority(raw: unknown): Priority {
  const p = String(raw ?? '').toLowerCase();
  if (p === 'critical' || p === 'high' || p === 'medium' || p === 'low') return p;
  return 'medium';
}

// parsePlaywrightResults() sets TestResult.status to Playwright's own outcome field
// ('expected' | 'unexpected' | 'skipped'), only overriding it to 'flaky' when the test was
// actually flaky — it does not map 'expected' -> 'passed' / 'unexpected' -> 'failed'. The
// REPORT_DATA schema this template expects only understands passed/flaky/failed/skipped, so
// that mapping happens here instead of being reinvented a second time inside the shared parser.
function normalizeStatus(r: TestResult): Status {
  if (r.isFlaky) return 'flaky';
  if (r.status === 'expected' || r.status === 'passed') return 'passed';
  if (r.status === 'skipped') return 'skipped';
  return 'failed'; // 'unexpected', 'failed', 'timedOut', 'interrupted', or anything unrecognized
}

function stripAnsi(s: string): string {
  return s.replace(/\x1B\[[0-9;]*m/g, '');
}

function cleanTitle(rawTitle: string, testId: string | undefined): string {
  let t = testId ? rawTitle.replace(testId, '') : rawTitle.replace(/^TC-[A-Z]+-\d+\s*/, '');
  t = t.replace(/@[A-Za-z0-9-]+/g, '');
  return t.replace(/\s+/g, ' ').trim();
}

function toTitleCase(slug: string): string {
  return slug.split('-').filter(Boolean).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function toBrowserLabel(name: string): string {
  const map: Record<string, string> = { chromium: 'Chromium', firefox: 'Firefox', webkit: 'WebKit' };
  return map[name] ?? (name.charAt(0).toUpperCase() + name.slice(1));
}

// Derives the report's header text from the common tests/e2e/<module>/<sub-feature>/ path
// segments actually present in this run — never hardcoded, per how many distinct
// module/sub-feature combinations were exercised.
function deriveScope(files: string[]): { brandTtl: string; titleTag: string; metaScope: string } {
  const pairs = new Set<string>();
  const modules = new Set<string>();
  for (const f of files) {
    const parts = f.split(path.sep).join('/').split('/');
    if (parts.length >= 2) {
      modules.add(parts[0]);
      pairs.add(`${parts[0]}/${parts[1]}`);
    }
  }
  if (modules.size === 1 && pairs.size === 1) {
    const [, sub] = [...pairs][0].split('/');
    const label = toTitleCase(sub);
    return { brandTtl: `SIM ERP — ${label}`, titleTag: `QA Report — SIM ERP ${label}`, metaScope: `${label} module` };
  }
  if (modules.size === 1) {
    const label = `${toTitleCase([...modules][0])} Module`;
    return { brandTtl: `SIM ERP — ${label}`, titleTag: `QA Report — SIM ERP ${label}`, metaScope: label };
  }
  return { brandTtl: 'SIM ERP — QA Report', titleTag: 'QA Report — SIM ERP', metaScope: 'QA Report' };
}

// parsePlaywrightResults() only returns one top-level `browser`, taken from
// config.projects[0] — that's the configured default project, not necessarily every project
// actually executed in this run — so the real set is collected directly from the raw JSON.
function collectProjectNames(data: any): string[] {
  const names = new Set<string>();
  const visit = (suite: any): void => {
    for (const s of suite.suites || []) visit(s);
    for (const spec of suite.specs || []) {
      for (const t of spec.tests || []) {
        if (t.projectName) names.add(t.projectName);
      }
    }
  };
  for (const s of data.suites || []) visit(s);
  return [...names];
}

function findScreenshotDataUri(screenshotPath: string | undefined): string | null {
  if (!screenshotPath) return null;
  try {
    if (!fs.existsSync(screenshotPath)) return null;
    const buf = fs.readFileSync(screenshotPath);
    return `data:image/png;base64,${buf.toString('base64')}`;
  } catch {
    return null;
  }
}

function main(): void {
  const { resultsPath, outPath } = parseArgs(process.argv);

  if (!fs.existsSync(resultsPath)) {
    console.error(`[qa-report] ERROR: results file not found: ${resultsPath}`);
    process.exit(1);
  }

  let raw: any;
  try {
    raw = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
  } catch (e: unknown) {
    console.error(`[qa-report] ERROR: could not parse ${resultsPath}: ${(e as Error).message}`);
    process.exit(1);
  }

  const { results } = parsePlaywrightResults(raw);
  const caseMetaMap = loadCaseMetaMap();
  const projectNames = collectProjectNames(raw);

  const tests: ReportTest[] = results.map((r, idx) => {
    const id = r.testId ?? `NOID-${idx + 1}`;
    const meta = r.testId ? caseMetaMap.get(r.testId) : undefined;
    const expectedResult = meta ? String(meta.expected ?? meta.expectedResult ?? '') : '';
    const tags = meta && Array.isArray(meta.tags) ? meta.tags.join(', ') : '';
    return {
      id,
      title: cleanTitle(r.title, r.testId),
      category: r.category,
      status: normalizeStatus(r),
      priority: meta ? normalizePriority(meta.priority) : 'medium',
      duration: r.duration,
      retries: r.retryCount,
      preconditions: meta ? toPreconditionsArray(meta.preconditions) : [],
      steps: meta && Array.isArray(meta.steps) ? meta.steps : [],
      expectedResult,
      tags,
      errorMsg: r.error ? stripAnsi(r.error).trim() : '',
      screenshot: findScreenshotDataUri(r.screenshotPath),
    };
  });

  const scope = deriveScope(results.map(r => r.file || '').filter(Boolean));
  const browserLabel = (projectNames.length ? projectNames : ['chromium']).map(toBrowserLabel).join(' + ');

  const reportData = {
    stats: {
      startTime: raw.stats?.startTime ?? new Date().toISOString(),
      duration: Math.round(raw.stats?.duration ?? 0),
    },
    tests,
  };

  let html = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  html = html.replace(
    '<title>QA Report — SIM ERP Employee Module</title>',
    `<title>${scope.titleTag}</title>`,
  );
  html = html.replace(
    'content="Playwright test execution report for SIM ERP Employee Details module — 69 tests, Chromium"',
    `content="Playwright test execution report for SIM ERP ${scope.metaScope} — ${tests.length} tests, ${browserLabel}"`,
  );
  html = html.replace(
    '<span class="brand-ttl">SIM ERP — Employee Module</span>',
    `<span class="brand-ttl">${scope.brandTtl}</span>`,
  );
  // Escape "<" so a literal "</script>" in test data (e.g. XSS test steps) can't
  // prematurely close this actual <script> tag — HTML tokenizing happens before JS parsing.
  const reportDataJson = JSON.stringify(reportData).replace(/</g, '\\u003c');
  html = html.replace('const REPORT_DATA = __REPORT_DATA_JSON__;', `const REPORT_DATA = ${reportDataJson};`);

  fs.mkdirSync(HTML_DIR, { recursive: true });
  const outFile = outPath ?? path.join(HTML_DIR, `qa-report-${isoStamp()}.html`);
  fs.writeFileSync(outFile, html);

  if (!fs.existsSync(outFile) || fs.statSync(outFile).size === 0) {
    console.error(`[qa-report] ERROR: failed to write non-empty file at ${outFile}`);
    process.exit(1);
  }
  console.log(`[qa-report] Report written: ${outFile}`);
}

main();
