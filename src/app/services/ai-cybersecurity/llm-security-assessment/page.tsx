"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Bot, ShieldAlert, FileText, Settings, ShieldCheck, HelpCircle } from "lucide-react";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { DEFCTASection } from "../../defensive-security/soc-management/DEFCTASection";

const steps = [
  {
    id: "recon",
    title: "Model-Specific Analysis",
    description: "We map your LLM architecture, its API endpoints, underlying system prompts, and integrated data sources.",
    icon: <Bot className="w-8 h-8 text-white" />
  },
  {
    id: "pentest",
    title: "Jailbreaking & Injection Simulations",
    description: "Our AI offensive security experts execute direct and indirect prompt injection attacks to bypass security filters and guardrails.",
    icon: <ShieldAlert className="w-8 h-8 text-white" />
  },
  {
    id: "leakage",
    title: "Data Leakage Risk Detection",
    description: "We verify whether sensitive training data (PII, intellectual property) can be extracted through clever prompt extraction techniques.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />
  },
  {
    id: "reporting",
    title: "Full Technical Report (OWASP LLM Top 10)",
    description: "Delivery of a comprehensive remediation plan written by our engineers, ranking vulnerabilities according to the official OWASP Top 10 for LLMs framework.",
    icon: <FileText className="w-8 h-8 text-white" />
  },
  {
    id: "hardening",
    title: "Hardening & Sandboxing Advice",
    description: "Guidance in implementing prompt sanitization solutions, input/output filters, and isolated containerization.",
    icon: <Settings className="w-8 h-8 text-white" />
  }
];

export default function LLMSecurityAssessmentPage() {
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
                  <span className="text-white/90">LLM Security Assessment</span>
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                LLM <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Security Assessment</span>
              </h1>

              <HeroTypeLine
                items={["Prompt injection bypasses", "Preventing data leakage", "OWASP LLM Top 10 guardrails"]}
              />

              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Audit and secure your proprietary or open-source large language models (LLMs) against prompt injections and logic bypass attacks.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25">
                  Schedule an LLM Audit
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl p-2 bg-zinc-900/50 backdrop-blur-md">
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop" alt="LLM Security Assessment" className="rounded-xl w-full object-cover h-[350px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      {/* Interactive Process Section */}
      <InteractiveProcessSection
        title="LLM Audit Methodology"
        description="Discover the rigorous steps of our evaluation to guarantee the integrity of your AI models."
        steps={steps}
      />

      <CyberSectionDivider theme="red" />

      {/* Features & Focus Grid */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-red-600/30"></span>
              What We Cover
              <span className="w-8 h-px bg-red-600/30"></span>
            </h2>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-zinc-900 mb-6">
              Comprehensive Testing Framework
            </h2>
            <p className="text-zinc-600 text-lg">
              Our tests align with the latest standards and cover the entire attack surface of the LLM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Direct Prompt Injection</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Neutralize attacks where the user directly sends disguised malicious instructions to force the LLM to ignore its original system prompts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Indirect Injections</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Prevent attackers from injecting malicious payloads via third-party data sources such as PDF files, parsed web pages, or database records.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Uncontrolled Code Execution</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Secure workflows where LLM agents are authorized to generate and execute code (such as built-in Python interpreters) to prevent host server compromise.
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
