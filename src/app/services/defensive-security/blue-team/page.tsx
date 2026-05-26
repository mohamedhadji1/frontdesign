"use client";
import { BlueSectionDivider } from "@/components/ui/BlueSectionDivider";

import Link from "next/link";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Clock,
  Layers,
  Shield,
  Code,
  FileText,
  ArrowRight,
  ChevronRight,
  ShieldAlert,
  Activity,
  Workflow,
  Search,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

const capabilityItems = [
  {
    title: "24/7 Monitoring",
    d: "Continuous surveillance of IT systems, networks, and applications to detect suspicious activities and anomalies in real-time.",
    icon: Clock,
  },
  {
    title: "SIEM Optimization",
    d: "Complete handling, configuration, and tuning of SIEM systems to maximize detection efficacy and eliminate false positives.",
    icon: Layers,
  },
  {
    title: "Managed EDR & XDR",
    d: "Deployment of advanced endpoint detection and response solutions, offering granular visibility and rapid containment capability.",
    icon: Shield,
  },
];

const hardeningItems = [
  {
    title: "Log Management",
    d: "Centralized collection, secure storage, and advanced correlation of logs to deliver absolute visibility across all layers.",
    icon: FileText,
  },
  {
    title: "Use Case Development",
    d: "Creating custom behavior models and detection scenarios tailored to identify threat vectors specific to your industry.",
    icon: Code,
  },
  {
    title: "Proactive Defense",
    d: "Implementing strict access controls and active perimeter hardening to block attackers before they gain a foothold.",
    icon: ShieldAlert,
  },
];

const pillars = [
  {
    title: "Continuous Surveillance",
    d: "Real-time traffic auditing and behavioral analysis to pinpoint unauthorized activities immediately.",
    icon: Eye,
  },
  {
    title: "Optimal Threat Correlation",
    d: "Using smart logic engines to correlate multiple telemetry streams into verified security incidents.",
    icon: Workflow,
  },
  {
    title: "Collaborative Hardening",
    d: "Working directly with your internal infrastructure team to apply system hardening guidelines continuously.",
    icon: CheckCircle2,
  },
];

export default function BlueTeamPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <main
      ref={targetRef}
      className="min-h-screen bg-white text-zinc-950 overflow-hidden"
    >
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden pt-52 sm:pt-60 lg:pt-64 pb-12"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center blur-[2px]"
          >
            <source src="/vids/SOC.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 sm:bg-linear-to-r sm:from-black/75 sm:via-black/35 sm:to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center items-center text-center lg:items-start lg:text-left py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              <span>Managed Services</span>
              <ChevronRight size={8} />
              <span className="text-white/60">Blue Team Operations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              Blue Team
            </h1>

            <HeroTypeLine
              items={[
                "Active 24/7 Infrastructure Monitoring",
                "Advanced SIEM Optimization",
                "Managed EDR/XDR Deployment",
              ]}
              className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-400"
            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              Strengthen your perimeter and eliminate blind spots. Keystone's expert Blue Team delivers continuous auditing, customized threat modeling, and rapid active response to secure your digital future.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl"
              >
                Secure Your Systems <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
        <CertificationsMarquee className="mt-auto pointer-events-auto cursor-default pb-2 sm:pb-8" />
        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider theme="blue" />

      {/* Strategic Capability Section */}
      <section className="mb-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <motion.div
            style={{ y: y1, rotate }}
            className="absolute top-[10%] right-[5%] w-64 h-64 border border-blue-500/5 rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="CORE DEFENSIVE CAPABILITIES" theme="blue" className="mb-10" />
            <h2 className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]">
              Active Hardening & Monitoring
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
              We leverage advanced technical suites and round-the-clock telemetry auditing to construct an unbreachable defensive line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            {capabilityItems.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-md group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-600 rounded-full group-hover:scale-y-125 transition-transform" />
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-base font-medium">
                  {item.d}
                </p>
              </motion.div>
            ))}
          </div>

          <BlueSectionDivider />

          {/* Hardening Section */}
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="PROACTIVE HARDENING" theme="blue" className="mb-10" />
            <h2 className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]">
              Methodical Defense Optimization
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
              A comprehensive approach to minimizing attack surface and enhancing analytical visibility:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            {hardeningItems.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-md group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-600 rounded-full group-hover:scale-y-125 transition-transform" />
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-base font-medium">
                  {item.d}
                </p>
              </motion.div>
            ))}
          </div>

          <BlueSectionDivider />
          <SectionDivider title="CORE ARCHITECTURE" theme="blue" className="!justify-start mb-20" />

          {/* Pillars split details section */}
          <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1] uppercase">
                Active Perimeter Shielding
              </h2>
              <div className="space-y-8">
                {pillars.map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-zinc-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-lg">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-zinc-900 uppercase tracking-tighter mb-2 italic">
                        {item.title}
                      </h4>
                      <p className="text-zinc-500 text-base font-medium leading-relaxed">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group bg-zinc-900 p-12 rounded-[3rem] text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-tighter italic">
                Strategic Action
              </h3>
              <p className="text-xl md:text-2xl font-light italic leading-relaxed text-zinc-300 relative z-10 mb-12">
                "Keystone offers a comprehensive range of Blue Team services for proactive monitoring, optimal security solution management, and effective response to threats. We work in close collaboration with your company to ensure enhanced protection against cyber threats."
              </p>
              <div className="pt-10 border-t border-white/10 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 bg-blue-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-all"
                >
                  Consult an Expert <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CyberSectionDivider theme="blue" />
      <Footer />
    </main>
  );
}
