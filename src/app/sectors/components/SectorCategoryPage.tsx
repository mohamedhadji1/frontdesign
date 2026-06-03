"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Cpu, Factory, HeartPulse } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

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
  theme?: "red" | "blue";
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
  theme = "red",
}: SectorCategoryPageProps) {
  const Icon = categoryIcons[icon];

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative flex h-[100vh] min-h-[100vh] items-center overflow-hidden bg-zinc-950 px-6 pb-16 pt-32 text-white md:px-12"
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
          <Breadcrumbs
            items={[
              { label: "Sectors", href: "/sectors" },
              { label: eyebrow }
            ]}
            theme={theme}
            className="mb-6"
          />


          <motion.h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            {title}
          </motion.h1>
          <motion.p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
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
          <motion.div >
            <SectionDivider title={`${eyebrow} AREAS`} className="mb-12" />
          </motion.div>
          <motion.div variants={stagger} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.id}
                href={`/sectors/${item.id}`}
                className="block group cursor-pointer"
              >
                <motion.article
                  id={item.id}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="h-full scroll-mt-28 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-red-200 hover:bg-red-50/40"
                >
                  <div className="flex justify-between items-start mb-5">
                    <motion.div whileHover={{ rotate: -4, scale: 1.08 }}>
                      <CheckCircle2 className="h-7 w-7 text-red-600" aria-hidden="true" />
                    </motion.div>
                    <span className="text-xs font-semibold text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                      Learn More <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                  <motion.h2 className="mb-3 text-xl font-bold text-zinc-950 group-hover:text-red-700 transition-colors duration-200">
                    {item.title}
                  </motion.h2>
                  <p className="text-sm leading-7 text-zinc-600">
                    {item.description}
                  </p>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
