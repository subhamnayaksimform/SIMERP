const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('t2');
  const { page } = await H.login(b, 'vihaan.chatterjee'); H.attach(page, R.errs);
  await R.step('nav', async () => {
    await H.go(page, '/employee');
    await page.getByText('Requests Tracking').first().click(); await page.waitForTimeout(800);
    await H.shot(page,'nav'); return await page.evaluate(()=>Array.from(document.querySelectorAll('a')).map(x=>(x.textContent||'').trim()+' -> '+x.getAttribute('href')).filter(s=>/opport|request|alloc|ticket/i.test(s)));
  });
  await b.close();
})();
