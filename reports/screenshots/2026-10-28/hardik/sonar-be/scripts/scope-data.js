const H = require('./h');
(async () => {
  const b = await H.chromium.launch(); const { page } = await H.login(b, 'nandini.langalia');
  const projects = (await H.getAll(page, '/projects')).items.map((p) => ({ id: p.publicId, name: p.name, csm: (p.customerSuccessManager || p.csmEmployee || {}).publicId, pm: (p.projectManager || p.projectManagerEmployee || {}).publicId }));
  const emps = (await H.getAll(page, '/employees')).items.map((e) => ({ id: e.publicId, email: e.email, name: e.name, projects: [...(e.projects || []), ...(e.pastProjects || [])].map((p) => p.projectPublicId) }));
  H.save('pmo-projects', projects); H.save('pmo-employees', emps);
  console.log(projects.length, emps.length, JSON.stringify(projects[0]));
  await b.close();
})();
