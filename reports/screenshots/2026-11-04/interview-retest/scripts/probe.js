const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const { page } = await H.login(b, 'vihaan.chatterjee');
  const out = {};
  for (const q of ['OPP-0344','OPP-0335','OPP-0334','OPP-0336']) {
    const r = await H.api(page,'GET','/opportunities/openings?search='+q);
    out[q] = { status: r.status, body: JSON.stringify(r.body).slice(0, 1800) };
  }
  console.log(JSON.stringify(out,null,1));
  await b.close();
})();
