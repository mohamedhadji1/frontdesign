
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { ShieldAlert, Zap, Layers, RefreshCw, ClipboardList } from "lucide-react";
import { DEFCTASection } from "../soc-management/DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [

    {
      id: "early-detection",
      title: "Early Threat Detection",
      description: "Identifying vulnerabilities and active threats instantly within the network to contain them before damage is realized.",
      icon: <ShieldAlert />,
    },
    {
      id: "immediate-action",
      title: "Immediate Intervention",
      description: "Swift deployment of our emergency teams to abruptly stop ongoing attacks and secure critical perimeters.",
      icon: <Zap />,
    },
    {
      id: "incident-analysis",
      title: "Incident Management",
      description: "A coordinated triage approach to isolate affected systems, identify root causes, and minimize business fallout.",
      icon: <Layers />,
    },
    {
      id: "recovery",
      title: "Eradication & Recovery",
      description: "Removing the threat from the network entirely and restoring systems back to full operational integrity.",
      icon: <RefreshCw />,
    },
    {
      id: "post-incident",
      title: "Post-Report an incidenting",
      description: "Applying tactical lessons learned via highly detailed technical reporting to reinforce future security postures.",
      icon: <ClipboardList />,
    }

  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#09090b]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-center flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center flex-wrap gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                  <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link><span className="text-blue-500/50">/</span><Link href="/services/defensive-security" className="hover:text-blue-400 transition-colors">Defensive Security</Link><span className="text-blue-500/50">/</span><span className="text-blue-400">Incident Response</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
              >
                Incident <wbr /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Response</span>
              </motion.h1>
              <HeroTypeLine
                items={["Containment first", "Coordinated eradication", "Recovery with speed and clarity"]}
                className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-400"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl font-light mx-auto"
              >
                Immediate and decisive action to contain, eradicate, and recover from cybersecurity breaches before they escalate.
              </motion.p>
            </div>

            <div className="lg:w-1/2 w-full mt-12 lg:mt-0 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 to-transparent blur-3xl rounded-full opacity-70" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 aspect-video lg:aspect-[4/3] group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent z-10 opacity-80" />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay" />
                <img
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800"
                  alt="Incident Response"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <CyberSectionDivider theme="blue" />
      <div className="mt-10 ">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <motion.h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-blue-600/30"></span>
            Our Methodology
            <span className="w-8 h-px bg-blue-600/30"></span>
          </motion.h2>
          <motion.h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
            Technical Steps
          </motion.h2>
          <p className="text-zinc-600 text-lg">
            From initial evidence collection to final reporting, we follow a meticulous process to ensure no detail is overlooked in our forensic investigations.
          </p>
        </div>
      </div>
      <InteractiveProcessSection
        title="Our Methodology"
        description="Discover how our CERT operatives execute high-stakes maneuvers to analyze, contain, and eradicate threats."
        steps={features}
        theme="blue"
      />
      <CyberSectionDivider theme="blue" />
      <DEFCTASection />
    </main>
  );
}
