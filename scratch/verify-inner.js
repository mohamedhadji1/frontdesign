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

let count = 0;
for (const p of pages) {
    const text = fs.readFileSync(p, 'utf8');
    const heroMatch = text.match(/className=["'][^"']*?container[^"']*?flex-grow[^"']*?(py-12|py-16|py-20|pt-12|pt-16|pt-20|lg:py-16)/i);
    if (heroMatch) {
        console.log('Missed:', p);
        count++;
    }
}
console.log('Missed count:', count);
