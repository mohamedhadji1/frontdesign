"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Banknote,
  Cloud,
  Cpu,
  CreditCard,
  Database,
  Eye,
  Factory,
  FileSearch,
  GraduationCap,
  HeartPulse,
  LockKeyhole,
  Network,
  Newspaper,
  Radar,
  RadioTower,
  Rocket,
  Server,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Truck,
  UsersRound,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Variants } from "framer-motion";
import { useState } from "react";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { SectionDivider } from "@/components/ui/SectionDivider";
import type {
  SectorCard,
  SectorIconName,
  SectorPageContent,
} from "../sectorContent";

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

const icons: Record<SectorIconName, LucideIcon> = {
  activity: Activity,
  banknote: Banknote,
  cloud: Cloud,
  cpu: Cpu,
  creditCard: CreditCard,
  database: Database,
  eye: Eye,
  factory: Factory,
  fileSearch: FileSearch,
  graduationCap: GraduationCap,
  heartPulse: HeartPulse,
  lockKeyhole: LockKeyhole,
  network: Network,
  newspaper: Newspaper,
  radar: Radar,
  radioTower: RadioTower,
  rocket: Rocket,
  server: Server,
  shieldAlert: ShieldAlert,
  shieldCheck: ShieldCheck,
  siren: Siren,
  truck: Truck,
  usersRound: UsersRound,
  wifi: Wifi,
  zap: Zap,
};

function IconTile({ item }: { item: SectorCard }) {
  const Icon = icons[item.icon];

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group h-full rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-red-200 hover:bg-red-50/40"
    >
      <motion.div
        whileHover={{ rotate: -4, scale: 1.06 }}
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 text-white shadow-sm shadow-red-600/20"
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </motion.div>
      <h3 className="mb-3 text-lg font-bold text-zinc-950">{item.title}</h3>
      <p className="text-sm leading-7 text-zinc-600">{item.description}</p>
    </motion.article>
  );
}

function InteractiveHubSection({ items }: { items: SectorCard[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = items[selectedIndex];
  const Icon = icons[selected.icon];

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200">
      <div className="grid grid-cols-1 divide-y divide-zinc-200 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
        <div className="divide-y divide-zinc-200">
          {items.map((item, idx) => {
            const ItemIcon = icons[item.icon];
            const isActive = idx === selectedIndex;

            return (
              <motion.button
                key={item.title}
                onClick={() => setSelectedIndex(idx)}
                whileHover={{ x: isActive ? 0 : 4 }}
                transition={{ duration: 0.15 }}
                className="group relative flex w-full items-center gap-5 px-8 py-6 text-left transition-colors"
              >
                {isActive && (
                  <motion.div
                    layoutId="sector-active-bar"
                    className="absolute bottom-0 left-0 top-0 w-[3px] rounded-r-sm bg-red-600"
                  />
                )}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                    isActive
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-zinc-200 bg-zinc-50 text-zinc-500 group-hover:border-zinc-300"
                  }`}
                >
                  <ItemIcon className="h-[18px] w-[18px]" aria-hidden="true" />
                </div>
                <span
                  className={`flex-1 text-sm font-medium leading-snug ${
                    isActive ? "text-black" : "text-zinc-700"
                  }`}
                >
                  {item.title}
                </span>
                <ArrowRight
                  className={`h-4 w-4 transition-opacity ${
                    isActive ? "text-red-500 opacity-100" : "text-zinc-300 opacity-0"
                  }`}
                  aria-hidden="true"
                />
              </motion.button>
            );
          })}
        </div>

        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative flex flex-col justify-center overflow-hidden p-10"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-100"
            style={{
              backgroundImage:
                "linear-gradient(rgba(220,38,38,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10">
            <p className="mb-6 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-red-500">
              <span className="inline-block h-px w-5 bg-red-500" />
              Keystone Response Framework
            </p>

            <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10">
              <Icon className="h-8 w-8 text-red-500" aria-hidden="true" />
            </div>

            <h3 className="mb-4 text-xl font-medium leading-snug text-black">
              {selected.title}
            </h3>
            <p className="max-w-sm text-sm leading-7 text-black/50">
              {selected.description}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-red-600" />
              <div className="h-px flex-1 bg-black/10" />
              <div className="h-1.5 w-1.5 rounded-full bg-red-600" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function SectorDetailPage({ page }: { page: SectorPageContent }) {
  const HeroIcon = icons[page.heroIcon];

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <motion.section
        id={page.slug}
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative flex min-h-[100dvh] scroll-mt-28 items-center overflow-hidden bg-zinc-950 px-6 pb-16 pt-32 text-white md:px-12"
      >
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 z-0"
        >
          <video
            src={page.backgroundVideoSrc || "/vids/herosection.mp4"}
            poster={page.posterSrc}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-[url('/background/vector/network-nodes.svg')] bg-cover bg-center opacity-20 mix-blend-screen" />
        </motion.div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div variants={stagger} className="max-w-4xl">
            <motion.div
              variants={fadeUp}
              className="mb-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-red-300 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <Link href="/sectors" className="transition-colors hover:text-white">
                Sectors
              </Link>
              <span className="text-red-500/60">/</span>
              <span>{page.eyebrow}</span>
            </motion.div>

            <motion.div variants={fadeUp}>
              <HeroIcon className="mb-6 h-12 w-12 text-red-500" aria-hidden="true" />
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            >
              {page.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-3xl text-lg font-medium leading-8 text-zinc-200 md:text-xl"
            >
              {page.description}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link
                href={`/contact?sector=${page.slug}`}
                className="inline-flex items-center gap-3 rounded-full bg-red-600 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-700"
              >
                Consult an Expert
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#emerging-risks"
                className="inline-flex items-center gap-3 border-b border-white/40 px-1 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-red-400 hover:text-red-300"
              >
                View Risks
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            className="relative hidden min-h-[440px] lg:block"
          >
            <div className="absolute inset-x-10 top-6 h-px bg-red-600/50" />
            <div className="absolute bottom-8 left-2 right-2 h-px bg-white/20" />
            <div className="grid h-full grid-cols-2 gap-4">
              {page.heroCards.map((label, index) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  whileHover={{ y: -8, borderColor: "rgba(220,38,38,0.65)" }}
                  animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                  transition={{
                    duration: 4 + index * 0.35,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="flex min-h-[150px] flex-col justify-between rounded-lg border border-white/10 bg-white/5 p-5 text-white backdrop-blur-md"
                >
                  <span className="text-4xl font-black text-white">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-[0.25em] text-white">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <CyberSectionDivider />
      <motion.div variants={fadeUp}>
        <SectionDivider title={page.exposureTitle} className="bg-[#f7f7f8]" />
      </motion.div>

      {page.posts && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="bg-[#f7f7f8] px-6 py-16 md:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div variants={fadeUp} className="mb-12 text-center">
              <h2 className="text-4xl font-black tracking-tight text-zinc-950 md:text-5xl">
                Cybersecurity News
              </h2>
            </motion.div>
            <motion.div variants={stagger} className="grid gap-6 md:grid-cols-2">
              {page.posts.map((post) => (
                <motion.article
                  key={post.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
                >
                  <Link href={post.href} target="_blank" rel="noreferrer">
                    <div className="relative aspect-[16/10] bg-zinc-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-red-600">
                        Media | {post.date}
                      </p>
                      <h3 className="text-xl font-bold leading-snug text-zinc-950">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      <motion.section
        id="emerging-risks"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="bg-[#f7f7f8] px-6 py-16 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="text-center text-4xl font-black tracking-tight text-zinc-950 md:text-5xl">
              Emerging Risks
            </h2>
          </motion.div>

          <InteractiveHubSection items={page.risks} />
        </div>
      </motion.section>

      <CyberSectionDivider />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="bg-zinc-950 px-6 text-white md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp}>
            <SectionDivider title="SPECIFIC RISKS" className="mb-12" />
          </motion.div>
          <motion.div variants={stagger} className="grid gap-6 pb-20 md:grid-cols-2 lg:grid-cols-4">
            {page.specificRisks.map((risk) => {
              const Icon = icons[risk.icon];

              return (
                <motion.article
                  key={risk.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.07)" }}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
                >
                  <Icon className="mb-5 h-8 w-8 text-red-500" aria-hidden="true" />
                  <h3 className="mb-3 text-lg font-bold text-white">
                    {risk.title}
                  </h3>
                  <p className="text-sm leading-7 text-zinc-400">
                    {risk.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <CyberSectionDivider />
      <motion.div variants={fadeUp}>
        <SectionDivider title="Adapted Solutions" />
      </motion.div>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="bg-white px-6 py-10 md:px-12"
      >
        <div className="mx-auto">
          <motion.div variants={stagger} className="mb-12">
            <motion.h2
              variants={fadeUp}
              className="mb-5 text-center text-3xl font-black tracking-tight text-zinc-950 md:text-5xl"
            >
              Solutions Adapted to {page.eyebrow}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-4xl text-center text-base leading-8 text-zinc-600 md:text-lg"
            >
              Keystone translates sector risks into practical controls for
              infrastructure, digital services, and the teams operating them.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {page.solutions.map((solution) => (
              <IconTile key={solution.title} item={solution} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      <CyberSectionDivider />
      <motion.div variants={fadeUp}>
        <SectionDivider title="Keystone Response Framework" className="bg-[#f7f7f8]" />
      </motion.div>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="bg-[#f7f7f8] px-6 py-10 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp} className="mb-10 text-center">
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-black tracking-tight text-zinc-950 md:text-5xl"
            >
              {page.frameworkTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-4xl text-base leading-8 text-zinc-600 md:text-lg"
            >
              {page.summary}
            </motion.p>
          </motion.div>
          <InteractiveHubSection items={page.framework} />
        </div>
      </motion.section>

      <CyberSectionDivider />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white md:px-12"
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
            <motion.p
              variants={fadeUp}
              className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-400"
            >
              Building the Digital Keystone
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-black tracking-tight md:text-5xl"
            >
              Do not fight cyber threats alone.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-base leading-8 text-zinc-300 md:text-lg"
            >
              {page.ctaText}
            </motion.p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={`/contact?sector=${page.slug}`}
              className="inline-flex w-fit items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-700"
            >
              Start Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
