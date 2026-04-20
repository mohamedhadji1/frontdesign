
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactCTASection } from "@/components/about/ContactCTASection";
import { Award, Route, FileCheck, ShieldAlert, Handshake, Search, Activity, Eye, DownloadCloud, FileWarning, Ghost } from "lucide-react";

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);


  const features = [
    {
      id: "high-expert",
      title: "High-Level Expertise",
      description: "Our Virtual CISOs & DPOs bring deep expertise in information security and data protection, providing strategic guidance and standard-compliant directives.",
      icon: Award,
    },
    {
      id: "governance",
      title: "Governance & Strategy",
      description: "They work closely with your executive team to develop security and compliance strategies aligned with your business goals.",
      icon: Route,
    },
    {
      id: "compliance",
      title: "Regulatory Compliance",
      description: "Our consultants ensure that your enterprise complies with applicable regulations such as GDPR, thus ensuring compliant data management.",
      icon: FileCheck,
    },
    {
      id: "crisis",
      title: "Crisis Management & Incident Response",
      description: "They are ready to intervene in the event of a crisis or security incident, establishing emergency plans and coordinating actions to minimize damage.",
      icon: ShieldAlert,
    },
    {
      id: "support",
      title: "Continuous Support",
      description: "Our Virtual CISO & DPO provide you with ongoing support, helping you navigate a constantly evolving landscape of threats and regulations.",
      icon: Handshake,
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
                Virtual CISO <wbr/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">& DPO</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl font-light"
              >
                At Keystone, our Virtual CISO & DPO service offers strategic expertise in information security and data protection. Our experienced consultants act as virtual partners to guarantee the security and compliance of your organization.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-4"
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
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                  alt="Virtual CISO & DPO" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 flex-grow border-b border-zinc-200/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Our Methodology
            </h2>
            <div className="h-1.5 w-20 bg-red-600 rounded-full mb-6" />
            <p className="text-zinc-600 text-lg max-w-2xl">
              Discover how our service operates in detail to analyze and counter every threat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 flex flex-col gap-3">
              {features.map((feature, index) => {
                const isActive = activeTab === index;
                const Icon = feature.icon;

                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(index)}
                    className={`group relative flex items-center justify-between gap-4 p-5 rounded-2xl text-left transition-all duration-300 ${
                      isActive 
                        ? "bg-white shadow-lg shadow-zinc-200/50 border border-zinc-200" 
                        : "hover:bg-zinc-200/50 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          isActive ? "bg-red-50 text-red-600" : "bg-zinc-100 text-zinc-500 group-hover:bg-white group-hover:text-red-500"
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className={`font-semibold text-lg transition-colors ${
                            isActive ? "text-red-700" : "text-zinc-700 group-hover:text-zinc-900"
                          }`}>
                            {feature.title}
                          </h3>
                        </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7 relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-zinc-200/50 border border-zinc-100 flex flex-col justify-center min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8 border border-red-100">
                    {React.createElement(features[activeTab].icon, { className: "w-8 h-8 text-red-600" })}
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900 mb-6 leading-tight">
                    {features[activeTab].title}
                  </h3>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    {features[activeTab].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>



      <section className="py-24 lg:py-32 bg-zinc-50 border-t border-b border-zinc-200/50 overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          
          <div className="mb-16 md:text-center md:flex md:flex-col md:items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100/50 border border-red-200 text-red-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-sm font-bold tracking-widest uppercase">Proactive Defense</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Dark Web Monitoring</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 max-w-3xl leading-relaxed">
              We illuminate the darkest corners of the web. Discover, track, and neutralize threats before they impact your organization with our enterprise-grade intelligence platform.
            </p>
          </div>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6">
            
            {/* BIG HERO CARD - Dark Web Search Engine */}
            <div className="md:col-span-2 md:row-span-2 bg-zinc-950 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.25),transparent_60%)]" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-600/20 blur-[80px] rounded-full group-hover:bg-red-500/30 transition-all duration-700" />
              
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 mb-8 shadow-inner">
                   <Search className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-md">Dark Web Search Engine</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed font-light">Execute secure, anonymized queries across hidden networks. Detect mentions of your brand, executives, or IP in real-time before an attack materializes.</p>
                </div>
              </div>
            </div>

            {/* WIDE CARD TOP RIGHT - Continuous Monitoring */}
            <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 lg:p-10 border border-zinc-200 shadow-xl shadow-zinc-200/40 group hover:shadow-red-500/10 hover:border-red-200 transition-all duration-500 relative overflow-hidden flex flex-col justify-center">
               <div className="absolute right-[-10%] top-[-10%] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700">
                 <Eye className="w-64 h-64 text-red-900 transform -rotate-12" />
               </div>
               <div className="relative z-10">
                 <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 border border-red-100">
                   <Eye className="w-7 h-7" />
                 </div>
                 <h3 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">Continuous Auditing</h3>
                 <p className="text-zinc-600 leading-relaxed text-lg">Learn immediately if your sensitive information ends up on the dark web so you can pivot your defenses instantly.</p>
               </div>
            </div>

            {/* SMALL CARD 1 - Data Retrieval */}
            <div className="bg-gradient-to-br from-red-800 to-red-950 rounded-[2.5rem] p-8 shadow-2xl shadow-red-900/20 text-white relative overflow-hidden group hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 min-h-[220px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
              <div className="relative z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 mb-6">
                 <DownloadCloud className="w-6 h-6 text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 tracking-tight">Data Retrieval</h3>
                <p className="text-red-200 text-sm leading-relaxed">Securely extract exposed data before it weaponizes.</p>
              </div>
            </div>

            {/* SMALL CARD 2 - Stealer Logs */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-zinc-200 shadow-xl shadow-zinc-200/40 group hover:-translate-y-2 hover:shadow-red-500/10 hover:border-red-200 transition-all duration-500 min-h-[220px] flex flex-col justify-between">
               <div className="w-12 h-12 bg-zinc-100 text-zinc-800 group-hover:bg-red-50 group-hover:text-red-600 rounded-xl flex items-center justify-center border border-zinc-200 group-hover:border-red-200 transition-colors mb-6">
                 <FileWarning className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-zinc-900 mb-2 tracking-tight">Stealer Logs</h3>
                 <p className="text-zinc-600 text-sm leading-relaxed">Detect compromised machines via early malware log parsing.</p>
               </div>
            </div>

            {/* BOTTOM LEFT WIDE - Activity Tracker */}
            <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 lg:p-10 border border-zinc-200 shadow-xl shadow-zinc-200/40 group hover:shadow-red-500/10 hover:border-red-200 transition-all duration-500 flex flex-col justify-center min-h-[220px]">
               <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-8">
                 <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center border border-red-100 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
                   <Activity className="w-8 h-8" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">Activity Tracker</h3>
                   <p className="text-zinc-600 leading-relaxed text-base">Monitor ransomware groups and known threat actors operating on hidden forums to anticipate extortion attempts.</p>
                 </div>
               </div>
            </div>

            {/* BOTTOM RIGHT WIDE - Threat Actor Engagement */}
            <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 lg:p-10 border border-zinc-200 shadow-xl shadow-zinc-200/40 group hover:shadow-red-500/10 hover:border-red-200 transition-all duration-500 flex flex-col justify-center min-h-[220px]">
               <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-8">
                 <div className="w-16 h-16 bg-zinc-100 text-zinc-700 group-hover:bg-red-50 group-hover:text-red-600 rounded-2xl flex items-center justify-center border border-zinc-200 group-hover:border-red-100 flex-shrink-0 transition-colors duration-500">
                   <Ghost className="w-8 h-8" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">Actor Engagement</h3>
                   <p className="text-zinc-600 leading-relaxed text-base">Safely engage and track threat actors in their native environments to gather actionable intelligence.</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section> 

      <ContactCTASection />
      <Footer />
    </main>
  );
}
