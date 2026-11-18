const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('gap-risk');
  const { page } = await H.login(b, 'vihaan.chatterjee'); H.attach(page, R.errs);
  await R.step('guardrail-flag-button', async () => {
    await H.go(page, '/employee');
    await page.locator('table tbody tr').first().waitFor({ timeout: 20000 });
    const flags = page.locator('table tbody td button[aria-label]').filter({ has: page.locator('svg') });
    const info = await page.locator('table tbody tr').first().locator('td').nth(1).locator('button').evaluateAll(bs => bs.map(x => ({ al: x.getAttribute('aria-label'), txt: x.textContent.trim().slice(0, 20), w: Math.round(x.getBoundingClientRect().width), h: Math.round(x.getBoundingClientRect().height), y: Math.round(x.getBoundingClientRect().y) })));
    const flag = page.locator('table tbody tr').first().locator('td').nth(1).locator('button[aria-label]').filter({ hasNotText: /\S/ }).last();
    await flag.focus(); await page.waitForTimeout(900);
    const tip = await page.locator('[role="tooltip"]').allInnerTexts();
    const shot = await H.shot(page, 'g08-guardrail-flag-focus');
    return { info, focused: await page.evaluate(() => document.activeElement.tagName + ':' + document.activeElement.getAttribute('aria-label')), tip: tip.map(t => t.slice(0, 150)), shot };
  });
  await R.step('kpi-status-role', async () => {
    await H.go(page, '/requests-tracking/project-allocation');
    const st = await page.getByRole('status').count();
    const out = await page.locator('output').count();
    return { url: page.url(), statusRoles: st, outputs: out, shot: await H.shot(page, 'g09-tickets-kpi') };
  });
  await R.step('ticket-edit-history-object', async () => {
    const r = await H.api(page, 'GET', '/allocation-tickets?page=1&limit=50');
    return { status: r.status, note: 'see ua-edit-history (28/10): objectLeak=false' };
  });
  R.done(); await b.close();
})();
