const {H,fs,QA,results,chk,pos,as,notesFor,save}=require('./lib3');
const S=JSON.parse(fs.readFileSync('s2-state.json'));
(async()=>{
 const b=await H.chromium.launch(); const P=await as(b,'vihaan.chatterjee'); const code=r=>r.body?.code;
 const E={}; for(const u of ['punit.patil','sneha.yadav','deepak.contractor','iti.trivedi']) E[u]=await as(b,u);
 const seats=async()=>(await P('GET','/opportunities/openings?limit=100&search='+S.T)).body.data.items;
 const sn=(await seats()).find(s=>s.activeNomination?.employee?.name==='Sneha Yadav')?.activeNomination;
 let r=await P('POST','/opportunities/nominations/'+sn.publicId+'/release',{reason:'QA T1692 release before delete'}); chk('2.delete','PMO releases cleared Sneha from B',r.status===200,[r.status,code(r),r.body.message]);
 const t2=new Date(Date.now()-2000);
 r=await P('DELETE','/opportunities/positions/'+S.PB); chk('2.delete','PMO deletes Position B (Punit still awaiting approval)',r.status===200,[r.status,code(r),r.body.message]);
 await new Promise(r=>setTimeout(r,3000));
 let ns=await notesFor(E['punit.patil'],t2); chk('2.delete','delete position: Punit (awaiting approval) is NOT notified',ns.length===0,ns.map(n=>[n.eventType,n.title]));
 ns=await notesFor(E['punit.patil'],new Date(S.t0)); chk('2.delete','Punit never heard anything about the ticket',ns.length===0,ns.map(n=>[n.eventType,n.title]));
 // DIRECT
 const PROJ='a8869918-6732-4886-9153-8dfa5b06c79a';
 const cand=(await P('GET','/opportunities/candidates?limit=100&departmentPublicIds='+QA)).body.data.items; const id=e=>cand.find(c=>c.email===e+'@simformsolutions.com').publicId;
 const dpos=(e)=>({title:'T1692 Direct',techStacks:['Manual Testing'],departmentPublicIds:[QA],preferredSeniority:'MID',allocationType:'FIXED',allocationPercentage:10,tentativeAllocationDate:'2027-02-01',employeePublicId:e,priority:'LOW',isAllocationConfirmed:false});
 const D={};
 for(const [k,u] of [['d1','deepak.contractor'],['d2','iti.trivedi']]){
  const t=new Date(Date.now()-2000);
  r=await P('POST','/opportunities',{title:'QA-AUTO T1703 direct '+k,clientType:'EXISTING',requestType:'DIRECT',clientName:'AnalytixHub',projectPublicId:PROJ,positions:[dpos(id(u))]});
  chk('2.direct',`Direct ticket ${k} created for ${u}`,r.status===201,[r.status,code(r),r.body.message]); const O=r.body.data; D[k]={opp:O.publicId,T:O.ticketNumber,u,t};
  const op=(await P('GET','/opportunities/openings?requestType=DIRECT&limit=100&search='+O.ticketNumber)).body.data.items[0]; D[k].op=op.publicId;
  await new Promise(r=>setTimeout(r,2000));
  ns=await notesFor(E[u],t); chk('2.direct',`${k} OPEN: ${u} gets no notification`,ns.length===0,ns.map(n=>[n.eventType,n.title]));
  r=await E[u]('GET','/opportunities/'+O.publicId); chk('2.direct',`${k} OPEN: ${u} detail 403`,r.status===403,[r.status,code(r)]);
  r=await P('PATCH','/opportunities/openings/'+op.publicId+'/direct-stage',{targetStage:'IN_REVIEW'}); chk('2.direct',`${k} -> IN_REVIEW`,r.status===200,[r.status,code(r),r.body.message]);
  await new Promise(r=>setTimeout(r,2000));
  ns=await notesFor(E[u],t); const bm=(await E[u]('GET','/opportunities/openings?view=MINE&limit=100')).body.data.items.map(i=>i.opportunity?.publicId);
  chk('2.direct',`${k} IN_REVIEW: ${u} no notification, not on board`,ns.length===0&&!bm.includes(O.publicId),{n:ns.map(n=>n.eventType),board:bm.includes(O.publicId)});
 }
 // d1 reject from IN_REVIEW
 let t=new Date(Date.now()-2000);
 r=await P('PATCH','/opportunities/openings/'+D.d1.op+'/direct-stage',{targetStage:'REJECTED',reason:'QA T1692 reject in review'}); chk('2.direct','d1 rejected from IN_REVIEW',r.status===200,[r.status,code(r),r.body.message]);
 await new Promise(r=>setTimeout(r,3000));
 ns=await notesFor(E['deepak.contractor'],D.d1.t); chk('2.direct','reject from In Review: employee hears nothing',ns.length===0,ns.map(n=>[n.eventType,n.title]));
 r=await E['deepak.contractor']('GET','/opportunities/'+D.d1.opp); chk('2.direct','reject from In Review: employee cannot open it (403/404)',[403,404].includes(r.status),[r.status,code(r)]);
 // d2 -> AWAITING
 r=await P('PATCH','/opportunities/openings/'+D.d2.op+'/direct-stage',{targetStage:'AWAITING'}); chk('2.direct','d2 -> AWAITING',r.status===200,[r.status,code(r),r.body.message]);
 await new Promise(r=>setTimeout(r,3000));
 ns=await notesFor(E['iti.trivedi'],D.d2.t); const bm=(await E['iti.trivedi']('GET','/opportunities/openings?view=MINE&limit=100')).body.data.items.map(i=>i.opportunity?.publicId);
 r=await E['iti.trivedi']('GET','/opportunities/'+D.d2.opp);
 chk('2.direct','AWAITING (cleared): employee now sees it on board + opens it',bm.includes(D.d2.opp)&&r.status===200,{board:bm.includes(D.d2.opp),status:r.status});
 chk('2.direct','AWAITING: employee notified (record)',ns.length>=1,ns.map(n=>[n.eventType,n.title]));
 t=new Date(Date.now()-1500);
 r=await P('PATCH','/opportunities/openings/'+D.d2.op+'/direct-stage',{targetStage:'REJECTED',reason:'QA T1692 reject from awaiting'}); chk('2.direct','d2 rejected from AWAITING',r.status===200,[r.status,code(r),r.body.message]);
 await new Promise(r=>setTimeout(r,3000));
 const raw=await E['iti.trivedi']('GET','/notifications?page=1&limit=20'); const items=(raw.body.data?.items||raw.body.data||[]).filter(n=>new Date(n.createdAt)>=t);
 fs.writeFileSync('d2-rejection-notification.json',JSON.stringify(items,null,1));
 chk('2.direct','reject from Awaiting: employee gets rejection notification',items.some(n=>/reject/i.test(n.eventType+n.title)),items.map(n=>[n.eventType,n.title]));
 const rn=items.find(n=>/reject/i.test(n.eventType+n.title)); const linkish=rn?JSON.stringify(rn).match(/"(actionUrl|link|url|redirectUrl|deepLink|path)":"[^"]*"/g):null;
 chk('2.direct','rejection notification carries no link to the ticket',rn&&!(linkish||[]).some(l=>/pre-sales|opportunit/i.test(l)),linkish);
 chk('2.direct','rejection notification shows no rejection reason',rn&&!/QA T1692 reject from awaiting/.test(JSON.stringify(rn)),rn?.body||rn?.message);
 fs.writeFileSync('s2-state.json',JSON.stringify({...S,D},null,1)); save('s2b-results'); await b.close();
})().catch(e=>console.error('CRASH',e));
