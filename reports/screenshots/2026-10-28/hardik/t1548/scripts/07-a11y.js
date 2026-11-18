const { chromium, login, shot, save, BASE } = require('./lib');
(async () => {
  const b = await chromium.launch();
  const { ctx, page } = await login(b, 'kunal.jadeja@simformsolutions.com');
  const out = {};
  await page.goto(BASE + '/whats-new', { waitUntil: 'domcontentloaded' }); await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForTimeout(2000);
  out.h1 = await page.locator('h1').allInnerTexts();
  out.pageFilter = await page.getByRole('combobox', { name: /filter by page/i }).count();
  out.typeFilter = await page.getByRole('combobox', { name: /filter by type/i }).count();
  out.search = await page.getByRole('textbox', { name: /search release notes/i }).count();
  out.searchbox = await page.getByRole('searchbox', { name: /search release notes/i }).count();
  const txt = await page.locator('body').innerText();
  out.whatsNewBody = txt.split('\n').filter(l => l.trim()).slice(-8);
  out.bareTokens = txt.split('\n').map(l => l.trim()).filter(l => /^(-|—|–|N\/A|null|undefined|NaN)$/.test(l));
  // keyboard: tab into search and type
  await page.getByPlaceholder('Search release notes').fill('zzz');
  await page.waitForTimeout(600);
  out.afterSearch = (await page.locator('body').innerText()).split('\n').filter(l => /releases ·|No release|Try a/.test(l));
  out.shotSearch = await shot(page, 'em-whats-new-search-no-match');
  // module dropdown options when there is no data
  await page.getByPlaceholder('Search release notes').fill('');
  await page.getByText('All pages').first().click(); await page.waitForTimeout(700);
  out.pageOptions = await page.getByRole('option').allInnerTexts();
  out.shotPageOpts = await shot(page, 'em-whats-new-page-filter-empty');
  await page.keyboard.press('Escape');
  // Help page as EM
  await page.goto(BASE + '/help', { waitUntil: 'domcontentloaded' }); await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForTimeout(2000);
  const h = await page.locator('body').innerText();
  out.helpStats = h.match(/\d+\s*\n?\s*guides for you|\d+\s*\n?\s*pages covered/g);
  out.helpBare = h.split('\n').map(l => l.trim()).filter(l => /^(-|—|–|N\/A|null|undefined|NaN)$/.test(l));
  // Bell tabs a11y
  const bell = page.locator('button[aria-label*="otification" i]').first();
  out.bellLabel = await bell.getAttribute('aria-label');
  await bell.click(); await page.waitForTimeout(1000);
  out.tabs = await page.getByRole('tab').allInnerTexts();
  await page.keyboard.press('Escape');
  save('07-a11y', out); console.log(JSON.stringify(out, null, 1));
  await ctx.close(); await b.close();
})();
