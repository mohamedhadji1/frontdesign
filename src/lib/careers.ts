export type SectorLink = {
  name: string;
  description: string;
  href: string;
  highlighted?: boolean;
};

export const careersDetails = [
  {
    category: "Internship Positions",
    description: "Kickstart your career with our specialized internship programs. Learn from experts and work on real-world cybersecurity projects.",
    cta: "Join as Intern",
    items: [
      "Cybersecurity Analyst Intern",
      "Penetration Testing Intern",
      "Governance, Risk & Compliance Intern",
      "Malware Analysis Intern",
    ],
  },
  {
    category: "Junior Positions",
    description: "Launch your professional journey. We provide the tools, mentorship, and environment for junior talent to become industry leaders.",
    cta: "Start Your Career",
    items: [
      "Junior Cybersecurity Analyst",
      "Junior Penetration Tester",
      "Junior GRC Consultant",
      "Junior Threat Intelligence Analyst",
    ],
  },
  {
    category: "Senior Positions",
    description: "Lead the defense. We're looking for experienced professionals to drive innovation and protect global infrastructures.",
    cta: "Lead Our Team",
    items: [
      "Senior Cybersecurity Consultant",
      "Senior SOC & Incident Response",
      "Senior Penetration Testing",
      "Senior GRC & Compliance Consultant",
    ],
  },
];

export function careerSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type JobSpecification = {
  location: string;
  employmentType: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  process: string[];
};

export const jobSpecifications: Record<string, JobSpecification> = {
  "cybersecurity-analyst-intern": {
    location: "Tunis, Tunisia (Hybrid)",
    employmentType: "Internship (4-6 Months)",
    responsibilities: [
      "Assist in monitoring security alerts within our SOC Management.",
      "Analyze suspicious emails and potential phishing indicators.",
      "Document incident details and draft weekly threat summaries.",
      "Perform basic log analysis using SIEM tools."
    ],
    requirements: [
      "Pursuing a degree in Computer Science, IT, or Cybersecurity.",
      "Basic understanding of TCP/IP, operating systems, and network security.",
      "Familiarity with cybersecurity concepts (CIA triad, malware, firewalls)."
    ],
    niceToHave: [
      "Experience with Linux terminal and Python scripting.",
      "Active participation in CTF competitions."
    ],
    process: ["Resume Review", "Technical Quiz", "HR Fit Interview", "Offer"]
  },
  "penetration-testing-intern": {
    location: "Tunis, Tunisia (Hybrid)",
    employmentType: "Internship (4-6 Months)",
    responsibilities: [
      "Assist in vulnerability assessments and web application tests under supervision.",
      "Research emerging exploits and proof-of-concept code.",
      "Document found vulnerabilities and draft remediation guidelines.",
      "Support the team in setting up local test environments."
    ],
    requirements: [
      "Pursuing a degree in Computer Science, NetSec, or related fields.",
      "Solid knowledge of OWASP Top 10 web vulnerabilities.",
      "Basic understanding of networking protocols and web architectures."
    ],
    niceToHave: [
      "Experience using tools like Burp Suite, Nmap, and Metasploit.",
      "Active HackTheBox or TryHackMe profile (provide links)."
    ],
    process: ["Resume Review", "Hands-on Lab Test", "Technical Review", "Offer"]
  },
  "governance-risk-compliance-intern": {
    location: "Algiers, Algeria (On-site)",
    employmentType: "Internship (4-6 Months)",
    responsibilities: [
      "Assist consultants in gathering evidence for security audits.",
      "Review and map corporate security policies against ISO 27001 standard clauses.",
      "Help maintain project documentation and risk registers.",
      "Draft compliance awareness communications for client staff."
    ],
    requirements: [
      "Pursuing a degree in Business Technology, IT Audit, or Information Security.",
      "Understanding of security governance concepts and compliance frameworks.",
      "Strong analytical writing and communication skills."
    ],
    niceToHave: [
      "Knowledge of GDPR, ISO 27001, or NIST guidelines.",
      "Familiarity with ITIL framework."
    ],
    process: ["Resume Review", "Written Case Exercise", "HR Interview", "Offer"]
  },
  "malware-analysis-intern": {
    location: "Tunis, Tunisia (Hybrid)",
    employmentType: "Internship (4-6 Months)",
    responsibilities: [
      "Assist in static and dynamic analysis of suspicious files.",
      "Set up isolated sandbox environments for malware execution.",
      "Extract and document Indicators of Compromise (IoCs).",
      "Monitor global threat intelligence portals for new signature releases."
    ],
    requirements: [
      "Pursuing a degree in Computer Engineering or related technical field.",
      "Strong understanding of Windows/Linux operating system internals.",
      "Basic knowledge of assembly language and reverse engineering principles."
    ],
    niceToHave: [
      "Experience with tools like Ghidra, IDA Pro, or Wireshark.",
      "Familiarity with PE file format and API hashing."
    ],
    process: ["Resume Review", "Reverse Engineering Test", "Technical Interview", "Offer"]
  },
  "junior-cybersecurity-analyst": {
    location: "Tunis, Tunisia (Hybrid)",
    employmentType: "Full-Time",
    responsibilities: [
      "Monitor SIEM alerts and triage security incidents 24/7 (rotating shifts).",
      "Investigate endpoint detection alerts (EDR) and perform initial containment.",
      "Liaise with clients during active security alerts.",
      "Maintain SOC correlation rules and integration pipelines."
    ],
    requirements: [
      "Bachelor's degree in Cybersecurity, IT, or Computer Engineering.",
      "1-2 years of experience in a SOC or security operations environment.",
      "Strong understanding of packet analysis and network security controls."
    ],
    niceToHave: [
      "Relevant certifications (CompTIA Security+, CCNA CyberOps).",
      "Familiarity with SOAR playbooks."
    ],
    process: ["Screening Interview", "SIEM Triaging Test", "Technical Panel Interview", "Offer"]
  },
  "junior-penetration-tester": {
    location: "Tunis, Tunisia (Hybrid)",
    employmentType: "Full-Time",
    responsibilities: [
      "Perform internal and external network penetration tests.",
      "Conduct security assessments on web, mobile, and API interfaces.",
      "Draft comprehensive technical reports detailing vulnerabilities, impact, and remediation.",
      "Perform debriefing sessions with client technical teams."
    ],
    requirements: [
      "1-2 years of professional experience in penetration testing.",
      "Strong command of script development (Python, Bash, or PowerShell).",
      "Solid understanding of Active Directory architecture and exploitation vectors."
    ],
    niceToHave: [
      "Certifications (OSCP, eWPT, CEH Practical).",
      "Documented CVE disclosures or active bug bounty profile."
    ],
    process: ["Technical Screen", "24-Hour Penetration Lab", "Technical Interview", "Offer Interview"]
  },
  "junior-grc-consultant": {
    location: "Algiers, Algeria (On-site)",
    employmentType: "Full-Time",
    responsibilities: [
      "Perform GAP analysis audits against ISO 27001, PCI DSS, and national frameworks.",
      "Conduct information security risk assessments under the supervision of senior leads.",
      "Draft security policy packs, procedures, and guideline documentation.",
      "Support clients in audit preparation and compliance management."
    ],
    requirements: [
      "Bachelor's degree in IT, Audit, or Business Information Systems.",
      "1-2 years of experience in GRC, security consulting, or IT audit.",
      "Strong writing skills in French and English."
    ],
    niceToHave: [
      "ISO 27001 Lead Implementer/Auditor training.",
      "Knowledge of risk management methods (EBIOS, MEHARI)."
    ],
    process: ["Screening Interview", "GRC Case Study Presentation", "Advisory Team Interview", "Offer"]
  },
  "junior-threat-intelligence-analyst": {
    location: "Tunis, Tunisia (Hybrid)",
    employmentType: "Full-Time",
    responsibilities: [
      "Collect and analyze threat data from open-source intelligence (OSINT) and closed feeds.",
      "Track threat groups targeting regional sectors (Financial, Energy, Government).",
      "Generate monthly threat intelligence reports and alerts for subscribers.",
      "Correlate external threat trends with client internal network posture."
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Intelligence Studies, or related fields.",
      "1-2 years of experience in threat intelligence or security analysis.",
      "Familiarity with threat modeling frameworks (MITRE ATT&CK, Diamond Model)."
    ],
    niceToHave: [
      "Familiarity with MISP platform usage.",
      "Basic understanding of cybercrime markets."
    ],
    process: ["Screening Interview", "Intelligence Report Writing Test", "Technical Panel Interview", "Offer"]
  },
  "senior-cybersecurity-consultant": {
    location: "Tunis, Tunisia (Hybrid)",
    employmentType: "Full-Time",
    responsibilities: [
      "Lead complex security advisory programs for international enterprise clients.",
      "Design security architecture models for cloud and hybrid environments.",
      "Perform high-level threat modeling on corporate infrastructures.",
      "Mentor junior security consultants and shape service offerings."
    ],
    requirements: [
      "5+ years of experience in cybersecurity consulting or enterprise security.",
      "Proven track record of managing multi-stakeholder security projects.",
      "Exceptional presentation and communication skills."
    ],
    niceToHave: [
      "Top-tier certifications (CISSP, CISM, CCSP).",
      "Experience with cloud native security architectures (AWS, Azure)."
    ],
    process: ["Leadership Screening", "Security Architecture Design Challenge", "Board Interview", "Offer"]
  },
  "senior-soc-and-incident-response": {
    location: "Tunis, Tunisia (Hybrid)",
    employmentType: "Full-Time",
    responsibilities: [
      "Act as Lead Incident Responder during critical breach response engagements.",
      "Perform digital forensics and host/network analysis to determine root cause.",
      "Coordinate containment and eradication strategies with client executives.",
      "Optimize SOC detection models, EDR integrations, and incident playbooks."
    ],
    requirements: [
      "5+ years of experience in incident response, DFIR, or SOC leadership.",
      "Deep expertise in operating system forensics (Windows, Linux, macOS).",
      "Experience handling ransomware recovery and containment."
    ],
    niceToHave: [
      "Certifications (GCFA, GCIH, GCFE, OSCP).",
      "Experience with memory analysis (Volatility) and timeline parsing."
    ],
    process: ["DFIR Tech Screen", "Scenario Incident Simulation Test", "Director Panel Interview", "Offer"]
  },
  "senior-penetration-testing": {
    location: "Tunis, Tunisia (Hybrid)",
    employmentType: "Full-Time",
    responsibilities: [
      "Lead and execute Red Team operations and advanced adversary simulations.",
      "Develop custom scripts and exploits to bypass modern defensive endpoint controls.",
      "Conduct source code reviews and smart contract audits.",
      "Review methodology, maintain high testing quality, and train offensive consultants."
    ],
    requirements: [
      "5+ years of experience in dedicated offensive security / penetration testing.",
      "Advanced knowledge of OS bypass mechanisms, payload delivery, and Active Directory.",
      "Strong proficiency in assembly, C, Go, or Python for exploit development."
    ],
    niceToHave: [
      "Certifications (OSEP, OSWE, OSCE, GXPN).",
      "Published security advisories or open-source exploit payloads."
    ],
    process: ["Offensive Screen", "Red Team Operation Scenario Review", "Executive Interview", "Offer"]
  },
  "senior-grc-and-compliance-consultant": {
    location: "Mauritania Office (Nouakchott / Remote)",
    employmentType: "Full-Time",
    responsibilities: [
      "Lead ISO 27001 / PCI DSS compliance programs and management systems certification prep.",
      "Establish and deploy risk management frameworks tailored to critical operators.",
      "Develop corporate governance, privacy management systems, and cybersecurity policies.",
      "Liaise with national regulators and certify bodies on behalf of major financial clients."
    ],
    requirements: [
      "5+ years of experience leading compliance and security governance programs.",
      "Deep knowledge of regulations (DORA, SWIFT CSP, GDPR, NIS 2).",
      "Strong track record presenting security governance models to board-level members."
    ],
    niceToHave: [
      "Certifications (CISA, CRISC, ISO 27001 Lead Auditor, CIPP/E).",
      "Experience consulting for governments or banking regulators."
    ],
    process: ["Screening Interview", "GRC Executive Case Defense", "Regulator Advisory Panel", "Offer"]
  }
};
