const { chromium, login, shot, save, BASE } = require('./lib');
(async () => {
  const b = await chromium.launch();
  const { ctx, page } = await login(b, 'kashyap.patel@simformsolutions.com');
  const out = { landed: page.url() };
  const tryPath = async (val, name) => {
    await page.evaluate(v => sessionStorage.setItem('login_return_to', v), val);
    await page.goto(BASE + '/login', { waitUntil: 'domcontentloaded' });
    await page.waitForURL(u => !/\/login/.test(u.toString()), { timeout: 20000 }).catch(() => {});
    await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForTimeout(1500);
    const r = { set: val, url: page.url(), left: await page.evaluate(() => sessionStorage.getItem('login_return_to')) };
    if (name) r.shot = await shot(page, name);
    return r;
  };
  out.whatsNew = await tryPath('/whats-new', 'employee-login-return-to-whats-new');
  out.helpQuery = await tryPath('/help?module=profile');
  out.protoRel = await tryPath('//evil.example.com/phish', 'employee-login-return-to-offsite-blocked');
  out.backslash = await tryPath('/\\evil.example.com');
  out.absolute = await tryPath('https://evil.example.com/');
  out.loginLoop = await tryPath('/login');
  save('06-returnto', out); console.log(JSON.stringify(out, null, 1));
  await ctx.close(); await b.close();
})();
