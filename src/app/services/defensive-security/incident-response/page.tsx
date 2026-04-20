
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactCTASection } from "@/components/about/ContactCTASection";
import { ShieldAlert, Zap, Layers, RefreshCw, ClipboardList } from "lucide-react";

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    
    {
      id: "early-detection",
      title: "Early Threat Detection",
      description: "Identifying vulnerabilities and active threats instantly within the network to contain them before damage is realized.",
      icon: ShieldAlert,
    },
    {
      id: "immediate-action",
      title: "Immediate Intervention",
      description: "Swift deployment of our emergency teams to abruptly stop ongoing attacks and secure critical perimeters.",
      icon: Zap,
    },
    {
      id: "incident-analysis",
      title: "Incident Management",
      description: "A coordinated triage approach to isolate affected systems, identify root causes, and minimize business fallout.",
      icon: Layers,
    },
    {
      id: "recovery",
      title: "Eradication & Recovery",
      description: "Removing the threat from the network entirely and restoring systems back to full operational integrity.",
      icon: RefreshCw,
    },
    {
      id: "post-incident",
      title: "Post-Incident Reporting",
      description: "Applying tactical lessons learned via highly detailed technical reporting to reinforce future security postures.",
      icon: ClipboardList,
    }
    
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
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm font-semibold tracking-wide uppercase">Defensive Security</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
              >
                Incident <wbr/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Response</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl font-light"
              >
                Immediate and decisive action to contain, eradicate, and recover from cybersecurity breaches before they escalate.
              </motion.p>
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
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800" 
                  alt="Incident Response" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

                  <section className="py-24 bg-zinc-50 flex-grow relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.05),transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="mb-16 flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase">Tactical Playbook</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6 uppercase">
              Our Methodology
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl font-medium">
              Discover how our CERT operatives execute high-stakes maneuvers to analyze, contain, and eradicate threats.
            </p>
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
                        ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-red-200 ring-1 ring-red-500/10" 
                        : "bg-transparent hover:bg-white/60 border border-transparent hover:border-zinc-200"
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute left-0 w-1 h-full bg-red-600 rounded-l-xl"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm ${
                      isActive 
                        ? "bg-red-600 text-white shadow-red-600/20" 
                        : "bg-white border border-zinc-200 text-zinc-500 group-hover:text-red-500 group-hover:border-red-200"
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
                           className="text-xs text-red-600 mt-1 font-mono font-medium"
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
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 blur-[100px] rounded-full pointer-events-none" />
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
                        <div className="w-16 h-16 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center shadow-sm">
                          {(() => {
                            const Icon = features[activeTab].icon;
                            return <Icon className="w-8 h-8 text-red-600" />;
                          })()}
                        </div>
                        <div className="text-8xl font-black text-zinc-100 select-none">
                          0{activeTab + 1}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-black text-zinc-900 mb-6 uppercase tracking-tight">
                        {features[activeTab].title}
                      </h3>
                      
                      <div className="w-12 h-1 bg-red-600 mb-8 rounded-full" />
                      
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
      </section>

      <ContactCTASection />
    </main>
  );
}
