const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modifiedCount = 0;

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Check if file has a section tag
  if (!content.match(/<section[\s>]/)) {
    return;
  }

  // 1. Add "use client" if not present
  if (!content.includes('"use client"') && !content.includes("'use client'")) {
    content = '"use client";\n' + content;
  }

  // 2. Add framer-motion import if not present
  if (!content.includes('from "framer-motion"') && !content.includes("from 'framer-motion'")) {
    // Insert after "use client" or at the top
    if (content.startsWith('"use client";\n')) {
      content = content.replace('"use client";\n', '"use client";\nimport { motion } from "framer-motion";\n');
    } else if (content.startsWith("'use client';\n")) {
      content = content.replace("'use client';\n", "'use client';\nimport { motion } from \"framer-motion\";\n");
    } else {
      content = 'import { motion } from "framer-motion";\n' + content;
    }
  }

  // 3. Replace <section> and <section ...> with <motion.section ...>
  // We need to be careful not to replace already modified <motion.section>
  if (!content.includes('<motion.section')) {
    content = content.replace(/<section(\s|>)/g, function(match, p1) {
      return '<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }}' + p1;
    });

    content = content.replace(/<\/section>/g, '</motion.section>');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log('Added motion to:', filePath);
  }
}

walkDir('src/app', processFile);
walkDir('src/components', processFile);

console.log('Total files enhanced with scroll motion:', modifiedCount);
