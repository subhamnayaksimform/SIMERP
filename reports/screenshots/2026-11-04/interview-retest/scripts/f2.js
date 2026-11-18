const H = require('./h'); const fs = require('fs');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('f2');
  const v = await H.login(b, 'vihaan.chatterjee');
  const A = (m,p,d)=>H.api(v.page,m,p,d);
  const S = JSON.parse(fs.readFileSync('state.json')); const OPP = S.opp.publicId; const [PA, PB] = S.opp.positions.map(p=>p.publicId);
  const DEPT='50d6a999-05dd-455f-8264-8e2d9308bb7d';
  const short = (r)=>JSON.stringify(r.body).slice(0,260);
  const seats = async () => (await A('GET','/opportunities/openings?limit=100&search='+S.opp.ticketNumber)).body.data.items;
  const stats = async () => (await seats())[0].opportunity.stats;
  await R.step('pick', async () => {
    const r = await A('GET','/opportunities/candidates?limit=100&departmentPublicIds='+DEPT+'&positionPublicId='+PA);
    S.c = r.body.data.items.filter(i=>i.canNominate && !i.clientRejection && !(i.interviewOpportunities||[]).length).slice(0,8).map(i=>({id:i.publicId,name:i.name}));
    return S.c.map(c=>c.name);
  });
  await R.step('shortlist-3', async () => {
    const r = await A('POST','/opportunities/positions/'+PA+'/nominations',{candidates:S.c.slice(0,3).map(c=>({employeePublicId:c.id}))});
    return { s:r.status, m: short(r), stats: await stats() };
  });
  await R.step('dup-shortlist', async () => { const r = await A('POST','/opportunities/positions/'+PA+'/nominations',{candidates:[{employeePublicId:S.c[0].id}]}); return { s:r.status, code:r.body.code }; });
  await R.step('overfill-shortlist', async () => { const r = await A('POST','/opportunities/positions/'+PA+'/nominations',{candidates:S.c.slice(3,6).map(c=>({employeePublicId:c.id}))}); return { s:r.status, code:r.body.code, m:short(r), stats: await stats() }; });
  await R.step('seats', async () => (await seats()).map(s=>[s.seatId,s.stage,s.activeNomination?.employee?.name,s.activeNomination?.publicId]));
  fs.writeFileSync('state2.json', JSON.stringify(S,null,1));
  R.done(); await b.close();
})();
