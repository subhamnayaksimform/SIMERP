const fs = require('fs');
const { chromium, login, api, shot, save, BASE, API } = require('./lib');

(async () => {
  const browser = await chromium.launch();
  const { ctx, page } = await login(browser, 'kriti.desai@simformsolutions.com');
  const out = { account: 'kriti.desai@simformsolutions.com', ranAt: new Date().toISOString(), landing: page.url(), allio: {}, roleLookup: {}, bundle: {} };
  await shot(page, '20-kriti-landing');

  // Projects: Allio Capital duplicate check (needs broad visibility)
  for (const q of ['/projects?search=Allio', '/projects?page=1&limit=400', '/projects?search=Allio%20Capital']) {
    const r = await api(page, 'GET', q);
    const data = Array.isArray(r.body?.data) ? r.body.data : (Array.isArray(r.body) ? r.body : (r.body?.data?.rows || r.body?.data?.items || []));
    const arr = Array.isArray(data) ? data : [];
    const allio = arr.filter(p => /allio/i.test(JSON.stringify(p)));
    out.allio[q] = { status: r.status, total: arr.length, allioCount: allio.length, allioRows: allio.map(p => ({ id: p.publicId||p.id, name: p.name, zohoProjectId: p.zohoProjectId, deletedAt: p.deletedAt })) };
  }

  // Role endpoint discovery
  for (const q of ['/roles', '/user-roles', '/users?page=1&limit=5', '/employees/user-roles', '/role-assignments', '/admin/roles']) {
    const r = await api(page, 'GET', q);
    out.roleLookup[q] = { status: r.status, snippet: (typeof r.body==='string'?r.body:JSON.stringify(r.body)).slice(0,300) };
  }

  // Fetch frontend index + JS bundles to disk (public assets), scan done separately
  const idx = await page.request.get(BASE + '/', { failOnStatusCode: false });
  const html = await idx.text();
  fs.writeFileSync('/home/subham/SIMERP new project/reports/screenshots/2026-10-28/hardik/security/json/index.html', html);
  const srcs = [...new Set((html.match(/(?:src|href)="([^"]+\.js)"/g) || []).map(s => s.replace(/.*="/,'').replace(/"$/,'')))];
  out.bundle.srcs = srcs;
  const saved = [];
  for (const s of srcs.slice(0, 12)) {
    const url = s.startsWith('http') ? s : BASE + (s.startsWith('/') ? s : '/' + s);
    const r = await page.request.get(url, { failOnStatusCode: false });
    if (r.status() === 200) {
      const txt = await r.text();
      const fn = '/home/subham/SIMERP new project/reports/screenshots/2026-10-28/hardik/security/json/bundle-' + s.split('/').pop();
      fs.writeFileSync(fn, txt);
      saved.push({ src: s, bytes: txt.length });
    } else saved.push({ src: s, status: r.status() });
  }
  out.bundle.saved = saved;

  save('03-kriti', out);
  console.log(JSON.stringify(out, null, 2));
  await ctx.close(); await browser.close();
})();
