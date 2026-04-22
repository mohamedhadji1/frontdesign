"use client";

import { AnimatedBreadcrumb } from "@/components/ui/AnimatedBreadcrumb";
import React from "react";
import Link from "next/link";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { ShieldAlert, Activity, Search, Terminal, Siren, Globe, Eye, AlertCircle, MailWarning, ArrowRight } from "lucide-react";
import { CombinedDeepDive } from "./CombinedDeepDive";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { motion } from "framer-motion";
import { DEFCTASection } from "../soc-management/DEFCTASection";

const steps = [
  {
    "id": "cert-strategy",
    "title": "CERT Strategy & Design",
    "description": "We establish a core roadmap defining the scope, mandate, and authority of your future CERT. We align its operational capabilities with your business objectives, regulatory landscape, and specific industry threats to ensure a structured, fully integrated security function.",
    "icon": <Activity className="w-8 h-8 text-white" />
  },
  {
    "id": "team-structure",
    "title": "Team Structuring & Staffing",
    "description": "Building a CERT requires top-tier expertise. We assist in defining role descriptions, establishing skill requirements, creating hiring strategies, and structuring the team into L1, L2, and L3 analyst tiers for optimal escalation and investigation capabilities.",
    "icon": <Search className="w-8 h-8 text-white" />
  },
  {
    "id": "tooling-architecture",
    "title": "Tooling & Architecture",
    "description": "We evaluate, select, and deploy the optimal technology stack for your CERT. From SIEM systems and SOAR platforms for automation to high-fidelity Endpoint Detection and Response (EDR) solutions, we build an architecture tailored to rapid incident containment.",
    "icon": <Terminal className="w-8 h-8 text-white" />
  },
  {
    "id": "process-playbooks",
    "title": "Incident Playbooks",
    "description": "A rapid response requires predefined procedures. We develop customized incident response playbooks for scenarios ranging from ransomware infections to insider threats, standardizing your team's reaction times and reducing decision fatigue during a crisis.",
    "icon": <ShieldAlert className="w-8 h-8 text-white" />
  }
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2 text-center lg:text-center flex flex-col items-center">
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center flex-wrap gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link><span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span><Link href="/services/defensive-security" className="hover:text-blue-400 transition-colors break-keep">Defensive Security</Link><span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span><span className="text-blue-400">Implementation Cert</span>
              </div>
            </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Implementation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">CERT</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-400 font-light mb-10 max-w-2xl">
                Keystone provides expert consulting, framework deployment, and technical implementation 
                to help your organization build, launch, and mature a Computer Emergency Response Team (CERT) customized to your threat landscape.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25">
                  Secure Your Defenses
                </Link>
                <Link href="/services" className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                  View All Services
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
                  alt="SOC Management" 
                  className="w-full h-[400px] rounded-xl object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="mt-10">
            <div className="max-w-3xl mb-16 text-center mx-auto">
              <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
                <span className="w-8 h-px bg-blue-600/30"></span>
                Our CERT IMPLEMENTATION Methodology
                <span className="w-8 h-px bg-blue-600/30"></span>
              </h2>
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
                Technical Steps
              </h3>
              <p className="text-zinc-600 text-lg">
                A rigorous, step-by-step technical methodology to validate the security posture and compliance of your modern cloud workloads (AWS, Azure, GCP).
              </p>
            </div>
        </div>
      <InteractiveProcessSection 
        title="Our Defensive Approach"
        description="A rigorous methodology to bolster your resilience against cyber threats with cutting-edge telemetry, detection, and intelligence capabilities."
        steps={steps} 
        theme="blue"
      />
        <CyberSectionDivider className="mx-auto width-[0%]" theme="blue"/>

      <section className="bg-zinc-50 mt-20">
        <CombinedDeepDive />
      </section>

      <CyberSectionDivider theme="blue" />

      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center flex-wrap gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link><span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span><Link href="/services/defensive-security" className="hover:text-blue-400 transition-colors break-keep">Defensive Security</Link><span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span><span className="text-blue-400">Implementation Cert</span>
              </div>
            </motion.div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 mb-6">
              Discover Our Defensive Services
            </h2>
            <p className="text-neutral-600 xl:text-lg max-w-2xl mx-auto">
              Strengthen your organization's resilience by exploring our specialized security and investigation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/services/defensive-security/threat-hunting"
              className="group block p-8 bg-zinc-50 border border-neutral-200 rounded-2xl hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <Search className="w-10 h-10 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Threat Hunting</h3>
              <p className="text-neutral-600 mb-6 text-sm">Proactively detect hidden adversaries across your networks.</p>
              <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link 
              href="/services/defensive-security/digital-forensics"
              className="group block p-8 bg-zinc-50 border border-neutral-200 rounded-2xl hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <Terminal className="w-10 h-10 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Digital Forensics</h3>
              <p className="text-neutral-600 mb-6 text-sm">Gather & investigate digital evidence post-breach.</p>
              <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link 
              href="/services/defensive-security/virtual-ciso-dpo"
              className="group block p-8 bg-zinc-50 border border-neutral-200 rounded-2xl hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <Siren className="w-10 h-10 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Virtual CISO & DPO</h3>
              <p className="text-neutral-600 mb-6 text-sm">Strategic cybersecurity leadership and compliance management.</p>
              <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link 
              href="/services/defensive-security/malware-analysis"
              className="group block p-8 bg-zinc-50 border border-neutral-200 rounded-2xl hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <ShieldAlert className="w-10 h-10 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Malware Analysis</h3>
              <p className="text-neutral-600 mb-6 text-sm">Dissect and reverse-engineer malicious payloads.</p>
              <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CyberSectionDivider theme="blue" />

      <DEFCTASection />
      
    </main>
  );
}
