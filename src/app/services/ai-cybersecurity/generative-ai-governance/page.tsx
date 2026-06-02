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
import { DEFCTASection } from "@/app/services/defensive-security/soc-management/DEFCTASection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { HeroSection } from "./sections/HeroSection";

const steps = [
  {
    id: "inventory",
    title: "Shadow AI Mapping & Usage Assessment",
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
    id: "assessment",
    title: "Continuous Ethical & Technical Assessments",
    description: "We implement metrics and automated control tools to continuously assessment the behavioral drift of your AI deployments.",
    icon: <CheckCircle className="w-8 h-8 text-white" />
  }
];

export default function GenerativeAIGovernancePage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <HeroSection />
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
