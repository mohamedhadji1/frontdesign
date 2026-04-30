"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeCategory, setActiveCategory] = useState(aboutDetails[0].category);
  const currentCategoryObj = aboutDetails.find((c) => c.category === activeCategory);

  return (
    <div className="absolute top-full left-0 w-full pt-6 pointer-events-auto">
      <div className="bg-white text-gray-800 shadow-2xl rounded-b-lg border-t-2 border-red-600 overflow-hidden mx-auto container px-8 py-10 origin-top flex min-h-[400px]">
        {/* Left Column: Categories */}
        <div className="w-1/4 border-r border-gray-200 pr-6 flex flex-col space-y-2">
          {aboutDetails.map((group, index) => (
            <button
              key={index}
              onMouseEnter={() => setActiveCategory(group.category)}
              className={`text-left px-4 py-3 rounded-md transition-colors text-sm font-medium flex justify-between items-center ${activeCategory === group.category
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
        <div className="w-3/4 pl-10 flex relative overflow-hidden">
          {/* Subtle Animated Decorative Watermark */}
          <motion.div
            className="absolute -right-20 top-1/2 -translate-y-1/2 text-red-600 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.08, 0.15, 0.08], rotate: 360 }}
            transition={{
              opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 120, repeat: Infinity, ease: "linear" }
            }}
          >
            <svg className="w-[600px] h-[600px]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
              <circle cx="50" cy="50" r="48" opacity="0.2" />
              <circle cx="50" cy="50" r="35" strokeDasharray="1 4" opacity="0.4" />
              <path d="M10 50 Q50 10 90 50 Q50 90 10 50 Z" strokeWidth="1" opacity="0.7" />
              <circle cx="50" cy="50" r="15" strokeWidth="1" />
              <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.8" />
              <path d="M50 0 V100 M0 50 H100" opacity="0.15" />
              <path d="M45 50 H55 M50 45 V55" strokeWidth="1" />
            </svg>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full relative z-10"
            >
              <motion.h2 className="text-gray-900 font-semibold mb-6 flex items-center text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                {currentCategoryObj?.category}
              </motion.h2>
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {currentCategoryObj?.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group flex items-start"
                  >
                    <span className="mr-3 text-red-500 mt-0.5 transition-transform group-hover:translate-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
