const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const v = await H.login(b, 'vihaan.chatterjee');
  const rj = await H.api(v.page,'GET','/opportunities/openings/rejected?search=OPP-0335');
  const items = rj.body.data?.items || [];
  console.log(rj.status, items.length, JSON.stringify(items.slice(0,6).map(i=>({seat:i.seatId, n:i.activeNomination?.employee?.name||i.employee?.name, st:i.activeNomination?.status||i.status, by:i.activeNomination?.rejectedByRole||i.rejectedByRole, keys:Object.keys(i).slice(0,8)}))));
  for (const nm of ['Kamal Malhotra']) {
    const r = await H.api(v.page,'GET','/opportunities/candidates?limit=100&search='+encodeURIComponent(nm)+'&positionPublicId=3bca05c3-d240-4960-bf65-2473726a7cbe');
    console.log(nm, r.status, JSON.stringify((r.body.data?.items||[]).map(i=>({n:i.name, cr:i.clientRejection})),null,0).slice(0,800));
  }
  await b.close();
})();
