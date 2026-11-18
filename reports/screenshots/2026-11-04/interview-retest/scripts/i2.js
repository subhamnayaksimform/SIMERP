const {H,fs}=require('./lib2'); const S=JSON.parse(fs.readFileSync('S3.json'));
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d);
 for (const q of ['','&withArchived=true','&opportunityStatuses=OPEN']) { const o=(await A('GET','/opportunities/openings?limit=100&search='+S.T+q)).body.data; console.log(q||'default',o.items.length,JSON.stringify(o.items.map(s=>[s.seatId,s.stage,s.activeNomination?.employee?.name,s.position.closedAt?'closed':'open']))); }
 const d=(await A('GET','/opportunities/'+S.opp.publicId)).body.data; console.log(d.status,d.positions.map(p=>[p.title,p.closedAt,p.requiredCount]));
 const rj=(await A('GET','/opportunities/openings/rejected?search='+S.T)).body.data.items; console.log(JSON.stringify(rj.map(i=>[i.nomination?.employee?.name,i.nomination?.status,i.stage])));
 const sc=(await A('GET','/opportunities/openings/stage-counts?search='+S.T)).body.data; console.log(JSON.stringify(sc));
 await b.close(); })();
