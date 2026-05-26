"use client";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {Search,
  Clock,
  ShieldCheck,
  FileText,
  ArrowRight, ChevronRight} from "lucide-react";
import { DEFCTASection } from "../soc-management/DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

export default function Page() {
  const steps = [
    {
      title: "Forensic Analysis",
      desc: "Keystone performs an in-depth analysis of systems and networks to identify traces of intrusion, data leaks, or malicious activity. This rigorous analysis helps understand the origin and workflow of the attack.",
      icon: <Search className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Chronology (Timeline)",
      desc: "We reconstruct the precise chronology of events related to the incident. This helps trace the actions of the attackers, identify the affected systems, and understand the propagation of the attack.",
      icon: <Clock className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Evidence Discovery",
      desc: "Keystone actively searches for and preserves digital evidence with absolute integrity for use in legal or internal proceedings. We follow strict protocols to guarantee the validity of the evidence.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Expert Reports",
      desc: "Clear and detailed expert reports are provided, presenting our findings, the collected evidence, and recommendations to strengthen security. These documents are designed to be easily understood by non-specialists.",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
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
            <source src="/vids/videoplayback.mp4" type="video/mp4" />
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
              <span className="text-white/60">Digital Forensics</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Forensics</span>
            </h1>

            <HeroTypeLine
              items={[
                  "Advanced Forensic Analysis",
                  "Timeline Reconstruction",
                  "Evidence Collection & Preservation",
                  "Forensic Expert Reports"
                ]}
              className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-400"
            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              Keystone&apos;s digital forensics service is specialized in the in-depth analysis and search of digital evidence during security incidents.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl"
              >
                Request an Investigation <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        <CertificationsMarquee className="mt-auto pointer-events-auto cursor-default pb-2 sm:pb-8" />
        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider theme="blue" />

      {/* Content Section */}
      <section className="py-24 bg-white flex-grow">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
              Forensic Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mt-2">
              How Our Forensic Investigation Services Are Structured
            </h2>
            <p className="text-zinc-600 text-lg mt-6 leading-relaxed">
              We analyze data structures, reconstruct attack timelines, and preserve digital evidence with absolute integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {steps.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-50 border border-zinc-200/80 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-5xl mx-auto p-8 bg-zinc-950 text-white rounded-2xl border border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold mb-3">Keystone: Your Trusted Forensic Expertise</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Keystone provides a highly qualified team to conduct reliable and rigorous digital investigations. Contact us for specialized assistance and clear answers to your security questions.
              </p>
            </div>
            <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 whitespace-nowrap uppercase tracking-widest text-xs">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CyberSectionDivider theme="blue" />

      <DEFCTASection />
    </main>
  );
}
