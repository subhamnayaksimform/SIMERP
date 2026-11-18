const {H}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d);
 const mine=new Set(['OPP-0345','OPP-0346','OPP-0347','OPP-0348','OPP-0349']);
 const l=(await A('GET','/opportunities/lookup')).body.data.filter(o=>/QA-AUTO/.test(o.title)&&o.status==='NO_LONGER_REQUIRED'&&o.requestType==='INTERVIEW'&&!mine.has(o.ticketNumber));
 console.log('to restore',l.length);
 for (const o of l) { const r=await A('PATCH','/opportunities/'+o.publicId+'/status',{status:'OPEN',isConfirmed:true}); console.log(o.ticketNumber,r.status,r.body.code,r.status>=400?r.body.message:''); }
 for (const t of ['OPP-0334','OPP-0335','OPP-0333','OPP-0313','OPP-0314','OPP-0317']) { const o=(await A('GET','/opportunities/openings?limit=100&withArchived=true&search='+t)).body.data.items; console.log(t,o[0]?.opportunity.status,JSON.stringify(o.map(s=>[s.stage,s.activeNomination?.employee?.name,s.activeNomination?.status]))); }
 await b.close(); })();
