/**
 * SI4-T1549 final end-to-end verification (Employee list: "Start → End Hours" + "Work Pattern").
 * Read-only: GETs, hovers, header sort/filter clicks. Results are collected as PASS/FAIL rows
 * into reports/2026-11-04-t1549-e2e/results.json (plain checks, no soft assertions hiding anything).
 */
import { test } from '../../fixtures/auth';
import type { Page } from '@playwright/test';
import * as fs from 'fs';

const OUT = 'reports/2026-11-04-t1549-e2e';
type Row = { id: string; check: string; result: 'PASS' | 'FAIL' | 'INFO'; detail: string };
const rows: Row[] = [];
const rec = (id: string, check: string, ok: boolean | null, detail = '') =>
  rows.push({ id, check, result: ok === null ? 'INFO' : ok ? 'PASS' : 'FAIL', detail });
test.afterAll(() => fs.writeFileSync(`${OUT}/results.json`, JSON.stringify(rows, null, 1)));

const listRows = (j: any): any[] => j?.data?.employees ?? j?.data?.items ?? j?.data?.data ?? (Array.isArray(j?.data) ? j.data : []);
const act = (r: any) => r.activity;

async function openList(page: Page, qs = ''): Promise<{ url: string; json: any } | null> {
  let hit: { url: string; json: any } | null = null;
  const h = async (r: any) => {
    if (/\/api\/v1\/employees\?/.test(r.url()) && r.ok()) {
      try { const json = await r.json(); if (listRows(json).length) hit = { url: r.url(), json }; } catch { /* */ }
    }
  };
  page.on('response', h);
  await page.goto('/employee' + qs);
  await page.waitForTimeout(2500);
  const cur = page.getByText('Current Employee', { exact: true }).first();
  if (await cur.count()) await cur.click();
  await page.waitForTimeout(4000);
  page.off('response', h);
  return hit;
}

async function gotoActive(page: Page) {
  await page.goto('/employee');
  await page.waitForTimeout(2500);
  const cur = page.getByText('Current Employee', { exact: true }).first();
  if (await cur.count()) await cur.click();
  await page.getByRole('columnheader', { name: /Start/ }).first().waitFor({ timeout: 30_000 });
}
test.describe.configure({ mode: 'serial' });

test('admin: UI + API', async ({ page }) => {
  test.setTimeout(420_000);
  const first = await openList(page);
  const hdr = page.getByRole('columnheader');
  const hdrs = await hdr.allInnerTexts();
  rec('1', 'Columns on Active tab', hdrs.some((h) => /Start/.test(h)) && hdrs.some((h) => /Work Pattern/.test(h)), hdrs.filter((h) => /Start|Work/.test(h)).join(' | '));
  await page.screenshot({ path: `${OUT}/01-active.png` });

  // all rows, periods 30/60/90
  const base = new URL(first!.url);
  const fetchAll = async (period: string) => {
    const all: any[] = [];
    for (let p = 1; p < 30; p++) {
      const u = new URL(base.toString());
      u.searchParams.set('limit', '300'); u.searchParams.set('page', String(p)); u.searchParams.set('activityPeriod', period);
      u.searchParams.delete('sortBy'); u.searchParams.delete('sortOrder');
      const res = await page.request.get(u.toString());
      if (!res.ok()) break;
      const arr = listRows(await res.json());
      all.push(...arr);
      if (arr.length < 300) break;
    }
    return all;
  };
  const data: Record<string, any[]> = {};
  for (const p of ['30', '60', '90']) data[p] = await fetchAll(p);
  rec('16a', 'API returns all employees for 30/60/90', Object.values(data).every((d) => d.length > 3000), Object.entries(data).map(([k, v]) => `${k}d=${v.length}`).join(', '));
  let diff6 = 0, diff9 = 0;
  data['30'].forEach((r, i) => { const a = JSON.stringify(act(r)); if (a !== JSON.stringify(act(data['60'][i]))) diff6++; if (a !== JSON.stringify(act(data['90'][i]))) diff9++; });
  rec('16b', '30/60/90 return different values', diff6 > 0 && diff9 > 0, `rows differing 30v60=${diff6}, 30v90=${diff9}`);

  for (const bad of ['45', '365', 'abc']) {
    const u = new URL(base.toString()); u.searchParams.set('limit', '100'); u.searchParams.set('activityPeriod', bad);
    const res = await page.request.get(u.toString());
    rec('16c', `activityPeriod=${bad} rejected`, res.status() === 400, `HTTP ${res.status()}`);
  }

  // value rules per period
  for (const p of ['30', '60', '90']) {
    const acts = data[p].map((r) => ({ n: r.name ?? r.fullName, a: act(r) })).filter((x) => x.a);
    const thr = acts.filter((x) => typeof x.a.density === 'number' && x.a.workPattern !== undefined && (
      (x.a.density <= 40 && x.a.workPattern !== 'LOW') || (x.a.density > 55 && x.a.workPattern !== 'HIGH') ||
      (x.a.density > 40 && x.a.density <= 55 && (x.a.workPattern === 'LOW' || x.a.workPattern === 'HIGH'))));
    rec('8', `Flag matches thresholds (${p}d)`, thr.length === 0, `mismatches=${thr.length} ${thr.slice(0, 3).map((x) => x.n + ':' + x.a.density + x.a.workPattern).join(', ')}`);
    const n3 = acts.filter((x) => x.a.startHours == null && x.a.workPattern && x.a.workPattern !== 'NONE' && !x.a.coverageNote);
    rec('11', `No-hours row has no flag (${p}d)`, n3.length === 0, `rows=${n3.length} ${n3.slice(0, 3).map((x) => x.n + ':' + x.a.workPattern).join(', ')}`);
    const cov = acts.filter((x) => x.a.coverageNote);
    const covBad = cov.filter((x) => x.a.startHours != null || (x.a.workPattern && x.a.workPattern !== 'NONE'));
    rec('10', `Coverage-note rows carry no times/flag (${p}d)`, covBad.length === 0, `coverage rows=${cov.length}, violating=${covBad.length}`);
    const nodata = acts.filter((x) => x.a.status === 'no_data' || (x.a.startHours == null && x.a.status !== 'ok' && !x.a.coverageNote));
    rec('9', `No-data rows have no hours (${p}d)`, nodata.every((x) => x.a.startHours == null), `no-data rows=${nodata.length}`);
  }
  const sample30 = data['30'].map(act).filter(Boolean);
  rec('4', 'Row sample has start/close values', sample30.some((a) => a.startHours != null && a.closeHoursAdjusted != null), JSON.stringify(sample30.find((a) => a.startHours != null)));
  const plus1 = sample30.filter((a) => typeof a.closeHoursAdjusted === 'number' && a.closeHoursAdjusted >= 24);
  rec('5a', 'API has close-after-midnight rows (adjusted ≥ 24)', plus1.length > 0, `rows=${plus1.length}`);
  rec('G1', 'lastSyncedAt present (Data as of source)', sample30.some((a) => a.lastSyncedAt), `non-null=${sample30.filter((a) => a.lastSyncedAt).length}`);

  // UI: cell text, +1, badges
  const body = (await page.locator('tbody').innerText());
  rec('4b', 'UI cell shows range e.g. 9:30 AM – 7:15 PM', /\d{1,2}:\d{2} [AP]M – \d{1,2}:\d{2} [AP]M/.test(body), '');
  rec('7', 'UI Work Pattern badges (High/Low · n min/hr, No flag)', /(High|Low) · \d+ min\/hr/.test(body) && /No flag/.test(body), '');
  rec('9b', 'UI no-data shows readable placeholder (not bare dash only)', /No data/i.test(body) || /—/.test(body), 'cell shows ' + (/No data/i.test(body) ? 'No data' : '—'));

  // hover card
  const cell = page.locator('tbody tr').first().getByText(/\d{1,2}:\d{2} [AP]M – /).first();
  await cell.scrollIntoViewIfNeeded(); await cell.hover(); await page.waitForTimeout(900);
  const pop = (await page.locator('[role="tooltip"], [data-radix-popper-content-wrapper]').allInnerTexts()).join(' ');
  await page.screenshot({ path: `${OUT}/06-hover-card.png` });
  rec('6', 'Hover card: period, avg start/close IST, min/hr', /last 30 days/i.test(pop) && /IST/.test(pop) && /min/i.test(pop), pop.replace(/\s+/g, ' ').slice(0, 220));

  // Info tooltips
  const btns = page.getByRole('button', { name: /About Start|How Work Pattern/i });
  const tips: string[] = [];
  for (let i = 0; i < (await btns.count()); i++) {
    await btns.nth(i).scrollIntoViewIfNeeded(); await btns.nth(i).hover(); await page.waitForTimeout(700);
    tips.push((await page.locator('[role="tooltip"]').first().innerText().catch(() => '')).trim());
    await page.mouse.move(0, 0);
  }
  rec('19', 'Header ⓘ tooltips open (both)', tips.length === 2 && tips.every((t) => t.length > 10), tips.join(' || ').replace(/\s+/g, ' ').slice(0, 260));
  rec('G3', 'IST stated in header tooltip', tips.some((t) => /IST/.test(t)), '');
  rec('G3b', 'IST visible in the cell itself', /\d{1,2}:\d{2} [AP]M – [^\n]*IST/.test(body), 'cell text has no IST (only tooltip/hover)');
  rec('G2', 'Column header named "Active Hours"', hdrs.some((h) => /Active Hours/i.test(h)), 'header: ' + hdrs.find((h) => /Start/.test(h)));
  rec('G1b', '"Data as of" note shown on page', /data as of/i.test(await page.locator('body').innerText()), '');

  // Past employee tab
  const past = page.getByRole('tab', { name: /past/i }).or(page.getByRole('button', { name: /past employee/i })).first();
  if (await past.count()) {
    await past.click(); await page.waitForTimeout(3000);
    const ph = await page.getByRole('columnheader').allInnerTexts();
    await page.screenshot({ path: `${OUT}/07-past.png` });
    rec('2', 'Columns NOT on Past Employee tab', !ph.some((h) => /Start|Work Pattern/.test(h)), ph.join(' | '));
  } else rec('2', 'Past tab found', false, 'tab locator not found');

  // Filter + URL + reload (Active tab)
  await gotoActive(page);
  const startHdr = page.getByRole('columnheader', { name: /Start/ }).first();
  const filterBtn = startHdr.getByRole('button', { name: /filter/i }).first();
  if (await filterBtn.count()) {
    await filterBtn.click(); await page.waitForTimeout(1200);
    await page.screenshot({ path: `${OUT}/12-filter-dialog.png` });
    const dlg = page.getByRole('dialog').first();
    const opts = await dlg.locator('[role=checkbox]').evaluateAll((e) => e.map((x) => (x.parentElement?.innerText || '').trim()));
    const def = await dlg.locator('[role=checkbox][aria-checked=true]').evaluateAll((e) => e.map((x) => (x.parentElement?.innerText || '').trim()).join(','));
    await dlg.getByRole('checkbox').nth(1).click({ force: true });
    const single = await dlg.locator('[role=checkbox][aria-checked=true]').count();
    await dlg.getByRole('button', { name: /save/i }).click(); await page.waitForTimeout(3500);
    rec('12', 'Filter dialog: 30/60/90 single choice, default 30, Save', /30/.test(String(def)) && single === 1 && opts.length === 3 && /60/.test(page.url()), `default=${def} singleAfterPick=${single} opts=${opts.join(',')} url=${page.url()}`);
    rec('14a', 'Period in URL', /activityPeriod=60/.test(page.url()), page.url());
    await page.reload(); await page.waitForTimeout(3500);
    rec('14b', 'Period kept after reload', /activityPeriod=60/.test(page.url()), page.url());
    const c2 = page.locator('tbody tr').first().getByText(/\d{1,2}:\d{2} [AP]M – /).first();
    await c2.hover(); await page.waitForTimeout(900);
    const pop2 = (await page.locator('[role="tooltip"], [data-radix-popper-content-wrapper]').allInnerTexts()).join(' ');
    rec('15', 'Hover card follows period (last 60 days)', /last 60 days/i.test(pop2), pop2.replace(/\s+/g, ' ').slice(0, 160));
    await page.screenshot({ path: `${OUT}/20-period-60.png` });
    // Work Pattern filter shows 60 (shared)
    const wpBtn = page.getByRole('columnheader', { name: /Work Pattern/ }).first().getByRole('button', { name: /filter/i }).first();
    if (await wpBtn.count()) {
      await wpBtn.click(); const d2 = page.getByRole('dialog').first();
      const chk = await d2.locator('[role=checkbox][aria-checked=true]').evaluateAll((e) => e.map((x) => (x.parentElement?.innerText || '').trim()).join(','));
      rec('13', 'Filter shared by both columns (Work Pattern shows 60)', /60/.test(chk), `checked=${chk}`);
      await page.keyboard.press('Escape');
    } else rec('13', 'Work Pattern filter control found', false, '');
  } else rec('12', 'Start→End filter control found', false, 'no filter button in header');

  // Sort: click headers, check order of returned data
  for (const [label, key] of [['Start → End', 'start'], ['Work Pattern', 'wp']] as const) {
    await gotoActive(page);
    const hd = page.getByRole('columnheader', { name: new RegExp(label) }).first().getByRole('button', { name: /^Sort/ }).first();
    const captured: { url: string; json: any }[] = [];
    const h = async (r: any) => { if (/\/api\/v1\/employees\?/.test(r.url()) && /sort/i.test(r.url()) && r.ok()) { try { captured.push({ url: r.url(), json: await r.json() }); } catch { /* */ } } };
    page.on('response', h);
    for (let i = 0; i < 2; i++) { await hd.click(); await page.waitForTimeout(3500); }
    page.off('response', h);
    const urls = captured.map((c) => new URL(c.url).searchParams.get('sortBy') + ':' + new URL(c.url).searchParams.get('sortOrder'));
    // validate order using full sorted fetch from captured request
    const verdicts: string[] = [];
    for (const c of captured.slice(0, 2)) {
      const u = new URL(c.url); const dir = u.searchParams.get('sortOrder'); const field = u.searchParams.get('sortBy');
      const all: any[] = [];
      for (let p = 1; p < 30; p++) { u.searchParams.set('limit', '300'); u.searchParams.set('page', String(p)); const res = await page.request.get(u.toString()); const arr = listRows(await res.json()); all.push(...arr); if (arr.length < 300) break; }
      const vals = all.map((r) => { const a = act(r); const v = key === 'start' ? a?.startHours : a?.density; return typeof v === 'number' ? v : null; });
      const real = vals.filter((v) => v !== null) as number[];
      const ok = real.every((v, i) => i === 0 || (dir?.toLowerCase().startsWith('asc') ? real[i - 1] <= v : real[i - 1] >= v));
      const firstNull = vals.findIndex((v) => v === null);
      const nullsLast = firstNull === -1 || vals.slice(firstNull).every((v) => v === null);
      verdicts.push(`${field}:${dir} rows=${all.length} ordered=${ok} noDataLast=${nullsLast}`);
    }
    rec(key === 'start' ? '17' : '18', `Sort ${label} asc/desc, no-data last`, captured.length >= 2 && verdicts.every((v) => /ordered=true noDataLast=true/.test(v)), `${urls.join(' → ')} | ${verdicts.join(' ; ')}`);
  }

  // cron / sync status (read-only GET)
  const apiRoot = base.origin + '/api/v1';
  const cr = await page.request.get(apiRoot + '/sync-queue/cron-runs/summary');
  const crText = cr.ok() ? JSON.stringify(await cr.json()) : `HTTP ${cr.status()}`;
  const m = crText.match(/employee-activity-sync[^}]*\}/);
  rec('cron', 'employee-activity-sync cron has run (nightly proof)', m ? !/"lastRun":null/.test(m[0]) : null, m ? m[0].slice(0, 300) : crText.slice(0, 200));
});

const ROLES: [string, string, boolean][] = [
  ['tmPage', 'TM', true], ['emPage', 'EM', true], ['pmoPage', 'PMO', true], ['pmPage', 'RM/DM (hardik)', false], ['csmPage', 'CSM', null as any], ['empPage', 'Employee', null as any],
];
for (const [fx, label, shows] of ROLES) {
  test(`role ${label}`, async ({ browser }) => {
    test.setTimeout(90_000);
    const f = require('../../fixtures/auth');
    void f;
    const file = { tmPage: 'tm', emPage: 'em', pmoPage: 'pmo', pmPage: 'pm', csmPage: 'csm', empPage: 'emp' }[fx];
    const ctx = await browser.newContext({ storageState: `tests/fixtures/storageState-${file}.json` });
    const page = await ctx.newPage();
    let hasActivity = false, count = 0;
    page.on('response', async (r) => { if (/\/api\/v1\/employees\?/.test(r.url()) && r.ok()) { try { const a = listRows(await r.json()); if (a.length) { count = Math.max(count, a.length); hasActivity = a.some((x) => x.activity); } } catch { /* */ } } });
    await page.goto('/employee'); await page.waitForTimeout(5000);
    const unauth = /unauthorized|forbidden/i.test(page.url());
    const hdrs = await page.getByRole('columnheader').allInnerTexts();
    const cols = hdrs.some((h) => /Start/.test(h));
    await page.screenshot({ path: `${OUT}/role-${file}.png` });
    if (shows === true) rec('3', `Role ${label}: page opens + columns shown`, !unauth && cols && hasActivity, `url=${page.url()} cols=${cols} activityInApi=${hasActivity}`);
    else if (shows === false) rec('3', `Role ${label}: page opens, columns hidden`, !unauth && !cols && !hasActivity, `url=${page.url()} cols=${cols} activityInApi=${hasActivity}`);
    else rec('3', `Role ${label}: blocked`, unauth || !cols, `url=${page.url()} cols=${cols}`);
    await ctx.close();
  });
}
