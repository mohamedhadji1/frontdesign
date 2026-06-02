"use client";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {ShieldCheck,
  Award,
  Terminal,
  Network,
  ArrowRight,
  Activity,
  Globe, ChevronRight} from "lucide-react";
import { DEFCTASection } from "../soc-management/DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { HeroSection } from "./sections/HeroSection";

export default function Page() {
  const steps = [
    {
      title: "Active Member of FIRST and AfricaCERT",
      desc: "As a recognized member of FIRST and AfricaCERT, our CERT benefits from close collaboration and information sharing with other CERT teams globally. This cooperation strengthens our capacity to respond to threats in a global and coordinated manner.",
      icon: <Award className="w-6 h-6 text-blue-600" />
    },
    {
      title: "High-Level Technical Expertise",
      desc: "Composed of highly qualified IT security experts, our team has deep technical expertise. This skill allows us to manage complex security incidents with maximum efficiency and speed.",
      icon: <Terminal className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Effective Response to Critical Threats",
      desc: "In the face of attacks from the most dangerous hacker groups in the world, our team has demonstrated its ability to react rapidly and in a coordinated manner. This responsiveness limits impact, counters attacks, and restores system security.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "On-Site Direct Intervention",
      desc: "For urgent cases, our CSIRT.tn team travels directly on-site. This physical presence guarantees an in-depth evaluation of the situation and immediate intervention to counter threats and restore security.",
      icon: <Network className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Real-Time Remote Handling",
      desc: "When necessary, our CSIRT.tn is capable of providing real-time remote assistance. This flexibility allows us to react quickly to threats by taking immediate measures to counter attacks.",
      icon: <Activity className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Global Expertise and Collaboration",
      desc: "As a recognized member of FIRST and AfricaCERT, our CSIRT.tn benefits from tight cooperation, enabling instantaneous threat sharing and global synergy to counter complex security incidents.",
      icon: <Globe className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <HeroSection />
      <CyberSectionDivider theme="blue" />

      {/* Content Section */}
      <section className="py-24 bg-white flex-grow">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
              Critical Threat Response
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mt-2">
              CSIRT.tn: Your Guarantee of Critical Threat Response
            </h2>
            <p className="text-zinc-600 text-lg mt-6 leading-relaxed">
              Discover the key features of our computer emergency response team dedicated to the resilience of critical infrastructures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

          <div className="mt-16 max-w-5xl mx-auto p-8 bg-zinc-950 text-white rounded-2xl border border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold mb-3">Keystone: Your Trusted Partner for Resilience</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Keystone&apos;s CSIRT.tn is your trusted partner to address security incidents and strengthen your resilience against cyberattacks. Contact us to learn more about our services.
              </p>
            </div>
            <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 whitespace-nowrap uppercase tracking-widest text-xs">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CyberSectionDivider theme="blue" />

      <DEFCTASection />
    </main>
  );
}
