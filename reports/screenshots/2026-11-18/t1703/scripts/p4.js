const {H,fs,as}=require('./lib3'); const S=JSON.parse(fs.readFileSync('s4-state.json'));
(async()=>{ const b=await H.chromium.launch(); const P=await as(b,'vihaan.chatterjee');
 for (const k of Object.keys(S)) { const v=S[k]; if(typeof v!=='string'||!/^[0-9a-f-]{36}$/.test(v)) continue; const r=await P('GET','/allocation-tickets/'+v); const d=r.body?.data||{}; console.log(k,r.status,d.ticketNumber,d.status,d.requestedAllocationType,d.requestedAllocationPercentage,d.endDate,d.effectiveFrom); }
 await b.close(); })();
