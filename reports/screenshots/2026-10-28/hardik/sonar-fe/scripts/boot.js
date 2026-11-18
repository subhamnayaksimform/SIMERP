const { chromium, login, api, save } = require('./lib');
(async () => {
  const b = await chromium.launch();
  const user = process.argv[2];
  const { page } = await login(b, user);
  console.log('url', page.url());
  for (const p of ['/auth/me', '/users/me', '/auth/profile']) {
    const r = await api(page, 'GET', p);
    console.log(p, r.status, JSON.stringify(r.body).slice(0, 800));
  }
  await b.close();
})();
