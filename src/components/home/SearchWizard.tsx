"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  ArrowRight,
  Command,
  HelpCircle,
  Link as LinkIcon,
  Globe,
} from "lucide-react";
import { sectorLinks } from "@/lib/sectors";
import {
  opensearch,
  pagerduty,
  malwarebytes,
  duckduckgo,
  kali_linux,
  metasploit,
  isc2,
  opnsense,
  owasp,
  microsoft_defender,
  okta,
  microsoft_azure,
  microsoft,
  honeywell,
  swift,
  docker,
  openai,
  claude_ai,
} from "thesvg";

interface SearchItem {
  title: string;
  category: string;
  description: string;
  href: string;
  keywords: string[];
  icon?: any; // thesvg IconModule object (optional — sectors use fallback)
  details?: string[]; // Extra bullet points for the preview pane
}

const searchDataset: SearchItem[] = [
  // Managed Services
  {
    title: "Managed SOC (Security Operations Center)",
    category: "Managed Services",
    description: "24/7 continuous threat monitoring, SIEM optimization, log management, and proactive alert response.",
    href: "/services/defensive-security",
    keywords: ["soc", "monitoring", "siem", "edr", "xdr", "blue team", "logs", "alerts", "surveillance"],
    icon: opensearch,
    details: [
      "24/7/365 continuous network security monitoring",
      "Managed EDR, XDR, and SIEM optimization",
      "Log management & behavioral anomaly detection",
      "Playbook automation and custom threat watches"
    ]
  },
  {
    title: "CERT (CSIRT.tn) Incident Response",
    category: "Managed Services",
    description: "Fast-acting CERT for critical threat response, incident containment, digital forensics, and crisis handling.",
    href: "/services/defensive-security",
    keywords: ["cert", "csirt", "incident response", "incident management", "containment", "breach", "crisis", "forensics", "malware"],
    icon: pagerduty,
    details: [
      "Active member of FIRST and AfricaCERT",
      "Immediate remote containment or on-site team dispatch",
      "Post-incident digital forensics analysis",
      "Technical crisis coordination and legal assistance"
    ]
  },
  {
    title: "Malware Analysis",
    category: "Managed Services",
    description: "Deep examination, code disassembly, isolation, and neutralization of ransomware, Trojans, and viruses.",
    href: "/services/defensive-security",
    keywords: ["malware", "ransomware", "virus", "trojan", "disassembly", "reverse engineering"],
    icon: malwarebytes,
    details: [
      "Dynamic and static analysis in sandbox environments",
      "Reverse engineering of custom ransomware families",
      "Indicator of Compromise (IoC) extraction",
      "Remediation and payload containment playbooks"
    ]
  },
  {
    title: "Dark Web & Anti-Phishing Monitoring",
    category: "Managed Services",
    description: "Continuous tracking of credentials, exposed documents on the dark web, and phishing site takedowns.",
    href: "/services/defensive-security",
    keywords: ["dark web", "phishing", "leak", "compromised", "credentials", "social media", "takedown"],
    icon: duckduckgo,
    details: [
      "Real-time credential compromise monitoring",
      "Rogue site, mock profiles, and lookalike domain searches",
      "Phishing campaign mitigation and automated takedowns",
      "Monitoring hacker forums for extortion plans"
    ]
  },

  // Offensive Security
  {
    title: "Red Teaming Campaigns",
    category: "Offensive Security",
    description: "Highly realistic adversary attack simulations assessing your people, processes, and technical defenses.",
    href: "/services/red-team",
    keywords: ["red team", "red teaming", "adversary simulation", "attack simulation", "campaign", "ransomware simulation"],
    icon: kali_linux,
    details: [
      "Multi-vector attacks simulating actual threat actor groups",
      "Social engineering, physical breach, and payload execution",
      "Detection capability gap and blue team readiness assessments",
      "Ransomware exfiltration and system paralysis simulations"
    ]
  },
  {
    title: "Offensive Assessments (Pentesting)",
    category: "Offensive Security",
    description: "Advanced penetration testing for web, mobile, API, wireless, and physical infrastructures.",
    href: "/services/offensive-security/offensive-assessments",
    keywords: ["pentest", "pentesting", "penetration testing", "vulnerability assessment", "external network", "internal network"],
    icon: metasploit,
    details: [
      "Manual and tool-assisted vulnerability verification",
      "External, internal, and DMZ network testing",
      "Web applications, web APIs, and mobile apps (iOS & Android)",
      "Developer-friendly remediation roadmap"
    ]
  },

  // GRC
  {
    title: "Information Security Assessment",
    category: "GRC",
    description: "In-depth evaluations of Information Security Management Systems (ISMS) and core technical security controls.",
    href: "/services/governance-risk-compliance/information-system-security-assessment",
    keywords: ["isms", "assessment", "audit", "controls", "governance"],
    icon: isc2,
    details: [
      "Comprehensive evaluation of organizational security frameworks",
      "Comparison against baseline security standards",
      "Identification of control gaps and policy loopholes",
      "Strategic remediation advisory and compliance mapping"
    ]
  },
  {
    title: "Risk Assessment",
    category: "GRC",
    description: "Identifying, prioritizing, and formulating treatment plans for key organizational risk factors.",
    href: "/services/governance-risk-compliance/risk-assessment",
    keywords: ["risk", "threat", "treatment", "mitigation", "impact"],
    icon: opnsense,
    details: [
      "Quantitative and qualitative threat modeling",
      "Impact analysis based on business continuity metrics",
      "Creation of dynamic corporate risk registers",
      "Formulation of proactive security control upgrades"
    ]
  },
  {
    title: "Standards Compliance Support",
    category: "GRC",
    description: "Structured gap audits and alignment for ISO 27001, PCI-DSS, GDPR, SWIFT CSP, and NIST frameworks.",
    href: "/services/governance-risk-compliance",
    keywords: ["compliance", "iso 27001", "pci-dss", "gdpr", "swift", "nist", "regulations", "standards"],
    icon: owasp,
    details: [
      "ISO 27001, 22301, 27701, and 42001 alignment support",
      "SWIFT Customer Security Programme (CSP) independent audits",
      "GDPR and regional personal data protection frameworks",
      "Legal and regulatory compliance gap auditing"
    ]
  },
  {
    title: "Virtual CISO & DPO",
    category: "GRC",
    description: "Ongoing leadership, executive strategic advisory, and privacy compliance management support.",
    href: "/services/governance-risk-compliance/virtual-ciso-dpo",
    keywords: ["ciso", "dpo", "virtual ciso", "leadership", "privacy officer", "advisory"],
    icon: microsoft_defender,
    details: [
      "Part-time or on-demand CISO strategic leadership",
      "Data Protection Officer (DPO) support and consent frameworks",
      "Security committee leadership and executive board reporting",
      "Incident readiness program review"
    ]
  },
  {
    title: "Business Continuity & Disaster Recovery (BCP/DRP)",
    category: "GRC",
    description: "Formulating business continuity plans to guarantee resilience and minimize business interruption.",
    href: "/services/governance-risk-compliance/bcp-drp-development",
    keywords: ["bcp", "drp", "continuity", "disaster recovery", "resilience", "iso 22301"],
    icon: okta,
    details: [
      "Business Impact Analysis (BIA) configuration",
      "ISO 22301 Business Continuity Management integration",
      "Active runbooks for system failures or backup transitions",
      "Executive and operations simulation drills"
    ]
  },

  // Security Assessment
  {
    title: "Cloud Environment Assessment",
    category: "Security Assessment",
    description: "Security assessments of AWS, Azure, and GCP configurations to expose misconfigurations and IAM gaps.",
    href: "/services/security-assessment/cloud-environment-assessment",
    keywords: ["cloud", "aws", "azure", "gcp", "bucket", "iam", "cloud security"],
    icon: microsoft_azure,
    details: [
      "Audit of AWS, Azure, and GCP core configurations",
      "Identity & Access Management (IAM) privilege creep analysis",
      "Exposed storage buckets & API endpoints scanning",
      "Infrastructure as Code (IaC) templates security check"
    ]
  },
  {
    title: "Active Directory Assessment",
    category: "Security Assessment",
    description: "Auditing domain controllers, trust relationships, privilege delegations, and GPO weaknesses.",
    href: "/services/security-assessment/active-directory-assessment",
    keywords: ["active directory", "ad", "domain controller", "privilege escalation", "identity", "access control"],
    icon: microsoft,
    details: [
      "Deep audits of Active Directory forests and GPOs",
      "Identification of domain escalation paths (BloodHound analysis)",
      "Domain Controller configuration hardening assessment",
      "Enforcing least privilege and cleaning legacy objects"
    ]
  },
  {
    title: "OT / Industrial System Assessment",
    category: "Security Assessment",
    description: "Evaluating control system security (ICS/SCADA) and aligning with the IEC 62443 standard.",
    href: "/services/security-assessment/industrial-system-assessment",
    keywords: ["ot", "ics", "scada", "industrial", "factory", "operational technology", "iec 62443"],
    icon: honeywell,
    details: [
      "ICS, SCADA, PLC, and smart sensors security audits",
      "IEC 62443 industrial cyber security baseline assessments",
      "Air-gap segmentation and network border reviews",
      "Mitigating risks to manufacturing or energy operations"
    ]
  },
  {
    title: "Core Banking Systems Assessment",
    category: "Security Assessment",
    description: "High-security tests for internet banking and banking portals, preventing transaction manipulation.",
    href: "/services/security-assessment/core-internet-banking-system-assessment",
    keywords: ["banking", "swift", "core banking", "transaction", "atm", "financial"],
    icon: swift,
    details: [
      "Security testing of SWIFT networks and core mainframes",
      "Internet and mobile banking app API security checks",
      "Validating logic against transaction manipulation attacks",
      "Verifying secure audit logs and financial data encryption"
    ]
  },
  {
    title: "DevSecOps Integration",
    category: "Security Assessment",
    description: "Automated vulnerability scanning (SAST/DAST) and compliance checking built into CI/CD pipelines.",
    href: "/services/security-assessment/devsecops",
    keywords: ["devsecops", "pipeline", "sast", "dast", "automation", "cicd"],
    icon: docker,
    details: [
      "Static and Dynamic Application Security Testing setup",
      "Dependency and package vulnerability automation",
      "Integrating security gates into GitHub Actions, GitLab CI, Jenkins",
      "Developer security training on pipeline results interpretation"
    ]
  },

  // AI & Cybersecurity
  {
    title: "AI Security & Threat Defense",
    category: "AI & Cybersecurity",
    description: "Securing LLMs and AI agents against prompt injection, jailbreaks, data leakage, and adversarial attacks.",
    href: "/services/ai-cybersecurity/ai-security-threat-defense",
    keywords: ["ai security", "llm security", "prompt injection", "jailbreak", "adversarial", "model abuse"],
    icon: openai,
    details: [
      "LLM firewalling against indirect prompt injection",
      "Jailbreak protection & guardrails implementation",
      "Preventing corporate data leakage through model prompts",
      "Security reviews of RAG vector database integrations"
    ]
  },
  {
    title: "AI Strategy & Governance",
    category: "AI & Cybersecurity",
    description: "Roadmaps and controls for responsible AI adoption, complying with emerging ISO 42001 standards.",
    href: "/services/ai-cybersecurity/ai-strategy-governance",
    keywords: ["ai strategy", "ai governance", "responsible ai", "iso 42001", "compliance"],
    icon: claude_ai,
    details: [
      "Drafting corporate Responsible AI policies",
      "Alignment with ISO 42001 (Artificial Intelligence Management System)",
      "Risk modeling for LLM deployments & agent tasks",
      "Audit logs, algorithmic transparency, and bias reviews"
    ]
  },
];

// Comprehensive manual keywords for each sector
const sectorKeywordsMap: Record<string, string[]> = {
  "/sectors/finance": [
    "financial", "finance", "bank", "banking", "banks", "insurance", "payment", "payments",
    "credit", "lending", "capital", "investment", "trading", "stock", "market", "forex",
    "treasury", "accounting", "audit", "regulatory", "compliance", "pci-dss", "pci",
    "swift", "transactions", "fraud", "anti-money laundering", "aml", "kyc",
  ],
  "/sectors/telecom-it": [
    "telecom", "telecommunications", "telco", "network", "networks", "5g", "fiber",
    "broadband", "isp", "internet", "it", "information technology", "tech", "technology",
    "mobile", "wireless", "connectivity", "data center", "cloud", "infrastructure",
    "dns", "voip", "satellite", "iot",
  ],
  "/sectors/energy": [
    "energy", "oil", "gas", "petroleum", "power", "electricity", "electric", "grid",
    "solar", "wind", "renewable", "nuclear", "utility", "utilities", "pipeline",
    "refinery", "mining", "fuel", "generation", "distribution", "smart grid", "scada",
  ],
  "/sectors/public": [
    "government", "governments", "public", "public sector", "administration", "federal",
    "state", "ministry", "defense", "defence", "military", "national security",
    "law enforcement", "police", "intelligence", "municipality", "city", "e-government",
    "citizen", "civil", "sovereignty", "diplomatic", "embassy",
  ],
  "/sectors/industrial": [
    "industrial", "industry", "manufacturing", "factory", "factories", "automation",
    "production", "supply chain", "logistics", "ot", "operational technology", "plc",
    "ics", "scada", "robotics", "assembly", "warehouse", "construction", "engineering",
    "iec 62443", "plant", "machinery",
  ],
  "/sectors/healthcare": [
    "healthcare", "health", "hospital", "hospitals", "medical", "clinical", "patient",
    "pharmaceutical", "pharma", "biotech", "laboratory", "lab", "hipaa", "ehr",
    "electronic health", "telemedicine", "diagnosis", "surgery", "nursing",
    "medical device", "health data", "pacs", "radiology", "insurance",
  ],
  "/sectors/transportation": [
    "transportation", "transport", "aviation", "airline", "airport", "shipping",
    "maritime", "port", "rail", "railway", "logistics", "fleet", "trucking",
    "freight", "autonomous", "vehicle", "mobility", "traffic", "cargo",
    "supply chain", "delivery",
  ],
  "/sectors/fintech-start-up": [
    "fintech", "startup", "start-up", "startups", "saas", "digital", "innovation",
    "app", "mobile app", "payment", "crypto", "blockchain", "wallet", "neobank",
    "regtech", "insurtech", "crowdfunding", "venture", "scale-up", "agile",
    "mvp", "api", "open banking",
  ],
  "/sectors/media": [
    "media", "entertainment", "broadcast", "broadcasting", "streaming", "television",
    "tv", "radio", "publishing", "news", "journalism", "content", "film", "video",
    "music", "gaming", "advertising", "social media", "digital media", "press",
    "production", "studio", "intellectual property", "copyright",
  ],
};

// Build sector search items from sectors.ts with comprehensive keywords
const sectorSearchItems: SearchItem[] = sectorLinks.map((sector) => {
  const manualKeywords = sectorKeywordsMap[sector.href] || [];
  // Also include words from name + description as fallback
  const nameWords = sector.name.toLowerCase().split(/\s+/);
  const descWords = sector.description.toLowerCase()
    .split(/[\s,.]+/)
    .filter((w) => w.length > 3);
  const uniqueKeywords = Array.from(new Set([...manualKeywords, ...nameWords, ...descWords]));

  return {
    title: sector.name,
    category: "Sectors",
    description: sector.description,
    href: sector.href,
    keywords: uniqueKeywords,
    details: [
      `Dedicated cybersecurity solutions for ${sector.name}`,
      "Tailored risk assessment and compliance mapping",
      "Industry-specific threat intelligence and monitoring",
      "Regulatory alignment and sector best practices",
    ],
  };
});

const fullSearchDataset: SearchItem[] = [...searchDataset, ...sectorSearchItems];

const recommendedSearches = [
  "Ransomware",
  "Red Teaming",
  "ISO 27001",
  "AI Security",
  "Cloud Security",
  "Active Directory",
  "OT Security",
];

interface SearchWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

// Text Highlight Helper Component - using warm red highlights instead of black
function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="bg-red-50 text-red-600 font-bold px-0.5 rounded transition-all">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

export function SearchWizard({ isOpen, onClose }: SearchWizardProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setQuery("");
      setSearchResults([]);
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const cleanQuery = query.toLowerCase().trim();
    const filtered = fullSearchDataset.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(cleanQuery);
      const descMatch = item.description.toLowerCase().includes(cleanQuery);
      const keywordsMatch = item.keywords.some((k) => k.toLowerCase().includes(cleanQuery));
      return titleMatch || descMatch || keywordsMatch;
    });

    // Sort: titles that contain query rank higher
    const sorted = [...filtered].sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(cleanQuery);
      const bTitle = b.title.toLowerCase().includes(cleanQuery);
      if (aTitle && !bTitle) return -1;
      if (!aTitle && bTitle) return 1;
      return 0;
    });

    setSearchResults(sorted.slice(0, 7));
  }, [query]);

  // Reset selection index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchResults]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (searchResults.length > 0 ? (prev + 1) % searchResults.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (searchResults.length > 0 ? (prev - 1 + searchResults.length) % searchResults.length : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (searchResults.length > 0 && searchResults[selectedIndex]) {
          router.push(searchResults[selectedIndex].href);
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, searchResults, selectedIndex, onClose, router]);

  const handleItemClick = (href: string) => {
    router.push(href);
    onClose();
  };

  // Group search results by category
  const groupedResults: Record<string, { item: SearchItem; originalIndex: number }[]> = {};
  searchResults.forEach((item, index) => {
    if (!groupedResults[item.category]) {
      groupedResults[item.category] = [];
    }
    groupedResults[item.category].push({ item, originalIndex: index });
  });

  const selectedItem = searchResults[selectedIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Frosted Light Overlay — avoiding black overlay entirely */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Container: Frosted Light Glassmorphism Command Palette */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-4xl bg-white/95 border border-slate-200/80 rounded-2xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(15,23,42,0.18)] z-10 flex flex-col h-[600px] backdrop-blur-xl"
          >
            {/* Input Bar */}
            <div className="relative border-b border-slate-100 flex items-center shrink-0">
              <Search className="absolute left-5 text-slate-400 w-4 h-4 pointer-events-none" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search cyber capabilities, audits, incident response..."
                className="w-full py-5 pl-12 pr-12 bg-transparent text-slate-800 placeholder-slate-400 text-sm focus:outline-none"
              />
              <button
                onClick={onClose}
                className="absolute right-5 w-5 h-5 rounded hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Split View Body */}
            <div className="flex flex-1 min-h-0 bg-white">
              {/* Left Column: Search Results List */}
              <div className="w-full md:w-3/5 border-r border-slate-100 overflow-y-auto p-4 custom-scrollbar">
                {searchResults.length > 0 ? (
                  <div className="space-y-4">
                    {Object.entries(groupedResults).map(([category, items]) => (
                      <div key={category} className="space-y-1">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                          {category}
                        </h4>
                        {items.map(({ item, originalIndex }) => {
                          const isSelected = selectedIndex === originalIndex;
                          return (
                            <div
                              key={item.title}
                              onClick={() => handleItemClick(item.href)}
                              onMouseEnter={() => setSelectedIndex(originalIndex)}
                              className={`group px-3 py-3 rounded-lg flex items-center justify-between cursor-pointer transition-all duration-150 border ${isSelected
                                  ? "bg-slate-50 border-slate-200/80 shadow-xs"
                                  : "bg-transparent border-transparent"
                                }`}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                {/* Render brand SVG or fallback Globe for sectors */}
                                {item.icon ? (
                                  <div
                                    dangerouslySetInnerHTML={{ __html: item.icon.svg }}
                                    className={`w-7 h-7 rounded border shrink-0 transition-colors flex items-center justify-center [&>svg]:w-3.5 [&>svg]:h-3.5 ${isSelected
                                        ? "bg-red-600 border-red-500 text-white fill-white"
                                        : "bg-slate-50 border-slate-100 text-slate-400 fill-slate-400 group-hover:text-slate-600 group-hover:fill-slate-600"
                                      }`}
                                  />
                                ) : (
                                  <div
                                    className={`w-7 h-7 rounded border shrink-0 transition-colors flex items-center justify-center ${isSelected
                                        ? "bg-red-600 border-red-500 text-white"
                                        : "bg-slate-50 border-slate-100 text-slate-400 group-hover:text-slate-600"
                                      }`}
                                  >
                                    <Globe className="w-3.5 h-3.5" />
                                  </div>
                                )}
                                <span className="font-semibold text-xs sm:text-sm text-slate-700 group-hover:text-slate-900 truncate">
                                  <HighlightText text={item.title} query={query} />
                                </span>
                              </div>
                              <div className="flex items-center gap-2 shrink-0">
                                {isSelected && (
                                  <span className="text-[10px] font-mono font-medium text-slate-500 bg-white border border-slate-200 px-1.5 py-0.5 rounded">
                                    ↵
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                ) : query.trim() ? (
                  <div className="py-20 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 rounded-full border border-dashed border-slate-200 text-slate-400 flex items-center justify-center mb-3">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <h3 className="text-slate-700 font-bold text-sm">No capabilities found</h3>
                    <p className="text-slate-400 text-[11px] mt-1 max-w-xs px-4">
                      No matches for &ldquo;{query}&rdquo;. Check spelling or try a recommended topic on the right.
                    </p>
                  </div>
                ) : (
                  // Default clean start page
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3">
                      Recent / Core Tracks
                    </h4>
                    <div className="space-y-1">
                      {[
                        { title: "Ransomware Containment & Analysis", category: "Incident Response", href: "/services/defensive-security", icon: malwarebytes },
                        { title: "Adversary Simulation Campaigns", category: "Red Teaming", href: "/services/red-team", icon: kali_linux },
                        { title: "ISO 27001 Certification Support", category: "Compliance Support", href: "/services/governance-risk-compliance/iso-27001-certification-support", icon: owasp },
                        { title: "LLM Jailbreak & Security Assessment", category: "AI & Cybersecurity", href: "/services/ai-cybersecurity/ai-security-threat-defense", icon: openai },
                      ].map((track) => (
                        <div
                          key={track.title}
                          onClick={() => handleItemClick(track.href)}
                          className="group px-3 py-3 rounded-lg flex items-center justify-between hover:bg-slate-50 cursor-pointer border border-transparent transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              dangerouslySetInnerHTML={{ __html: track.icon.svg }}
                              className="w-7 h-7 rounded bg-slate-50 border border-slate-100 text-slate-400 fill-slate-400 group-hover:bg-red-50 group-hover:border-red-100 group-hover:text-red-600 group-hover:fill-red-600 flex items-center justify-center shrink-0 transition-colors [&>svg]:w-3.5 [&>svg]:h-3.5"
                            />
                            <div>
                              <p className="font-semibold text-xs sm:text-sm text-slate-700 group-hover:text-slate-900">
                                {track.title}
                              </p>
                            </div>
                          </div>
                          <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 bg-slate-50 group-hover:text-red-600 group-hover:bg-red-50 px-2 py-0.5 rounded">
                            {track.category}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Rich Preview Pane */}
              <div className="hidden md:flex md:w-2/5 bg-slate-50/50 p-6 flex-col justify-between overflow-y-auto">
                {selectedItem ? (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      {/* Render large preview brand SVG or fallback Globe for sectors */}
                      {selectedItem.icon ? (
                        <div
                          dangerouslySetInnerHTML={{ __html: selectedItem.icon.svg }}
                          className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-red-500 shadow-xs shrink-0 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-red-500 shadow-xs shrink-0 flex items-center justify-center">
                          <Globe className="w-5 h-5" />
                        </div>
                      )}
                      <span className="text-[9px] uppercase tracking-wider font-extrabold text-red-600 bg-red-50 border border-red-100 px-2.5 py-1 rounded">
                        {selectedItem.category}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-slate-800 font-bold text-base tracking-tight leading-tight">
                        {selectedItem.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {selectedItem.description}
                      </p>
                    </div>

                    {selectedItem.details && selectedItem.details.length > 0 && (
                      <div className="space-y-2.5 border-t border-slate-100 pt-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Key Deliverables
                        </span>
                        <ul className="space-y-2">
                          {selectedItem.details.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex gap-2 text-[11px] text-slate-600 leading-relaxed items-start">
                              <span className="text-red-500 text-xs shrink-0 mt-0.5">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="border-t border-slate-100 pt-4 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Keywords
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {selectedItem.keywords.map((k) => (
                          <span
                            key={k}
                            className="text-[9px] font-semibold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded"
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Default preview card
                  <div className="space-y-6 flex flex-col justify-center h-full text-center">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center mx-auto mb-2 shadow-xs">
                      <img src="/logos/site icon black (1).png" alt="Keystone" className="w-7 h-7 object-contain animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-slate-700 font-bold text-sm uppercase tracking-wider">
                        Keystone Portal Search
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed px-4">
                        Select a track or type a query to preview deliverables, compliance standard integrations, and targeted security controls.
                      </p>
                    </div>
                    <div className="border-t border-slate-100 pt-4 flex flex-col items-center justify-center">
                      <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                        Recommended topics
                      </p>
                      <div className="flex flex-wrap gap-1.5 justify-center mt-3 max-w-xs">
                        {recommendedSearches.map((rec) => (
                          <button
                            key={rec}
                            onClick={() => setQuery(rec)}
                            className="px-2.5 py-1 text-[10px] font-semibold text-slate-500 hover:text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded transition-all"
                          >
                            {rec}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {selectedItem && (
                  <button
                    onClick={() => handleItemClick(selectedItem.href)}
                    className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-2 mt-6 cursor-pointer"
                  >
                    Go to Service Page <LinkIcon className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Keyboard Shortcuts Footer */}
            <div className="border-t border-slate-100 p-4 bg-slate-50/50 flex items-center justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-widest pointer-events-none shrink-0">
              <div className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-mono text-[9px] text-slate-500 shadow-2xs">↑↓</kbd>
                <span>Navigate</span>
                <span className="mx-2">•</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-mono text-[9px] text-slate-500 shadow-2xs">Enter</kbd>
                <span>Select</span>
              </div>
              <div className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-mono text-[9px] text-slate-500 shadow-2xs">Esc</kbd>
                <span>Close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
