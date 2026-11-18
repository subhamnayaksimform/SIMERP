const H=require('./h'); const SHOT='/home/subham/SIMERP new project/reports/screenshots/2026-11-18/t1685/'; const fs=require('fs'); const out={};
(async()=>{ const b=await H.chromium.launch(); const a=await H.login(b,'ceo'); const q=a.page;
 await H.go(q,'/employee/certifications?tab=organisation');
 const tipTxt=async()=> (await q.locator('[role=tooltip], [data-slot=tooltip-content]').allInnerTexts()).map(s=>s.trim()).filter(Boolean);
 // hover truncated title
 const t1=q.getByText(/^QA-E2E type 2026-10-23 - please d/).first(); await t1.hover(); await q.waitForTimeout(1200);
 out.titleTip=await tipTxt(); await q.screenshot({path:SHOT+'hover-title.png'}); console.log('title tooltip',out.titleTip);
 await q.mouse.move(5,5); await q.waitForTimeout(500);
 const t2=q.getByText(/^Chief Executive O/).first(); await t2.hover(); await q.waitForTimeout(1200);
 out.nameTip=await tipTxt(); await q.screenshot({path:SHOT+'hover-name.png'}); console.log('name tooltip',out.nameTip);
 await q.mouse.move(5,5); await q.waitForTimeout(500);
 // short (not cut) title should NOT get a tooltip
 const t3=q.getByText('AWS basics',{exact:true}).first(); await t3.hover(); await q.waitForTimeout(1200); out.shortTip=await tipTxt(); console.log('short title tooltip (expect none)',out.shortTip);
 await q.mouse.move(5,5);
 // click certificate row title -> holder/detail panel
 await q.getByText(/^QA-E2E sample certificate$/).first().click(); await q.waitForTimeout(1800);
 const panel=q.locator('[role=dialog], [data-slot=sheet-content]').last(); const pt=await panel.innerText().catch(()=>'');
 out.panelLines=pt.split('\n').filter(l=>/badge|proof/i.test(l)); console.log('panel proof/badge lines',out.panelLines, '| panel head:',pt.slice(0,120).replace(/\n/g,' / '));
 await q.screenshot({path:SHOT+'cert-panel.png'}); await q.keyboard.press('Escape'); await q.waitForTimeout(600);
 // click employee name -> employee side panel, look for certifications section + hover inside it
 await q.getByText('Kashyap Patel',{exact:true}).first().click(); await q.waitForTimeout(2000);
 const sp=q.locator('[role=dialog], [data-slot=sheet-content]').last(); const st=await sp.innerText().catch(()=>''); out.empPanelCert=(st.match(/Certification[^\n]*/g)||[]); console.log('emp panel cert headings',out.empPanelCert);
 await q.screenshot({path:SHOT+'emp-panel.png'});
 const cut=await sp.evaluate(el=>{ const xs=Array.from(el.querySelectorAll('*')).filter(e=>e.children.length===0&&e.scrollWidth>e.clientWidth+1&&(e.textContent||'').trim().length>5); xs.forEach((e,i)=>e.setAttribute('data-cut',i)); return xs.map(e=>e.textContent.trim()).slice(0,6); }).catch(()=>[]);
 out.panelCut=cut; console.log('cut texts in emp panel',cut);
 if(cut.length){ await q.locator('[data-cut="0"]').hover(); await q.waitForTimeout(1200); out.panelTip=await tipTxt(); console.log('panel hover tip',out.panelTip); await q.screenshot({path:SHOT+'emp-panel-hover.png'}); }
 fs.writeFileSync(SHOT+'c3c.json',JSON.stringify(out,null,1)); await b.close(); })().catch(e=>{console.error('CRASH',e.message);process.exit(1)});
