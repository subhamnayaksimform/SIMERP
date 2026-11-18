const {H,fs,DEPT,pos}=require('./lib2'); const S=JSON.parse(fs.readFileSync('S3.json'));
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d);
 let r=await A('POST','/opportunities/positions/'+S.PX+'/prep-materials',{title:'Node bank',url:'https://example.com/prep.pdf'}); console.log('add',r.status,JSON.stringify(r.body.data).slice(0,300));
 const d=(await A('GET','/opportunities/'+S.opp.publicId)).body.data; const pm=d.positions[0].prepMaterials; console.log('mats',JSON.stringify(pm));
 if(pm[0]){ r=await A('PATCH','/opportunities/prep-materials/'+pm[0].publicId,{title:'v2'}); console.log('patch',r.status,r.body.code); r=await A('DELETE','/opportunities/prep-materials/'+pm[0].publicId); console.log('del',r.status,r.body.code);}
 for (const l of [10,20,25,50]) { r=await A('GET','/opportunities/openings?limit='+l+'&page=2'); console.log('limit',l,r.status,r.body.code, r.body.data?.page); }
 const c=(await A('GET','/opportunities/openings/stage-counts')).body.data; const tot=(await A('GET','/opportunities/openings?limit=100')).body.data; console.log('counts',JSON.stringify(c),'board total',tot.total,'opportunityCount',tot.opportunityCount);
 const arch=(await A('GET','/opportunities/openings?limit=100&withArchived=true')).body.data.total; console.log('withArchived total',arch);
 const nlr=(await A('GET','/opportunities/openings?limit=100&stages=NO_LONGER_REQUIRED')).body.data.total; console.log('NLR stage filter total',nlr);
 await b.close(); })();
