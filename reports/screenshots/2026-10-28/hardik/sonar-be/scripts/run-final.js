const H = require('./h');
const user = process.argv[2], label = process.argv[3];
(async () => {
  const b = await H.chromium.launch(); const { page } = await H.login(b, user);
  const g = (p) => H.get(page, p);
  await H.check('dash:iconUrls', async () => {
    const r = await g('/dashboard/filter-options'); if (r.status !== 200) return { pass: 'info', actual: 'status ' + r.status };
    const deps = r.body.data.departments; const urls = deps.map((d) => d.iconUrl).filter(Boolean);
    const bad = urls.filter((u) => !/^https:\/\/[^/]+\/[^/]/.test(u) || /[^:]\/\//.test(u));
    return { pass: deps.length === 0 ? 'info' : bad.length === 0 && urls.length > 0, actual: `departments=${deps.length} withIcon=${urls.length} malformed=${bad.length} sample=${urls[0]}` };
  });
  await H.check('notif:humanizedText', async () => {
    const all = (await H.getAll(page, '/notifications', 15)).items.filter((n) => n.createdAt > '2026-10-23T05:30');
    const raw = all.filter((n) => /\b[A-Z]{2,}_[A-Z_]{2,}\b/.test(n.title + ' ' + (n.body || '')));
    return { pass: all.length === 0 ? 'info' : raw.length === 0, actual: `postDeployNotifications=${all.length} withRawEnumToken=${raw.length} ${raw.slice(0, 3).map((n) => n.body).join(' | ')} sample=${all.slice(0, 2).map((n) => n.body).join(' | ')}` };
  });
  H.done('final-' + label); await b.close();
})();
