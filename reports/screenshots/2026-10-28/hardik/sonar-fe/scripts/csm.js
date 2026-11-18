const H = require('./h');
const USER = process.argv[2] || 'vivaan.bajaj'; const TAG = process.argv[3] || 'c';
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('csm-' + USER);
  const { ctx, page } = await H.login(b, USER); H.attach(page, R.errs);
  await R.step('mp-load', async () => {
    await H.go(page, '/my-projects');
    await page.locator('table tbody tr').first().waitFor({ timeout: 25000 }).catch(() => {});
    const kpi = await page.evaluate(() => { const el = document.querySelector('[aria-live][aria-busy]'); return el ? { tag: el.tagName, role: el.getAttribute('role'), busy: el.getAttribute('aria-busy'), text: el.innerText.replace(/\n/g, ' | ').slice(0, 300), outputDivChildren: document.querySelectorAll('output div').length } : null; });
    const outs = await page.locator('output').allTextContents();
    return { url: page.url(), kpi, outs, rows: await page.locator('table tbody tr').count(), bad: await H.emptyScan(page), shot: await H.shot(page, TAG + '01-my-projects') };
  });
  await R.step('mp-long-running-tile', async () => {
    const tile = page.locator('[aria-live][aria-busy] button, [aria-live][aria-busy] [role="button"]');
    const names = await tile.evaluateAll(b => b.map(x => (x.getAttribute('aria-label') || x.textContent.trim()).slice(0, 60) + '|' + x.getAttribute('aria-pressed')));
    if (!(await tile.count())) return { names, note: 'no clickable tile' };
    const before = await page.locator('output').allTextContents();
    await tile.first().click(); await page.waitForTimeout(2500);
    const after = await page.locator('output').allTextContents(); const u = page.url();
    const pressed = await tile.first().getAttribute('aria-pressed');
    const shot = await H.shot(page, TAG + '02-my-projects-long-running');
    await tile.first().click(); await page.waitForTimeout(2000);
    return { names, before, after, u, pressed, uAfter: page.url(), shot };
  });
  await R.step('mp-sort-search', async () => {
    const sb = page.locator('thead button[aria-label*="ort"]').first();
    await sb.click(); await page.waitForTimeout(1500); const u1 = page.url();
    const s = page.getByPlaceholder(/Search/i).first(); await s.fill('a'); await page.waitForTimeout(2500);
    const u2 = page.url(); const outs = await page.locator('output').allTextContents();
    await s.fill(''); await page.waitForTimeout(1500);
    return { u1, u2, outs };
  });
  await R.step('mp-detail', async () => {
    await H.go(page, '/my-projects');
    await page.locator('table tbody tr').first().waitFor({ timeout: 25000 });
    const link = page.locator('table tbody tr').first().locator('a, button').first();
    const t = await link.textContent();
    await link.click(); await page.waitForTimeout(3000);
    const tabs = await page.getByRole('tab').allTextContents();
    const ths = await page.$$eval('thead th', t => t.map(x => x.textContent.trim()));
    const shot = await H.shot(page, TAG + '03-project-detail');
    return { t, url: page.url(), tabs, ths, rows: await page.locator('table tbody tr').count(), bad: await H.emptyScan(page), shot };
  });
  await R.step('mp-row-actions', async () => {
    const act = page.locator('table tbody tr').first().getByRole('button', { name: /action|more/i }).first();
    const n = await act.count();
    if (!n) { const names = await page.locator('table tbody tr').first().getByRole('button').evaluateAll(b => b.map(x => x.getAttribute('aria-label') || x.textContent.trim())); return { note: 'no actions button', names }; }
    await act.click(); await page.waitForTimeout(600);
    const items = await page.getByRole('menuitem').allTextContents();
    const shot = await H.shot(page, TAG + '04-row-actions-menu');
    await page.keyboard.press('Escape');
    return { items, shot };
  });
  await R.step('mp-deallocate-dialog-cancel', async () => {
    const rows = page.locator('table tbody tr'); const nr = await rows.count();
    for (let i = 0; i < Math.min(nr, 6); i++) {
      const act = rows.nth(i).getByRole('button', { name: /action|more/i }).first();
      if (!(await act.count())) continue;
      await act.click(); await page.waitForTimeout(500);
      const it = page.getByRole('menuitem', { name: /Deallocate/i }).first();
      if (!(await it.count()) || await it.getAttribute('aria-disabled') === 'true') { await page.keyboard.press('Escape'); continue; }
      await it.click(); await page.waitForTimeout(1200);
      const dlg = page.getByRole('dialog').first(); await dlg.waitFor({ timeout: 5000 });
      const text = (await dlg.innerText()).slice(0, 900);
      const alerts = await dlg.locator('[role="alert"]').allTextContents();
      const labels = await dlg.locator('label').allTextContents();
      const shot = await H.shot(page, TAG + '05-deallocate-dialog');
      // try submit empty → validation
      const submit = dlg.getByRole('button', { name: /Submit|Deallocate|Request/i }).last();
      const sname = await submit.textContent().catch(() => null);
      let errs = null;
      if (await submit.isEnabled().catch(() => false)) { await submit.click(); await page.waitForTimeout(1000); errs = await dlg.locator('[id$="-form-item-message"], .text-destructive').allTextContents(); }
      const confirmOpen = await page.getByRole('alertdialog').count();
      const shot2 = await H.shot(page, TAG + '05b-deallocate-validation');
      // cancel
      if (confirmOpen) await page.getByRole('alertdialog').getByRole('button', { name: /Cancel|No/i }).first().click();
      await dlg.getByRole('button', { name: /Cancel/ }).first().click().catch(() => page.keyboard.press('Escape'));
      await page.waitForTimeout(800);
      return { row: i, text, alerts, labels, sname, errs, confirmOpen, closed: (await page.getByRole('dialog').count()) === 0, shot, shot2 };
    }
    return { note: 'no deallocate action found' };
  });
  await R.step('mp-employee-name-cell', async () => {
    const info = await page.$$eval('table tbody tr', trs => trs.slice(0, 5).map(tr => tr.querySelector('td') ? tr.innerText.replace(/\n/g, ' | ').slice(0, 160) : ''));
    return { info };
  });
  await R.step('tickets-load', async () => {
    await H.go(page, '/my-tickets');
    await page.waitForTimeout(2000);
    const kpi = await page.evaluate(() => { const el = document.querySelector('[aria-live][aria-busy]'); return el ? { tag: el.tagName, role: el.getAttribute('role'), text: el.innerText.replace(/\n/g, ' | ').slice(0, 300) } : null; });
    return { url: page.url(), tabs: await page.getByRole('tab').allTextContents(), kpi, outs: await page.locator('output').allTextContents(), rows: await page.locator('table tbody tr').count(), bad: await H.emptyScan(page), shot: await H.shot(page, TAG + '06-my-tickets') };
  });
  await R.step('tickets-kpi-filter', async () => {
    const tiles = page.locator('[aria-live][aria-busy] button');
    const names = await tiles.evaluateAll(b => b.map(x => x.textContent.trim().slice(0, 40)));
    if (await tiles.count() < 2) return { names };
    await tiles.nth(1).click(); await page.waitForTimeout(2500);
    const u = page.url(); const outs = await page.locator('output').allTextContents();
    const statuses = await page.$$eval('table tbody tr', trs => [...new Set(trs.map(tr => tr.innerText))].length);
    const shot = await H.shot(page, TAG + '07-tickets-kpi-filter');
    await tiles.nth(1).click(); await page.waitForTimeout(1500);
    return { names, u, outs, shot, uAfter: page.url() };
  });
  R.done(); await b.close();
})();
