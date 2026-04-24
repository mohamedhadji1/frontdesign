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

let fixedCount = 0;

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Check if it has metadata AND use client
  const hasMetadata = content.includes('export const metadata') || content.includes('export const generateMetadata') || content.includes('export const viewport');
  const hasUseClient = content.includes('"use client"') || content.includes("'use client'");

  if (hasMetadata && hasUseClient) {
    // Remove "use client"
    content = content.replace(/"use client";\n/g, '').replace(/'use client';\n/g, '');
    
    // Remove import { motion } if we added it
    content = content.replace(/import { motion } from "framer-motion";\n/g, '');
    content = content.replace(/import { motion } from 'framer-motion';\n/g, '');

    // Revert <motion.section ...> to <section>
    content = content.replace(/<motion\.section[^>]*initial={{ opacity: 0, y: 40 }}[^>]*viewport={{ once: true, amount: 0.1 }}[^>]*transition={{ duration: 0.8 }}/g, '<section');
    // Also catch any motion.section without attributes just in case
    content = content.replace(/<motion\.section/g, '<section');

    content = content.replace(/<\/motion\.section>/g, '</section>');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
      console.log('Fixed metadata SSR issue in:', filePath);
    }
  }
}

walkDir('src/app', processFile);
console.log('Total files fixed:', fixedCount);
