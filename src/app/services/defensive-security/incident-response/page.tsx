"use client";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {ShieldAlert,
  Zap,
  Layers,
  UsersRound,
  FileText,
  AlertTriangle,
  MessageSquare,
  Scale,
  ArrowRight, ChevronRight} from "lucide-react";
import { DEFCTASection } from "../soc-management/DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { HeroSection } from "./sections/HeroSection";

export default function Page() {
  const steps = [
    {
      title: "Early Threat Detection",
      desc: "Keystone ensures early threat detection through proactive monitoring of suspicious activities on networks and systems. This vigilance helps quickly identify signs of potential attacks.",
      icon: <ShieldAlert className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Immediate Intervention",
      desc: "In the event of a confirmed security incident, our team reacts immediately to assess the situation. A rapid response is provided to limit damage, isolate breaches, and restore the security of affected systems.",
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Incident Analysis and Management",
      desc: "An in-depth analysis is conducted to understand the scope of the incident, identify the entry points of attackers, and determine the corrective measures to implement. Complete management of the incident is ensured to minimize its impact.",
      icon: <Layers className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Coordination with Stakeholders",
      desc: "Keystone ensures transparent communication with your internal team, relevant authorities, and, if necessary, external parties. This coordination promotes a collective response and efficient resolution of the incident.",
      icon: <UsersRound className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Post-Incident Reports & Improvement",
      desc: "Detailed reports are provided after the resolution of the incident, including actions taken, lessons learned, and recommendations to strengthen resilience against future attacks.",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Technical Crisis Management",
      desc: "In the event of a major incident, Keystone ensures effective technical crisis management. This includes immediate interventions to contain the incident, identify vulnerabilities, and restore the security of affected systems as quickly as possible.",
      icon: <AlertTriangle className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Crisis Communication",
      desc: "Clear and effective communication is maintained throughout the incident. Keystone ensures transparent communication with internal and external stakeholders to inform them on the situation status, actions taken, and measures implemented to address the incident.",
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Legal Assistance",
      desc: "Keystone offers legal assistance to help understand the legal implications of the incident. We offer guidance on the steps to take for legal procedures.",
      icon: <Scale className="w-6 h-6 text-blue-600" />
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
                <h3 className="text-xl font-bold mb-4">Keystone: Your Rapid Response & Expertise</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Keystone guarantees a quick and professional response to security incidents. Contact us for proactive incident management and enhanced protection of your infrastructure against threats.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group text-sm uppercase tracking-wider">
                Contact the CERT
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
