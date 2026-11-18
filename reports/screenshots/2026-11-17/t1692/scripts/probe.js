const H=require('./h');
(async()=>{
 const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p)=>H.api(v.page,m,p);
 const me=await A('GET','/auth/me'); console.log('me',me.status,JSON.stringify(me.body).slice(0,300));
 let r=await A('GET','/opportunities/candidates?limit=100&includeContractors=true');
 console.log('contractors-only',r.status,r.body.data?.meta||r.body.data?.total, JSON.stringify(r.body).slice(0,200));
 const items=r.body.data?.items||[]; console.log(items.length, items.slice(0,15).map(i=>[i.name,i.email,i.isContractor,i.department?.name||null,i.canNominate]));
 r=await A('GET','/opportunities/candidates?limit=5&departmentPublicIds=50d6a999-05dd-455f-8264-8e2d9308bb7d');
 console.log('dept only sample',r.body.data?.items?.slice(0,3).map(i=>[i.name,i.isContractor,i.department?.name]));
 r=await A('GET','/teams-webhook-configs?limit=100'); console.log('webhooks',r.status,JSON.stringify(r.body).slice(0,2500));
 r=await A('GET','/departments?limit=100'); console.log('depts',r.status,JSON.stringify((r.body.data?.items||r.body.data||[]).map?.(d=>[d.name,d.publicId])).slice(0,1500));
 await b.close();
})();
