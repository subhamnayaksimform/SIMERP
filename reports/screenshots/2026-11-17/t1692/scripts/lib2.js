const H = require('./h'); const fs = require('fs');
const DEPT='50d6a999-05dd-455f-8264-8e2d9308bb7d';
const results=[]; 
function chk(area,name,cond,detail){ const r={area,name,pass:!!cond,detail:detail===undefined?'':(typeof detail==='string'?detail:JSON.stringify(detail)).slice(0,300)}; results.push(r); console.log((r.pass?'PASS ':'FAIL ')+area+' | '+name+(r.pass?'':' | '+r.detail)); return r.pass; }
const pos=(t,n,extra={})=>({title:t,techStacks:['Java'],departmentPublicIds:[DEPT],requiredCount:n,priority:'MEDIUM',preferredSeniority:'MID',allocationType:'FIXED',allocationPercentage:10,tentativeAllocationDate:'2027-01-11',roundTitles:['R1: Tech','R2: Practical'],...extra});
module.exports={H,fs,DEPT,results,chk,pos,save:(n)=>fs.writeFileSync(n+'.json',JSON.stringify(results,null,1))};
