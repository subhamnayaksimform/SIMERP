const {H,fs}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d);
 const mine=new Set(['OPP-0345','OPP-0346','OPP-0347','OPP-0348','OPP-0349']); const ids={};
 for (let p=1;p<=6;p++){ const r=await A('GET','/opportunities/openings?limit=100&page='+p+'&withArchived=true&opportunityStatuses=NO_LONGER_REQUIRED&search=QA-AUTO'); const it=r.body.data?.items||[]; it.forEach(s=>{ids[s.opportunity.ticketNumber]=s.opportunity.publicId}); if(it.length<100)break; }
 console.log(Object.keys(ids).length, Object.keys(ids).join(' ')); fs.writeFileSync('nlr-ids.json',JSON.stringify(ids));
 const t='OPP-0333'; const r=await A('PATCH','/opportunities/'+ids[t]+'/status',{status:'OPEN',isConfirmed:true}); console.log(t,r.status,r.body.code,r.body.message);
 const o=(await A('GET','/opportunities/openings?limit=100&withArchived=true&search='+t)).body.data.items; console.log(o[0]?.opportunity.status,JSON.stringify(o.map(s=>[s.stage,s.activeNomination?.employee?.name,s.activeNomination?.status])));
 await b.close(); })();
