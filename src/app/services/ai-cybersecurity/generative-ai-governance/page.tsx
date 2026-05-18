"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrainCircuit, ShieldAlert, CheckCircle, FileText, Settings, ShieldCheck } from "lucide-react";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { DEFCTASection } from "../../defensive-security/soc-management/DEFCTASection";

const steps = [
  {
    id: "inventory",
    title: "Shadow AI Mapping & Usage Audit",
    description: "We identify unauthorized generative AI services utilized by your employees to prevent silent data exposure.",
    icon: <Settings className="w-8 h-8 text-white" />
  },
  {
    id: "risk",
    title: "Risk & Impact Assessment (DPIA)",
    description: "We analyze the criticality level of AI use cases within your business units to define compliance and control requirements.",
    icon: <ShieldAlert className="w-8 h-8 text-white" />
  },
  {
    id: "policy",
    title: "Charter & AI Policy Drafting",
    description: "We draft clear usage guidelines, defining permitted data, approved models, and operational safety rules.",
    icon: <FileText className="w-8 h-8 text-white" />
  },
  {
    id: "framework",
    title: "Regulatory Alignment (EU AI Act & ISO 42001)",
    description: "We structure your AI governance based on the ISO/IEC 42001 (AIMS) standard and the strict requirements of the EU AI Act.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />
  },
  {
    id: "audit",
    title: "Continuous Ethical & Technical Audits",
    description: "We implement metrics and automated control tools to continuously audit the behavioral drift of your AI deployments.",
    icon: <CheckCircle className="w-8 h-8 text-white" />
  }
];

export default function GenerativeAIGovernancePage() {
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
                  <span className="text-white/90">AI Governance</span>
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Generative AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Governance</span>
              </h1>

              <HeroTypeLine
                items={["Strict EU AI Act alignment", "Shadow AI & IP leakage prevention", "ISO/IEC 42001 implementation"]}
              />

              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Frame and secure the usage of artificial intelligence within your organization to avoid compliance sanctions and protect your proprietary industrial secrets.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25">
                  Structure Your AI Governance
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl p-2 bg-zinc-900/50 backdrop-blur-md">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" alt="Generative AI Governance" className="rounded-xl w-full object-cover h-[350px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      {/* Interactive Process Section */}
      <InteractiveProcessSection
        title="AI Governance Framework"
        description="A structured methodology to deploy artificial intelligence safely and with high compliance."
        steps={steps}
      />

      <CyberSectionDivider theme="red" />

      {/* Governance Pillars */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-red-600/30"></span>
              The 3 Pillars
              <span className="w-8 h-px bg-red-600/30"></span>
            </h2>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-zinc-900 mb-6">
              Controlling AI-Associated Risks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">IP Protection</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Prevent your teams from unintentionally submitting patented designs, proprietary source code, or confidential customer data to third-party public AI systems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">EU AI Act Compliance</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Prepare for European legal obligations. We classify your AI applications by risk tier (unacceptable, high, limited, minimal) and enforce standard compliance requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Transparency & Bias</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Avoid ethical drift and logic-based bias. We assess your models to guarantee fairness, auditability, and explainability to third parties.
              </p>
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
