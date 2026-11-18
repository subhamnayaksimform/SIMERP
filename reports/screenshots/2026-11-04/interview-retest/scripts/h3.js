const {H,DEPT}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d);
 const cr=await A('GET','/opportunities/candidates?limit=100&departmentPublicIds='+DEPT); const emp=cr.body.data.items.filter(i=>i.canNominate&&!(i.interviewOpportunities||[]).length&&i.name!=='Mehul Pandya')[62];
 const dpos={title:'QA Direct',techStacks:['Java'],departmentPublicIds:[DEPT],preferredSeniority:'MID',allocationType:'FIXED',allocationPercentage:10,tentativeAllocationDate:'2027-02-01',employeePublicId:emp.publicId,priority:'LOW',isAllocationConfirmed:false};
 let r=await A('POST','/opportunities',{title:'QA-AUTO I633 verify allocate block',clientType:'PROSPECT',requestType:'DIRECT',clientName:'QA-AUTO Direct Prospect',positions:[dpos]}); const D=r.body.data;
 const o=(await A('GET','/opportunities/openings?requestType=DIRECT&limit=100&search='+D.ticketNumber)).body.data.items[0];
 const nid=o.activeNomination?.publicId; console.log('nomination',!!nid);
 if(nid){ r=await A('POST','/opportunities/nominations/'+nid+'/allocate',{}); console.log('allocate w/o project',r.status,r.body.code,r.body.message); }
 r=await A('PATCH','/opportunities/openings/'+o.publicId+'/cancel',{reason:'QA-AUTO cleanup'}); console.log('cancel',r.status);
 await b.close(); })();
