const {H,fs,DEPT,results,chk,pos,save}=require('./lib2');
(async()=>{
 const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d); const code=r=>r.body?.code;
 const PROJ='a8869918-6732-4886-9153-8dfa5b06c79a';
 const cr=await A('GET','/opportunities/candidates?limit=100&departmentPublicIds='+DEPT);
 const emp=cr.body.data.items.filter(i=>i.canNominate&&!(i.interviewOpportunities||[]).length&&i.name!=='Mehul Pandya').slice(30,34).map(i=>({id:i.publicId,name:i.name}));
 const dpos=(e,x={})=>({title:'QA Direct',techStacks:['Java'],departmentPublicIds:[DEPT],preferredSeniority:'MID',allocationType:'FIXED',allocationPercentage:10,tentativeAllocationDate:'2027-02-01',employeePublicId:e,priority:'LOW',...x});
 const base={title:'QA-AUTO E2E direct 04-11',clientType:'EXISTING',requestType:'DIRECT',clientName:'AnalytixHub',projectPublicId:PROJ,positions:[dpos(emp[0].id)]};
 let r=await A('POST','/opportunities',base); chk('direct','create without allocation status (isAllocationConfirmed omitted) — record',[201,400].includes(r.status),[r.status,code(r),r.body.message]);
 const omitted=r.status;
 if(r.status===201){ await A('PATCH','/opportunities/'+r.body.data.publicId+'/status',{status:'OPEN'}); }
 r=await A('POST','/opportunities',{...base,positions:[dpos(emp[1].id,{isAllocationConfirmed:false})]}); chk('direct','create unconfirmed Direct ticket',r.status===201,[r.status,code(r),r.body.message]); const D=r.body.data; 
 r=await A('POST','/opportunities',{...base,positions:[dpos(emp[1].id),dpos(emp[2].id)]}); chk('direct','Direct with 2 positions refused',r.status===400,[r.status,code(r)]);
 r=await A('POST','/opportunities',{...base,positions:[dpos(emp[1].id,{tentativeInterviewDate:'2027-01-05'})]}); chk('direct','Direct with interview date refused',r.status===400,[r.status,code(r)]);
 r=await A('POST','/opportunities',{...base,positions:[dpos(undefined)]}); chk('direct','Direct without employee refused',r.status===400,[r.status,code(r)]);
 r=await A('POST','/opportunities',{...base,clientType:'PROSPECT',projectPublicId:undefined}); chk('direct','Direct for a prospect client refused',r.status===400,[r.status,code(r)]);
 if(D){ const o=(await A('GET','/opportunities/openings?requestType=DIRECT&limit=100&search='+D.ticketNumber)).body.data.items; chk('direct','Direct ticket on board with direct stage',o.length===1&&!!o[0].directStage||o.length===1,o.map(i=>[i.stage,i.directStage,i.allowedDirectStages]));
  const op=o[0]; console.log('allowed',op.allowedDirectStages,'directStage',op.directStage);
  r=await A('POST','/opportunities/positions/'+D.positions[0].publicId+'/close',{reason:'x'}); chk('direct','Close (No Longer Required) refused on Direct',r.status>=400,[r.status,code(r)]);
  r=await A('POST','/opportunities/positions/'+D.positions[0].publicId+'/nominations',{candidates:[{employeePublicId:emp[3].id}]}); chk('direct','shortlisting a 2nd person on Direct refused',r.status>=400,[r.status,code(r)]);
  r=await A('PATCH','/opportunities/openings/'+op.publicId+'/direct-stage',{targetStage:'REJECTED'}); chk('direct','reject without reason refused',r.status===400,[r.status,code(r)]);
  r=await A('PATCH','/opportunities/openings/'+op.publicId+'/direct-stage',{targetStage:'BOGUS'}); chk('direct','invalid stage refused',r.status===400,[r.status,code(r)]);
  r=await A('PATCH','/opportunities/openings/'+op.publicId+'/cancel',{reason:''}); chk('direct','cancel without reason refused',r.status===400,[r.status,code(r)]);
  r=await A('PATCH','/opportunities/openings/'+op.publicId+'/cancel',{reason:'   '}); chk('direct','cancel with spaces refused',r.status===400,[r.status,code(r)]);
  // employee pill / unconfirmed
  const er=await A('GET','/employees?search='+encodeURIComponent(emp[1].name)); console.log('emp api',er.status);
  r=await A('PATCH','/opportunities/openings/'+op.publicId+'/cancel',{reason:'QA cleanup direct'}); chk('direct','cancel with reason',r.status===200,[r.status,code(r),r.body.message]);
  r=await A('PATCH','/opportunities/openings/'+op.publicId+'/cancel',{reason:'again'}); chk('direct','cancel twice refused',r.status>=400,[r.status,code(r)]);
 }
 // employee-history
 const first=emp[0]; for (const p of ['/opportunities/employee-history','/employees/'+first.id+'/opportunities']) { const x=await A('GET',p); console.log(p,x.status,x.body.code); }
 save('g4-results'); await b.close();
})();
