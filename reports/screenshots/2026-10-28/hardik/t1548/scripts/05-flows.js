const { chromium, login, api, shot, save, BASE } = require('./lib');
require('dotenv').config({ path: '/home/subham/SIMERP new project/.env' });
const PASS = process.env.SIMERP_PASSWORD.trim();
async function credLogin(page, email) {
  const credBtn = page.getByText('Login with Credentials').first();
  if (await credBtn.isVisible({ timeout: 10000 }).catch(() => false)) await credBtn.click();
  const e = page.locator('input[name="email"], input[type="email"], #email, input[placeholder*="email" i]').first();
  await e.waitFor({ timeout: 15000 }); await e.fill(email);
  await page.locator('input[type="password"]').first().fill(PASS);
  await page.locator('button[type="submit"]').first().click();
  await page.waitForURL(u => !/\/login|\/dev-login/i.test(u.toString()), { timeout: 30000 }).catch(() => {});
  await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForTimeout(2500);
}
async function logout(page) {
  await page.goto(BASE + '/profile', { waitUntil: 'domcontentloaded' }); await page.waitForLoadState('networkidle').catch(() => {});
  const av = page.locator('header').getByRole('button').last(); await av.click().catch(() => {});
  await page.waitForTimeout(800);
  const lo = page.getByText(/log ?out/i).first();
  if (await lo.isVisible().catch(() => false)) { await lo.click(); await page.waitForTimeout(1000); const c = page.getByRole('button', { name: /log ?out|confirm|yes/i }).last(); if (await c.isVisible().catch(() => false)) await c.click(); await page.waitForTimeout(2500); return true; }
  await shot(page, 'debug-logout');
  return false;
}
(async () => {
  const b = await chromium.launch();
  const out = {}; process.on('exit', () => { save('05-flows', out); console.log(JSON.stringify(out, null, 1)); });
  // A. Admin: Releases row in Roles & Permissions (read only)
  { const { ctx, page } = await login(b, 'ceo@simformsolutions.com');
    await page.goto(BASE + '/admin/roles-and-permissions', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForTimeout(1500);
    await page.getByText('Releases', { exact: true }).first().click(); await page.waitForTimeout(1500);
    out.rolesReleasesShot = await shot(page, 'admin-roles-releases-module');
    out.rolesReleasesText = (await page.locator('body').innerText()).split('\n').filter(l => l.trim()).slice(0, 200).join(' | ').match(/Releases.{0,400}/g);
    await ctx.close(); }
  // B. Employee: signed-out deep link to /whats-new returns there after login
  { const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } }); const page = await ctx.newPage();
    await page.goto(BASE + '/whats-new', { waitUntil: 'domcontentloaded' }); await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForTimeout(1500);
    out.signedOutUrl = page.url();
    out.returnToStored = await page.evaluate(() => sessionStorage.getItem('login_return_to'));
    out.signedOutShot = await shot(page, 'employee-signed-out-whats-new');
    await credLogin(page, 'kashyap.patel@simformsolutions.com');
    out.afterLoginUrl = page.url();
    out.afterLoginShot = await shot(page, 'employee-return-to-whats-new');
    out.returnToAfter = await page.evaluate(() => sessionStorage.getItem('login_return_to'));
    // C. logout, then poison sessionStorage with an off-site path and log in again
    out.loggedOut = await logout(page);
    out.afterLogoutUrl = page.url();
    if (!/login/.test(page.url())) { await page.goto(BASE + '/login'); await page.waitForTimeout(1500); }
    out.releasesAfterLogout = (await page.request.get('https://simerp-dev-api.simform.solutions/api/v1/releases', { headers: { Origin: BASE }, failOnStatusCode: false })).status();
    await page.evaluate(() => sessionStorage.setItem('login_return_to', '//evil.example.com/phish'));
    await credLogin(page, 'kashyap.patel@simformsolutions.com');
    out.poisonedUrl = page.url();
    out.poisonedShot = await shot(page, 'employee-return-to-offsite-rejected');
    await logout(page);
    if (!/login/.test(page.url())) { await page.goto(BASE + '/login'); await page.waitForTimeout(1500); }
    await page.evaluate(() => sessionStorage.setItem('login_return_to', '/\\evil.example.com'));
    await credLogin(page, 'kashyap.patel@simformsolutions.com');
    out.poisoned2Url = page.url();
    await logout(page);
    if (!/login/.test(page.url())) { await page.goto(BASE + '/login'); await page.waitForTimeout(1500); }
    await page.evaluate(() => sessionStorage.setItem('login_return_to', '/help?module=profile'));
    await credLogin(page, 'kashyap.patel@simformsolutions.com');
    out.helpReturnUrl = page.url();
    await ctx.close(); }
  save('05-flows', out);
  console.log(JSON.stringify(out, null, 1));
  await b.close();
})();
