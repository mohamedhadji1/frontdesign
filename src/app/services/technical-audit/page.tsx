"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Network,
  Radar,
  Server,
  ShieldAlert,
  ShieldCheck,
  Activity,
  Database,
  Settings,
  Lock,
  Search,
  Eye,
  Zap,
  Map
} from "lucide-react";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { DEFCTASection } from "../defensive-security/soc-management/DEFCTASection";

const offerings = [
  {
    title: "Infrastructure Audit",
    desc: "Comprehensive assessment of physical and virtual networks, active servers, and fundamental architecture to guarantee robust protection.",
    icon: <Activity className="w-8 h-8" />,
    threats: ["Weak network segmentation", "Unsecured protocols"],
    features: ["Network analysis", "Asset discovery"],
    href: "/services/technical-audit/infrastructure-assessment",
  },
  {
    title: "Cloud Environment Audit",
    desc: "Rigorous evaluation of AWS, Azure, and GCP configurations. We identify misconfigured IAM roles, exposed buckets, and compliance gaps.",
    icon: <Cloud className="w-8 h-8" />,
    threats: ["Misconfigured IAM roles", "Exposed data storage"],
    features: ["Architecture review", "CIS & SOC2 compliance"],
    href: "/services/technical-audit/cloud-environment-assessment",
  },
  {
    title: "Industrial Systems Audit",
    desc: "Security evaluation of automated control systems (ICS/SCADA). We detect operational risks and align with the IEC 62443 standard.",
    icon: <Network className="w-8 h-8" />,
    threats: ["PLC manipulation", "OT/IT convergence leaks"],
    features: ["ICS threat identification", "IEC 62443 alignment"],
    href: "/services/technical-audit/industrial-system-assessment",
  },
  {
    title: "Core Banking Audit",
    desc: "In-depth vulnerability testing for Core & Internet Banking platforms. We focus on transaction manipulation, API flaws, and compliance.",
    icon: <Database className="w-8 h-8" />,
    threats: ["Transaction flaws", "Online banking vulnerabilities"],
    features: ["Protocol security", "Regulatory assessment"],
    href: "/services/technical-audit/core-internet-banking-system-assessment",
  },
  {
    title: "Architecture Audit",
    desc: "We analyze structures, design patterns, and data flows to ensure optimal efficiency, maximum resilience, and high-level security.",
    icon: <Network className="w-8 h-8" />,
    threats: ["Design anti-patterns", "Single points of failure"],
    features: ["Structure analysis", "Performance verification"],
    href: "/services/technical-audit/architecture-assessment",
  },
  {
    title: "Active Directory Audit",
    desc: "Deep dive into AD architectures, domain controller configurations, access controls, trust relationships, and privilege escalation vectors.",
    icon: <ShieldAlert className="w-8 h-8" />,
    threats: ["Kerberoasting risks", "Excessive permissions"],
    features: ["Group policy audit", "Access control"],
    href: "/services/technical-audit/active-directory-assessment",
  },
  {
    title: "Technical Assistance",
    desc: "Specialized, highly responsive, and professional technical support to resolve incidents, troubleshoot platforms, and optimize complex configurations.",
    icon: <Settings className="w-8 h-8" />,
    threats: ["Operational downtime", "Unresolved breakdowns"],
    features: ["Responsive support", "Proactive maintenance"],
    href: "/services/technical-audit/technical-assistance",
  },
  {
    title: "System Hardening",
    desc: "We secure key servers, OS configurations, and network equipment by applying industry guides and standards: CIS Benchmarks, NIST.",
    icon: <ShieldCheck className="w-8 h-8" />,
    threats: ["Default credentials", "Unnecessarily open ports"],
    features: ["CIS Benchmarks", "Hardening guides"],
    href: "/services/technical-audit/system-hardening",
  },
  {
    title: "Network & Security Architecture",
    desc: "Engineering next-generation secure network topologies, integrating advanced firewall segmentation, analysis tools, and redundancy.",
    icon: <Network className="w-8 h-8" />,
    threats: ["Bypassed segmentations", "Network disruptions"],
    features: ["Firewall strategy", "Redundancy design"],
    href: "/services/technical-audit/network-security-architecture",
  },
  {
    title: "Application Security Support",
    desc: "Ensuring application layer security by auditing code, implementing a secure software development lifecycle (SSDLC), and training teams.",
    icon: <Lock className="w-8 h-8" />,
    threats: ["Injection flaws", "Authentication bypasses"],
    features: ["Secure SSDLC support", "Developer awareness"],
    href: "/services/technical-audit/application-security-support",
  },
];

const methodologySteps = [
  {
    id: "analysis",
    name: "Static & Dynamic Analysis",
    desc: "Deep analysis of configuration and architecture to identify structural flaws and bad practices.",
    icon: <Search className="w-5 h-5" />
  },
  {
    id: "tests",
    name: "Flow & API Verification",
    desc: "Rigorous testing focused on interconnection flows, REST/GraphQL APIs, authentication, and session management.",
    icon: <Activity className="w-5 h-5" />
  },
  {
    id: "compliance",
    name: "Regulatory Compliance",
    desc: "Evaluation of compliance levels against regulatory and industry requirements (SWIFT, PCI-DSS, GDPR, ISO 27001).",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    id: "verification",
    name: "Actionable Recommendations",
    desc: "Delivery of a comprehensive technical report with detailed, prioritized remediation plans.",
    icon: <CheckCircle2 className="w-5 h-5" />
  }
];

const benefits = [
  {
    title: "Eliminate Configuration Flaws",
    desc: "Parameter errors and default configurations are the most common entry points for attackers.",
    icon: <Eye className="w-5 h-5" />
  },
  {
    title: "Regulatory Compliance Assured",
    desc: "Avoid financial penalties and ensure your infrastructure meets national and international standards.",
    icon: <ShieldAlert className="w-5 h-5" />
  },
  {
    title: "Resilience Optimization",
    desc: "Robust architectures guarantee your business continuity even during technical incidents or cyberattacks.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "Attack Surface Reduction",
    desc: "Systematic hardening of your servers and networks eliminates unnecessary or obsolete attack vectors.",
    icon: <Map className="w-5 h-5" />
  }
];

export default function TechnicalAuditOverviewPage() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
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

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center flex-wrap gap-2 text-red-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
              <div className="flex flex-wrap items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                <Link href="/services" className="hover:text-red-300 transition-colors">Services</Link>
                <span className="text-red-500/30 flex flex-nowrap shrink-0">/</span>
                <span className="text-white/90">Assessment and Technical Assistance</span>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Assessment & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Technical Assistance</span>
            </h1>

            <HeroTypeLine
              items={["Critical configuration audits", "Systems hardening guides", "SWIFT & PCI-DSS compliance audits"]}
            />

            <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-2xl">
              Outsourcing technical audit and assistance with Keystone ensures full compliance, rigorous configuration monitoring, and prompt remediation of your infrastructure flaws.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="px-8 py-3.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25">
                Schedule a Technical Audit
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      {/* Offerings Grid */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-red-600/30"></span>
              Our Technical Expertise
              <span className="w-8 h-px bg-red-600/30"></span>
            </h2>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-zinc-900 mb-6">
              Service Catalog
            </h2>
            <p className="text-zinc-600 text-lg">
              Go beyond simple automated scans. We analyze code, configuration files, and interconnection topologies of your critical infrastructure in detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-zinc-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-red-600 bg-red-50 p-3.5 rounded-xl w-fit mb-6">
                  {offer.icon}
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  {offer.title}
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed flex-grow mb-6">
                  {offer.desc}
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-zinc-100 pt-6 mb-6">
                  <div>
                    <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Radar className="w-3.5 h-3.5 text-zinc-400" /> Weaknesses
                    </h4>
                    <ul className="space-y-1">
                      {offer.threats.map((t, i) => (
                        <li key={i} className="text-xs text-zinc-500 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-zinc-300" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> Focus
                    </h4>
                    <ul className="space-y-1">
                      {offer.features.map((f, i) => (
                        <li key={i} className="text-xs text-zinc-500 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={offer.href}
                  className="inline-flex w-fit items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      {/* Methodology Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-red-500 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-red-500/30"></span>
              Our Methodology
              <span className="w-8 h-px bg-red-500/30"></span>
            </h2>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-white mb-6">
              Rigorous Evaluation Process
            </h2>
            <p className="text-zinc-400 text-lg">
              Our structured audit process guarantees complete coverage of your specialized environments, leaving absolutely nothing to chance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologySteps.map((step, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden group hover:border-red-500/30 transition-all duration-300">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 group-hover:border-red-500/50 rounded-xl flex items-center justify-center text-zinc-400 group-hover:text-red-500 transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-mono font-black text-zinc-800 group-hover:text-red-500/10 transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      {/* Why Keystone Benefits Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-24 bg-white text-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-red-600/30"></span>
              Why Perform an Audit?
              <span className="w-8 h-px bg-red-600/30"></span>
            </h2>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-zinc-900 mb-6">
              Benefits of Our Accompaniment
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {benefits.map((b, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`group text-left p-6 rounded-2xl transition-all duration-300 flex items-center justify-between border ${activeIdx === idx
                    ? "bg-zinc-50 border-red-500/30 shadow-lg ring-1 ring-red-500/10"
                    : "bg-white border-zinc-100 hover:border-red-500/10 hover:bg-zinc-50/50"
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeIdx === idx ? "bg-red-100 text-red-600" : "bg-zinc-100 text-zinc-500 group-hover:text-red-600"}`}>
                      {b.icon}
                    </div>
                    <h3 className={`font-bold text-base transition-colors ${activeIdx === idx ? "text-zinc-900" : "text-zinc-700 group-hover:text-zinc-900"}`}>
                      {b.title}
                    </h3>
                  </div>
                  <ArrowRight className={`w-5 h-5 text-red-600 transition-transform ${activeIdx === idx ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"}`} />
                </button>
              ))}
            </div>

            <div className="w-full lg:w-1/2 min-h-[350px] flex items-center justify-center p-8 bg-zinc-50 border border-zinc-200/60 rounded-3xl relative">
              <div className="max-w-md text-center">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  {benefits[activeIdx].icon}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                  {benefits[activeIdx].title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  {benefits[activeIdx].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      <DEFCTASection />

      <Footer />
    </main>
  );
}