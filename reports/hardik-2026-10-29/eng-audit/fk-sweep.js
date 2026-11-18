const fs=require('fs'),path=require('path');
const dir=process.argv[2];const files=[];(function w(d){for(const f of fs.readdirSync(d)){const p=path.join(d,f);if(fs.statSync(p).isDirectory())w(p);else if(p.endsWith('.prisma'))files.push(p)}})(dir);
const out=[];let fkTotal=0;
for(const f of files){const src=fs.readFileSync(f,'utf8');const re=/model\s+(\w+)\s*\{([\s\S]*?)\n\}/g;let m;
while((m=re.exec(src))){const [_,model,body]=m;const lead=new Set();
 for(const r of body.matchAll(/@@(?:index|unique|id)\(\s*(?:fields:\s*)?\[\s*(\w+)/g))lead.add(r[1]);
 for(const line of body.split('\n')){const t=line.trim();if(/^\w+\s+\w+.*@(id|unique)\b/.test(t))lead.add(t.split(/\s+/)[0]);}
 for(const r of body.matchAll(/^\s*(\w+)\s+(\w+)\??\s.*@relation\([^)]*fields:\s*\[([^\]]+)\]/gm)){const first=r[3].split(',')[0].trim();fkTotal++;if(!lead.has(first))out.push(`${model}.${first} -> ${r[2]}  (${path.relative(dir,f)})`)}}}
console.log('FK relations:',fkTotal,'unindexed:',out.length);console.log(out.sort().join('\n'));
