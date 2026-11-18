const L = require('./lib');
(async () => {
  const b = await L.chromium.launch();
  const { page } = await L.login(b, 'nandini.langalia');
  const r = await L.api(page,'GET','/roles'); L.save('roles', r.body);
  const roles = r.body.data.items || r.body.data;
  console.log(r.status, Array.isArray(roles)? roles.map(x=>x.name).join(','):JSON.stringify(r.body).slice(0,500));
  console.log(JSON.stringify(roles[0]).slice(0,1500));
  await b.close();
})();
