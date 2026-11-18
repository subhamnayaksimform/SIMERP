const L = require('./lib');
function items(b){const d=b&&b.data; if(Array.isArray(d))return d; if(!d)return []; return d.items||d.data||d.rows||d.employees||d.projects||d.tickets||[];}
function nm(x){return x.name||x.title||x.ticketNumber||x.employee?.name||x.clientName||x.email||x.publicId;}
(async () => {
  const b = await L.chromium.launch();
  const { page } = await L.login(b, process.argv[2]);
  for (const p of process.argv.slice(3)) { const r = await L.api(page, 'GET', p); const it=items(r.body); const d=r.body&&r.body.data;
    console.log('##', p, r.status, 'total=', d&&(d.total??d.meta?.total), 'n=', it.length, JSON.stringify(it.slice(0,4).map(nm)), r.status>=400?JSON.stringify(r.body).slice(0,300):'', process.env.K? JSON.stringify(Object.keys(d||{})).slice(0,300)+' | '+JSON.stringify(it[0]||{}).slice(0,+process.env.K):''); }
  await b.close();
})();
