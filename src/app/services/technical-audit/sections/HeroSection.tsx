"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden bg-black/20 text-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/bg14.avif"
          alt="Technical Audit Assessment Cover"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-[#0a1128]/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
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
            className="mb-6 inline-flex items-center flex-wrap gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-red-400"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-red-500 animate-pulse" />
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
              <Link href="/services" className="transition-colors hover:text-red-400">
                Services
              </Link>
              <span className="shrink-0 text-red-500/50">/</span>
              <span className="text-red-400">Technical Audit</span>
            </div>
          </motion.div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl">
            Technical Audit
          </h1>

          <HeroTypeLine
            items={["Deep infrastructure assessment", "Cloud, banking, and industrial systems", "Baseline-to-remediation visibility"]}
          />

          <p className="mb-10 text-lg font-light leading-relaxed text-gray-300 md:text-xl lg:text-2xl">
            Ensure the structural integrity of your specialized IT
            environments. We deeply analyze your Cloud systems, Core Banking,
            Critical Infrastructure, and Industrial Networks to uncover hidden
            vulnerabilities and align with industry baselines.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-red-600 px-8 py-3 font-semibold text-white shadow-xl shadow-red-600/20 transition-colors hover:bg-red-700"
            >
              Schedule an Audit
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </motion.section>
  );
}
