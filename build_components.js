const fs = require('fs');

const files = [
  {file: 'Analyse de malware.html', out: 'src/app/services/defensive-security/malware-analysis/page.tsx'},
  {file: 'incident response.html', out: 'src/app/services/defensive-security/incident-response-forensics/page.tsx'},
  {file: 'Investigation numérique.html', out: 'src/app/services/defensive-security/digital-forensics/page.tsx'},
  {file: 'threat hunting.html', out: 'src/app/services/defensive-security/threat-hunting/page.tsx'}
];

function extractData(content) {
  const heroStartMatch = content.indexOf('<section class="audit-hero-section">');
  const heroEndMatch = content.indexOf("</section>", heroStartMatch) + 10;
  let heroHtml = content.substring(heroStartMatch, heroEndMatch);

  const styleStartMatch = content.indexOf('<style>\n.audit-hero-section');
  const styleEndMatch = content.indexOf('</style>', styleStartMatch) + 8;
  const heroStyle = content.substring(styleStartMatch, styleEndMatch);

  // Add the scoped css to heroHtml
  heroHtml = heroStyle + "\n" + heroHtml;

  const scriptMatch = content.match(/const tabData = (\[[\s\S]*?\]);/);
  const tabDataStr = scriptMatch ? scriptMatch[1] : "[]";

  const cyberSecMatch = content.indexOf('<div class="cyber-security-section">');
  const styleCyberMatchStart = content.indexOf('<style scoped="">', cyberSecMatch);
  const styleCyberMatchEnd = content.indexOf('</style>', styleCyberMatchStart) + 8;
  const cyberStyle = content.substring(styleCyberMatchStart, styleCyberMatchEnd);

  return { heroHtml, tabDataStr, cyberStyle };
}

for (const {file, out} of files) {
  const content = fs.readFileSync('html/' + file, 'utf8');
  let { heroHtml, tabDataStr, cyberStyle } = extractData(content);

  cyberStyle = cyberStyle.replace('<style scoped="">', '').replace('</style>', '');

  let cleanedHero = heroHtml
    .replace(/class=/g, "className=")
    .replace(/<img(.*?)>/g, "<img$1 />");
    
  // Escape curly braces in text
  cleanedHero = cleanedHero.replace(/<p(.*?)>([\\s\\S]*?)<\/p>/g, (match, p1, p2) => {
      return `<p${p1}>${p2.replace(/\\{/g, '&#123;').replace(/\\}/g, '&#125;')}</p>`;
  });

  const reactCode = `'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/layout/Footer';

const tabData: any[] = ${tabDataStr};

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="section breadcrumb-wrapper mb-8" aria-label="Fil d'Ariane">
            <p id="breadcrumbs" className="text-sm text-black">
              <a href="/services" className="hover:text-gray-600 transition-colors">Services</a> <span className="mx-2">›</span>
              <a href="/services/defensive-security" className="hover:text-gray-600 transition-colors">Mise en place de CERT</a> <span className="mx-2">›</span>
              <span className="text-red-600 font-semibold">{tabData.length > 0 ? "Service" : ""}</span>
            </p>
          </nav>

          <div dangerouslySetInnerHTML={{ __html: \`${cleanedHero}\` }} />

          <div className="cyber-security-section relative mt-8">
            <style dangerouslySetInnerHTML={{ __html: \`${cyberStyle}\` }} />
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start p-[60px_20px]">
              <div className="left-panel flex flex-col gap-5">
                {tabData.map((tab, index) => (
                  <div
                    key={index}
                    className={\`menu-item cursor-pointer p-[25px_30px] rounded-[15px] border-2 border-transparent transition-all duration-300 relative overflow-hidden bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:border-[#e74c3c] hover:translate-x-[10px] \${activeIndex === index ? 'active bg-[rgba(231,76,60,0.1)] border-[#e74c3c] translate-x-[10px]' : ''}\`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <h3 className="text-[20px] font-semibold text-[#2c3e50] mb-[5px] flex items-center gap-[10px]">{tab.title}</h3>
                    <p className="text-[#7f8c8d] text-[15px] m-0">{tab.subtitle}</p>
                    <div className="arrow-indicator text-[#e74c3c] text-[20px] opacity-0 transition-opacity absolute right-[20px] top-1/2 -translate-y-1/2">→</div>
                  </div>
                ))}
              </div>
              <div className="right-panel min-h-[500px] relative">
                {isClient && tabData[activeIndex] && (
                  <div className="content-card active absolute top-0 left-0 w-full bg-white rounded-[20px] p-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-[#f0f0f0] transition-all duration-500 opacity-100 translate-y-0 relative !block">
                    <div className="content-header flex items-center gap-[20px] mb-[30px] pb-[20px] border-b border-[#f0f0f0]">
                      <div className="icon-wrapper w-[60px] h-[60px] bg-[rgba(231,76,60,0.1)] text-[#e74c3c] rounded-[15px] flex items-center justify-center text-[28px]">
                        <span>{tabData[activeIndex].icon}</span>
                      </div>
                      <h3 className="text-[26px] font-[600] text-[#2c3e50] m-0">{tabData[activeIndex].title}</h3>
                    </div>
                    <div className="content-body" dangerouslySetInnerHTML={{ __html: tabData[activeIndex].content }} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}`;


  const dir = out.substring(0, out.lastIndexOf('/'));
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(out, reactCode);
  console.log("Wrote", out);
}
