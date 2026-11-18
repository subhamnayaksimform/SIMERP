const { chromium, login, api, save } = require('./lib');
(async () => {
  const b = await chromium.launch();
  const { ctx, page } = await login(b, 'ceo@simformsolutions.com');
  const out = {};
  out.url = page.url();
  for (const p of ['/releases', '/releases?includePlanned=true', '/releases?includePlanned=abc', '/sync-queue/cron-runs/summary', '/sync-queue/cron-runs?jobName=release-announcement&limit=20', '/shared/feature-flags', '/employees/permissions']) {
    const r = await api(page, 'GET', p); out[p] = r;
  }
  save('01-admin-api', out);
  const perm = out['/employees/permissions'];
  console.log(JSON.stringify({ url: out.url, rel: out['/releases'], relP: out['/releases?includePlanned=true'], relBad: out['/releases?includePlanned=abc'] }, null, 1).slice(0, 2000));
  const s = out['/sync-queue/cron-runs/summary']; console.log('summary', s.status, JSON.stringify((s.body.data||[]).find(j => /release/.test(JSON.stringify(j)))));
  const runs = out['/sync-queue/cron-runs?jobName=release-announcement&limit=20']; console.log('runs', runs.status, JSON.stringify(runs.body).slice(0, 1500));
  const ff = out['/shared/feature-flags']; console.log('ff', ff.status, JSON.stringify(ff.body).match(/.{0,80}(cron\.enabled|releaseAnnouncement).{0,80}/g));
  console.log('perm', perm.status, JSON.stringify(perm.body).match(/.{0,60}releases.{0,60}/g));
  await ctx.close(); await b.close();
})();
