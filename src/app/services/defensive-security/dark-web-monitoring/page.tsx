"use client";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {Globe,
  ShieldAlert,
  FileText,
  RefreshCw,
  ArrowRight, ChevronRight} from "lucide-react";
import { DEFCTASection } from "../soc-management/DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

export default function Page() {
  const steps = [
    {
      title: "Compromised Information Monitoring",
      desc: "Identification of Sensitive Data: Keystone monitors the dark web to detect any mention of sensitive information such as credentials, credit card numbers, access details, etc., associated with your organization. Real-time Alerts: The service sends immediate alerts as soon as it detects compromised data or mentions of your company on dark web forums or marketplaces.",
      icon: <Globe className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Threat Watch",
      desc: "Proactive Search: Keystone explores dark web forums, markets, and channels to detect discussions and activities related to potential threats against your company. Analysis of Potential Risks: By identifying threats in advance, Keystone helps anticipate cyberattacks or data leaks, facilitating early response to strengthen security.",
      icon: <ShieldAlert className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Reporting and Analysis",
      desc: "Detailed Reports: Keystone provides regular reports on detected activities, compromised data, and trends observed on the dark web regarding your organization. Contextual Analysis: Information is presented with relevant context, making it easier to understand the scale and nature of threats to take appropriate measures.",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Support and Corrective Actions",
      desc: "Incident Response Assistance: In case of compromised data or detected threats, Keystone can provide recommendations for an adequate response, such as changing passwords, implementing additional security measures, etc. Continuous Tracking and Monitoring: The service ensures continuous monitoring to track the evolution of threats and compromised data, enabling proactive risk management.",
      icon: <RefreshCw className="w-6 h-6 text-blue-600" />
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
              <span className="text-white/60">Dark Web Monitoring</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              Dark Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Monitoring</span>
            </h1>

            <HeroTypeLine
              items={[
                  "Real-time Leak Alerts & Identification",
                  "Compromised Credential Tracking",
                  "Threat Actor Forum Analysis",
                  "Support and Corrective Remediation"
                ]}
              className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-400"
            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              Keystone offers continuous, automated and expert monitoring of black markets, darknet forums, and IRC channels to identify compromised credentials, leaks, or target campaign discussions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl"
              >
                Request Dark Web Assessment <ArrowRight size={18} />
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
              Continuous Vigilance
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mt-2">
              Dark Web Monitoring: Compromised Data & Risks
            </h2>
            <p className="text-zinc-600 text-lg mt-6 leading-relaxed">
              We proactively check darknet marketplaces, leak sites, and underground forums, providing you with early threat alerts and robust technical support to secure compromised credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {steps.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-50 border border-zinc-200/80 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-5xl mx-auto p-8 bg-zinc-950 text-white rounded-2xl border border-zinc-800 text-center">
            <h3 className="text-2xl font-bold mb-3">Comprehensive Dark Web Coverage</h3>
            <p className="text-zinc-400 text-sm max-w-4xl mx-auto leading-relaxed mb-6">
              Keystone offers comprehensive coverage for dark web monitoring, helping businesses detect, understand, and respond to potential threats and data leaks that could impact their security.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 whitespace-nowrap uppercase tracking-widest text-xs inline-block">
              Protect My Business
            </Link>
          </div>
        </div>
      </section>

      <CyberSectionDivider theme="blue" />

      <DEFCTASection />
    </main>
  );
}
