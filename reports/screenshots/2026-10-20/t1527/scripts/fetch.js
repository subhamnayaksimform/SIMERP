const L=require('./lib'); const fs=require('fs');
async function all(page,base){ const out=[]; for(let p=1;p<60;p++){ const r=await L.api(page,'GET',`${base}${base.includes('?')?'&':'?'}page=${p}&limit=100`); const d=r.body&&r.body.data; const items=Array.isArray(d)?d:((d&&(d.items||d.data||d.rows))||[]); if(r.status!==200){console.log(base,r.status,JSON.stringify(r.body).slice(0,200));break;} out.push(...items); if(items.length<100) break; } return out; }
(async()=>{ const b=await L.chromium.launch(); const {page,ctx}=await L.login(b,'ceo');
 const E=await all(page,'/employees'); const R=await all(page,'/employee-roles'); const P=await all(page,'/projects');
 fs.writeFileSync(__dirname+'/out/employees.json',JSON.stringify(E)); fs.writeFileSync(__dirname+'/out/roles.json',JSON.stringify(R)); fs.writeFileSync(__dirname+'/out/projects.json',JSON.stringify(P));
 console.log('employees',E.length,'roles',R.length,'projects',P.length); await ctx.close(); await b.close(); })();
