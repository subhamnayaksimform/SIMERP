const H = require('./h'); const fs = require('fs');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('f1');
  const v = await H.login(b, 'vihaan.chatterjee');
  const A = (m,p,d)=>H.api(v.page,m,p,d);
  const DEPT='50d6a999-05dd-455f-8264-8e2d9308bb7d';
  const pos = (t,n,extra={}) => ({ title:t, techStacks:['Java'], departmentPublicIds:[DEPT], requiredCount:n, priority:'MEDIUM', preferredSeniority:'MID', allocationType:'FIXED', allocationPercentage:20, tentativeAllocationDate:'2026-12-01', roundTitles:['R1: Tech'], ...extra });
  const base = { title:'QA-AUTO full module retest 04-11', clientType:'PROSPECT', requestType:'INTERVIEW', clientName:'QA-AUTO Full Retest Client', jobDescription:'<p>QA</p>', positions:[pos('FR Java A',3), pos('FR Java B',1)] };
  const S = {};
  await R.step('create', async () => { const r = await A('POST','/opportunities',base); S.opp = r.body.data; return { s:r.status, t:S.opp?.ticketNumber, id:S.opp?.publicId, pos:S.opp?.positions?.map(p=>[p.publicId,p.requiredCount]), m:r.status>=400?JSON.stringify(r.body).slice(0,300):'' }; });
  fs.writeFileSync('state.json', JSON.stringify({opp:S.opp},null,1));
  await R.step('negatives', async () => {
    const t = async (n, body) => { const r = await A('POST','/opportunities',body); return [n, r.status, r.body.code]; };
    return [
      await t('empty title', {...base,title:''}),
      await t('spaces title', {...base,title:'   '}),
      await t('no positions', {...base,positions:[]}),
      await t('count 0', {...base,positions:[pos('x',0)]}),
      await t('count 9999', {...base,positions:[pos('x',9999)]}),
      await t('bad website', {...base,websiteUrl:'notaurl'}),
      await t('end<start', {...base,positions:[pos('x',1,{tentativeAllocationEndDate:'2026-11-01'})]}),
      await t('pct 0', {...base,positions:[pos('x',1,{allocationPercentage:0})]}),
      await t('pct 150', {...base,positions:[pos('x',1,{allocationPercentage:150})]}),
      await t('no dept', {...base,positions:[pos('x',1,{departmentPublicIds:[]})]}),
    ];
  });
  await R.step('candidates', async () => {
    const r = await A('GET','/opportunities/candidates?limit=100&departmentPublicIds='+DEPT+'&positionPublicId='+S.opp.positions[0].publicId);
    const it = r.body.data.items; S.cands = it.slice(0,8).map(i=>({id:i.publicId||i.employeePublicId, name:i.name, keys:Object.keys(i).slice(0,25)}));
    return { n: it.length, first: S.cands.slice(0,3) };
  });
  R.done(); await b.close();
})();
