const H = require('./h');
const T = require(H.OUT + 'org-teams.json');
(async () => {
  const user = process.argv[2];
  const b = await H.chromium.launch(); const { page } = await H.login(b, user);
  const g = (p) => H.get(page, p);
  const l = await g('/weekly-update?page=1&limit=100'); const s = await g('/weekly-update/sessions?page=1&limit=100');
  console.log(user, 'list', l.status, H.total(l.body), 'sessions', s.status, JSON.stringify(s.body.data).slice(0, 600));
  const team = T.find((t) => t.rm === user + '@simformsolutions.com');
  if (team) for (const d of ['2026-10-27', '2026-10-20']) { const st = await g(`/weekly-update/status?teamPublicId=${team.publicId}&meetingDate=${d}`); console.log('status', d, st.status, JSON.stringify(st.body.data || st.body).slice(0, 400)); const ln = await g(`/weekly-update/last-notes?teamPublicId=${team.publicId}&meetingDate=${d}`); console.log('last-notes', d, ln.status, JSON.stringify(ln.body.data || ln.body).slice(0, 300)); }
  await b.close();
})();
