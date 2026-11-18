const H=require('./h');
(async()=>{
 const b=await H.chromium.launch(); const v=await H.login(b,'ceo'); const A=(m,p)=>H.api(v.page,m,p);
 let r=await A('GET','/contractors?limit=100'); const it=r.body.data?.items||r.body.data||[];
 console.log('contractors',r.status,r.body.data?.total, it.map(c=>[c.name,c.email,c.department?.name||null,c.publicId]).slice(0,60));
 r=await A('GET','/teams-webhook-configs?limit=100'); console.log('webhooks',r.status,JSON.stringify(r.body).slice(0,3000));
 await b.close();
})();
