const H = require('./h');
const USER = process.argv[2] || 'vishal.desai';
(async () => {
  const b = await H.chromium.launch(); const R = H.runner('emp2-' + USER);
  const { page } = await H.login(b, USER); H.attach(page, R.errs);
  const blocked = [];
  await page.route('**/api/v1/**', (route) => { const m = route.request().method(); const u = route.request().url(); if (m !== 'GET' && !/auth\/(refresh|logout)/.test(u)) { blocked.push(m + ' ' + u); return route.abort(); } return route.continue(); });
  await R.step('releases-api', async () => { const r = await H.api(page, 'GET', '/releases'); const d = r.body.data; return { status: r.status, n: Array.isArray(d) ? d.length : JSON.stringify(r.body).slice(0, 200) }; });
  await R.step('whats-new-wait', async () => {
    await H.go(page, '/whats-new'); await page.waitForTimeout(5000);
    const t = (await page.locator('main').last().innerText()).slice(0, 300);
    return { t, shot: await H.shot(page, 'e06b-whats-new-' + USER) };
  });
  await R.step('help-toggle', async () => {
    await H.go(page, '/help'); await page.waitForTimeout(2000);
    const rows = page.locator('main').last().locator('button[aria-expanded]:not([aria-haspopup])');
    const n = await rows.count();
    if (n < 2) return { n, txt: (await page.locator('main').last().innerText()).slice(0, 400), shot: await H.shot(page, 'e05-help-' + USER) };
    const first = rows.first(); const second = rows.nth(1);
    const t = (await first.textContent()).trim().slice(0, 60);
    const e0 = await first.getAttribute('aria-expanded');
    await first.click(); await page.waitForTimeout(500); const e1 = await first.getAttribute('aria-expanded');
    await second.click(); await page.waitForTimeout(500);
    const e1b = await first.getAttribute('aria-expanded'); const e2 = await second.getAttribute('aria-expanded');
    await second.click(); await page.waitForTimeout(400); const e2b = await second.getAttribute('aria-expanded');
    await first.focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(400); const ek = await first.getAttribute('aria-expanded');
    const shot = await H.shot(page, 'e05-help-' + USER);
    return { n, t, e0, afterOpen: e1, firstAfterSecond: e1b, second: e2, secondToggledShut: e2b, keyboardOpen: ek, shot };
  });
  await R.step('not-found-page', async () => {
    await H.go(page, '/this-page-does-not-exist'); await page.waitForTimeout(1500);
    const btns = await page.getByRole('button').evaluateAll(b => b.map(x => x.textContent.trim()).filter(Boolean));
    const btn = page.getByRole('button', { name: /Go|Back|Home|Profile/ }).last(); const bt = await btn.textContent();
    const shot = await H.shot(page, 'e08-not-found');
    await btn.click(); await page.waitForTimeout(2000);
    return { btns, button: bt, after: page.url(), shot };
  });
  await R.step('visa-section', async () => {
    await H.go(page, '/profile'); await page.waitForTimeout(2500);
    const sec = await page.evaluate(() => { const h = Array.from(document.querySelectorAll('h2,h3')).find(e => /Visa Information/.test(e.textContent)); const c = h && h.closest('section, [data-slot="card"]') || h?.parentElement?.parentElement; return c ? { txt: c.innerText.slice(0, 400), btns: Array.from(c.querySelectorAll('button')).map(x => x.getAttribute('aria-label') || x.textContent.trim()) } : null; });
    return sec;
  });
  await R.step('visa-add-open-cancel', async () => {
    const add = page.getByRole('button', { name: /Add Visa|Add/ }).filter({ hasText: /Visa|Add/ });
    const names = await add.evaluateAll(b => b.map(x => x.getAttribute('aria-label') || x.textContent.trim()));
    const btn = page.getByRole('button', { name: /Add Visa/ }).first();
    if (!(await btn.count())) return { names };
    await btn.click(); await page.waitForTimeout(1500);
    const dlg = page.locator('[role="dialog"], aside[aria-hidden="false"]').last();
    const txt = (await dlg.innerText()).slice(0, 500);
    const combos = dlg.getByRole('combobox'); const nc = await combos.count();
    let copts = null, vopts = null;
    if (nc) { await combos.first().click(); await page.waitForTimeout(500); copts = (await page.getByRole('option').allTextContents()).slice(0, 10); await page.getByRole('option').first().click(); await page.waitForTimeout(600); }
    if (nc > 1) { await combos.nth(1).click(); await page.waitForTimeout(500); vopts = (await page.getByRole('option').allTextContents()).slice(0, 10); await page.keyboard.press('Escape'); }
    const save = dlg.getByRole('button', { name: /Save|Add Visa|Submit/ }).last();
    const sname = await save.textContent().catch(() => null);
    if (await save.isEnabled().catch(() => false)) { await save.click(); await page.waitForTimeout(800); }
    const errs = await dlg.locator('[id$="-form-item-message"]').allTextContents();
    const shot = await H.shot(page, 'e03-visa-validation');
    await dlg.getByRole('button', { name: /Cancel/ }).first().click().catch(() => page.keyboard.press('Escape'));
    await page.waitForTimeout(600);
    return { names, txt, copts, vopts, sname, errs, blocked: blocked.slice(), shot };
  });
  R.done(); await b.close();
})();
