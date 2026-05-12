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
  href: string;
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
        name: "Assessment and Technical Assistance",
        subCategory: "Assessment & Infrastructure",
        subItems: [
          "Web & Mobile Application Assessment",
          "Cloud Environment Assessment",
          "Core Internet Banking System Assessment",
          "Industrial System Assessment",
          "System Hardening"
        ]
      },
      {
        name: "Red Team",
        subCategory: "Offensive Security Testing",
      },
    ],
  },
  {
    category: "Managed Services",
    href: "/services/defensive-security",
    title: "Managed Services",
    items: [
      {
        name: "SOC Management",
        slug: "defensive-security/soc-management",
      },
      {
        name: "Virtual CISO & DPO",
        slug: "defensive-security/virtual-ciso-dpo",
      },
      {
        name: "Implementation CERT",
        slug: "defensive-security/Implementation-cert",
      },
    ],
  },
  {
    category: "GRC",
    href: "/services/governance-risk-compliance",
    title: "Governance, Risk and Compliance",
    items: [
      {
        name: "IS Security Audit",
        slug: "governance-risk-compliance/is-security-audit",
        subCategory: "IS Security Audit",
        subItems: [
          { name: "Regulatory Audit", slug: "governance-risk-compliance/is-security-audit/regulatory" },
          { name: "Standards Compliance Audit (ISO27001, PCI/DSS, GDPR, SWIFT, NIST, etc.)", slug: "governance-risk-compliance/is-security-audit/standards" }
        ]
      },
      {
        name: "Compliance Alignment",
        slug: "governance-risk-compliance/compliance-alignment",
        subCategory: "Compliance Alignment",
        subItems: [
          { name: "International Standards Compliance (ISO, PCI/DSS, GDPR, etc.)", slug: "governance-risk-compliance/compliance-alignment/international-standards" },
          { name: "Legal Compliance Support", slug: "governance-risk-compliance/compliance-alignment/legal" }
        ]
      },
      {
        name: "ISO 27001 Certification Support",
        slug: "governance-risk-compliance/iso-27001-certification-support",
        description: "ISO 27001 certification is a tangible proof of your commitment to information security. Our consultants support you at every stage to successfully achieve certification."
      },
      {
        name: "ISO 22301 Certification Support",
        slug: "governance-risk-compliance/iso-22301-certification-support",
        description: "Go beyond simple compliance and build business resilience. We guide you towards ISO 22301 certification to keep your business running smoothly during any crisis."
      },
      {
        name: "Risk Assessment",
        slug: "governance-risk-compliance/risk-assessment",
        description: "We offer a holistic perspective to anticipate potential risks, evaluate their impact, and formulate strategic mitigation plans."
      },
      {
        name: "Security Policy Development",
        slug: "governance-risk-compliance/security-policy-development",
        description: "Establish robust security policies customized to your business goals, integrating industry best practices for comprehensive asset protection."
      },
      {
        name: "BCP & DRP Development",
        slug: "governance-risk-compliance/bcp-drp-development",
        description: "Ensure your business is fully prepared for interruptions. We design tailored business continuity and disaster recovery plans to minimize downtime."
      },
      {
        name: "Data Classification",
        slug: "governance-risk-compliance/data-classification",
        description: "Map, identify, and categorize your sensitive information. Apply custom security rules and access governance to safeguard your business data."
      },
      {
        name: "Personal Data Protection",
        slug: "governance-risk-compliance/personal-data-protection",
        description: "Ensure responsible management of personal data in strict alignment with regulations like GDPR. We assist with consent, privacy rights, and data protection."
      },
      {
        name: "Access Rights Audit",
        slug: "governance-risk-compliance/access-rights-audit",
        description: "Verify that permissions and access rights are securely distributed. Realize comprehensive user permission audits to prevent security gaps."
      },
      {
        name: "Virtual CISO & DPO",
        slug: "governance-risk-compliance/virtual-ciso-dpo",
        description: "Get expert cybersecurity and privacy leadership as virtual extensions of your management team, delivering ongoing strategy and compliance guidance."
      }
    ],
  },
  {
    category: "Strategic Consulting",
    href: "/services/cybersecurity-strategy-consulting",
    title: "Strategic Consulting",
    items: [
      {
        name: "Cybersecurity Strategic Consulting",
        slug: "cybersecurity-strategy-consulting",
        subCategory: "Strategic Services",
        subItems: [
          "Development of National and Sectoral Cybersecurity Strategy",
          "CERT Implementation",
          "SOC Implementation",
          "Critical Infrastructure Protection",
          "Cyber Crisis Management Framework",
          "Capacity and Maturity Assessment",
          "Cyber Resilience Framework"
        ]
      },
    ],
  },
  {
    category: "Training & Awareness",
    href: "/services/awareness",
    title: "Training & Awareness",
    items: [
      {
        name: "Information",
        slug: "awareness",
        subCategory: "Strategic Frameworks",
        subItems: [
          { name: "Security Management", slug: "strategy-governance" },
          { name: "Governance, Risk, and Compliance", slug: "governance-risk-compliance" },
          { name: "Business Continuity Management, Resilience, and Recovery", slug: "cyber-exercise/business-continuity-management-resilience-and-recovery" },
          { name: "Cybersecurity and Investigation", slug: "cyber-exercise/cybersecurity-and-investigation" },
        ],
      },
      {
        name: "Awareness Programs",
        subCategory: "Awareness Programs",
        subItems: [
          { name: "Cyber Escape Room", slug: "services/awareness/cyber-escape-room" },
          { name: "Cyber Card Game", slug: "services/awareness/cyber-card-game" },
          { name: "Quiz", slug: "services/awareness/quiz" },
          { name: "Awareness Workshops", slug: "services/awareness/awareness-workshops" },
          { name: "Attack Simulation", slug: "services/awareness/attack-simulation" },
          { name: "Phishing Campaigns", slug: "services/awareness/phishing-campaigns" },
          { name: "Agent619", slug: "services/awareness/agent619" },
        ],
      },
      {
        name: "Cyber Exercice Management & Technique",
        slug: "cyber-exercise",
      },
      {
        name: "CTF Competition Organization",
      },
    ],
  },
];

function normalizeServiceHref(slug: string | undefined, fallbackName: string) {
  if (slug) {
    const normalized = slug.replace(/^\//, '').replace(/^services\//, '');
    return `/services/${normalized}`;
  }

  return `/services/${fallbackName.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase()}`;
}

export function ServicesDropdown() {
  const [activeCategory, setActiveCategory] = useState("Offensive Security");
  const [activeItem, setActiveItem] = useState("Red Team");

  const currentCategoryObj = servicesDetails.find((c) => c.category === activeCategory);

  return (

    <div className="absolute top-full left-0 w-full pt-6 pointer-events-auto">
      <div className="bg-white text-gray-800 shadow-2xl rounded-b-lg border-t-2 border-red-600 overflow-hidden mx-auto container px-8 py-10 origin-top flex min-h-[400px]">

        {/* Left Column: Categories */}
        <div className="w-1/4 border-r border-gray-200 pr-6 flex flex-col space-y-2">
          {servicesDetails.map((group, index) => (
            <Link
              key={index}
              href={group.href}
              onMouseEnter={() => { setActiveCategory(group.category); setActiveItem(group.items[0].name); }}
              className={`text-left px-4 py-3 rounded-md transition-colors text-sm font-medium flex justify-between items-center ${activeCategory === group.category
                ? "bg-gray-100 text-red-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              {group.category}
              <svg className={`w-4 h-4 transition-transform ${activeCategory === group.category ? "text-red-500" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
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
              {currentCategoryObj?.items.some(i => i.subItems) ? (
                // Special nested layout for Offensive Security
                <div className="w-full flex">
                  {/* Sub-categories */}
                  <div className="w-1/3 border-r border-gray-200 pr-6">
                    <motion.h2 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                      {currentCategoryObj?.title}
                    </motion.h2>
                    <ul className="space-y-1">
                      {currentCategoryObj?.items.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={normalizeServiceHref(item.slug, item.name)}
                            onMouseEnter={() => setActiveItem(item.name)}
                            className={`w-full text-left px-3 py-2.5 rounded text-sm flex justify-between items-center transition-colors ${activeItem === item.name
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
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sub-items (Third Level) */}
                  <div className="w-2/3 pl-8">
                    {currentCategoryObj?.items.map((item, idx) => {
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
