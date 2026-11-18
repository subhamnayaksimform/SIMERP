const L = require('./lib');
(async () => {
  const b = await L.chromium.launch();
  const { page } = await L.login(b, process.argv[2]);
  const eps = ['/opportunities/openings?page=1&limit=100','/allocation-tickets/interview-requests?page=1&limit=100','/opportunities/candidates?page=1&limit=100','/opportunities/assignees?role=PM','/opportunities/lookup?','/employees?page=1&limit=100','/projects?page=1&limit=100','/allocation-tickets?page=1&limit=100','/notifications?page=1&limit=100','/utilization-priority?page=1&limit=100','/employee-roles?page=1&limit=100','/employee-ratings?page=1&limit=100','/dashboard/activity?page=1&limit=100','/weekly-update?page=1&limit=100','/competencies?page=1&limit=100'];
  const terms = [null,'%','_','\\',"'",'"','%%','a%b','java'];
  const res={};
  for (const e of eps){ const row=[]; for (const t of terms){ const u = e + (t===null?'':(e.endsWith('?')?'':'&')+'search='+encodeURIComponent(t)); const r=await L.api(page,'GET',u); const d=r.body&&r.body.data; const tot = d? (d.total ?? (Array.isArray(d)?d.length:(d.items?d.items.length:'?'))):'-'; row.push(r.status===200?tot:('E'+r.status)); } console.log(e.split('?')[0].padEnd(40), row.join('\t')); res[e]=row; }
  L.save('search-matrix-'+process.argv[2], {terms, res});
  await b.close();
})();
