"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Clock,
  ShieldAlert,
  Terminal,
  Search,
  Eye,
  ArrowRight
} from "lucide-react";
import { DEFCTASection } from "./DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

export default function Page() {
  const steps = [
    {
      title: "24/7 Monitoring",
      desc: "Constant monitoring of security-related activities and events to detect anomalies and potential threats.",
      icon: <Clock className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Threat Detection",
      desc: "Early identification of emerging threats through advanced detection tools and technologies.",
      icon: <ShieldAlert className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Analysis and Response",
      desc: "In-depth analysis of security incidents and immediate response to contain threats and limit damage.",
      icon: <Terminal className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Vulnerability Management",
      desc: "Continuous assessment of vulnerabilities and potential risks for proactive protection.",
      icon: <Search className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Reports and Analysis",
      desc: "Provision of detailed reports on SOC activities, detected threats, and actions taken.",
      icon: <Eye className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.1 }} 
        transition={{ duration: 0.8 }} 
        className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/vids/videoplayback.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/40 sm:bg-linear-to-r sm:from-black/85 sm:via-black/45 sm:to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center flex-wrap gap-2 text-blue-400 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                  <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
                  <span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span>
                  <Link href="/services/defensive-security" className="hover:text-blue-400 transition-colors">Managed Services</Link>
                  <span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span>
                  <span className="text-white">SOC Management</span>
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                SOC <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Management</span>
              </h1>

              <HeroTypeLine
                items={[
                  "24/7 Active Security Monitoring",
                  "Proactive Vulnerability Management",
                  "Rapid Security Incident Response",
                  "SIEM & EDR/XDR Solution Optimization"
                ]}
                className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-blue-400"
              />

              <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl font-light">
                Keystone offers a managed SOC to ensure continuous monitoring and a proactive response to security threats. Discover our defensive pillars and strengthen your resilience.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 uppercase tracking-widest text-xs">
                  Secure My Systems
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                  alt="SOC Management Services"
                  className="w-full h-[350px] rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-24 bg-white flex-grow">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
              SOC Consolidation
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mt-2">
              Managed SOC: Proactive Monitoring and Response
            </h2>
            <p className="text-zinc-600 text-lg mt-6 leading-relaxed">
              Keystone offers a managed SOC to ensure continuous monitoring and a proactive response to security threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-50 border border-zinc-200/80 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}

            <div className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-2xl flex flex-col justify-between border border-zinc-800 lg:col-span-1">
              <div>
                <h3 className="text-xl font-bold mb-4">Keystone: Your Centralized and Responsive SOC</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Keystone ensures constant monitoring and proactive threat response through its managed SOC. Contact us to strengthen the security of your systems.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group text-sm uppercase tracking-wider">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CyberSectionDivider theme="blue" />

      <DEFCTASection />

      <Footer />
    </main>
  );
}
