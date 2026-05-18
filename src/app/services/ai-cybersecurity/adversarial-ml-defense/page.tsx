"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldAlert, FileText, Settings, ShieldCheck, HelpCircle } from "lucide-react";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { DEFCTASection } from "../../defensive-security/soc-management/DEFCTASection";

const steps = [
  {
    id: "pipeline",
    title: "Machine Learning Pipeline Audit",
    description: "We map the data flow: from initial ingestion to training, validation, and production model inference.",
    icon: <Settings className="w-8 h-8 text-white" />
  },
  {
    id: "poisoning",
    title: "Poisoning Attack Simulation",
    description: "We test whether attackers can corrupt your decision models by injecting false data during the learning phase.",
    icon: <ShieldAlert className="w-8 h-8 text-white" />
  },
  {
    id: "evasion",
    title: "Evasion & Perturbation Simulations",
    description: "We introduce calculated adversarial perturbations (subtle noise) to evaluate the sensitivity of your production classifiers.",
    icon: <HelpCircle className="w-8 h-8 text-white" />
  },
  {
    id: "robustness",
    title: "Adversarial Robustness Training",
    description: "We apply robust training techniques, incorporating adversarial examples into the training dataset to immunize the model.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />
  },
  {
    id: "reporting",
    title: "Pipeline Hardening Report",
    description: "Delivery of a target hardened architecture schema with concrete recommendations to monitor the integrity of the inference pipeline.",
    icon: <FileText className="w-8 h-8 text-white" />
  }
];

export default function AdversarialMLDefensePage() {
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
                  <span className="text-white/90">Adversarial ML Defense</span>
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Adversarial <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">ML Defense</span>
              </h1>

              <HeroTypeLine
                items={["Data poisoning prevention", "Evasion attack resilience", "Pipeline robustness validation"]}
              />

              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Protect your strategic decision-making algorithms and production classifiers against poisoning, evasion, and model extraction.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25">
                  Secure Your ML Pipelines
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl p-2 bg-zinc-900/50 backdrop-blur-md">
                <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop" alt="Adversarial ML Defense" className="rounded-xl w-full object-cover h-[350px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      {/* Interactive Process Section */}
      <InteractiveProcessSection
        title="ML Hardening Cycle"
        description="A specialized technical accompaniment to immunize your decision-making algorithms in production."
        steps={steps}
      />

      <CyberSectionDivider theme="red" />

      {/* Risks Analyzed */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-red-600/30"></span>
              Targeted Threats
              <span className="w-8 h-px bg-red-600/30"></span>
            </h2>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-zinc-900 mb-6">
              Model Attack Vectors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Data Poisoning</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Prevent attackers from introducing subtle false correlations into your training sets, which allows them to retain a permanent &apos;backdoor&apos; in the model.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Adversarial Evasion</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Protect your security filters, facial recognition models, or fraud classification pipelines from imperceptible input perturbations designed to knowingly deceive the model.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Model Theft</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Block massive inference requests via API (model extraction) designed to cheaply duplicate the logical capabilities of your proprietary model using a surrogate system.
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
