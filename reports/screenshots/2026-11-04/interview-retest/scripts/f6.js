const H = require('./h'); const fs = require('fs');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('f6');
  const S = JSON.parse(fs.readFileSync('state3.json')); const T=S.opp.ticketNumber; const OID=S.opp.publicId;
  await R.step('board-read-roles', async () => {
    const out={};
    for (const u of ['vihaan.chatterjee','ceo','tarun.sharma','kunal.jadeja','sudhansu.patel','kashyap.patel','hardik.trivedi']) { const c=await H.login(b,u); const r=await H.api(c.page,'GET','/opportunities/openings?limit=100&search='+T); const d=await H.api(c.page,'GET','/opportunities/'+OID); out[u]=[r.status,d.status]; await c.ctx.close(); }
    return out;
  });
  const v = await H.login(b, 'vihaan.chatterjee'); H.attach(v.page, R.errs); const page=v.page;
  await R.step('ui-board-list', async () => { await H.go(page,'/pre-sales'); await page.getByPlaceholder(/search/i).first().fill(T); await page.waitForTimeout(2500); await H.shot(page,'F-board-list'); return { bad: await H.emptyScan(page), rows: await page.locator('table tbody tr').count() }; });
  await R.step('ui-board-kanban', async () => { await page.getByRole('tab',{name:/kanban/i}).or(page.getByRole('button',{name:/kanban/i})).first().click(); await page.waitForTimeout(2000); await H.shot(page,'F-board-kanban',true); return {}; });
  await R.step('ui-detail', async () => { await H.go(page,'/pre-sales/'+OID); await H.shot(page,'F-detail',true); const t=await page.locator('body').innerText(); return { bad: await H.emptyScan(page), hasRejected:/Rejected by (PMO|Client)/.test(t), hasReleased:/Released/.test(t), seatsText:(t.match(/\d+ ?\/ ?\d+ filled/g)||[]) }; });
  await R.step('ui-picker', async () => { await page.getByRole('button',{name:/Add\/ ?Shortlist/}).first().click(); await page.waitForTimeout(2500); await H.shot(page,'F-picker'); const t=(await page.getByRole('dialog').innerText().catch(()=>'')).replace(/\n+/g,' | ').slice(0,500); return {t}; });
  await R.step('ui-employee-profile-history', async () => { await H.go(page,'/employee'); await page.getByPlaceholder('Name, email, or project').fill('Karan Modi'); await page.waitForTimeout(2500); await H.shot(page,'F-emp-list'); return { cell: await page.evaluate(()=>{const ths=[...document.querySelectorAll('thead th')].map(t=>t.textContent.trim());const i=ths.findIndex(t=>/Active Opportunit/i.test(t));const tr=[...document.querySelectorAll('tbody tr')][0];return tr?.querySelectorAll('td')[i]?.innerText;}) }; });
  await R.step('ui-whats-new', async () => { await H.go(page,'/whats-new'); const t=await page.locator('body').innerText(); return { hasInterview:/interview/i.test(t), snippet:t.split('\n').filter(l=>/interview|opportunit/i.test(l)).slice(0,6) }; });
  R.done(); await b.close();
})();
