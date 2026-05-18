"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ShieldAlert,
  Zap,
  Layers,
  UsersRound,
  FileText,
  AlertTriangle,
  MessageSquare,
  Scale,
  ArrowRight
} from "lucide-react";
import { DEFCTASection } from "../soc-management/DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

export default function Page() {
  const steps = [
    {
      title: "Early Threat Detection",
      desc: "Keystone ensures early threat detection through proactive monitoring of suspicious activities on networks and systems. This vigilance helps quickly identify signs of potential attacks.",
      icon: <ShieldAlert className="w-6 h-6 text-red-600" />
    },
    {
      title: "Immediate Intervention",
      desc: "In the event of a confirmed security incident, our team reacts immediately to assess the situation. A rapid response is provided to limit damage, isolate breaches, and restore the security of affected systems.",
      icon: <Zap className="w-6 h-6 text-red-600" />
    },
    {
      title: "Incident Analysis and Management",
      desc: "An in-depth analysis is conducted to understand the scope of the incident, identify the entry points of attackers, and determine the corrective measures to implement. Complete management of the incident is ensured to minimize its impact.",
      icon: <Layers className="w-6 h-6 text-red-600" />
    },
    {
      title: "Coordination with Stakeholders",
      desc: "Keystone ensures transparent communication with your internal team, relevant authorities, and, if necessary, external parties. This coordination promotes a collective response and efficient resolution of the incident.",
      icon: <UsersRound className="w-6 h-6 text-red-600" />
    },
    {
      title: "Post-Incident Reports & Improvement",
      desc: "Detailed reports are provided after the resolution of the incident, including actions taken, lessons learned, and recommendations to strengthen resilience against future attacks.",
      icon: <FileText className="w-6 h-6 text-red-600" />
    },
    {
      title: "Technical Crisis Management",
      desc: "In the event of a major incident, Keystone ensures effective technical crisis management. This includes immediate interventions to contain the incident, identify vulnerabilities, and restore the security of affected systems as quickly as possible.",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />
    },
    {
      title: "Crisis Communication",
      desc: "Clear and effective communication is maintained throughout the incident. Keystone ensures transparent communication with internal and external stakeholders to inform them on the situation status, actions taken, and measures implemented to address the incident.",
      icon: <MessageSquare className="w-6 h-6 text-red-600" />
    },
    {
      title: "Legal Assistance",
      desc: "Keystone offers legal assistance to help understand the legal implications of the incident. We offer guidance on the steps to take for legal procedures.",
      icon: <Scale className="w-6 h-6 text-red-600" />
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
                className="inline-flex items-center flex-wrap gap-2 text-red-400 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                  <Link href="/services" className="hover:text-red-400 transition-colors">Services</Link>
                  <span className="text-red-500/50 flex flex-nowrap shrink-0">/</span>
                  <Link href="/services/defensive-security" className="hover:text-red-400 transition-colors">Managed Services</Link>
                  <span className="text-red-500/50 flex flex-nowrap shrink-0">/</span>
                  <span className="text-white">Incident Response</span>
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Incident <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Response</span>
              </h1>

              <HeroTypeLine
                items={[
                  "Immediate 24/7 Intervention",
                  "Technical Crisis Management",
                  "Rigorous Post-Incident Analysis",
                  "Specialized Legal Assistance"
                ]}
                className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-red-400"
              />

              <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl font-light">
                Keystone&apos;s incident response service is designed to offer a quick and effective reaction in the event of cyberattacks or security incidents.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/20 uppercase tracking-widest text-xs">
                  Report an URGENT Incident
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                  alt="Incident Response"
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 bg-red-50 px-3 py-1 rounded-full mb-4 inline-block">
              CERT (CSIRT.tn)
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mt-2">
              How the Incident Response Service is Structured
            </h2>
            <p className="text-zinc-600 text-lg mt-6 leading-relaxed">
              We react with millimetric speed and absolute coordination to contain cyber threats and neutralize their impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-50 border border-zinc-200/80 rounded-2xl hover:border-red-500 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}

            <div className="p-8 bg-zinc-950 text-white rounded-2xl flex flex-col justify-between border border-zinc-800 lg:col-span-1">
              <div>
                <h3 className="text-xl font-bold mb-4">Keystone: Your Rapid Response & Expertise</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Keystone guarantees a quick and professional response to security incidents. Contact us for proactive incident management and enhanced protection of your infrastructure against threats.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center text-red-400 font-bold hover:text-red-300 transition-colors group text-sm uppercase tracking-wider">
                Contact the CERT
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
