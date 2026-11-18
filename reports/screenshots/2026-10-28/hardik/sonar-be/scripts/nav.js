const L = require('./lib');
(async () => {
  const b = await L.chromium.launch(); const { page } = await L.login(b, 'nandini.langalia');
  await page.goto(L.BASE + '/dashboard'); await page.waitForLoadState('networkidle').catch(() => {});
  for (const t of ['Employee', 'Requests Tracking', 'Projects', 'Team']) { await page.getByText(t, { exact: true }).first().click().catch(() => {}); await page.waitForTimeout(500); }
  const links = await page.$$eval('a[href]', (as) => as.map((a) => a.textContent.trim() + ' -> ' + a.getAttribute('href')));
  console.log(links.join('\n'));
  await b.close();
})();
