const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('t4');
  const { page } = await H.login(b, 'vihaan.chatterjee'); H.attach(page, R.errs);
  await R.step('I626-detail', async () => {
    await H.go(page, '/pre-sales/b4de8cc1-d99f-4387-a95f-b20ab37470e0');
    await page.waitForTimeout(1500);
    // expand all collapsed positions
    for (const h of await page.getByRole('button', { name: /Java (Developer|Lead)/ }).all()) { await h.click().catch(()=>{}); await page.waitForTimeout(500); }
    await H.shot(page, 'I626-detail', true);
    const txt = await page.locator('body').innerText();
    const rel = txt.split('\n').filter(l => /releas/i.test(l)).slice(0, 15);
    return { rel, names: ['Smit Shah','Uday Hegde','David Lais','Hardik Desai'].map(n => [n, txt.includes(n)]) };
  });
  R.done(); await b.close();
})();
