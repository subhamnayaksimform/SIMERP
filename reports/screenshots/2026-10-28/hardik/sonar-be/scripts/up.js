const H = require('./h');
(async () => {
  const b = await H.chromium.launch(); const { page } = await H.login(b, 'nandini.langalia');
  const it = H.items((await H.get(page, '/utilization-priority?page=1&limit=100')).body);
  const keys = {}; let shown = 0; let detailStatus = {};
  for (const x of it.slice(0, 40)) { const d = await H.get(page, '/utilization-priority/' + x.publicId); detailStatus[d.status] = (detailStatus[d.status] || 0) + 1; const s = JSON.stringify(d.body.data || {}); const m = s.match(/MISSING:[A-Z+]+|"DEFAULT"/g); if (m) for (const k of m) keys[k] = (keys[k] || 0) + 1; const bd = s.match(/"(scoreBreakdown|breakdown|weights?)":[^\]]{0,300}/); if (bd && !keys._bd) keys._bd = bd[0]; if (!shown && d.status === 200) { console.log(s.slice(0, 1200)); shown = 1; } }
  console.log(JSON.stringify(detailStatus), JSON.stringify(keys));
  H.save('up-profiles', { detailStatus, keys });
  await b.close();
})();
