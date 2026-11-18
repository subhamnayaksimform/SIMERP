const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('t12');
  const v = await H.login(b, 'vihaan.chatterjee'); H.attach(v.page, R.errs);
  const page = v.page; const OPP='2b9e5dd6-a202-464d-b4da-0ad75e733a75', POS='3bca05c3-d240-4960-bf65-2473726a7cbe';
  await R.step('warn', async () => {
    await H.go(page, '/pre-sales/' + OPP);
    await page.getByRole('button', { name: /Cancel Request/ }).click(); await page.waitForTimeout(800);
    await page.getByText('Client Won').click();
    await page.getByRole('button', { name: /Confirm Close Ticket/ }).click(); await page.waitForTimeout(1200);
    await H.shot(page, 'I627-warning');
    const dlgs = await page.getByRole('alertdialog').or(page.getByRole('dialog')).allInnerTexts();
    const status = (await H.api(page,'GET','/opportunities/'+OPP)).body.data.status;
    return { dlgs: dlgs.map(d=>d.replace(/\n+/g,' | ').slice(0,300)), statusStillOpen: status };
  });
  await R.step('restore', async () => {
    const r = await H.api(page,'POST','/opportunities/positions/'+POS+'/reopen');
    const f = (await H.api(page,'GET','/opportunities/'+OPP)).body.data;
    return { s: r.status, st: f.status, pos: f.positions.map(p=>p.closedAt) };
  });
  R.done(); await b.close();
})();
