const L = require('./lib');
(async () => {
  const b = await L.chromium.launch();
  const { page, ctx } = await L.login(b, process.argv[2]);
  for (const p of process.argv.slice(3)) { const r = await L.api(page, 'GET', p); console.log('##', p, r.status, JSON.stringify(r.body).slice(0, +process.env.N || 1500)); }
  await b.close();
})();
