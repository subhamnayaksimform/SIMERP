const { chromium, login, api, shot, notifs, save, BASE } = require('./lib');
const user = process.argv[2], tag = process.argv[3];
const BAD = /(^|\s)(-|—|–|N\/A|NA|null|undefined|NaN)(\s|$)/;
(async () => {
  const b = await chromium.launch();
  const { ctx, page } = await login(b, user);
  const out = { user, landed: page.url() };
  const releaseCalls = [];
  page.on('response', r => { if (/\/api\/v1\/releases/.test(r.url())) releaseCalls.push({ url: r.url(), status: r.status() }); });
  const perm = await api(page, 'GET', '/employees/permissions');
  out.releasePerms = JSON.stringify(perm.body).match(/"releases":\{[^}]*\}/g);
  out.roles = JSON.stringify(perm.body).match(/"roles?":\[[^\]]*\]/g);
  for (const p of ['/releases', '/releases?includePlanned=true', '/releases?includePlanned=false', '/releases?includePlanned=1', '/releases?includePlanned=abc', '/releases/6.6.0', '/sync-queue/cron-runs/summary'])
    out['GET ' + p] = await api(page, 'GET', p);
  out['POST /releases'] = await api(page, 'POST', '/releases', { version: '9.9.9' });
  if (tag !== 'admin') out['POST run'] = await api(page, 'POST', '/sync-queue/cron-runs/release-announcement/run');
  const n = await notifs(page, 100);
  out.notifStatus = n.status; out.notifCount = n.items.length;
  out.eventTypes = [...new Set(n.items.map(i => i.eventType))];
  out.releaseNotifs = n.items.filter(i => /release/i.test(i.eventType || ''));
  out.emptyBodyNotifs = n.items.filter(i => !i.body).length;
  // What's New page
  await page.goto(BASE + '/whats-new', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle').catch(() => {});
  await page.waitForTimeout(1500);
  out.whatsNewUrl = page.url();
  out.whatsNewText = (await page.locator('main').innerText().catch(() => '')).slice(0, 1500);
  out.shotWhatsNew = await shot(page, `${tag}-whats-new`, true);
  // filters: try the include-planned toggle presence
  out.plannedToggle = await page.getByText(/planned/i).count();
  // Help page
  await page.goto(BASE + '/help', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle').catch(() => {});
  await page.waitForTimeout(1500);
  out.helpUrl = page.url();
  out.helpText = (await page.locator('main').innerText().catch(() => '')).slice(0, 2500);
  out.helpBadTokens = out.helpText.split('\n').filter(l => BAD.test(l.trim())).slice(0, 10);
  out.shotHelp = await shot(page, `${tag}-help`, true);
  // Sidebar entries
  out.sidebarWhatsNew = await page.getByRole('link', { name: /what.?s new/i }).count();
  // Bell
  const bell = page.locator('button[aria-label*="otification" i]').first();
  out.bellFound = await bell.count();
  if (out.bellFound) {
    await bell.click(); await page.waitForTimeout(1500);
    out.shotBell = await shot(page, `${tag}-bell`);
    const tab = page.getByRole('tab', { name: /what.?s new/i });
    out.bellWhatsNewTab = await tab.count();
    if (out.bellWhatsNewTab) { await tab.first().click(); await page.waitForTimeout(1200); out.bellWhatsNewText = (await page.locator('[role="tabpanel"], [role="dialog"]').last().innerText().catch(() => '')).slice(0, 800); out.shotBellWN = await shot(page, `${tag}-bell-whats-new-tab`); }
    await page.keyboard.press('Escape');
  }
  out.releaseCalls = releaseCalls;
  save(`02-${tag}`, out);
  const brief = { ...out }; for (const k of Object.keys(brief)) if (k.startsWith('GET ') || k.startsWith('POST ')) brief[k] = { s: brief[k].status, d: JSON.stringify(brief[k].body).slice(0, 160) };
  delete brief.helpText;
  console.log(JSON.stringify(brief, null, 1));
  await ctx.close(); await b.close();
})();
