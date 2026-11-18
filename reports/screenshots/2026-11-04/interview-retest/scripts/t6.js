const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('t6');
  const v = await H.login(b, 'vihaan.chatterjee'); H.attach(v.page, R.errs);
  const c = await H.login(b, 'ceo'); H.attach(c.page, R.errs);
  const OPP = '2b9e5dd6-a202-464d-b4da-0ad75e733a75';
  const POS = '3bca05c3-d240-4960-bf65-2473726a7cbe';
  await R.step('detail', async () => { const r = await H.api(v.page,'GET','/opportunities/'+OPP); return { s: r.status, positions: (r.body.data.positions||[]).map(p=>({id:p.publicId,t:p.title,req:p.requiredCount,closed:p.closedAt})), st: r.body.data.status }; });
  await R.step('I631-ceo-close', async () => { const r = await H.api(c.page,'POST','/opportunities/positions/'+POS+'/close',{reason:'QA-AUTO retest I631/I627'}); return { s: r.status, m: JSON.stringify(r.body).slice(0,300) }; });
  await R.step('I627-won-all-nlr', async () => { const r = await H.api(v.page,'PATCH','/opportunities/'+OPP+'/status',{status:'WON'}); return { s: r.status, m: JSON.stringify(r.body).slice(0,300) }; });
  await R.step('state', async () => { const r = await H.api(v.page,'GET','/opportunities/'+OPP); return { st: r.body.data.status }; });
  await R.step('restore-open', async () => { const r = await H.api(v.page,'PATCH','/opportunities/'+OPP+'/status',{status:'OPEN'}); return { s: r.status, m: JSON.stringify(r.body).slice(0,200) }; });
  await R.step('I631-ceo-reopen', async () => { const r = await H.api(c.page,'POST','/opportunities/positions/'+POS+'/reopen'); return { s: r.status, m: JSON.stringify(r.body).slice(0,200) }; });
  await R.step('final', async () => { const r = await H.api(v.page,'GET','/opportunities/'+OPP); return { st: r.body.data.status, pos: (r.body.data.positions||[]).map(p=>p.closedAt) }; });
  R.done(); await b.close();
})();
