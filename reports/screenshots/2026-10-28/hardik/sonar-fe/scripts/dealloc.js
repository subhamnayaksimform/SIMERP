const H = require('./h');
const USER = process.argv[2] || 'vivaan.bajaj'; const TAG = process.argv[3] || 'c';
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('dealloc-' + USER);
  const { ctx, page } = await H.login(b, USER); H.attach(page, R.errs);
  await H.go(page, '/my-projects/5adbf39c-b5dc-4a3c-a7fd-8118fcb622de');
  await page.locator('table tbody tr').first().waitFor({ timeout: 25000 });
  await R.step('deallocate-open', async () => {
    const act = page.locator('table tbody tr').nth(1).getByRole('button').first();
    const al = await act.getAttribute('aria-label');
    await act.click(); await page.waitForTimeout(600);
    const items = await page.getByRole('menuitem').evaluateAll(m => m.map(x => x.textContent.trim() + '|' + x.getAttribute('aria-disabled') + '|' + x.getAttribute('data-disabled')));
    await page.getByRole('menuitem', { name: /Deallocate/ }).click(); await page.waitForTimeout(1500);
    const dlg = page.getByRole('dialog').first(); await dlg.waitFor({ timeout: 5000 });
    const text = (await dlg.innerText()).slice(0, 1200);
    const alerts = await dlg.locator('[role="alert"]').evaluateAll(a => a.map(x => x.innerText.slice(0, 200)));
    const inputs = await dlg.locator('input, textarea, button[role="combobox"]').evaluateAll(i => i.map(x => ({ tag: x.tagName, id: x.id, type: x.type, labelled: !!(x.labels && x.labels.length) || !!x.getAttribute('aria-label') || !!x.getAttribute('aria-labelledby') })));
    const focus = await page.evaluate(() => document.activeElement && (document.activeElement.tagName + ':' + (document.activeElement.getAttribute('aria-label') || document.activeElement.textContent.trim().slice(0, 30))));
    const shot = await H.shot(page, TAG + '05-deallocate-dialog');
    return { al, items, text, alerts, inputs, focus, shot };
  });
  await R.step('deallocate-validation', async () => {
    const dlg = page.getByRole('dialog').first();
    const btns = await dlg.getByRole('button').allTextContents();
    const submit = dlg.getByRole('button', { name: /Submit|Deallocate|Request|Next|Continue/i }).last();
    const sname = (await submit.textContent()).trim();
    const enabled = await submit.isEnabled();
    let errs = null, confirm = 0;
    if (enabled) { await submit.click(); await page.waitForTimeout(1200); errs = await dlg.locator('[id$="-form-item-message"], p.text-destructive, [aria-invalid="true"]').evaluateAll(e => e.map(x => x.textContent.trim().slice(0, 80) || x.id)); confirm = await page.getByRole('alertdialog').count(); }
    const shot = await H.shot(page, TAG + '05b-deallocate-validation');
    return { btns, sname, enabled, errs, confirm, shot };
  });
  await R.step('deallocate-cancel', async () => {
    if (await page.getByRole('alertdialog').count()) await page.getByRole('alertdialog').getByRole('button', { name: /Cancel|No/ }).first().click();
    const dlg = page.getByRole('dialog').first();
    await dlg.getByRole('button', { name: /^Cancel$/ }).first().click().catch(async () => { await page.keyboard.press('Escape'); });
    await page.waitForTimeout(800);
    const open = await page.getByRole('dialog').count();
    const focus = await page.evaluate(() => document.activeElement && (document.activeElement.tagName + ':' + (document.activeElement.getAttribute('aria-label') || '')));
    return { open, focus };
  });
  await R.step('update-allocation-open-cancel', async () => {
    const act = page.locator('table tbody tr').nth(1).getByRole('button').first();
    await act.click(); await page.waitForTimeout(500);
    await page.getByRole('menuitem', { name: /Update Allocation/ }).click(); await page.waitForTimeout(1500);
    const dlg = page.getByRole('dialog').first(); await dlg.waitFor({ timeout: 5000 });
    const text = (await dlg.innerText()).slice(0, 700);
    const shot = await H.shot(page, TAG + '08-update-allocation-dialog');
    await dlg.getByRole('button', { name: /^Cancel$/ }).first().click().catch(() => page.keyboard.press('Escape'));
    await page.waitForTimeout(800);
    return { text, closed: (await page.getByRole('dialog').count()) === 0, shot };
  });
  await R.step('past-allocations-tab', async () => {
    await page.getByRole('tab', { name: /Past Allocations/ }).click(); await page.waitForTimeout(2000);
    const rows = await page.$$eval('table tbody tr', trs => trs.slice(0, 4).map(tr => tr.innerText.replace(/\n/g, ' | ').slice(0, 160)));
    return { rows, bad: await H.emptyScan(page), shot: await H.shot(page, TAG + '09-past-allocations') };
  });
  await R.step('new-allocation-form', async () => {
    await H.go(page, '/my-projects/new-allocation');
    await page.waitForTimeout(1500);
    const h = await page.locator('h1, h2').allTextContents();
    // resource type select: look for PR reviewer option
    const combos = await page.getByRole('combobox').evaluateAll(c => c.map(x => (x.getAttribute('aria-label') || x.id || x.textContent.trim()).slice(0, 40)));
    const radios = await page.getByRole('radio').evaluateAll(r => r.map(x => x.getAttribute('value') + ':' + (x.getAttribute('aria-label') || x.parentElement.textContent.trim().slice(0, 30))));
    const shot = await H.shot(page, TAG + '10-new-allocation');
    return { url: page.url(), h, combos, radios, shot };
  });
  R.done(); await b.close();
})();
