const {H,as}=require('./lib3');
(async()=>{ const b=await H.chromium.launch(); const P=await as(b,'vihaan.chatterjee');
 for (const p of ['/opportunities/candidates?limit=100&includeContractors=true','/contractors?page=1&limit=100']) { const r=await P('GET',p); console.log(p, r.status, JSON.stringify(r.body?.data?.total ?? r.body?.data?.meta ?? '').slice(0,200), JSON.stringify((r.body?.data?.items||[]).slice(0,3).map(i=>[i.name||i.fullName,i.department?.name,i.isContractor])).slice(0,300)); }
 let all=[]; for(let pg=1;pg<6;pg++){ const r=await P('GET','/contractors?page='+pg+'&limit=100'); const it=r.body?.data?.items||r.body?.data||[]; if(!it.length)break; all=all.concat(it);} 
 console.log('contractors',all.length,'no dept:',all.filter(c=>!c.department&&!c.departmentPublicId).map(c=>c.name||c.fullName||c.firstName));
 const v=await P('GET','/app-version'); console.log('ver',v.status,JSON.stringify(v.body).slice(0,200));
 await b.close(); })();
