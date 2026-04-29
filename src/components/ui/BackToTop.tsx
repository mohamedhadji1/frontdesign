"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const [state, setState] = useState<"hidden" | "down" | "up">("hidden");

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const docH = document.documentElement.scrollHeight;

      if (scrollY < vh * 0.6) {
        // Still inside / just past hero — hide
        setState("hidden");
      } else if (scrollY + vh >= docH - 40) {
        // At the bottom — show "go up"
        setState("up");
      } else {
        // Mid-page — show "more to scroll"
        setState("down");
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const handleClick = () => {
    if (state === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    }
  };

  const isDown = state === "down";

  return (
    <AnimatePresence>
      {state !== "hidden" && (
        <motion.button
          key={state}
          onClick={handleClick}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label={isDown ? "Scroll down" : "Back to top"}
          className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-1.5 cursor-pointer"
        >
          {/* Icon circle — clean, no glow */}
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-white/20 backdrop-blur-sm">
            <motion.svg
              animate={{ y: isDown ? [0, 4, 0] : [0, -4, 0] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              {isDown ? (
                <polyline points="6 9 12 15 18 9" />
              ) : (
                <polyline points="18 15 12 9 6 15" />
              )}
            </motion.svg>
          </span>

          {/* Label */}
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-red-600/50 select-none">
            {isDown ? "More" : "Top"}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
