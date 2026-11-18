const H = require('./h'); const fs=require('fs');
(async () => {
  const b = await H.chromium.launch(); const v = await H.login(b,'vihaan.chatterjee'); const S=JSON.parse(fs.readFileSync('state3.json'));
  for (const s of ['NO_LONGER_REQUIRED','CLOSED']) { const r = await H.api(v.page,'PATCH','/opportunities/'+S.opp.publicId+'/status',{status:s,isConfirmed:true}); console.log(s, r.status, r.body.code, r.body.message); if (r.status===200) break; }
  const d = await H.api(v.page,'GET','/opportunities/'+S.opp.publicId); console.log(d.body.data.status);
  await b.close();
})();
