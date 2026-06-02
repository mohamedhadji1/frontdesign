const fs = require('fs');
const path = require('path');

const basePath = "c:/Users/LENOVO/Documents/GitHub/frontdesign";

// 1. Update CareersSection.tsx
const careersPath = path.join(basePath, "src/components/careers/CareersSection.tsx");
if (fs.existsSync(careersPath)) {
  let content = fs.readFileSync(careersPath, 'utf8');
  
  // Find the complex breadcrumbs motion.div block
  const careersRegex = /<motion\.div[\s\S]*?className="mb-6 inline-flex items-center flex-wrap gap-2 rounded-full border border-red-500\/20 bg-red-500\/10 px-3 py-1 text-red-400"[\s\S]*?<\/motion\.div>/;
  
  if (careersRegex.test(content)) {
    console.log("Found manual breadcrumbs in CareersSection.tsx");
    content = content.replace(careersRegex, `<Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Careers", href: "/careers" },
                ...(!isGeneral ? [{ label: category, href: categoryPath }] : []),
                ...(selectedOffer ? [{ label: selectedOffer }] : []),
              ]}
            />`);
            
    // Add import statement for Breadcrumbs
    if (!content.includes('import { Breadcrumbs }')) {
      content = content.replace(
        "import { HeroTypeLine }",
        "import { Breadcrumbs } from \"@/components/ui/Breadcrumbs\";\nimport { HeroTypeLine }"
      );
    }
    
    fs.writeFileSync(careersPath, content, 'utf8');
    console.log("Successfully updated CareersSection.tsx");
  }
}

// 2. Update Sector files
const sectorFiles = [
  {
    relPath: "src/app/sectors/components/SectorDetailPage.tsx",
    labelExpr: "page.eyebrow"
  },
  {
    relPath: "src/app/sectors/components/PublicSectorPage.tsx",
    labelExpr: '"Public"'
  },
  {
    relPath: "src/app/sectors/components/SectorCategoryPage.tsx",
    labelExpr: "eyebrow"
  }
];

sectorFiles.forEach(file => {
  const filePath = path.join(basePath, file.relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file.relPath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Match manual sectors breadcrumb
  const sectorsRegex = /<motion\.div[\s\S]*?className="mb-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-red-500\/20 bg-red-500\/10 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-red-300 backdrop-blur-md"[\s\S]*?<\/motion\.div>/;
  
  if (sectorsRegex.test(content)) {
    console.log(`Found manual breadcrumbs in: ${file.relPath}`);
    content = content.replace(sectorsRegex, `<Breadcrumbs
              items={[
                { label: "Sectors", href: "/sectors" },
                { label: ${file.labelExpr} }
              ]}
            />`);
            
    // Add import statement for Breadcrumbs if not present
    if (!content.includes('import { Breadcrumbs }')) {
      const firstImportIndex = content.indexOf('import ');
      const importLine = `import { Breadcrumbs } from "@/components/ui/Breadcrumbs";\n`;
      if (firstImportIndex !== -1) {
        content = content.slice(0, firstImportIndex) + importLine + content.slice(firstImportIndex);
      } else {
        content = importLine + content;
      }
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully updated: ${file.relPath}`);
  } else {
    console.log(`Pattern not matched in: ${file.relPath}`);
  }
});
