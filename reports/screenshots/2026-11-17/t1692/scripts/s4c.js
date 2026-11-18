const {H,fs,chk,as,save}=require('./lib3'); const S=JSON.parse(fs.readFileSync('s4-state.json'));
(async()=>{ const b=await H.chromium.launch(); const C=await as(b,'tarun.sharma'); const P=await as(b,'vihaan.chatterjee');
 // UA-0088 context
 let r=await P('GET','/allocation-tickets?search=UA-0088&limit=100'); const t88=(r.body.data?.items||r.body.data?.tickets||[])[0]; console.log('UA-0088',r.status,JSON.stringify(t88||r.body).slice(0,500));
 // clean allocation: Prakash Rao FIXED 35
 r=await C('POST','/allocation-tickets/update-allocation',{projectAssignmentPublicId:'3b0db185-563b-4778-bdd2-f29059e3681f',newAllocationType:'DYNAMIC',newAllocationPercentage:null,newStartDate:'2026-12-01',newEndDate:'2027-03-31',effectiveStartDate:'2026-12-01'});
 console.log('C create',r.status,JSON.stringify(r.body).slice(0,300)); if(r.status===201){S.C=r.body.data.publicId;S.CT=r.body.data.ticketNumber;}
 fs.writeFileSync('s4-state.json',JSON.stringify(S,null,1)); await b.close(); })().catch(e=>console.error('CRASH',e));
