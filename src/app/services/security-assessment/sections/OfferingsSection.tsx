"use client";

import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import {
  Activity,
  Cloud,
  Database,
  Lock,
  Network,
  Settings,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { SignalIcon as Radar } from "@/components/animate-ui/icons/signal";
import { TerminalIcon as Terminal } from "@/components/animate-ui/icons/terminal";
import Link from "next/link";
import { MouseEvent, useState } from "react";

export function OfferingsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 1 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 1 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const offerings = [
    {
      title: "Infrastructure Assessment",
      desc: "Complete evaluation of physical/virtual networks, active servers, and foundational architecture to guarantee robust protection.",
      icon: <Activity className="w-5 h-5 text-red-600" />,
      number: "01",
      threats: ["Weak Network Segmentation", "Insecure Protocols"],
      features: ["Network Analysis", "Asset Discoveries"],
      href: "/services/security-assessment/infrastructure-assessment",
    },
    {
      title: "Cloud Environment Assessment",
      desc: "Rigorous posture assessment of AWS, Azure, and GCP configurations. We identify misconfigured IAM roles, exposed buckets, and compliance gaps.",
      icon: <Cloud className="w-5 h-5 text-red-600" />,
      number: "02",
      threats: ["Misconfigured IAM", "Exposed Storage"],
      features: ["Architecture Review", "CIS/SOC2 Compliance"],
      href: "/services/security-assessment/cloud-environment-assessment",
    },
    {
      title: "OT Assessment",
      desc: "Security evaluation of automated control systems (ICS/SCADA). We detect operational risks and align with the IEC 62443 standard.",
      icon: <Network className="w-5 h-5 text-red-600" />,
      number: "03",
      threats: ["PLC Manipulation", "OT/IT Convergence leaks"],
      features: ["ICS Threats ID", "Compliance IEC 62443"],
      href: "/services/security-assessment/industrial-system-assessment",
    },
    {
      title: "Core Banking Systems Assessment",
      desc: "Deep vulnerability testing for Core & Internet Banking platforms. We focus on transaction manipulation, API flaws, and regulatory alignment.",
      icon: <Database className="w-5 h-5 text-red-600" />,
      number: "04",
      threats: ["Transaction Flaws", "Online Banking Vulnerability"],
      features: ["Protocol Security", "Regulatory Assessmenting"],
      href: "/services/security-assessment/core-internet-banking-system-assessment",
    },
    {
      title: "Architecture Assessment",
      desc: "We analyze structures, structural designs, and data flows to ensure optimal efficiency, extreme resilience, and high security baselines.",
      icon: <Network className="w-5 h-5 text-red-600" />,
      number: "05",
      threats: ["Design Anti-Patterns", "Single Points of Failure"],
      features: ["Structure Analysis", "Performance Check"],
      href: "/services/security-assessment/architecture-assessment",
    },
    {
      title: "Active Directory Assessment",
      desc: "Deep-dive Assessment into AD architectures, domain controller configurations, access controls, trust relationships, and delegation structures.",
      icon: <ShieldAlert className="w-5 h-5 text-red-600" />,
      number: "06",
      threats: ["Kerberoasting Risks", "Excessive Permissions"],
      features: ["Group Policies Assessment", "Access Control Check"],
      href: "/services/security-assessment/active-directory-assessment",
    },
    {
      title: "Technical Assistance",
      desc: "Specialized professional and highly reactive technical support to resolve incidents, troubleshoot platforms, and optimize complex configurations.",
      icon: <Settings className="w-5 h-5 text-red-600" />,
      number: "07",
      threats: ["Operational Downtime", "Unresolved Outages"],
      features: ["Reactive Support", "Proactive Maintenance"],
      href: "/services/security-assessment/technical-assistance",
    },
    {
      title: "System Hardening",
      desc: "We secure core servers, OS configurations, and network devices by applying strict industry guidelines: CIS Benchmarks, NIST, and SANS.",
      icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
      number: "08",
      threats: ["Default Credentials", "Open Ports"],
      features: ["CIS Benchmarks", "Hardening Guides"],
      href: "/services/security-assessment/system-hardening",
    },
    {
      title: "Network & Security Architecture Design",
      desc: "Engineering next-generation secure network layouts, incorporating advanced firewall segmentation, deep traffic analysis tools, and redundancy.",
      icon: <Network className="w-5 h-5 text-red-600" />,
      number: "09",
      threats: ["Bypassed Segmentations", "Network Disruptions"],
      features: ["Firewall Strategy", "Redundancy Design"],
      href: "/services/security-assessment/network-security-architecture",
    },
    {
      title: "Application Security Support",
      desc: "Ensuring application layer security by Assessmenting code, implementing secure development lifecycle practices (SSDLC), and training dev teams.",
      icon: <Lock className="w-5 h-5 text-red-600" />,
      number: "10",
      threats: ["Injection Flaws", "Authentication Bypasses"],
      features: ["Secure SDLC Support", "Developer Awareness"],
      href: "/services/security-assessment/application-security-support",
    },
  ];

  const activeOffering = offerings[activeTab];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-10 bg-white text-zinc-600 relative border-t border-zinc-200 overflow-hidden group"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.05), transparent 80%)`,
        }}
      />

      <div className="absolute inset-0 bg-[url('/background/bg1.jpg')] bg-cover bg-center opacity-[0.02] pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220_38_38_0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220_38_38_0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <motion.h2 className="text-red-600 font-medium text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-red-600" />
            Specialized Infrastructure
            <span className="w-8 h-px bg-red-600" />
          </motion.h2>
          <motion.h2 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mb-6 uppercase">
            Technical Capabilities
          </motion.h2>
          <p className="text-zinc-600 max-w-2xl text-sm md:text-base leading-relaxed">
            Go beyond surface-level scanning. We evaluate the configurations, code, and foundational architecture powering your highly specialized environments.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:h-[600px] border border-zinc-200 rounded-xl overflow-hidden bg-white/80 backdrop-blur-md shadow-xl relative">
          <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-zinc-200 bg-zinc-50/50 flex flex-col">
            <div className="p-4 border-b border-zinc-200 flex items-center gap-3 text-zinc-500 text-xs font-medium">
              <Terminal className="w-4 h-4 text-red-600" animateOnHover={true} />
              <span>root@sec-ops:~/assessments/</span>
              <span className="ml-auto animate-pulse text-red-500">_</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              {offerings.map((offer, idx) => {
                const isActive = idx === activeTab;

                return (
                  <button
                    key={offer.href}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-6 transition-all duration-300 border-l-2 flex flex-col gap-2 ${
                      isActive
                        ? "bg-white border-red-600 text-zinc-900 shadow-sm"
                        : "border-transparent text-zinc-500 hover:bg-white/70 hover:text-zinc-800"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-medium text-xs ${isActive ? "text-red-600" : "text-zinc-400"}`}>
                        [{offer.number}]
                      </span>
                      <span
                        className={`font-bold uppercase tracking-wider text-sm ${
                          isActive ? "text-zinc-900" : "text-zinc-500"
                        }`}
                      >
                        {offer.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:w-2/3 relative h-[450px] lg:h-auto flex flex-col bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.02)_0%,transparent_60%)]">
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-red-500/30 shadow-[0_0_10px_rgba(220,38,38,0.5)] z-20"
              animate={{ y: [0, 600, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 p-8 md:p-12 overflow-y-auto"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center text-red-600">
                        {activeOffering.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold uppercase text-zinc-900 tracking-tight">
                          {activeOffering.title}
                        </h3>
                        <p className="text-zinc-400 font-mono text-xs mt-1">
                          MODULE://{activeOffering.title.toUpperCase().replace(/\s+/g, "_")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-zinc-600 leading-relaxed mb-10 text-sm md:text-base">
                    {activeOffering.desc}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mt-auto">
                    <div className="space-y-4">
                      <h5 className="font-bold text-xs text-zinc-400 tracking-widest uppercase border-b border-zinc-200 pb-2">
                        Targeted Scopes
                      </h5>
                      <div className="grid gap-3">
                        {activeOffering.threats.map((threat) => (
                          <div
                            key={threat}
                            className="flex items-center gap-3 bg-white p-3 rounded-md border border-zinc-100 shadow-sm group/threat hover:border-red-200 transition-colors"
                          >
                            <Radar className="w-3.5 h-3.5 text-zinc-400 group-hover/threat:text-red-600 transition-colors" animateOnHover={true} />
                            <span className="text-[13px] font-semibold text-zinc-800 group-hover/threat:text-red-700 transition-colors">
                              {threat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h5 className="font-bold text-xs text-zinc-400 tracking-widest uppercase border-b border-zinc-200 pb-2">
                        Core Focus
                      </h5>
                      <ul className="space-y-2">
                        {activeOffering.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-zinc-700 font-medium">
                            <span className="text-red-500 mt-[2px] opacity-70">&gt;</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href={activeOffering.href}
                    className="mt-10 inline-flex w-fit items-center gap-2 rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
