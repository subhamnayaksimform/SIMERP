const {H}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d);
 const l=(await A('GET','/opportunities/lookup')).body.data.filter(o=>/QA-AUTO/.test(o.title)&&o.status==='OPEN'&&o.requestType==='INTERVIEW');
 for (const o of l) { const r=await A('PATCH','/opportunities/'+o.publicId+'/status',{status:'NO_LONGER_REQUIRED',isConfirmed:true}); console.log(o.ticketNumber,o.title,r.status); }
 await b.close(); })();
