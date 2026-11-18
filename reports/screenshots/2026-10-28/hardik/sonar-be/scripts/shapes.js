const H = require('./h');
(async () => {
  const b = await H.chromium.launch(); const { page } = await H.login(b, 'nandini.langalia');
  const show = async (p, n=900) => { const r = await H.get(page, p); const d=r.body&&r.body.data; console.log('##', p, r.status, JSON.stringify(d && (d.stats? {stats:d.stats, first:(d.items||[])[0]} : d)).replace(/"photoUrl":"[^"]*",/g,'').slice(0, n)); };
  await show('/allocation-tickets?page=1&limit=100', 1500);
  await show('/allocation-tickets/interview-requests?page=1&limit=100', 600);
  await show('/utilization-priority?page=1&limit=100', 900);
  await show('/employee-ratings?page=1&limit=100', 900);
  await show('/dashboard/activity?page=1&limit=100', 900);
  await show('/dashboard/overview', 1200);
  await show('/working-location/overview', 1200);
  await show('/weekly-update?page=1&limit=100', 300);
  await b.close();
})();
