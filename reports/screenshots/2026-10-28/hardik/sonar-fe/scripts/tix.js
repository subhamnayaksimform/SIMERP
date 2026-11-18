const H = require('./h');
(async () => {
  const b = await H.chromium.launch(); const { page } = await H.login(b, 'vihaan.chatterjee');
  let all = [];
  for (let p = 1; p <= 6; p++) { const r = await H.api(page, 'GET', `/allocation-tickets?page=${p}&limit=100`); const d = r.body.data; const it = Array.isArray(d) ? d : (d.items || []); all = all.concat(it); if (p === 1) console.log(r.status, JSON.stringify(it[0]).slice(0, 600)); if (it.length < 100) break; }
  const types = {}; all.forEach(t => { const k = t.type || t.ticketType || t.requestType; types[k] = (types[k] || 0) + 1; });
  console.log('total', all.length, JSON.stringify(types));
  const ua = all.filter(t => /UPDATE/i.test(t.type || t.ticketType || ''));
  const out = [];
  for (const t of ua.slice(0, 25)) { const id = t.publicId || t.id; const r = await H.api(page, 'GET', `/allocation-tickets/${id}`); const d = r.body.data || {}; const body = d.body || d.details || d; out.push({ id, num: t.ticketNumber, status: t.status, sdc: JSON.stringify(d).match(/"startDateChange":"?\w+/)?.[0], edc: JSON.stringify(d).match(/"endDateChange":"?\w+/)?.[0], hist: JSON.stringify(d).match(/"editHistory":\[[^\]]{0,80}/)?.[0] }); }
  H.save('ua-tickets', out); console.log(JSON.stringify(out, null, 0).slice(0, 3000));
  await b.close();
})();
