const H = require('./h'); const fs = require('fs');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('f5');
  const S = JSON.parse(fs.readFileSync('state3.json')); const [PA, PB] = S.opp.positions.map(p=>p.publicId); const T=S.opp.ticketNumber;
  const v = await H.login(b, 'vihaan.chatterjee');
  const A = (m,p,d)=>H.api(v.page,m,p,d);
  const nominate = async () => { const r=await A('POST','/opportunities/positions/'+PB+'/nominations',{candidates:[{employeePublicId:S.c[7].id}]}); return r; };
  await R.step('seed-nomination', async () => { const r=await nominate(); return {s:r.status,c:r.body.code}; });
  const seat = async () => (await A('GET','/opportunities/openings?limit=100&search='+T)).body.data.items.find(s=>s.activeNomination?.employee?.name==='Yatharth Malhotra');
  await R.step('role-matrix', async () => {
    const out = {};
    const nid = (await seat()).activeNomination.publicId;
    for (const u of ['ceo','tarun.sharma','kunal.jadeja','sudhansu.patel','kashyap.patel','bhumi.chauhan','hardik.trivedi']) {
      const c = await H.login(b, u);
      const board = await H.api(c.page,'GET','/opportunities/openings?limit=5&search='+T);
      const rel = await H.api(c.page,'POST','/opportunities/nominations/'+nid+'/release',{reason:''});   // validation 400 means permitted, 403 means denied
      const cls = await H.api(c.page,'POST','/opportunities/positions/'+PB+'/close',{reason:''});
      const crt = await H.api(c.page,'POST','/opportunities',{});
      out[u] = {board:board.status, release:rel.status, close:cls.status, create:crt.status};
      await c.ctx.close();
    }
    return out;
  });
  await R.step('rounds', async () => {
    const id = (await seat()).activeNomination.publicId;
    const mk = async (b2)=>H.api(v.page,'POST','/opportunities/nominations/'+id+'/rounds',b2);
    const e = await mk({title:''}); const r1 = await mk({title:'QA R1', interviewer:'QA Bot'}); const r2 = await mk({title:'QA R2'});
    const rounds = (await seat()).activeNomination.interviewRounds;
    let del=null; if (rounds?.[0]) del = await A('DELETE','/opportunities/rounds/'+rounds[0].publicId);
    const past = await mk({title:'past', scheduledAt:'2020-01-01T10:00:00Z'});
    return {empty:[e.status,e.body.code], r1:[r1.status], r2:[r2.status], n:rounds?.length, del:del?.status, past:[past.status,past.body.code]};
  });
  await R.step('cleanup-release', async () => { const id=(await seat()).activeNomination.publicId; const r=await A('POST','/opportunities/nominations/'+id+'/release',{reason:'QA cleanup'}); return {s:r.status}; });
  R.done(); await b.close();
})();
