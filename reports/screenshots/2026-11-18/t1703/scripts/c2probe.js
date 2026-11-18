const {H,as}=require('./lib3'); const d=require('./c1probe.json');
(async()=>{ const b=await H.chromium.launch(); const A=await as(b,'ceo');
 const certs=d.all.flatMap(g=>g.certifications||[]); const pick=[certs.find(c=>c.expiryDate), certs.find(c=>!c.expiryDate)];
 for (const c of pick){ const r=await A('GET','/certifications/'+c.publicId); const t=r.body.data?.certificationType; console.log(r.status, c.title, JSON.stringify(t)); const T=d.types.find(x=>x.publicId===t?.publicId); console.log('  matches type list rule:', T && T.expirationType===t.expirationType && T.validityValue===t.validityValue && T.validityUnit===t.validityUnit); }
 await b.close(); })();
