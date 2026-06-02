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
import { DEFCTASection } from "@/app/services/defensive-security/soc-management/DEFCTASection";
import { CallToActionSection } from "@/components/home/CallToActionSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { HeroSection } from "./sections/HeroSection";

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
      <HeroSection />
      <CyberSectionDivider theme="red" />

      {/* Interactive Process Section */}
      <InteractiveProcessSection
        title="LLM Assessment Methodology"
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

      <CallToActionSection />
    </main>
  );
}
