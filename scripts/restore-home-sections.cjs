const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const root = path.resolve(__dirname, '..');
const source = 'C:/Users/mdosm/OneDrive/Documents/Osman Group of Companies/Osman Academy/osman-academy-site/index.html';
const dataPath = path.join(root, 'src/data/home.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const original = cheerio.load(fs.readFileSync(source, 'utf8'));
const current = cheerio.load(data.html, null, false);

function section(selector) {
  const $ = cheerio.load(original(selector).toString(), null, false);
  $('script').remove();
  $('.rv').addClass('in');
  $('[src]').each((_, el) => {
    const src = $(el).attr('src');
    if (src.startsWith('assets/')) $(el).attr('src', '/' + src);
  });
  $('[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (/^ai-(fundamentals|associate|developer|architect)\.html$/.test(href)) {
      $(el).attr('href', '/programs/' + href.replace('.html', ''));
    } else if (href === '#paths') $(el).attr('href', '#programs');
    else if (href === '#learning-paths') $(el).attr('href', '#learning-programs');
  });
  $('#paths').attr('id', 'programs');
  $('#learning-paths').attr('id', 'learning-programs');
  $('*').contents().filter((_, el) => el.type === 'text').each((_, el) => {
    el.data = el.data.replace(/Learning Paths/g, 'Learning Programs').replace(/learning paths/g, 'learning programs');
  });
  return $.html();
}

current('#how-we-teach, #team').remove();
current('#top').after(section('#how-we-teach') + section('#team'));
current('#programs').replaceWith(section('#paths'));
current('a[href="/about#how-we-teach"]').attr('href', '#how-we-teach');
data.html = current.html();
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n');
console.log('Homepage sections:', current('section').toArray().map(el => el.attribs.id).join(', '));
