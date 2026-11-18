/**
 * Self-test for scripts/cases-lifecycle.ts — proves the safety rules hold, on throwaway fixtures
 * (CASE_LIFECYCLE_ROOT points at a temp dir, so real cases and ledgers are never touched).
 *
 *   npm run cases:selftest
 */
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { spawnSync } from 'child_process';

const CLI = path.resolve(__dirname, 'cases-lifecycle.ts');
const TS_NODE = require.resolve('ts-node/dist/bin.js');

interface Run { code: number; out: string }
let root = '';

function fresh(cases: Array<Record<string, unknown>> = base()): void {
  root = fs.mkdtempSync(path.join(os.tmpdir(), 'cases-lifecycle-'));
  fs.mkdirSync(path.join(root, 'reports', 'test-cases'), { recursive: true });
  fs.mkdirSync(path.join(root, 'reports', 'knowledge-base', 'case-lifecycle'), { recursive: true });
  fs.writeFileSync(path.join(root, 'reports', 'test-cases', 'cases-2026-10-01-ZZZ.json'), JSON.stringify(cases));
  fs.writeFileSync(path.join(root, 'reports', 'knowledge-base', 'case-lifecycle', 'modules.json'), JSON.stringify({
    schemaVersion: 1, modules: { ZZZ: { module: 'Zed', name: 'Zed Module', aliases: ['Old Module'], status: 'live' } },
  }));
}
const c = (id: string, title: string, extra: Record<string, unknown> = {}): Record<string, unknown> => ({ id, title, moduleCode: 'ZZZ', module: 'Zed', priority: 'low', category: 'functional', ...extra });
const base = (): Array<Record<string, unknown>> => [
  c('TC-ZZZ-001', 'Login works', { priority: 'high', category: 'smoke' }),
  c('TC-ZZZ-002', 'Export to csv'),
  c('TC-ZZZ-003', 'Old name case', { module: 'Old Module' }),
];
const casesFile = (): string => path.join(root, 'reports', 'test-cases', 'cases-2026-10-01-ZZZ.json');
const writeCases = (list: Array<Record<string, unknown>>, file = casesFile()): void => fs.writeFileSync(file, JSON.stringify(list));

function run(...args: string[]): Run {
  const r = spawnSync(process.execPath, [TS_NODE, '--transpile-only', CLI, ...args], {
    env: { ...process.env, CASE_LIFECYCLE_ROOT: root, SIMERP_APP_DIR: path.join(root, 'no-app'), API_BASE_URL: 'http://127.0.0.1:1' },
    encoding: 'utf8', timeout: 60_000,
  });
  return { code: r.status ?? 1, out: `${r.stdout}${r.stderr}` };
}

const results: Array<{ name: string; ok: boolean; detail: string }> = [];
function test(name: string, fn: () => void): void {
  try { fn(); results.push({ name, ok: true, detail: '' }); } catch (e) { results.push({ name, ok: false, detail: (e as Error).message }); }
}
function expect(cond: boolean, msg: string): void { if (!cond) throw new Error(msg); }

test('snapshot then check passes on an unchanged library', () => {
  fresh(); expect(run('snapshot').code === 0, 'snapshot failed'); const r = run('check'); expect(r.code === 0, `check failed: ${r.out}`);
});
test('a case removed from the files is reported LOST and fails the check', () => {
  fresh(); run('snapshot'); writeCases(base().filter(x => x.id !== 'TC-ZZZ-002'));
  const r = run('check'); expect(r.code === 1 && /LOST\s+TC-ZZZ-002/.test(r.out), `expected LOST, got: ${r.out}`);
});
test('reusing an ID for a different case fails the check (REUSED)', () => {
  fresh(); run('snapshot'); writeCases([c('TC-ZZZ-001', 'A completely different case')], path.join(root, 'reports', 'test-cases', 'cases-2026-10-05-ZZZ.json'));
  const r = run('check'); expect(r.code === 1 && /REUSED\s+TC-ZZZ-001/.test(r.out), `expected REUSED, got: ${r.out}`);
});
test('snapshot refuses to bless a reused ID unless told to', () => {
  fresh(); run('snapshot'); writeCases([c('TC-ZZZ-001', 'A completely different case')], path.join(root, 'reports', 'test-cases', 'cases-2026-10-05-ZZZ.json'));
  expect(run('snapshot').code === 1, 'snapshot should have refused');
  expect(run('snapshot', '--accept-reused-ids').code === 0, 'snapshot --accept-reused-ids should succeed');
});
test('an ID twice inside one file fails the check (DUPLICATE)', () => {
  fresh(); run('snapshot'); writeCases([...base(), c('TC-ZZZ-002', 'Export to csv')]);
  const r = run('check'); expect(r.code === 1 && /DUPLICATE\s+TC-ZZZ-002/.test(r.out), `expected DUPLICATE, got: ${r.out}`);
});
test('retiring needs a reason', () => {
  fresh(); run('snapshot'); expect(run('retire', 'TC-ZZZ-002').code === 1, 'retire without reason should fail');
});
test('retiring a protected case without replacement or feature-removed is refused', () => {
  fresh(); run('snapshot'); const r = run('retire', 'TC-ZZZ-001', '--reason=old'); expect(r.code === 1 && /protected/.test(r.out), `expected refusal, got: ${r.out}`);
});
test('retiring with a replacement that does not exist is refused', () => {
  fresh(); run('snapshot'); expect(run('retire', 'TC-ZZZ-001', '--reason=old', '--replaced-by=TC-ZZZ-999').code === 1, 'should refuse a missing replacement');
});
test('a retired case may leave the files and the check still passes; the ledger keeps the reason', () => {
  fresh(); run('snapshot'); expect(run('retire', 'TC-ZZZ-001', '--reason=feature removed in 7.0', '--feature-removed=Removed in 7.0').code === 0, 'retire failed');
  writeCases(base().filter(x => x.id !== 'TC-ZZZ-001')); const r = run('check');
  expect(r.code === 0, `check should pass: ${r.out}`);
  const ledger = JSON.parse(fs.readFileSync(path.join(root, 'reports', 'knowledge-base', 'case-lifecycle', 'lifecycle.json'), 'utf8')) as { cases: Record<string, { status: string; reason: string }> };
  const entry = Object.values(ledger.cases)[0]; expect(entry.status === 'retired' && /7\.0/.test(entry.reason), 'ledger entry missing');
});
test('retire never edits the case file', () => {
  fresh(); run('snapshot'); const before = fs.readFileSync(casesFile(), 'utf8'); run('retire', 'TC-ZZZ-002', '--reason=not needed');
  expect(fs.readFileSync(casesFile(), 'utf8') === before, 'case file was modified');
});
test('next-id returns the next free number and never an existing one', () => {
  fresh(); run('snapshot'); const r = run('next-id', 'ZZZ'); expect(r.out.trim() === 'TC-ZZZ-004', `got ${r.out}`);
  writeCases(base().filter(x => x.id !== 'TC-ZZZ-003')); expect(run('next-id', 'ZZZ').out.trim() === 'TC-ZZZ-004', 'must stay above any ID in the snapshot');
});
test('stale flags the old module name and counts every case', () => {
  fresh(); run('snapshot'); const r = run('stale'); expect(r.code === 0, r.out);
  const md = fs.readFileSync(path.join(root, 'reports', 'test-cases-lifecycle', fs.readdirSync(path.join(root, 'reports', 'test-cases-lifecycle')).find(f => f.endsWith('.md'))!), 'utf8');
  expect(/uses the old name "Old Module" \(now "Zed Module"\)/.test(md), 'old-name not flagged'); expect(/adds up to 3/.test(md), 'reconciliation line missing');
});
test('from-results marks passed cases verified and leaves failed ones alone', () => {
  fresh(); run('snapshot');
  const res = { suites: [{ specs: [{ title: 'TC-ZZZ-001 Login works @smoke', ok: true, tests: [] }, { title: 'TC-ZZZ-002 Export to csv', ok: false, tests: [] }] }] };
  const f = path.join(root, 'res.json'); fs.writeFileSync(f, JSON.stringify(res));
  const r = run('from-results', f, '--version=9.9.9'); expect(r.code === 0 && /1 passed/.test(r.out), r.out);
  const ledger = JSON.parse(fs.readFileSync(path.join(root, 'reports', 'knowledge-base', 'case-lifecycle', 'lifecycle.json'), 'utf8')) as { cases: Record<string, { verified?: { appVersion?: string } }> };
  const keys = Object.keys(ledger.cases); expect(keys.length === 1 && keys[0].startsWith('TC-ZZZ-001#') && ledger.cases[keys[0]].verified?.appVersion === '9.9.9', 'wrong ledger content');
});
test('reactivate brings a retired case back and keeps the history', () => {
  fresh(); run('snapshot'); run('retire', 'TC-ZZZ-002', '--reason=not needed'); expect(run('reactivate', 'TC-ZZZ-002', '--reason=needed again').code === 0, 'reactivate failed');
  const ledger = JSON.parse(fs.readFileSync(path.join(root, 'reports', 'knowledge-base', 'case-lifecycle', 'lifecycle.json'), 'utf8')) as { cases: Record<string, { status: string; history: unknown[] }> };
  const e = Object.values(ledger.cases)[0]; expect(e.status === 'active' && e.history.length === 2, 'history not kept');
});

for (const r of results) console.log(`${r.ok ? '✓' : '✗'} ${r.name}${r.ok ? '' : `\n    ${r.detail.split('\n').join('\n    ')}`}`);
const failed = results.filter(r => !r.ok).length;
console.log(`\n${failed ? '✗' : '✓'} ${results.length - failed}/${results.length} passed`);
process.exit(failed ? 1 : 0);
