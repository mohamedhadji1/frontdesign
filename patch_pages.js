/**
 * Updates page.tsx files to:
 * 1. Remove inline hero section JSX (motion.section with h-[100vh])
 * 2. Import HeroSection from ./sections/HeroSection
 * 3. Use <HeroSection /> as the first section in the main component
 */
const fs = require('fs');
const path = require('path');

const srcRoot = 'c:\\Users\\LENOVO\\Documents\\GitHub\\frontdesign\\src\\app\\services';

function walkPages(dir, pages = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkPages(p, pages);
    else if (e.name === 'page.tsx') pages.push(p);
  }
  return pages;
}

let fixed = 0;
let skipped = 0;

for (const filePath of walkPages(srcRoot)) {
  const sectionsDir = path.join(path.dirname(filePath), 'sections');
  const heroFile = path.join(sectionsDir, 'HeroSection.tsx');

  // Only process pages that have a sections/HeroSection.tsx available
  if (!fs.existsSync(heroFile)) {
    console.log(`SKIP (no HeroSection.tsx): ${path.relative(srcRoot, filePath)}`);
    skipped++;
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already imports HeroSection from sections
  if (content.includes('./sections/HeroSection') || content.includes('"./sections/HeroSection"')) {
    console.log(`ALREADY DONE: ${path.relative(srcRoot, filePath)}`);
    continue;
  }

  // Check if page has an inline hero section (the big motion.section hero)
  const hasInlineHero = /h-\[100vh\]|min-h-\[100vh\]/.test(content);

  if (!hasInlineHero) {
    console.log(`SKIP (no inline hero found): ${path.relative(srcRoot, filePath)}`);
    skipped++;
    continue;
  }

  // ── 1. Add the HeroSection import ────────────────────────────────────────
  // Find the last import line and insert after it
  const importLines = content.split('\n');
  let lastImportIdx = -1;
  for (let i = 0; i < importLines.length; i++) {
    if (importLines[i].trim().startsWith('import ')) lastImportIdx = i;
  }

  if (lastImportIdx === -1) {
    console.log(`SKIP (no imports): ${path.relative(srcRoot, filePath)}`);
    skipped++;
    continue;
  }

  // Insert import
  importLines.splice(lastImportIdx + 1, 0, 'import { HeroSection } from "./sections/HeroSection";');
  content = importLines.join('\n');

  // ── 2. Replace the inline hero section with <HeroSection /> ──────────────
  // The hero is always a <motion.section ... className="...h-[100vh]..."> block
  // We need to find its opening tag and closing </motion.section> and replace the whole thing
  
  // Strategy: find the first motion.section that contains h-[100vh]
  // and replace from its opening to its matching </motion.section>
  
  // Find start of hero section - look for {/* Hero Section */} comment or first motion.section
  // with h-[100vh]
  
  // Use a balanced tag approach
  const heroStart = (() => {
    // Find comment marker first
    const commentIdx = content.indexOf('{/* Hero Section */}');
    if (commentIdx !== -1) {
      // Find the next <motion.section after the comment
      const msIdx = content.indexOf('<motion.section', commentIdx);
      if (msIdx !== -1) return msIdx;
    }
    // Otherwise find first motion.section with h-[100vh]
    const idx = content.indexOf('<motion.section');
    return idx;
  })();

  if (heroStart === -1) {
    console.log(`SKIP (can't find hero section): ${path.relative(srcRoot, filePath)}`);
    skipped++;
    continue;
  }

  // Find the matching closing </motion.section>
  // Count depth from heroStart
  let depth = 0;
  let i = heroStart;
  let heroEnd = -1;

  while (i < content.length) {
    if (content.startsWith('<motion.section', i)) {
      depth++;
      i += 15;
    } else if (content.startsWith('</motion.section>', i)) {
      depth--;
      if (depth === 0) {
        heroEnd = i + '</motion.section>'.length;
        break;
      }
      i += 17;
    } else {
      i++;
    }
  }

  if (heroEnd === -1) {
    console.log(`SKIP (can't find closing tag): ${path.relative(srcRoot, filePath)}`);
    skipped++;
    continue;
  }

  // What was before heroStart (trim trailing whitespace from the comment line)
  let before = content.substring(0, heroStart);
  // Remove any preceding comment like {/* Hero Section */}\n
  before = before.replace(/\s*\{\/\* Hero Section \*\/\}\s*$/, '\n      ');

  let after = content.substring(heroEnd);
  // Remove leading newlines
  after = after.replace(/^\s*\n/, '\n');

  content = before + '<HeroSection />' + after;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`FIXED: ${path.relative(srcRoot, filePath)}`);
  fixed++;
}

console.log(`\n=== Fixed ${fixed} pages, skipped ${skipped} ===`);
