const { chromium, login, api, shot, save, BASE, API } = require('./lib');

(async () => {
  const browser = await chromium.launch();
  const { ctx, page } = await login(browser, 'hardik.trivedi@simformsolutions.com');
  const out = { account: 'hardik.trivedi@simformsolutions.com', ranAt: new Date().toISOString(), regression: {}, allio: {}, roleLookup: {} };

  // Regression: employee list (Employee role)
  await page.goto(BASE + '/employee', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle').catch(()=>{});
  out.regression.employeeList = { url: page.url(), shot: await shot(page, '10-employee-list', true) };
  const empApi = await api(page, 'GET', '/employees?page=1&limit=5');
  const empData = Array.isArray(empApi.body?.data) ? empApi.body.data : (empApi.body?.data?.rows || empApi.body?.data?.items || []);
  out.regression.employeeListApi = { status: empApi.status, count: Array.isArray(empData)?empData.length:null, firstKeys: Array.isArray(empData)&&empData[0]?Object.keys(empData[0]):null };

  for (const path of ['/goals', '/goal', '/dashboard']) {
    await page.goto(BASE + path, { waitUntil: 'domcontentloaded' }).catch(()=>{});
    await page.waitForLoadState('networkidle').catch(()=>{});
    if (!/login/i.test(page.url())) { out.regression.goals = { url: page.url(), shot: await shot(page, '11-goals', true) }; break; }
  }

  // SI4-I589: Allio Capital project duplicates
  for (const q of ['/projects?search=Allio', '/projects?page=1&limit=300', '/projects?search=Allio%20Capital']) {
    const r = await api(page, 'GET', q);
    const data = Array.isArray(r.body?.data) ? r.body.data : (Array.isArray(r.body) ? r.body : (r.body?.data?.rows || r.body?.data?.items || []));
    const arr = Array.isArray(data) ? data : [];
    const allio = arr.filter(p => /allio/i.test(JSON.stringify(p)));
    out.allio[q] = { status: r.status, total: arr.length, bodyKeys: r.body && typeof r.body==='object'?Object.keys(r.body):null, allioCount: allio.length, allioRows: allio.map(p => ({ id: p.publicId||p.id, name: p.name, zohoProjectId: p.zohoProjectId, deletedAt: p.deletedAt })) };
  }

  // Role lookup: find an Admin/PMO account
  for (const q of ['/user-roles', '/users/roles', '/roles', '/employees/roles', '/admin/user-roles', '/user-role-assignments', '/user-roles?page=1&limit=300']) {
    const r = await api(page, 'GET', q);
    out.roleLookup[q] = { status: r.status, snippet: (typeof r.body==='string'?r.body:JSON.stringify(r.body)).slice(0,300) };
  }

  save('02-regress-i589', out);
  console.log(JSON.stringify(out, null, 2));
  await ctx.close(); await browser.close();
})();
