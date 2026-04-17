"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const servicesDetails = [
  {
    category: "Offensive Security",
    title: "Red Teaming",
    items: [
      {
        name: "Red Team",
        subCategory: "Our Capabilities",
        subItems: [
          "Web & Mobile Application Audit",
          "Physical Penetration Testing",
          "External & Internal Penetration Testing",
          "Social Engineering",
          "Hardware Testing & Reverse Engineering",
        ],
      },
      {
        name: "Technical Audit",
        subCategory: "Specialized Infrastructure",
        subItems: [
          "Critical Infrastructure Protection",
          "Cloud Environment Audit",
          "Industrial System Audit",
          "Core & Internet Banking System Audit",
          "System Hardening",
        ],
      },
    ],
  },
  {
    category: "Defensive Security",
    title: "Defensive Security",
    items: [
      {
        name: "SOC & Threat Hunting",
      },
      {
        name: "Incident Response & Forensics",
      },
      {
        name: "Cyber Threat Intelligence",
      },
    ],
  },
  {
    category: "Governance, Risk & Compliance",
    title: "Governance & Risk",
    items: [
      {
        name: "Audits & Risk Assessment",
      },
      {
        name: "Regulatory Compliance (ISO 27001, GDPR, NCA)",
      },
      {
        name: "Awareness & Training",
      },
      {
        name: "Cybersecurity Strategy Consulting",
      },
    ],
  },
  {
    category: "Training",
    title: "Training",
    items: [
      {
        name: "Cyber Exercise Management & Technique",
      },
      {
        name: "CTF Competition Organization",
      },
    ],
  },
  {
    category: "Awareness",
    title: "Awareness",
    items: [
      {
        name: "Awareness Workshops",
      },
      {
        name: "Cybersecurity Card Game",
      },
      {
        name: "Cyber Escape Room",
      },
      {
        name: "Attack Simulation",
      },
    ],
  },
];

export function ServicesDropdown() {
  const [activeCategory, setActiveCategory] = useState("Offensive Security");
  const [activeOffensiveItem, setActiveOffensiveItem] = useState("Red Team");

  const currentCategoryObj = servicesDetails.find((c) => c.category === activeCategory);
  
  return (
    <div className="absolute top-full left-0 w-full pt-6 pointer-events-auto">
      <div className="bg-white text-gray-800 shadow-2xl rounded-b-lg border-t-2 border-red-600 overflow-hidden mx-auto container px-8 py-10 origin-top flex min-h-[400px]">
        
        {/* Left Column: Categories */}
        <div className="w-1/4 border-r border-gray-200 pr-6 flex flex-col space-y-2">
          {servicesDetails.map((group, index) => (
            <button
              key={index}
              onMouseEnter={() => setActiveCategory(group.category)}
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
              {activeCategory === "Offensive Security" ? (
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
                            href={`/services/${item.name.replace(/\s+/g, '-').toLowerCase()}`}
                            onMouseEnter={() => setActiveOffensiveItem(item.name)}
                            className={`w-full text-left px-3 py-2.5 rounded text-sm flex justify-between items-center transition-colors ${
                              activeOffensiveItem === item.name
                                ? "text-red-600 bg-gray-50"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            {item.name}
                            {'subItems' in item && (
                              <svg className={`w-3 h-3 ${activeOffensiveItem === item.name ? "text-red-600" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      item.name === activeOffensiveItem && 'subItems' in item && item.subItems && (
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
                            {item.subItems.map((subItem, subIdx) => (
                              <li key={subIdx}>
                                <Link 
                                  href={`/services/${subItem.replace(/\s+/g, '-').toLowerCase()}`}
                                  className="text-gray-500 hover:text-red-600 transition-colors text-sm flex items-center"
                                >
                                  <span className="mr-2 text-gray-300">•</span>
                                  {subItem}
                                </Link>
                              </li>
                            ))}
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
                        href={`/services/${item.name.replace(/\s+/g, '-').toLowerCase()}`}
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
