"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  Factory,
  HeartPulse,
  Landmark,
  Newspaper,
  RadioTower,
  Rocket,
  Truck,
  type LucideIcon,
  Zap,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { sectorLinks } from "@/lib/sectors";
import Image from "next/image";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const sectorIcons: Record<string, LucideIcon> = {
  Healthcare: HeartPulse,
  "Telecommunications and Information Technology": RadioTower,
  Transportation: Truck,
  Energy: Zap,
  "Fintech and Start-ups": Rocket,
  "Financial Services": Banknote,
  Media: Newspaper,
  Industrial: Factory,
  "Governments and Public Organizations": Landmark,
};

const getSectorId = (href: string) =>
  href.includes("#")
    ? href.split("#").pop()
    : href.split("/").filter(Boolean).pop();

export function SectorsIndexPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative flex h-[100vh] min-h-[100vh] flex-col justify-between overflow-hidden bg-zinc-950 pt-36 sm:pt-44 lg:pt-48 pb-12 text-white"
      >
        <motion.div
          animate={{ scale: [1, 1.06, 1], x: ["0%", "-3%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 z-0 select-none pointer-events-none"
        >
          <video
            src="/vids/videoplayback.mp4"
            poster="/background/Rectangle 59.png"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-45"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-zinc-950/45 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/background/vector/cyber-matrix.svg')] bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center items-center text-center lg:items-start lg:text-left py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-red-400 sm:text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              Sectors
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-[4.5rem] font-black tracking-tight text-white leading-[1.05] uppercase"
            >
              Cybersecurity by Sector
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 font-medium tracking-wide leading-relaxed max-w-3xl"
            >
              Choose a sector to explore the risks, priorities, and security
              programs Keystone builds for that operating environment.
            </motion.p>
          </motion.div>
        </div>
        <ScrollIndicator />
      </motion.section>
      <CyberSectionDivider />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        className="mb-16 px-4 sm:px-6 md:px-12 md:mb-20"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div >
            <SectionDivider title="SECTORS" className="mb-12" />
          </motion.div>
          <motion.div variants={stagger} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectorLinks.map((sector) => {
              const Icon = sectorIcons[sector.name];

              return (
                <motion.div
                  id={getSectorId(sector.href)}
                  key={sector.href}

                  whileHover={{ y: -8, scale: 1.01 }}
                  className="scroll-mt-28"
                >
                  <Link
                    href={sector.href}
                    className="group block h-full rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-red-200 hover:bg-red-50/40 sm:p-6"
                  >
                    <motion.div whileHover={{ rotate: -4, scale: 1.08 }}>
                      <Icon className="mb-6 h-9 w-9 text-red-600" aria-hidden="true" />
                    </motion.div>
                    <motion.h2 className="mb-3 text-xl font-bold text-zinc-950">
                      {sector.name}
                    </motion.h2>
                    <p className="text-sm leading-7 text-zinc-600 sm:min-h-16">
                      {sector.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-red-600">
                      Open Sector
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </motion.section>
      <CyberSectionDivider />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        className="relative overflow-hidden bg-zinc-950 px-4 py-16 text-white sm:px-6 sm:py-20 md:px-12 md:py-24"
      >
        <motion.div
          animate={{ x: ["0%", "-4%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 opacity-20"
        >
          <Image
            src="/background/vector/cyber-matrix.svg"
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <motion.div variants={stagger} className="max-w-3xl">
            <motion.p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Building the Digital Keystone
            </motion.p>
            <motion.h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Do not fight cyber threats alone.
            </motion.h2>
            <motion.p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
              Work with Keystone to strengthen public services, protect
              critical data, and respond to threats with confidence.
            </motion.p>
          </motion.div>
          <motion.div

            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact?sector=public"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-700 sm:w-fit"
            >
              Start Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <CyberSectionDivider />
    </main>
  );
}
