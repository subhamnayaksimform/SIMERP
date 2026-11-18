const E=require('./out/employees.json'), R=require('./out/roles.json'), P=require('./out/projects.json');
const byId=new Map(E.map(e=>[e.publicId,e])); const roleBy=new Map(R.map(r=>[r.publicId,r]));
const isTMfor=(id,dept)=>{const r=roleBy.get(id); return r && r.roles.some(x=>x.name==='TM') && r.departments.some(d=>d.publicId===dept);};
const rolesOf=id=>{const r=roleBy.get(id); return r? r.roles.map(x=>x.name).filter(n=>n!=='EMPLOYEE').join('/'):'?';};
function chain(e){ const dept=e.department&&e.department.publicId; const rm=e.team&&e.team.reportingManager; if(!rm) return {rm:null}; const seq=[rm.publicId]; let cur=rm.publicId, reached=null; const seen=new Set();
  for(let i=0;i<16;i++){ if(isTMfor(cur,dept)){reached=cur;break;} if(seen.has(cur)) break; seen.add(cur); const c=byId.get(cur); if(!c||!c.team||!c.team.reportingManager){break;} cur=c.team.reportingManager.publicId; seq.push(cur);} 
  return {rm:rm.publicId, seq, tm:reached, middle: reached? seq.slice(1,seq.indexOf(reached)) : []}; }
module.exports={E,R,P,byId,roleBy,isTMfor,rolesOf,chain};
if(require.main===module){
 const owners=new Map(); for(const p of P){ for(const [k,role] of [['projectManager','PM'],['customerSuccessManager','CSM']]) if(p[k]) { const a=owners.get(p[k].publicId)||[]; a.push(role+':'+p.name.split(' |')[0]); owners.set(p[k].publicId,a);} }
 const hits=new Map();
 for(const e of E){ const c=chain(e); if(!c.middle) continue; for(const m of c.middle){ if(owners.has(m)){ const a=hits.get(m)||[]; a.push(e); hits.set(m,a);} } }
 for(const [m,es] of hits){ const me=byId.get(m); console.log('\n##', me&&me.name, me&&me.email, rolesOf(m), 'owns', owners.get(m).join(', '), '| middle for', es.length);
   for(const e of es.slice(0,400)){ const c=chain(e); if(e.remainingAllocationPercentage>=10 && !e.resignation && !e.pip) console.log('  ', e.name, e.email, e.publicId, e.department.name, 'free', e.remainingAllocationPercentage, 'line:', c.seq.map(id=>(byId.get(id)||{name:id}).name+'['+rolesOf(id)+']').join(' > '), 'TM=', (byId.get(c.tm)||{}).name); }
 }
 // RM-is-owner counts
 let n=0; for(const e of E){const c=chain(e); if(c.rm && owners.has(c.rm)) n++;} console.log('\nemployees whose RM owns a project:', n);
}
