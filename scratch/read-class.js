const fs = require('fs');

const p = 'src/app/services/governance-risk-compliance/virtual-ciso-dpo/page.tsx';
const text = fs.readFileSync(p, 'utf8');

const match = text.match(/<motion\.section([^>]*)className=["']([^"']*)["']/i);
if (match) {
    console.log(match[2]);
} else {
    console.log('No match');
}
