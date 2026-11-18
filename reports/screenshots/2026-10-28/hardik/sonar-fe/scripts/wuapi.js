const H = require('./h');
(async () => { const b = await H.chromium.launch(); const { page } = await H.login(b, process.argv[2]);
 const r = await H.api(page, 'GET', '/weekly-update?page=1&limit=100');
 const d = r.body.data; const it = Array.isArray(d) ? d : (d && d.items) || [];
 console.log(r.status, it.length, JSON.stringify(it.slice(0, 2)).slice(0, 1500)); H.save('wu-list-' + process.argv[2], it);
 await b.close(); })();
