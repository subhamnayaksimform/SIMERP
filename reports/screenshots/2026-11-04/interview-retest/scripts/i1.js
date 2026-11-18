const {H,fs}=require('./lib2'); const S=JSON.parse(fs.readFileSync('S2.json'));
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d);
 const d=(await A('GET','/opportunities/'+S.opp.publicId)).body.data; console.log('status',d.status, d.positions.map(p=>[p.title,p.requiredCount,p.closedAt,p.publicId===S.PA?'PA':'PB']));
 const o=(await A('GET','/opportunities/openings?limit=100&search='+S.T)).body.data; console.log('openings',o.items.length, o.items.map(s=>[s.seatId,s.position.title,s.stage,s.activeNomination?.employee?.name]));
 console.log('cand0',S.c[0].name);
 const h=await A('GET','/opportunities/openings/rejected?search='+S.T); console.log(JSON.stringify(h.body.data.items.map(i=>[i.nomination?.employee?.name,i.nomination?.status])));
 await b.close(); })();
