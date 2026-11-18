const {H,fs,as}=require('./lib3'); const URL=fs.readFileSync(process.argv[2],'utf8').trim();
const JAVA='50d6a999-05dd-455f-8264-8e2d9308bb7d';
(async()=>{ const b=await H.chromium.launch(); const A=await as(b,'ceo');
 let r=await A('GET','/teams-webhook-configs?groupType=DEPARTMENT'); const ex=(r.body.data||[]); console.log('existing',ex.map(c=>[c.reference?.name,c.isActive,c.webhookUrl.slice(-12)]));
 if(ex.some(c=>c.reference?.publicId===JAVA)){ console.log('JAVA already has a config — stopping'); return b.close(); }
 r=await A('POST','/teams-webhook-configs',{groupType:'DEPARTMENT',referencePublicId:JAVA,webhookUrl:URL,isActive:true});
 console.log('create',r.status,r.body.code,r.body.message,r.body.data?.publicId,r.body.data?.reference?.name);
 fs.writeFileSync('webhook-config.json',JSON.stringify({publicId:r.body.data?.publicId,dept:'JAVA'},null,1)); await b.close(); })();
