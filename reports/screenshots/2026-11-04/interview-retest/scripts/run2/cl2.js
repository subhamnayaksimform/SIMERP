const {H}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d);
 const l=(await A('GET','/opportunities/lookup')).body.data.filter(o=>+o.ticketNumber.slice(4)>361&&/QA-AUTO/.test(o.title));
 for(const o of l){ if(o.requestType==='INTERVIEW'){ const r=await A('PATCH','/opportunities/'+o.publicId+'/status',{status:'NO_LONGER_REQUIRED',isConfirmed:true}); console.log(o.ticketNumber,o.requestType,r.status); }
  else { const s=(await A('GET','/opportunities/openings?requestType=DIRECT&limit=100&search='+o.ticketNumber)).body.data.items[0]; const r=s&&await A('PATCH','/opportunities/openings/'+s.publicId+'/cancel',{reason:'QA-AUTO cleanup'}); console.log(o.ticketNumber,'DIRECT',r&&r.status); } }
 console.log('cleaned',l.length); await b.close(); })();
