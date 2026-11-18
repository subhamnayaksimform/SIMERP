const H = require('./h');
const P = require(H.OUT + 'pmo-projects.json'); const E = require(H.OUT + 'pmo-employees.json');
(async () => {
  const b = await H.chromium.launch(); const { page } = await H.login(b, 'nandini.langalia');
  const owners = { tarun: '4174b8c1-9d89-4b61-bfd7-075924620091', nikhil: 'a69e02b1-4b64-458c-8f61-77f3c62fa05a' };
  for (const [who, list] of [['tarun', ['khushi.jobanputra', 'neel.solanki', 'kavya.bose']], ['nikhil', ['ekta.shetty', 'urvi.patil', 'yash.dave']]]) {
    const mine = new Set(P.filter((p) => p.csm === owners[who] || p.pm === owners[who]).map((p) => p.id));
    for (const u of list) {
      const e = E.find((x) => x.email.startsWith(u + '@'));
      const r = await H.get(page, `/employees/${e.id}?timeFrame=all`);
      const r2 = r.status === 200 ? r : await H.get(page, `/employees/${e.id}`);
      const d = r2.body.data; const ps = [...(d.projects || []), ...(d.pastProjects || [])];
      const hits = ps.filter((p) => mine.has(p.projectPublicId || p.publicId)).map((p) => `${p.name} ${p.allocationStartDate || ''}..${p.allocationEndDate || ''}`);
      console.log(who, u, r.status, 'onOwnedProject:', hits.join('; ') || 'NONE', '| all:', ps.map((p) => p.name).join(', ').slice(0, 200));
    }
  }
  await b.close();
})();
