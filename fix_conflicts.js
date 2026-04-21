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
        console.log('Fixing:', filePath);
        
        // Remove "use client";
        content = content.replace(/^"use client";\n+/, '');
        content = content.replace(/^'use client';\n+/, '');

        // Remove Framer Motion Import
        content = content.replace(/import \{ motion \} from "framer-motion";\n?/, '');
        
        // Add AnimatedBreadcrumb Import
        if (!content.includes('AnimatedBreadcrumb')) {
            content = `import { AnimatedBreadcrumb } from "@/components/ui/AnimatedBreadcrumb";\n` + content;
        }

        // Replace <motion.div with our new component
        content = content.replace(
            /<motion\.div\s+initial=\{\{\s*opacity:\s*0,\s*y:\s*20\s*\}\}\s+animate=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s+transition=\{\{\s*duration:\s*0\.5\s*\}\}(.*?)(>)[\s\S]*?<\/motion\.div>/g,
            (match, classNameMatch, closingBracket) => {
                let strippedMatch = match.replace(/<motion\.div[\s\S]*?className=/, '<AnimatedBreadcrumb className=').replace(/<\/motion\.div>/, '</AnimatedBreadcrumb>');
                return strippedMatch;
            }
        );

        fs.writeFileSync(filePath, content, 'utf8');
    }
});
