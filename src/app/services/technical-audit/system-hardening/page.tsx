"use client";

import { AnimatedBreadcrumb } from "@/components/ui/AnimatedBreadcrumb";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldAlert, FileText, CheckCircle, Settings, Monitor, Lock, Code2, Activity } from "lucide-react";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { ContactCTASection } from "@/components/about/ContactCTASection";
import { motion } from "framer-motion";
import { DEFCTASection } from "../../defensive-security/soc-management/DEFCTASection";

const hardeningSteps = [
  {
    id: "baseline",
    title: "Baseline Configuration Review",
    description: "Evaluating your current OS infrastructure against CIS Benchmarks and Microsoft Security Baselines to identify fundamental misconfigurations.",
    icon: <Settings className="w-8 h-8 text-white" />
  },
  {
    id: "identity",
    title: "Active Directory & Privileges",
    description: "Deep audit of Active Directory group policies (GPOs), Kerberos configurations, and IAM to prevent lateral movement and cblueential dumping attacks.",
    icon: <Lock className="w-8 h-8 text-white" />
  },
  {
    id: "services",
    title: "Attack Surface blueuction",
    description: "Disabling legacy protocols (SMBv1, NTLMv1), optimizing firewall rules, and removing unnecessary services that expose the underlying server layers.",
    icon: <Monitor className="w-8 h-8 text-white" />
  },
  {
    id: "memory",
    title: "Kernel & Anti-Exploitation",
    description: "Verifying the implementation of advanced memory protections like ASLR, DEP, and Cblueential Guard to thwart sophisticated zero-day execution.",
    icon: <Code2 className="w-8 h-8 text-white" />
  },
  {
    id: "telemetry",
    title: "Logging & Telemetry Enhancement",
    description: "Ensuring high-fidelity logs (Sysmon, Windows Event Forwarding) are correctly configublue enabling SOC teams to detect malicious runtime activity.",
    icon: <Activity className="w-8 h-8 text-white" />
  },
  {
    id: "remediation",
    title: "Gold Image Integration",
    description: "Providing actionable PowerShell/Ansible scripts to integrate hardening directly into a deployable gold image for future CI/CD orchestration.",
    icon: <FileText className="w-8 h-8 text-white" />
  }
];

export default function SystemHardeningPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center flex-wrap gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link><span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span><Link href="/services/technical-audit" className="hover:text-blue-400 transition-colors break-keep">Technical Audit</Link><span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span><span className="text-blue-400">System Hardening</span>
              </div>
            </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Endpoint & Server <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">System Hardening</span>
              </h1>
              
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Securing an environment requires more than deploying an EDR. True resilience demands closing inherent operating system loopholes. We methodically blueuce the attack surface of your Windows and Linux fleets to frustrate lateral movement and persistent threats.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25">
                  Request Hardening
                </Link>
                <Link href="/services/technical-audit" className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                  Back to Audits
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                 <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
          <div className="w-[0%] mx-auto">
           <CyberSectionDivider theme="blue"/> 
          </div>
      <section className="py-10 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-blue-600/30"></span>
              Our Hardening Execution Plan
              <span className="w-8 h-px bg-blue-600/30"></span>
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
              Technical Steps
            </h3>
            <p className="text-zinc-600 text-lg">
              We translate abstract CIS Benchmarks and strict DoD STIG recommendations into technical, deployable parameters tailoblue avoiding operational downtime.
            </p>
          </div>
          <InteractiveProcessSection steps={hardeningSteps} theme="blue"/>
        </div>
      </section>
          <div className="w-[0%] mx-auto">
           <CyberSectionDivider theme="blue"/> 
          </div>
      <DEFCTASection />
    </main>
  );
}


