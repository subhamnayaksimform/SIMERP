const L = require('./lib');
(async () => {
  const b = await L.chromium.launch(); const { page } = await L.login(b, 'nandini.langalia');
  await page.goto(L.BASE + '/employee?sortBy=availabilityPercentage&sortOrder=desc'); await page.waitForLoadState('networkidle').catch(() => {});
  const box = page.getByPlaceholder('Name, email, or project'); await box.waitFor({ timeout: 15000 });
  const resp = page.waitForResponse((r) => r.url().includes('/employees?') && r.url().includes('search='), { timeout: 20000 }).catch(() => null);
  await box.click(); await box.pressSequentially('%', { delay: 100 }); await box.press('Enter');
  const r = await resp; const info = r ? { url: r.url().replace(L.API, ''), status: r.status(), total: (await r.json()).data.total } : 'none';
  await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForTimeout(2000);
  console.log(JSON.stringify(info), await L.shot(page, 'ui-01-employees-search-percent'));
  await b.close();
})();
