const fs = require('fs');
const path = require('path');

const srcRoot = path.join('c:', 'Users', 'LENOVO', 'Documents', 'GitHub', 'frontdesign', 'src', 'app');

const labels = {
  'services': 'Services',
  'solutions': 'Solutions',
  'red-team': 'Red Team',
  'offensive-security': 'Offensive Security',
  'defensive-security': 'Defensive Security',
  'governance-risk-compliance': 'GRC',
  'security-assessment': 'Security Assessment',
  'awareness': 'Awareness',
  'ctf-competition-organization': 'CTF',
  'cyber-attack-simulation': 'Cyber Attack Simulation',
  'cyber-exercise': 'Cyber Exercise',
  'cybersecurity-strategy-consulting': 'Strategy Consulting',
  'strategy-governance': 'Strategy & Governance',
  'ai-cybersecurity': 'AI Cybersecurity',
  'training': 'Training',
  'web-mobile-application-assessment': 'Web & Mobile Assessment',
  'external-internal-penetration-testing': 'Penetration Testing',
  'hardware-testing-reverse-engineering': 'Hardware Testing',
  'offensive-assessments': 'Offensive Assessments',
  'physical-intrusion-test': 'Physical Intrusion',
  'social-engineering': 'Social Engineering',
  'incident-management': 'Incident Management',
  'anti-phishing': 'Anti-Phishing',
  'digital-forensics': 'Digital Forensics',
  'threat-intelligence': 'Threat Intelligence',
  'vulnerability-watch': 'Vulnerability Watch',
  'incident-response': 'Incident Response',
  'threat-hunting': 'Threat Hunting',
  'malware-analysis': 'Malware Analysis',
  'Implementation-cert': 'Certification Implementation',
  'virtual-ciso-dpo': 'Virtual CISO/DPO',
  'vulnerability-scanning': 'Vulnerability Scanning',
  'dark-web-monitoring': 'Dark Web Monitoring',
  'blue-team': 'Blue Team',
  'soc-management': 'SOC Management',
  'access-rights-assessment': 'Access Rights',
  'bcp-drp-development': 'BCP & DRP',
  'compliance-alignment': 'Compliance',
  'international-standards': 'International Standards',
  'legal': 'Legal',
  'data-classification': 'Data Classification',
  'governance-risk-management-support': 'Risk Management',
  'information-system-security-assessment': 'IS Security Assessment',
  'regulatory': 'Regulatory',
  'standards': 'Standards',
  'iso-22301-certification-support': 'ISO 22301',
  'iso-27001-certification-support': 'ISO 27001',
  'iso-27701-certification-support': 'ISO 27701',
  'iso-42001-certification-support': 'ISO 42001',
  'personal-data-protection': 'Personal Data Protection',
  'risk-assessment': 'Risk Assessment',
  'security-policy-development': 'Security Policy',
  'swift-csp-compliance-support': 'SWIFT CSP',
  'active-directory-assessment': 'Active Directory',
  'application-security-support': 'Application Security',
  'architecture-assessment': 'Architecture',
  'cloud-environment-assessment': 'Cloud Assessment',
  'core-internet-banking-system-assessment': 'Core Banking',
  'devsecops': 'DevSecOps',
  'hardening-guides': 'Hardening Guides',
  'industrial-system-assessment': 'Industrial Systems',
  'infrastructure-assessment': 'Infrastructure',
  'network-security-architecture': 'Network Security',
  'system-hardening': 'System Hardening',
  'technical-assessment': 'Technical Assessment',
  'technical-assistance': 'Technical Assistance',
  'capacity-and-maturity-assessment': 'Maturity Assessment',
  'cert-implementation': 'CERT Implementation',
  'critical-infrastructure-protection': 'CIP',
  'cyber-crisis-management-framework': 'Crisis Management',
  'cyber-resilience-framework': 'Resilience Framework',
  'development-of-national-and-sectoral-cybersecurity-strategy': 'National Strategy',
  'soc-implementation': 'SOC Implementation',
  'business-continuity-management-resilience-and-recovery': 'BCM & Resilience',
  'cybersecurity-and-investigation': 'Cybersecurity & Investigation',
  'cip-platform': 'CIP Platform',
  'dns-filtering': 'DNS Filtering',
  'keystone-arena': 'Keystone Arena',
  'keystone-dlp': 'Keystone DLP',
  'soc-subscription': 'SOC Subscription',
};

function getLabel(seg) {
  return labels[seg] || seg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function buildItems(segments) {
  const root = segments[0];
  const items = [];

  if (root === 'services') {
    if (segments.length === 1) {
      items.push({ label: 'Services' });
    } else if (segments.length === 2) {
      // Services > Category
      items.push({ label: 'Services', href: '/services' });
      items.push({ label: getLabel(segments[1]) });
    } else {
      // Category > [Mid >] Page  (no "Services" prefix)
      const catSeg = segments[1];
      items.push({ label: getLabel(catSeg), href: `/services/${catSeg}` });
      // Intermediate
      for (let i = 2; i < segments.length - 1; i++) {
        const midPath = '/services/' + segments.slice(1, i + 1).join('/');
        items.push({ label: getLabel(segments[i]), href: midPath });
      }
      // Last (current)
      items.push({ label: getLabel(segments[segments.length - 1]) });
    }
  } else if (root === 'solutions') {
    if (segments.length === 1) {
      items.push({ label: 'Solutions' });
    } else {
      items.push({ label: 'Solutions', href: '/solutions' });
      items.push({ label: getLabel(segments[segments.length - 1]) });
    }
  } else {
    // Sectors, About, etc.
    for (let i = 0; i < segments.length; i++) {
      const isLast = i === segments.length - 1;
      const href = '/' + segments.slice(0, i + 1).join('/');
      const item = { label: getLabel(segments[i]) };
      if (!isLast) item.href = href;
      items.push(item);
    }
  }

  return items;
}

function itemsToJsx(items) {
  const lines = items.map(item => {
    if (item.href) {
      return `              { label: "${item.label}", href: "${item.href}" },`;
    }
    return `              { label: "${item.label}" },`;
  });
  return `          <Breadcrumbs\n            items={[\n${lines.join('\n')}\n            ]}\n          />`;
}

function walkDir(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, fileList);
    } else if (entry.name === 'page.tsx') {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const pages = walkDir(srcRoot);
let fixedCount = 0;

for (const filePath of pages) {
  // Compute route segments from the file path
  const rel = path.relative(srcRoot, filePath).replace(/[\\/]page\.tsx$/, '');
  const segments = rel.split(path.sep).filter(Boolean);

  // Skip dynamic routes
  if (segments.some(s => s.startsWith('['))) {
    console.log(`SKIP dynamic: ${rel}`);
    continue;
  }

  // Skip root page (no segments = homepage)
  if (segments.length === 0) continue;

  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('Breadcrumbs')) continue;

  // Build the correct items
  const items = buildItems(segments);
  const newBreadcrumb = itemsToJsx(items);

  // Replace any existing <Breadcrumbs ... /> block
  const updated = content.replace(/<Breadcrumbs[\s\S]*?\/>/g, newBreadcrumb);

  if (updated === content) {
    console.log(`UNCHANGED: ${rel}`);
    continue;
  }

  fs.writeFileSync(filePath, updated, 'utf8');
  fixedCount++;
  console.log(`FIXED: ${rel}  =>  ${items.map(i => i.label).join(' > ')}`);
}

console.log(`\n=== Fixed ${fixedCount} pages ===`);
