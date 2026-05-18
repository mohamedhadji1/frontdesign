"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Activity, Network, ShieldCheck, FileText, CheckCircle, Settings, ShieldAlert } from "lucide-react";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { DEFCTASection } from "../../defensive-security/soc-management/DEFCTASection";

const steps = [
  {
    id: "automated",
    title: "Automated Systems Evaluation",
    description: "We analyze industrial control systems to detect security flaws, vulnerabilities, and potential risks.",
    icon: <Network className="w-8 h-8 text-white" />
  },
  {
    id: "critical",
    title: "Critical Infrastructures Security",
    description: "We evaluate the security of critical infrastructures to ensure their protection against cyber threats and potential attacks.",
    icon: <ShieldAlert className="w-8 h-8 text-white" />
  },
  {
    id: "compliance",
    title: "Compliance with Industrial Standards",
    description: "We verify compliance with industrial standards and regulations to ensure safe and compliant operation.",
    icon: <CheckCircle className="w-8 h-8 text-white" />
  },
  {
    id: "risks",
    title: "Risks and Vulnerabilities Identification",
    description: "We identify specific risks related to industrial systems and propose solutions to mitigate them.",
    icon: <Activity className="w-8 h-8 text-white" />
  },
  {
    id: "reporting",
    title: "Detailed Audit Report and Practical Solutions",
    description: "We provide a detailed report of findings with practical recommendations to strengthen security and compliance.",
    icon: <FileText className="w-8 h-8 text-white" />
  }
];

export default function IndustrialSystemAssessmentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/vids/videoplayback.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/40 sm:bg-linear-to-r sm:from-black/85 sm:via-black/45 sm:to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center flex-wrap gap-2 text-red-400 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                  <Link href="/services" className="hover:text-red-300 transition-colors">Services</Link>
                  <span className="text-red-500/30 flex flex-nowrap shrink-0">/</span>
                  <Link href="/services/technical-audit" className="hover:text-red-300 transition-colors break-keep">Assessment and Technical Assistance</Link>
                  <span className="text-red-500/30 flex flex-nowrap shrink-0">/</span>
                  <span className="text-white/90">Industrial System Assessment</span>
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Industrial System <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Assessment</span>
              </h1>

              <HeroTypeLine
                items={["SCADA & ICS security", "IEC 62443 compliance", "Critical OT infrastructure protection"]}
              />

              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Keystone offers a complete audit of industrial systems to guarantee their security, resilience, and alignment with industry standards.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25">
                  Request an Industrial Audit
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" alt="Industrial Audit" className="rounded-xl w-full object-cover h-[350px]" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <motion.h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-red-600/30"></span>
              OT & ICS Audit
              <span className="w-8 h-px bg-red-600/30"></span>
            </motion.h2>
            <motion.h2 className="text-3xl lg:text-5xl font-black tracking-tight text-zinc-900 mb-6">
              Industrial Security and Compliance
            </motion.h2>
            <p className="text-zinc-600 text-lg">
              Our expert OT auditors map and evaluate your SCADA networks, programmable logic controllers (PLCs), and sensors to immunize your automation processes.
            </p>
          </div>
          <InteractiveProcessSection steps={steps} theme="red" />

          <div className="mt-16 max-w-4xl mx-auto p-8 bg-zinc-950 text-white rounded-2xl border border-zinc-800 text-center">
            <h3 className="text-2xl font-bold mb-3">Keystone: Your Expert in Secure Industrial Systems</h3>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
              Keystone supports you in auditing and securing your industrial systems. Contact us for an in-depth evaluation and solutions tailored to your industry.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/20 uppercase tracking-widest text-xs inline-block">
              Contact us
            </Link>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      <DEFCTASection />

      <Footer />
    </main>
  );
}
