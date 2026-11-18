const L=require('./lib');(async()=>{const b=await L.chromium.launch();const {page}=await L.login(b,'palak.saxena');
 let items=[];for(let p=1;p<=13;p++){const r=await L.api(page,'GET',`/employees?page=${p}&limit=300&sortBy=availabilityPercentage&sortOrder=desc&timeFrame=15d`);const d=r.body.data;const it=Array.isArray(d)?d:(d.items||d.data||d.rows||[]);items.push(...it);if(it.length<300)break}
 console.log('n',items.length);console.log('keys',Object.keys(items[0]).join(','));
 const ks=Object.keys(items[0]).filter(k=>/stack/i.test(k));console.log('stackKeys',ks, JSON.stringify(ks.map(k=>items[0][k])).slice(0,300));
 require('fs').writeFileSync('/home/subham/SIMERP new project/reports/screenshots/2026-10-20/i563/employees-pmo.json',JSON.stringify(items));await b.close()})();
