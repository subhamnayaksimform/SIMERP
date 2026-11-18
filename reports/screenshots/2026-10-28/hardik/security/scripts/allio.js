const { chromium, login, api, save } = require('./lib.js');
(async () => {
  const b = await chromium.launch();
  const { page } = await login(b, 'ceo');
  const out = {};
  for (const q of ['Allio', 'allio capital', 'Allio%20Capital']) {
    out['projects?search=' + q] = await api(page, 'GET', `/projects?search=${q}&page=1&limit=100`);
  }
  out.all = await api(page, 'GET', `/projects?page=1&limit=100`);
  const rows = (o) => { const d = o.body && o.body.data; return Array.isArray(d) ? d : (d && (d.items || d.data || d.rows)) || []; };
  const summary = {};
  for (const [k, v] of Object.entries(out)) {
    const r = rows(v);
    summary[k] = { status: v.status, total: r.length, allio: r.filter(p => JSON.stringify(p).toLowerCase().includes('allio')).map(p => ({ id: p.publicId || p.id, name: p.name || p.projectName, zoho: p.zohoProjectId || p.zohoId, status: p.status })) };
  }
  save('allio-admin', summary);
  console.log(JSON.stringify(summary, null, 1));
  await b.close();
})();
