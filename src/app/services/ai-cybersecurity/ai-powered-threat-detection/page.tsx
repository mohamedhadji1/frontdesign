"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Radar, ShieldAlert, Settings, ShieldCheck, Zap } from "lucide-react";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { DEFCTASection } from "../../defensive-security/soc-management/DEFCTASection";

const steps = [
  {
    id: "ingest",
    title: "Multi-Source Data Ingestion",
    description: "We connect your system logs, network flows, user identity events, and cloud journals to our intelligent ingestion engine.",
    icon: <Settings className="w-8 h-8 text-white" />
  },
  {
    id: "baseline",
    title: "Reference Profile Learning",
    description: "AI analyzes the normal behavior of your users and applications to establish an adaptive baseline without rigid rules.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />
  },
  {
    id: "anomaly",
    title: "Immediate Drift Detection",
    description: "The moment a behavioral deviation occurs (e.g., massive data exfiltration, suspicious logins), the algorithm instantly flags the activity.",
    icon: <Radar className="w-8 h-8 text-white" />
  },
  {
    id: "response",
    title: "Automated Orchestration & Response (SOAR)",
    description: "AI automatically isolates the compromised host or revokes the suspicious session to limit the impact radius of an active zero-day attack.",
    icon: <Zap className="w-8 h-8 text-white" />
  },
  {
    id: "hunt",
    title: "Assisted Threat Hunting",
    description: "Our SOC engineers leverage predictive insights to proactively hunt for complex threats lingering deep in the network.",
    icon: <ShieldAlert className="w-8 h-8 text-white" />
  }
];

export default function AIPoweredThreatDetectionPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
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
                  <Link href="/services/ai-cybersecurity" className="hover:text-red-300 transition-colors break-keep">AI & Cybersecurity</Link>
                  <span className="text-red-500/30 flex flex-nowrap shrink-0">/</span>
                  <span className="text-white/90">AI-Powered Threat Detection</span>
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Threat Detection</span>
              </h1>

              <HeroTypeLine
                items={["Behavioral threat hunting", "Signature-less proactive detection", "Microsecond response latency"]}
              />

              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Go beyond reactive security. Deploy state-of-the-art machine learning algorithms to detect and neutralize malicious behaviors instantly.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25">
                  Enable AI Detection
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl p-2 bg-zinc-900/50 backdrop-blur-md">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" alt="AI Threat Detection" className="rounded-xl w-full object-cover h-[350px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      {/* Interactive Process Section */}
      <InteractiveProcessSection
        title="Intelligent Detection Mechanism"
        description="A complete adaptive learning pipeline built to identify the most subtle weak signals of incoming attacks."
        steps={steps}
      />

      <CyberSectionDivider theme="red" />

      {/* Why it matters section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-red-600/30"></span>
              Key Benefits
              <span className="w-8 h-px bg-red-600/30"></span>
            </h2>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-zinc-900 mb-6">
              Strategic Predictive Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100 flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Signature-Less Protection</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Unlike conventional antivirus and SIEM setups, our AI doesn&apos;t wait for a malware signature to be published before acting. It identifies anomalies in live execution or network behavior.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100 flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Reduced False Positives</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  The AI correlates isolated, low-fidelity signals that would otherwise look normal on their own, recognizing coordinate attack patterns once mapped together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      <DEFCTASection />

      <Footer />
    </main>
  );
}
