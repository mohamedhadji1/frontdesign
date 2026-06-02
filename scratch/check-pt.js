const fs = require('fs');
const path = require('path');
const pages = [];
function findPages(dir) {
    for (const f of fs.readdirSync(dir)) {
        const full = path.join(dir, f);
        if (fs.statSync(full).isDirectory()) findPages(full);
        else if (f === 'page.tsx') pages.push(full);
    }
}
findPages('./src/app');

let ptCounts = {};
for (const p of pages) {
    const text = fs.readFileSync(p, 'utf8');
    const match = text.match(/(?:<motion\.section|<section)[^>]*className=[\"'][^\"']*?((?:pt-\d+|sm:pt-\d+|md:pt-\d+|lg:pt-\d+|xl:pt-\d+|\s)+)[^\"']*[\"']/i);
    if (match && (text.includes('min-h-screen') || text.includes('h-[100vh]') || text.includes('Hero Section'))) {
        const val = match[1].replace(/\s+/g, ' ').trim();
        ptCounts[val] = (ptCounts[val] || 0) + 1;
    }
}
console.log(ptCounts);
