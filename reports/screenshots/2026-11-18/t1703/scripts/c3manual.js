// T1685 manual checks 18/11: I645 wording, holder panel wording, full name on hover
const H = require('./h');
const SHOT = '/home/subham/SIMERP new project/reports/screenshots/2026-11-18/t1685/';
require('fs').mkdirSync(SHOT, { recursive: true });
const out = [];
const log = (k, v) => { out.push([k, v]); console.log(k, '|', typeof v === 'string' ? v : JSON.stringify(v).slice(0, 600)); };
(async () => {
  const b = await H.chromium.launch();
  // 1. Employee: Update Certification drawer
  const e = await H.login(b, 'kashyap.patel'); const p = e.page;
  await H.go(p, '/employee/certifications');
  await p.getByRole('button', { name: 'Edit QA-E2E sample certificate', exact: true }).click();
  const d = p.getByRole('dialog', { name: 'Update Certification' }); await d.waitFor();
  await p.waitForTimeout(1000);
  const dt = await d.innerText();
  log('drawer has "Proof" word', /proof/i.test(dt));
  log('drawer labels', dt.split('\n').filter(l => /badge|proof|update/i.test(l)));
  await p.screenshot({ path: SHOT + 'i645-update-drawer.png' });
  await d.getByRole('button', { name: 'Cancel' }).click().catch(() => {});
  // 2. Admin: Organisation tab, open holders, open holder side panel
  const a = await H.login(b, 'ceo'); const q = a.page;
  await H.go(q, '/employee/certifications?tab=organisation');
  await q.getByRole('button', { name: /^Show or hide the holders of / }).first().click();
  await q.waitForTimeout(1500);
  // click the first holder name link/button inside expanded rows
  const holderRow = q.locator('table tbody tr').filter({ hasText: /@|\d{2}\/\d{2}\/\d{2,4}/ }).first();
  await holderRow.locator('button, a, [role=button]').filter({ hasNotText: /^$/ }).first().click().catch(e => log('holder click err', e.message));
  await q.waitForTimeout(1500);
  const panel = q.locator('[role=dialog], [data-slot=sheet-content]').last();
  const pt = await panel.innerText().catch(() => '');
  log('holder panel text (proof/badge lines)', pt.split('\n').filter(l => /badge|proof/i.test(l)));
  await q.screenshot({ path: SHOT + 'i645-holder-panel.png' });
  await q.keyboard.press('Escape');
  // 3. Hover: find a truncated certificate name in the org table and hover it
  await H.go(q, '/employee/certifications?tab=organisation');
  const trunc = await q.evaluate(() => {
    const els = Array.from(document.querySelectorAll('table td *')).filter(el => el.children.length === 0 && el.scrollWidth > el.clientWidth + 1 && (el.textContent || '').trim().length > 5);
    els.forEach((el, i) => el.setAttribute('data-qa-trunc', String(i)));
    return els.slice(0, 5).map(el => el.textContent.trim());
  });
  log('truncated cells in org table', trunc);
  if (trunc.length) {
    await q.locator('[data-qa-trunc="0"]').hover(); await q.waitForTimeout(1200);
    const tip = await q.locator('[role=tooltip], [data-slot=tooltip-content]').allInnerTexts();
    log('tooltip on hover shows full name', { full: trunc[0], tip, ok: tip.some(t => t.includes(trunc[0])) });
    await q.screenshot({ path: SHOT + 'hover-full-name.png' });
  }
  // 4. Employee page side panel: certification names (long) tooltip
  await H.go(q, '/employee');
  require('fs').writeFileSync(SHOT + 'c3manual.json', JSON.stringify(out, null, 1));
  await b.close();
})().catch(e => { console.error('CRASH', e.message); process.exit(1); });
