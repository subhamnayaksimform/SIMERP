// node diff.js <beforeLabel> <afterLabel>  -> prints + saves new items per user
const fs=require('fs'); const D='/home/subham/SIMERP new project/reports/screenshots/2026-10-20/notifications/json/';
const [a,b]=process.argv.slice(2); const A=JSON.parse(fs.readFileSync(D+'snap-'+a+'.json')), B=JSON.parse(fs.readFileSync(D+'snap-'+b+'.json'));
const out={before:a,after:b,beforeAt:A.takenAt,afterAt:B.takenAt,newByUser:{}};
for(const u of Object.keys(B.users)){ const prev=new Set(((A.users[u]||{}).today||[]).map(i=>i.id)); const since=(A.users[u]?A.takenAt:'2026-10-20T00:00:00Z'); const nw=((B.users[u]||{}).today||[]).filter(i=>!prev.has(i.id) && i.createdAt>=since);
  out.newByUser[u]=nw.map(i=>({eventType:i.eventType.replace('notification.',''),title:i.title,body:i.body,createdAt:i.createdAt,ctx:i.ctx}));
  console.log(`${u}: ${nw.length}`); for(const i of nw) console.log(`   ${i.createdAt} ${i.eventType.replace('notification.','')} | ${i.title} | ${(i.body||'').slice(0,110)}`); }
fs.writeFileSync(D+'diff-'+b+'.json', JSON.stringify(out,null,2));
