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

let fixedCount = 0;

for (const p of pages) {
    let text = fs.readFileSync(p, 'utf8');
    let originalText = text;
    
    // First, let's target the hero container:
    // It's a <motion.section or <section ... h-[100vh] or min-h-[100vh]
    text = text.replace(/(<(?:motion\.)?section[^>]*className=["'][^"']*?)(?:\spt-\d+|\ssm:pt-\d+|\smd:pt-\d+|\slg:pt-\d+|\sxl:pt-\d+)+([^"']*["'])/ig, (match, before, after) => {
        // If it's a hero section
        if (match.includes('100vh') || match.includes('min-h-screen') || text.substring(match.index-30, match.index).includes('Hero Section')) {
            // Apply standard pt-24
            return before + ' pt-24' + after;
        }
        return match;
    });

    // Also remove excessive py- from the inner wrapper:
    // "relative z-10 container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center items-center text-center lg:items-start lg:text-left py-12 lg:py-16"
    text = text.replace(/(className=["'][^"']*?container[^"']*?flex-grow[^"']*?)(?:\spy-\d+|\ssm:py-\d+|\slg:py-\d+|\spt-\d+|\slg:pt-\d+)+([^"']*["'])/ig, (match, before, after) => {
        // Add just pb-12 so we don't have top padding
        return before + ' pb-12 pt-0' + after;
    });

    if (text !== originalText) {
        fs.writeFileSync(p, text, 'utf8');
        fixedCount++;
    }
}
console.log('Fixed', fixedCount, 'pages');
