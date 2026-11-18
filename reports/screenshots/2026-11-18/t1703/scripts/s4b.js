const {H,fs,as}=require('./lib3');
(async()=>{ const b=await H.chromium.launch(); const P=await as(b,'tarun.sharma'); const S=JSON.parse(fs.readFileSync('s4-state.json'));
 const JAY='95cb6a84-390c-49c3-949f-d940bff3a80f';
 for(const body of [{newEndDate:'2027-08-31'},{newAllocationType:'DYNAMIC',newEndDate:'2027-08-31'},{newEndDate:'2027-08-31',newStartDate:'2026-12-01'}]){
  const r=await P('POST','/allocation-tickets/update-allocation',{projectAssignmentPublicId:JAY,...body}); console.log(JSON.stringify(body),r.status,JSON.stringify(r.body).slice(0,400));
  if(r.status===201){ S.B=r.body.data.publicId; S.BT=r.body.data.ticketNumber; break; } }
 const r=await P('GET','/allocation-tickets/'+S.A); fs.writeFileSync('ua-A.json',JSON.stringify(r.body.data,null,1)); const d=r.body.data;
 console.log('A detail',r.status, JSON.stringify({type:d.requestedAllocationType,pct:d.requestedAllocationPercentage,start:d.allocationStartDate,end:d.allocationEndDate,eff:d.effectiveStartDate,effEnd:d.effectiveEndDate,status:d.status,keys:Object.keys(d).join(',')}).slice(0,900));
 fs.writeFileSync('s4-state.json',JSON.stringify(S,null,1)); await b.close(); })().catch(e=>console.error('CRASH',e));
