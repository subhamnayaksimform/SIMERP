const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('t1b');
  const { page } = await H.login(b, 'vihaan.chatterjee'); H.attach(page, R.errs);
  await R.step('I625-pills', async () => {
    const out = [];
    for (const name of ['Hardik Desai', 'David Lais']) for (const w of [1280, 1600, 1900]) {
      await page.setViewportSize({ width: w, height: 900 });
      await H.go(page, '/employee');
      await page.getByPlaceholder('Name, email, or project').fill(name); await page.waitForTimeout(3000);
      const info = await page.evaluate((name) => {
        const ths = Array.from(document.querySelectorAll('thead th')).map(t => t.textContent.trim());
        const idx = ths.findIndex(t => /Active Opportunit/i.test(t));
        return Array.from(document.querySelectorAll('table tbody tr')).filter(tr => tr.textContent.includes(name)).slice(0, 1).map(tr => {
          const td = tr.querySelectorAll('td')[idx];
          return { idx, cell: td ? td.innerText.replace(/\s+/g, ' ') : null, w: td ? Math.round(td.getBoundingClientRect().width) : null };
        });
      }, name);
      out.push({ name, w, info });
      if (w === 1600) { const c = page.locator('table tbody tr').first().locator('td').nth(info[0]?.idx ?? 14); await c.scrollIntoViewIfNeeded().catch(()=>{}); await H.shot(page, 'I625-' + name.split(' ')[0] + '-' + w); }
    }
    return out;
  });
  R.done(); await b.close();
})();
