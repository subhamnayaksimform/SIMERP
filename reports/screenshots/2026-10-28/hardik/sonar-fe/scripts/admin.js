const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('admin');
  const { ctx, page } = await H.login(b, 'smit.shah'); H.attach(page, R.errs);
  await R.step('rbac-load', async () => {
    await H.go(page, '/admin/roles-and-permissions');
    await page.locator('tr[data-module-header]').first().waitFor({ timeout: 20000 });
    const rows = await page.evaluate(() => Array.from(document.querySelectorAll('tr[data-module-header]')).slice(0, 40).map(tr => {
      const td = tr.querySelector('td'); const td2 = tr.querySelectorAll('td')[1];
      return { id: tr.dataset.moduleHeader, label: td.textContent.trim(), rowCls: tr.className.match(/bg-[a-z/0-9-]+/g), cellCls: td.className.match(/bg-[a-z/0-9-]+|font-[a-z]+|pl-8/g), cell2: td2 && td2.className.match(/bg-[a-z/0-9-]+/g), rowBg: getComputedStyle(tr).backgroundColor, cellBg: getComputedStyle(td).backgroundColor, cell2Bg: td2 && getComputedStyle(td2).backgroundColor };
    }));
    const shot = await H.shot(page, 'a01-rbac-matrix');
    return { count: rows.length, rows: rows.slice(0, 12), shot };
  });
  await R.step('rbac-active-module', async () => {
    // click a child module in the left accordion
    const acc = page.locator('nav button, aside button').filter({ hasText: /Goals|Skills/ }).first();
    const txt = await acc.textContent().catch(() => null);
    if (txt) await acc.click();
    await page.waitForTimeout(1500);
    const active = await page.evaluate(() => Array.from(document.querySelectorAll('tr[data-module-header]')).filter(tr => /bg-muted(\s|$)/.test(tr.className)).map(tr => { const tds = tr.querySelectorAll('td'); return { id: tr.dataset.moduleHeader, cell: tds[0].className.match(/bg-[a-z/0-9-]+|font-[a-z]+|pl-8|text-[a-z-]+foreground/g), cell2: tds[1].className.match(/bg-[a-z/0-9-]+/g), bg: [getComputedStyle(tr).backgroundColor, getComputedStyle(tds[0]).backgroundColor, getComputedStyle(tds[1]).backgroundColor] }; }));
    const shot = await H.shot(page, 'a02-rbac-active-module');
    return { clicked: txt, active, shot };
  });
  await R.step('rbac-search', async () => {
    const s = page.getByPlaceholder('Search').first();
    await s.fill('goal'); await page.waitForTimeout(1200);
    const labels = await page.$$eval('tr[data-module-header] td:first-child', tds => tds.map(t => t.textContent.trim()));
    const shot = await H.shot(page, 'a03-rbac-search-goal');
    await s.fill('zzzqqq'); await page.waitForTimeout(800);
    const none = await page.getByText('No modules match your search.').isVisible();
    await s.fill(''); await page.waitForTimeout(800);
    const after = await page.locator('tr[data-module-header]').count();
    return { labels, none, after, shot };
  });
  await R.step('rbac-collapse-expand', async () => {
    const hdr = page.locator('tr[data-module-header]').first();
    const before = await page.locator('tbody tr').count();
    await hdr.click(); await page.waitForTimeout(500);
    const mid = await page.locator('tbody tr').count();
    await hdr.click(); await page.waitForTimeout(500);
    const after = await page.locator('tbody tr').count();
    return { before, mid, after };
  });
  await R.step('rbac-header-roles', async () => {
    const ths = await page.$$eval('thead th', t => t.map(x => x.textContent.trim()).slice(0, 20));
    return { ths };
  });
  await R.step('rbac-toggle-dirty-discard', async () => {
    // find an enabled checkbox (custom role) in matrix
    const cb = page.locator('tbody button[role="checkbox"]:not([disabled])').first();
    const n = await page.locator('tbody button[role="checkbox"]:not([disabled])').count();
    if (!n) return { note: 'no editable checkbox (all system roles)' };
    const st0 = await cb.getAttribute('aria-checked');
    await cb.scrollIntoViewIfNeeded(); await cb.click(); await page.waitForTimeout(500);
    const st1 = await cb.getAttribute('aria-checked');
    const save = page.getByRole('button', { name: 'Save Changes' });
    const saveEnabled = await save.isEnabled().catch(() => null);
    const shot = await H.shot(page, 'a04-rbac-dirty');
    await cb.click(); await page.waitForTimeout(500);
    const st2 = await cb.getAttribute('aria-checked');
    const saveEnabled2 = await save.isEnabled().catch(() => null);
    return { n, st0, st1, st2, saveEnabled, saveEnabled2, shot };
  });
  await R.step('rbac-scope-cell', async () => {
    const trig = page.locator('tbody button[aria-haspopup="menu"]:not([disabled])').first();
    const n = await page.locator('tbody button[aria-haspopup="menu"]').count();
    const texts = await page.$$eval('tbody button[aria-haspopup="menu"]', bs => [...new Set(bs.map(b => b.textContent.trim()))].slice(0, 10));
    if (await trig.count()) { await trig.scrollIntoViewIfNeeded(); await trig.click(); await page.waitForTimeout(500); }
    const items = await page.$$eval('[role="menuitem"]', m => m.map(x => x.textContent.trim()));
    const shot = await H.shot(page, 'a05-rbac-scope-menu');
    await page.keyboard.press('Escape');
    return { n, texts, items, shot };
  });
  await R.step('rbac-add-role-dialog', async () => {
    await page.getByRole('button', { name: /Add New Role/ }).first().click();
    const dlg = page.getByRole('dialog'); await dlg.waitFor({ timeout: 5000 });
    const title = await dlg.locator('h2').first().textContent();
    // submit empty to see validation
    const btns = await dlg.getByRole('button').allTextContents();
    const submit = dlg.getByRole('button', { name: /Add|Create|Save/ }).last();
    await submit.click().catch(() => {}); await page.waitForTimeout(500);
    const err = await dlg.locator('[id$="-form-item-message"], p.text-destructive, [role="alert"]').allTextContents();
    const lbl = await dlg.getByLabel(/Role Name/).count();
    const shot = await H.shot(page, 'a06-rbac-add-role-validation');
    await dlg.getByRole('button', { name: /Cancel/ }).click().catch(() => page.keyboard.press('Escape'));
    await page.waitForTimeout(400);
    return { title, btns, err, labelled: lbl, closed: !(await dlg.isVisible().catch(() => false)), shot };
  });
  await R.step('rbac-duplicate-dialog', async () => {
    const dup = page.locator('thead').getByRole('button', { name: /Duplicate/ }).first();
    const n = await page.locator('thead').getByRole('button', { name: /Duplicate/ }).count();
    let trig = dup;
    if (!n) { // maybe in a menu
      const more = page.locator('thead button[aria-haspopup="menu"]').first();
      await more.click(); await page.waitForTimeout(300);
      trig = page.getByRole('menuitem', { name: /Duplicate/ }).first();
    }
    await trig.click();
    const dlg = page.getByRole('dialog'); await dlg.waitFor({ timeout: 5000 });
    const text = (await dlg.textContent()).slice(0, 200);
    const shot = await H.shot(page, 'a07-rbac-duplicate-dialog');
    await dlg.getByRole('button', { name: /Cancel/ }).click().catch(() => page.keyboard.press('Escape'));
    await page.waitForTimeout(400);
    return { n, text, closed: !(await dlg.isVisible().catch(() => false)), shot };
  });
  await R.step('rbac-empty-scan', async () => ({ bad: await H.emptyScan(page) }));
  // Assign user roles
  await R.step('aur-load', async () => {
    await H.go(page, '/admin/assign-user-roles');
    await page.locator('table tbody tr').first().waitFor({ timeout: 20000 });
    const rows = await page.locator('table tbody tr').count();
    const rolePh = await page.evaluate(() => { const el = Array.from(document.querySelectorAll('button, [role="combobox"]')).find(b => /Select employee\(s\) first|Select role/.test(b.textContent)); return el ? { text: el.textContent.trim(), disabled: el.disabled || el.getAttribute('aria-disabled') } : null; });
    const pager = await page.locator('output').allTextContents();
    const shot = await H.shot(page, 'a08-assign-user-roles');
    return { rows, rolePh, pager, bad: await H.emptyScan(page), shot };
  });
  await R.step('aur-edit-dialog-cancel', async () => {
    const row = page.locator('table tbody tr').first();
    const btns = row.getByRole('button');
    const names = await btns.evaluateAll(bs => bs.map(b => b.getAttribute('aria-label') || b.textContent.trim()));
    const edit = row.getByRole('button', { name: /Edit/i }).first();
    await edit.click(); const dlg = page.getByRole('dialog'); await dlg.waitFor({ timeout: 5000 });
    const title = await dlg.locator('h2').first().textContent();
    const shot = await H.shot(page, 'a09-aur-edit-dialog');
    await dlg.getByRole('button', { name: /Cancel/ }).click().catch(() => page.keyboard.press('Escape'));
    await page.waitForTimeout(400);
    return { names, title, closed: !(await dlg.isVisible().catch(() => false)), shot };
  });
  await R.step('aur-delete-dialog-cancel', async () => {
    const row = page.locator('table tbody tr').first();
    const del = row.getByRole('button', { name: /Delete|Remove/i }).first();
    await del.click(); const dlg = page.getByRole('alertdialog').or(page.getByRole('dialog')); await dlg.first().waitFor({ timeout: 5000 });
    const text = (await dlg.first().textContent()).slice(0, 300);
    const shot = await H.shot(page, 'a10-aur-delete-dialog');
    await dlg.first().getByRole('button', { name: /Cancel/ }).click().catch(() => page.keyboard.press('Escape'));
    await page.waitForTimeout(400);
    return { text, closed: !(await dlg.first().isVisible().catch(() => false)), shot };
  });
  for (const [id, path, sh] of [['jobq', '/admin/job-queue-scheduler', 'a11-job-queue'], ['contractors', '/admin/contractors', 'a13-contractors'], ['teams-notif', '/admin/teams-notifications', 'a14-teams-notifications'], ['dept-settings', '/department-settings', 'a15-department-settings'], ['competencies', '/competencies', 'a16-competencies'], ['alloc-correction', '/allocation-correction', 'a17-allocation-correction']]) {
    await R.step(id, async () => {
      await H.go(page, path);
      const h = await page.locator('h1, h2, [aria-current="page"]').allTextContents();
      const tabs = await page.getByRole('tab').allTextContents();
      const shot = await H.shot(page, sh);
      return { url: page.url(), h: h.slice(0, 5), tabs, rows: await page.locator('table tbody tr').count(), outputs: await page.locator('output').allTextContents(), bad: await H.emptyScan(page), shot };
    });
  }
  await R.step('jobq-cron-tab', async () => {
    await H.go(page, '/admin/job-queue-scheduler');
    const tabs = page.getByRole('tab'); const n = await tabs.count();
    let out = {};
    for (let i = 0; i < n; i++) {
      await tabs.nth(i).click(); await page.waitForTimeout(1500);
      const cellBtns = await page.locator('table tbody button').evaluateAll(bs => bs.slice(0, 8).map(b => ({ t: b.textContent.trim().slice(0, 40), type: b.type, label: b.getAttribute('aria-label') })));
      const sample = await page.$$eval('table tbody tr', trs => trs.slice(0, 3).map(tr => Array.from(tr.querySelectorAll('td')).map(td => td.textContent.trim().slice(0, 25))));
      await H.shot(page, 'a12-job-queue-tab' + i);
      // keyboard: focus first cell button and check tooltip
      const fb = page.locator('table tbody button').first();
      let tip = null;
      if (await fb.count()) { await fb.focus(); await page.waitForTimeout(900); tip = await page.locator('[role="tooltip"]').allTextContents(); }
      out['tab' + i] = { name: await tabs.nth(i).textContent(), cellBtns, sample, tip, bad: await H.emptyScan(page) };
    }
    await H.shot(page, 'a12-job-queue-tooltip');
    return out;
  });
  await R.step('weekly-update-settings', async () => {
    await H.go(page, '/department-settings');
    const t = page.getByRole('tab', { name: /Weekly/i });
    if (await t.count()) { await t.first().click(); await page.waitForTimeout(1500); }
    const shot = await H.shot(page, 'a18-dept-weekly-update-settings');
    const switches = await page.getByRole('switch').count();
    const liveDivs = await page.$$eval('[aria-live]', e => e.map(x => x.tagName + ':' + x.textContent.trim().slice(0, 40)));
    return { tabFound: await t.count(), switches, liveDivs, outputs: await page.locator('output').count(), shot };
  });
  R.done(); await b.close();
})();
