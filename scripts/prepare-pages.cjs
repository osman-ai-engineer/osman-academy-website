const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../build');
const base = require('../docusaurus.config').baseUrl;
// Legacy redirect files are copied verbatim by Docusaurus.
for (const file of fs.readdirSync(root)) {
  if (!file.endsWith('.html')) continue;
  const target = path.join(root, file);
  const html = fs.readFileSync(target, 'utf8');
  if (!html.includes('http-equiv="refresh"')) continue;
  fs.writeFileSync(target, html.replace(/(url=|href=")\/(?!\/)/g, `$1${base}`));
}
// Default GitHub Pages hosting must not claim the existing academy domain.
fs.rmSync(path.join(root, 'CNAME'), {force:true});
