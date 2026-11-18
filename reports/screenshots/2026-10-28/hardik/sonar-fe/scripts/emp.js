const H = require('./h');
const USER = process.argv[2] || 'vishal.desai';
(async () => {
  const b = await H.chromium.launch(); const R = H.runner('emp-' + USER);
  const { page } = await H.login(b, USER); H.attach(page, R.errs);
  const blocked = [];
  await page.route('**/api/v1/**', (route) => { const m = route.request().method(); const u = route.request().url(); if (m !== 'GET' && !/auth\/(refresh|logout)|notifications|releases|seen/.test(u)) { blocked.push(m + ' ' + u); return route.abort(); } return route.continue(); });
  await R.step('profile', async () => {
    await H.go(page, '/profile'); await page.waitForTimeout(2500);
    const sb = await page.$$eval('[data-sidebar="menu-button"]', b => b.map(x => x.textContent.trim()));
    const ths = await page.$$eval('thead th', t => t.map(x => x.textContent.trim()));
    const cards = await page.$$eval('main h2, main h3', h => h.map(x => x.textContent.trim()).slice(0, 20));
    return { url: page.url(), sb, ths, cards, bad: await H.emptyScan(page), shot: await H.shot(page, 'e01-profile', true) };
  });
  await R.step('profile-allocation-badges', async () => {
    const badges = await page.locator('table tbody button').evaluateAll(b => b.slice(0, 6).map(x => x.textContent.trim().slice(0, 30)));
    const b0 = page.locator('table tbody button').first();
    if (!(await b0.count())) return { badges };
    await b0.focus(); await page.waitForTimeout(1200);
    const card = (await page.locator('[data-radix-popper-content-wrapper]').allTextContents()).map(x => x.slice(0, 200));
    return { badges, card, shot: await H.shot(page, 'e02-profile-badge-focus') };
  });
  await R.step('ratings-card', async () => {
    const t = await page.evaluate(() => { const h = Array.from(document.querySelectorAll('h2,h3,p,span')).find(e => /Rating/.test(e.textContent) && !e.children.length); const card = h && h.closest('section, [data-slot="card"], div.rounded-lg, div.rounded-xl'); return card ? card.innerText.slice(0, 500) : null; });
    return { t };
  });
  await R.step('visa-dialog-open-cancel', async () => {
    const add = page.getByRole('button', { name: /Add Visa/ }).first();
    if (!(await add.count())) return { note: 'no add visa' };
    await add.click(); await page.waitForTimeout(1000);
    const dlg = page.getByRole('dialog').first(); await dlg.waitFor({ timeout: 5000 });
    const labels = await dlg.locator('label').allTextContents();
    // choose a country to populate visa types
    const country = dlg.getByRole('combobox').first(); await country.click(); await page.waitForTimeout(500);
    const copts = (await page.getByRole('option').allTextContents()).slice(0, 12);
    await page.getByRole('option').first().click(); await page.waitForTimeout(600);
    const vt = dlg.getByRole('combobox').nth(1); await vt.click(); await page.waitForTimeout(500);
    const vopts = (await page.getByRole('option').allTextContents()).slice(0, 12);
    await page.keyboard.press('Escape'); await page.waitForTimeout(300);
    // submit empty → validation
    const save = dlg.getByRole('button', { name: /Save|Add|Submit/ }).last();
    await save.click().catch(() => {}); await page.waitForTimeout(800);
    const errs = await dlg.locator('[id$="-form-item-message"]').allTextContents();
    const shot = await H.shot(page, 'e03-visa-dialog-validation');
    await dlg.getByRole('button', { name: /Cancel/ }).first().click().catch(() => page.keyboard.press('Escape'));
    await page.waitForTimeout(600);
    return { labels, copts, vopts, errs, closed: (await page.getByRole('dialog').count()) === 0, blocked: blocked.slice(), shot };
  });
  await R.step('my-goals', async () => {
    await H.go(page, '/employee/goals'); await page.waitForTimeout(2000);
    return { url: page.url(), h: await page.locator('h1').allTextContents(), bad: await H.emptyScan(page), shot: await H.shot(page, 'e04-my-goals') };
  });
  await R.step('help-toggle', async () => {
    await H.go(page, '/help'); await page.waitForTimeout(1500);
    const rows = page.locator('main button[aria-expanded]');
    const n = await rows.count();
    const first = rows.first(); const t = (await first.textContent()).trim().slice(0, 60);
    await first.click(); await page.waitForTimeout(500); const e1 = await first.getAttribute('aria-expanded');
    const second = rows.nth(1); await second.click(); await page.waitForTimeout(500);
    const e1b = await first.getAttribute('aria-expanded'); const e2 = await second.getAttribute('aria-expanded');
    await second.click(); await page.waitForTimeout(400); const e2b = await second.getAttribute('aria-expanded');
    // keyboard
    await first.focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(400); const ek = await first.getAttribute('aria-expanded');
    const shot = await H.shot(page, 'e05-help-topic');
    await first.focus(); await page.keyboard.press('Enter');
    const s = page.getByPlaceholder(/Search/i).first(); let res = null;
    if (await s.count()) { await s.fill('zzzz-no-match'); await page.waitForTimeout(800); res = (await page.locator('main').last().innerText()).slice(0, 200); await s.fill(''); }
    return { n, t, afterOpen: e1, firstAfterSecond: e1b, second: e2, secondToggledShut: e2b, keyboardOpen: ek, noMatch: res, shot };
  });
  await R.step('whats-new', async () => {
    await H.go(page, '/whats-new'); await page.waitForTimeout(2000);
    const h = await page.locator('h1, h2').allTextContents();
    const badges = await page.$$eval('[data-sidebar="menu-badge"], nav [class*="badge"]', b => b.map(x => x.textContent.trim()));
    return { url: page.url(), h: h.slice(0, 8), badges, bad: await H.emptyScan(page), shot: await H.shot(page, 'e06-whats-new') };
  });
  await R.step('unauthorized-page', async () => {
    await H.go(page, '/admin/roles-and-permissions'); await page.waitForTimeout(1500);
    const u1 = page.url(); const btn = page.locator('main').last().getByRole('button').first(); const bt = await btn.textContent();
    const shot = await H.shot(page, 'e07-unauthorized');
    await btn.click(); await page.waitForTimeout(2000);
    return { u1, button: bt, after: page.url(), shot };
  });
  await R.step('not-found-page', async () => {
    await H.go(page, '/this-page-does-not-exist'); await page.waitForTimeout(1200);
    const u1 = page.url(); const btn = page.locator('main').last().getByRole('button').first(); const bt = await btn.textContent();
    const shot = await H.shot(page, 'e08-not-found');
    await btn.click(); await page.waitForTimeout(2000);
    return { u1, button: bt, after: page.url(), shot };
  });
  await R.step('employee-list-forbidden', async () => {
    await H.go(page, '/employee'); await page.waitForTimeout(1200);
    return { url: page.url() };
  });
  R.done(); await b.close();
})();
