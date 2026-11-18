const { chromium } = require('@playwright/test');
const fs = require('fs');
require('dotenv').config({ path: '/home/subham/SIMERP new project/.env' });
const BASE = 'https://simerp-dev.simform.solutions';
const API = 'https://simerp-dev-api.simform.solutions/api/v1';
const PASS = process.env.SIMERP_PASSWORD.trim();
const SHOTDIR = '/home/subham/SIMERP new project/reports/screenshots/2026-10-19/notifications/';
const OUT = '/home/subham/SIMERP new project/reports/screenshots/2026-10-19/notifications/json/';
fs.mkdirSync(OUT, { recursive: true });
const em = (u) => u.includes('@') ? u : u + '@simformsolutions.com';
async function login(browser, user) {
  const email = em(user);
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle').catch(() => {});
  const credBtn = page.getByText('Login with Credentials').first();
  if (await credBtn.isVisible({ timeout: 10000 }).catch(() => false)) await credBtn.click();
  const emailInput = page.locator('input[name="email"], input[type="email"], #email, input[placeholder*="email" i]').first();
  await emailInput.waitFor({ timeout: 15000 });
  await emailInput.fill(email);
  await page.locator('input[type="password"]').first().fill(PASS);
  await page.locator('button[type="submit"]').first().click();
  await page.waitForURL(u => !/\/login|\/dev-login/i.test(u.toString()), { timeout: 30000 }).catch(() => {});
  await page.waitForLoadState('networkidle').catch(() => {});
  return { ctx, page };
}
async function api(page, method, path, body) {
  const r = await page.request.fetch(API + path, { method, data: body, headers: { Origin: BASE }, failOnStatusCode: false });
  const txt = await r.text(); let j; try { j = JSON.parse(txt); } catch { j = txt.slice(0, 500); }
  return { status: r.status(), body: j };
}
async function shot(page, name, full = false) { await page.screenshot({ path: SHOTDIR + name + '.png', fullPage: full }); return 'reports/screenshots/2026-10-19/notifications/' + name + '.png'; }
async function notifs(page, limit = 100) {
  const r = await api(page, 'GET', `/notifications?page=1&limit=${limit}`);
  const d = r.body && r.body.data; const items = Array.isArray(d) ? d : (d && (d.items || d.data || d.rows)) || [];
  return { status: r.status, items: items.map(n => ({ id: n.publicId || n.id, eventType: n.eventType, title: n.title, body: n.body || n.message, createdAt: n.createdAt, isRead: n.isRead, ctx: n.context })), raw: r.body };
}
function save(name, obj) { fs.writeFileSync(OUT + name + '.json', JSON.stringify(obj, null, 2)); }
module.exports = { chromium, login, api, shot, notifs, save, BASE, API, OUT };
