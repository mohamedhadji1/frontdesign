"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="relative flex min-h-[640px] w-full items-center justify-center overflow-hidden bg-black/20 pb-12 pt-28 text-white"
    >
      <div className="absolute inset-0 z-0 bg-black/30">
        <video
          src="/vids/herosection.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[url('/background/vector/cyber-matrix.svg')] bg-cover bg-center opacity-15 mix-blend-screen" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-red-300"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-red-500 animate-pulse" />
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
              <Link href="/services" className="transition-colors hover:text-red-400">
                Services
              </Link>
              <span className="text-red-500/50">/</span>
              <Link
                href="/services/offensive-security"
                className="transition-colors hover:text-red-400"
              >
                Offensive Security
              </Link>
              <span className="text-red-500/50">/</span>
              <span className="text-red-400">
                External and Internal Penetration Testing
              </span>
            </div>
          </motion.div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl leading-tight">
            External and Internal Penetration Testing
          </h1>

          <HeroTypeLine
            items={[
              "Infrastructure Assessment",
              "Technological Challenges",
              "Attack Simulations",
            ]}
          />

          <p className="mb-10 mt-6 max-w-3xl text-lg font-medium leading-relaxed text-zinc-300 md:text-xl lg:text-2xl">
            Keystone's external and internal penetration testing service offers unparalleled expertise 
            and a determined approach to assessing the security of your infrastructure, 
            challenging all technologies to identify potential vulnerabilities.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact?service=penetration-testing"
              className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3 font-bold text-white shadow-xl shadow-red-600/20 transition-colors hover:bg-red-700"
            >
              Request Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services/offensive-security"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              Back to Offensive Security
            </Link>
          </div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </motion.section>
  );
}
