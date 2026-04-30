"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { careerSlug, careersDetails } from "@/lib/careers";

export function CareersDropdown() {
  const [activeCategory, setActiveCategory] = useState(careersDetails[0].category);
  const currentCategoryObj = careersDetails.find((c) => c.category === activeCategory);

  return (
    <div className="absolute top-full left-0 w-full pt-6 pointer-events-auto">
      <div className="bg-white text-gray-800 shadow-2xl rounded-b-lg border-t-2 border-red-600 overflow-hidden mx-auto container px-8 py-10 origin-top flex min-h-[400px]">
        {/* Left Column: Categories */}
        <div className="w-1/4 border-r border-gray-200 pr-6 flex flex-col space-y-2">
          {careersDetails.map((group, index) => (
            <Link
              key={index}
              href={`/careers/${careerSlug(group.category)}`}
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
              className="w-full relative z-10"
            >
              <motion.h2 className="text-gray-900 font-semibold mb-6 flex items-center text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                {currentCategoryObj?.category}
              </motion.h2>
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {currentCategoryObj?.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/careers/${careerSlug(currentCategoryObj.category)}/${careerSlug(item)}`}
                    className="group flex items-start"
                  >
                    <span className="mr-2 text-gray-300">•</span>
                    <span className="text-gray-500 hover:text-red-600 transition-colors text-sm">
                      {item}
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
