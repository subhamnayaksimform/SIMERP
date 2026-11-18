const L = require('./lib');
(async () => {
  const b = await L.chromium.launch();
  const { page } = await L.login(b, 'nandini.langalia');
  const d = await L.api(page,'GET','/departments?page=1&limit=100'); const depts=d.body.data.departments;
  const teams=[];
  for (const dp of depts){ const r=await L.api(page,'GET','/teams?departmentId='+dp.publicId); for(const t of (r.body.data||[])) teams.push({publicId:t.publicId,name:t.name,dept:dp.name,createdAt:t.createdAt,color:t.color,isDefault:t.isDefault,rm:t.reportingManager&&t.reportingManager.email,members:(t.employees||[]).map(e=>e.email)}); }
  L.save('org-teams', teams); console.log('depts',depts.length,'teams',teams.length);
  await b.close();
})();
