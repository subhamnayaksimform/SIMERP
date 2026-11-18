const H=require('./h');
(async()=>{
 const b=await H.chromium.launch(); const v=await H.login(b,'ceo'); const A=(m,p)=>H.api(v.page,m,p);
 const p=await H.login(b,'vihaan.chatterjee'); const P=(m,u)=>H.api(p.page,m,u);
 const QA='c868f1aa-6bc1-430c-b26a-11222919627f';
 let r=await P('GET','/opportunities/candidates?limit=100&departmentPublicIds='+QA); 
 const it=r.body.data?.items||[]; console.log('QA candidates',r.status,r.body.data?.total, JSON.stringify(r.body).slice(0,200));
 const out=[];
 for(const c of it){ const x=await A('GET','/employee-roles?limit=100&search='+encodeURIComponent(c.email)); const e=(x.body.data?.items||x.body.data||[])[0]; out.push({name:c.name,email:c.email,contractor:c.isContractor,canNominate:c.canNominate,remain:c.remainingAllocationPercentage,opps:(c.interviewOpportunities||[]).length,roles:(e?.roles||[]).map(q=>q.name||q.roleName||q.title)}); }
 console.log(JSON.stringify(out.filter(o=>o.roles.length===1),null,0));
 console.log('others', out.filter(o=>o.roles.length!==1).map(o=>o.name+':'+o.roles.join('/')).join(', '));
 require('fs').writeFileSync('qa-cands.json',JSON.stringify(out,null,1));
 await b.close();
})();
