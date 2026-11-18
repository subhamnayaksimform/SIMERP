const {H,fs,DEPT,results,chk,pos,save}=require('./lib2');
(async()=>{
 const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d); const tm=await H.login(b,'mehul.pandya');
 const code=r=>r.body?.code; const S={};
 let r=await A('POST','/opportunities',{title:'QA-AUTO E2E rounds 04-11',clientType:'PROSPECT',requestType:'INTERVIEW',clientName:'QA-AUTO E2E Client',jobDescription:'<p>jd</p>',positions:[pos('RD A',2),pos('RD B',1)]});
 S.opp=r.body.data; const T=S.opp.ticketNumber; const [PA,PB]=S.opp.positions.map(p=>p.publicId); S.PA=PA;S.PB=PB;S.T=T;
 const seats=async()=>(await A('GET','/opportunities/openings?limit=100&search='+T)).body.data.items;
 const stats=async()=>(await seats())[0]?.opportunity.stats; const byName=async n=>(await seats()).find(s=>s.activeNomination?.employee?.name===n);
 const cr=await A('GET','/opportunities/candidates?limit=100&departmentPublicIds='+DEPT+'&positionPublicId='+PA);
 S.c=cr.body.data.items.filter(i=>i.canNominate&&!i.clientRejection&&!(i.interviewOpportunities||[]).length&&!['Mehul Pandya'].includes(i.name)).slice(12,20).map(i=>({id:i.publicId,name:i.name}));
 await A('POST','/opportunities/positions/'+PA+'/nominations',{candidates:[{employeePublicId:S.c[0].id},{employeePublicId:S.c[1].id}]});
 await A('POST','/opportunities/positions/'+PB+'/nominations',{candidates:[{employeePublicId:S.c[2].id}]});
 const nid=async i=>(await byName(S.c[i].name)).activeNomination.publicId; const oid=async i=>(await byName(S.c[i].name)).publicId;
 const stage=async i=>(await byName(S.c[i].name))?.stage;
 // approval: PMO request, TM approves
 r=await A('POST','/opportunities/nominations/'+await nid(0)+'/request-approval'); chk('approval','request',r.status===200,[r.status,code(r)]);
 r=await H.api(tm.page,'POST','/opportunities/nominations/'+await nid(0)+'/approve'); chk('approval','TM approves PMO request',r.status===200,[r.status,code(r),r.body.message]);
 chk('approval','stage BEING_PREPARED after TM approval',await stage(0)==='BEING_PREPARED',await stage(0));
 let nom=(await byName(S.c[0].name)).activeNomination; chk('rounds','planned rounds seeded on approval (2)',nom.interviewRounds?.length===2,nom.interviewRounds?.map(x=>x.title));
 // TM request path: TM can't request for candidate they didn't shortlist -> 403 expected OPP_105
 r=await H.api(tm.page,'POST','/opportunities/nominations/'+await nid(1)+'/request-approval'); chk('approval','TM cannot send a PMO-shortlisted candidate (OPP_105)',r.status===403,[r.status,code(r)]);
 r=await H.api(tm.page,'POST','/opportunities/nominations/'+await nid(1)+'/reject',{reason:'TM no'}); chk('reject','TM rejects (not own approver, record)',[200,403,404].includes(r.status),[r.status,code(r)]);
 // rounds
 let rounds=nom.interviewRounds; const ids=rounds.map(x=>x.publicId);
 r=await A('PATCH','/opportunities/nominations/'+await nid(0)+'/rounds/order',{roundPublicIds:[ids[1],ids[0]]}); chk('rounds','reorder both rounds',r.status===200,[r.status,code(r),r.body.message]);
 r=await A('PATCH','/opportunities/nominations/'+await nid(0)+'/rounds/order',{roundPublicIds:[ids[0]]}); chk('rounds','reorder missing a round refused (OPP_141)',r.status===400,[r.status,code(r)]);
 nom=(await byName(S.c[0].name)).activeNomination; rounds=nom.interviewRounds; const R1=rounds[0].publicId,R2=rounds[1].publicId;
 const tomorrow=new Date(Date.now()+86400000).toISOString(), yday=new Date(Date.now()-86400000).toISOString();
 r=await A('PATCH','/opportunities/rounds/'+R1,{scheduledAt:tomorrow,interviewer:'QA Bot'}); chk('rounds','schedule round 1 (tomorrow)',r.status===200,[r.status,code(r),r.body.message]);
 chk('stage','stage auto INTERVIEW_SCHEDULED',await stage(0)==='INTERVIEW_SCHEDULED',await stage(0));
 r=await A('PATCH','/opportunities/rounds/'+R1,{outcome:'PASSED'}); chk('rounds','PASSED on a future date refused',r.status===400,[r.status,code(r),r.body.message]);
 r=await A('PATCH','/opportunities/openings/'+await oid(0)+'/stage',{targetStage:'BEING_PREPARED',isConfirmed:true}); chk('stage','move back to BEING_PREPARED clears schedule',r.status===200&&await stage(0)==='BEING_PREPARED',[r.status,code(r),await stage(0)]);
 r=await A('PATCH','/opportunities/openings/'+await oid(0)+'/stage',{targetStage:'WAITING_FOR_FEEDBACK',scheduledAt:tomorrow}); chk('stage','WAITING_FOR_FEEDBACK with future date refused (OPP_061)',r.status===400,[r.status,code(r)]);
 r=await A('PATCH','/opportunities/openings/'+await oid(0)+'/stage',{targetStage:'WAITING_FOR_APPROVAL'}); chk('stage','WAITING_FOR_APPROVAL never a target',r.status===400,[r.status,code(r)]);
 r=await A('PATCH','/opportunities/openings/'+await oid(0)+'/stage',{targetStage:'DID_INTERVIEW_HAPPEN'}); chk('stage','DID_INTERVIEW_HAPPEN never a target',r.status===400,[r.status,code(r)]);
 r=await A('PATCH','/opportunities/openings/'+await oid(0)+'/stage',{targetStage:'WAITING_FOR_FEEDBACK',scheduledAt:yday,interviewer:'QA Bot'}); chk('stage','held interview -> WAITING_FOR_FEEDBACK (skip needs confirm?)',[200,400].includes(r.status),[r.status,code(r),r.body.message]);
 if(r.status===400&&code(r)==='OPP_015'){ r=await A('PATCH','/opportunities/openings/'+await oid(0)+'/stage',{targetStage:'WAITING_FOR_FEEDBACK',scheduledAt:yday,interviewer:'QA Bot',isConfirmed:true}); chk('stage','same with isConfirmed',r.status===200,[r.status,code(r),r.body.message]); }
 console.log('stage now',await stage(0));
 r=await A('PATCH','/opportunities/rounds/'+R1,{outcome:'PASSED',feedback:'good',recordingUrl:'https://example.com/rec'}); chk('rounds','round 1 PASSED (past date)',r.status===200,[r.status,code(r),r.body.message]);
 r=await A('PATCH','/opportunities/rounds/'+R1,{recordingUrl:'javascript:alert(1)'}); chk('rounds','javascript: recording URL refused',r.status===400,[r.status,code(r)]);
 r=await A('PATCH','/opportunities/rounds/'+R2,{scheduledAt:yday,outcome:'FAILED',feedback:'weak'}); chk('rounds','round 2 FAILED',r.status===200,[r.status,code(r),r.body.message]);
 console.log('stage after rounds',await stage(0));
 r=await A('POST','/opportunities/nominations/'+await nid(0)+'/select',{}); chk('select','select after rounds (record)',[200,400].includes(r.status),[r.status,code(r),r.body.message]);
 if(r.status===400&&code(r)==='OPP_015'){ r=await A('POST','/opportunities/nominations/'+await nid(0)+'/select',{isConfirmed:true}); chk('select','select with isConfirmed',r.status===200,[r.status,code(r),r.body.message]); }
 chk('select','seat WON, filled=1',await stage(0)==='WON'&&(await stats()).filledCount===1,[await stage(0),await stats()]);
 r=await A('POST','/opportunities/nominations/'+await nid(0)+'/release',{reason:'x'}); chk('release','WON cannot be released (OPP_185)',r.status===409&&code(r)==='OPP_185',[r.status,code(r)]);
 r=await A('POST','/opportunities/positions/'+PB+'/close',{reason:'close B'}); chk('close','close B while A has Won seat',r.status===200,[r.status,code(r)]);
 r=await A('POST','/opportunities/positions/'+PA+'/close',{reason:'close A partial'}); chk('close','close A (Won seat + 1 open)',r.status===200,[r.status,code(r)]);
 let st=await stats(); chk('close','stats filled<=required after partial close',st.filledCount<=st.requiredCount,st);
 const sc=(await A('GET','/opportunities/openings/stage-counts?search='+T)).body.data; chk('close','Won seat stays in WON column on a closed position',sc.WON===1&&sc.NO_LONGER_REQUIRED>=1,sc);
 r=await A('POST','/opportunities/positions/'+PA+'/reopen'); chk('close','reopen A',r.status===200,[r.status,code(r)]);
 r=await A('POST','/opportunities/positions/'+PB+'/reopen'); 
 // reinitiate
 r=await A('POST','/opportunities/positions/'+PA+'/reinitiate',{reason:''}); chk('reinitiate','empty reason refused',r.status===400,[r.status,code(r)]);
 await A('POST','/opportunities/positions/'+PA+'/nominations',{candidates:[{employeePublicId:S.c[3].id}]});
 r=await A('POST','/opportunities/positions/'+PA+'/reinitiate',{reason:'QA fresh round'}); chk('reinitiate','reinitiate with reason',r.status===200,[r.status,code(r),r.body.message]);
 chk('reinitiate','Won seat kept after reinitiate',await stage(0)==='WON',await stage(0));
 // ticket status
 r=await A('PATCH','/opportunities/'+S.opp.publicId+'/status',{status:'ON_HOLD'}); chk('status','ON_HOLD',[200,400].includes(r.status),[r.status,code(r),r.body.message]);
 const sh=await A('POST','/opportunities/positions/'+PB+'/nominations',{candidates:[{employeePublicId:S.c[4].id}]}); chk('status','shortlist while ON_HOLD refused',sh.status>=400,[sh.status,code(sh)]);
 r=await A('PATCH','/opportunities/'+S.opp.publicId+'/status',{status:'OPEN'}); chk('status','resume to OPEN',r.status===200,[r.status,code(r),r.body.message]);
 r=await A('PATCH','/opportunities/'+S.opp.publicId+'/status',{status:'BOGUS'}); chk('status','invalid status refused',r.status===400,[r.status,code(r)]);
 r=await A('PATCH','/opportunities/'+S.opp.publicId+'/status',{status:'LOST',isConfirmed:true}); chk('status','LOST',[200,400].includes(r.status),[r.status,code(r),r.body.message]);
 console.log('after LOST seat stages',(await seats()).map(s=>s.stage));
 r=await A('PATCH','/opportunities/'+S.opp.publicId+'/status',{status:'OPEN'}); chk('status','LOST -> OPEN (record)',[200,400,409].includes(r.status),[r.status,code(r),r.body.message]);
 save('g2-results'); fs.writeFileSync('S2.json',JSON.stringify(S,null,1)); await b.close();
})();
