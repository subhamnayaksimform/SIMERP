const {H}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d);
 let r=await A('GET','/opportunities/openings?limit=10&page=2'); console.log(JSON.stringify(r.body).slice(0,400));
 r=await A('GET','/opportunities/openings?limit=100&page=1'); console.log(r.status,Object.keys(r.body.data));
 const sum=o=>Object.values(o).reduce((a,c)=>a+c,0);
 for (const q of ['','withArchived=true','requestType=INTERVIEW','requestType=INTERVIEW&withArchived=true','view=BOARD']) { const c=await A('GET','/opportunities/openings/stage-counts?'+q); const t=await A('GET','/opportunities/openings?limit=100&'+q); console.log(q||'(none)','counts',c.status,(c.body.data?sum(c.body.data):null),'list',t.status,t.body.data && t.body.data.total, t.body.code); }
 r=await A('GET','/opportunities/assignees?role=PM'); console.log('assignees PM',r.status,r.body.code);
 await b.close(); })();
