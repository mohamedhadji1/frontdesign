import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const aboutDetails = [
  {
    category: "About Keystone",
    items: [
      { 
        label: "Company Overview", 
        href: "/about/company-overview",
        description: "Discover Keystone's journey, our history of cybersecurity excellence, and how we empower organizations to defend against evolving cyber threats globally."
      },
      { 
        label: "Vision, Mission & Values", 
        href: "/about/vision-mission-values",
        description: "Our guiding principles. We strive to be the global benchmark for trust and cyber resilience, driven by innovation, integrity, and relentless dedication to client security."
      },
      { 
        label: "Our Team", 
        href: "/about/our-team",
        description: "Meet the elite minds at Keystone. A world-class collective of ethical hackers, certified security auditors, threat intelligence analysts, and strategic GRC consultants."
      },
      { 
        label: "Awards & Recognition", 
        href: "/about/awards-recognition",
        description: "Celebrating our milestones and industry honors. Keystone's commitment to cutting-edge research and outstanding client services recognized by top cybersecurity authorities."
      },
      { 
        label: "Client Testimonials", 
        href: "/about/testimonials",
        description: "What our partners say about us. Real feedback from market leaders, government bodies, and global enterprises who rely on Keystone to secure their digital frontiers."
      },
    ],
  },
];

export function AboutDropdown() {
  const currentCategoryObj = aboutDetails[0];
  const [activeItem, setActiveItem] = useState(currentCategoryObj.items[0].label);

  return (
    <div className="absolute top-full left-0 w-full pt-2 pointer-events-auto">
      <div className="w-full bg-white text-gray-800 shadow-2xl rounded-b-lg border-t-2 border-red-600 overflow-hidden mx-auto container px-8 py-10 origin-top flex min-h-[350px]">
        {/* Left Column: Vertical list menu (under each other) */}
        <div className="w-1/3 border-r border-gray-200 pr-6">
          <h2 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
            About Keystone
          </h2>
          <ul className="space-y-1">
            {currentCategoryObj.items.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  onMouseEnter={() => setActiveItem(item.label)}
                  className={`w-full text-left px-3 py-2.5 rounded text-sm flex justify-between items-center transition-colors ${
                    activeItem === item.label
                      ? "text-red-600 bg-gray-50"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  <svg className={`w-3 h-3 ${activeItem === item.label ? "text-red-600" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content Area: Detailed Description Card & Watermark */}
        <div className="w-2/3 pl-10 flex relative overflow-hidden">
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

          <div className="w-full relative z-10">
            {currentCategoryObj.items.map((item, idx) => {
              if (item.label !== activeItem) return null;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col h-full justify-center max-w-lg"
                >
                  <h2 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                    About {item.label}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mt-2 font-medium">
                    {item.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 hover:gap-3 transition-all"
                    >
                      Learn More <span className="text-sm">→</span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
