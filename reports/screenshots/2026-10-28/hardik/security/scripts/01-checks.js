// Security-fix verification for SI4-T1515 / SI4-T1513, run from an authenticated
// session (hardik.trivedi, an allowed Employee account). All requests carry that
// logged-in identity via page.request.
const { chromium, login, api, shot, save, BASE, API, APIROOT } = require('./lib');

(async () => {
  const browser = await chromium.launch();
  const { ctx, page } = await login(browser, 'hardik.trivedi@simformsolutions.com');
  const out = { account: 'hardik.trivedi@simformsolutions.com', ranAt: new Date().toISOString(), landing: page.url(), swagger: [], headers: {}, cors: [], errors: [] };
  await shot(page, '00-logged-in');

  // --- SEC-BE-05: Swagger / docs exposure on dev ---
  for (const p of ['/docs', '/docs/', '/docs-json', '/docs-yaml', '/api/docs', '/api/v1/docs', '/swagger', '/api-json']) {
    const r = await api(page, 'GET', APIROOT + p);
    out.swagger.push({ path: p, status: r.status, wwwAuth: r.headers['www-authenticate'] || null, ctype: r.headers['content-type'] || null, snippet: (typeof r.body === 'string' ? r.body : JSON.stringify(r.body)).slice(0, 120) });
  }

  // --- Security headers (helmet) on API + frontend ---
  for (const target of [APIROOT + '/api/v1/health-check', APIROOT + '/api/v1/notifications?page=1&limit=1', BASE + '/']) {
    const r = await api(page, 'GET', target);
    const h = r.headers;
    out.headers[target] = { status: r.status,
      'content-security-policy': h['content-security-policy'] || null,
      'strict-transport-security': h['strict-transport-security'] || null,
      'x-frame-options': h['x-frame-options'] || null,
      'x-content-type-options': h['x-content-type-options'] || null,
      'x-powered-by': h['x-powered-by'] || null,
      'cross-origin-opener-policy': h['cross-origin-opener-policy'] || null,
      'cross-origin-resource-policy': h['cross-origin-resource-policy'] || null,
      'referrer-policy': h['referrer-policy'] || null,
      'x-dns-prefetch-control': h['x-dns-prefetch-control'] || null,
      server: h['server'] || null };
  }

  // --- CORS: foreign origin vs allowed origin ---
  for (const t of [ { o: BASE, l: 'allowed-frontend' }, { o: 'https://evil.example.com', l: 'foreign' }, { o: 'http://localhost:5173', l: 'local-dev' } ]) {
    const pre = await page.request.fetch(API + '/auth/login', { method: 'OPTIONS', headers: { Origin: t.o, 'Access-Control-Request-Method': 'POST' }, failOnStatusCode: false });
    const g = await page.request.fetch(API + '/notifications?page=1&limit=1', { method: 'GET', headers: { Origin: t.o }, failOnStatusCode: false });
    out.cors.push({ label: t.l, origin: t.o, preStatus: pre.status(), preACAO: pre.headers()['access-control-allow-origin'] || null, preACAC: pre.headers()['access-control-allow-credentials'] || null, getStatus: g.status(), getACAO: g.headers()['access-control-allow-origin'] || null, getACAC: g.headers()['access-control-allow-credentials'] || null });
  }

  // --- Error leakage (SEC-BE-06 adjacent / stack traces) ---
  for (const e of [ { m: 'GET', p: '/this-route-does-not-exist-xyz' }, { m: 'GET', p: '/employees/not-a-uuid' }, { m: 'POST', p: '/auth/login', b: { bad: 'x' } } ]) {
    const r = await api(page, e.m, e.p, e.b);
    const txt = typeof r.body === 'string' ? r.body : JSON.stringify(r.body);
    out.errors.push({ probe: e.m + ' ' + e.p, status: r.status, hasStack: /at .*\(.*:\d+:\d+\)|\.ts:\d+|\/src\/|node_modules/.test(txt), body: txt.slice(0, 500) });
  }

  save('01-checks', out);
  console.log(JSON.stringify(out, null, 2));
  await ctx.close(); await browser.close();
})();
