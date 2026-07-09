/**
 * Excel reporter for SIM ERP QA flow — Enterprise Reporting Edition.
 *
 * Modes:
 *   --mode=test-cases  --input=<json>  -> test case workbook (Overview + per-module sheets + Traceability)
 *   --mode=results     --input=<json>  -> execution workbook (6 sheets: summary, module, category, regression, failures, all)
 *
 * Output: reports/excel/ (.xlsx)
 */

import ExcelJS from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';
import { parsePlaywrightResults } from '../../../../scripts/lib/failure-triage';

type Mode = 'test-cases' | 'results';

// ── Color palette ─────────────────────────────────────────────────────────────
const C = {
  headerBg:   'FF4472C4',
  headerFont: 'FFFFFFFF',
  altRow:     'FFF7F7F7',
  passed:     'FFC6EFCE',
  failed:     'FFFFC7CE',
  skipped:    'FFFFFF99',
  flaky:      'FFFFEB9C',
  critical:   'FFFFC7CE',
  high:       'FFFFEB9C',
  medium:     'FFFFFF99',
  low:        'FFC6EFCE',
  smoke:      'FFDCE6F1',
  regression: 'FFE2EFDA',
};

// ── Interfaces ─────────────────────────────────────────────────────────────────
interface TestCase {
  id: string;
  module: string;
  moduleCode?: string;
  subModule?: string;
  requirementRef?: string;
  taskId?: string;
  title: string;
  category: string;
  priority: string;
  severity?: string;
  automatable?: boolean;
  automationHint?: string;
  tags?: string[];
  preconditions?: string;
  steps: string[];
  expected: string;
  testData?: Record<string, unknown> | string;
  role?: string;
  featureFlag?: string;
  apiValidation?: boolean;
}

import type { TestResult } from '../../../../scripts/lib/failure-triage';

// ── Argument parsing ───────────────────────────────────────────────────────────
function parseArgs(argv: string[]) {
  const out: { mode?: Mode; input?: string; label?: string } = {};
  for (const a of argv.slice(2)) {
    const [k, v] = a.replace(/^--/, '').split('=');
    if (k === 'mode') out.mode = v as Mode;
    else if (k === 'input') out.input = v;
    else if (k === 'label') out.label = v;
  }
  return out;
}

function isoStamp(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}`;
}

// ── Formatting helpers ─────────────────────────────────────────────────────────
function styleHeaderRow(row: ExcelJS.Row): void {
  row.height = 28;
  row.eachCell(cell => {
    cell.font = { bold: true, color: { argb: C.headerFont }, size: 11 };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: C.headerBg } };
    cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
    cell.border = { bottom: { style: 'thin', color: { argb: 'FFCCCCCC' } } };
  });
}

function applyAltRow(row: ExcelJS.Row, index: number): void {
  if (index % 2 === 0) {
    row.eachCell({ includeEmpty: true }, cell => {
      if (!cell.style?.fill || (cell.fill as ExcelJS.FillPattern).fgColor?.argb === C.headerBg) return;
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: C.altRow } };
    });
  }
}

function colorCell(cell: ExcelJS.Cell, argb: string): void {
  if (argb) cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb } };
}

function statusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'passed':              return C.passed;
    case 'failed':
    case 'timedout':            return C.failed;
    case 'skipped':             return C.skipped;
    case 'flaky':               return C.flaky;
    default:                    return '';
  }
}

function priorityColor(priority: string): string {
  switch ((priority || '').toLowerCase()) {
    case 'critical': return C.critical;
    case 'high':     return C.high;
    case 'medium':   return C.medium;
    case 'low':      return C.low;
    default:         return '';
  }
}

// ── Data helpers ───────────────────────────────────────────────────────────────
function formatTestData(td: TestCase['testData']): string {
  if (!td) return '';
  if (typeof td === 'string') return td;
  return Object.entries(td).map(([k, v]) => `${k}: ${v}`).join('\n');
}

function formatTags(tags: string[] | undefined): string {
  return (tags || []).join(', ');
}

function isRegressionCase(tc: TestCase): boolean {
  return (tc.tags || []).some(t => t.toLowerCase().includes('regression')) || tc.category === 'regression';
}

function automationStatus(tc: TestCase): string {
  if (tc.automatable === false) return 'Manual';
  if (tc.automationHint?.startsWith('PARTIAL')) return 'Partial';
  return 'Automated';
}

// ── Test Cases Workbook ────────────────────────────────────────────────────────
async function exportTestCases(input: string, label?: string): Promise<string> {
  const cases: TestCase[] = JSON.parse(fs.readFileSync(input, 'utf-8'));

  const wb = new ExcelJS.Workbook();
  wb.creator = 'SIM ERP QA Flow';
  wb.created = new Date();

  // Aggregate stats
  const byModule = new Map<string, TestCase[]>();
  const byCategory = new Map<string, number>();
  const byPriority = new Map<string, number>();
  let regressionCount = 0;
  let automatedCount = 0;
  let manualCount = 0;
  let partialCount = 0;

  for (const c of cases) {
    const m = c.module || 'General';
    if (!byModule.has(m)) byModule.set(m, []);
    byModule.get(m)!.push(c);
    byCategory.set(c.category, (byCategory.get(c.category) || 0) + 1);
    byPriority.set(c.priority, (byPriority.get(c.priority) || 0) + 1);
    if (isRegressionCase(c)) regressionCount++;
    const as = automationStatus(c);
    if (as === 'Automated') automatedCount++;
    else if (as === 'Manual') manualCount++;
    else partialCount++;
  }

  // ── Overview sheet ──────────────────────────────────────────────────────────
  const overview = wb.addWorksheet('Overview');
  overview.columns = [
    { header: 'Metric', key: 'k', width: 30 },
    { header: 'Value',  key: 'v', width: 20 },
  ];
  styleHeaderRow(overview.getRow(1));
  overview.views = [{ state: 'frozen', ySplit: 1 }];

  const overviewRows: Array<[string, string | number]> = [
    ['Total Test Cases', cases.length],
    ['Automated',        automatedCount],
    ['Partial',          partialCount],
    ['Manual',           manualCount],
    ['Regression',       regressionCount],
    ['', ''],
    ['─── By Category ───', ''],
    ...Array.from(byCategory.entries()).sort(([a], [b]) => a.localeCompare(b)),
    ['', ''],
    ['─── By Priority ───', ''],
    ...Array.from(byPriority.entries()).sort(([a], [b]) => a.localeCompare(b)),
    ['', ''],
    ['─── By Module ───', ''],
    ...Array.from(byModule.entries()).map(([m, list]): [string, number] => [m, list.length]),
  ];

  overviewRows.forEach(([k, v], i) => {
    const row = overview.addRow({ k, v });
    if (String(k).startsWith('───')) {
      row.font = { bold: true };
      row.eachCell(cell => { cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD9E1F2' } }; });
    } else {
      applyAltRow(row, i + 1);
    }
    row.eachCell(cell => { cell.alignment = { vertical: 'middle' }; });
  });

  // ── Per-module sheets ────────────────────────────────────────────────────────
  const columnDefs: Partial<ExcelJS.Column>[] = [
    { header: 'Test Case ID',      key: 'id',            width: 14 },
    { header: 'Module',            key: 'module',        width: 18 },
    { header: 'Sub Module',        key: 'subModule',     width: 16 },
    { header: 'Requirement ID',    key: 'reqRef',        width: 22 },
    { header: 'Zoho Task ID',      key: 'taskId',        width: 14 },
    { header: 'Category',          key: 'category',      width: 14 },
    { header: 'Priority',          key: 'priority',      width: 10 },
    { header: 'Risk',              key: 'severity',      width: 10 },
    { header: 'Automation Status', key: 'autoStatus',    width: 18 },
    { header: 'Regression',        key: 'regression',    width: 12 },
    { header: 'Preconditions',     key: 'preconditions', width: 35 },
    { header: 'Steps',             key: 'steps',         width: 55 },
    { header: 'Expected Result',   key: 'expected',      width: 50 },
    { header: 'Test Data',         key: 'testData',      width: 35 },
    { header: 'Role',              key: 'role',          width: 18 },
    { header: 'Feature Flag',      key: 'featureFlag',   width: 14 },
    { header: 'API Validation',    key: 'apiVal',        width: 14 },
    { header: 'Tags',              key: 'tags',          width: 32 },
  ];

  for (const [module, list] of byModule) {
    const ws = wb.addWorksheet(module.substring(0, 31));
    ws.columns = columnDefs;
    styleHeaderRow(ws.getRow(1));
    ws.views = [{ state: 'frozen', ySplit: 1 }];
    ws.autoFilter = 'A1:R1';

    list.forEach((c, i) => {
      const as = automationStatus(c);
      const reg = isRegressionCase(c);
      const row = ws.addRow({
        id:            c.id,
        module:        c.module,
        subModule:     c.subModule || '',
        reqRef:        c.requirementRef || '',
        taskId:        c.taskId || '',
        category:      c.category,
        priority:      c.priority,
        severity:      c.severity || '',
        autoStatus:    as,
        regression:    reg ? 'Yes' : 'No',
        preconditions: c.preconditions || '',
        steps:         c.steps.map((s, si) => `${si + 1}. ${s}`).join('\n'),
        expected:      c.expected,
        testData:      formatTestData(c.testData),
        role:          c.role || '',
        featureFlag:   c.featureFlag || '',
        apiVal:        c.apiValidation ? 'Yes' : '',
        tags:          formatTags(c.tags),
      });

      row.eachCell(cell => { cell.alignment = { wrapText: true, vertical: 'top' }; });
      applyAltRow(row, i + 1);

      const priColor = priorityColor(c.priority);
      if (priColor) colorCell(row.getCell('priority'), priColor);
      if (reg) colorCell(row.getCell('regression'), C.regression);
      if (c.category === 'smoke') colorCell(row.getCell('category'), C.smoke);
    });
  }

  // ── Traceability sheet ────────────────────────────────────────────────────────
  const traceWs = wb.addWorksheet('Traceability');
  traceWs.columns = [
    { header: 'Test Case ID',   key: 'id',         width: 14 },
    { header: 'Module',         key: 'module',     width: 18 },
    { header: 'Zoho Task ID',   key: 'taskId',     width: 14 },
    { header: 'Requirement',    key: 'req',        width: 40 },
    { header: 'Category',       key: 'category',   width: 14 },
    { header: 'Automation',     key: 'automation', width: 18 },
    { header: 'Regression',     key: 'regression', width: 12 },
  ];
  styleHeaderRow(traceWs.getRow(1));
  traceWs.views = [{ state: 'frozen', ySplit: 1 }];
  traceWs.autoFilter = 'A1:G1';

  cases.forEach((c, i) => {
    const row = traceWs.addRow({
      id:         c.id,
      module:     c.module,
      taskId:     c.taskId || '',
      req:        c.requirementRef || '',
      category:   c.category,
      automation: automationStatus(c),
      regression: isRegressionCase(c) ? 'Yes' : 'No',
    });
    applyAltRow(row, i + 1);
    row.eachCell(cell => { cell.alignment = { vertical: 'middle' }; });
  });

  const outDir = path.resolve(__dirname, '../../../../reports/excel');
  fs.mkdirSync(outDir, { recursive: true });
  const suffix = label ? `-${label}` : '';
  const outFile = path.join(outDir, `test-cases-${isoStamp()}${suffix}.xlsx`);
  await wb.xlsx.writeFile(outFile);
  validateWorkbook(outFile, wb, cases.length);
  return outFile;
}

// ── Results Workbook ──────────────────────────────────────────────────────────
async function exportResults(input: string, label?: string): Promise<string> {
  const data = JSON.parse(fs.readFileSync(input, 'utf-8'));
  const { results, browser, env, startTime, totalDuration } = parsePlaywrightResults(data);

  const stats = {
    total:   results.length,
    passed:  results.filter(r => r.status === 'passed').length,
    failed:  results.filter(r => r.status === 'failed' || r.status === 'timedOut').length,
    skipped: results.filter(r => r.status === 'skipped').length,
    flaky:   results.filter(r => r.isFlaky).length,
  };
  const passRate = stats.total > 0 ? ((stats.passed / stats.total) * 100).toFixed(1) : '0';

  const wb = new ExcelJS.Workbook();
  wb.creator = 'SIM ERP QA Flow';
  wb.created = new Date();

  buildExecutionSummary(wb, stats, passRate, browser, env, startTime, totalDuration);
  buildModuleSummary(wb, results);
  buildCategorySummary(wb, results);
  buildRegressionSummary(wb, results);
  buildFailureDetails(wb, results);
  buildAllResults(wb, results);

  const outDir = path.resolve(__dirname, '../../../../reports/excel');
  fs.mkdirSync(outDir, { recursive: true });
  const suffix = label ? `-${label}` : '';
  const outFile = path.join(outDir, `results-${isoStamp()}${suffix}.xlsx`);
  await wb.xlsx.writeFile(outFile);
  validateWorkbook(outFile, wb, results.length);
  return outFile;
}

function buildExecutionSummary(
  wb: ExcelJS.Workbook,
  stats: { total: number; passed: number; failed: number; skipped: number; flaky: number },
  passRate: string,
  browser: string,
  env: string,
  startTime: string,
  totalDuration: number,
): void {
  const ws = wb.addWorksheet('Execution Summary');
  ws.columns = [
    { header: 'Metric', key: 'k', width: 25 },
    { header: 'Value',  key: 'v', width: 25 },
  ];
  styleHeaderRow(ws.getRow(1));
  ws.views = [{ state: 'frozen', ySplit: 1 }];

  const rows: Array<[string, string | number]> = [
    ['Total Tests',        stats.total],
    ['Passed',             stats.passed],
    ['Failed',             stats.failed],
    ['Skipped',            stats.skipped],
    ['Flaky',              stats.flaky],
    ['Pass %',             `${passRate}%`],
    ['Execution Duration', `${(totalDuration / 1000).toFixed(1)}s`],
    ['Browser',            browser],
    ['Environment',        env],
    ['Execution Date',     new Date(startTime).toLocaleString()],
  ];

  rows.forEach(([k, v], i) => {
    const row = ws.addRow({ k, v });
    applyAltRow(row, i + 1);
    const kl = String(k).toLowerCase();
    if (kl === 'passed')  colorCell(row.getCell('v'), C.passed);
    if (kl === 'failed' && stats.failed > 0)  colorCell(row.getCell('v'), C.failed);
    if (kl === 'skipped') colorCell(row.getCell('v'), C.skipped);
    if (kl === 'flaky' && stats.flaky > 0)   colorCell(row.getCell('v'), C.flaky);
    row.eachCell(cell => { cell.alignment = { vertical: 'middle' }; });
  });
}

function buildModuleSummary(wb: ExcelJS.Workbook, results: TestResult[]): void {
  const ws = wb.addWorksheet('Module Summary');
  ws.columns = [
    { header: 'Module',  key: 'module',  width: 25 },
    { header: 'Total',   key: 'total',   width: 10 },
    { header: 'Passed',  key: 'passed',  width: 10 },
    { header: 'Failed',  key: 'failed',  width: 10 },
    { header: 'Skipped', key: 'skipped', width: 10 },
    { header: 'Pass %',  key: 'rate',    width: 12 },
  ];
  styleHeaderRow(ws.getRow(1));
  ws.views = [{ state: 'frozen', ySplit: 1 }];
  ws.autoFilter = 'A1:F1';

  const byModule = new Map<string, TestResult[]>();
  for (const r of results) {
    if (!byModule.has(r.module)) byModule.set(r.module, []);
    byModule.get(r.module)!.push(r);
  }

  Array.from(byModule.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([module, list], i) => {
      const passed  = list.filter(r => r.status === 'passed').length;
      const failed  = list.filter(r => r.status === 'failed' || r.status === 'timedOut').length;
      const skipped = list.filter(r => r.status === 'skipped').length;
      const rate    = list.length > 0 ? ((passed / list.length) * 100).toFixed(1) : '0';
      const row = ws.addRow({ module, total: list.length, passed, failed, skipped, rate: `${rate}%` });
      applyAltRow(row, i + 1);
      if (failed > 0) colorCell(row.getCell('failed'), C.failed);
      if (passed > 0) colorCell(row.getCell('passed'), C.passed);
      if (passed === list.length && list.length > 0) colorCell(row.getCell('rate'), C.passed);
      row.eachCell(cell => { cell.alignment = { vertical: 'middle' }; });
    });
}

function buildCategorySummary(wb: ExcelJS.Workbook, results: TestResult[]): void {
  const ws = wb.addWorksheet('Category Summary');
  ws.columns = [
    { header: 'Category', key: 'cat',    width: 18 },
    { header: 'Total',    key: 'total',  width: 10 },
    { header: 'Passed',   key: 'passed', width: 10 },
    { header: 'Failed',   key: 'failed', width: 10 },
    { header: 'Pass %',   key: 'rate',   width: 12 },
  ];
  styleHeaderRow(ws.getRow(1));
  ws.views = [{ state: 'frozen', ySplit: 1 }];

  const orderedCategories = ['smoke', 'functional', 'regression', 'negative', 'boundary', 'security', 'a11y', 'performance'];
  const byCategory = new Map<string, TestResult[]>();
  for (const r of results) {
    if (!byCategory.has(r.category)) byCategory.set(r.category, []);
    byCategory.get(r.category)!.push(r);
  }

  const ordered = [
    ...orderedCategories.filter(c => byCategory.has(c)),
    ...Array.from(byCategory.keys()).filter(c => !orderedCategories.includes(c)),
  ];

  ordered.forEach((cat, i) => {
    const list   = byCategory.get(cat) || [];
    const passed = list.filter(r => r.status === 'passed').length;
    const failed = list.filter(r => r.status === 'failed' || r.status === 'timedOut').length;
    const rate   = list.length > 0 ? ((passed / list.length) * 100).toFixed(1) : '0';
    const row = ws.addRow({ cat, total: list.length, passed, failed, rate: `${rate}%` });
    applyAltRow(row, i + 1);
    if (failed > 0) colorCell(row.getCell('failed'), C.failed);
    if (passed > 0) colorCell(row.getCell('passed'), C.passed);
    if (passed === list.length && list.length > 0) colorCell(row.getCell('rate'), C.passed);
    row.eachCell(cell => { cell.alignment = { vertical: 'middle' }; });
  });
}

function buildRegressionSummary(wb: ExcelJS.Workbook, results: TestResult[]): void {
  const regResults = results.filter(r => r.isRegression);
  const ws = wb.addWorksheet('Regression Summary');
  ws.columns = [
    { header: 'Test Case ID', key: 'testId',   width: 16 },
    { header: 'Module',       key: 'module',   width: 20 },
    { header: 'Title',        key: 'title',    width: 60 },
    { header: 'Status',       key: 'status',   width: 12 },
    { header: 'Duration',     key: 'duration', width: 14 },
  ];
  styleHeaderRow(ws.getRow(1));
  ws.views = [{ state: 'frozen', ySplit: 1 }];
  ws.autoFilter = 'A1:E1';

  const regPassed = regResults.filter(r => r.status === 'passed').length;
  const regFailed = regResults.filter(r => r.status === 'failed' || r.status === 'timedOut').length;
  const regRate   = regResults.length > 0 ? ((regPassed / regResults.length) * 100).toFixed(1) : '0';

  // Insert a compact stats block before the test list
  const statsRows: Array<[string, string | number]> = [
    ['Regression Tests',  regResults.length],
    ['Passed',            regPassed],
    ['Failed',            regFailed],
    ['Pass %',            `${regRate}%`],
  ];
  statsRows.forEach(([k, v]) => {
    const row = ws.addRow({ testId: k, module: '', title: '', status: String(v), duration: '' });
    row.font = { bold: true };
    const kl = String(k).toLowerCase();
    if (kl === 'passed') colorCell(row.getCell('status'), C.passed);
    if (kl === 'failed' && regFailed > 0) colorCell(row.getCell('status'), C.failed);
    if (kl === 'pass %' && regPassed === regResults.length && regResults.length > 0) colorCell(row.getCell('status'), C.passed);
  });
  ws.addRow({}); // spacer

  regResults.forEach((r, i) => {
    const row = ws.addRow({
      testId:   r.testId || '',
      module:   r.module,
      title:    r.title,
      status:   r.status,
      duration: `${(r.duration / 1000).toFixed(2)}s`,
    });
    applyAltRow(row, i + 5);
    colorCell(row.getCell('status'), statusColor(r.status));
    row.eachCell(cell => { cell.alignment = { wrapText: true, vertical: 'top' }; });
  });
}

function buildFailureDetails(wb: ExcelJS.Workbook, results: TestResult[]): void {
  const failures = results.filter(r => r.status === 'failed' || r.status === 'timedOut' || r.status === 'flaky');
  const ws = wb.addWorksheet('Failure Details');
  ws.columns = [
    { header: 'Test Case ID',   key: 'testId',      width: 16 },
    { header: 'Module',         key: 'module',      width: 18 },
    { header: 'Title',          key: 'title',       width: 55 },
    { header: 'Status',         key: 'status',      width: 12 },
    { header: 'Category',       key: 'category',    width: 14 },
    { header: 'Retry Count',    key: 'retryCount',  width: 12 },
    { header: 'Error Message',  key: 'error',       width: 60 },
    { header: 'Screenshot',     key: 'screenshot',  width: 45 },
    { header: 'Trace',          key: 'trace',       width: 45 },
    { header: 'Video',          key: 'video',       width: 45 },
    { header: 'Console Errors', key: 'console',     width: 40 },
    { header: 'File',           key: 'file',        width: 40 },
  ];
  styleHeaderRow(ws.getRow(1));
  ws.views = [{ state: 'frozen', ySplit: 1 }];
  ws.autoFilter = 'A1:L1';

  failures.forEach((r, i) => {
    const row = ws.addRow({
      testId:     r.testId || '',
      module:     r.module,
      title:      r.title,
      status:     r.status,
      category:   r.category,
      retryCount: r.retryCount,
      error:      r.error || '',
      screenshot: r.screenshotPath || '',
      trace:      r.tracePath || '',
      video:      r.videoPath || '',
      console:    r.consoleErrors || '',
      file:       r.file || '',
    });
    applyAltRow(row, i + 1);
    colorCell(row.getCell('status'), statusColor(r.status));
    row.eachCell(cell => { cell.alignment = { wrapText: true, vertical: 'top' }; });
  });
}

function buildAllResults(wb: ExcelJS.Workbook, results: TestResult[]): void {
  const ws = wb.addWorksheet('All Results');
  ws.columns = [
    { header: 'Test Case ID', key: 'testId',    width: 16 },
    { header: 'Module',       key: 'module',    width: 18 },
    { header: 'Title',        key: 'title',     width: 55 },
    { header: 'Category',     key: 'category',  width: 14 },
    { header: 'Status',       key: 'status',    width: 12 },
    { header: 'Duration',     key: 'duration',  width: 14 },
    { header: 'Regression',   key: 'reg',       width: 12 },
    { header: 'Retry Count',  key: 'retries',   width: 12 },
    { header: 'File',         key: 'file',      width: 40 },
  ];
  styleHeaderRow(ws.getRow(1));
  ws.views = [{ state: 'frozen', ySplit: 1 }];
  ws.autoFilter = 'A1:I1';

  results.forEach((r, i) => {
    const row = ws.addRow({
      testId:   r.testId || '',
      module:   r.module,
      title:    r.title,
      category: r.category,
      status:   r.status,
      duration: `${(r.duration / 1000).toFixed(2)}s`,
      reg:      r.isRegression ? 'Yes' : 'No',
      retries:  r.retryCount,
      file:     r.file || '',
    });
    applyAltRow(row, i + 1);
    colorCell(row.getCell('status'), statusColor(r.status));
    row.eachCell(cell => { cell.alignment = { wrapText: true, vertical: 'top' }; });
  });
}

// ── Validation ─────────────────────────────────────────────────────────────────
function validateWorkbook(filePath: string, wb: ExcelJS.Workbook, expectedCount: number): void {
  const issues: string[] = [];

  if (!fs.existsSync(filePath)) {
    issues.push('Output file was not created on disk');
  }

  if (wb.worksheets.length === 0) {
    issues.push('Workbook contains no worksheets');
  }

  for (const ws of wb.worksheets) {
    const headerRow = ws.getRow(1);
    let hasHeaders = false;
    headerRow.eachCell(cell => { if (cell.value) hasHeaders = true; });
    if (!hasHeaders) issues.push(`Sheet "${ws.name}" is missing its header row`);

    // Verify freeze pane is set
    if (!ws.views || ws.views.length === 0) {
      issues.push(`Sheet "${ws.name}" is missing freeze pane`);
    }
  }

  if (issues.length > 0) {
    console.warn('[excel-reporter] Validation warnings:');
    issues.forEach(msg => console.warn(`  ⚠ ${msg}`));
    console.warn('[excel-reporter] Regenerating workbook is recommended.');
  } else {
    console.log(`[excel-reporter] ✓ Validation passed — ${wb.worksheets.length} sheet(s), ${expectedCount} records`);
  }
}

// ── Entry point ────────────────────────────────────────────────────────────────
async function main(): Promise<void> {
  const { mode, input, label } = parseArgs(process.argv);
  if (!mode || !input) {
    console.error('Usage: --mode=test-cases|results --input=<json> [--label=<module-or-task>]');
    process.exit(1);
  }
  if (!fs.existsSync(input)) {
    console.error(`[excel-reporter] input not found: ${input}`);
    process.exit(1);
  }
  const out = mode === 'test-cases'
    ? await exportTestCases(input as string, label)
    : await exportResults(input as string, label);
  console.log(`[excel-reporter] wrote ${out}`);
}

if (require.main === module) {
  main().catch(e => {
    console.error('[excel-reporter] ERROR:', (e as Error).message || e);
    process.exit(1);
  });
}

export { exportTestCases, exportResults };
