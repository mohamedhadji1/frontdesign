"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Radar, ShieldCheck, Globe, Server, Database, Cpu, Eye, type LucideIcon } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

type SolutionCard = {
  title: string;
  subtitle: string;
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

const solutionCards: SolutionCard[] = [
  {
    title: "Keystone ARENA",
    subtitle: "CTI Platform",
    description:
      "Centralize threat intelligence, external attack surface monitoring, and third-party risk assessment in one secure platform.",
    href: "/solutions/keystone-arena",
    icon: Radar,
  },
  {
    title: "Keystone DNS Filtering",
    subtitle: "DNS Security & AI Analysis",
    description:
      "Protect users and organizations at the DNS layer by blocking malicious, unwanted, or risky domains before connections are established.",
    href: "/solutions/dns-filtering",
    icon: Globe,
  },
  {
    title: "CIP Platform",
    subtitle: "Critical Infrastructure Protection",
    description:
      "Supports the classification, monitoring, and governance of Critical Information Infrastructures via a centralized risk oversight dashboard.",
    href: "/solutions/cip-platform",
    icon: Server,
  },
  {
    title: "Keystone DLP",
    subtitle: "Data Loss Prevention",
    description:
      "Protect sensitive assets, monitor risky flows, and prevent accidental or intentional data exfiltration across your organization.",
    href: "/solutions/keystone-dlp",
    icon: Database,
  },

];

export default function SolutionsPage() {
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
            src="/vids/videoplayback.mp4"
            poster="/background/Rectangle 59.png"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-80"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[url('/background/vector/cyber-matrix.svg')] bg-cover bg-center opacity-15 mix-blend-screen" />
        <motion.div variants={stagger} className="relative z-10 mx-auto max-w-7xl">
          <motion.div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-red-300 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            Keystone Cybersecurity Solutions
          </motion.div>
 
          <motion.h2 className="max-w-5xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl leading-[1.05]">
            Cybersecurity platforms built to protect, monitor and strengthen digital resilience.
          </motion.h2>
          <motion.p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg md:text-xl md:leading-8">
            Keystone develops advanced cybersecurity solutions designed to help organizations anticipate threats, protect sensitive assets, control critical infrastructures and reduce exposure to data leakage. Our platforms combine field expertise, automation and AI-driven analysis to transform security challenges into actionable intelligence.
          </motion.p>
          <motion.div className="mt-10 flex flex-wrap gap-4 text-white">
            <Link
              href="#solutions"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-700"
            >
              Explore Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
        <ScrollIndicator className="hidden md:flex" />
      </motion.section>

      <CyberSectionDivider />

      {/* Designed by Experts / Overview Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-16 px-4 sm:px-6 md:px-12 md:py-24 bg-white text-zinc-900"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <span className="text-red-600 text-xs font-extrabold uppercase tracking-widest block mb-4">Overview</span>
              <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl mb-6">
                Designed by cybersecurity experts for real operational needs.
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
                Keystone solutions are built to address the most pressing cybersecurity priorities: external exposure, threat intelligence, DNS-level protection, critical infrastructure monitoring and data loss prevention.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                Each solution is designed with a pragmatic approach: easy to integrate, security-oriented, scalable and adapted to both enterprise and national-level cybersecurity programs.
              </p>
            </div>
            <div className="lg:col-span-5 bg-zinc-50 border border-gray-100 rounded-[2rem] p-8 shadow-sm">
              <span className="text-red-600 text-xs font-extrabold uppercase tracking-widest block mb-4">Solutions Menu</span>
              <ul className="space-y-4">
                {[
                  { name: "ARENA", tag: "CTI, EASM, TPRM", href: "#arena" },
                  { name: "Keystone DNS Filtering", tag: "Cloud & Local DNS Security", href: "#dns-filtering" },
                  { name: "CIP Platform", tag: "Critical Infrastructure Protection", href: "#cip-platform" },
                  { name: "Keystone DLP", tag: "Data Loss Prevention", href: "#keystone-dlp" }
                ].map((item, idx) => (
                  <li key={idx} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <Link href={item.href} className="flex justify-between items-center group py-1">
                      <span className="text-gray-900 text-sm font-bold group-hover:text-red-600 transition-colors">{item.name}</span>
                      <span className="text-xs text-red-600 font-semibold group-hover:translate-x-1 transition-transform">{item.tag} &rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider />

      {/* Main Solution Cards Grid */}
      <motion.section
        id="solutions"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-16 px-4 sm:px-6 md:px-12 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionDivider title="OUR PORTFOLIO" className="mb-12" />
          <motion.div variants={stagger} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solutionCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div id={card.href.replace("/solutions/", "")} key={card.href} whileHover={{ y: -8, scale: 1.01 }} className="scroll-mt-28">
                  <Link
                    href={card.href}
                    className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(220,38,38,0.1)] hover:-translate-y-2 transition-all duration-300 group border border-gray-100 flex flex-col h-full block"
                  >
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm border border-red-100 group-hover:border-red-600 shrink-0">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-red-600">{card.subtitle}</p>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight mt-3">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">{card.description}</p>
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center text-red-600 font-bold text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore solution
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

      {/* Why Choose Keystone Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-16 px-4 sm:px-6 md:px-12 md:py-24 bg-zinc-50/50"
      >
        <div className="mx-auto max-w-7xl">
          <SectionDivider title="WHY KEYSTONE" className="mb-12" />
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight uppercase leading-[1.1]">
              Solutions powered by expertise, intelligence and operational experience.
            </h2>
          </div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cybersecurity DNA",
                description: "Our solutions are developed by cybersecurity practitioners who understand operational constraints and real attack scenarios.",
                icon: ShieldCheck
              },
              {
                title: "AI-Driven Value",
                description: "We integrate AI where it creates measurable value: analysis, prioritization, detection, automation and decision support.",
                icon: Cpu
              },
              {
                title: "Executive Visibility",
                description: "Dashboards and reporting are designed to support both technical teams and strategic decision-makers.",
                icon: Eye
              },
              {
                title: "Flexible Deployment",
                description: "Our platforms can support different environments, including sensitive, regulated, enterprise and national-level contexts.",
                icon: Server
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 shadow-sm border border-red-50">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-950 mb-3 uppercase tracking-tight italic">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <CyberSectionDivider />

      {/* CTA Section */}
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
          <Image src="/background/vector/cyber-matrix.svg" alt="" fill className="object-cover" />
        </motion.div>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <motion.div variants={stagger} className="max-w-3xl">
            <motion.p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Resilience Engineered
            </motion.p>
            <motion.h2 className="text-3xl font-black tracking-tight md:text-5xl uppercase leading-[1.1]">
              Build stronger cyber resilience with Keystone solutions.
            </motion.h2>
            <motion.p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
              Whether you need to monitor external threats, protect DNS traffic, govern critical infrastructures or prevent data leakage, Keystone provides solutions designed to help you act faster, smarter and with greater confidence.
            </motion.p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-700 sm:w-fit">
              Contact Keystone
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <CyberSectionDivider />
    </main>
  );
}