const {H}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d);
 const o=(await A('GET','/opportunities/openings?requestType=DIRECT&limit=100&search=OPP-0352')).body.data.items[0];
 console.log('allowed',o.allowedDirectStages);
 let r=await A('PATCH','/opportunities/openings/'+o.publicId+'/direct-stage',{targetStage:'IN_REVIEW'}); console.log('to IN_REVIEW',r.status,r.body.code,r.body.message);
 const o2=(await A('GET','/opportunities/openings?requestType=DIRECT&limit=100&search=OPP-0352')).body.data.items[0]; console.log('now',o2.directStage,o2.allowedDirectStages);
 for (const id of [o.publicId,'f9794847-f720-4019-9f44-94039aa74838']) { r=await A('PATCH','/opportunities/openings/'+id+'/cancel',{reason:'QA-AUTO cleanup'}); console.log('cancel',r.status,r.body.code); }
 await b.close(); })();
