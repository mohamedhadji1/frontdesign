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
    
    // Most hero sections have a combination of: pt-32, pt-40, pt-48, pt-52, pt-60, pt-64
    // or sm:pt-60, lg:pt-64 etc. mixed with pb-12 or pb-20 or lg:pb-32.
    // Let's replace the common huge padding strings with "pt-24 lg:pt-32" (or similar) on the main element.
    
    // Replace "pt-52 sm:pt-60 lg:pt-64 pb-12"
    text = text.replace(/pt-52 sm:pt-60 lg:pt-64 pb-12/g, 'pt-24 lg:pt-32 pb-12');
    
    // Replace "pt-32 pb-20 lg:pt-48 lg:pb-32"
    text = text.replace(/pt-32 pb-20 lg:pt-48 lg:pb-32/g, 'pt-24 pb-20 lg:pt-32 lg:pb-32');
    text = text.replace(/pt-32 pb-20 lg:pt-48/g, 'pt-24 pb-20 lg:pt-32');

    // Replace "pt-40 lg:pt-48 pb-20"
    text = text.replace(/pt-40 lg:pt-48 pb-20/g, 'pt-24 lg:pt-32 pb-20');
    
    // Replace "pt-52 sm:pt-60 lg:pt-64"
    text = text.replace(/pt-52 sm:pt-60 lg:pt-64/g, 'pt-24 lg:pt-32');

    // Also look generally for the <motion.section... hero container classes
    text = text.replace(/(<motion\.section[^>]*className(?:=|:\s*)["'][^"']*)(\spt-32\s|\spt-48\s|\spt-52\s|\spt-64\s|\slg:pt-48\s|\ssm:pt-60\s|\slg:pt-64\s)([^"']*["'])/gi, 
        (match, prefix, padding, suffix) => {
            return prefix + " " + suffix;
        }
    );

    if (text !== originalText) {
        fs.writeFileSync(p, text, 'utf8');
        fixedCount++;
        console.log('Fixed padding in:', p);
    }
}
console.log('Fixed', fixedCount, 'pages');
