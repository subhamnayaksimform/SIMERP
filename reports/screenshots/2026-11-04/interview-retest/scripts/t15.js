const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const v = await H.login(b, 'vihaan.chatterjee');
  const rj = await H.api(v.page,'GET','/opportunities/openings/rejected?search=OPP-0335');
  console.log(JSON.stringify(rj.body.data.items[0].nomination).slice(0,600));
  const all = await H.api(v.page,'GET','/opportunities/openings?search=OPP-0335&limit=100');
  console.log(JSON.stringify(all.body.data.items.map(i=>({s:i.seatId, st:i.stage, e:i.activeNomination?.employee?.name}))));
  await b.close();
})();
