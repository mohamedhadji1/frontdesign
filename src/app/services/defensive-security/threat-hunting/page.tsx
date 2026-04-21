
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { Target, Scan, ShieldAlert, Crosshair, Network, Activity, Search, Users } from "lucide-react";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { DEFCTASection } from "../soc-management/DEFCTASection";

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);


  const features = [
    {
      id: "behavioral-analysis",
      title: "Advanced Behavioral Analysis",
      description: "We identify unusual or suspicious activities by monitoring the behavior of users, processes, and systems to detect potential threat patterns.",
      icon: <Activity />,
    },
    {
      id: "specialized-tools",
      title: "Use of Specialized Tools",
      description: "Our team deploys sophisticated intrusion detection and log analysis tools to dig deep into anomalies and search for indicators of compromise (IoCs).",
      icon: <Search />,
    },
    {
      id: "threat-intelligence",
      title: "Threat Intelligence",
      description: "By leveraging Threat Intelligence feeds, we stay up-to-date on the latest tactics, techniques, and procedures (TTPs) of attackers.",
      icon: <Network />,
    },
    {
      id: "proactive-hunting",
      title: "Proactive Threat Hunting",
      description: "Rather than waiting for security alerts, our team actively hunts for threats within the IT environment.",
      icon: <Target />,
    },
    {
      id: "collaboration",
      title: "Collaboration & Information Sharing",
      description: "We work closely with internal security teams to share information about emerging threats.",
      icon: <Users />,
    },
  ];


  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
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
                              className="inline-flex items-center flex-wrap gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6"
                            >
                              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                              <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                                <Link href="/services" className="hover:text-red-400 transition-colors">Services</Link><span className="text-red-500/50">/</span><Link href="/services/defensive-security" className="hover:text-red-400 transition-colors">Defensive Security</Link><span className="text-red-500/50">/</span><span className="text-red-400">Threat Hunting</span>
                              </div>
                            </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
              >
                Threat <wbr/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Hunting</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl font-light mx-auto"
              >
                Our cybersecurity experts proactively hunt for hidden threats in our clients' networks before they can cause harm to the environment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-4 justify-center"
              >
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_-5px_rgba(220,38,38,0.7)] flex items-center gap-2">
                  Explore Services
                </button>
              </motion.div>
            </div>

            <div className="lg:w-1/2 w-full mt-12 lg:mt-0 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/30 to-transparent blur-3xl rounded-full opacity-70" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 aspect-video lg:aspect-[4/3] group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent z-10 opacity-80" />
                <div className="absolute inset-0 bg-red-900/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay" />
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800" 
                  alt="Threat Hunting" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

            <InteractiveProcessSection 
        title="Our Methodology" 
        description="Discover how our CERT operatives execute high-stakes maneuvers to analyze, contain, and eradicate threats." 
        steps={features} 
        theme="red" 
      />
      <CyberSectionDivider theme="blue" />
      <DEFCTASection />
    </main>
  );
}
