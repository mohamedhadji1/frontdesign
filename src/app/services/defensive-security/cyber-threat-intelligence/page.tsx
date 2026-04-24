"use client";

import { AnimatedBreadcrumb } from "@/components/ui/AnimatedBreadcrumb";
import React from "react";
import Link from "next/link";
import { DEFCTASection } from "../soc-management/DEFCTASection";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { ShieldAlert, Activity, Search, Terminal, Siren, Globe, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

const steps = [
  {
    "id": "collection",
    "title": "Data Collection & Dark Web Monitoring",
    "description": "Continuous surveillance of OSINT, dark markets, and threat actor forums for leaked credentials or targeted campaigns.",
    "icon": <Globe className="w-8 h-8 text-white" />
  },
  {
    "id": "analysis",
    "title": "Strategic Analysis",
    "description": "Filtering noise to deliver high-fidelity IOCs (Indicators of Compromise) and TTPs (Tactics, Techniques, and Procedures).",
    "icon": <Search className="w-8 h-8 text-white" />
  },
  {
    "id": "integration",
    "title": "Tactical Integration",
    "description": "Feeding curated threat intelligence directly into your firewalls, IDS/IPS, and EDR solutions for automated blocking.",
    "icon": <Activity className="w-8 h-8 text-white" />
  }
];

export default function Page() {
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
              className="inline-flex items-center flex-wrap gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link><span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span><Link href="/services/defensive-security" className="hover:text-blue-400 transition-colors break-keep">Defensive Security</Link><span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span><span className="text-blue-400">Cyber Threat Intelligence</span>
              </div>
            </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Cyber <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Threat Intelligence</span>
              </h1>

              <HeroTypeLine
                items={["Dark web monitoring", "Actionable intelligence feeds", "Threat visibility before impact"]}
                className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-400"
              />
              
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Empower your security posture with actionable intelligence. We monitor the dark web, malicious infrastructure, and geopolitical trends to anticipate attacks tailored to your industry.
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
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop" 
                  alt="Cyber Threat Intelligence" 
                  className="w-full h-[400px] rounded-xl object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Our Defensive Approach
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-6" />
            <p className="text-zinc-600 text-lg">
              A rigorous methodology to bolster your resilience against cyber threats with cutting-edge telemetry, detection, and intelligence capabilities.
            </p>
          </div>
          <InteractiveProcessSection steps={steps} />
        </div>
      </motion.section>

      <DEFCTASection />
      
    </main>
  );
}
