const { chromium, login, api, save } = require('./lib');
(async () => {
  const browser = await chromium.launch();
  const { ctx, page } = await login(browser, 'hardik.trivedi@simformsolutions.com');
  const out = { account: 'hardik.trivedi@simformsolutions.com', ranAt: new Date().toISOString(), goals: {}, employees: {} };
  for (const q of ['/goals?page=1&limit=100', '/goals/by-employee?page=1&limit=100']) {
    const r = await api(page, 'GET', q);
    const d = Array.isArray(r.body?.data)?r.body.data:(r.body?.data?.rows||r.body?.data?.items||r.body?.data);
    out.goals[q] = { status: r.status, count: Array.isArray(d)?d.length:(d?'obj':null), snippet: JSON.stringify(r.body).slice(0,180) };
  }
  for (const q of ['/employees?page=1&limit=100']) {
    const r = await api(page, 'GET', q);
    const d = Array.isArray(r.body?.data)?r.body.data:(r.body?.data?.rows||r.body?.data?.items);
    out.employees[q] = { status: r.status, count: Array.isArray(d)?d.length:null, firstKeys: Array.isArray(d)&&d[0]?Object.keys(d[0]):null };
  }
  save('05-goals200', out);
  console.log(JSON.stringify(out, null, 2));
  await ctx.close(); await browser.close();
})();
