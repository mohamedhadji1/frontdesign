"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type ServiceItem = {
  name: string;
  slug?: string;
  subCategory?: string;
  description?: string;
  subItems?: (string | { name: string; slug?: string })[];
};

type ServiceCategory = {
  category: string;
  href?: string;
  title: string;
  items: ServiceItem[];
};

export const servicesDetails: ServiceCategory[] = [
  {
    category: "Offensive Security",
    href: "/services/offensive-security",
    title: "Offensive Security",
    items: [
      {
        name: "Offensive Assessments",
        subCategory: "Advanced Penetration Testing",
        subItems: [
          {
            name: "External and Internal Penetration Testing",
            slug: "offensive-security/external-internal-penetration-testing",
          },
          {
            name: "Social Engineering",
            slug: "offensive-security/social-engineering",
          },
          {
            name: "Physical Intrusion Test",
            slug: "offensive-security/physical-intrusion-test",
          },
          {
            name: "Hardware Testing and Reverse Engineering",
            slug: "offensive-security/hardware-testing-reverse-engineering",
          },
        ]
      },

      {
        name: "Red Team",
        slug: "red-team",
        subCategory: "Offensive Security Testing",
        description: "Test the limits of your perimeter. Identify zero-day vulnerabilities, physical weaknesses, and social engineering risks through full-scale adversarial emulation."
      },
          {
            name: "Web & Mobile Application Assessment",
            slug: "web-mobile-application-assessment",
            subCategory: "Web & Mobile Application Assessment",
            description: "Keystone offers a specialized assessment service to assess the security of your company's web and mobile applications, thereby ensuring enhanced protection against cyber threats."
          },
    ],
  },
  {
    category: "Security assessment",
    href: "/services/security-assessment",
    title: "Security assessment",
    items: [
      {
        name: "Technical Assessment",
        subCategory: "Technical Assessment: In-Depth Systems Evaluation",
        subItems: [
          { name: "Infrastructure Assessment", slug: "security-assessment/infrastructure-assessment" },
          { name: "Cloud Environment Assessment", slug: "security-assessment/cloud-environment-assessment" },
          { name: "OT Assessment", slug: "security-assessment/industrial-system-assessment" },
          { name: "Core Banking and Internet Banking System Assessment", slug: "security-assessment/core-internet-banking-system-assessment" },
          { name: "Architecture Assessment", slug: "security-assessment/architecture-assessment" },
          { name: "Active Directory Infrastructure Assessment", slug: "security-assessment/active-directory-assessment" },
        ]
      },
      {
        name: "Technical Assistance",
        subCategory: "Technical Assistance: Professional and Responsive Support",
        subItems: [
          { name: "System Hardening", slug: "security-assessment/system-hardening" },
          { name: "Hardening Guides Development", slug: "security-assessment/hardening-guides" },
          { name: "Network Security Architecture Design", slug: "security-assessment/network-security-architecture" },
          { name: "Application Security Support", slug: "security-assessment/application-security-support" },
        ]
      },
      {
        name: "DevSecOps",
        slug: "security-assessment/devsecops",
        description: "Keystone assists your development and operations teams in automating security checks, integrating robust security gates seamlessly into your continuous integration and deployment pipelines."
      }
    ]
  },
  {
    category: "Managed Services",
    href: "/services/defensive-security",
    title: "Managed Services",
    items: [
      {
        name: "Managed SOC",
        subCategory: "Managed SOC: Proactive Monitoring & Response",
        subItems: [
          { name: "Blue Team", slug: "defensive-security/blue-team" },
          { name: "Vulnerability Scanning", slug: "defensive-security/vulnerability-scanning" },
          { name: "Incident Management", slug: "defensive-security/incident-management" },
          { name: "Threat Intelligence", slug: "defensive-security/threat-intelligence" },
          { name: "Dark Web Monitoring", slug: "defensive-security/dark-web-monitoring" },
          { name: "Anti-Phishing", slug: "defensive-security/anti-phishing" },
          { name: "Vulnerability Watch", slug: "defensive-security/vulnerability-watch" },
        ]
      },
      {
        name: "CERT",
        subCategory: "CERT (CSIRT.tn): Critical Threat Response",
        subItems: [
          { name: "Incident Response", slug: "defensive-security/incident-response" },
          { name: "Digital Forensics", slug: "defensive-security/digital-forensics" },
          { name: "Threat Hunting", slug: "defensive-security/threat-hunting" },
          { name: "Malware Analysis", slug: "defensive-security/malware-analysis" },
        ]
      },
    ],
  },
  {
    category: "GRC",
    href: "/services/governance-risk-compliance",
    title: "Governance, Risk and Compliance",
    items: [
      {
        name: "Cybersecurity & Compliance Assessment",
        subCategory: "Cybersecurity & Compliance Assessment",
        subItems: [
          { name: "Information Security Assessment", slug: "governance-risk-compliance/information-system-security-assessment" },
          { name: "Regulatory Assessment", slug: "governance-risk-compliance/information-system-security-assessment/regulatory" },
          { name: "Standards Compliance Assessment", slug: "governance-risk-compliance/information-system-security-assessment/standards" },
          { name: "Risk Assessment", slug: "governance-risk-compliance/risk-assessment" },
          { name: "Authorization Assessment", slug: "governance-risk-compliance/access-rights-assessment" }
        ]
      },
      {
        name: "Regulatory Compliance & Certification",
        subCategory: "Regulatory Compliance & Certification",
        subItems: [
          { name: "Regulatory Compliance Support", slug: "governance-risk-compliance/compliance-alignment" },
          { name: "ISO 27001 Certification Support", slug: "governance-risk-compliance/iso-27001-certification-support" },
          { name: "ISO 22301 Certification Support", slug: "governance-risk-compliance/iso-22301-certification-support" },
          { name: "ISO 27701 Certification Support", slug: "governance-risk-compliance/iso-27701-certification-support" },
          { name: "ISO 42001 Certification Support", slug: "governance-risk-compliance/iso-42001-certification-support" },
          { name: "SWIFT CSP Compliance Support", slug: "governance-risk-compliance/swift-csp-compliance-support" },
          { name: "Privacy & Data Protection", slug: "governance-risk-compliance/personal-data-protection" },
          { name: "Legal Compliance Support", slug: "governance-risk-compliance/compliance-alignment/legal" }
        ]
      },
      {
        name: "GRC Advisory Services",
        subCategory: "GRC Advisory Services",
        subItems: [
          { name: "Security Policy Development", slug: "governance-risk-compliance/security-policy-development" },
          { name: "BCP & DRP Development", slug: "governance-risk-compliance/bcp-drp-development" },
          { name: "Data Classification", slug: "governance-risk-compliance/data-classification" },
          { name: "Virtual CISO & DPO", slug: "governance-risk-compliance/virtual-ciso-dpo" },
          { name: "Governance & Risk Management Support", slug: "governance-risk-compliance/governance-risk-management-support" }
        ]
      }
    ],
  },
  {
    category: "Strategic Advisory",
    href: "/services/cybersecurity-strategy-consulting",
    title: "Strategic Advisory",
    items: [
      {
        name: "Cybersecurity Strategic Advisory",
        slug: "cybersecurity-strategy-consulting",
        subCategory: "Strategic Services",
        subItems: [
          { name: "Development of National and Sectoral Cybersecurity Strategy", slug: "cybersecurity-strategy-consulting/development-of-national-and-sectoral-cybersecurity-strategy" },
          { name: "CERT Implementation", slug: "cybersecurity-strategy-consulting/cert-implementation" },
          { name: "SOC Implementation", slug: "cybersecurity-strategy-consulting/soc-implementation" },
          { name: "Critical Infrastructure Protection", slug: "cybersecurity-strategy-consulting/critical-infrastructure-protection" },
          { name: "Cyber Crisis Management Framework", slug: "cybersecurity-strategy-consulting/cyber-crisis-management-framework" },
          { name: "Capacity and Maturity Assessment", slug: "cybersecurity-strategy-consulting/capacity-and-maturity-assessment" },
          { name: "Cyber Resilience Framework", slug: "cybersecurity-strategy-consulting/cyber-resilience-framework" }
        ]
      },
    ],
  },
  {
    category: "Training & Awareness",
    title: "Training & Awareness",
    items: [
      {
        name: "Training",
        slug: "training",
        subCategory: "Strategic Frameworks",
        subItems: [
          { name: "Security Management", slug: "strategy-governance" },
          { name: "Governance, Risk, and Compliance", slug: "cyber-exercise/governance-risk-compliance" },
          { name: "Business Continuity Management, Resilience, and Recovery", slug: "cyber-exercise/business-continuity-management-resilience-and-recovery" },
          { name: "Cybersecurity and Investigation", slug: "cyber-exercise/cybersecurity-and-investigation" },
        ],
      },
      {
        name: "Awareness",
        slug: "awareness",
        subCategory: "Awareness Programs",
        subItems: [
          { name: "Cyber Escape Room", slug: "services/awareness/cyber-escape-room" },
          { name: "Cyber Card Game", slug: "services/awareness/cyber-card-game" },
          { name: "Quiz", slug: "services/awareness/quiz" },
          { name: "Awareness Workshops", slug: "services/awareness/awareness-workshops" },
          { name: "Attack Simulation", slug: "services/awareness/attack-simulation" },
          { name: "Phishing Campaigns", slug: "services/awareness/phishing-campaigns" },
          { name: "Agent619", slug: "services/awareness/agent619" },
          { name: "Awareness Program", slug: "services/awareness/development-of-an-awareness-program" },
        ],
      },
      {
        name: "Cyber Exercice Management & Technique",
        slug: "cyber-exercise",
        description: "Prepare your operational and leadership teams for real-world cyber incidents through customizable crisis management exercises, simulation drills, and technical stress-testing."
      },
      {
        name: "CTF Competition Organization",
        slug: "ctf-competition-organization",
        description: "Foster cybersecurity interest and build technical capability in your organization through customized Capture the Flag (CTF) challenges, security tournaments, and training platforms."
      },
    ],
  },
  {
    category: "AI & Cybersecurity",
    href: "/services/ai-cybersecurity",
    title: "AI & Cybersecurity",
    items: [
      {
        name: "AI Strategy & Governance",
        slug: "ai-cybersecurity/ai-strategy-governance",
        description: "Define a clear, realistic and secure AI strategy aligned with business objectives, cybersecurity priorities and regulatory expectations."
      },
      {
        name: "AI Solutions Implementation",
        slug: "ai-cybersecurity/ai-solutions-implementation",
        description: "Design, implement and integrate AI-based solutions — LLMs, RAG, agents — focused on business value, security, scalability and compliance."
      },
      {
        name: "AI Security & Threat Defense",
        slug: "ai-cybersecurity/ai-security-threat-defense",
        description: "Assess and strengthen the security of AI systems against prompts, models, data leakage, and emerging machine learning attack vectors."
      },
      {
        name: "AI for Cybersecurity Operations",
        slug: "ai-cybersecurity/ai-for-cybersecurity-operations",
        description: "Integrate cognitive AI capabilities into active operations, reducing MTTR, triaging alerts, and orchestrating security playbooks."
      },
      {
        name: "AI Training & Awareness",
        slug: "ai-cybersecurity/ai-training-awareness",
        description: "Train executives, employees, and development teams on prompt safety, secure usage frameworks, and corporate data leakage prevention."
      }
    ]
  }
];

function normalizeServiceHref(slug: string | undefined, fallbackName: string) {
  if (slug) {
    const normalized = slug.replace(/^\//, '').replace(/^services\//, '');
    return `/services/${normalized}`;
  }

  return `/services/${fallbackName.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase()}`;
}

function getDropdownItems(category: ServiceCategory | undefined): ServiceItem[] {
  if (!category) {
    return [];
  }
  return category.items;
}

export function ServicesDropdown() {
  const [activeCategory, setActiveCategory] = useState("Offensive Security");
  const [activeItem, setActiveItem] = useState("Red Team");

  const currentCategoryObj = servicesDetails.find((c) => c.category === activeCategory);
  const dropdownItems = getDropdownItems(currentCategoryObj);
  const isDenseSecondColumn = dropdownItems.length > 6;

  return (

    <div className="absolute top-full left-0 w-full pt-2 pointer-events-auto">
      <div className="w-full bg-white text-gray-800 shadow-2xl rounded-b-lg border-t-2 border-red-600 overflow-hidden mx-auto container px-8 py-10 origin-top flex min-h-[400px]">

        {/* Left Column: Categories */}
        <div className="w-1/4 border-r border-gray-200 pr-6 flex flex-col space-y-2">
          {servicesDetails.map((group, index) => {
            const classes = `text-left px-4 py-3 rounded-md transition-colors text-sm font-medium flex justify-between items-center ${activeCategory === group.category
              ? "bg-gray-100 text-red-600"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`;
            const inner = (
              <>
                {group.category}
                <svg className={`w-4 h-4 transition-transform ${activeCategory === group.category ? "text-red-500" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            );
            const onEnter = () => { setActiveCategory(group.category); setActiveItem(group.items[0].name); };

            return group.href ? (
              <Link key={index} href={group.href} onMouseEnter={onEnter} className={classes}>
                {inner}
              </Link>
            ) : (
              <div key={index} onMouseEnter={onEnter} className={`${classes} cursor-default`}>
                {inner}
              </div>
            );
          })}
        </div>

        {/* Right Content Area */}
        <div className="w-3/4 pl-10 flex relative overflow-hidden">
          {/* Subtle Animated Decorative Watermark */}
          <motion.div
            className="absolute -right-20 top-1/2 -translate-y-1/2 text-red-600 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.08, 0.15, 0.08], y: [0, -15, 0], scale: [1, 1.05, 1] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg className="w-[600px] h-[600px]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
              <circle cx="50" cy="50" r="48" strokeDasharray="4 8" opacity="0.5" />
              <circle cx="50" cy="50" r="42" opacity="0.3" />
              <polygon points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5" opacity="0.2" />
              <path d="M50 25 L70 35 V55 C70 70 50 80 50 80 C50 80 30 70 30 55 V35 Z" strokeWidth="1" />
              <path d="M50 40 L60 45 V50 M50 40 V60 M50 40 L40 45 V50" opacity="0.6" />
              <circle cx="50" cy="60" r="2" fill="currentColor" opacity="0.8" />
              <circle cx="60" cy="50" r="1.5" fill="currentColor" opacity="0.8" />
              <circle cx="40" cy="50" r="1.5" fill="currentColor" opacity="0.8" />
            </svg>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="flex w-full relative z-10"
            >
              {dropdownItems.some((item) => item.subItems || item.description) ? (
                // Special nested layout for Offensive Security
                <div className="w-full flex">
                  {/* Sub-categories */}
                  <div className="w-1/3 border-r border-gray-200 pr-6">
                    <motion.h2 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                      {currentCategoryObj?.title}
                    </motion.h2>
                    <ul className={isDenseSecondColumn ? "space-y-0.5" : "space-y-1"}>
                      {dropdownItems.map((item, idx) => (
                        <li key={idx}>
                          {item.slug ? (
                            <Link
                              href={normalizeServiceHref(item.slug, item.name)}
                              onMouseEnter={() => setActiveItem(item.name)}
                              className={`w-full text-left px-3 rounded text-sm flex justify-between items-center transition-colors ${isDenseSecondColumn ? "py-1.5 leading-5" : "py-2.5"} ${activeItem === item.name
                                ? "text-red-600 bg-gray-50"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                              {item.name}
                              {'subItems' in item && (
                                <svg className={`w-3 h-3 ${activeItem === item.name ? "text-red-600" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              )}
                            </Link>
                          ) : (
                            <button
                              type="button"
                              onMouseEnter={() => setActiveItem(item.name)}
                              className={`w-full text-left px-3 rounded text-sm flex justify-between items-center transition-colors ${isDenseSecondColumn ? "py-1.5 leading-5" : "py-2.5"} ${activeItem === item.name
                                ? "text-red-600 bg-gray-50"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                              {item.name}
                              {'subItems' in item && (
                                <svg className={`w-3 h-3 ${activeItem === item.name ? "text-red-600" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              )}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sub-items (Third Level) */}
                  <div className="w-2/3 pl-8">
                    {dropdownItems.map((item, idx) => {
                      if (item.name !== activeItem) return null;

                      if ('subItems' in item && item.subItems) {
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col"
                          >
                            <motion.h2 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                              {('subCategory' in item) ? item.subCategory : ''}
                            </motion.h2>
                            <ul className="space-y-4 mt-2">
                              {item.subItems.map((subItem, subIdx) => {
                                const isObj = typeof subItem === 'object';
                                const subName = isObj ? subItem.name : subItem;

                                return (
                                  <li key={subIdx}>
                                    <Link
                                      href={normalizeServiceHref(isObj ? subItem.slug : undefined, subName)}
                                      className="text-gray-500 hover:text-red-600 transition-colors text-sm flex items-center"
                                    >
                                      <span className="mr-2 text-gray-300">•</span>
                                      {subName}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </motion.div>
                        );
                      }

                      if ('description' in item && item.description) {
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col h-full justify-center max-w-lg"
                          >
                            <motion.h2 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                              About This Service
                            </motion.h2>
                            <p className="text-gray-500 text-sm leading-relaxed mt-2 font-medium">
                              {item.description}
                            </p>
                            <div className="mt-6">
                              <Link
                                href={normalizeServiceHref(item.slug, item.name)}
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 hover:gap-3 transition-all"
                              >
                                Explore Service <span className="text-sm">→</span>
                              </Link>
                            </div>
                          </motion.div>
                        );
                      }

                      return null;
                    })}
                  </div>
                </div>
              ) : (
                // Standard layout for other categories
                <div className="w-full">
                  <motion.h2 className="text-gray-900 font-semibold mb-6 flex items-center text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                    {currentCategoryObj?.title}
                  </motion.h2>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                    {currentCategoryObj?.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={normalizeServiceHref(item.slug, item.name)}
                        className="group flex items-start"
                      >
                        <span className="mr-2 text-gray-300">•</span>
                        <span className="text-gray-500 hover:text-red-600 transition-colors text-sm">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

        </div>

      </div>

    </div>

  );
}
