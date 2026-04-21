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

walkDir('src/app/services', function(filePath) {
    if (!filePath.endsWith('.tsx')) return;
    let content = fs.readFileSync(filePath, 'utf8');

    let isClient = content.includes('"use client"') || content.includes("'use client'");
    let hasMetadata = content.includes('export const metadata') || content.includes('export function generateMetadata');
    
    if (isClient && hasMetadata) {
        console.log('Conflict in:', filePath);
    }
});
