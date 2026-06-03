"use client";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  ShieldAlert,
  Terminal,
  Search,
  Eye,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  UsersRound,
  TrendingUp,
  Zap,
  FileText,
  CheckCircle2
} from "lucide-react";
import { DEFCTASection } from "./DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { HeroSection } from "./sections/HeroSection";

export default function Page() {
  const benefits = [
    {
      title: "Specialized Expertise",
      desc: "Entrusting IT security to Keystone’s elite team of specialists grants access to highly specialized, cutting-edge cybersecurity capabilities. This ensures round-the-clock monitoring and rapid threat response, backed by deep, authoritative mastery of the latest security technologies.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Focus on Core Business Operations",
      desc: "By delegating security monitoring and management to Keystone's specialists, organizations can remain focused on their core business activities. This enables the reallocation of internal resources to strategic growth initiatives rather than daily security operations and administrative oversight.",
      icon: <UsersRound className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Risk Mitigation",
      desc: "Keystone’s managed security team minimizes the risks of data breaches, operational downtime, and the severe financial impacts associated with cyberattacks. Continuous monitoring ensures early detection and immediate response, significantly mitigating potential damage.",
      icon: <ShieldAlert className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Cost-Effectiveness",
      desc: "Outsourcing security services is considerably more cost-effective than maintaining a dedicated, round-the-clock in-house team. It eliminates the substantial overhead associated with recruitment, training, and talent retention. Furthermore, custom-tailored solutions ensure predictable and controlled security expenditures.",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Adaptability and Scalability",
      desc: "Our managed security solutions offer the flexibility required to adapt dynamically to your changing business needs. They scale seamlessly as your organization grows or as new threat vectors emerge within the digital landscape.",
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Compliance and Standards",
      desc: "Leveraging a specialized team allows organizations to align with stringent security standards and industry regulations. Keystone ensures continuous compliance with current regulatory requirements through continuous security assessments.",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    }
  ];

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

      {/* Strategic Benefits Section */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4 inline-block">
              Strategic Advantages
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mt-2 uppercase">
              Why Outsource Your Managed Security Services?
            </h2>
            <p className="text-zinc-600 text-lg mt-6 leading-relaxed font-medium">
              Outsourcing managed security services to Keystone is of paramount importance for organizations, delivering a suite of distinct, high-impact strategic advantages:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group p-8 bg-white border border-zinc-200/80 rounded-3xl hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-blue-600 rounded-full group-hover:scale-y-125 transition-transform" />
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-medium">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conclusion Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 max-w-6xl mx-auto p-8 bg-blue-50/50 border border-blue-100 rounded-3xl"
          >
            <p className="text-zinc-700 text-sm md:text-base leading-relaxed font-semibold text-center">
              Outsourcing security to Keystone&apos;s managed services allows organizations to leverage specialized expertise, focus on growth, mitigate risks, and maintain a resilient security posture while remaining agile in the face of technological evolution and emerging threats.
            </p>
          </motion.div>
        </div>
      </section>

      <CyberSectionDivider theme="blue" />

      {/* Core SOC Operations Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4 inline-block">
              SOC Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mt-2 uppercase">
              Managed SOC: Proactive Monitoring & Response
            </h2>
            <p className="text-zinc-600 text-lg mt-6 leading-relaxed font-medium">
              Keystone delivers a state-of-the-art managed Security Operations Center (SOC) to provide continuous defense and intelligence-led counter-measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-zinc-50 border border-zinc-200/80 rounded-3xl hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}

            {/* Quick Contact CTA Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-3xl flex flex-col justify-between border border-zinc-800 lg:col-span-1"
            >
              <div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Keystone: Your Centralized SOC</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-medium">
                  Keystone ensures constant monitoring and proactive threat response. Contact us to strengthen the security of your systems.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group text-sm uppercase tracking-wider">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CyberSectionDivider theme="blue" />

      <DEFCTASection />
    </main>
  );
}
