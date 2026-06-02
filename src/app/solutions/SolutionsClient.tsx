"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Radar, ShieldCheck, Globe, Server, Database, Cpu, Eye, type LucideIcon } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { PageHero } from "@/components/ui/PageHero";

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

export function SolutionsClient() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 relative overflow-hidden">
      {/* Subtle high-tech blueprint background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444405_1px,transparent_1px),linear-gradient(to_bottom,#ef444405_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[30%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <PageHero
        breadcrumbs={[{ label: "Solutions" }]}
        title="Keystone Cybersecurity Solutions"
        description="Cybersecurity platforms built to protect, monitor and strengthen digital resilience."
        backgroundVideoUrl="/vids/videoplayback.mp4"
        actions={
          <Link
            href="#solutions"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-red-700 hover:scale-105 active:scale-95 shadow-md hover:shadow-[0_8px_25px_rgba(220,38,38,0.25)]"
          >
            Explore Solutions
            <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />

      <CyberSectionDivider />

      {/* Designed by Experts / Overview Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="relative z-10 py-16 px-4 sm:px-6 md:px-12 md:py-24 bg-white/80 backdrop-blur-xs text-zinc-900 border-b border-zinc-100/50"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="mb-6 inline-flex items-center gap-3 text-red-500 font-bold uppercase tracking-[0.2em] text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                Overview
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-light tracking-tight text-zinc-950 sm:text-5xl mb-6 uppercase leading-[1.1]"
              >
                Designed by cybersecurity experts for real operational needs.
              </motion.h2>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
                Keystone solutions are built to address the most pressing cybersecurity priorities: external exposure, threat intelligence, DNS-level protection, critical infrastructure monitoring and data loss prevention.
              </p>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-medium">
                Each solution is designed with a pragmatic approach: easy to integrate, security-oriented, scalable and adapted to both enterprise and national-level cybersecurity programs.
              </p>
            </div>
            <div className="lg:col-span-5 bg-zinc-50 border border-zinc-100 rounded-[2rem] p-8 shadow-xs hover:shadow-[0_15px_30px_rgba(220,38,38,0.03)] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="mb-6 inline-flex items-center gap-3 text-red-500 font-bold uppercase tracking-[0.2em] text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                Solutions Navigation
              </span>
              <ul className="space-y-4">
                {[
                  { name: "Keystone ARENA", tag: "CTI, EASM, TPRM", href: "#keystone-arena" },
                  { name: "Keystone DNS Filtering", tag: "DNS & AI Analysis", href: "#dns-filtering" },
                  { name: "CIP Platform", tag: "Critical Infrastructure", href: "#cip-platform" },
                  { name: "Keystone DLP", tag: "Data Loss Prevention", href: "#keystone-dlp" }
                ].map((item, idx) => (
                  <li key={idx} className="border-b border-zinc-100 pb-3 last:border-0 last:pb-0">
                    <Link href={item.href} className="flex justify-between items-center group/item py-1">
                      <span className="text-zinc-900 text-sm font-bold group-hover/item:text-red-600 transition-colors flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-zinc-350 group-hover/item:bg-red-600 transition-colors" />
                        {item.name}
                      </span>
                      <span className="text-[10px] text-red-600 font-bold group-hover/item:translate-x-1.5 transition-transform uppercase tracking-wider flex items-center">
                        {item.tag} &rarr;
                      </span>
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
        className="relative z-10 py-16 px-4 sm:px-6 md:px-12 md:py-24"
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
                    className="bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_rgba(220,38,38,0.07)] transition-all duration-500 group border border-zinc-100/80 flex flex-col h-full relative overflow-hidden"
                  >
                    {/* Glowing Hover Background Effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-xs border border-red-100 group-hover:border-red-600 shrink-0">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 mb-2">{card.subtitle}</p>
                    <h3 className="text-xl sm:text-2xl font-black mb-4 text-zinc-950 uppercase tracking-tight leading-tight mt-1 group-hover:text-red-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-zinc-650 text-sm leading-relaxed mb-8 flex-grow font-medium">{card.description}</p>
                    <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center text-red-600 font-bold text-xs tracking-wide uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-300">
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
        className="relative z-10 py-16 px-4 sm:px-6 md:px-12 md:py-24 bg-zinc-50/50 border-y border-zinc-100/50 backdrop-blur-xs"
      >
        <div className="mx-auto max-w-7xl">
          <SectionDivider title="WHY KEYSTONE" className="mb-12" />
          <div className="max-w-3xl mb-16 flex flex-col items-start">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl lg:text-5xl font-black text-zinc-950 mb-6 tracking-tight uppercase leading-[1.1]"
            >
              Solutions powered by expertise, intelligence and operational experience.
            </motion.h2>
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
                  className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(220,38,38,0.05)] transition-all duration-500 flex flex-col h-full relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 shadow-xs border border-red-50/50 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-950 mb-3 uppercase tracking-wider group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-zinc-650 text-sm font-medium leading-relaxed">
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
            <Link href="/contact" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-red-700 hover:scale-105 active:scale-95 shadow-md hover:shadow-[0_8px_25px_rgba(220,38,38,0.25)] sm:w-fit">
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
