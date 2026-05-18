"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Globe,
  ShieldAlert,
  FileText,
  RefreshCw,
  ArrowRight
} from "lucide-react";
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
                  <span className="text-white">Dark Web Monitoring</span>
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Dark Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Monitoring</span>
              </h1>

              <HeroTypeLine
                items={[
                  "Real-time Leak Alerts & Identification",
                  "Compromised Credential Tracking",
                  "Threat Actor Forum Analysis",
                  "Support and Corrective Remediation"
                ]}
                className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-blue-400"
              />

              <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl font-light">
                Keystone offers continuous, automated and expert monitoring of black markets, darknet forums, and IRC channels to identify compromised credentials, leaks, or target campaign discussions.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 uppercase tracking-widest text-xs">
                  Request Dark Web Assessment
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                  alt="Dark Web Monitoring"
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

      <Footer />
    </main>
  );
}
