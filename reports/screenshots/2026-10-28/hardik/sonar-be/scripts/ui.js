const L = require('./lib');
(async () => {
  const b = await L.chromium.launch(); const { page } = await L.login(b, 'nandini.langalia');
  const out = {};
  async function visit(path, name, term) {
    await page.goto(L.BASE + path, { waitUntil: 'domcontentloaded' }); await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(2500);
    if (term !== undefined) {
      const box = page.locator('input[placeholder*="earch" i], input[placeholder*="Name, email" i]').last();
      if (await box.isVisible({ timeout: 8000 }).catch(() => false)) {
        const resp = page.waitForResponse((r) => r.url().includes('search=') , { timeout: 15000 }).catch(() => null);
        await box.fill(term); const r = await resp; out[name] = r ? { url: r.url().replace(L.API, ''), status: r.status(), total: (await r.json().catch(() => ({}))).data?.total } : 'no search request seen';
        await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForTimeout(1500);
      } else out[name] = 'search box not found';
    }
    out[name + ':shot'] = await L.shot(page, name);
    out[name + ':url'] = page.url();
  }
  await visit('/employee?sortBy=availabilityPercentage&sortOrder=desc', 'ui-01-employees-search-percent', '%');

  console.log(JSON.stringify(out, null, 1));
  L.save('ui-pmo-3', out);
  await b.close();
})();
