const L=require('./lib');
(async()=>{ const b=await L.chromium.launch(); const {page,ctx}=await L.login(b,'ceo');
 for (const p of ['/employee-roles','/employee-roles?page=1&limit=100','/employees?page=1&limit=100']) { const r=await L.api(page,'GET',p); console.log(p,r.status,JSON.stringify(r.body).slice(0,600)); }
 await ctx.close(); await b.close(); })();
