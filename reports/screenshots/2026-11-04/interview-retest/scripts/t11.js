const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('t11');
  const v = await H.login(b, 'vihaan.chatterjee'); H.attach(v.page, R.errs);
  const page = v.page;
  await R.step('dialog', async () => {
    await H.go(page, '/pre-sales/2b9e5dd6-a202-464d-b4da-0ad75e733a75');
    await page.getByRole('button', { name: /Cancel Request/ }).click(); await page.waitForTimeout(1000);
    await H.shot(page, 'I627-close-dialog');
    return { dialog: (await page.getByRole('dialog').innerText()).replace(/\n+/g,' | ').slice(0,700) };
  });
  R.done(); await b.close();
})();
