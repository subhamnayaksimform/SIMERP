const {H}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const l=(await H.api(v.page,'GET','/opportunities/lookup')).body.data; const max=Math.max(...l.map(o=>+o.ticketNumber.slice(4))); console.log('max',max); require('fs').writeFileSync('before.json',JSON.stringify({max})); 
 const ver=await H.api(v.page,'GET','/health'); await b.close(); })();
