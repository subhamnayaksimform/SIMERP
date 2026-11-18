const H=require('./h');
(async()=>{ const b=await H.chromium.launch(); const s=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(s.page,m,p,d);
 const r=await A('GET','/projects/a8869918-6732-4886-9153-8dfa5b06c79a'); const d=r.body.data; console.log(r.status,Object.keys(d||{}));
 const team=d.teamMembers||d.assignments||d.projectAssignments||d.members||[]; console.log('team',team.length, JSON.stringify(team[0]||{}).slice(0,800));
 require('fs').writeFileSync('proj.json',JSON.stringify(d,null,1)); await b.close(); })();
