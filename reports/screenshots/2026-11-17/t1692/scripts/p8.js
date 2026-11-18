const {H,as}=require('./lib3');
(async()=>{ const b=await H.chromium.launch(); const P=await as(b,'vihaan.chatterjee');
 for(const t of ['OPP-0374','OPP-0375','OPP-0376','OPP-0377','OPP-0378']){ const r=await P('GET','/opportunities/openings?limit=100&withArchived=true&search='+t+(t==='OPP-0374'||t==='OPP-0378'?'':'&requestType=DIRECT')); const i=(r.body.data?.items||[])[0]; console.log(t,i&&new Date(i.opportunity?.createdAt||i.createdAt).toLocaleString('en-GB',{timeZone:'Asia/Kolkata'})); }
 await b.close(); })();
