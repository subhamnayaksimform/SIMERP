const {H,as}=require('./lib3');
(async()=>{ const b=await H.chromium.launch(); const P=await as(b,'vihaan.chatterjee'); const nd=[]; let n=0;
 for(let p=1;p<=40;p++){ const r=await P('GET','/opportunities/candidates?limit=100&page='+p); const it=r.body.data?.items||[]; n+=it.length; nd.push(...it.filter(i=>!i.department).map(i=>[i.name,i.email,i.isContractor])); if(it.length<100) break; }
 console.log('scanned',n,'no department:',nd);
 const c=await as(b,'ceo'); const r=await c('GET','/contractors/past?limit=100'); console.log('past contractors',r.body.data?.total,(r.body.data?.items||[]).filter(x=>!x.department).map(x=>[x.name,x.email]).slice(0,10));
 await b.close(); })();
