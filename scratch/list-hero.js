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
    const heroMatch = text.match(/(?:<motion\.section|<section)[^>]*className=(["'][^"']*["'])/i);
    if (heroMatch && (text.includes('min-h-screen') || text.includes('h-[100vh]') || text.includes('Hero Section'))) {
        console.log(p.replace(/\\/g, '/').split('src/app/')[1], heroMatch[1]);
        count++;
        if (count >= 15) break; 
    }
}
