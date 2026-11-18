const { chromium, login, api, save } = require('./lib.js');
(async()=>{const b=await chromium.launch();const {page}=await login(b,'ceo');
const all=[];let p=1,tp=1;do{const r=await api(page,'GET',`/projects?page=${p}&limit=100`);const d=r.body.data;all.push(...d.items);tp=d.totalPages;p++;}while(p<=tp&&p<30);
const ctl=await api(page,'GET','/projects?search=EventDriven&page=1&limit=100');
const hits=all.filter(x=>/allio/i.test(JSON.stringify(x)));
const names={};all.forEach(x=>{const n=(x.name||x.projectName||'').trim().toLowerCase();names[n]=(names[n]||0)+1});
const dups=Object.entries(names).filter(([n,c])=>c>1);
const out={total:all.length,controlSearchEventDriven:ctl.body.data.total,allioHits:hits.map(x=>({id:x.publicId||x.id,name:x.name||x.projectName,zoho:x.zohoProjectId,status:x.status})),duplicateNames:dups,sampleKeys:Object.keys(all[0]||{})};
save('allio-admin',out);console.log(JSON.stringify(out,null,1));await b.close();})();
