const { chromium, login, api, save } = require('./lib');
(async () => {
  const b = await chromium.launch();
  const out = {};
  for (const u of process.argv.slice(2)) {
    try {
      const { ctx, page } = await login(b, u);
      const perm = await api(page, 'GET', '/employees/permissions');
      const rules = (perm.body && perm.body.data && perm.body.data.rules) || [];
      const has = (a, s) => rules.some(r => r[0] === a && r[1] === s) || rules.some(r=>r[0]==='manage'&&r[1]==='all');
      const roles = perm.body && perm.body.data && (perm.body.data.roles || perm.body.data.roleNames);
      out[u] = { url: page.url(), n: rules.length, roles, rbac: has('read','roles_and_permissions'), rbacUpd: has('update','roles_and_permissions'), emp: has('read','employees'), proj: has('read','projects'), team: has('read','teams'), alloc_corr: rules.filter(r=>/correction/.test(r[1])).map(r=>r.join(':')), wu: rules.filter(r=>/weekly/.test(r[1])).map(r=>r.join(':')), dept: has('read','departments'), keys: Object.keys(perm.body.data||{}) };
      console.log(u, JSON.stringify(out[u]));
      await ctx.close();
    } catch (e) { console.log(u, 'ERR', e.message); }
  }
  save('probe-' + Date.now(), out);
  await b.close();
})();
