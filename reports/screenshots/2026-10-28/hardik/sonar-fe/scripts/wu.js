const H = require('./h');
(async () => {
  const b = await H.chromium.launch(); const R = H.runner('wu-smit');
  const { page } = await H.login(b, 'smit.shah'); H.attach(page, R.errs);
  // block any write requests as a safety net
  await page.route('**/api/v1/**', (route) => { const m = route.request().method(); if (m !== 'GET') { R.errs.push({ type: 'blocked-write', url: page.url(), text: m + ' ' + route.request().url() }); return route.abort(); } return route.continue(); });
  await R.step('wu-list-admin', async () => {
    await H.go(page, '/weekly-updates'); await page.waitForTimeout(2500);
    await page.getByRole('combobox').filter({ hasText: 'ADMIN' }).first().click(); await page.waitForTimeout(600);
    await page.keyboard.type('POST-SALES'); await page.waitForTimeout(800);
    await page.getByRole('option', { name: /POST-SALES BA/ }).first().click(); await page.waitForTimeout(3000);
    const rows = await page.$$eval('table tbody tr', t => t.slice(0, 5).map(r => r.innerText.replace(/\n/g, ' | ').slice(0, 200)));
    return { rows, n: await page.locator('table tbody tr').count(), outs: await page.locator('output').allTextContents(), bad: await H.emptyScan(page), shot: await H.shot(page, 'w01-weekly-updates-admin') };
  });
  await R.step('wu-open-submitted', async () => {
    const row = page.locator('table tbody tr').filter({ hasText: /Submitted/i }).first();
    const btns = await row.getByRole('button').evaluateAll(b => b.map(x => x.getAttribute('aria-label') || x.textContent.trim()));
    const view = row.getByRole('button', { name: /view/i }).first();
    if (await view.count()) await view.click(); else await row.locator('td').nth(1).click();
    await page.waitForTimeout(3000);
    const txt = (await page.locator('main').last().innerText()).slice(0, 1500);
    const ths = await page.$$eval('thead th', t => t.map(x => x.textContent.trim()));
    const shot = await H.shot(page, 'w02-weekly-update-view', true);
    return { btns, url: page.url(), ths, txt, bad: await H.emptyScan(page), shot };
  });
  await R.step('wu-view-sections', async () => {
    const mains = await page.locator('main').count();
    const tabs = await page.getByRole('tab').allTextContents();
    const tables = await page.$$eval('table', ts => ts.map(t => Array.from(t.querySelectorAll('thead th')).map(x => x.textContent.trim()).join(' / ')));
    const res = { mains, tabs, tables };
    for (const name of ['Projects', 'Goals']) {
      const t = page.getByRole('tab', { name: new RegExp(name) });
      if (await t.count()) { await t.first().click(); await page.waitForTimeout(1000); res[name] = { tables: await page.$$eval('table', ts => ts.map(t => Array.from(t.querySelectorAll('thead th')).map(x => x.textContent.trim()).join(' / '))), bad: await H.emptyScan(page) }; await H.shot(page, 'w06-weekly-view-' + name, true); }
    }
    return res;
  });
  R.done(); await b.close();
})();
