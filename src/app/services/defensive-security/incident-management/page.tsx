"use client";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {Search,
  Sliders,
  Zap,
  RefreshCw,
  FileText,
  ArrowRight, ChevronRight} from "lucide-react";
import { DEFCTASection } from "../soc-management/DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

export default function Page() {
  const steps = [
    {
      title: "Detection and Assessment",
      desc: "Keystone ensures early detection of security incidents. This includes proactive monitoring of networks and systems to spot suspicious activities, followed by an in-depth assessment to determine the nature and scope of the incidents.",
      icon: <Search className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Classification and Prioritization",
      desc: "Once detected, incidents are classified and prioritized according to their severity. Keystone establishes priority levels for rapid and effective intervention, focusing on the most critical or urgent incidents.",
      icon: <Sliders className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Response and Containment",
      desc: "Keystone implements response plans to contain incidents and limit their spread. This involves an immediate response to isolate threats, restore operational normalcy, and prevent any recurrence.",
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Post-Incident Analysis and Continuous Improvement",
      desc: "After resolution, a post-incident analysis is conducted to understand root causes, evaluate response strategies, and implement continuous improvement measures aimed at strengthening resilience against future attacks.",
      icon: <RefreshCw className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Reporting and Documentation",
      desc: "Keystone provides detailed reports on occurred incidents, their impacts, measures taken, and recommendations to avoid similar future incidents. This documentation is crucial for better preparation and long-term risk management.",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden pt-52 sm:pt-60 lg:pt-64 pb-12"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center blur-[2px]"
          >
            <source src="/vids/videoplayback.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 sm:bg-linear-to-r sm:from-black/75 sm:via-black/35 sm:to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center items-center text-center lg:items-start lg:text-left py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              <span>Managed Services</span>
              <ChevronRight size={8} />
              <span className="text-white/60">Incident Management</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              Incident <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Management</span>
            </h1>

            <HeroTypeLine
              items={[
                  "Rapid Security Threat Containment",
                  "Incident Classification & Prioritization",
                  "Root Cause & Post-Incident Analysis",
                  "Comprehensive Post-Incident Documentation"
                ]}
              className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-400"
            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              Keystone offers an extremely fast and highly organized incident management workflow to contain security breaches, isolate threats, and restore operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
              <Link
                href="/report-incident"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl"
              >
                Report An Incident <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        <CertificationsMarquee className="mt-auto pointer-events-auto cursor-default pb-2 sm:pb-8" />
        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider theme="blue" />

      {/* Content Section */}
      <section className="py-24 bg-white flex-grow">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
              Rapid Mitigation
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mt-2">
              Reactive & Effective Incident Management
            </h2>
            <p className="text-zinc-600 text-lg mt-6 leading-relaxed">
              We coordinate transparently with your teams and provide detailed documentation, ensuring that every issue is analyzed to prevent future security events.
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
                <h3 className="text-xl font-bold mb-4">Your Trusted Partner in Reactive Security</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Keystone is committed to proactive and reactive incident management to minimize impacts on your activities. We offer advanced expertise to effectively manage security incidents and reduce risks for your business.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group text-sm uppercase tracking-wider">
                Need Help? Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CyberSectionDivider theme="blue" />

      <DEFCTASection />
    </main>
  );
}
