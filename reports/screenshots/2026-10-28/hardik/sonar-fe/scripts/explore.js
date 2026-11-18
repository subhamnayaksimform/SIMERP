const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const user = process.argv[2]; const tag = process.argv[3];
  const errs = [];
  const t0=Date.now(); const { ctx, page } = await H.login(b, user); H.attach(page, errs);
  const T = (m) => console.log(m, Date.now()-t0);
  T('login');
  const links = await page.evaluate(() => Array.from(document.querySelectorAll('a[href]')).map(a => (a.textContent || '').trim().slice(0,40) + ' -> ' + a.getAttribute('href')));
  T('links'); console.log(JSON.stringify([...new Set(links)]));
  const btns = await page.evaluate(() => Array.from(document.querySelectorAll('[aria-expanded]')).map(a => (a.textContent || '').trim().slice(0,30) + '|' + a.getAttribute('aria-expanded') + '|' + a.getAttribute('data-sidebar')));
  console.log(JSON.stringify(btns));
  await H.shot(page, tag + '-landing'); T('shot');
  console.log('errs', JSON.stringify(errs));
  await b.close();
})();
