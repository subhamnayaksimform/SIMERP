const { chromium, login, api, shot, save, BASE, API, APIROOT } = require('./lib');

(async () => {
  const browser = await chromium.launch();
  const { ctx, page } = await login(browser, 'hardik.trivedi@simformsolutions.com');
  const out = { account: 'hardik.trivedi@simformsolutions.com', ranAt: new Date().toISOString(), swaggerDefaultCreds: [], bundle: {}, regression: {}, allio: {}, roleLookup: {} };

  // --- SEC-BE-05: default/removed-fallback swagger creds must NOT work ---
  for (const [u, pw] of [['admin','admin123'],['test','test123']]) {
    const r = await page.request.fetch(APIROOT + '/docs/', { headers: { Authorization: 'Basic ' + Buffer.from(u+':'+pw).toString('base64') }, failOnStatusCode: false });
    out.swaggerDefaultCreds.push({ creds: u+'/'+pw, status: r.status() });
  }

  // --- SEC-BE-02: inspect built JS bundle for insecure origins / secrets ---
  // collect script srcs from the running app
  const scripts = await page.$$eval('script[src]', els => els.map(e => e.src));
  out.bundle.scriptSrcs = scripts;
  const apiBase = await page.evaluate(() => ({ loc: location.origin }));
  const findings = [];
  for (const src of scripts.filter(s => /assets\/|index|\.js$/.test(s)).slice(0, 8)) {
    try {
      const r = await page.request.get(src, { failOnStatusCode: false });
      const txt = await r.text();
      const httpOrigins = [...new Set((txt.match(/http:\/\/[a-z0-9.\-]+/gi) || []))].filter(u => !/localhost|127\.0\.0\.1/.test(u));
      const apiUrls = [...new Set((txt.match(/https?:\/\/simerp-dev[a-z0-9.\-]*/gi) || []))];
      const secretHits = [...new Set((txt.match(/(sk_live|sk_test|AKIA[0-9A-Z]{12,}|AIza[0-9A-Za-z_\-]{20,}|ghp_[0-9A-Za-z]{20,}|xox[baprs]-[0-9A-Za-z\-]{10,}|-----BEGIN [A-Z ]*PRIVATE KEY-----|eyJhbGciOi[0-9A-Za-z_\-]{20,})/g) || []))];
      const wsHits = [...new Set((txt.match(/wss?:\/\/[a-z0-9.\-]+/gi) || []))].filter(u => !/localhost|127/.test(u));
      findings.push({ src: src.split('/').pop(), bytes: txt.length, remoteHttpOrigins: httpOrigins.slice(0,10), apiUrls, wsUrls: wsHits.slice(0,5), secretHits });
    } catch (e) { findings.push({ src, error: String(e).slice(0,150) }); }
  }
  out.bundle.scanned = findings;
  out.bundle.locationOrigin = apiBase.loc;

  // --- Regression: employee list + detail, goals (Employee role) ---
  await page.goto(BASE + '/employee', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle').catch(()=>{});
  out.regression.employeeList = { url: page.url(), shot: await shot(page, '10-employee-list', true) };
  const empApi = await api(page, 'GET', '/employees?page=1&limit=5');
  out.regression.employeeListApi = { status: empApi.status, sample: Array.isArray(empApi.body?.data) ? empApi.body.data.slice(0,2) : empApi.body };

  // goals
  for (const path of ['/goals', '/goal', '/dashboard']) {
    await page.goto(BASE + path, { waitUntil: 'domcontentloaded' }).catch(()=>{});
    await page.waitForLoadState('networkidle').catch(()=>{});
    if (!/login/i.test(page.url())) { out.regression.goals = { url: page.url(), shot: await shot(page, '11-goals', true) }; break; }
  }

  // --- SI4-I589: Allio Capital project duplicates ---
  for (const q of ['/projects?search=Allio', '/projects?page=1&limit=200', '/projects?search=Allio%20Capital']) {
    const r = await api(page, 'GET', q);
    const data = Array.isArray(r.body?.data) ? r.body.data : (Array.isArray(r.body) ? r.body : (r.body?.data?.rows || r.body?.data?.items || []));
    const allio = (Array.isArray(data) ? data : []).filter(p => /allio/i.test(JSON.stringify(p)));
    out.allio[q] = { status: r.status, total: Array.isArray(data) ? data.length : null, allioCount: allio.length, allioRows: allio.map(p => ({ id: p.publicId||p.id, name: p.name, zohoProjectId: p.zohoProjectId, deletedAt: p.deletedAt })) };
    if (!out.allio.found && allio.length) out.allio.found = true;
  }

  // --- Role lookup: Assign User Roles API (needs privileged access) ---
  for (const q of ['/user-roles', '/users/roles', '/roles', '/employees/roles', '/admin/user-roles', '/user-role-assignments']) {
    const r = await api(page, 'GET', q);
    out.roleLookup[q] = { status: r.status, snippet: (typeof r.body==='string'?r.body:JSON.stringify(r.body)).slice(0,200) };
  }

  save('02-fe-regress-i589', out);
  console.log(JSON.stringify(out, null, 2));
  await ctx.close(); await browser.close();
})();
