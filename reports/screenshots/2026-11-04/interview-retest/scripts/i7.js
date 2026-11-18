const {H}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d);
 const o=(await A('GET','/opportunities/openings?requestType=DIRECT&limit=100&withArchived=true&search='+encodeURIComponent('QA-AUTO E2E direct'))).body.data.items;
 for (const s of o) console.log(s.opportunity.ticketNumber,s.opportunity.status,s.opportunity.clientType,s.opportunity.clientName,JSON.stringify(s.opportunity.project),s.directStage,s.position.isAllocationConfirmed,s.activeNomination?.employee?.name,s.cancellation&&'cancelled',s.publicId);
 await b.close(); })();
