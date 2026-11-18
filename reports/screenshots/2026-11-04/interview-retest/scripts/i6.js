const {H}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d);
 for (const arch of ['','&withArchived=true']) { const c=(await A('GET','/opportunities/openings/stage-counts?'+arch.slice(1))).body.data; const out=[];
  for (const [k,n] of Object.entries(c)) { const t=await A('GET','/opportunities/openings?limit=100&stages='+k+arch); out.push([k,n,t.body.data?t.body.data.total:t.status+':'+t.body.code]); }
  console.log(arch||'default', JSON.stringify(out.filter(x=>x[1]!==x[2]))); }
 await b.close(); })();
