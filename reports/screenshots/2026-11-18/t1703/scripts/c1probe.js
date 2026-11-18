const {H,as}=require('./lib3');
(async()=>{ const b=await H.chromium.launch(); const A=await as(b,'ceo');
 let r=await A('GET','/certifications/types?limit=300'); const types=(r.body.data?.items||r.body.data||[]); console.log('types',r.status,types.length, JSON.stringify(types[0]||{}).slice(0,300));
 r=await A('GET','/certifications/partnerships?limit=300'); const parts=(r.body.data?.items||r.body.data||[]); console.log('partnerships',r.status,parts.length);
 let all=[]; for(let p=1;p<20;p++){ r=await A('GET','/certifications/organisation/certificates?page='+p+'&limit=100'); const it=r.body.data?.items||[]; if(p===1) console.log('org certs',r.status,r.body.data?.total ?? r.body.data?.meta, JSON.stringify(it[0]||r.body).slice(0,500)); if(!it.length) break; all=all.concat(it); }
 console.log('collected',all.length);
 const tid=new Set(types.map(t=>t.publicId)); const missing=all.filter(c=>{const t=c.certificationType?.publicId||c.certificationTypePublicId; return t&&!tid.has(t);});
 console.log('certs with type not in live list:',missing.length, JSON.stringify(missing.slice(0,3)).slice(0,800));
 require('fs').writeFileSync('c1probe.json',JSON.stringify({types,parts,all},null,1));
 await b.close(); })();
