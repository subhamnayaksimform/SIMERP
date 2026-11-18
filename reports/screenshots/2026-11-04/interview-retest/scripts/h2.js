const {H,DEPT}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d); const code=r=>r.body?.code;
 const cr=await A('GET','/opportunities/candidates?limit=100&departmentPublicIds='+DEPT); const emp=cr.body.data.items.filter(i=>i.canNominate&&!(i.interviewOpportunities||[]).length&&i.name!=='Mehul Pandya')[60];
 const dpos={title:'QA Direct',techStacks:['Java'],departmentPublicIds:[DEPT],preferredSeniority:'MID',allocationType:'FIXED',allocationPercentage:10,tentativeAllocationDate:'2027-02-01',employeePublicId:emp.publicId,priority:'LOW',isAllocationConfirmed:false};
 let r=await A('POST','/opportunities',{title:'QA-AUTO I633 verify designed flow',clientType:'PROSPECT',requestType:'DIRECT',clientName:'QA-AUTO Direct Prospect',positions:[dpos]}); const D=r.body.data; console.log('create',r.status,D?.ticketNumber);
 const get=async()=>(await A('GET','/opportunities/openings?requestType=DIRECT&limit=100&search='+D.ticketNumber)).body.data.items[0];
 let o=await get(); console.log('start',o.directStage,o.allowedDirectStages);
 for(let i=0;i<6;i++){ o=await get(); const next=o.allowedDirectStages.find(s=>s!=='REJECTED'); if(!next) break; r=await A('PATCH','/opportunities/openings/'+o.publicId+'/direct-stage',{targetStage:next}); console.log('->',next,r.status,code(r),r.body.message); if(r.status!==200) break; }
 o=await get(); console.log('now',o.directStage,o.allowedDirectStages);
 // link a project later
 r=await A('PATCH','/opportunities/'+D.publicId+'/project',{projectPublicId:'a8869918-6732-4886-9153-8dfa5b06c79a'}); console.log('link project',r.status,code(r),r.body.message,r.body.data?.clientType);
 r=await A('PATCH','/opportunities/openings/'+o.publicId+'/cancel',{reason:'QA-AUTO cleanup'}); console.log('cancel',r.status);
 await b.close(); })();
