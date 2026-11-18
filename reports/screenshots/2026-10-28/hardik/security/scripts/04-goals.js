const { chromium, login, api, shot, save, BASE } = require('./lib');

(async () => {
  const browser = await chromium.launch();
  const { ctx, page } = await login(browser, 'hardik.trivedi@simformsolutions.com');
  const out = { account: 'hardik.trivedi@simformsolutions.com', ranAt: new Date().toISOString(), goalsApi: {}, goalsUi: {} };

  // Goals API (goals.service.ts touched by T1515 - redundant cast removal)
  for (const q of ['/goals?page=1&limit=5', '/goals/my?page=1&limit=5', '/employees/goals?page=1&limit=5', '/goals/by-employee?page=1&limit=5']) {
    const r = await api(page, 'GET', q);
    out.goalsApi[q] = { status: r.status, bodyKeys: r.body && typeof r.body==='object'?Object.keys(r.body):null, snippet: (typeof r.body==='string'?r.body:JSON.stringify(r.body)).slice(0,200) };
  }

  // UI: navigate via Employee > Goals in the sidebar
  await page.goto(BASE + '/employee', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle').catch(()=>{});
  const goalsLink = page.getByRole('link', { name: /^Goals$/ }).first();
  if (await goalsLink.isVisible({ timeout: 5000 }).catch(()=>false)) {
    await goalsLink.click();
    await page.waitForLoadState('networkidle').catch(()=>{});
  }
  out.goalsUi = { url: page.url(), is404: await page.getByText('404').isVisible({timeout:2000}).catch(()=>false), shot: await shot(page, '12-goals-via-nav', true) };

  save('04-goals', out);
  console.log(JSON.stringify(out, null, 2));
  await ctx.close(); await browser.close();
})();
