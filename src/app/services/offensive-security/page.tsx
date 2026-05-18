"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Search, Target, type LucideIcon } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

type OffensiveCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const offensiveCards: OffensiveCard[] = [
  {
    title: "Red Team",
    description:
      "Simulate realistic attacker behavior to expose weak points in people, process, and technology before an adversary does.",
    href: "/services/red-team",
    icon: Target,
  },
  {
    title: "Technical Assessments",
    description:
      "Assess application, infrastructure, cloud, and industrial environments with deep technical reviews and remediation guidance.",
    href: "/services/technical-Assessment",
    icon: Search,
  },
];

export default function OffensiveSecurityPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative flex min-h-[100svh] items-center overflow-hidden bg-zinc-950 px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-20 sm:pt-32 md:px-12"
      >
        <motion.div
          animate={{ scale: [1, 1.06, 1], x: ["0%", "-3%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <video
            src="/vids/herosection.mp4"
            poster="/background/Rectangle 59.png"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-45"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-zinc-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25" />
        <div className="absolute inset-0 bg-[url('/background/vector/cyber-matrix.svg')] bg-cover bg-center opacity-15 mix-blend-screen" />
        <motion.div variants={stagger} className="relative z-10 mx-auto max-w-7xl">
          <motion.div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-red-300 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Offensive Security
          </motion.div>

          <motion.h1 className="max-w-4xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
            Offensive Security Hub
          </motion.h1>
          <motion.p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg md:text-xl md:leading-8">
            Start with the red team track or the technical assessments track to
            explore the offensive services that fit your objective.
          </motion.p>
        </motion.div>
        <ScrollIndicator className="hidden md:flex" />
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
          <motion.div>
            <SectionDivider title="SERVICES" className="mb-12" />
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offensiveCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.href}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="scroll-mt-28"
                >
                  <Link
                    href={card.href}
                    className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(220,38,38,0.1)] hover:-translate-y-2 transition-all duration-300 group border border-gray-100 flex flex-col h-full block"
                  >
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm border border-red-100 group-hover:border-red-600 shrink-0">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <motion.h2 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
                      {card.title}
                    </motion.h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                      {card.description}
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center text-red-600 font-bold text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                    </div>
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
              Work with Keystone to strengthen offensive testing, uncover hidden weaknesses, and prepare for the next attack.
            </motion.p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact?service=offensive-security"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-700 sm:w-fit"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <CyberSectionDivider />
    </main>
  );
}
