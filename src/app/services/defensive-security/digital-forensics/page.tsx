
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Search, Cpu, Activity, Database, Gavel } from "lucide-react";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { DEFCTASection } from "../soc-management/DEFCTASection";

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    
    {
      id: "deep-forensic",
      title: "Deep Forensic Analysis",
      description: "Extract and examine detailed storage and volatile data memory to understand the origin and exact impact of incidents.",
      icon: Search,
    },
    {
      id: "attack-id",
      title: "Attack & Compromise Identification",
      description: "Our experts identify vectors of attack, intrusion schemas, and compromised points to prevent future intrusions.",
      icon: Activity,
    },
    {
      id: "timeline",
      title: "Event Timeline Reconstruction",
      description: "We reconstruct event sequences chronologically to understand exactly how and why the incident occurred.",
      icon: Cpu,
    },
    {
      id: "evidence",
      title: "Digital Evidence Collection",
      description: "Collect and analyze artifacts like logs, metadata, and systemic files to support internal and external actions.",
      icon: Database,
    },
    {
      id: "reporting",
      title: "Expert Testimony & Reporting",
      description: "Provide detailed technical discoveries, clear explanations, and expert testimony for legal or internal proceedings.",
      icon: Gavel,
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
                  <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link><span className="text-blue-500/50">/</span><Link href="/services/defensive-security" className="hover:text-blue-400 transition-colors">Defensive Security</Link><span className="text-blue-500/50">/</span><span className="text-blue-400">Digital Forensics</span>
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
              >
                Digital <wbr/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Forensics</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl font-light mx-auto"
              >
                Keystone conducts in-depth forensic analysis to collect, preserve, and analyze digital evidence, identifying intrusion schemas and origins.
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
                  src="https://images.unsplash.com/photo-1614064641913-a520faff3f89?auto=format&fit=crop&q=80&w=800" 
                  alt="Digital Forensics" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

          <CyberSectionDivider theme="blue" />
        
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-10 bg-zinc-50 flex-grow relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.05),transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="mt-5 ">
            <div className="max-w-3xl mb-16 text-center mx-auto">
              <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
                <span className="w-8 h-px bg-blue-600/30"></span>
                Tactical Playbook
                <span className="w-8 h-px bg-blue-600/30"></span>
              </h2>
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
                Technical Steps
              </h3>
              <p className="text-zinc-600 text-lg">
                Discover how our CERT operatives execute high-stakes maneuvers to analyze, contain, and eradicate threats. From initial evidence collection to final reporting, we follow a meticulous process to ensure no detail is overlooked in our forensic investigations.
              </p>
            </div>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Interactive Tabs */}
            <div className="lg:col-span-5 flex flex-col gap-3 relative">
              <div className="absolute left-6 top-8 bottom-8 w-px bg-zinc-200 hidden lg:block" />
              {features.map((feature, index) => {
                const isActive = activeTab === index;
                const Icon = feature.icon;

                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(index)}
                    className={`group relative flex items-center gap-5 p-4 rounded-xl text-left transition-all duration-300 ${
                      isActive 
                        ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-200 ring-1 ring-blue-500/10" 
                        : "bg-transparent hover:bg-white/60 border border-transparent hover:border-zinc-200"
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute left-0 w-1 h-full bg-blue-600 rounded-l-xl"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm ${
                      isActive 
                        ? "bg-blue-600 text-white shadow-blue-600/20" 
                        : "bg-white border border-zinc-200 text-zinc-500 group-hover:text-blue-500 group-hover:border-blue-200"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div>
                      <h3 className={`font-bold text-sm md:text-base tracking-wide uppercase transition-colors duration-300 ${
                        isActive ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-700"
                      }`}>
                        {feature.title}
                      </h3>
                      {isActive && (
                         <motion.p 
                           initial={{ opacity: 0, height: 0 }}
                           animate={{ opacity: 1, height: 'auto' }}
                           className="text-xs text-blue-600 mt-1 font-mono font-medium"
                         >
                           PHASE 0{index + 1} // ACTIVE
                         </motion.p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Display Panel */}
            <div className="lg:col-span-7 h-full min-h-[450px]">
              <div className="relative h-full rounded-3xl bg-white border border-zinc-200/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="p-8 lg:p-12 relative z-10 h-full flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="flex items-center justify-between mb-10">
                        <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center shadow-sm">
                          {(() => {
                            const Icon = features[activeTab].icon;
                            return <Icon className="w-8 h-8 text-blue-600" />;
                          })()}
                        </div>
                        <div className="text-8xl font-black text-zinc-100 select-none">
                          0{activeTab + 1}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-black text-zinc-900 mb-6 uppercase tracking-tight">
                        {features[activeTab].title}
                      </h3>
                      
                      <div className="w-12 h-1 bg-blue-600 mb-8 rounded-full" />
                      
                      <p className="text-lg text-zinc-600 leading-relaxed">
                        {features[activeTab].description}
                      </p>
                      
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      <CyberSectionDivider theme="blue"/>
      <DEFCTASection />
    </main>
  );
}
