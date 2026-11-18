const { chromium, login, api, save } = require('./lib');
(async () => {
  const b = await chromium.launch();
  const { page } = await login(b, process.argv[2]);
  let all = [];
  for (let p = 1; p <= 40; p++) {
    const r = await api(page, 'GET', `/employees/list?page=${p}&limit=100`);
    if (p === 1) console.log(r.status, JSON.stringify(r.body).slice(0, 700));
    const d = r.body && r.body.data; const items = Array.isArray(d) ? d : (d && (d.items || d.data)) || [];
    all = all.concat(items);
    if (items.length < 100) break;
  }
  save('employees', all); console.log('total', all.length);
  await b.close();
})();
