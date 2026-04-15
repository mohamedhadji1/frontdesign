"use client";

import React from "react";
import Link from "next/link";

export const aboutDetails = [
  {
    category: "About Us",
    items: [
      { label: "Our Strategic Vision", href: "/about/strategic-vision" },
      { label: "Our leadership & expertise", href: "/about/leadership-expertise" },
    ],
  },
];

export function AboutDropdown() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[350px] pt-6 pointer-events-auto">
      <div className="bg-white text-gray-800 shadow-2xl rounded-b-lg border-t-2 border-red-600 overflow-hidden mx-auto px-8 py-10 origin-top">
        <div className="mb-6">
          <h2 className="text-xl font-medium tracking-tight mb-2">About Us</h2>
          <p className="text-gray-500 text-xs">
            Learn more about our company and values
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 w-full">
          {aboutDetails.map((group, index) => (
            <div key={index} className="flex flex-col items-start">
              <h3 className="text-base font-semibold text-gray-900 mb-4 leading-tight">
                {group.category}
              </h3>
              <ul className="flex flex-col space-y-2">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-500 font-light hover:text-red-600 transition-colors flex items-center text-sm cursor-pointer">
                    <span className="mr-2 text-gray-300">•</span>
                    <Link href={item.href}>
                      {item.label}
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
