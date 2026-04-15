"use client";

import React from "react";
import Link from "next/link";

export const sectorsDetails = [
  {
    category: "Healthcare",
    items: [
      "Medical Security Audit",
      "Patient Data Protection",
      "Healthcare Regulatory Compliance",
    ],
  },
  {
    category: "Banking & Finance",
    items: [
      "Specialized Banking Penetration Tests",
      "24/7 Financial SOC",
      "Regulatory Compliance",
    ],
  },
  {
    category: "Telecom & Technology",
    items: [
      "API and Service Security",
      "Advanced Network Security Testing",
      "Cloud Security Audit",
    ],
  },
  {
    category: "Energy & Industry",
    items: [
      "OT/ICS Security Audit",
      "Industrial Network Segmentation",
      "Critical Systems Monitoring",
    ],
  },
  {
    category: "Government & Critical Infrastructure",
    items: [
      "National Security Assessment",
      "Geopolitical Threat Intelligence",
      "Government Standards Compliance",
    ],
  },
];

export function SectorsDropdown() {
  return (
    <div className="absolute top-full left-0 w-full pt-6 pointer-events-auto">
      <div className="bg-white text-gray-800 shadow-2xl rounded-b-lg border-t-2 border-red-600 overflow-hidden mx-auto container px-8 py-10 origin-top">
        <div className="mb-10">
          <h2 className="text-2xl font-medium tracking-tight mb-2">Our Cybersecurity Sectors</h2>
          <p className="text-gray-500 text-sm">
            Explore our comprehensive range of security solutions
          </p>
        </div>

        <div className="grid grid-cols-5 gap-8 w-full">
          {sectorsDetails.map((group, index) => (
            <div key={index} className="flex flex-col items-start">
              <h3 className="text-base font-semibold text-gray-900 mb-4 leading-tight">
                {group.category}
              </h3>
              <ul className="flex flex-col space-y-2">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-500 font-light hover:text-red-600 transition-colors flex items-center text-sm cursor-pointer">
                    <span className="mr-2 text-gray-300">•</span>
                    <Link href={`#${item.replace(/[\s&/]+/g, '-').toLowerCase()}`}>
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
