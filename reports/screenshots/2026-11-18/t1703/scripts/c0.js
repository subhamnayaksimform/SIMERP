const {H,as,QA}=require('./lib3');
(async()=>{ const b=await H.chromium.launch(); const A=await as(b,'ceo'); const P=await as(b,'vihaan.chatterjee');
 let nd=[]; for(let p=1;p<=3;p++){ const r=await A('GET','/contractors?limit=100&page='+p); nd.push(...(r.body.data?.items||[]).filter(c=>!c.department).map(c=>[c.name,c.email,c.publicId])); }
 console.log('contractors list, no dept:',nd);
 const r=await P('GET','/opportunities/candidates?limit=100&includeContractors=true'); console.log('picker no-dept',r.status,r.body.data?.total,(r.body.data?.items||[]).map(i=>[i.name,i.email,i.isContractor,i.department,i.publicId,i.canNominate]));
 await b.close(); })();
