const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('pmo1');
  const { ctx, page } = await H.login(b, 'vihaan.chatterjee'); H.attach(page, R.errs);
  await R.step('emp-list-load', async () => {
    await H.go(page, '/employee?sortBy=availabilityPercentage&sortOrder=desc');
    await page.locator('table tbody tr').first().waitFor({ timeout: 30000 });
    const rows = await page.locator('table tbody tr').count();
    const out = await page.locator('output').allTextContents();
    const shot = await H.shot(page, 'p01-employee-list');
    return { rows, out, url: page.url(), bad: await H.emptyScan(page), shot };
  });
  await R.step('emp-sort-cycle', async () => {
    // sort by a column via header sort button: find button with aria-label containing 'Sort'
    const sb = page.locator('thead button[aria-label*="ort"]');
    const labels = await sb.evaluateAll(bs => bs.slice(0, 6).map(b => b.getAttribute('aria-label') + '@' + b.closest('th').textContent.trim().slice(0, 25)));
    const target = sb.first();
    const th = (await target.evaluate(b => b.closest('th').textContent.trim())).slice(0, 30);
    const seq = [];
    for (let i = 0; i < 3; i++) { await target.click(); await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForTimeout(800); const u = new URL(page.url()); seq.push({ sortBy: u.searchParams.get('sortBy'), sortOrder: u.searchParams.get('sortOrder'), aria: await target.getAttribute('aria-label') }); }
    const shot = await H.shot(page, 'p02-employee-sort');
    return { labels, th, seq, shot };
  });
  await R.step('emp-search-page', async () => {
    const s = page.getByPlaceholder(/Search/i).first();
    await s.fill('sa'); await page.waitForTimeout(1500); await page.waitForLoadState('networkidle').catch(() => {});
    const u1 = page.url();
    const out1 = await page.locator('output').allTextContents();
    // go page 2
    const next = page.getByRole('button', { name: /next/i }).first();
    let u2 = null, out2 = null;
    if (await next.isEnabled().catch(() => false)) { await next.click(); await page.waitForTimeout(1500); u2 = page.url(); out2 = await page.locator('output').allTextContents(); }
    await s.fill(''); await page.waitForTimeout(1500);
    const u3 = page.url();
    const shot = await H.shot(page, 'p03-employee-search-page');
    return { u1, out1, u2, out2, u3, shot };
  });
  await R.step('emp-adv-filter', async () => {
    const f = page.getByRole('button', { name: /^Filter/ }).first();
    await f.click(); await page.waitForTimeout(1000);
    const panel = page.getByRole('dialog').first();
    const vis = await panel.isVisible().catch(() => false);
    const txt = vis ? (await panel.textContent()).slice(0, 300) : null;
    // tick the first checkbox in a section
    const cb = panel.getByRole('checkbox').first();
    let res = null;
    if (await cb.count()) { await cb.click(); await page.waitForTimeout(1200); res = await panel.locator('output').allTextContents(); }
    const shot = await H.shot(page, 'p04-employee-adv-filter');
    const apply = panel.getByRole('button', { name: /Apply|Show/ }).first();
    if (await apply.count()) { await apply.click(); await page.waitForTimeout(2000); }
    const u = page.url();
    const chips = await page.locator('[data-slot="badge"], .chip').allTextContents().catch(() => []);
    const shot2 = await H.shot(page, 'p04b-employee-adv-filter-applied');
    // clear
    const clear = page.getByRole('button', { name: /Clear all|Reset/i }).first();
    if (await clear.count()) { await clear.click(); await page.waitForTimeout(1500); }
    return { vis, txt, res, u, uAfterClear: page.url(), shot, shot2 };
  });
  await R.step('emp-projects-popover', async () => {
    await H.go(page, '/employee?sortBy=availabilityPercentage&sortOrder=desc');
    await page.locator('table tbody tr').first().waitFor({ timeout: 30000 });
    // project badge buttons in Projects column
    const badges = page.locator('table tbody td button').filter({ hasText: /\S/ });
    const info = await page.$$eval('table tbody tr:first-child td', tds => tds.map(td => ({ t: td.textContent.trim().slice(0, 30), btn: td.querySelectorAll('button').length, nested: td.querySelectorAll('button button').length })));
    const nestedAll = await page.$$eval('button button, a button, button a', e => e.length);
    return { info: info.slice(0, 14), nestedAll };
  });
  await R.step('emp-up-pill-keyboard', async () => {
    const pill = page.locator('table tbody button').filter({ hasText: /P[123] ·|Not set/ }).first();
    await pill.focus(); await page.waitForTimeout(1000);
    const tip = await page.locator('[role="tooltip"]').allTextContents();
    const focused = await page.evaluate(() => document.activeElement && (document.activeElement.tagName + ':' + document.activeElement.textContent.trim().slice(0, 30)));
    const shot = await H.shot(page, 'p05-up-pill-tooltip');
    await page.keyboard.press('Escape');
    return { focused, tip, shot };
  });
  await R.step('emp-project-badge-click', async () => {
    // find a project allocation badge button (projects column) and click → should open something (hover card / side panel)
    const res = await page.evaluate(() => {
      const ths = Array.from(document.querySelectorAll('thead th')).map(th => th.textContent.trim());
      const idx = ths.findIndex(t => /^Projects/.test(t));
      const rows = Array.from(document.querySelectorAll('table tbody tr')).slice(0, 10);
      return { idx, cells: rows.map(r => { const td = r.querySelectorAll('td')[idx]; return td ? { t: td.textContent.trim().slice(0, 50), btns: Array.from(td.querySelectorAll('button')).map(b => (b.getAttribute('aria-label') || b.textContent.trim()).slice(0, 30)) } : null; }) };
    });
    return res;
  });
  R.done(); await b.close();
})();
