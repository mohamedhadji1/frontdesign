"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CyberSectionDivider } from "../ui/CyberSectionDivider";

type ServiceItem = {
  name: string;
  slug?: string;
  subCategory?: string;
  subItems?: (string | { name: string; slug?: string })[];
  [key: string]: any;
};

type ServiceCategory = {
  category: string;
  title: string;
  items: ServiceItem[];
};

export const servicesDetails: ServiceCategory[] = [
  {
    category: "Offensive Security",
    title: "Red Teaming",
    items: [
      {
        name: "Red Team",
        subCategory: "Offensive Security Testing",
      },
      {
        name: "Technical Audit",
        subCategory: "Infrastructure Assessment",
        subItems: [
          "Web & Mobile Application Audit",
          "Cloud Environment Audit",
          "Core Internet Banking System Audit",
          "Industrial System Audit",
          "System Hardening"
        ]
      },
    ],
  },
  {
    category: "Defensive Security",
    title: "Defensive Security",
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
        subCategory: "Emergency Teams",
        subItems: [
          { name: "Malware Analysis", slug: "services/defensive-security/malware-analysis" },
          { name: "Incident Response", slug: "services/defensive-security/incident-response" },
          { name: "Digital Forensics", slug: "services/defensive-security/digital-forensics" },
          { name: "Threat Hunting", slug: "services/defensive-security/threat-hunting" }
        ]
      },
    ],
  },
  {
    category: "Governance, Risk & Compliance",
    title: "Governance & Risk",
    items: [
      {
        name: "Governance, Risk & Compliance",
        slug: "governance-risk-compliance",
      },
    ],
  },
  {
    category: "Cybersecurity Consulting",
    title: "Cybersecurity Consulting",
    items: [
      {
        name: "Cybersecurity Strategy Consulting",
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
    title: "Training & Awareness",
    items: [
      {
        name: "Awareness",
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
        name: "Cyber Exercise",
        subCategory: "Cyber Exercise Programs",
        subItems: [
          "Cyber Exercise Management & Technique",
        ],
      },
      {
        name: "CTF Competition Organization",
      },
    ],
  },
];

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
            <button
              key={index}
              onMouseEnter={() => { setActiveCategory(group.category); setActiveItem(group.items[0].name); }}
              className={`text-left px-4 py-3 rounded-md transition-colors text-sm font-medium flex justify-between items-center ${
                activeCategory === group.category
                  ? "bg-gray-100 text-red-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {group.category}
              <svg className={`w-4 h-4 transition-transform ${activeCategory === group.category ? "text-red-500" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

        {/* Right Content Area */}
        <div className="w-3/4 pl-10 flex">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="flex w-full"
            >
              {currentCategoryObj?.items.some(i => i.subItems) ? (
                // Special nested layout for Offensive Security
                <div className="w-full flex">
                  {/* Sub-categories */}
                  <div className="w-1/3 border-r border-gray-200 pr-6">
                    <h3 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                      {currentCategoryObj?.title}
                    </h3>
                    <ul className="space-y-1">
                      {currentCategoryObj?.items.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={`/services/${
                              item.slug || item.name.replace(/\s+/g, '-').toLowerCase()
                            }`}
                            onMouseEnter={() => setActiveItem(item.name)}
                            className={`w-full text-left px-3 py-2.5 rounded text-sm flex justify-between items-center transition-colors ${
                              activeItem === item.name
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
                    {currentCategoryObj?.items.map((item, idx) => (
                      item.name === activeItem && 'subItems' in item && item.subItems && (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex flex-col"
                        >
                          <h3 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                            {('subCategory' in item) ? item.subCategory : ''}
                          </h3>
                          <ul className="space-y-4 mt-2">
                            {item.subItems.map((subItem, subIdx) => {
    const isObj = typeof subItem === 'object';
    const subName = isObj ? subItem.name : subItem;
    const subHref = isObj && subItem.slug 
      ? `/${subItem.slug}` 
      : `/services/${item.name.replace(/\s+/g, '-').toLowerCase()}/${(typeof subItem === "string" ? subItem : subItem.name).replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase()}`;
    
    return (
      <li key={subIdx}>
        <Link 
          href={subHref}
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
                      )
                    ))}
                  </div>
                </div>
              ) : (
                // Standard layout for other categories
                <div className="w-full">
                  <h3 className="text-gray-900 font-semibold mb-6 flex items-center text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                    {currentCategoryObj?.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                    {currentCategoryObj?.items.map((item, idx) => (
                      <Link 
                        key={idx}
                        href={`/services/${item.slug || item.name.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase()}`}
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
