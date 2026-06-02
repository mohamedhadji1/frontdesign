"use client";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {Clock,
  ShieldAlert,
  Terminal,
  Search,
  Eye,
  ArrowRight, ChevronRight} from "lucide-react";
import { DEFCTASection } from "./DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { HeroSection } from "./sections/HeroSection";

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
      <HeroSection />
      <CyberSectionDivider theme="blue" />

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
    </main>
  );
}
