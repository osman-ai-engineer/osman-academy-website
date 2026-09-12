const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const root = path.resolve(__dirname,'../build');
const failures=[];
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const files=walk(root).filter(f=>f.endsWith('.html'));
const cache = new Map();
const parse = file => {if(!cache.has(file))cache.set(file,cheerio.load(fs.readFileSync(file,'utf8')));return cache.get(file);};
function targetFile(url){let pathname=decodeURIComponent(url.pathname);return [path.join(root,pathname),path.join(root,pathname+'.html'),path.join(root,pathname,'index.html')].find(f=>fs.existsSync(f)&&fs.statSync(f).isFile());}
let links=0,images=0;
for(const file of files){
 const $=parse(file);const relative=path.relative(root,file).replaceAll('\\','/');
 const pageUrl='http://127.0.0.1:3000/'+relative.replace(/index\.html$/,'').replace(/\.html$/,'');
 if($('h1').length!==1&&!$('meta[http-equiv="refresh"]').length&&!relative.startsWith('search'))failures.push(`${relative}: expected one h1, found ${$('h1').length}`);
 const seen=new Set();$('[id]').each((_,el)=>{const id=$(el).attr('id');if(seen.has(id))failures.push(`${relative}: duplicate id ${id}`);seen.add(id);});
 $('a[href],img[src]').each((_,el)=>{
  const image=el.tagName==='img',value=$(el).attr(image?'src':'href');
  if(!value||/^(mailto:|tel:|data:|https?:\/\/)/.test(value))return;
  const url=new URL(value,pageUrl);if(url.origin!=='http://127.0.0.1:3000')return;
  const target=targetFile(url);image?images++:links++;
  if(!target){failures.push(`${relative}: missing ${value}`);return;}
  if(!image&&url.hash&&target.endsWith('.html')){const id=decodeURIComponent(url.hash.slice(1));if(!parse(target)('[id]').toArray().some(e=>e.attribs.id===id)&&!parse(target)('meta[http-equiv="refresh"]').length)failures.push(`${relative}: missing anchor ${value}`);}
 });
}
const result={pages:files.length,internalLinks:links,images,failures:[...new Set(failures)]};
fs.writeFileSync(path.resolve(__dirname,'../local-check-results.json'),JSON.stringify(result,null,2));
console.log(JSON.stringify(result,null,2));
process.exitCode=failures.length?1:0;
