const {H,fs,results,chk,as,save}=require('./lib3'); const S=JSON.parse(fs.readFileSync('s4-state.json'));
(async()=>{ const b=await H.chromium.launch(); const P=await as(b,'vihaan.chatterjee'); const code=r=>r.body?.code;
 // fix up the two mis-asserted UI results
 let d=(await P('GET','/allocation-tickets/'+S.C)).body.data;
 chk('4.alloc-edit','saved: UA-0147 End Date + Effective From cleared (absent/null in API)',d.allocationEndDate==null&&d.effectiveStartDate==null,{end:d.allocationEndDate,eff:d.effectiveStartDate});
 let r=await P('PATCH','/allocation-tickets/'+S.B+'/edit',{requestedAllocationType:'FIXED',requestedAllocationPercentage:30});
 chk('4.alloc-edit','API: live-Dynamic allocation ticket (UA-0146) edit to Fixed refused 400 with Dynamic-to-Fixed message',r.status===400&&/Fixed/i.test(r.body.message),[r.status,code(r),r.body.message]);
 d=(await P('GET','/allocation-tickets/'+S.B)).body.data; chk('4.alloc-edit','UA-0146 still Dynamic after refused edits',d.requestedAllocationType==='DYNAMIC',d.requestedAllocationType);
 // API: Sai UA-0145 back to Fixed via backend
 r=await P('PATCH','/allocation-tickets/'+S.A+'/edit',{requestedAllocationType:'FIXED',requestedAllocationPercentage:20});
 chk('4.alloc-edit','API: UA-0145 (Fixed→Dynamic ticket) edit back to Fixed 20 — backend response (record)',[200,400].includes(r.status),[r.status,code(r),r.body.message]);
 // API: clear dates on UA-0146
 const before=(await P('GET','/allocation-tickets/'+S.B)).body.data; 
 r=await P('PATCH','/allocation-tickets/'+S.B+'/edit',{allocationEndDate:null,effectiveStartDate:null});
 const after=(await P('GET','/allocation-tickets/'+S.B)).body.data;
 chk('4.alloc-edit','API: clearing end date + effective date with null on UA-0146 sticks',r.status===200&&after.allocationEndDate==null&&after.effectiveStartDate==null,{status:r.status,code:code(r),msg:r.body.message,before:[before.allocationEndDate,before.effectiveStartDate],after:[after.allocationEndDate,after.effectiveStartDate]});
 save('s4d-results'); await b.close(); })().catch(e=>console.error('CRASH',e));
