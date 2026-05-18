"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Clock,
  Layers,
  Shield,
  Code,
  FileText,
  ArrowRight
} from "lucide-react";
import { DEFCTASection } from "../soc-management/DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

export default function Page() {
  const steps = [
    {
      title: "24/7 Monitoring",
      desc: "24/7 monitoring is the continuous surveillance of your IT systems, networks, and applications to detect suspicious or abnormal activities. This involves using advanced tools to monitor security events, traffic anomalies in real-time, and to identify unusual behaviors that could indicate malicious activity.",
      icon: <Clock className="w-6 h-6 text-blue-600" />
    },
    {
      title: "SIEM Solutions Management and Optimization",
      desc: "Management and optimization of SIEM solutions encompass the complete handling of your SIEM system, from configuration to optimization. Keystone provides expert management of your SIEM platform, including use case and alert management, custom dashboard creation, and event correlation to ensure effective threat detection.",
      icon: <Layers className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Implementation of Managed EDR/XDR/SIEM Solutions",
      desc: "Keystone offers the implementation and management of advanced Endpoint Detection and Response (EDR/XDR) as well as SIEM solutions. These solutions provide deep visibility into network and endpoint activities, enabling early detection and rapid threat response.",
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Use Case Development",
      desc: "Use case development involves creating specific scenarios based on behavior models or malicious activity patterns. These scenarios help identify abnormal behaviors or suspicious activities, enabling proactive threat detection.",
      icon: <Code className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Log Management",
      desc: "Log management consists of collecting, storing, analyzing, and interpreting log data from various sources. Keystone effectively manages these logs to detect anomalies, identify suspicious activities, and improve visibility for rapid response to security incidents.",
      icon: <FileText className="w-6 h-6 text-blue-600" />
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
                  <span className="text-white">Blue Team</span>
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Blue <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Team</span>
              </h1>

              <HeroTypeLine
                items={[
                  "24/7 IT Infrastructure Monitoring",
                  "SIEM Optimization & Tuning",
                  "Managed EDR/XDR Deployment",
                  "Advanced Use Case Modeling"
                ]}
                className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-blue-400"
              />

              <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl font-light">
                Keystone&apos;s Blue Team service is dedicated to strengthening your company&apos;s security by offering proactive monitoring, advanced SIEM management, and endpoint detection and response solutions.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 uppercase tracking-widest text-xs">
                  Partner With Us
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                  alt="Blue Team Services"
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
              Blue Team Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mt-2">
              Blue Team Service: Active Hardening and Monitoring
            </h2>
            <p className="text-zinc-600 text-lg mt-6 leading-relaxed">
              We leverage market-leading technologies and defensive expertise to ensure absolute protection and deep visibility across your entire endpoint and network layer.
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

            <div className="p-8 bg-zinc-950 text-white rounded-2xl flex flex-col justify-between border border-zinc-800 lg:col-span-1">
              <div>
                <h3 className="text-xl font-bold mb-4">Your Trusted Partner in Security</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Keystone offers a comprehensive range of Blue Team services for proactive monitoring, optimal security solution management, and effective response to threats. We work in close collaboration with your company to ensure enhanced protection against cyber threats.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group text-sm uppercase tracking-wider">
                Let&apos;s Work Together
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
