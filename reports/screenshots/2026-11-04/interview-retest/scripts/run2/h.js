// harness: console capture + helpers
const L = require('./lib');
function attach(page, bucket) {
  page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') bucket.push({ type: m.type(), url: page.url(), text: m.text().slice(0, 400) }); });
  page.on('requestfailed', r => { const f = r.failure(); if (f && !/ERR_ABORTED/.test(f.errorText)) bucket.push({ type: 'requestfailed', url: page.url(), text: f.errorText + ' ' + r.url().slice(0, 200) }); });
  page.on('response', r => { if (r.status() >= 400) bucket.push({ type: 'http' + r.status(), url: page.url(), text: r.request().method() + ' ' + r.url().slice(0, 200) }); });
  page.on('pageerror', e => bucket.push({ type: 'pageerror', url: page.url(), text: String(e.message).slice(0, 400) }));
}
async function go(page, path) {
  await page.goto(L.BASE + path, { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
  await page.waitForTimeout(1200);
}
async function emptyScan(page) {
  return page.evaluate(() => {
    const bad = [];
    document.querySelectorAll('td, dd, [role="cell"], p, span').forEach(el => {
      if (el.children.length) return;
      const t = (el.textContent || '').trim();
      if (/^(-|—|–|N\/A|NA|null|undefined|NaN|\[object Object\])$/.test(t) && el.offsetParent) bad.push({ t, ctx: (el.closest('tr,li,div')?.textContent || '').trim().slice(0, 120) });
    });
    return bad.slice(0, 15);
  });
}
async function sidebar(page) {
  return page.evaluate(() => Array.from(document.querySelectorAll('nav a, aside a, [data-sidebar] a, [data-sidebar="menu-button"]')).map(a => (a.textContent || '').trim() + ' -> ' + (a.getAttribute('href') || '')).filter(Boolean));
}
module.exports = { ...L, attach, go, emptyScan, sidebar };
// step runner
function runner(tag) {
  const results = []; const errs = [];
  async function step(id, fn) {
    const start = errs.length;
    try { const r = await fn(); results.push({ id, ok: true, ...(r || {}), errs: errs.slice(start) }); console.log('OK', id, JSON.stringify(r || {}).slice(0, 600)); }
    catch (e) { results.push({ id, ok: false, error: String(e.message).slice(0, 400), errs: errs.slice(start) }); console.log('FAIL', id, String(e.message).slice(0, 300)); }
    const ne = errs.slice(start); if (ne.length) console.log('  console:', JSON.stringify(ne).slice(0, 800));
  }
  function done() { L.save('results-' + tag, { results, errs }); }
  return { step, done, errs, results };
}
module.exports.runner = runner;
