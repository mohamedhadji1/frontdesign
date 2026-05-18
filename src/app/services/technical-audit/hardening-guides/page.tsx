"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  BookOpen,
  ShieldAlert,
  Terminal,
  Sliders,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { DEFCTASection } from "../../defensive-security/soc-management/DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

export default function Page() {
  const steps = [
    {
      title: "NIST (National Institute of Standards and Technology)",
      desc: "NIST recommendations, including publication series such as NIST SP 800-53 and NIST SP 800-171, are taken into account to ensure compliance and security.",
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "SANS",
      desc: "We rely on SANS guides, which offer detailed guidelines to harden systems and ensure enhanced security.",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />
    },
    {
      title: "CISA (Cybersecurity and Infrastructure Security Agency)",
      desc: "CISA recommendations are also integrated to develop guidelines compliant with national and international security standards.",
      icon: <ShieldAlert className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Other Recognized Standards",
      desc: "We take into consideration other industry standards and best practices (such as CIS, Microsoft baselines) to offer comprehensive recommendations aligned with established standards.",
      icon: <Sliders className="w-6 h-6 text-blue-600" />
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
                  <Link href="/services/technical-audit" className="hover:text-blue-400 transition-colors">Assessment and Technical Assistance</Link>
                  <span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span>
                  <span className="text-white">Hardening Guides Development</span>
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Hardening <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Guides</span>
              </h1>

              <HeroTypeLine
                items={[
                  "Compliance with NIST SP 800-53 Standards",
                  "Detailed CIS & SANS Guidelines",
                  "CISA Security Specifications",
                  "Windows, Linux & Network Hardening"
                ]}
                className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-blue-400"
              />

              <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl font-light">
                Our hardening guides integrate recommendations from leading industry standards to provide maximum security.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 uppercase tracking-widest text-xs">
                  Get our guides
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                  alt="Guides de durcissement"
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
              Global Standards
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mt-2">
              Hardening Guides Compliant with Security Standards
            </h2>
            <p className="text-zinc-600 text-lg mt-6 leading-relaxed">
              We build custom frameworks based on global system hardening best practices to immunize your infrastructures against vulnerability exploitation.
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
            <h3 className="text-2xl font-bold mb-3">Keystone: Guarantor of Compliance and Security</h3>
            <p className="text-zinc-400 text-sm max-w-4xl mx-auto leading-relaxed mb-6">
              Keystone ensures hardening guides compliant with recognized security standards. Contact us for guidelines aligned with standards and tailored to your specific needs.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 whitespace-nowrap uppercase tracking-widest text-xs inline-block">
              Contact us
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
