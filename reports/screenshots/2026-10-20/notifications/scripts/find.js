const L=require('./lib');(async()=>{const b=await L.chromium.launch();const {page}=await L.login(b,'bhumi.chauhan');
const r=await L.api(page,'GET','/projects/99ac60dc-5c74-4e18-8cf1-253fc622a270');
const s=JSON.stringify(r.body);const i=s.indexOf('Iti Chatterjee');console.log(r.status,s.slice(Math.max(0,i),i+900));await b.close()})();
