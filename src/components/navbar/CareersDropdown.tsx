"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { careerSlug, careersDetails } from "@/lib/careers";

export function CareersDropdown() {
  const [activeCategory, setActiveCategory] = useState(careersDetails[0].category);
  const currentCategoryObj = careersDetails.find((c) => c.category === activeCategory);

  return (
    <div className="absolute top-full left-0 w-full pt-2 pointer-events-auto">
      <div className="w-full bg-white text-gray-800 shadow-2xl rounded-b-lg border-t-2 border-red-600 overflow-hidden mx-auto container px-8 py-10 origin-top flex min-h-[400px]">
        {/* Left Column: Categories */}
        <div className="w-1/4 border-r border-gray-200 pr-6 flex flex-col space-y-2">
          {careersDetails.map((group, index) => (
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
              <circle cx="50" cy="50" r="45" opacity="0.2" />
              <ellipse cx="50" cy="50" rx="45" ry="15" transform="rotate(45 50 50)" opacity="0.4" />
              <ellipse cx="50" cy="50" rx="45" ry="15" transform="rotate(-45 50 50)" opacity="0.4" />
              <circle cx="50" cy="50" r="10" strokeWidth="1" />
              <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.6" />
              <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.5" />
              <circle cx="80" cy="20" r="3" fill="currentColor" opacity="0.5" />
              <circle cx="20" cy="80" r="3" fill="currentColor" opacity="0.5" />
              <circle cx="80" cy="80" r="3" fill="currentColor" opacity="0.5" />
              <path d="M22 22 L45 45 M78 22 L55 45 M22 78 L45 55 M78 78 L55 55" opacity="0.3" strokeDasharray="2 2" />
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
              {/* Middle Column: Roles List (stacked vertically) */}
              <div className="w-1/2 border-r border-gray-200 pr-6">
                <h2 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                  Available Positions
                </h2>
                <ul className="space-y-1">
                  {currentCategoryObj?.items.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={`/careers/${careerSlug(currentCategoryObj.category)}/${careerSlug(item)}`}
                        className="group flex items-center justify-between px-3 py-2.5 rounded text-sm text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-colors"
                      >
                        <span>{item}</span>
                        <span className="text-xs text-gray-400 group-hover:text-red-600 font-medium">Apply →</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Category Details */}
              <div className="w-1/2 pl-8 flex flex-col justify-center max-w-sm">
                <h2 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                  About the Program
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mt-2 font-medium">
                  {currentCategoryObj?.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/careers/${careerSlug(currentCategoryObj?.category || "")}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 hover:gap-3 transition-all"
                  >
                    {currentCategoryObj?.cta || "Learn More"} <span className="text-sm">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
