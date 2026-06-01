const fs = require('fs');
const path = require('path');

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        results = results.concat(walkDir(filePath));
      }
    } else if (
      filePath.endsWith('.tsx') || 
      filePath.endsWith('.ts') || 
      filePath.endsWith('.html') || 
      filePath.endsWith('.txt') || 
      filePath.endsWith('.json')
    ) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walkDir(path.join(__dirname, '..'));
console.log(`Checking ${files.length} files...`);

const emptyHeadingRegex = /<(h[1-6])[^>]*>\s*<\/\1>/gi;
const literalPlaceholderRegex = /<(h[1-6])[^>]*>(\s*#+\s*)<\/\1>/gi;

files.forEach(file => {
  if (file.includes('Pasted text') || file.includes('check-empty-headings.js') || file.includes('implementation_plan.md')) return;
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = emptyHeadingRegex.exec(content)) !== null) {
    console.log(`Potential empty heading found in ${file} at match: ${match[0]}`);
  }
  while ((match = literalPlaceholderRegex.exec(content)) !== null) {
    console.log(`Potential placeholder heading found in ${file} at match: ${match[0]}`);
  }
});
console.log('Check finished.');
