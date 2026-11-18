const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('t8');
  const v = await H.login(b, 'vihaan.chatterjee'); H.attach(v.page, R.errs);
  const page = v.page;
  await R.step('board-status', async () => {
    await H.go(page, '/pre-sales');
    await page.getByPlaceholder(/search/i).first().fill('OPP-0344'); await page.waitForTimeout(2500);
    await H.shot(page, 'I627-board');
    const cands = await page.getByText(/^Open$/).all();
    return { n: cands.length, roles: await page.getByRole('combobox').evaluateAll(e=>e.map(x=>x.textContent.trim())) };
  });
  R.done(); await b.close();
})();
