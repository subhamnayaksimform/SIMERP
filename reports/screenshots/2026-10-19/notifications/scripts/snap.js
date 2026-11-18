// usage: node snap.js <label> user1 user2 ...
const L = require('./lib');
async function snap(b, label, users) {
  const takenAt = new Date().toISOString(); const out = { label, takenAt, users: {} };
  for (const u of users) {
    let ctx;
    try {
      const s = await L.login(b, u); ctx = s.ctx;
      const me = await L.api(s.page, 'GET', '/auth/me').catch(() => null);
      const n = await L.notifs(s.page, 100);
      const today = n.items.filter(i => i.createdAt >= '2026-10-19T00:00:00Z');
      out.users[u] = { status: n.status, me: me && me.body && me.body.data && (me.body.data.email || (me.body.data.employee && me.body.data.employee.email)), total: n.items.length, latestAt: n.items[0] && n.items[0].createdAt, today };
      console.log(label, u, n.status, 'today', today.length, 'latest', out.users[u].latestAt);
    } catch (e) { out.users[u] = { error: String(e).slice(0, 200) }; console.log(label, u, 'ERR', String(e).slice(0, 200)); }
    finally { if (ctx) await ctx.close(); }
  }
  L.save('snap-' + label, out); return out;
}
module.exports = { snap };
if (require.main === module) { (async () => { const b = await L.chromium.launch(); await snap(b, process.argv[2], process.argv.slice(3)); await b.close(); })(); }
