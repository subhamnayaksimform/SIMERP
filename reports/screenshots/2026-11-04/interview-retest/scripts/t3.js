const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('t3');
  const { page } = await H.login(b, 'vihaan.chatterjee'); H.attach(page, R.errs);
  await R.step('I628-kanban', async () => {
    await H.go(page, '/pre-sales');
    const s = page.getByPlaceholder(/search/i).first(); await s.fill('OPP-0334'); await page.waitForTimeout(2500);
    const kb = page.getByRole('tab', { name: /kanban/i }).or(page.getByRole('button', { name: /kanban/i })).first();
    await kb.click(); await page.waitForTimeout(2000);
    await H.shot(page, 'I628-kanban', true);
    const cols = await page.evaluate(() => {
      const res = [];
      document.querySelectorAll('*').forEach(el => { const t = (el.textContent||'').trim(); if (/Ira Chopra/.test(t) && el.children.length === 0) {
        let p = el; for (let i=0;i<12 && p; i++) { p = p.parentElement; if (p && /column/i.test(p.getAttribute('aria-label')||'')) { res.push(p.getAttribute('aria-label')); break; } }
      }});
      return res;
    });
    const labels = await page.evaluate(() => Array.from(document.querySelectorAll('[aria-label]')).map(e=>e.getAttribute('aria-label')).filter(l=>/column/i.test(l)));
    return { cols, labels };
  });
  await R.step('I626-detail', async () => {
    await H.go(page, '/pre-sales');
    const s = page.getByPlaceholder(/search/i).first(); await s.fill('OPP-0335'); await page.waitForTimeout(2500);
    await H.shot(page, 'I626-list');
    const links = await page.evaluate(() => Array.from(document.querySelectorAll('a')).map(a=>a.getAttribute('href')).filter(h=>/pre-sales\//.test(h||'')).slice(0,5));
    return { links, txt: (await page.locator('body').innerText()).slice(0, 600) };
  });
  R.done(); await b.close();
})();
