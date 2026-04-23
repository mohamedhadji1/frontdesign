"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TerminalIcon } from "../animate-ui/icons/terminal";

export function ContactCTASection() {
  return (
    <section 
      className="relative py-24 md:py-32 overflow-hidden bg-[#ffffff]"
      style={{
        backgroundImage: "url('/background/vector/circuit-glow-light.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#ffffff]/40 z-0"></div>

      <div className="w-full max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex flex-col text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3 tracking-tight uppercase flex items-center gap-10"
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
          transition={{ delay: 0.3 }}
          className="shrink-0 relative group"
        >
          {/* Neon Glow effect on hover */}
          <div className="absolute -inset-1"></div>
          
          <Link
            href="/contact"
            className="relative flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-medium uppercase tracking-wider py-4 px-8 rounded-full border border-red-900/50 hover:border-red-500 transition-all duration-300 shadow-sm"
          >
            <span>Contact Us Today</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-red-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}