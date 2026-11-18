const H = require('./h');
const USER = process.argv[2] || 'vidhi.shah';
(async () => {
  const b = await H.chromium.launch(); const R = H.runner('wuedit-' + USER);
  const { page } = await H.login(b, USER); H.attach(page, R.errs);
  const blocked = [];
  await page.route('**/api/v1/**', (route) => { const m = route.request().method(); if (m !== 'GET') { blocked.push(m + ' ' + route.request().url()); return route.abort(); } return route.continue(); });
  await R.step('wu-tm-list', async () => {
    await H.go(page, '/weekly-updates'); await page.waitForTimeout(2500);
    const rows = await page.$$eval('table tbody tr', t => t.slice(0, 5).map(r => r.innerText.replace(/\n/g, ' | ').slice(0, 200)));
    const rowBtns = await page.locator('table tbody tr').first().getByRole('button').evaluateAll(b => b.map(x => x.getAttribute('aria-label') || x.textContent.trim()));
    return { rows, rowBtns, shot: await H.shot(page, 'w10-tm-weekly-list') };
  });
  await R.step('wu-tm-edit-open', async () => {
    await H.go(page, '/weekly-updates/' + (process.argv[3] || 'e1260ed9-1f89-4160-bd3a-40aaa87e8329') + '/edit'); await page.waitForTimeout(4000);
    const h = await page.locator('h1, h2').allTextContents();
    const tables = await page.$$eval('table', ts => ts.map(t => Array.from(t.querySelectorAll('thead th')).map(x => x.textContent.trim()).join(' / ')));
    const tabs = await page.getByRole('tab').allTextContents();
    const inputs = await page.$$eval('main input, main textarea', i => ({ total: i.length, disabled: i.filter(x => x.disabled || x.readOnly).length }));
    return { url: page.url(), h: h.slice(0, 6), tables, tabs: tabs.slice(0, 20), inputs, blocked: blocked.slice(), shot: await H.shot(page, 'w11-tm-weekly-edit', true) };
  });
  await R.step('wu-tm-current-projects', async () => {
    // open first employee's projects tab
    const tab = page.getByRole('tab', { name: /Current Projects|Projects/ }).first();
    if (await tab.count()) { await tab.click(); await page.waitForTimeout(1000); }
    const tables = await page.$$eval('table', ts => ts.map(t => ({ head: Array.from(t.querySelectorAll('thead th')).map(x => x.textContent.trim()).join(' / '), rows: t.querySelectorAll('tbody tr').length, first: (t.querySelector('tbody tr') || {}).innerText })));
    const chipBtns = await page.locator('table tbody button').evaluateAll(b => b.slice(0, 6).map(x => x.textContent.trim().slice(0, 30)));
    const actionCols = await page.$$eval('thead th', t => t.filter(x => /^(Status|Action)$/.test(x.textContent.trim())).length);
    return { tables: tables.slice(0, 6), chipBtns, actionCols, shot: await H.shot(page, 'w12-tm-weekly-current-projects', true) };
  });
  await R.step('wu-tm-past-projects', async () => {
    const tab = page.getByRole('tab', { name: /Past Projects/ }).first();
    if (!(await tab.count())) return { note: 'no past projects tab' };
    await tab.click(); await page.waitForTimeout(1000);
    const tables = await page.$$eval('table', ts => ts.map(t => Array.from(t.querySelectorAll('thead th')).map(x => x.textContent.trim()).join(' / ')));
    const btns = await page.locator('table tbody button').evaluateAll(b => b.slice(0, 6).map(x => (x.getAttribute('aria-label') || x.textContent.trim()).slice(0, 30) + '|' + x.disabled));
    return { tables, btns, shot: await H.shot(page, 'w13-tm-weekly-past-projects', true) };
  });
  await R.step('wu-tm-goals-section', async () => {
    const txt = await page.evaluate(() => { const el = Array.from(document.querySelectorAll('*')).find(e => /No goals yet/i.test(e.textContent) && !e.children.length); return el ? el.parentElement.innerText : null; });
    const goalTables = await page.$$eval('table', ts => ts.filter(t => /Goal/.test(t.querySelector('thead')?.innerText || '')).length);
    const examCells = await page.$$eval('td', t => t.filter(x => /attempt/i.test(x.innerText)).slice(0, 3).map(x => x.innerText.slice(0, 60)));
    return { emptyState: txt, goalTables, examCells, blocked: blocked.slice() };
  });
  R.done(); await b.close();
})();
