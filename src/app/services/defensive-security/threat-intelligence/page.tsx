"use client";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {Globe,
  Sliders,
  Search,
  FileText,
  Terminal,
  ArrowRight, ChevronRight} from "lucide-react";
import { DEFCTASection } from "../soc-management/DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { HeroSection } from "./sections/HeroSection";

export default function Page() {
  const steps = [
    {
      title: "Threat Watch",
      desc: "Keystone conducts a constant watch on emerging threats, collecting information from multiple sources to identify new attacks, malware, and tactics used by cybercriminals.",
      icon: <Globe className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Trend Analysis",
      desc: "In-depth analysis of trends helps understand the evolution of attacks, attackers' motivations, and techniques used. This helps forecast future threats and take preventive measures.",
      icon: <Sliders className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Data Collection",
      desc: "Keystone collects and analyzes a variety of data, including indicators of compromise (IOCs), threat actor information, vulnerabilities, incident reports, etc., for a comprehensive risk assessment.",
      icon: <Search className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Reporting and Information Sharing",
      desc: "We provide detailed reports on detected threats, major vulnerabilities, and recommendations to strengthen security. We also encourage information sharing within the community for enhanced collective security.",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Integration into Security Strategies",
      desc: "Threat information is used to develop effective security strategies, including creating detection rules, updating security policies, and training teams on the latest threats.",
      icon: <Terminal className="w-6 h-6 text-blue-600" />
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
              Strategic Analysis
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mt-2">
              Keystone&apos;s Threat Intelligence Service
            </h2>
            <p className="text-zinc-600 text-lg mt-6 leading-relaxed">
              We proactively watch emerging threats, track hacker behavior, compile data indicators, and support teams to construct defensive mechanisms against potential vectors.
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
                <h3 className="text-xl font-bold mb-4">Your Reliable Source of Threat Intelligence</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Keystone provides up-to-date and relevant threat intelligence to strengthen your security posture. Contact us to protect your business.
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
