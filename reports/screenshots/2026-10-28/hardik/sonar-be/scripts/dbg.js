const H = require('./h');
(async () => {
  const b = await H.chromium.launch(); const { page } = await H.login(b, 'nandini.langalia');
  const r = await H.get(page, '/employees/75d22b87-b773-4425-b887-c988f2f83108');
  const s = JSON.stringify(r.body.data); console.log(r.status, Object.keys(r.body.data||{}).join(','), '| ratings idx', s.indexOf('ating'), s.slice(Math.max(0,s.indexOf('Rating')-200), s.indexOf('Rating')+300));
  const e = await H.get(page, '/employees?page=1&limit=100'); console.log('lastSyncedAt', e.body.data.lastSyncedAt);
  const l = await H.get(page, '/working-location/list?window=15d'); console.log('wl list', l.status, l.body.data.length);
  await b.close();
})();
