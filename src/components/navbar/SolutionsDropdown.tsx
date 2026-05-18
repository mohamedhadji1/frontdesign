"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type SolutionItem = {
  name: string;
  slug?: string;
  description?: string;
};

type SolutionCategory = {
  category: string;
  href: string;
  title: string;
  items: SolutionItem[];
};

export const solutionsDetails: SolutionCategory[] = [
  {
    category: "Operational Platforms",
    href: "/solutions/keystone-arena",
    title: "Operational Platforms",
    items: [
      {
        name: "Keystone ARENA (CTI Platform)",
        slug: "solutions/keystone-arena",
        description: "Centralize threat intelligence, analyst workflows, and operational visibility in one secure platform. Built to help security teams maintain focus under pressure and keep responses structured."
      }
    ]
  },
];

function normalizeSolutionHref(slug: string | undefined, fallbackName: string) {
  if (slug) {
    const normalized = slug.replace(/^\//, '').replace(/^solutions\//, '');
    return `/solutions/${normalized}`;
  }

  return `/solutions/${fallbackName.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase()}`;
}

export function SolutionsDropdown() {
  const [activeCategory, setActiveCategory] = useState("Operational Platforms");
  const [activeItem, setActiveItem] = useState("Keystone ARENA (CTI Platform)");

  const currentCategoryObj = solutionsDetails.find((c) => c.category === activeCategory);

  return (
    <div className="absolute top-full left-0 w-full pt-6 pointer-events-auto">
      <div className="bg-white text-gray-800 shadow-2xl rounded-b-lg border-t-2 border-red-600 overflow-hidden mx-auto container px-8 py-10 origin-top flex min-h-[400px]">
        
        {/* Left Column: Categories */}
        <div className="w-1/4 border-r border-gray-200 pr-6 flex flex-col space-y-2">
          {solutionsDetails.map((group, index) => (
            <Link
              key={index}
              href={group.href}
              onMouseEnter={() => {
                setActiveCategory(group.category);
                if (group.items.length > 0) {
                  setActiveItem(group.items[0].name);
                }
              }}
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
              className="flex w-full relative z-10"
            >
              {/* Sub-categories (Middle Column) */}
              <div className="w-1/3 border-r border-gray-200 pr-6">
                <motion.h2 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                  {currentCategoryObj?.title}
                </motion.h2>
                <ul className="space-y-1">
                  {currentCategoryObj?.items.map((item, idx) => (
                    <li key={idx}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveItem(item.name)}
                        className={`w-full text-left px-3 py-2.5 rounded text-sm flex justify-between items-center transition-colors ${activeItem === item.name
                          ? "text-red-600 bg-gray-50"
                          : "text-gray-600 hover:text-gray-900"
                          }`}
                      >
                        {item.name}
                        <svg className={`w-3 h-3 ${activeItem === item.name ? "text-red-600" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detail Panel (Right Column) */}
              <div className="w-2/3 pl-8">
                {currentCategoryObj?.items.map((item, idx) => {
                  if (item.name !== activeItem) return null;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col h-full justify-center max-w-lg"
                    >
                      <motion.h2 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                        About This Solution
                      </motion.h2>
                      <p className="text-gray-500 text-sm leading-relaxed mt-2 font-medium">
                        {item.description}
                      </p>
                      <div className="mt-6">
                        <Link
                          href={normalizeSolutionHref(item.slug, item.name)}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 hover:gap-3 transition-all"
                        >
                          Explore Solution <span className="text-sm">→</span>
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
