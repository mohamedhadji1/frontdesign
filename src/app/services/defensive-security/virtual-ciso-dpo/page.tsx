
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { Award, Route, FileCheck, ShieldAlert, Handshake, Search, Activity, Eye, DownloadCloud, FileWarning, Ghost } from "lucide-react";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { DEFCTASection } from "../soc-management/DEFCTASection";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);


  const features = [
    {
      id: "high-expert",
      title: "High-Level Expertise",
      description: "Our Virtual CISOs & DPOs bring deep expertise in information security and data protection, providing strategic guidance and standard-compliant directives.",
      icon: <Award />,
    },
    {
      id: "governance",
      title: "Governance & Strategy",
      description: "They work closely with your executive team to develop security and compliance strategies aligned with your business goals.",
      icon: <Route />,
    },
    {
      id: "compliance",
      title: "Regulatory Compliance",
      description: "Our consultants ensure that your enterprise complies with applicable regulations such as GDPR, thus ensuring compliant data management.",
      icon: <FileCheck />,
    },
    {
      id: "crisis",
      title: "Crisis Management & Incident Response",
      description: "They are ready to intervene in the event of a crisis or security incident, establishing emergency plans and coordinating actions to minimize damage.",
      icon: <ShieldAlert />,
    },
    {
      id: "support",
      title: "Continuous Support",
      description: "Our Virtual CISO & DPO provide you with ongoing support, helping you navigate a constantly evolving landscape of threats and regulations.",
      icon: <Handshake />,
    },
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
                  <Link href="/services" className="hover:text-red-400 transition-colors">Services</Link><span className="text-red-500/50">/</span><Link href="/services/defensive-security" className="hover:text-blue-400 transition-colors">Defensive Security</Link><span className="text-blue-500/50">/</span><span className="text-blue-400">Virtual CISO DPO</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
              >
                Virtual CISO <wbr /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">& DPO</span>
              </motion.h1>
              <HeroTypeLine
                items={["Security leadership on demand", "Data protection guidance", "Governance without full-time overhead"]}
                className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-400"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl font-light mx-auto"
              >
                At Keystone, our Virtual CISO & DPO service offers strategic expertise in information security and data protection. Our experienced consultants act as virtual partners to guarantee the security and compliance of your organization.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-4 justify-center"
              >
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.7)] flex items-center gap-2">
                  Explore Services
                </button>
              </motion.div>
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
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                  alt="Virtual CISO & DPO"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <CyberSectionDivider theme="blue" />
      <div className="mt-10">
        <motion.h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
          <span className="w-8 h-px bg-blue-600/30"></span>
          Our Methodology
          <span className="w-8 h-px bg-blue-600/30"></span>
        </motion.h2>
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <motion.h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Our Defensive Approach
          </motion.h2>
          <p className="text-zinc-600 text-lg">
            Discover how our service operates in detail to analyze and counter every threat.
          </p>
        </div>
      </div>
      <InteractiveProcessSection
        title="Our Methodology"
        description="Discover how our service operates in detail to analyze and counter every threat."
        steps={features}
        theme="blue"
      />


      <CyberSectionDivider theme="blue" />
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-10 lg:py-10 bg-zinc-50 border-t border-b border-zinc-200/50 overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <motion.h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-blue-600/30"></span>
              PROACTIVE DEFENSE
              <span className="w-8 h-px bg-blue-600/30"></span>
            </motion.h2>
            <motion.h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
              Advanced Dark Web Monitoring
            </motion.h2>
            <p className="text-zinc-600 text-lg">
              We illuminate the darkest coners of the web. Discover, track, and neutralize threats before they impact your business with our enterprise-grade intelligence platform.
            </p>
          </div>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6">

            {/* BIG HERO CARD - Dark Web Search Engine */}
            <div className="md:col-span-2 md:row-span-2 bg-zinc-950 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.25),transparent_60%)]" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/20 blur-[80px] rounded-full group-hover:bg-blue-500/30 transition-all duration-700" />

              <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 mb-8 shadow-inner">
                  <Search className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <motion.h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-md">Dark Web Search Engine</motion.h2>
                  <p className="text-zinc-400 text-lg leading-relaxed font-light">Execute secure, anonymized queries across hidden networks. Detect mentions of your brand, executives, or IP in real-time before an attack materializes.</p>
                </div>
              </div>
            </div>

            {/* WIDE CARD TOP RIGHT - Continuous Monitoring */}
            <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 lg:p-10 border border-zinc-200 shadow-xl shadow-zinc-200/40 group hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-500 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute right-[-10%] top-[-10%] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700">
                <Eye className="w-64 h-64 text-blue-900 transform -rotate-12" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
                  <Eye className="w-7 h-7" />
                </div>
                <motion.h2 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">Continuous Assessmenting</motion.h2>
                <p className="text-zinc-600 leading-relaxed text-lg">Learn immediately if your sensitive information ends up on the dark web so you can pivot your defenses instantly.</p>
              </div>
            </div>

            {/* SMALL CARD 1 - Data Retrieval */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-950 rounded-[2.5rem] p-8 shadow-2xl shadow-blue-900/20 text-white relative overflow-hidden group hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 min-h-[220px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
              <div className="relative z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 mb-6">
                <DownloadCloud className="w-6 h-6 text-white" />
              </div>
              <div className="relative z-10">
                <motion.h2 className="text-xl font-bold mb-2 tracking-tight">Data Retrieval</motion.h2>
                <p className="text-blue-200 text-sm leading-relaxed">Securely extract exposed data before it weaponizes.</p>
              </div>
            </div>

            {/* SMALL CARD 2 - Stealer Logs */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-zinc-200 shadow-xl shadow-zinc-200/40 group hover:-translate-y-2 hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-500 min-h-[220px] flex flex-col justify-between">
              <div className="w-12 h-12 bg-zinc-100 text-zinc-800 group-hover:bg-blue-50 group-hover:text-blue-600 rounded-xl flex items-center justify-center border border-zinc-200 group-hover:border-blue-200 transition-colors mb-6">
                <FileWarning className="w-6 h-6" />
              </div>
              <div>
                <motion.h2 className="text-xl font-bold text-zinc-900 mb-2 tracking-tight">Stealer Logs</motion.h2>
                <p className="text-zinc-600 text-sm leading-relaxed">Detect compromised machines via early malware log parsing.</p>
              </div>
            </div>

            {/* BOTTOM LEFT WIDE - Activity Tracker */}
            <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 lg:p-10 border border-zinc-200 shadow-xl shadow-zinc-200/40 group hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-500 flex flex-col justify-center min-h-[220px]">
              <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-8">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  <Activity className="w-8 h-8" />
                </div>
                <div>
                  <motion.h2 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">Activity Tracker</motion.h2>
                  <p className="text-zinc-600 leading-relaxed text-base">Monitor ransomware groups and known threat actors operating on hidden forums to anticipate extortion attempts.</p>
                </div>
              </div>
            </div>

            {/* BOTTOM RIGHT WIDE - Threat Actor Engagement */}
            <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 lg:p-10 border border-zinc-200 shadow-xl shadow-zinc-200/40 group hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-500 flex flex-col justify-center min-h-[220px]">
              <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-8">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  <Ghost className="w-8 h-8" />
                </div>
                <div>
                  <motion.h2 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">Actor Engagement</motion.h2>
                  <p className="text-zinc-600 leading-relaxed text-base">Safely engage and track threat actors in their native environments to gather actionable intelligence.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>
      <CyberSectionDivider theme="blue" />
      <DEFCTASection />

    </main>
  );
}
