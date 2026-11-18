const {H,DEPT}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d); const page=v.page;
 const cr=await A('GET','/opportunities/candidates?limit=100&departmentPublicIds='+DEPT); let items=cr.body.data.items.filter(i=>(i.interviewOpportunities||[]).length>=1).sort((a,b)=>b.interviewOpportunities.length-a.interviewOpportunities.length);
 console.log('candidates with opps',items.length, items.slice(0,3).map(i=>[i.name,i.interviewOpportunities.length]));
 for (const w of [1280,1600,1900]) { const it=items[0]; await page.setViewportSize({width:w,height:900}); await H.go(page,'/employee'); await page.getByPlaceholder('Name, email, or project').fill(it.name); await page.waitForTimeout(3000);
  const cell=await page.evaluate((n)=>{const ths=[...document.querySelectorAll('thead th')].map(t=>t.textContent.trim());const i=ths.findIndex(t=>/Active Opportunit/i.test(t));const tr=[...document.querySelectorAll('tbody tr')].find(t=>t.textContent.includes(n));return tr&&tr.querySelectorAll('td')[i]?.innerText.replace(/\s+/g,' ');},it.name); console.log(w,it.name,'api opps',it.interviewOpportunities.length,'cell:',cell); }
 await b.close(); })();
