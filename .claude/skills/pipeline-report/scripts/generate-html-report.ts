/**
 * Consolidated HTML pipeline dashboard for SIM ERP QA flow.
 *
 * Scans reports/requirements, reports/test-cases, reports/results, and reports/excel for the
 * newest file in each and renders one self-contained HTML summary. Never fails outright when a
 * stage hasn't run yet — that section just renders as "not yet generated".
 *
 * Output: reports/html/pipeline-report-<YYYY-MM-DD_HH-MM>.html
 */

import * as fs from 'fs';
import * as path from 'path';
import { parsePlaywrightResults, TestResult } from '../../../../scripts/lib/failure-triage';

const ROOT        = path.resolve(__dirname, '..', '..', '..', '..');
const REPORTS_DIR = path.join(ROOT, 'reports');
const REQ_DIR      = path.join(REPORTS_DIR, 'requirements');
const CASES_DIR    = path.join(REPORTS_DIR, 'test-cases');
const RESULTS_DIR  = path.join(REPORTS_DIR, 'results');
const EXCEL_DIR     = path.join(REPORTS_DIR, 'excel');
const HTML_DIR      = path.join(REPORTS_DIR, 'html');
const RESULTS_JSON  = path.join(RESULTS_DIR, 'results.json');
const RESULTS_HTML  = path.join(RESULTS_DIR, 'html', 'index.html');
const TESTS_E2E_DIR  = path.join(ROOT, 'tests', 'e2e');
const PAGE_OBJ_DIR   = path.join(ROOT, 'tests', 'page-objects');

function latestFile(dir: string, match: (f: string) => boolean): string | null {
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir).filter(match).sort().reverse();
  return files.length ? path.join(dir, files[0]) : null;
}

function countFilesRecursive(dir: string, match: (f: string) => boolean): number {
  if (!fs.existsSync(dir)) return 0;
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) count += countFilesRecursive(full, match);
    else if (match(entry.name)) count++;
  }
  return count;
}

function isoStamp(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}`;
}

function esc(s: unknown): string {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}

function relLink(absPath: string): string {
  return path.relative(HTML_DIR, absPath).split(path.sep).join('/');
}

function barRow(label: string, value: number, total: number, color: string): string {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  return `<div class="bar-row">
    <span class="bar-label">${esc(label)}</span>
    <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${color}"></div></div>
    <span class="bar-value">${value}</span>
  </div>`;
}

// ── Requirements ──────────────────────────────────────────────────────────────
function buildRequirementsSection(): string {
  const file = latestFile(REQ_DIR, f => f.startsWith('requirements-') && f.endsWith('.json'));
  if (!file) return section('Requirements', '<p class="muted">No requirements analyzed yet.</p>');

  let count = 0, unclear = 0, feature = '';
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const arr = Array.isArray(data) ? data : [data];
    count = arr.length;
    unclear = arr.reduce((n, r) => n + (Array.isArray(r?.unclear) ? r.unclear.length : 0), 0);
    feature = arr.map(r => r?.feature).filter(Boolean).join(', ');
  } catch { /* leave defaults, still show the file link */ }

  return section('Requirements', `
    <div class="stat-row">
      <div class="stat"><span class="stat-value">${count}</span><span class="stat-label">requirement set(s)</span></div>
      <div class="stat"><span class="stat-value">${unclear}</span><span class="stat-label">unclear item(s)</span></div>
    </div>
    ${feature ? `<p><strong>Feature(s):</strong> ${esc(feature)}</p>` : ''}
    <p class="file-link"><a href="${relLink(file)}">${esc(path.basename(file))}</a></p>
  `);
}

// ── Test cases ────────────────────────────────────────────────────────────────
function buildTestCasesSection(): string {
  const file = latestFile(CASES_DIR, f => f.startsWith('cases-') && f.endsWith('.json'));
  if (!file) return section('Test Cases', '<p class="muted">No test cases generated yet.</p>');

  let cases: Record<string, unknown>[] = [];
  try {
    const parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
    cases = Array.isArray(parsed) ? parsed : [];
  } catch { /* render what we can */ }

  const byCategory: Record<string, number> = {};
  const byPriority: Record<string, number> = {};
  let automatable = 0;
  for (const c of cases) {
    const cat = String(c['category'] ?? 'other');
    const pri = String(c['priority'] ?? 'other');
    byCategory[cat] = (byCategory[cat] ?? 0) + 1;
    byPriority[pri] = (byPriority[pri] ?? 0) + 1;
    if (c['automatable'] !== false) automatable++;
  }

  const catColors: Record<string, string> = {
    smoke: '#4472C4', functional: '#70AD47', negative: '#ED7D31', boundary: '#FFC000',
    security: '#C00000', a11y: '#7030A0', performance: '#00B0F0', regression: '#548235', integration: '#2E75B6',
  };
  const catBars = Object.entries(byCategory)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => barRow(k, v, cases.length, catColors[k] ?? '#888'))
    .join('');

  const excel = latestFile(EXCEL_DIR, f => f.startsWith('test-cases-') && f.endsWith('.xlsx'));

  return section('Test Cases', `
    <div class="stat-row">
      <div class="stat"><span class="stat-value">${cases.length}</span><span class="stat-label">total cases</span></div>
      <div class="stat"><span class="stat-value">${automatable}</span><span class="stat-label">automatable</span></div>
      <div class="stat"><span class="stat-value">${cases.length - automatable}</span><span class="stat-label">manual-only</span></div>
    </div>
    <div class="bars">${catBars || '<p class="muted">No category data.</p>'}</div>
    <p class="file-link"><a href="${relLink(file)}">${esc(path.basename(file))}</a>${excel ? ` &middot; <a href="${relLink(excel)}">${esc(path.basename(excel))}</a>` : ''}</p>
  `);
}

// ── Automation ────────────────────────────────────────────────────────────────
function buildAutomationSection(): string {
  const specCount = countFilesRecursive(TESTS_E2E_DIR, f => f.endsWith('.spec.ts'));
  const pageObjCount = countFilesRecursive(PAGE_OBJ_DIR, f => f.endsWith('.page.ts'));
  if (!specCount && !pageObjCount) return section('Automation', '<p class="muted">No automation generated yet.</p>');

  return section('Automation', `
    <div class="stat-row">
      <div class="stat"><span class="stat-value">${specCount}</span><span class="stat-label">spec file(s)</span></div>
      <div class="stat"><span class="stat-value">${pageObjCount}</span><span class="stat-label">page object(s)</span></div>
    </div>
    <p class="muted">Counts reflect everything currently under <code>tests/e2e/</code> and <code>tests/page-objects/</code>, not just this run.</p>
  `);
}

// ── Execution results ─────────────────────────────────────────────────────────
function buildResultsSection(): string {
  if (!fs.existsSync(RESULTS_JSON)) return section('Execution Results', '<p class="muted">No test run yet.</p>');

  let results: TestResult[] = [];
  let browser = 'chromium';
  try {
    const data = JSON.parse(fs.readFileSync(RESULTS_JSON, 'utf8'));
    ({ results, browser } = parsePlaywrightResults(data));
  } catch (e: unknown) {
    return section('Execution Results', `<p class="muted">Could not parse results.json: ${esc((e as Error).message)}</p>`);
  }

  const passed = results.filter(r => r.status === 'passed').length;
  const failed = results.filter(r => r.status === 'failed' || r.status === 'timedOut').length;
  const skipped = results.filter(r => r.status === 'skipped').length;
  const flaky = results.filter(r => r.isFlaky).length;
  const total = results.length;
  const passRate = total > 0 ? Math.round((passed / total) * 100) : 0;

  const excel = latestFile(EXCEL_DIR, f => f.startsWith('results-') && f.endsWith('.xlsx'));
  const links = [
    fs.existsSync(RESULTS_HTML) ? `<a href="${relLink(RESULTS_HTML)}">Playwright HTML report</a>` : '',
    excel ? `<a href="${relLink(excel)}">${esc(path.basename(excel))}</a>` : '',
  ].filter(Boolean).join(' &middot; ');

  return section('Execution Results', `
    <div class="stat-row">
      <div class="stat"><span class="stat-value" style="color:#2E7D32">${passed}</span><span class="stat-label">passed</span></div>
      <div class="stat"><span class="stat-value" style="color:#C62828">${failed}</span><span class="stat-label">failed</span></div>
      <div class="stat"><span class="stat-value" style="color:#F9A825">${skipped}</span><span class="stat-label">skipped</span></div>
      <div class="stat"><span class="stat-value" style="color:#EF6C00">${flaky}</span><span class="stat-label">flaky</span></div>
      <div class="stat"><span class="stat-value">${passRate}%</span><span class="stat-label">pass rate</span></div>
    </div>
    <p><strong>Browser:</strong> ${esc(browser)} &middot; <strong>Total:</strong> ${total} test(s)</p>
    ${links ? `<p class="file-link">${links}</p>` : ''}
  `);
}

// ── Bugs filed ────────────────────────────────────────────────────────────────
function buildBugsSection(): string {
  const file = latestFile(RESULTS_DIR, f => f.startsWith('bugs-') && f.endsWith('.json'));
  if (!file) return section('Bugs Filed', '<p class="muted">No bugs filed.</p>');

  let filed = 0, duplicates = 0, skipped = 0;
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const arr = Array.isArray(data) ? data : [];
    filed = arr.filter((b: Record<string, unknown>) => b['bugId'] && !String(b['bugId']).startsWith('DUP')).length;
    duplicates = arr.filter((b: Record<string, unknown>) => String(b['bugId'] ?? '').startsWith('DUP')).length;
    skipped = arr.filter((b: Record<string, unknown>) => b['skipped']).length;
  } catch { /* render what we can */ }

  return section('Bugs Filed', `
    <div class="stat-row">
      <div class="stat"><span class="stat-value">${filed}</span><span class="stat-label">filed</span></div>
      <div class="stat"><span class="stat-value">${duplicates}</span><span class="stat-label">duplicate (commented)</span></div>
      <div class="stat"><span class="stat-value">${skipped}</span><span class="stat-label">skipped</span></div>
    </div>
    <p class="file-link"><a href="${relLink(file)}">${esc(path.basename(file))}</a></p>
  `);
}

function section(title: string, body: string): string {
  return `<section class="card">
    <h2>${esc(title)}</h2>
    ${body}
  </section>`;
}

function render(): string {
  const generatedAt = new Date().toISOString();
  const sections = [
    buildRequirementsSection(),
    buildTestCasesSection(),
    buildAutomationSection(),
    buildResultsSection(),
    buildBugsSection(),
  ].join('\n');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>SIM ERP QA Pipeline Report</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  :root { color-scheme: light dark; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 2rem; background: #f5f6f8; color: #1a1a1a; }
  @media (prefers-color-scheme: dark) { body { background: #1a1a1a; color: #e8e8e8; } .card { background: #262626 !important; } .bar-track { background: #3a3a3a !important; } a { color: #7ab6ff !important; } }
  h1 { font-size: 1.5rem; margin-bottom: 0.25rem; }
  .meta { color: #666; margin-bottom: 1.5rem; font-size: 0.85rem; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1rem; }
  .card { background: #fff; border-radius: 10px; padding: 1.25rem 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
  .card h2 { font-size: 1.05rem; margin: 0 0 0.75rem; }
  .stat-row { display: flex; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 0.75rem; }
  .stat { display: flex; flex-direction: column; }
  .stat-value { font-size: 1.6rem; font-weight: 700; }
  .stat-label { font-size: 0.75rem; color: #888; text-transform: uppercase; letter-spacing: 0.03em; }
  .bars { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 0.5rem; }
  .bar-row { display: flex; align-items: center; gap: 0.6rem; }
  .bar-label { width: 90px; font-size: 0.8rem; text-transform: capitalize; flex-shrink: 0; }
  .bar-track { flex: 1; height: 10px; background: #eee; border-radius: 5px; overflow: hidden; }
  .bar-fill { height: 100%; border-radius: 5px; }
  .bar-value { width: 30px; text-align: right; font-size: 0.8rem; color: #666; }
  .muted { color: #999; font-size: 0.9rem; }
  .file-link { font-size: 0.85rem; margin-top: 0.5rem; word-break: break-all; }
  a { color: #2E75B6; text-decoration: none; }
  a:hover { text-decoration: underline; }
  code { background: rgba(0,0,0,0.06); padding: 0.1rem 0.3rem; border-radius: 4px; font-size: 0.85em; }
</style>
</head>
<body>
  <h1>SIM ERP QA Pipeline Report</h1>
  <p class="meta">Generated ${esc(generatedAt)}</p>
  <div class="grid">
    ${sections}
  </div>
</body>
</html>`;
}

function main(): void {
  fs.mkdirSync(HTML_DIR, { recursive: true });
  const html = render();
  const outFile = path.join(HTML_DIR, `pipeline-report-${isoStamp()}.html`);
  fs.writeFileSync(outFile, html);

  if (!fs.existsSync(outFile) || fs.statSync(outFile).size === 0) {
    console.error(`[pipeline-report] ERROR: failed to write non-empty file at ${outFile}`);
    process.exit(1);
  }
  console.log(`[pipeline-report] Report written: ${outFile}`);
}

main();
