const {H}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const page=v.page; await page.setViewportSize({width:1600,height:700});
 await H.go(page,'/pre-sales'); await page.getByPlaceholder(/search/i).first().fill('OPP-0349'); await page.waitForTimeout(2500);
 await page.getByRole('button',{name:/kanban/i}).or(page.getByRole('tab',{name:/kanban/i})).first().click(); await page.waitForTimeout(2000);
 const info=await page.evaluate(()=>{ const cols=[...document.querySelectorAll('[aria-label$="column, 0 cards"],[aria-label*="column"]')]; const t=cols.find(c=>/No Longer Required column/.test(c.getAttribute('aria-label')));
   let sc=t; while(sc && sc.scrollWidth<=sc.clientWidth) sc=sc.parentElement; if(sc) sc.scrollLeft=sc.scrollWidth; return {label:t&&t.getAttribute('aria-label'), scrolled:!!sc}; });
 await page.waitForTimeout(800); await H.shot(page,'G-kanban-nlr-right'); console.log(info);
 const w=await page.evaluate(()=>[...document.querySelectorAll('[aria-label*="column"]')].map(e=>e.getAttribute('aria-label')).filter(l=>/Won|Project Allocated|No Longer/.test(l))); console.log(w);
 await b.close(); })();
