const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const v = await H.login(b, 'vihaan.chatterjee');
  const rj = await H.api(v.page,'GET','/opportunities/openings/rejected?search=OPP-0335');
  const n = rj.body.data.items[0].nomination; console.log(n.employee?.name, n.rejectedByRole);
  const name = n.employee.name;
  // OPP-0344 position Dev A, any department
  const r = await H.api(v.page,'GET','/opportunities/candidates?limit=100&search='+encodeURIComponent(name)+'&positionPublicId=3bca05c3-d240-4960-bf65-2473726a7cbe');
  console.log(r.status, JSON.stringify((r.body.data?.items||[]).map(i=>({n:i.name, cr:i.clientRejection}))));
  const r2 = await H.api(v.page,'GET','/opportunities/candidates?limit=100&search='+encodeURIComponent(name)+'&positionPublicId=3bca05c3-d240-4960-bf65-2473726a7cbe&departmentPublicIds='+(n.employee.department?.publicId||''));
  console.log(r2.status, JSON.stringify((r2.body.data?.items||[]).map(i=>({n:i.name, cr:i.clientRejection}))));
  console.log(JSON.stringify(n.employee).slice(0,300));
  await b.close();
})();
