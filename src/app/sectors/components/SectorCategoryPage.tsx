"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Cpu, Factory, HeartPulse } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

type SectorItem = {
  title: string;
  description: string;
  id: string;
};

type SectorCategoryPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: SectorItem[];
  icon: keyof typeof categoryIcons;
  backgroundVideoSrc?: string;
  posterSrc?: string;
};

const categoryIcons = {
  cpu: Cpu,
  factory: Factory,
  heartPulse: HeartPulse,
};

export function SectorCategoryPage({
  eyebrow,
  title,
  description,
  items,
  icon,
  backgroundVideoSrc = "/vids/herosection.mp4",
  posterSrc = "/background/Rectangle 59.png",
}: SectorCategoryPageProps) {
  const Icon = categoryIcons[icon];

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative flex min-h-[100dvh] items-center overflow-hidden bg-zinc-950 px-6 pb-16 pt-32 text-white md:px-12"
      >
        <motion.div
          animate={{ scale: [1, 1.06, 1], x: ["0%", "-2%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <video
            src={backgroundVideoSrc}
            poster={posterSrc}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-42"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-zinc-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-[url('/background/vector/network-nodes.svg')] bg-cover bg-center opacity-20 mix-blend-screen" />

        <motion.div variants={stagger} className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            variants={fadeUp}
            className="mb-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-red-300 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <Link href="/sectors" className="transition-colors hover:text-white">
              Sectors
            </Link>
            <span className="text-red-500/60">/</span>
            <span>{eyebrow}</span>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Icon className="mb-6 h-12 w-12 text-red-500" aria-hidden="true" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            {title}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
            {description}
          </motion.p>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="px-6 pb-20 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp}>
            <SectionDivider title={`${eyebrow} AREAS`} className="mb-12" />
          </motion.div>
          <motion.div variants={stagger} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <motion.article
                id={item.id}
                key={item.id}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                className="scroll-mt-28 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-red-200 hover:bg-red-50/40"
              >
                <motion.div whileHover={{ rotate: -4, scale: 1.08 }}>
                  <CheckCircle2 className="mb-5 h-7 w-7 text-red-600" aria-hidden="true" />
                </motion.div>
                <h2 className="mb-3 text-xl font-bold text-zinc-950">
                  {item.title}
                </h2>
                <p className="text-sm leading-7 text-zinc-600">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
