const H = require('./h');
const USER = process.argv[2] || 'vishal.desai';
(async () => {
  const b = await H.chromium.launch(); const R = H.runner('emp3-' + USER);
  const { page } = await H.login(b, USER); H.attach(page, R.errs);
  const blocked = [];
  await page.route('**/api/v1/**', (route) => { const m = route.request().method(); const u = route.request().url(); if (m !== 'GET' && !/auth\/(refresh|logout)/.test(u)) { blocked.push(m + ' ' + u); return route.abort(); } return route.continue(); });
  await R.step('help-toggle', async () => {
    await H.go(page, '/help'); await page.waitForTimeout(2000);
    const rows = page.locator('main').last().locator('button[data-slot="collapsible-trigger"]:visible');
    const n = await rows.count();
    const names = await rows.evaluateAll(b => b.slice(0, 6).map(x => x.textContent.trim().slice(0, 40) + '|' + x.getAttribute('aria-expanded')));
    if (n < 2) return { n, names };
    const first = rows.first(); const second = rows.nth(1);
    await first.click(); await page.waitForTimeout(500); const e1 = await first.getAttribute('aria-expanded');
    await second.click(); await page.waitForTimeout(500);
    const e1b = await first.getAttribute('aria-expanded'); const e2 = await second.getAttribute('aria-expanded');
    await second.click(); await page.waitForTimeout(400); const e2b = await second.getAttribute('aria-expanded');
    await first.focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(400); const ek = await first.getAttribute('aria-expanded');
    const shot = await H.shot(page, 'e05-help-' + USER);
    return { n, names, afterOpen: e1, firstAfterSecond: e1b, second: e2, secondToggledShut: e2b, keyboardOpen: ek, shot };
  });
  await R.step('visa-add-open-cancel', async () => {
    await H.go(page, '/profile'); await page.waitForTimeout(2500);
    const btn = page.getByRole('button', { name: /Add Visa/ }).first();
    await btn.scrollIntoViewIfNeeded(); await btn.click(); await page.waitForTimeout(2000);
    const shot0 = await H.shot(page, 'e03a-visa-after-click');
    const dialogs = await page.evaluate(() => Array.from(document.querySelectorAll('[role="dialog"], [role="alertdialog"], [data-slot="sheet-content"], form')).map(d => d.tagName + ':' + (d.getAttribute('role') || '') + ':' + d.innerText.slice(0, 120)));
    const form = page.locator('[role="dialog"]').last();
    let res = {};
    if (await form.count()) {
      const combos = form.getByRole('combobox'); const nc = await combos.count();
      res.labels = await form.locator('label').allTextContents();
      if (nc) { await combos.first().click(); await page.waitForTimeout(500); res.copts = (await page.getByRole('option').allTextContents()).slice(0, 12); await page.getByRole('option').filter({ hasText: /India/ }).first().click().catch(() => page.getByRole('option').first().click()); await page.waitForTimeout(600); }
      if (nc > 1) { await combos.nth(1).click(); await page.waitForTimeout(500); res.vopts = (await page.getByRole('option').allTextContents()).slice(0, 12); await page.keyboard.press('Escape'); await page.waitForTimeout(300); }
      // visa number pattern negative check if field exists
      const vn = form.getByLabel(/Visa Number/i);
      if (await vn.count()) { await vn.fill('abc'); }
      const save = form.getByRole('button', { name: /Save|Add|Submit/ }).last();
      res.sname = await save.textContent().catch(() => null);
      await save.click().catch(() => {}); await page.waitForTimeout(900);
      res.errs = await form.locator('[id$="-form-item-message"], p.text-destructive').allTextContents();
      res.shot = await H.shot(page, 'e03-visa-validation');
      await form.getByRole('button', { name: /Cancel/ }).first().click().catch(() => page.keyboard.press('Escape'));
      await page.waitForTimeout(600);
      res.closed = (await page.locator('[role="dialog"]').count()) === 0;
    }
    return { dialogs, ...res, blocked: blocked.slice(), shot0 };
  });
  R.done(); await b.close();
})();
