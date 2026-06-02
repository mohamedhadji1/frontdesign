/**
 * Replaces all services HeroSection.tsx separate components to use ServiceHeroSection.
 * Also replaces inline hero sections in page.tsx files.
 * 
 * DATA MAP: for each service path, defines the props for ServiceHeroSection.
 */
const fs = require('fs');
const path = require('path');

const srcRoot = 'c:\\Users\\LENOVO\\Documents\\GitHub\\frontdesign\\src\\app\\services';
const importPath = '"@/components/services/ServiceHeroSection"';

// ─── DATA MAP ────────────────────────────────────────────────────────────────
// Key = relative path from src/app/services (using forward slashes)
// Value = { title, description, heroItems[], breadcrumbs[], videoSrc?, imageSrc?, ctaLabel?, ctaHref?, secondaryCtaLabel? }

const heroData = {

  // ── TOP-LEVEL CATEGORY PAGES ─────────────────────────────────────────────

  'red-team': {
    title: 'Red Team Operations',
    description: 'Test the limits of your perimeter. Identify zero-day vulnerabilities, physical weaknesses, and social engineering risks through full-scale adversarial emulation.',
    heroItems: ['Adversarial simulation', 'Physical and digital intrusion paths', 'Real attack behavior'],
    breadcrumbs: [{ label: 'Services', href: '/services' }, { label: 'Red Team' }],
    videoSrc: '/vids/cover red team.mp4',
    ctaLabel: 'Schedule an Assessment',
  },

  'offensive-security': {
    title: 'Offensive Security',
    description: 'Expose attack paths before adversaries do. Our offensive team simulates real-world breaches to validate your defenses, harden your perimeter, and protect critical assets.',
    heroItems: ['Penetration Testing', 'Attack Simulations', 'Exploit Research'],
    breadcrumbs: [{ label: 'Services', href: '/services' }, { label: 'Offensive Security' }],
    ctaLabel: 'Request Assessment',
    secondaryCtaLabel: 'View all services',
  },

  'defensive-security': {
    title: 'Defensive Security',
    description: 'Build resilient defenses that detect, contain, and recover from threats. Keystone\'s defensive team operates your security posture around the clock.',
    heroItems: ['SOC Operations', 'Threat Hunting', 'Incident Response'],
    breadcrumbs: [{ label: 'Services', href: '/services' }, { label: 'Defensive Security' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Strengthen Your Defenses',
    secondaryCtaLabel: 'View all services',
  },

  'governance-risk-compliance': {
    title: 'Governance, Risk & Compliance',
    description: 'Master your risks, meet regulatory expectations, and strengthen your organization\'s resilience with a structured GRC approach tailored to your environment.',
    heroItems: ['Risk clarity', 'Compliance confidence', 'Governance that strengthens resilience'],
    breadcrumbs: [{ label: 'Services', href: '/services' }, { label: 'GRC' }],
    ctaLabel: 'Consult an Expert',
    secondaryCtaLabel: 'View all services',
  },

  'security-assessment': {
    title: 'Security Assessment',
    description: 'Keystone combines automated discovery, manual verification, and technical assistance to evaluate your critical systems, expose weaknesses, and implement durable fixes.',
    heroItems: ['Infrastructure exposure mapping', 'Configuration and hardening validation', 'Actionable remediation support'],
    breadcrumbs: [{ label: 'Services', href: '/services' }, { label: 'Security Assessment' }],
    ctaLabel: 'Schedule an Assessment',
    secondaryCtaLabel: 'View all services',
  },

  'cybersecurity-strategy-consulting': {
    title: 'Cybersecurity Strategy Consulting',
    description: 'Build a cyber-resilient organization with a strategic approach. Keystone helps you design, implement, and operate a complete cybersecurity strategy aligned with your goals.',
    heroItems: ['National cyber strategies', 'CERT & SOC implementation', 'Crisis management frameworks'],
    breadcrumbs: [{ label: 'Services', href: '/services' }, { label: 'Strategy Consulting' }],
    ctaLabel: 'Start Your Strategy',
    secondaryCtaLabel: 'View all services',
  },

  'ai-cybersecurity': {
    title: 'AI Cybersecurity',
    description: 'Navigate the security challenges of artificial intelligence. Keystone helps you govern, secure, and assess AI systems to prevent misuse, bias, and adversarial threats.',
    heroItems: ['AI governance frameworks', 'LLM security assessments', 'Deepfake detection'],
    breadcrumbs: [{ label: 'Services', href: '/services' }, { label: 'AI Cybersecurity' }],
    ctaLabel: 'Secure Your AI',
    secondaryCtaLabel: 'View all services',
  },

  'cyber-attack-simulation': {
    title: 'Cyber Attack Simulation',
    description: 'By simulating advanced adversary tactics, we identify weaknesses in technology, processes & people and help strengthen your overall resilience.',
    heroItems: ['Adversary emulation', 'Real-world attack paths', 'Resilience under pressure'],
    breadcrumbs: [{ label: 'Services', href: '/services' }, { label: 'Cyber Attack Simulation' }],
    imageSrc: '/background/Offensive/Rectangle 46.png',
    ctaLabel: 'Request Service Now',
    secondaryCtaLabel: 'Immediate Incident Response',
    secondaryCtaHref: '/report-incident',
  },

  'cyber-exercise': {
    title: 'Cyber Exercise',
    description: 'Test your team\'s readiness through immersive, scenario-based exercises. From crisis simulations to technical war-games, we prepare your people for real incidents.',
    heroItems: ['Crisis simulations', 'Technical war-games', 'Team readiness validation'],
    breadcrumbs: [{ label: 'Services', href: '/services' }, { label: 'Cyber Exercise' }],
    ctaLabel: 'Run a Cyber Exercise',
    secondaryCtaLabel: 'View all services',
  },

  'strategy-governance': {
    title: 'Strategy & Governance',
    description: 'Define and operationalize a cybersecurity strategy that aligns with your business objectives. From policy frameworks to executive governance, Keystone supports the full lifecycle.',
    heroItems: ['Policy frameworks', 'Executive governance', 'Cyber strategy roadmaps'],
    breadcrumbs: [{ label: 'Services', href: '/services' }, { label: 'Strategy & Governance' }],
    ctaLabel: 'Build Your Strategy',
    secondaryCtaLabel: 'View all services',
  },

  'training': {
    title: 'Cybersecurity Training',
    description: 'Empower your teams with the knowledge and skills to recognize, prevent, and respond to cyber threats. Keystone delivers tailored, expert-led training programs.',
    heroItems: ['Awareness programs', 'Technical certifications', 'Executive briefings'],
    breadcrumbs: [{ label: 'Services', href: '/services' }, { label: 'Training' }],
    ctaLabel: 'Enroll Your Team',
    secondaryCtaLabel: 'View all services',
  },

  'web-mobile-application-assessment': {
    title: 'Web & Mobile Application Assessment',
    description: 'Expose vulnerabilities in your web and mobile applications before attackers do. Our experts test for OWASP Top 10, business logic flaws, and advanced injection vectors.',
    heroItems: ['OWASP Top 10', 'Mobile security testing', 'API security assessment'],
    breadcrumbs: [{ label: 'Services', href: '/services' }, { label: 'Web & Mobile Assessment' }],
    ctaLabel: 'Request an Assessment',
    secondaryCtaLabel: 'View all services',
  },

  // ── OFFENSIVE SECURITY SUB-PAGES ─────────────────────────────────────────

  'offensive-security/external-internal-penetration-testing': {
    title: 'Penetration Testing',
    description: 'Simulating real-world attacks from both outside and inside your network to evaluate the effectiveness of your security perimeters and detect hidden routes.',
    heroItems: ['Network Security', 'Perimeter Audits', 'Insider Threat'],
    breadcrumbs: [{ label: 'Offensive Security', href: '/services/offensive-security' }, { label: 'Penetration Testing' }],
    ctaLabel: 'Request Penetration Test',
  },

  'offensive-security/hardware-testing-reverse-engineering': {
    title: 'Hardware Testing & Reverse Engineering',
    description: 'Evaluate the security of embedded systems, IoT devices, and hardware components through in-depth analysis and reverse engineering techniques.',
    heroItems: ['Embedded systems', 'IoT security', 'Firmware analysis'],
    breadcrumbs: [{ label: 'Offensive Security', href: '/services/offensive-security' }, { label: 'Hardware Testing' }],
    ctaLabel: 'Request Hardware Assessment',
  },

  'offensive-security/offensive-assessments': {
    title: 'Offensive Assessments',
    description: 'Comprehensive attack-surface evaluation combining multiple offensive disciplines to identify and exploit vulnerabilities across your entire digital estate.',
    heroItems: ['Attack surface mapping', 'Exploit research', 'Vulnerability chaining'],
    breadcrumbs: [{ label: 'Offensive Security', href: '/services/offensive-security' }, { label: 'Offensive Assessments' }],
    ctaLabel: 'Request Assessment',
  },

  'offensive-security/physical-intrusion-test': {
    title: 'Physical Intrusion Test',
    description: 'Assess the effectiveness of your physical security controls through simulated intrusion attempts, social engineering, and access control testing.',
    heroItems: ['Access control testing', 'Social engineering', 'Physical bypass techniques'],
    breadcrumbs: [{ label: 'Offensive Security', href: '/services/offensive-security' }, { label: 'Physical Intrusion' }],
    ctaLabel: 'Request Physical Test',
  },

  'offensive-security/social-engineering': {
    title: 'Social Engineering',
    description: 'Evaluate your human firewall through targeted phishing, vishing, and impersonation campaigns designed to reveal gaps in security awareness.',
    heroItems: ['Phishing campaigns', 'Vishing assessments', 'Impersonation testing'],
    breadcrumbs: [{ label: 'Offensive Security', href: '/services/offensive-security' }, { label: 'Social Engineering' }],
    ctaLabel: 'Test Your Human Firewall',
  },

  // ── DEFENSIVE SECURITY SUB-PAGES ─────────────────────────────────────────

  'defensive-security/anti-phishing': {
    title: 'Anti-Phishing',
    description: 'Detect, block, and respond to phishing attacks with multi-layered protection combining email security, user awareness, and real-time threat intelligence.',
    heroItems: ['Email security', 'Phishing simulations', 'Real-time blocking'],
    breadcrumbs: [{ label: 'Defensive Security', href: '/services/defensive-security' }, { label: 'Anti-Phishing' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Deploy Anti-Phishing',
  },

  'defensive-security/blue-team': {
    title: 'Blue Team',
    description: 'A dedicated team of defenders that monitors, detects, and responds to threats in real-time, working continuously to protect your organization\'s digital assets.',
    heroItems: ['Real-time monitoring', 'Threat detection', 'Incident containment'],
    breadcrumbs: [{ label: 'Defensive Security', href: '/services/defensive-security' }, { label: 'Blue Team' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Deploy Blue Team',
  },

  'defensive-security/dark-web-monitoring': {
    title: 'Dark Web Monitoring',
    description: 'Continuously monitor dark web markets, forums, and criminal communities for leaked credentials, stolen data, and early indicators of attacks targeting your organization.',
    heroItems: ['Credential leak detection', 'Data breach alerts', 'Criminal forum monitoring'],
    breadcrumbs: [{ label: 'Defensive Security', href: '/services/defensive-security' }, { label: 'Dark Web Monitoring' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Start Monitoring',
  },

  'defensive-security/digital-forensics': {
    title: 'Digital Forensics',
    description: 'Reconstruct incidents with forensic precision. Our experts analyze artifacts, recover evidence, and provide legally sound reports to support investigation and recovery.',
    heroItems: ['Evidence collection', 'Malware analysis', 'Legal-grade reporting'],
    breadcrumbs: [{ label: 'Defensive Security', href: '/services/defensive-security' }, { label: 'Digital Forensics' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Request Forensic Analysis',
  },

  'defensive-security/Implementation-cert': {
    title: 'CERT Implementation',
    description: 'Design, build, and operationalize a Computer Emergency Response Team tailored to your organization\'s size, sector, and threat landscape.',
    heroItems: ['CERT design', 'Playbook development', 'Team training & certification'],
    breadcrumbs: [{ label: 'Defensive Security', href: '/services/defensive-security' }, { label: 'CERT Implementation' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Build Your CERT',
  },

  'defensive-security/incident-management': {
    title: 'Incident Management',
    description: 'Establish a structured approach to detecting, containing, and recovering from security incidents with proven frameworks and seasoned incident handlers.',
    heroItems: ['Incident detection', 'Structured response', 'Post-incident recovery'],
    breadcrumbs: [{ label: 'Defensive Security', href: '/services/defensive-security' }, { label: 'Incident Management' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Strengthen Your Response',
  },

  'defensive-security/incident-response': {
    title: 'Incident Response',
    description: 'When a breach occurs, every second counts. Keystone\'s incident response team deploys rapidly to contain threats, preserve evidence, and restore normal operations.',
    heroItems: ['Rapid containment', 'Evidence preservation', 'Business recovery'],
    breadcrumbs: [{ label: 'Defensive Security', href: '/services/defensive-security' }, { label: 'Incident Response' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Request Incident Response',
  },

  'defensive-security/malware-analysis': {
    title: 'Malware Analysis',
    description: 'Dissect malicious code to understand attacker intent, extract indicators of compromise, and develop signatures and countermeasures to prevent future infections.',
    heroItems: ['Static & dynamic analysis', 'IOC extraction', 'Threat signature development'],
    breadcrumbs: [{ label: 'Defensive Security', href: '/services/defensive-security' }, { label: 'Malware Analysis' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Submit for Analysis',
  },

  'defensive-security/soc-management': {
    title: 'SOC Management',
    description: 'Design, build, or optimize your Security Operations Center. From technology stack to analyst workflows, Keystone delivers a fully operational SOC capability.',
    heroItems: ['SOC design & build', 'Analyst training', 'Tool integration & SIEM'],
    breadcrumbs: [{ label: 'Defensive Security', href: '/services/defensive-security' }, { label: 'SOC Management' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Build Your SOC',
  },

  'defensive-security/threat-hunting': {
    title: 'Threat Hunting',
    description: 'Proactively search for threats that evade traditional security tools. Keystone\'s hunters combine threat intelligence with behavioral analysis to uncover hidden adversaries.',
    heroItems: ['Behavioral analysis', 'Hypothesis-driven hunting', 'Advanced threat detection'],
    breadcrumbs: [{ label: 'Defensive Security', href: '/services/defensive-security' }, { label: 'Threat Hunting' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Start Threat Hunting',
  },

  'defensive-security/threat-intelligence': {
    title: 'Threat Intelligence',
    description: 'Keystone\'s Threat Intelligence service offers in-depth analysis of threats and trends in cybersecurity to strengthen your security posture.',
    heroItems: ['Global IOC monitoring', 'Deep trend analysis', 'Intelligence sharing'],
    breadcrumbs: [{ label: 'Defensive Security', href: '/services/defensive-security' }, { label: 'Threat Intelligence' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Access Intelligence',
  },

  'defensive-security/virtual-ciso-dpo': {
    title: 'Virtual CISO & DPO',
    description: 'Get ongoing strategic cyber leadership, advisory, and privacy compliance guidance from seasoned executives — without the full-time overhead.',
    heroItems: ['Strategic advisory', 'GDPR & privacy compliance', 'Executive leadership'],
    breadcrumbs: [{ label: 'Defensive Security', href: '/services/defensive-security' }, { label: 'Virtual CISO/DPO' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Retain Virtual Leadership',
  },

  'defensive-security/vulnerability-scanning': {
    title: 'Vulnerability Scanning',
    description: 'Continuously discover and prioritize vulnerabilities across your infrastructure with automated scanning combined with expert-driven validation and remediation guidance.',
    heroItems: ['Continuous scanning', 'Risk prioritization', 'Remediation guidance'],
    breadcrumbs: [{ label: 'Defensive Security', href: '/services/defensive-security' }, { label: 'Vulnerability Scanning' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Start Scanning',
  },

  'defensive-security/vulnerability-watch': {
    title: 'Vulnerability Watch',
    description: 'Stay ahead of newly disclosed vulnerabilities with a dedicated watch service that tracks CVEs, assesses impact, and provides timely alerts and remediation advice.',
    heroItems: ['CVE tracking', 'Impact assessment', 'Timely remediation alerts'],
    breadcrumbs: [{ label: 'Defensive Security', href: '/services/defensive-security' }, { label: 'Vulnerability Watch' }],
    videoSrc: '/vids/SOC.mp4',
    ctaLabel: 'Activate Vulnerability Watch',
  },

  // ── GRC SUB-PAGES ─────────────────────────────────────────────────────────

  'governance-risk-compliance/access-rights-assessment': {
    title: 'Access Rights Assessment',
    description: 'Audit directory roles, active permissions, and privileged account access to enforce least privilege and prevent unauthorized escalation.',
    heroItems: ['Directory audit', 'Privilege enforcement', 'Access governance'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'Access Rights' }],
    ctaLabel: 'Request Assessment',
  },

  'governance-risk-compliance/bcp-drp-development': {
    title: 'BCP & DRP Development',
    description: 'Design custom business continuity and disaster recovery plans that minimize downtime and ensure your operations recover rapidly from any disruption.',
    heroItems: ['Business continuity', 'Disaster recovery', 'Crisis resilience'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'BCP & DRP' }],
    ctaLabel: 'Build Your BCP/DRP',
  },

  'governance-risk-compliance/compliance-alignment': {
    title: 'Compliance Alignment',
    description: 'Structured assistance to align your business operations with national and local cybersecurity regulatory guidelines and international standards.',
    heroItems: ['Regulatory alignment', 'Standards compliance', 'Gap analysis'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'Compliance' }],
    ctaLabel: 'Align Your Compliance',
  },

  'governance-risk-compliance/compliance-alignment/international-standards': {
    title: 'International Standards',
    description: 'Achieve and maintain compliance with international cybersecurity standards including ISO 27001, PCI-DSS, NIST, GDPR, and SWIFT CSP.',
    heroItems: ['ISO 27001 alignment', 'PCI-DSS & GDPR', 'NIST & SWIFT frameworks'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'Compliance', href: '/services/governance-risk-compliance/compliance-alignment' }, { label: 'International Standards' }],
    ctaLabel: 'Achieve Compliance',
  },

  'governance-risk-compliance/compliance-alignment/legal': {
    title: 'Legal Compliance',
    description: 'Align your technical infrastructure and operational data flows with regional legal and privacy obligations to reduce legal risk and ensure data sovereignty.',
    heroItems: ['Legal alignment', 'Data sovereignty', 'Privacy obligations'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'Compliance', href: '/services/governance-risk-compliance/compliance-alignment' }, { label: 'Legal' }],
    ctaLabel: 'Ensure Legal Compliance',
  },

  'governance-risk-compliance/data-classification': {
    title: 'Data Classification',
    description: 'Map, identify, and categorize sensitive information to apply custom security rules, access governance, and retention policies across your organization.',
    heroItems: ['Data mapping', 'Sensitivity classification', 'Access governance'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'Data Classification' }],
    ctaLabel: 'Classify Your Data',
  },

  'governance-risk-compliance/governance-risk-management-support': {
    title: 'Risk Management Support',
    description: 'Build resilient corporate risk structures with strategic partnerships, treatment playbooks, and mitigation models aligned to your business environment.',
    heroItems: ['Risk frameworks', 'Treatment playbooks', 'Mitigation models'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'Risk Management' }],
    ctaLabel: 'Strengthen Risk Management',
  },

  'governance-risk-compliance/information-system-security-assessment': {
    title: 'IS Security Assessment',
    description: 'Deep-dive evaluation of your information security management systems and core technical controls to identify gaps and improve your security posture.',
    heroItems: ['ISMS evaluation', 'Technical controls audit', 'Gap analysis'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'IS Security Assessment' }],
    ctaLabel: 'Request Assessment',
  },

  'governance-risk-compliance/information-system-security-assessment/regulatory': {
    title: 'Regulatory Assessment',
    description: 'Gap audits against national cybersecurity frameworks and mandatory government regulatory guidelines to ensure full regulatory compliance.',
    heroItems: ['Regulatory gap audits', 'National frameworks', 'Compliance roadmaps'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'IS Security Assessment', href: '/services/governance-risk-compliance/information-system-security-assessment' }, { label: 'Regulatory' }],
    ctaLabel: 'Request Regulatory Audit',
  },

  'governance-risk-compliance/information-system-security-assessment/standards': {
    title: 'Standards Assessment',
    description: 'Comprehensive alignment audits against international standards: ISO 27001, PCI-DSS, GDPR, SWIFT, and NIST frameworks.',
    heroItems: ['ISO 27001', 'PCI-DSS & GDPR', 'SWIFT & NIST'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'IS Security Assessment', href: '/services/governance-risk-compliance/information-system-security-assessment' }, { label: 'Standards' }],
    ctaLabel: 'Request Standards Audit',
  },

  'governance-risk-compliance/iso-22301-certification-support': {
    title: 'ISO 22301 Certification',
    description: 'Guidance to build a Business Continuity Management System and achieve certified crisis resilience recognized internationally.',
    heroItems: ['BCMS design', 'ISO 22301 alignment', 'Certification support'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'ISO 22301' }],
    ctaLabel: 'Get Certified',
  },

  'governance-risk-compliance/iso-27001-certification-support': {
    title: 'ISO 27001 Certification',
    description: 'Expert consulting to design, implement, and maintain a compliant Information Security Management System aligned with ISO 27001.',
    heroItems: ['ISMS design', 'ISO 27001 alignment', 'Certification support'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'ISO 27001' }],
    ctaLabel: 'Get ISO 27001 Certified',
  },

  'governance-risk-compliance/iso-27701-certification-support': {
    title: 'ISO 27701 Certification',
    description: 'Extend your ISMS with a Privacy Information Management System to ensure compliant personal data processing aligned with ISO 27701.',
    heroItems: ['PIMS implementation', 'Privacy compliance', 'ISO 27701 certification'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'ISO 27701' }],
    ctaLabel: 'Get ISO 27701 Certified',
  },

  'governance-risk-compliance/iso-42001-certification-support': {
    title: 'ISO 42001 Certification',
    description: 'Establish an Artificial Intelligence Management System to govern algorithmic safety, trust, and responsible AI deployment.',
    heroItems: ['AI governance', 'Algorithmic safety', 'ISO 42001 alignment'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'ISO 42001' }],
    ctaLabel: 'Get ISO 42001 Certified',
  },

  'governance-risk-compliance/personal-data-protection': {
    title: 'Personal Data Protection',
    description: 'Enforce responsible data management rules, user consent compliance, and privacy-by-design standards across your organization.',
    heroItems: ['GDPR compliance', 'Privacy-by-design', 'Data subject rights'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'Personal Data Protection' }],
    ctaLabel: 'Protect Personal Data',
  },

  'governance-risk-compliance/risk-assessment': {
    title: 'Risk Assessment',
    description: 'Holistic evaluation to anticipate potential threats, quantify impact, and formulate strategic risk mitigation plans aligned to your business context.',
    heroItems: ['Threat anticipation', 'Impact quantification', 'Mitigation planning'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'Risk Assessment' }],
    ctaLabel: 'Request Risk Assessment',
  },

  'governance-risk-compliance/security-policy-development': {
    title: 'Security Policy Development',
    description: 'Establish robust, customized security policies integrating industry best practices for comprehensive asset protection and regulatory alignment.',
    heroItems: ['Policy frameworks', 'Industry best practices', 'Asset protection'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'Security Policy' }],
    ctaLabel: 'Build Your Policy Framework',
  },

  'governance-risk-compliance/swift-csp-compliance-support': {
    title: 'SWIFT CSP Compliance',
    description: 'Independent Customer Security Programme audits and Attestation Support on the SWIFT KYC registry to ensure financial messaging security.',
    heroItems: ['CSP audit', 'SWIFT KYC attestation', 'Financial security compliance'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'SWIFT CSP' }],
    ctaLabel: 'Achieve SWIFT Compliance',
  },

  'governance-risk-compliance/virtual-ciso-dpo': {
    title: 'Virtual CISO & DPO',
    description: 'Get ongoing strategic cyber leadership, advisory, and privacy compliance guidance from seasoned executives without the full-time overhead.',
    heroItems: ['Strategic advisory', 'Privacy compliance', 'Executive governance'],
    breadcrumbs: [{ label: 'GRC', href: '/services/governance-risk-compliance' }, { label: 'Virtual CISO/DPO' }],
    ctaLabel: 'Retain Virtual Leadership',
  },

  // ── SECURITY ASSESSMENT SUB-PAGES ────────────────────────────────────────

  'security-assessment/active-directory-assessment': {
    title: 'Active Directory Assessment',
    description: 'Audit your Active Directory environment for misconfigurations, privilege escalation paths, and persistence mechanisms used by real-world attackers.',
    heroItems: ['AD misconfiguration audit', 'Privilege escalation paths', 'Persistence detection'],
    breadcrumbs: [{ label: 'Security Assessment', href: '/services/security-assessment' }, { label: 'Active Directory' }],
    ctaLabel: 'Request AD Assessment',
  },

  'security-assessment/application-security-support': {
    title: 'Application Security',
    description: 'Secure your applications at every stage of development with code reviews, SAST/DAST testing, and secure development lifecycle guidance.',
    heroItems: ['Code review', 'SAST & DAST testing', 'Secure SDLC'],
    breadcrumbs: [{ label: 'Security Assessment', href: '/services/security-assessment' }, { label: 'Application Security' }],
    ctaLabel: 'Secure Your Applications',
  },

  'security-assessment/architecture-assessment': {
    title: 'Architecture Assessment',
    description: 'Evaluate the security of your technical architecture to identify design flaws, trust boundary weaknesses, and systemic vulnerabilities before they are exploited.',
    heroItems: ['Design flaw analysis', 'Trust boundary review', 'Systemic risk identification'],
    breadcrumbs: [{ label: 'Security Assessment', href: '/services/security-assessment' }, { label: 'Architecture' }],
    ctaLabel: 'Assess Your Architecture',
  },

  'security-assessment/cloud-environment-assessment': {
    title: 'Cloud Assessment',
    description: 'Evaluate the security posture of your cloud environments — AWS, Azure, GCP — covering IAM, network controls, data exposure, and compliance alignment.',
    heroItems: ['Cloud IAM audit', 'Network exposure', 'Compliance alignment'],
    breadcrumbs: [{ label: 'Security Assessment', href: '/services/security-assessment' }, { label: 'Cloud Assessment' }],
    ctaLabel: 'Assess Your Cloud',
  },

  'security-assessment/core-internet-banking-system-assessment': {
    title: 'Core Banking Assessment',
    description: 'Security assessment of core banking and internet banking systems to identify vulnerabilities in transaction processing, authentication, and data handling.',
    heroItems: ['Transaction security', 'Authentication testing', 'Core banking audit'],
    breadcrumbs: [{ label: 'Security Assessment', href: '/services/security-assessment' }, { label: 'Core Banking' }],
    ctaLabel: 'Secure Your Banking Platform',
  },

  'security-assessment/devsecops': {
    title: 'DevSecOps',
    description: 'Integrate security into your development pipeline with automated testing, policy-as-code, and developer training to ship secure software faster.',
    heroItems: ['Pipeline security', 'Policy-as-code', 'Shift-left security'],
    breadcrumbs: [{ label: 'Security Assessment', href: '/services/security-assessment' }, { label: 'DevSecOps' }],
    ctaLabel: 'Secure Your Pipeline',
  },

  'security-assessment/hardening-guides': {
    title: 'Hardening Guides',
    description: 'Reduce your attack surface with expert-authored hardening guides for operating systems, applications, network devices, and cloud services.',
    heroItems: ['OS hardening', 'Application hardening', 'Network device security'],
    breadcrumbs: [{ label: 'Security Assessment', href: '/services/security-assessment' }, { label: 'Hardening Guides' }],
    ctaLabel: 'Get Hardening Guidance',
  },

  'security-assessment/industrial-system-assessment': {
    title: 'Industrial Systems Assessment',
    description: 'Assess OT/ICS environments, SCADA systems, and industrial control networks to protect critical infrastructure from cyber threats.',
    heroItems: ['OT/ICS security', 'SCADA assessment', 'Industrial network audit'],
    breadcrumbs: [{ label: 'Security Assessment', href: '/services/security-assessment' }, { label: 'Industrial Systems' }],
    ctaLabel: 'Secure Industrial Systems',
  },

  'security-assessment/infrastructure-assessment': {
    title: 'Infrastructure Assessment',
    description: 'Comprehensive security assessment of your on-premise and hybrid infrastructure to identify misconfigurations, vulnerabilities, and exposure risks.',
    heroItems: ['Network security review', 'Server hardening audit', 'Exposure mapping'],
    breadcrumbs: [{ label: 'Security Assessment', href: '/services/security-assessment' }, { label: 'Infrastructure' }],
    ctaLabel: 'Assess Your Infrastructure',
  },

  'security-assessment/network-security-architecture': {
    title: 'Network Security Architecture',
    description: 'Design and validate a resilient network security architecture with segmentation, firewall review, zero-trust principles, and perimeter hardening.',
    heroItems: ['Network segmentation', 'Firewall review', 'Zero-trust design'],
    breadcrumbs: [{ label: 'Security Assessment', href: '/services/security-assessment' }, { label: 'Network Security' }],
    ctaLabel: 'Harden Your Network',
  },

  'security-assessment/system-hardening': {
    title: 'System Hardening',
    description: 'Reduce your attack surface through systematic hardening of operating systems, middleware, and endpoint configurations across your environment.',
    heroItems: ['OS hardening', 'Endpoint configuration', 'Attack surface reduction'],
    breadcrumbs: [{ label: 'Security Assessment', href: '/services/security-assessment' }, { label: 'System Hardening' }],
    ctaLabel: 'Harden Your Systems',
  },

  'security-assessment/technical-assessment': {
    title: 'Technical Assessment',
    description: 'In-depth technical evaluation of your security controls, configurations, and posture to produce actionable findings and prioritized remediation plans.',
    heroItems: ['Security control review', 'Configuration audit', 'Remediation roadmap'],
    breadcrumbs: [{ label: 'Security Assessment', href: '/services/security-assessment' }, { label: 'Technical Assessment' }],
    ctaLabel: 'Request Technical Assessment',
  },

  'security-assessment/technical-assistance': {
    title: 'Technical Assistance',
    description: 'On-demand technical expertise to support your security team with complex implementations, incident investigations, and capability uplift.',
    heroItems: ['Expert support', 'Incident assistance', 'Capability uplift'],
    breadcrumbs: [{ label: 'Security Assessment', href: '/services/security-assessment' }, { label: 'Technical Assistance' }],
    ctaLabel: 'Request Technical Support',
  },

  // ── CYBERSECURITY STRATEGY CONSULTING SUB-PAGES ──────────────────────────

  'cybersecurity-strategy-consulting/capacity-and-maturity-assessment': {
    title: 'Maturity Assessment',
    description: 'Evaluate your organization\'s cybersecurity maturity level and capacity to identify gaps, prioritize improvements, and build a roadmap toward cyber excellence.',
    heroItems: ['Maturity benchmarking', 'Capacity evaluation', 'Improvement roadmap'],
    breadcrumbs: [{ label: 'Strategy Consulting', href: '/services/cybersecurity-strategy-consulting' }, { label: 'Maturity Assessment' }],
    ctaLabel: 'Assess Your Maturity',
  },

  'cybersecurity-strategy-consulting/cert-implementation': {
    title: 'CERT Implementation',
    description: 'Design and build a national or organizational Computer Emergency Response Team with the processes, tools, and capabilities to respond to cyber incidents effectively.',
    heroItems: ['CERT design', 'Process development', 'Capability building'],
    breadcrumbs: [{ label: 'Strategy Consulting', href: '/services/cybersecurity-strategy-consulting' }, { label: 'CERT Implementation' }],
    ctaLabel: 'Build Your CERT',
  },

  'cybersecurity-strategy-consulting/critical-infrastructure-protection': {
    title: 'Critical Infrastructure Protection',
    description: 'Develop and implement protection strategies for critical national infrastructures including energy, finance, transport, and telecommunications sectors.',
    heroItems: ['National CIP strategies', 'Sector risk assessment', 'Protection frameworks'],
    breadcrumbs: [{ label: 'Strategy Consulting', href: '/services/cybersecurity-strategy-consulting' }, { label: 'CIP' }],
    ctaLabel: 'Protect Critical Infrastructure',
  },

  'cybersecurity-strategy-consulting/cyber-crisis-management-framework': {
    title: 'Cyber Crisis Management',
    description: 'Build a comprehensive cyber crisis management framework enabling rapid detection, structured response, and coordinated recovery from major cyber incidents.',
    heroItems: ['Crisis detection', 'Structured response', 'Coordinated recovery'],
    breadcrumbs: [{ label: 'Strategy Consulting', href: '/services/cybersecurity-strategy-consulting' }, { label: 'Crisis Management' }],
    ctaLabel: 'Build Crisis Capabilities',
  },

  'cybersecurity-strategy-consulting/cyber-resilience-framework': {
    title: 'Cyber Resilience Framework',
    description: 'Design a holistic cyber resilience framework that integrates prevention, detection, response, and recovery capabilities across your entire organization.',
    heroItems: ['Resilience architecture', 'Prevention to recovery', 'Organizational alignment'],
    breadcrumbs: [{ label: 'Strategy Consulting', href: '/services/cybersecurity-strategy-consulting' }, { label: 'Resilience Framework' }],
    ctaLabel: 'Build Your Framework',
  },

  'cybersecurity-strategy-consulting/development-of-national-and-sectoral-cybersecurity-strategy': {
    title: 'National Cybersecurity Strategy',
    description: 'Support governments and national agencies in developing, publishing, and implementing comprehensive national and sectoral cybersecurity strategies.',
    heroItems: ['National strategy design', 'Sectoral frameworks', 'Implementation support'],
    breadcrumbs: [{ label: 'Strategy Consulting', href: '/services/cybersecurity-strategy-consulting' }, { label: 'National Strategy' }],
    ctaLabel: 'Develop Your Strategy',
  },

  'cybersecurity-strategy-consulting/soc-implementation': {
    title: 'SOC Implementation',
    description: 'Design and stand up a Security Operations Center aligned to your organizational needs, from architecture and tooling to staffing and processes.',
    heroItems: ['SOC architecture', 'Technology selection', 'Analyst processes'],
    breadcrumbs: [{ label: 'Strategy Consulting', href: '/services/cybersecurity-strategy-consulting' }, { label: 'SOC Implementation' }],
    ctaLabel: 'Build Your SOC',
  },

  // ── CYBER EXERCISE SUB-PAGES ──────────────────────────────────────────────

  'cyber-exercise/business-continuity-management-resilience-and-recovery': {
    title: 'BCM Resilience & Recovery',
    description: 'Exercise your business continuity plans through realistic crisis scenarios to validate recovery procedures and strengthen organizational resilience.',
    heroItems: ['BCM exercises', 'Recovery validation', 'Resilience testing'],
    breadcrumbs: [{ label: 'Cyber Exercise', href: '/services/cyber-exercise' }, { label: 'BCM & Resilience' }],
    ctaLabel: 'Run a BCM Exercise',
  },

  'cyber-exercise/cybersecurity-and-investigation': {
    title: 'Cybersecurity & Investigation',
    description: 'Combine realistic attack scenarios with investigative exercises to train your teams on detection, evidence collection, and threat attribution.',
    heroItems: ['Attack scenario training', 'Evidence collection', 'Threat attribution'],
    breadcrumbs: [{ label: 'Cyber Exercise', href: '/services/cyber-exercise' }, { label: 'Cybersecurity & Investigation' }],
    ctaLabel: 'Run an Investigation Exercise',
  },

  'cyber-exercise/governance-risk-compliance': {
    title: 'GRC Exercise',
    description: 'Stress-test your governance, risk, and compliance frameworks through tabletop exercises that simulate regulatory incidents and compliance failures.',
    heroItems: ['GRC tabletop exercises', 'Regulatory incident simulation', 'Compliance stress-testing'],
    breadcrumbs: [{ label: 'Cyber Exercise', href: '/services/cyber-exercise' }, { label: 'GRC Exercise' }],
    ctaLabel: 'Run a GRC Exercise',
  },

  // ── AI CYBERSECURITY SUB-PAGES ────────────────────────────────────────────
  'ai-cybersecurity/ai-strategy-governance': {
    title: 'AI Strategy & Governance',
    description: 'Develop a comprehensive AI governance framework to ensure responsible, secure, and compliant deployment of artificial intelligence systems.',
    heroItems: ['AI governance', 'Responsible AI', 'Compliance frameworks'],
    breadcrumbs: [{ label: 'AI Cybersecurity', href: '/services/ai-cybersecurity' }, { label: 'AI Strategy & Governance' }],
    ctaLabel: 'Govern Your AI',
  },

  'ai-cybersecurity/ai-training-awareness': {
    title: 'AI Training & Awareness',
    description: 'Educate your teams on AI security risks, responsible use principles, and how to identify adversarial AI threats in everyday business contexts.',
    heroItems: ['AI security awareness', 'Responsible AI training', 'Adversarial threat education'],
    breadcrumbs: [{ label: 'AI Cybersecurity', href: '/services/ai-cybersecurity' }, { label: 'AI Training' }],
    ctaLabel: 'Train Your Team',
  },

  'ai-cybersecurity/deepfake-identity-detection': {
    title: 'Deepfake & Identity Detection',
    description: 'Deploy detection capabilities to identify AI-generated deepfakes, synthetic identities, and voice cloning attacks targeting your organization.',
    heroItems: ['Deepfake detection', 'Synthetic identity analysis', 'Voice cloning defense'],
    breadcrumbs: [{ label: 'AI Cybersecurity', href: '/services/ai-cybersecurity' }, { label: 'Deepfake Detection' }],
    ctaLabel: 'Detect Deepfakes',
  },

  'ai-cybersecurity/generative-ai-governance': {
    title: 'Generative AI Governance',
    description: 'Establish governance controls for generative AI tools to prevent data leakage, hallucinations, and misuse in enterprise environments.',
    heroItems: ['GenAI controls', 'Data leakage prevention', 'Enterprise AI governance'],
    breadcrumbs: [{ label: 'AI Cybersecurity', href: '/services/ai-cybersecurity' }, { label: 'Generative AI Governance' }],
    ctaLabel: 'Govern Generative AI',
  },

  'ai-cybersecurity/llm-security-assessment': {
    title: 'LLM Security Assessment',
    description: 'Evaluate the security of large language model deployments for prompt injection, data poisoning, model theft, and output manipulation vulnerabilities.',
    heroItems: ['Prompt injection testing', 'Data poisoning detection', 'Model security audit'],
    breadcrumbs: [{ label: 'AI Cybersecurity', href: '/services/ai-cybersecurity' }, { label: 'LLM Security' }],
    ctaLabel: 'Assess Your LLM',
  },

};

// ─── GENERATOR ───────────────────────────────────────────────────────────────

function buildHeroSectionFile(data) {
  const {
    title,
    description = '',
    heroItems = [],
    breadcrumbs = [],
    videoSrc = '/vids/videoplayback.mp4',
    imageSrc,
    ctaLabel = 'Consult an Expert',
    ctaHref = '/contact',
    secondaryCtaLabel,
    secondaryCtaHref = '/services',
  } = data;

  const bcItems = breadcrumbs.map(b =>
    b.href
      ? `{ label: "${b.label}", href: "${b.href}" }`
      : `{ label: "${b.label}" }`
  ).join(', ');

  return `"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="${title}"
      description="${description.replace(/"/g, '\\"')}"
      heroItems={[${heroItems.map(i => `"${i.replace(/"/g, '\\"')}"`).join(', ')}]}
      breadcrumbs={[${bcItems}]}${imageSrc ? `\n      imageSrc="${imageSrc}"` : `\n      videoSrc="${videoSrc}"`}
      ctaLabel="${ctaLabel}"
      ctaHref="${ctaHref}"${secondaryCtaLabel ? `\n      secondaryCtaLabel="${secondaryCtaLabel}"\n      secondaryCtaHref="${secondaryCtaHref}"` : ''}
    />
  );
}
`;
}

let count = 0;

for (const [relPath, data] of Object.entries(heroData)) {
  const absPath = path.join(srcRoot, relPath.replace(/\//g, path.sep));
  const sectionsDir = path.join(absPath, 'sections');
  const heroFile = path.join(sectionsDir, 'HeroSection.tsx');

  // Only write separate HeroSection.tsx if a sections/ folder exists OR if one was there before
  if (fs.existsSync(sectionsDir) || fs.existsSync(path.join(absPath, 'sections'))) {
    if (!fs.existsSync(sectionsDir)) fs.mkdirSync(sectionsDir, { recursive: true });
    fs.writeFileSync(heroFile, buildHeroSectionFile(data), 'utf8');
    console.log(`WROTE sections/HeroSection.tsx: ${relPath}`);
    count++;
  } else {
    // For pages that have inline hero in page.tsx, write a new separate component
    if (!fs.existsSync(sectionsDir)) fs.mkdirSync(sectionsDir, { recursive: true });
    fs.writeFileSync(heroFile, buildHeroSectionFile(data), 'utf8');
    console.log(`CREATED sections/HeroSection.tsx: ${relPath}`);
    count++;
  }
}

console.log(`\n=== Generated/updated HeroSection.tsx for ${count} routes ===`);
