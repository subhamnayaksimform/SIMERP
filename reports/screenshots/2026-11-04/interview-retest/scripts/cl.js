const {H}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d);
 const o=(await A('GET','/opportunities/openings?requestType=DIRECT&limit=100&search='+encodeURIComponent('QA-AUTO I633'))).body.data.items;
 for(const s of o){ const r=await A('PATCH','/opportunities/openings/'+s.publicId+'/cancel',{reason:'QA-AUTO cleanup I633 retest'}); console.log(s.opportunity.ticketNumber,s.opportunity.clientType,JSON.stringify(s.opportunity.project),r.status); }
 await b.close(); })();
