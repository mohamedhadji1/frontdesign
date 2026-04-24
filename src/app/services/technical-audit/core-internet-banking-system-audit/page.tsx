"use client";

import { AnimatedBreadcrumb } from "@/components/ui/AnimatedBreadcrumb";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldAlert, FileText, Search, ShieldCheck, Activity, Key, CreditCard } from "lucide-react";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { ContactCTASection } from "@/components/about/ContactCTASection";
import { motion } from "framer-motion";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { DEFCTASection } from "../../defensive-security/soc-management/DEFCTASection";
import { RedTeamCTASection } from "../../red-team/sections/RedTeamCTASection";

const coreBankingSteps = [
  {
    id: "modeling",
    title: "Architecture & Threat Modeling",
    description: "Mapping the core banking ecosystem (Eftpos, SWIFT interfaces, settlement modules) to identify trust boundaries, isolation flaws, and entry points.",
    icon: <Search className="w-8 h-8 text-white" />
  },
  {
    id: "logic",
    title: "Business Logic Vulnerability Assessment",
    description: "Deep dive into race conditions, logic bypasses, and rounding errors that could lead to unauthorized fund transfers or transaction manipulation.",
    icon: <Activity className="w-8 h-8 text-white" />
  },
  {
    id: "cryptography",
    title: "Cryptography & Key Management",
    description: "Assessing the implementation of HSMs, TLS termination, and PIN translation zones to ensure absolute data confidentiality in transit and at rest.",
    icon: <Key className="w-8 h-8 text-white" />
  },
  {
    id: "compliance",
    title: "Regulatory & PCI-DSS Compliance",
    description: "Evaluating the infrastructure against central banking regulations and international payment standards such as PCI-DSS and SWIFT CSP.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />
  },
  {
    id: "api",
    title: "API & Middleware Security",
    description: "Testing internal and open-banking APIs for Broken Object Level Authorization (BOLA), mass assignment, and injection flaws.",
    icon: <CreditCard className="w-8 h-8 text-white" />
  },
  {
    id: "reporting",
    title: "Executive & Technical Reporting",
    description: "Delivering prioritized remediation steps targeting both infrastructure engineers and C-level compliance stakeholders.",
    icon: <FileText className="w-8 h-8 text-white" />
  }
];

export default function CoreBankingAuditPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center flex-wrap gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                <Link href="/services" className="hover:text-red-400 transition-colors">Services</Link><span className="text-red-500/50 flex flex-nowrap shrink-0">/</span><Link href="/services/technical-audit" className="hover:text-red-400 transition-colors break-keep">Technical Audit</Link><span className="text-red-500/50 flex flex-nowrap shrink-0">/</span><span className="text-red-400">Core Internet Banking System Audit</span>
              </div>
            </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Securing the Financial Core: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Banking Systems Audit</span>
              </h1>
              <HeroTypeLine
                items={["Core banking assurance", "Transaction logic review", "Financial platform hardening"]}
              />
              
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                The core banking system is the critical nervous system of any financial institution. Our elite technical audits dive deep into transaction logic, API integration, and cryptographic protocols to prevent exploitation and ensure strict regulatory alignment.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25">
                  Schedule an Audit
                </Link>
                <Link href="/services/technical-audit" className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                  Back to Audits
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                 <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <CyberSectionDivider theme="red"/>
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-10 bg-zinc-50">
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-red-600/30"></span>
              Advanced Methodology for Financial Platforms
              <span className="w-8 h-px bg-red-600/30"></span>
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
              Technical Steps
            </h3>
            <p className="text-zinc-600 text-lg mb-8">
              We leverage specialized testing scenarios including transaction manipulation, HSM validation, and strict isolation testing to ensure zero-defect resilience.
            </p>
            
          </div>
          <InteractiveProcessSection steps={coreBankingSteps} theme="red"/>
        </div>
      </motion.section>
      <div className="width-10% mx-auto">
      <CyberSectionDivider theme="red"/>
      </div>
      <RedTeamCTASection />
    </main>
  );
}
