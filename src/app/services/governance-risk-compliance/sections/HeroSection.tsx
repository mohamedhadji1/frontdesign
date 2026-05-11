"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export function HeroSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="relative w-full h-auto min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black/20 text-white pt-24 pb-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black/20">
        <video
          src="/vids/videoplayback.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover "
        />
        {/* Gradient overlays for readability and dramatic effect */}
        <div className="absolute inset-0" />
        <div className="absolute inset-0"/>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center flex-wrap gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
              <Link href="/services" className="hover:text-red-300 transition-colors">Services</Link>
              <span className="text-red-500/50 shrink-0">/</span>
              <span className="text-red-400">Governance, Risk & Compliance</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight text-white"
          >
            Governance, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Risk</span> & Compliance
          </motion.h1>

          <HeroTypeLine
            items={["Risk clarity", "Compliance confidence", "Governance that strengthens resilience"]}
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium mb-6 leading-relaxed max-w-3xl"
          >
            Master your risks, meet regulatory expectations, and strengthen your
            organization&apos;s resilience with a structured GRC approach tailored to
            your environment.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-gray-400 font-normal mb-10 leading-relaxed max-w-3xl"
          >
            Effective governance, risk, and compliance management is essential
            in today&apos;s fast-changing regulatory landscape. At Keystone, we help your business protect operations, reduce exposure, and align
            with information security standards.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-3 group shadow-xl shadow-red-600/20 hover:shadow-red-600/40"
            >
              Consult an Expert
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <Link
              href="/services"
              className="border-b border-white/30 hover:border-white text-white font-medium py-3 px-6 flex items-center gap-2 transition-all bg-transparent group"
            >
              View all services
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
      <ScrollIndicator />
    </motion.section>
  );
}
