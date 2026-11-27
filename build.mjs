// Kaynak dosyaları birleştirir, küçültür ve dist/ klasörüne yazar.
import {transform} from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const out='dist', read=f=>fs.readFileSync(f,'utf8');
fs.rmSync(out,{recursive:true,force:true});
fs.mkdirSync(out+'/assets',{recursive:true});
let html=read('index.html');
const jsFiles=[...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m=>m[1]);
const js=jsFiles.map(f=>read(f)).join(';\n');
const cssSrc=read('css/site.css');
const j=await transform(js,{minify:true,target:'es2018',legalComments:'none'});
const c=await transform(cssSrc,{loader:'css',minify:true,legalComments:'none'});
const h=s=>crypto.createHash('sha1').update(s).digest('hex').slice(0,8);
const jn=`assets/app.${h(j.code)}.js`, cn=`assets/site.${h(c.code)}.css`;
fs.writeFileSync(`${out}/${jn}`,j.code);
// font yolları ../fonts/ → assets/ içinden de ../fonts/ geçerli
fs.writeFileSync(`${out}/${cn}`,c.code);
html=html.replace(/<!--js-->[\s\S]*?<!--\/js-->/,`<script src="${jn}" defer></script>`)
         .replace(/<!--css-->[\s\S]*?<!--\/css-->/,`<link rel="stylesheet" href="${cn}">`);
fs.writeFileSync(`${out}/index.html`,html);
for(const d of ['img','fonts','.well-known']) fs.cpSync(d,`${out}/${d}`,{recursive:true});
for(const f of ['favicon.svg','apple-touch-icon.png','og.png','robots.txt','sitemap.xml','404.html','CNAME','.nojekyll'])
  if(fs.existsSync(f)) fs.copyFileSync(f,`${out}/${f}`);
console.log('ok',jn,j.code.length,'B',cn,c.code.length,'B');
