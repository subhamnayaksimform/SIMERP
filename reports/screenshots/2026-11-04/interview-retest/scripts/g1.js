const {H,fs,DEPT,results,chk,pos,save}=require('./lib2');
(async()=>{
 const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d);
 const codeOf=r=>r.body?.code; const S={};
 // setup
 let r=await A('POST','/opportunities',{title:'QA-AUTO E2E full 04-11',clientType:'PROSPECT',requestType:'INTERVIEW',clientName:'QA-AUTO E2E Client',jobDescription:'<p>jd</p>',prospectContact:'QA',prospectNotes:'n',positions:[pos('E2E A',2),pos('E2E B',1)]});
 chk('create','interview ticket created',r.status===201,r.body); S.opp=r.body.data; const T=S.opp.ticketNumber; const [PA,PB]=S.opp.positions.map(p=>p.publicId); S.PA=PA;S.PB=PB;S.T=T;
 const seats=async()=>(await A('GET','/opportunities/openings?limit=100&search='+T)).body.data.items;
 const stats=async()=>(await seats())[0]?.opportunity.stats;
 const byName=async n=>(await seats()).find(s=>s.activeNomination?.employee?.name===n);
 // candidates
 const cr=await A('GET','/opportunities/candidates?limit=100&departmentPublicIds='+DEPT+'&positionPublicId='+PA);
 S.c=cr.body.data.items.filter(i=>i.canNominate&&!i.clientRejection&&!(i.interviewOpportunities||[]).length).slice(10,18).map(i=>({id:i.publicId,name:i.name,dept:i.department?.name}));
 chk('candidates','picker returns candidates with fields',S.c.length>=6,S.c.length);
 // detail checks
 const d=(await A('GET','/opportunities/'+S.opp.publicId)).body.data;
 chk('create','checklist seeded on position (5 items, OBS present, no Resume)',d.positions[0].checklistItems.length===5&&d.positions[0].checklistItems.some(c=>/OBS/.test(c.code))&&!d.positions[0].checklistItems.some(c=>/RESUME/i.test(c.code)),d.positions[0].checklistItems.map(c=>c.code));
 chk('create','4 seats created (2+1 ... A=2,B=1 => 3)',(await seats()).length===3,(await seats()).length);
 chk('create','stats initial 0/0/0/3',JSON.stringify(await stats())===JSON.stringify({shortlistedCount:0,rejectedCount:0,filledCount:0,requiredCount:3}),await stats());
 // shortlist
 r=await A('POST','/opportunities/positions/'+PA+'/nominations',{candidates:[{employeePublicId:S.c[0].id},{employeePublicId:S.c[1].id}]}); chk('shortlist','2 shortlisted on A',r.status===201,r.body.code);
 r=await A('POST','/opportunities/positions/'+PB+'/nominations',{candidates:[{employeePublicId:S.c[2].id}]}); chk('shortlist','1 shortlisted on B',r.status===201,r.body.code);
 r=await A('POST','/opportunities/positions/'+PB+'/nominations',{candidates:[{employeePublicId:S.c[0].id}]}); chk('shortlist','same employee on 2nd position of same ticket refused or allowed (record)',[201,409,400].includes(r.status),[r.status,codeOf(r)]);
 r=await A('POST','/opportunities/positions/'+PA+'/nominations',{candidates:[]}); chk('shortlist','empty list refused',r.status===400,[r.status,codeOf(r)]);
 r=await A('POST','/opportunities/positions/'+PA+'/nominations',{candidates:[{employeePublicId:'00000000-0000-4000-8000-000000000000'}]}); chk('shortlist','unknown employee refused',[400,404].includes(r.status),[r.status,codeOf(r)]);
 r=await A('POST','/opportunities/positions/not-a-uuid/nominations',{candidates:[{employeePublicId:S.c[3].id}]}); chk('shortlist','bad position id refused',r.status===400,[r.status,codeOf(r)]);
 // approval path
 const n0=(await byName(S.c[0].name)).activeNomination.publicId, n1=(await byName(S.c[1].name)).activeNomination.publicId, n2=(await byName(S.c[2].name)).activeNomination.publicId; S.n=[n0,n1,n2];
 r=await A('POST','/opportunities/nominations/'+n0+'/request-approval'); chk('approval','PMO request approval',r.status===200,[r.status,codeOf(r)]);
 r=await A('POST','/opportunities/nominations/'+n0+'/request-approval'); chk('approval','second request refused (OPP_104)',r.status===400,[r.status,codeOf(r)]);
 r=await A('POST','/opportunities/nominations/'+n0+'/approve'); chk('approval','requester cannot approve own request (OPP_111)',r.status===403,[r.status,codeOf(r)]);
 r=await A('DELETE','/opportunities/nominations/'+n0+'/request-approval'); chk('approval','withdraw pending request',r.status===200,[r.status,codeOf(r)]);
 chk('approval','stage back to SHORTLISTED after withdraw',(await byName(S.c[0].name)).stage==='SHORTLISTED',(await byName(S.c[0].name)).stage);
 r=await A('POST','/opportunities/nominations/'+n0+'/request-approval'); 
 // TM approval: find TM accounts
 let approved=false; const tried=[];
 for(const u of ['sudhansu.patel','punit.patel','mehul.pandya','deepak.rao']){ const c=await H.login(b,u); const x=await H.api(c.page,'POST','/opportunities/nominations/'+n0+'/approve'); tried.push([u,x.status,x.body.code]); if(x.status===200){approved=true; await c.ctx.close(); break;} await c.ctx.close(); }
 chk('approval','TM of candidate dept can approve (record who)',approved,tried); S.approved=approved;
 if(!approved){ r=await A('POST','/opportunities/nominations/'+n0+'/bypass-approval',{reason:'QA bypass TM unavailable'}); chk('approval','PMO bypass approval with reason',r.status===200,[r.status,codeOf(r),r.body.message]); }
 r=await A('POST','/opportunities/nominations/'+n1+'/bypass-approval',{reason:''}); chk('approval','bypass without reason refused',r.status===400,[r.status,codeOf(r)]);
 r=await A('POST','/opportunities/nominations/'+n1+'/bypass-approval',{reason:'QA bypass'}); chk('approval','bypass with reason',r.status===200,[r.status,codeOf(r),r.body.message]);
 for(const [i,n] of [[0,n0],[1,n1]]){ const s=await byName(S.c[i].name); chk('approval','candidate '+i+' now BEING_PREPARED',s.stage==='BEING_PREPARED',[s.stage,s.activeNomination.status]); }
 // checklist
 const codes=d.positions[0].checklistItems.map(c=>c.code);
 r=await A('PATCH','/opportunities/nominations/'+n1+'/checklist',{completedItems:codes.slice(0,2)}); chk('checklist','tick 2 items',r.status===200,[r.status,codeOf(r)]);
 r=await A('PATCH','/opportunities/nominations/'+n1+'/checklist',{completedItems:['NOT_A_CODE']}); chk('checklist','unknown code refused',r.status===400,[r.status,codeOf(r)]);
 r=await A('PATCH','/opportunities/nominations/'+n1+'/checklist',{completedItems:codes.slice(0,1),skippedItems:codes.slice(0,1)}); chk('checklist','same item both done and skipped refused',r.status===400,[r.status,codeOf(r)]);
 r=await A('PATCH','/opportunities/nominations/'+n1+'/checklist',{completedItems:codes.slice(0,2),skippedItems:codes.slice(2,3)}); chk('checklist','done + skipped mix ok',r.status===200,[r.status,codeOf(r)]);
 r=await A('PATCH','/opportunities/nominations/'+n2+'/checklist',{completedItems:codes.slice(0,1)}); chk('checklist','checklist on SHORTLISTED (not started) record',[200,400,409].includes(r.status),[r.status,codeOf(r)]);
 // rounds
 r=await A('POST','/opportunities/nominations/'+n1+'/rounds',{}); chk('rounds','add round default title',r.status===201,[r.status,codeOf(r),r.body.data?.title]); const r1=r.body.data;
 r=await A('POST','/opportunities/nominations/'+n1+'/rounds',{title:'Custom R2',interviewer:'QA Bot',scheduledAt:'2027-01-12T10:30:00.000Z'}); chk('rounds','add round custom',r.status===201,[r.status,codeOf(r)]); const r2=r.body.data;
 r=await A('POST','/opportunities/nominations/'+n1+'/rounds',{title:'x'.repeat(201)}); chk('rounds','title 201 chars refused',r.status===400,[r.status,codeOf(r)]);
 r=await A('POST','/opportunities/nominations/'+n1+'/rounds',{scheduledAt:'garbage'}); chk('rounds','bad date refused',r.status===400,[r.status,codeOf(r)]);
 r=await A('POST','/opportunities/nominations/'+n1+'/rounds',{title:'<script>alert(1)</script>'}); chk('rounds','html title stored as text',r.status===201&&r.body.data?.title.includes('<script>'),[r.status,r.body.data?.title]); const r3=r.body.data;
 r=await A('PATCH','/opportunities/rounds/'+r2.publicId,{title:'Renamed R2'}); chk('rounds','rename round',r.status===200,[r.status,codeOf(r)]);
 r=await A('PATCH','/opportunities/nominations/'+n1+'/rounds/order',{roundPublicIds:[r3.publicId,r2.publicId,r1.publicId]}); chk('rounds','reorder rounds',r.status===200,[r.status,codeOf(r),r.body.message]);
 r=await A('DELETE','/opportunities/rounds/'+r3.publicId); chk('rounds','delete round',r.status===200,[r.status,codeOf(r)]);
 r=await A('POST','/opportunities/nominations/'+n2+'/rounds',{}); chk('rounds','round on non-IN_PROCESS refused (OPP_054)',r.status===400&&codeOf(r)==='OPP_054',[r.status,codeOf(r)]);
 // stage moves for n1
 const op1=(await byName(S.c[1].name)).publicId;
 const mv=async(t,extra={})=>A('PATCH','/opportunities/openings/'+op1+'/stage',{targetStage:t,...extra});
 r=await mv('WON'); chk('stage','skip straight to WON needs confirmation',r.status===400,[r.status,codeOf(r)]);
 r=await mv('INTERVIEW_SCHEDULED',{scheduledAt:'2027-01-12T10:30:00.000Z',interviewer:'QA Bot'}); chk('stage','BEING_PREPARED -> INTERVIEW_SCHEDULED',r.status===200,[r.status,codeOf(r),r.body.message]);
 r=await mv('DID_INTERVIEW_HAPPEN'); chk('stage','-> DID_INTERVIEW_HAPPEN',r.status===200,[r.status,codeOf(r),r.body.message]);
 r=await mv('WAITING_FOR_FEEDBACK'); chk('stage','-> WAITING_FOR_FEEDBACK',r.status===200,[r.status,codeOf(r),r.body.message]);
 r=await A('POST','/opportunities/nominations/'+n1+'/select',{}); chk('stage','select -> WON',r.status===200,[r.status,codeOf(r),r.body.message]);
 chk('stage','seat WON and stats filled=1',(await byName(S.c[1].name)).stage==='WON'&&(await stats()).filledCount===1,await stats());
 r=await A('POST','/opportunities/nominations/'+n1+'/release',{reason:'x'}); chk('release','WON cannot be released (OPP_185)',r.status===409&&codeOf(r)==='OPP_185',[r.status,codeOf(r)]);
 r=await A('POST','/opportunities/nominations/'+n1+'/reject',{reason:'x',rejectedByRole:'PMO'}); chk('reject','reject a WON candidate (record)',[200,400,409].includes(r.status),[r.status,codeOf(r)]);
 // fix state if rejected
 const wonNow=(await byName(S.c[1].name))?.stage; if(wonNow!=='WON'){ console.log('NOTE: reject moved WON seat to',wonNow); }
 save('g1-results'); fs.writeFileSync('S.json',JSON.stringify(S,null,1));
 await b.close();
})();
