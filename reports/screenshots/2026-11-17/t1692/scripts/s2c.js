const {H,fs,as}=require('./lib3'); const S=JSON.parse(fs.readFileSync('s2-state.json'));
(async()=>{ const b=await H.chromium.launch(); const E=await as(b,'iti.trivedi');
 const r=await E('GET','/notifications?page=1&limit=10'); const it=r.body.data?.items||r.body.data||[]; console.log(JSON.stringify(it.slice(0,3),null,1).slice(0,3500));
 for(const q of ['view=MINE&requestType=DIRECT','requestType=DIRECT','view=MINE']){ const x=await E('GET','/opportunities/openings?limit=100&'+q); console.log(q,x.status,(x.body.data?.items||[]).map(i=>[i.opportunity?.ticketNumber,i.directStage]), x.body.message); }
 const x=await E('GET','/opportunities/openings/rejected?view=MINE&limit=100&requestType=DIRECT'); console.log('rej',x.status,(x.body.data?.items||[]).map(i=>i.opportunity?.ticketNumber));
 await b.close(); })();
