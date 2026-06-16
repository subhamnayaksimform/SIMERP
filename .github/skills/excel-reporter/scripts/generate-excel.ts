/**
 * Excel reporter for SIM ERP QA flow.
 *
 * Modes:
 *   --mode=test-cases --input=<json>   -> exports test cases
 *   --mode=results    --input=<json>   -> exports Playwright JSON results
 *
 * Output: reports/test-cases/ or reports/results/ (.xlsx)
 */

import ExcelJS from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';

type Mode = 'test-cases' | 'results';

interface TestCase {
  id: string;
  module: string;
  taskId?: string;
  title: string;
  category: string;
  priority: string;
  preconditions?: string;
  steps: string[];
  expected: string;
}

function parseArgs(argv: string[]) {
  const out: { mode?: Mode; input?: string } = {};
  for (const a of argv.slice(2)) {
    const [k, v] = a.replace(/^--/, '').split('=');
    if (k === 'mode') out.mode = v as Mode;
    else if (k === 'input') out.input = v;
  }
  return out;
}

async function exportTestCases(input: string): Promise<string> {
  const cases: TestCase[] = JSON.parse(fs.readFileSync(input, 'utf-8'));
  const wb = new ExcelJS.Workbook();
  wb.creator = 'SIM ERP QA Flow';
  wb.created = new Date();

  const byModule = new Map<string, TestCase[]>();
  for (const c of cases) {
    const m = c.module || 'General';
    if (!byModule.has(m)) byModule.set(m, []);
    byModule.get(m)!.push(c);
  }

  for (const [module, list] of byModule) {
    const ws = wb.addWorksheet(module.substring(0, 31));
    ws.columns = [
      { header: 'ID', key: 'id', width: 12 },
      { header: 'Task ID', key: 'taskId', width: 12 },
      { header: 'Title', key: 'title', width: 50 },
      { header: 'Category', key: 'category', width: 14 },
      { header: 'Priority', key: 'priority', width: 10 },
      { header: 'Preconditions', key: 'preconditions', width: 40 },
      { header: 'Steps', key: 'steps', width: 60 },
      { header: 'Expected Result', key: 'expected', width: 50 },
    ];
    ws.getRow(1).font = { bold: true };
    ws.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFDCE6F1' } };

    for (const c of list) {
      ws.addRow({
        ...c,
        steps: c.steps.map((s, i) => `${i + 1}. ${s}`).join('\n'),
      }).alignment = { wrapText: true, vertical: 'top' };
    }
  }

  const outDir = path.resolve(__dirname, '../../../../reports/test-cases');
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, `test-cases-${Date.now()}.xlsx`);
  await wb.xlsx.writeFile(outFile);
  return outFile;
}

async function exportResults(input: string): Promise<string> {
  const data = JSON.parse(fs.readFileSync(input, 'utf-8'));
  const wb = new ExcelJS.Workbook();

  // Summary sheet
  const summary = wb.addWorksheet('Summary');
  const stats = { passed: 0, failed: 0, skipped: 0, flaky: 0, total: 0 };
  const details: Array<{ title: string; status: string; duration: number; error?: string; file?: string }> = [];

  const visitSuite = (suite: any, prefix = '') => {
    for (const s of suite.suites || []) visitSuite(s, `${prefix}${s.title} > `);
    for (const spec of suite.specs || []) {
      for (const t of spec.tests || []) {
        for (const r of t.results || []) {
          stats.total++;
          const status = r.status || 'unknown';
          if (status === 'passed') stats.passed++;
          else if (status === 'failed' || status === 'timedOut') stats.failed++;
          else if (status === 'skipped') stats.skipped++;
          details.push({
            title: `${prefix}${spec.title}`,
            status,
            duration: r.duration || 0,
            error: r.error?.message,
            file: spec.file,
          });
        }
      }
    }
  };
  for (const s of data.suites || []) visitSuite(s);

  summary.columns = [
    { header: 'Metric', key: 'k', width: 20 },
    { header: 'Value', key: 'v', width: 15 },
  ];
  summary.getRow(1).font = { bold: true };
  for (const [k, v] of Object.entries(stats)) summary.addRow({ k, v });

  const detailWs = wb.addWorksheet('Details');
  detailWs.columns = [
    { header: 'Test', key: 'title', width: 70 },
    { header: 'Status', key: 'status', width: 12 },
    { header: 'Duration (ms)', key: 'duration', width: 14 },
    { header: 'File', key: 'file', width: 40 },
    { header: 'Error', key: 'error', width: 60 },
  ];
  detailWs.getRow(1).font = { bold: true };
  for (const d of details) {
    const row = detailWs.addRow(d);
    if (d.status === 'failed' || d.status === 'timedOut') {
      row.getCell('status').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFC7CE' } };
    } else if (d.status === 'passed') {
      row.getCell('status').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFC6EFCE' } };
    }
    row.alignment = { wrapText: true, vertical: 'top' };
  }

  const outDir = path.resolve(__dirname, '../../../../reports/results');
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, `results-${Date.now()}.xlsx`);
  await wb.xlsx.writeFile(outFile);
  return outFile;
}

async function main() {
  const { mode, input } = parseArgs(process.argv);
  if (!mode || !input) {
    console.error('Usage: --mode=test-cases|results --input=<json>');
    process.exit(1);
  }
  if (!fs.existsSync(input)) {
    console.error(`[excel-reporter] input not found: ${input}`);
    process.exit(1);
  }
  const out = mode === 'test-cases' ? await exportTestCases(input) : await exportResults(input);
  console.log(`[excel-reporter] wrote ${out}`);
}

if (require.main === module) {
  main().catch((e) => {
    console.error('[excel-reporter] ERROR:', e.message || e);
    process.exit(1);
  });
}

export { exportTestCases, exportResults };
