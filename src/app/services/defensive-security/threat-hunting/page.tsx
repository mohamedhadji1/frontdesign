"use client";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {Radar,
  Eye,
  Search,
  Sliders,
  ArrowRight, ChevronRight} from "lucide-react";
import { DEFCTASection } from "../soc-management/DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { HeroSection } from "./sections/HeroSection";

export default function Page() {
  const steps = [
    {
      title: "Proactive Hunting",
      desc: "Keystone conducts proactive and regular searches to identify signs of intrusion, compromise, or the presence of advanced threats that could bypass traditional security tools.",
      icon: <Radar className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Latent Threat Identification",
      desc: "We hunt for latent threats, suspicious behaviors, and indicators of attack (IOAs) to detect ongoing attacks or discreet infiltration attempts.",
      icon: <Eye className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Targeted Investigations",
      desc: "In the event of a suspicion or detection of abnormal activity, our threat hunters conduct targeted investigations to understand the nature and scope of the threat, and propose mitigation measures.",
      icon: <Search className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Posture Hardening",
      desc: "The findings from Threat Hunting investigations are used to strengthen your company's overall security posture by adjusting detection rules and enhancing security controls.",
      icon: <Sliders className="w-6 h-6 text-blue-600" />
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
              Cyber-Hunting
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mt-2">
              How Our Threat Hunting Services Are Organized
            </h2>
            <p className="text-zinc-600 text-lg mt-6 leading-relaxed">
              We do not wait for alerts to trigger. We hunt adversaries hiding in the shadows of your network.
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

          <div className="mt-16 max-w-5xl mx-auto p-8 bg-zinc-950 text-white rounded-2xl border border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold mb-3">Keystone: Your Proactive Threat Hunter</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Keystone places an expert team at your service to proactively hunt threats within your infrastructure. Contact us for enhanced security and advanced threat detection.
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
