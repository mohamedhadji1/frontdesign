"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { sectorGroups, sectorLinks } from "@/lib/sectors";

export const sectorsDetails = sectorGroups;

export function SectorsDropdown() {
  const [activeCategory, setActiveCategory] = useState(
    sectorsDetails[0].category
  );
  const currentCategoryObj = sectorsDetails.find(
    (group) => group.category === activeCategory
  );

  return (
    <div className="absolute top-full left-0 w-full pt-6 pointer-events-auto">
      <div className="bg-white text-gray-800 shadow-2xl rounded-b-lg border-t-2 border-red-600 overflow-hidden mx-auto container px-8 py-10 origin-top flex min-h-[400px]">
        <div className="w-1/4 border-r border-gray-200 pr-6 flex flex-col space-y-2">
          {sectorsDetails.map((group, index) => (
            <button
              key={index}
              onMouseEnter={() => setActiveCategory(group.category)}
              className={`text-left px-4 py-3 rounded-md transition-colors text-sm font-medium flex justify-between items-center ${activeCategory === group.category
                ? "bg-gray-100 text-red-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              {group.category}
              <svg
                className={`w-4 h-4 transition-transform ${activeCategory === group.category
                  ? "text-red-500"
                  : "text-gray-400"
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ))}
        </div>

        <div className="w-3/4 pl-10 flex relative overflow-hidden">
          <motion.div
            className="absolute -right-20 top-1/2 -translate-y-1/2 text-red-600 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.08, 0.15, 0.08],
              y: [0, -15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className="w-[600px] h-[600px]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <path
                d="M10 0 V100 M30 0 V100 M50 0 V100 M70 0 V100 M90 0 V100"
                opacity="0.1"
              />
              <path
                d="M0 10 H100 M0 30 H100 M0 50 H100 M0 70 H100 M0 90 H100"
                opacity="0.1"
              />
              <rect x="20" y="40" width="15" height="40" opacity="0.5" />
              <rect x="40" y="20" width="20" height="60" strokeWidth="1" />
              <rect x="65" y="50" width="15" height="30" opacity="0.5" />
              <path
                d="M27 40 L40 30 M60 30 L72 50 M27 60 L40 60 M60 60 L72 60"
                opacity="0.6"
                strokeDasharray="2 2"
              />
              <circle cx="27" cy="40" r="1.5" fill="currentColor" />
              <circle cx="40" cy="30" r="2" fill="currentColor" />
              <circle cx="60" cy="30" r="2" fill="currentColor" />
              <circle cx="72" cy="50" r="1.5" fill="currentColor" />
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
                {sectorLinks.map((sector) => (
                  <Link
                    key={sector.href}
                    href={sector.href}
                    className="group flex items-start"
                  >
                    <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300 transition-colors group-hover:bg-red-600" />
                    <span
                      className={`text-sm transition-colors group-hover:text-red-600 ${sector.highlighted
                        ? "text-gray-500"
                        : "text-gray-500"
                        }`}
                    >
                      {sector.name}
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
