// Shared check harness for the SI4-T1563 backend regression run.
const L = require('./lib');
const results = [];
function items(b) { const d = b && b.data; if (Array.isArray(d)) return d; if (!d) return []; return d.items || d.data || d.rows || []; }
function total(b) { const d = b && b.data; if (!d) return undefined; return d.total ?? (Array.isArray(d) ? d.length : undefined); }
async function get(page, p) { return L.api(page, 'GET', p); }
async function getAll(page, base, max = 60) {
  const out = []; let tot;
  for (let p = 1; p <= max; p++) {
    const r = await get(page, `${base}${base.includes('?') ? '&' : '?'}page=${p}&limit=100`);
    if (r.status !== 200) return { status: r.status, items: out, body: r.body };
    const it = items(r.body); tot = total(r.body); out.push(...it);
    if (it.length < 100) break;
  }
  return { status: 200, items: out, total: tot };
}
async function check(key, fn) {
  if (process.env.ONLY && !new RegExp(process.env.ONLY).test(key)) return;
  const started = Date.now();
  try {
    const r = await fn();
    results.push({ key, ...r, ms: Date.now() - started });
    console.log((r.pass === true ? 'PASS' : r.pass === false ? 'FAIL' : String(r.pass).toUpperCase()).padEnd(8), key, '|', String(r.actual).slice(0, 400));
  } catch (e) {
    results.push({ key, pass: 'error', actual: 'script error: ' + e.message });
    console.log('ERROR   ', key, e.stack.split('\n').slice(0, 3).join(' '));
  }
}
function done(name) { L.save('results-' + name, results); }
const sortedBy = (arr, f, dir = 'asc', cmp) => {
  for (let i = 1; i < arr.length; i++) {
    const a = f(arr[i - 1]), b = f(arr[i]);
    if (a == null || b == null) continue;
    const c = cmp ? cmp(a, b) : (a < b ? -1 : a > b ? 1 : 0);
    if (dir === 'asc' ? c > 0 : c < 0) return { ok: false, at: i, a, b };
  }
  return { ok: true };
};
module.exports = { ...L, results, items, total, get, getAll, check, done, sortedBy };
