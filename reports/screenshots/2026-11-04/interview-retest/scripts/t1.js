const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('t1');
  const { page } = await H.login(b, 'vihaan.chatterjee'); H.attach(page, R.errs);
  // I625
  await R.step('I625-pills', async () => {
    const out = [];
    for (const w of [1280, 1600, 1900]) {
      await page.setViewportSize({ width: w, height: 900 });
      await H.go(page, '/employee');
      const s = page.getByPlaceholder(/search/i).first();
      await s.fill('Hardik Desai'); await page.waitForTimeout(2500);
      const rows = page.locator('table tbody tr');
      const info = await page.evaluate(() => {
        const ths = Array.from(document.querySelectorAll('thead th')).map(t => t.textContent.trim());
        const idx = ths.findIndex(t => /Active Opportunit/i.test(t));
        return Array.from(document.querySelectorAll('table tbody tr')).slice(0, 3).map(tr => {
          const td = tr.querySelectorAll('td')[idx];
          return { name: tr.textContent.trim().slice(0, 30), idx, cell: td ? td.innerText.replace(/\s+/g, ' ') : null, w: td ? Math.round(td.getBoundingClientRect().width) : null };
        });
      });
      out.push({ w, info });
      await page.locator('table tbody tr').first().scrollIntoViewIfNeeded();
      await H.shot(page, 'I625-' + w);
    }
    return out;
  });
  // I626
  await R.step('I626-released-visible', async () => {
    await H.go(page, '/opportunities'); 
    const r = await H.api(page, 'GET', '/opportunities/openings?search=OPP-0335');
    const url = page.url();
    return { url, links: await page.locator('a[href*="opportunit"]').evaluateAll(a => a.slice(0, 8).map(x => x.getAttribute('href'))) };
  });
  await R.step('I630-api', async () => {
    const r = await H.api(page, 'GET', '/opportunities/openings?search=OPP-0334');
    const o = r.body.data.items[0].opportunity;
    return { stats: o.stats, status: o.status };
  });
  H.save && R.done();
  await b.close();
})();
