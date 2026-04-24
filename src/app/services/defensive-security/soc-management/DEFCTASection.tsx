"use client";

import { motion } from "framer-motion";
import { TerminalIcon } from "@/components/animate-ui/icons/terminal";
import Link from "next/link";

export function DEFCTASection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} 
      className="relative py-24 md:py-32 overflow-hidden bg-[#ffffff]"
      style={{
        backgroundImage: "url('/background/bg7.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light overlay to ensure the background looks consistent with the map section while keeping the image visible */}
      <div className="absolute inset-0 bg-[#ffffff]/40 z-0"></div>

      <div className="w-full max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex flex-col text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3 tracking-tight uppercase flex items-center gap-2"
          >
            <TerminalIcon className="w-6 h-6" animateOnHover />
            READY TO SECURE YOUR FUTURE?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-zinc-600 font-medium max-w-2xl leading-relaxed"
          >
            Reach out to our experts and discover how Keystone can accelerate your digital transformation with uncompromising cybersecurity.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="shrink-0 bg-blue-600 hover:bg-blue-700 !text-white font-medium py-3 px-8 rounded-full transition-all flex items-center gap-2 group text-sm md:text-base border border-blue-500"
          >
            Contact Us Today
            <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-bold ml-1 flex items-center">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}