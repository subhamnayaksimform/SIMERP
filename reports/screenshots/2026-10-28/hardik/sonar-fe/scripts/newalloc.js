const H = require('./h');
const USER = process.argv[2] || 'vivaan.bajaj'; const TAG = process.argv[3] || 'c';
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('newalloc-' + USER);
  const { ctx, page } = await H.login(b, USER); H.attach(page, R.errs);
  await H.go(page, '/my-projects/new-allocation'); await page.waitForTimeout(1500);
  const fieldLabels = () => page.locator('form label').allTextContents();
  await R.step('request-type-switch', async () => {
    const rt = page.getByRole('combobox').filter({ hasText: 'Select request type' }).first();
    await rt.click(); await page.waitForTimeout(500);
    const opts = await page.getByRole('option').allTextContents();
    const pr = opts.find(o => /PR/i.test(o));
    await page.getByRole('option', { name: pr }).click(); await page.waitForTimeout(800);
    const l1 = await fieldLabels();
    const shot1 = await H.shot(page, TAG + '11-new-alloc-pr-reviewer');
    // set a frequency if possible
    const freq = page.getByRole('combobox').filter({ hasText: /Select frequency/ }).first();
    let freqSet = null;
    if (await freq.count()) { await freq.click(); await page.waitForTimeout(400); const fo = await page.getByRole('option').allTextContents(); await page.getByRole('option').first().click(); freqSet = fo[0]; await page.waitForTimeout(400); }
    const other = opts.find(o => !/PR/i.test(o));
    await page.getByRole('combobox').filter({ hasText: pr }).first().click(); await page.waitForTimeout(400);
    await page.getByRole('option', { name: other }).click(); await page.waitForTimeout(800);
    const l2 = await fieldLabels();
    const shot2 = await H.shot(page, TAG + '12-new-alloc-switched-back');
    // switch to PR again: frequency should be reset (empty)
    await page.getByRole('combobox').filter({ hasText: other }).first().click(); await page.waitForTimeout(400);
    await page.getByRole('option', { name: pr }).click(); await page.waitForTimeout(800);
    const freqAgain = await page.getByRole('combobox').filter({ hasText: /Select frequency/ }).count();
    const shot3 = await H.shot(page, TAG + '13-new-alloc-pr-again');
    return { opts, pr, other, l1, freqSet, l2, freqResetToPlaceholder: freqAgain > 0, shot1, shot2, shot3 };
  });
  await R.step('tech-stack-field-separator', async () => {
    const trig = page.locator('button[aria-controls]').filter({ hasText: /tech|stack|Select/i });
    const names = await trig.evaluateAll(b => b.map(x => x.textContent.trim().slice(0, 40) + '|' + x.getAttribute('aria-controls') + '|' + x.getAttribute('aria-expanded')));
    if (!(await trig.count())) return { names };
    await trig.last().click(); await page.waitForTimeout(800);
    const id = await trig.last().getAttribute('aria-controls');
    const popExists = await page.locator(`[id="${id}"]`).count();
    const hrs = await page.locator(`[id="${id}"] hr`).count();
    const shot = await H.shot(page, TAG + '14-additional-tech-stack');
    await page.keyboard.press('Escape');
    return { names, popExists, hrs, shot };
  });
  await R.step('submit-empty-validation', async () => {
    const submit = page.getByRole('button', { name: /Submit|Create|Raise/i }).last();
    const sname = await submit.textContent();
    if (!(await submit.isEnabled())) return { sname, enabled: false };
    await submit.click(); await page.waitForTimeout(1200);
    const errs = await page.locator('[id$="-form-item-message"]').allTextContents();
    return { sname, url: page.url(), errs: errs.slice(0, 10), shot: await H.shot(page, TAG + '15-new-alloc-validation') };
  });
  R.done(); await b.close();
})();
