"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { sectorGroups, sectorLinks } from "@/lib/sectors";

const sectorStyles: Record<string, { icon: React.ReactNode; glowClass: string }> = {
  "Governments and Public Organizations": {
    glowClass: "bg-red-500/10 text-red-600 group-hover:bg-red-500/20 group-hover:text-red-500",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5M4.5 21V10.5M2.25 21h19.5" />
      </svg>
    )
  },
  "Healthcare": {
    glowClass: "bg-red-500/10 text-red-600 group-hover:bg-red-500/20 group-hover:text-red-500",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )
  },
  "Financial Services": {
    glowClass: "bg-red-500/10 text-red-600 group-hover:bg-red-500/20 group-hover:text-red-500",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  "Telecommunications and Information Technology": {
    glowClass: "bg-red-500/10 text-red-600 group-hover:bg-red-500/20 group-hover:text-red-500",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.284 16.284A3 3 0 0012 17c1.372 0 2.477-.75 2.851-1.751M12 17V3m0 0L8.25 6.75M12 3l3.75 3.75M19.071 4.929a10 10 0 00-14.142 0M16.243 7.757a6 6 0 00-8.486 0" />
      </svg>
    )
  },
  "Fintech and Start-ups": {
    glowClass: "bg-red-500/10 text-red-600 group-hover:bg-red-500/20 group-hover:text-red-500",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  "Media": {
    glowClass: "bg-red-500/10 text-red-600 group-hover:bg-red-500/20 group-hover:text-red-500",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25zM14.25 12l-4.5 3V9l4.5 3z" />
      </svg>
    )
  },
  "Transportation": {
    glowClass: "bg-red-500/10 text-red-600 group-hover:bg-red-500/20 group-hover:text-red-500",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 0M12 14.25a3 3 0 00-3-3M6.75 19.5h10.5a2.25 2.25 0 002.25-2.25V9.75A2.25 2.25 0 0017.25 7.5H6.75A2.25 2.25 0 004.5 9.75v7.5A2.25 2.25 0 006.75 19.5zM12 3v4.5" />
      </svg>
    )
  },
  "Energy": {
    glowClass: "bg-red-500/10 text-red-600 group-hover:bg-red-500/20 group-hover:text-red-500",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.904-11.83a.45.45 0 00-.363-.72H13.5l1.31-5.348a.45.45 0 00-.776-.411L5.13 14.542a.45.45 0 00.323.758h4.36z" />
      </svg>
    )
  },
  "Industrial": {
    glowClass: "bg-red-500/10 text-red-600 group-hover:bg-red-500/20 group-hover:text-red-500",
    icon: (
      <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.827m11.379-8.16l1.15-.827M8.14 21.27l.7-.964m6.432-8.835l.7-.964m-3.21 11.75v-1.5m0-16.5v1.5" />
      </svg>
    )
  }
};

export const sectorsDetails = sectorGroups;

export function SectorsDropdown() {
  return (
    <div className="absolute top-full left-0 w-full pt-2 pointer-events-auto">
      <div className="bg-white text-gray-800 shadow-2xl rounded-b-lg border-t-2 border-red-600 overflow-hidden mx-auto container px-12 py-10 origin-top relative">
        
        {/* Subtle Animated Decorative Watermark */}
        <motion.div
          className="absolute -right-20 top-1/2 -translate-y-1/2 text-red-600 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.05, 0.1, 0.05],
            y: [0, -15, 0],
            scale: [1, 1.03, 1],
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

        {/* Content Area */}
        <div className="relative z-10">
          <h2 className="text-gray-900 font-bold mb-8 text-sm uppercase tracking-wider border-b border-gray-200 pb-3">
            Sectors We Serve
          </h2>
          
          <div className="grid grid-cols-3 gap-x-8 gap-y-6">
            {sectorLinks.map((sector) => {
              const style = sectorStyles[sector.name] || {
                glowClass: "bg-gray-100 text-gray-500 group-hover:bg-gray-200",
                icon: <span className="mr-3 h-2 w-2 shrink-0 rounded-full bg-gray-300" />
              };

              return (
                <Link
                  key={sector.href}
                  href={sector.href}
                  className="group flex items-start p-3.5 rounded-xl hover:bg-gray-50/80 transition-all duration-200 border border-transparent hover:border-gray-100"
                >
                  <div className={`mr-4 p-2.5 rounded-lg shrink-0 flex items-center justify-center transition-all duration-300 ${style.glowClass}`}>
                    {style.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-800 transition-colors group-hover:text-red-600 leading-snug">
                      {sector.name}
                    </span>
                    <span className="text-[11px] text-gray-500 mt-1 leading-relaxed font-medium">
                      {sector.description}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
