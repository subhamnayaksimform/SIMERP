const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('t7');
  const v = await H.login(b, 'vihaan.chatterjee'); H.attach(v.page, R.errs);
  const OPP = '2b9e5dd6-a202-464d-b4da-0ad75e733a75', POS = '3bca05c3-d240-4960-bf65-2473726a7cbe';
  const page = v.page;
  await R.step('close', async () => { const r = await H.api(page,'POST','/opportunities/positions/'+POS+'/close',{reason:'QA-AUTO retest I627 UI'}); return { s: r.status }; });
  await R.step('ui-won', async () => {
    await H.go(page, '/pre-sales/' + OPP);
    await H.shot(page, 'I627-before');
    const badge = page.getByText(/^Open$/).first(); await badge.click(); await page.waitForTimeout(800);
    await H.shot(page, 'I627-menu');
    const opts = await page.getByRole('option').allInnerTexts().catch(()=>[]);
    const items = await page.getByRole('menuitem').allInnerTexts().catch(()=>[]);
    return { opts, items };
  });
  R.done(); await b.close();
})();
