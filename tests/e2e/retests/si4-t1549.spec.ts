/**
 * Re-test SI4-T1549 follow-ups (filed 30/10): N1 = SI4-I621 (flag vs min/hr), N2 = SI4-I622 (ⓘ tooltips),
 * N3 = SI4-I623 (no-hours row shows a flag), gaps G1 "Data as of", G2 "Active Hours" name, G3 IST in cell.
 * Read-only: list, hover, click on header info buttons only.
 */
import { test } from '../../fixtures/auth';
import * as fs from 'fs';

const OUT = 'reports/2026-11-04-t1549';

test('T1549 re-test: N1-N3, G1-G3', async ({ page }) => {
  test.setTimeout(240_000);
  const lists: any[] = [];
  page.on('response', async (r) => {
    if (/\/api\/v1\/employees\?/.test(r.url()) && r.ok()) {
      try { lists.push({ url: r.url(), json: await r.json() }); } catch { /* ignore */ }
    }
  });
  const result: Record<string, unknown> = {};

  for (const period of [30, 60, 90]) {
    lists.length = 0;
    await page.goto(`/employee?activityPeriod=${period}`);
    await page.getByRole('columnheader', { name: /Start/ }).first().waitFor({ timeout: 40_000 });
    await page.waitForTimeout(2500);
    const l = lists.find((x) => JSON.stringify(x.json).includes('workPattern'));
    if (!l) { result[`p${period}`] = 'no list with workPattern captured'; continue; }
    if (period === 30) fs.writeFileSync(`${OUT}/api-list-sample.json`, JSON.stringify(l, null, 1).slice(0, 6000));
  }

  // Full scan via the page's own authenticated request context (read-only GETs)
  const sample = lists[0];
  const base = sample ? new URL(sample.url) : null;
  if (base) {
    for (const period of [30, 60, 90]) {
      const rows: any[] = [];
      for (let p = 1; p <= 20; p++) {
        const u = new URL(base.toString());
        u.searchParams.set('limit', '300'); u.searchParams.set('page', String(p));
        u.searchParams.set('activityPeriod', String(period));
        const res = await page.request.get(u.toString());
        if (!res.ok()) break;
        const j = await res.json();
        const arr = j?.data?.employees ?? j?.data?.items ?? j?.data?.data ?? (Array.isArray(j?.data) ? j.data : []);
        if (!arr.length) break;
        rows.push(...arr);
        if (arr.length < 300) break;
      }
      const acts = rows.map((r) => ({ name: r.name ?? r.fullName, a: r.activity ?? r.activeHours ?? r.dayActivity })).filter((x) => x.a);
      const n1 = acts.filter((x) => typeof x.a.density === 'number' && x.a.workPattern &&
        ((x.a.density <= 40 && x.a.workPattern !== 'LOW') || (x.a.density > 55 && x.a.workPattern !== 'HIGH') ||
         (x.a.density > 40 && x.a.density <= 55 && x.a.workPattern !== 'NORMAL' && x.a.workPattern !== 'NONE' && x.a.workPattern !== null)));
      const n3 = acts.filter((x) => x.a.status === 'ok' && x.a.startHours == null && x.a.workPattern);
      result[`p${period}`] = { rows: rows.length, withActivity: acts.length, n1Mismatch: n1.slice(0, 10), n3Rows: n3.slice(0, 10), sampleKeys: acts[0] ? Object.keys(acts[0].a) : [], lastSyncedAt: acts.find((x) => x.a.lastSyncedAt)?.a.lastSyncedAt ?? null };
    }
  }

  // N2 + G1-G3 on UI
  await page.goto('/employee');
  await page.getByRole('columnheader', { name: /Start/ }).first().waitFor({ timeout: 40_000 });
  const infoBtns = page.getByRole('button', { name: /About Start|How Work Pattern/i });
  result.infoButtons = await infoBtns.count();
  const n2: Record<string, unknown>[] = [];
  for (let i = 0; i < (await infoBtns.count()); i++) {
    const b = infoBtns.nth(i);
    const label = await b.getAttribute('aria-label');
    await b.scrollIntoViewIfNeeded();
    await b.hover(); await page.waitForTimeout(800);
    const hover = await page.locator('[role="tooltip"], [data-radix-popper-content-wrapper]').allInnerTexts();
    await page.screenshot({ path: `${OUT}/info-hover-${i}.png` });
    await b.click(); await page.waitForTimeout(800);
    const click = await page.locator('[role="tooltip"], [role="dialog"], [data-radix-popper-content-wrapper]').allInnerTexts();
    await page.screenshot({ path: `${OUT}/info-click-${i}.png` });
    await page.keyboard.press('Escape');
    n2.push({ label, hover, click });
  }
  result.n2 = n2;
  result.headerTexts = await page.getByRole('columnheader').allInnerTexts();
  const body = await page.locator('body').innerText();
  result.g1DataAsOf = /data as of/i.test(body);
  result.g3IstInBody = /\bIST\b/.test(body);
  const firstCell = page.locator('tbody tr').first();
  result.firstRowText = (await firstCell.innerText()).replace(/\s+/g, ' ').slice(0, 400);
  await page.screenshot({ path: `${OUT}/02-list.png` });

  fs.writeFileSync(`${OUT}/result.json`, JSON.stringify(result, null, 1));
});
