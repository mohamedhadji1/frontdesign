"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Building2,
  Database,
  Eye,
  FileSearch,
  GraduationCap,
  Landmark,
  LockKeyhole,
  Network,
  Radar,
  ShieldCheck,
  Siren,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { SectionDivider } from "@/components/ui/SectionDivider";
import type { Variants } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

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

type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
}

const sectorFamilies = [
  {
    id: "public",
    title: "Public",
    description: "Governments and public organizations",
    href: "/sectors/public",
    icon: Landmark,
  },
  {
    id: "technology",
    title: "Technology",
    description: "Telecom, IT, fintech, and startups",
    href: "/sectors/technology",
    icon: Network,
  },
  {
    id: "industry-infrastructure",
    title: "Industry & Infrastructure",
    description: "Transportation, energy, and industrial systems",
    href: "/sectors/industry-infrastructure",
    icon: Building2,
  },
  {
    id: "services",
    title: "Services",
    description: "Healthcare, finance, and media organizations",
    href: "/sectors/services",
    icon: UsersRound,
  },
];

const emergingRisks: IconCard[] = [
  {
    title: "Sensitive Data Protection",
    description:
      "Governments store personal information, classified data, and state secrets that require rigorous protection against data breaches and information theft.",
    icon: Database,
  },
  {
    title: "Critical Infrastructure Vulnerabilities",
    description:
      "Essential services such as power grids, healthcare services, and emergency systems are potential targets. Attacks against them can have a major social impact.",
    icon: Siren,
  },
  {
    title: "Espionage and State-Sponsored Threats",
    description:
      "Public institutions are frequent targets for malicious state actors seeking to steal sensitive information, alter data, or disrupt government operations.",
    icon: Eye,
  },
];

const specificRisks: IconCard[] = [
  {
    title: "Classified and Citizen Data",
    description:
      "Personal records, classified information, and government secrets need layered controls, continuous monitoring, and clear ownership.",
    icon: LockKeyhole,
  },
  {
    title: "Essential Public Services",
    description:
      "Power, health, transport, and emergency platforms must stay resilient because service disruption can rapidly affect citizens and institutions.",
    icon: Activity,
  },
  {
    title: "Operational Disruption",
    description:
      "Adversaries may attempt to manipulate data, interrupt public services, or weaken trust in government operations.",
    icon: ShieldCheck,
  },
  {
    title: "Technology-Agnostic Coverage",
    description:
      "Keystone adapts its methodology across cloud services, on-premise systems, and hybrid environments to secure each public-sector technology stack.",
    icon: Network,
  },
];

const adaptedSolutions: IconCard[] = [
  {
    title: "Audit and Assessment",
    description:
      "Keystone conducts complete audits to evaluate public infrastructure security and proposes risk-management strategies that reduce potential weaknesses.",
    icon: FileSearch,
  },
  {
    title: "Early Detection Solutions",
    description:
      "Advanced detection tools help identify suspicious activity, fraud attempts, and unauthorized digital transactions in real time.",
    icon: Radar,
  },
  {
    title: "Transaction and Data Protection",
    description:
      "Encryption, identity verification, and access-control measures strengthen the security of public digital transactions and citizen data.",
    icon: LockKeyhole,
  },
  {
    title: "Training and Awareness",
    description:
      "Targeted training programs teach public-sector teams cybersecurity best practices and reduce risks linked to social engineering and human error.",
    icon: GraduationCap,
  },
];

const keystoneSolutions: IconCard[] = [
  {
    title: "In-Depth Audit and Evaluation",
    description:
      "Detailed assessments identify vulnerabilities specific to government infrastructures, evaluate security maturity, and recommend improvements.",
    icon: FileSearch,
  },
  {
    title: "Proactive Monitoring and Threat Response",
    description:
      "Advanced monitoring detects suspicious activity and enables rapid response to emerging threats, reducing risk to crucial infrastructures.",
    icon: Radar,
  },
  {
    title: "Tailored Awareness Programs",
    description:
      "Custom awareness programs educate government personnel on practical cybersecurity behaviors and reduce exposure to social-engineering attacks.",
    icon: GraduationCap,
  },
];

function IconTile({ item }: { item: IconCard }) {
  const Icon = item.icon;

  return (
    <motion.article

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
      <motion.h2 className="mb-3 text-lg font-bold text-zinc-950">{item.title}</motion.h2>
      <p className="text-sm leading-7 text-zinc-600">{item.description}</p>
    </motion.article>
  );
}

function InteractiveHubSection({ items }: { items: IconCard[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = items[selectedIndex];
  const Icon = selected.icon;

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200">
      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">

        {/* Left — item list */}
        <div className="divide-y divide-zinc-200">
          {items.map((item, idx) => {
            const ItemIcon = item.icon;
            const isActive = idx === selectedIndex;
            return (
              <motion.button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                whileHover={{ x: isActive ? 0 : 4 }}
                transition={{ duration: 0.15 }}
                className={"group relative flex w-full items-center gap-5 px-8 py-6 text-left transition-colors"}
              >
                {/* Active bar */}
                {isActive && (
                  <motion.div
                    layoutId="active-bar"
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-sm bg-red-600"
                  />
                )}
                {/* Icon */}
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border transition-colors ${isActive
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-zinc-200 bg-zinc-50 text-zinc-500 group-hover:border-zinc-300"
                    }`}
                >
                  <ItemIcon className="h-[18px] w-[18px]" aria-hidden="true" />
                </div>

                {/* Title */}
                <span
                  className={`flex-1 text-sm font-medium leading-snug ${isActive ? "text-black" : "text-zinc-700"
                    }`}
                >
                  {item.title}
                </span>

                {/* Arrow */}
                <motion.span
                  animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -4 }}
                  className={`text-sm ${isActive ? "text-red-500" : "text-zinc-400"}`}
                >
                  →
                </motion.span>
              </motion.button>
            );
          })}
        </div>

        {/* Right — detail panel */}
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative flex flex-col justify-center p-10 overflow-hidden"
        >
          {/* Subtle grid bg */}
          <div
            className="pointer-events-none absolute inset-0 opacity-100"
            style={{
              backgroundImage:
                "linear-gradient(rgba(220,38,38,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10">
            {/* Tag */}
            <p className="mb-6 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-red-500">
              <span className="inline-block h-px w-5 bg-red-500" />
              Keystone Response Framework
            </p>

            {/* Icon */}
            <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-xl border border-red-500/30 bg-red-500/8">
              <Icon className="h-8 w-8 text-red-500" aria-hidden="true" />
            </div>

            {/* Content */}
            <motion.h2 className="mb-4 text-xl font-medium leading-snug text-black">
              {selected.title}
            </motion.h2>
            <p className="max-w-sm text-sm leading-7 text-black/50">
              {selected.description}
            </p>

            {/* Footer rule */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-red-600" />
              <div className="h-px flex-1 bg-white/10" />
              <span className="font-mono text-[11px] text-white/25">
                KRF · MODULE 0{selectedIndex + 1}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function PublicSectorPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <motion.section
        id="public"
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
            src="/vids/videoplayback.mp4"
            poster="/background/bg10.png"
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

              className="mb-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-red-300 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <Link href="/sectors" className="transition-colors hover:text-white">
                Sectors
              </Link>
              <span className="text-red-500/60">/</span>
              <span>Public</span>
            </motion.div>

            <motion.h1

              className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            >
              Cybersecurity for Governments and Public Organizations
            </motion.h1>

            <motion.p

              className="max-w-3xl text-lg font-medium leading-8 text-zinc-200 md:text-xl"
            >
              Governments and public organizations face unique cybersecurity
              challenges. Because of the sensitivity of the data they manage
              and the critical nature of their operations, they are prime
              targets for cyberattacks.
            </motion.p>

            <motion.div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact?sector=public"
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
              {["Protect", "Detect", "Respond", "Recover"].map((label, index) => (
                <motion.div
                  key={label}

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
      <motion.div >
        <SectionDivider title="Public-Sector Exposure" className="bg-[#f7f7f8]" />
      </motion.div>

      <motion.section
        id="emerging-risks"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="bg-[#f7f7f8] px-6 py-16 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div className="mb-16">
            <motion.h2 className="text-4xl font-black tracking-tight text-zinc-950 md:text-5xl text-center">
              Emerging Risks
            </motion.h2>
          </motion.div>

          <InteractiveHubSection items={emergingRisks} />
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
          <motion.div >
            <SectionDivider title="SPECIFIC RISKS" className="mb-12" />
          </motion.div>
          <motion.div variants={stagger} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pb-20">
            {specificRisks.map((risk) => {
              const Icon = risk.icon;

              return (
                <motion.article
                  key={risk.title}

                  whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.07)" }}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
                >
                  <Icon className="mb-5 h-8 w-8 text-red-500" aria-hidden="true" />
                  <motion.h2 className="mb-3 text-lg font-bold text-white">
                    {risk.title}
                  </motion.h2>
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
      <motion.div >
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
            <motion.h2 className="text-center mb-5 text-3xl font-black tracking-tight text-zinc-950 md:text-5xl">
              Solutions Adapted to Public Organizations
            </motion.h2>
            <motion.p className="text-center text-base leading-8 text-zinc-600 md:text-lg">
              Keystone translates risk findings into practical controls for
              public infrastructure, digital services, and the people operating
              them.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {adaptedSolutions.map((solution) => (
              <IconTile key={solution.title} item={solution} />
            ))}
          </motion.div>
        </div>
      </motion.section>
      <CyberSectionDivider />
      <motion.div >
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
          <motion.div className="mb-10 text-center">
            <motion.h2 className="text-3xl font-black tracking-tight text-zinc-950 md:text-5xl">
              Designed for Government Infrastructure
            </motion.h2>
          </motion.div>
          <InteractiveHubSection items={keystoneSolutions} />
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
