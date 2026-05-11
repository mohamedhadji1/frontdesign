"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CallToActionSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background styling for tech look */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row md:gap-12">

        <div className="flex flex-col text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight"
          >
            Need Immediate Security Assistance?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-base font-medium text-gray-400 md:text-lg"
          >
            Our security experts are available 24/7 to help protect your organization.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-red-500 bg-red-600 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-red-700 sm:w-auto md:text-base"
          >
            Contact US
            <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-bold ml-1 flex items-center">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12h2" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
