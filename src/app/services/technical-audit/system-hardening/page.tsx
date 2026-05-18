"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Activity, Network, ShieldCheck, FileText, CheckCircle, Settings, ShieldAlert, Lock } from "lucide-react";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { DEFCTASection } from "../../defensive-security/soc-management/DEFCTASection";

const steps = [
  {
    id: "vulnerability",
    title: "Vulnerability Assessment",
    description: "We identify weak points and system vulnerabilities to establish a suitable hardening strategy.",
    icon: <ShieldAlert className="w-8 h-8 text-white" />
  },
  {
    id: "config",
    title: "Configuration and Setup",
    description: "We apply strict configurations and security settings to strengthen system resistance in accordance with current standards and best practices: CIS, Microsoft, etc.",
    icon: <Settings className="w-8 h-8 text-white" />
  },
  {
    id: "guides",
    title: "Strengthening Security Configuration Guides",
    description: "We develop and reinforce Hardening guides, access authorizations, and controls to limit risks.",
    icon: <Lock className="w-8 h-8 text-white" />
  },
  {
    id: "patching",
    title: "Patch Implementation",
    description: "We install the latest security patches to close vulnerabilities and ensure optimal protection.",
    icon: <CheckCircle className="w-8 h-8 text-white" />
  },
  {
    id: "maintenance",
    title: "Monitoring and Maintenance",
    description: "We ensure regular monitoring to maintain secure configurations and apply necessary updates.",
    icon: <Activity className="w-8 h-8 text-white" />
  }
];

export default function SystemHardeningPage() {
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
                  <span className="text-white/90">System Hardening</span>
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                System <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Hardening</span>
              </h1>

              <HeroTypeLine
                items={["Active attack surface reduction", "Closing OS vulnerabilities", "Application of CIS & DoD STIG standards"]}
              />

              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Keystone offers system hardening to strengthen security and reduce the risks of cyberattacks.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25">
                  Request Hardening
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop" alt="System Hardening" className="rounded-xl w-full object-cover h-[350px]" />
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
              Hardening
              <span className="w-8 h-px bg-red-600/30"></span>
            </motion.h2>
            <motion.h2 className="text-3xl lg:text-5xl font-black tracking-tight text-zinc-900 mb-6">
              Hardening Methodology
            </motion.h2>
            <p className="text-zinc-600 text-lg">
              We deactivate vulnerable protocols, configure advanced defense mechanisms at the kernel level, and strengthen local access policies.
            </p>
          </div>
          <InteractiveProcessSection steps={steps} theme="red" />

          <div className="mt-16 max-w-4xl mx-auto p-8 bg-zinc-950 text-white rounded-2xl border border-zinc-800 text-center">
            <h3 className="text-2xl font-bold mb-3">Keystone: Your Partner in IT Security</h3>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
              Keystone supports you in hardening your systems and strengthening their security. Contact us for an in-depth evaluation and optimal securing of your systems.
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
