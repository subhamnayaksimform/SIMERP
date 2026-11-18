// 29/10 re-run of steps that timed out on 28/10. Open + cancel only, nothing saved.
const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('gap-admin');
  const { page } = await H.login(b, 'smit.shah'); H.attach(page, R.errs);
  await R.step('rbac-buttons', async () => {
    await H.go(page, '/admin/roles-and-permissions');
    await page.locator('tr[data-module-header]').first().waitFor({ timeout: 20000 });
    const btns = await page.getByRole('button').evaluateAll(bs => bs.map(x => ((x.getAttribute('aria-label') || x.textContent || '').trim().slice(0, 40)) + '|' + (x.getAttribute('aria-haspopup') || '')).filter(s => s.length > 1));
    return { btns: [...new Set(btns)].slice(0, 60), shot: await H.shot(page, 'g01-rbac-toolbar') };
  });
  await R.step('rbac-add-role-dialog', async () => {
    const add = page.getByRole('button', { name: /add.*role|new role|create role/i }).first();
    await add.click({ timeout: 8000 });
    const dlg = page.getByRole('dialog').first(); await dlg.waitFor({ timeout: 5000 });
    const title = await dlg.locator('h2').first().textContent();
    const fields = await dlg.locator('label').allTextContents();
    const btns = await dlg.getByRole('button').allTextContents();
    const submit = dlg.getByRole('button', { name: /^(Add|Create|Save)/ }).last();
    const enabled = await submit.isEnabled().catch(() => null);
    if (enabled) await submit.click().catch(() => {});
    await page.waitForTimeout(600);
    const err = await dlg.locator('[id$="-form-item-message"], p.text-destructive, [role="alert"]').allTextContents();
    const shot = await H.shot(page, 'g02-rbac-add-role-validation');
    await dlg.getByRole('button', { name: /Cancel/ }).click().catch(() => page.keyboard.press('Escape'));
    await page.waitForTimeout(500);
    return { title, fields, btns, submitEnabled: enabled, err, closed: !(await dlg.isVisible().catch(() => false)), shot };
  });
  await R.step('rbac-duplicate-dialog', async () => {
    const menus = page.locator('thead [aria-haspopup="menu"], th button[aria-haspopup]');
    const n = await menus.count();
    if (!n) return { note: 'no role-column menu', n };
    await menus.first().click(); await page.waitForTimeout(500);
    const items = await page.getByRole('menuitem').allTextContents();
    const dup = page.getByRole('menuitem', { name: /Duplicate/i }).first();
    if (!(await dup.count())) { await page.keyboard.press('Escape'); return { n, items, note: 'no duplicate item' }; }
    await dup.click();
    const dlg = page.getByRole('dialog').first(); await dlg.waitFor({ timeout: 5000 });
    const txt = (await dlg.innerText()).slice(0, 400);
    const inputs = await dlg.locator('input').evaluateAll(i => i.map(x => x.name + '=' + x.value));
    const shot = await H.shot(page, 'g03-rbac-duplicate-dialog');
    await dlg.getByRole('button', { name: /Cancel/ }).click().catch(() => page.keyboard.press('Escape'));
    await page.waitForTimeout(500);
    return { n, items, txt, inputs, closed: !(await dlg.isVisible().catch(() => false)), shot };
  });
  await R.step('aur-delete-dialog-cancel', async () => {
    await H.go(page, '/admin/assign-user-roles');
    await page.locator('table tbody tr').first().waitFor({ timeout: 20000 });
    const row = page.locator('table tbody tr').first();
    const rowBtns = await row.getByRole('button').evaluateAll(bs => bs.map(x => (x.getAttribute('aria-label') || x.textContent || '').trim().slice(0, 40)));
    let del = row.getByRole('button', { name: /Delete|Remove/i }).first();
    if (!(await del.count())) {
      const act = row.getByRole('button', { name: /action|more|open/i }).first();
      if (await act.count()) { await act.click(); await page.waitForTimeout(400); del = page.getByRole('menuitem', { name: /Delete|Remove/i }).first(); }
    }
    if (!(await del.count())) return { rowBtns, note: 'no delete control in first row' };
    await del.click();
    const dlg = page.getByRole('alertdialog').or(page.getByRole('dialog')).first(); await dlg.waitFor({ timeout: 5000 });
    const text = (await dlg.innerText()).slice(0, 300);
    const shot = await H.shot(page, 'g04-aur-delete-dialog');
    await dlg.getByRole('button', { name: /Cancel/ }).click().catch(() => page.keyboard.press('Escape'));
    await page.waitForTimeout(500);
    return { rowBtns, text, closed: !(await dlg.isVisible().catch(() => false)), shot };
  });
  R.done();
  const P = H.runner('gap-pmo');
  const { page: p2 } = await H.login(b, 'vihaan.chatterjee'); H.attach(p2, P.errs);
  await P.step('emp-projects-overflow-popover', async () => {
    await H.go(p2, '/employee');
    await p2.locator('table tbody tr').first().waitFor({ timeout: 20000 });
    const cand = p2.locator('table tbody td button').filter({ hasText: /^\s*\+\s*\d+|more/i });
    const n = await cand.count();
    if (!n) {
      const sample = await p2.locator('table tbody tr').nth(0).locator('button').evaluateAll(bs => bs.map(x => (x.getAttribute('aria-label') || x.textContent || '').trim().slice(0, 30)));
      return { n, sample, note: 'no +N overflow button on page 1' };
    }
    const label = await cand.first().textContent();
    await cand.first().click(); await p2.waitForTimeout(1200);
    const pop = p2.locator('[data-radix-popper-content-wrapper], [role="dialog"]').last();
    const txt = (await pop.innerText()).slice(0, 400);
    const shot = await H.shot(p2, 'g05-projects-overflow-popover');
    await p2.keyboard.press('Escape');
    return { n, label, txt, shot };
  });
  await P.step('skills-dash-context', async () => {
    await H.go(p2, '/employee/skills');
    await p2.waitForTimeout(1500);
    const hits = await p2.evaluate(() => Array.from(document.querySelectorAll('*')).filter(e => !e.children.length && /^\s*-\s*$/.test(e.textContent) && e.offsetParent).slice(0, 5).map(e => ({ tag: e.tagName, parent: (e.parentElement?.innerText || '').slice(0, 120), gp: (e.parentElement?.parentElement?.innerText || '').slice(0, 200) })));
    return { hits, shot: await H.shot(p2, 'g06-skills-dash') };
  });
  P.done();
  await b.close();
})();
