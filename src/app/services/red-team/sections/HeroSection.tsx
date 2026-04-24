"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ServicesDropdown } from "@/components/navbar/ServicesDropdown"; // To force a consistent UI pattern if needed, but not specifically here

export function HeroSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black/20 text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black/20">
        <video
          src="/vids/cover red team.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-[#0a1128]/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
                    <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center flex-wrap gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
              <Link href="/services" className="hover:text-red-400 transition-colors">Services</Link><span className="text-red-500/50 shrink-0">/</span><span className="text-red-400">Red Team</span>
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            Red Team Operations
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium mb-10 leading-relaxed">
            Test the limits of your perimeter. Identify zero-day vulnerabilities, physical weaknesses, and social engineering risks through full-scale adversarial emulation.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2 group shadow-xl shadow-red-600/20"
            >
              Schedule an Audit
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}