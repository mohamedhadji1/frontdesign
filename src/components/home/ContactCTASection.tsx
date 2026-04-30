"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TerminalIcon } from "../animate-ui/icons/terminal";

export function ContactCTASection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-[#ffffff] py-16 md:py-32"
      style={{
        backgroundImage: "url('/background/bg3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

      }}
    >
      <div className="absolute inset-0 bg-[#ffffff]/5 z-0"></div>
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row md:gap-12">
        <div className="flex flex-col text-center md:text-left ">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-3 flex flex-col items-center gap-3 text-2xl font-bold uppercase tracking-tight text-white sm:flex-row sm:gap-5 md:text-3xl"
          >
            <TerminalIcon className="w-6 h-6" animateOnHover />
            READY TO SECURE YOUR FUTURE?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-white font-medium max-w-2xl leading-relaxed"
          >
            Reach out to our experts and discover how Keystone can accelerate your digital transformation with uncompromising cybersecurity.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="group relative w-full shrink-0 sm:w-auto"
        >
          {/* Neon Glow effect on hover */}
          <div className="absolute -inset-1"></div>

          <Link
            href="/contact"
            className="relative flex w-full items-center justify-center gap-3 rounded-full border border-red-900/50 bg-red-600 px-8 py-4 text-center font-medium uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:border-red-500 hover:bg-red-700 sm:w-auto"
          >
            <span>Contact Us Today</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-red-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12h2" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
