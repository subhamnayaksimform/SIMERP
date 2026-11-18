const {H,fs}=require('./lib2'); const ids=JSON.parse(fs.readFileSync('nlr-ids.json'));
const list='0344 0343 0340 0337 0335 0334 0332 0330 0329 0328 0327 0326 0325 0324 0323 0322 0321 0320 0317 0315 0314 0313 0312 0311 0310 0309 0308 0307 0306 0305 0304 0296'.split(' ').map(x=>'OPP-'+x);
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d); const out=[];
 for (const t of list) { const r=await A('PATCH','/opportunities/'+ids[t]+'/status',{status:'OPEN',isConfirmed:true}); const o=(await A('GET','/opportunities/openings?limit=100&withArchived=true&search='+t)).body.data.items; out.push([t,r.status,o[0]?.opportunity.status,o.filter(s=>s.activeNomination&&s.activeNomination.status!=='RELEASED').length]); }
 console.log(JSON.stringify(out)); await b.close(); })();
