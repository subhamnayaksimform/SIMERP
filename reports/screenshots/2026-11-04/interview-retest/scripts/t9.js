const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('t9');
  const v = await H.login(b, 'vihaan.chatterjee'); H.attach(v.page, R.errs);
  const page = v.page;
  await R.step('edit-ticket', async () => {
    await H.go(page, '/pre-sales/2b9e5dd6-a202-464d-b4da-0ad75e733a75');
    await page.getByRole('button', { name: /Edit Ticket/ }).click(); await page.waitForTimeout(1500);
    await H.shot(page, 'I627-edit');
    return { labels: await page.locator('label').allInnerTexts(), combos: await page.getByRole('combobox').allInnerTexts() };
  });
  R.done(); await b.close();
})();
