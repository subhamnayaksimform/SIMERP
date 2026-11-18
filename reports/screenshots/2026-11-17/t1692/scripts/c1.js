const {H,as}=require('./lib3');
(async()=>{ const b=await H.chromium.launch(); const A=await as(b,'ceo');
 let all=[],tot; for(let p=1;p<=5;p++){ const r=await A('GET','/employees?limit=100&page='+p+'&filters='+encodeURIComponent(JSON.stringify({isContractor:true}))); if(p===1) console.log(r.status,r.body.message,JSON.stringify(r.body.errors||'')); const it=r.body.data?.items||r.body.data?.employees||[]; tot=r.body.data?.total; all.push(...it); if(it.length<100) break; }
 console.log('contractors via employees',all.length,tot);
 const nd=all.filter(e=>!e.department && !e.departmentName); console.log('no dept',nd.map(e=>[e.name,e.email,e.publicId,JSON.stringify(e.department)]));
 if(all[0]) console.log(Object.keys(all[0]).join(','));
 const c=await A('GET','/contractors?limit=100&page=1'); console.log('contractors total now',c.body.data?.total);
 await b.close(); })();
