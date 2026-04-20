
const fs = require('fs');
const file = 'src/app/services/defensive-security/virtual-ciso-dpo/page.tsx';
let data = fs.readFileSync(file, 'utf8');

// Replace all blue and indigo references with red
data = data.replace(/blue/g, 'red');
data = data.replace(/indigo/g, 'red');
data = data.replace(/rgba\(37,99,235/g, 'rgba(220,38,38'); // replace blue rgb with red rgb

fs.writeFileSync(file, data);

