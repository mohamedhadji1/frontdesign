"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CallToActionSection() {
  return (
    <section className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background styling for tech look */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        <div className="flex flex-col text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight"
          >
            Need Immediate Security Assistance?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-400 font-medium max-w-2xl"
          >
            Our security experts are available 24/7 to help protect your organization.
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
            className="shrink-0 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition-all flex items-center gap-2 group text-sm md:text-base border border-red-500"
          >
            Contact an expert now
            <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-bold ml-1 flex items-center">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}