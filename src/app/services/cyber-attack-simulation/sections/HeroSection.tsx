"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

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
          src="/background/Offensive/Rectangle 46.png"
          alt="Cyber Attack Simulation Background"
          fill
          priority
          className="object-cover object-right-top opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-[#0a1128]/20" />
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
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
              <Link href="/services" className="transition-colors hover:text-red-400">
                Services
              </Link>
              <span className="flex shrink-0 flex-nowrap text-red-500/50">/</span>
              <span className="text-red-400">Cyber Attack Simulation</span>
            </div>
          </motion.div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Cyber Attack Simulation
          </h1>

          <HeroTypeLine
            items={["Adversary emulation", "Real-world attack paths", "Resilience under pressure"]}
          />

          <p className="mb-10 text-lg font-light leading-relaxed text-gray-300 md:text-xl lg:text-2xl">
            By simulating advanced adversary tactics, we identify weaknesses in
            technology, processes & people and help strengthen your overall
            resilience.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact?service=cyber-attack-simulation"
              className="group flex items-center gap-2 rounded-full bg-red-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-red-700"
            >
              Request Service Now
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/incident-response"
              className="group inline-flex items-center gap-2 border-b border-white py-3 font-medium text-white transition-colors hover:border-red-400 hover:text-red-400"
            >
              Immediate Incident Response
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
