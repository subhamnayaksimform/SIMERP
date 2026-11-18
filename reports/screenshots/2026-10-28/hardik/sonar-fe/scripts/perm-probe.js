const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const { page } = await H.login(b, 'smit.shah');
  const me = await H.api(page, 'GET', '/employees/permissions');
  const s = JSON.stringify(me.body);
  console.log("perm", JSON.stringify(me.body.data.rules.filter(r => /roles|assign_roles/.test(r[1]))));
  const r = await H.api(page, 'GET', '/roles');
  const roles = (r.body.data || r.body).roles || r.body.data || [];
  console.log('roles', r.status, JSON.stringify(roles).slice(0, 200));
  await b.close();
})();
