const {H,fs,QA,results,chk,as,notesFor,save}=require('./lib3'); const S=JSON.parse(fs.readFileSync('s2-state.json'));
(async()=>{ const b=await H.chromium.launch(); const P=await as(b,'vihaan.chatterjee'); const code=r=>r.body?.code;
 const I=await as(b,'iti.trivedi');
 let ns=await notesFor(I,new Date(S.D.d2.t)); fs.writeFileSync('d2-notifications.json',JSON.stringify(ns,null,1));
 console.log(ns.map(n=>[n.createdAt,n.eventType,n.title,n.body||n.message]));
 const rn=ns.find(n=>/reject/i.test(JSON.stringify([n.eventType,n.title,n.body,n.message])));
 chk('2.direct','reject from Awaiting: employee gets rejection notification',!!rn,ns.map(n=>[n.eventType,n.title,n.body||n.message]));
 const linkish=rn?JSON.stringify(rn).match(/"(actionUrl|link|url|redirectUrl|deepLink|path|href|route)":\s*"[^"]*"/gi):null;
 chk('2.direct','rejection notification carries no link to the ticket',rn&&!(linkish||[]).some(l=>/pre-sales|opportunit|OPP-/i.test(l)),{linkish,keys:rn&&Object.keys(rn),ctx:rn&&JSON.stringify(rn.context||rn.metadata||rn.data||{}).slice(0,300)});
 chk('2.direct','rejection notification hides the reason',rn&&!/QA T1692 reject from awaiting/.test(JSON.stringify(rn)),rn&&(rn.body||rn.message));
 // d3 for board check
 const PROJ='a8869918-6732-4886-9153-8dfa5b06c79a';
 const cand=(await P('GET','/opportunities/candidates?limit=100&departmentPublicIds='+QA)).body.data.items; const id=e=>cand.find(c=>c.email===e+'@simformsolutions.com').publicId;
 const U='swati.malhotra'; const E=await as(b,U); const t=new Date(Date.now()-2000);
 let r=await P('POST','/opportunities',{title:'QA-AUTO T1692 direct d3',clientType:'EXISTING',requestType:'DIRECT',clientName:'AnalytixHub',projectPublicId:PROJ,positions:[{title:'T1692 Direct',techStacks:['Manual Testing'],departmentPublicIds:[QA],preferredSeniority:'MID',allocationType:'FIXED',allocationPercentage:10,tentativeAllocationDate:'2027-02-01',employeePublicId:id(U),priority:'LOW',isAllocationConfirmed:false}]});
 const O=r.body.data; const op=(await P('GET','/opportunities/openings?requestType=DIRECT&limit=100&search='+O.ticketNumber)).body.data.items[0];
 S.D.d3={opp:O.publicId,T:O.ticketNumber,u:U,op:op.publicId,t};
 await P('PATCH','/opportunities/openings/'+op.publicId+'/direct-stage',{targetStage:'IN_REVIEW'});
 r=await P('PATCH','/opportunities/openings/'+op.publicId+'/direct-stage',{targetStage:'AWAITING'}); chk('2.direct','d3 -> AWAITING',r.status===200,[r.status,code(r)]);
 await new Promise(r=>setTimeout(r,2500));
 const out={}; for(const q of ['view=MINE','view=MINE&requestType=DIRECT','requestType=DIRECT','']){ const x=await E('GET','/opportunities/openings?limit=100&'+q); out[q||'(none)']=[x.status,(x.body.data?.items||[]).map(i=>i.opportunity?.ticketNumber)]; }
 const x=await E('GET','/opportunities/openings/direct-stage-counts?view=MINE'); out.counts=[x.status,JSON.stringify(x.body.data).slice(0,200)];
 console.log(out);
 r=await E('GET','/opportunities/'+O.publicId); 
 chk('2.direct','AWAITING (cleared): employee opens Direct ticket detail',r.status===200,[r.status,code(r)]);
 chk('2.direct','AWAITING (cleared): Direct ticket appears in employee board (any query)',Object.values(out).some(v=>Array.isArray(v[1])&&v[1].includes(O.ticketNumber)),out);
 fs.writeFileSync('s2-state.json',JSON.stringify(S,null,1)); save('s2e-results'); await b.close(); })().catch(e=>console.error('CRASH',e));
