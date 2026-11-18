const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('t13');
  const v = await H.login(b, 'vihaan.chatterjee'); H.attach(v.page, R.errs);
  const page = v.page; const OPP='2b9e5dd6-a202-464d-b4da-0ad75e733a75';
  const caps = []; page.on('response', async r => { if (/opportunities\/candidates\?/.test(r.url())) { try { caps.push({ url: r.url().replace(/.*v1/,''), body: await r.json() }); } catch {} } });
  await R.step('open-shortlist', async () => {
    await H.go(page, '/pre-sales/' + OPP);
    await page.getByRole('button', { name: /Add\/ ?Shortlist/ }).first().click(); await page.waitForTimeout(2000);
    const s = page.getByPlaceholder(/search/i).last(); await s.fill('Kamal Malhotra'); await page.waitForTimeout(3000);
    await H.shot(page, 'I629-picker');
    const txt = (await page.getByRole('dialog').innerText().catch(()=>'')).replace(/\n+/g,' | ');
    const hits = caps.flatMap(c => (c.body.data?.items||[]).filter(i => /Kamal/.test(i.name||JSON.stringify(i))).map(i => ({ name: i.name, clientRejection: i.clientRejection, ...Object.fromEntries(Object.entries(i).filter(([k])=>/reject/i.test(k))) })));
    return { urls: caps.map(c=>c.url).slice(-2), hits, warn: txt.match(/Rejected[^|]*\|?[^|]*/g) };
  });
  R.done(); await b.close();
})();
