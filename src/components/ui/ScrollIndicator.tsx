"use client";

import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  /** Extra Tailwind classes to override positioning if needed */
  className?: string;
}

export function ScrollIndicator({ className = "" }: ScrollIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 ${className}`}
    >
      {/* Label */}
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 select-none"
      >
        Scroll
      </motion.span>

      {/* Pill container */}
      <div className="relative w-6 h-10 rounded-full border border-white/30 flex items-start justify-center pt-1.5 overflow-hidden">
        {/* Glowing dot that scrolls down */}
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.6)]"
        />
      </div>

      {/* Bouncing chevron */}
      <motion.svg
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white/40"
      >
        <polyline points="6 9 12 15 18 9" />
      </motion.svg>
    </motion.div>
  );
}
