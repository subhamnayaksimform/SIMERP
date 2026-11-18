const H=require('./h'); const fs=require('fs');
const QA='c868f1aa-6bc1-430c-b26a-11222919627f';
const results=[];
function chk(area,name,cond,detail){ const r={area,name,pass:!!cond,detail:detail===undefined?'':(typeof detail==='string'?detail:JSON.stringify(detail)).slice(0,400)}; results.push(r); console.log((r.pass?'PASS ':'FAIL ')+area+' | '+name+' | '+r.detail.slice(0,250)); return r.pass; }
const pos=(t,n,extra={})=>({title:t,techStacks:['Manual Testing'],departmentPublicIds:[QA],requiredCount:n,priority:'MEDIUM',preferredSeniority:'MID',allocationType:'FIXED',allocationPercentage:10,tentativeAllocationDate:'2027-01-11',roundTitles:['R1: Tech'],...extra});
const sessions={};
async function as(b,u){ if(!sessions[u]) sessions[u]=await H.login(b,u); const s=sessions[u]; return (m,p,d)=>H.api(s.page,m,p,d); }
async function notesFor(A,since){ const r=await A('GET','/notifications?page=1&limit=100'); const d=r.body?.data; const items=Array.isArray(d)?d:(d?.items||[]); return items.filter(n=>new Date(n.createdAt)>=since); }
module.exports={H,fs,QA,results,chk,pos,as,sessions,notesFor,save:(n)=>fs.writeFileSync(n+'.json',JSON.stringify(results,null,1))};
