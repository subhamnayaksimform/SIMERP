const L = require('./lib');
(async () => {
  const b = await L.chromium.launch();
  const { page } = await L.login(b, 'nandini.langalia');
  const all=[]; for (let p=1;p<=40;p++){ const r=await L.api(page,'GET',`/employee-roles?page=${p}&limit=100`); const it=r.body.data.items; all.push(...it); if(it.length<100)break; }
  L.save('employee-roles-all', all.map(e=>({email:e.email,name:e.name,publicId:e.publicId,roles:e.roles.map(r=>r.name),depts:e.departments.map(d=>d.name)})));
  const me = all.find(e=>e.email.startsWith('nandini.langalia')); console.log('nandini', JSON.stringify(me.roles.map(r=>r.name)));
  const rel = await L.api(page,'GET','/releases?page=1&limit=100'); console.log('releases', rel.status, JSON.stringify(rel.body).slice(0,800));
  await b.close();
})();
