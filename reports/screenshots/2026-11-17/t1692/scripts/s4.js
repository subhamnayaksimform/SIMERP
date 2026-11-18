const {H,fs,results,chk,as,save}=require('./lib3');
(async()=>{ const b=await H.chromium.launch(); const P=await as(b,'tarun.sharma'); const code=r=>r.body?.code; const S={};
 const SAI='ab58ca0b-3f84-4b5a-9715-ea7b33d800d2', JAY='95cb6a84-390c-49c3-949f-d940bff3a80f';
 let r=await P('POST','/allocation-tickets/update-allocation',{projectAssignmentPublicId:SAI,newAllocationType:'DYNAMIC',newAllocationPercentage:null,newStartDate:'2026-12-01',newEndDate:'2027-03-31',effectiveStartDate:'2026-12-01'});
 console.log('A',r.status,JSON.stringify(r.body).slice(0,700));
 if(r.status===201||r.status===200){ S.A=r.body.data?.publicId||r.body.data?.ticket?.publicId||r.body.data?.tickets?.[0]?.publicId; S.Araw=r.body.data; }
 r=await P('POST','/allocation-tickets/update-allocation',{projectAssignmentPublicId:JAY,newAllocationType:'DYNAMIC',newStartDate:'2026-12-01',newEndDate:'2027-05-31',effectiveStartDate:'2026-12-01'});
 console.log('B',r.status,JSON.stringify(r.body).slice(0,700));
 if(r.status===201||r.status===200){ S.B=r.body.data?.publicId||r.body.data?.ticket?.publicId||r.body.data?.tickets?.[0]?.publicId; S.Braw=r.body.data; }
 fs.writeFileSync('s4-state.json',JSON.stringify(S,null,1)); await b.close(); })().catch(e=>console.error('CRASH',e));
