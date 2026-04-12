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

        <div className="grid grid-cols-1 gap-8 max-w-5xl">
          {servicesDetails.map((group, index) => (
            <div key={index} className="grid grid-cols-12 gap-4 items-start">
              <h3 className="col-span-4 text-base font-normal text-gray-800">
                {group.category}
              </h3>
              <ul className="col-span-8 flex flex-col space-y-2">
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
