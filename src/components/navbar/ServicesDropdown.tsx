"use client";

import React from "react";
import Link from "next/link";

export const servicesDetails = [
  {
    category: "Offensive Security",
    items: [
      "Penetration Testing",
      "Cyber Attack Simulation",
      "Social Engineering",
    ],
  },
  {
    category: "Defensive Security",
    items: [
      "SOC & Threat Hunting",
      "Incident Response & Forensics",
      "Cyber Threat Intelligence",
    ],
  },
  {
    category: "Governance, Risk & Compliance",
    items: [
      "Audits & Risk Assessment",
      "Regulatory Compliance (ISO 27001, GDPR, NCA)",
      "Awareness & Training",
      "Cybersecurity Strategy Consulting",
    ],
  },
  {
    category: "Formation",
    items: [
      "Cyber Exercise Management & Technique",
      "CTF Competition Organization",
    ],
  },
  {
    category: "Sensibilisation",
    items: [
      "Awareness Workshops",
      "Cybersecurity Card Game",
      "Cyber Escape Room",
      "Attack Simulation",
    ],
  },
];

export function ServicesDropdown() {
  return (
    <div className="absolute top-full left-0 w-full pt-6 pointer-events-auto">
      <div className="bg-white text-gray-800 shadow-2xl rounded-b-lg border-t-2 border-red-600 overflow-hidden mx-auto container px-8 py-10 origin-top">
        <div className="mb-10">
          <h2 className="text-2xl font-medium tracking-tight mb-2">Our Cybersecurity Services</h2>
          <p className="text-gray-500 text-sm">
            Explore our comprehensive range of security solutions
          </p>
        </div>

        <div className="grid grid-cols-5 gap-8 w-full">
          {servicesDetails.map((group, index) => (
            <div key={index} className="flex flex-col items-start">
              <h3 className="text-base font-semibold text-gray-900 mb-4 leading-tight">
                {group.category}
              </h3>
              <ul className="flex flex-col space-y-2">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-500 font-light hover:text-red-600 transition-colors flex items-center text-sm cursor-pointer">
                    <span className="mr-2 text-gray-300">•</span>
                    <Link href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
