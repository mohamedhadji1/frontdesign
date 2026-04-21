"use client";

import { motion } from "framer-motion";
import { Cloud, Server, ShieldAlert, Network, ShieldCheck, Radar, CheckCircle2 } from "lucide-react";

const offerings = [
  {
    title: "Cloud Environment Audit",
    desc: "Rigorous assessment of AWS, Azure, and GCP configurations. We identify misconfigured IAM roles, exposed buckets, and compliance gaps to harden your cloud perimeter.",
    icon: <Cloud className="w-8 h-8" />,
    threats: ["Misconfigured IAM", "Exposed Storage"],
    features: ["Architecture Review", "CIS/SOC2 Compliance"]
  },
  {
    title: "Core Banking Systems",
    desc: "Deep vulnerability testing for Core & Internet Banking platforms. We focus on transaction manipulation, API flaws, and strict financial regulatory alignment.",
    icon: <Server className="w-8 h-8" />,
    threats: ["Transaction Manipulation", "Logic Flaws"],
    features: ["Protocol Security", "Regulatory Compliance"]
  },
  {
    title: "Industrial System (OT/IT)",
    desc: "End-to-end security evaluation of automated control systems (ICS/SCADA). We detect operational risks and ensure alignment with IEC 62443 standard.",
    icon: <Network className="w-8 h-8" />,
    threats: ["PLC Manipulation", "OT/IT Convergence Leaks"],
    features: ["Automated Systems Eval", "ICS Threat ID"]
  },
  {
    title: "Critical Infrastructure",
    desc: "Evaluation of essential services against advanced cyber threats. Protecting network segmentation and resilience against nation-state or ransomware attacks.",
    icon: <ShieldAlert className="w-8 h-8" />,
    threats: ["Cyber-Physical Attacks", "Ransomware"],
    features: ["Segmentation", "Threat Modeling"]
  },
  {
    title: "System Hardening",
    desc: "We secure core servers, OS configurations, and network equipment by applying vendor best practices and CIS Benchmarks to massively reduce attack surfaces.",
    icon: <ShieldCheck className="w-8 h-8" />,
    threats: ["Default Credentials", "Open Ports"],
    features: ["CIS Benchmarks", "Attack Surface Reduction"]
  }
];

export function OfferingsSection() {
  return (
    <section className="py-10 md:py-10 bg-zinc-50 border-y border-zinc-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-200/50 via-zinc-50 to-zinc-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-red-600/30"></span>
            Specialized Infrastructure
            <span className="w-8 h-px bg-red-600/30"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-zinc-900">
            Technical Capabilities
          </h3>
          <p className="text-zinc-600 text-lg leading-relaxed">
            Go beyond surface-level scanning. We evaluate the configurations, code, and foundational architecture powering your highly specialized environments.
          </p>
        </div>

        {/* Uniform Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {offerings.map((offer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              className="bg-white rounded-xl p-8 shadow-xl border border-gray-100 relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />
              
              <div className="relative z-10 flex flex-col flex-1 gap-5">
                <div className="text-red-600 bg-red-50 p-3 rounded-xl w-fit">
                  {offer.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {offer.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {offer.desc}
                </p>

                {/* Restored Details: Weaknesses vs Focus Grid */}
                <div className="grid grid-cols-2 gap-4 mt-4 border-t border-gray-100 pt-6">
                  <div>
                    <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Radar className="w-3.5 h-3.5" /> Weaknesses
                    </h5>
                    <ul className="flex flex-col gap-2">
                      {offer.threats.map((t, i) => (
                        <li key={i} className="text-xs text-gray-600 font-medium flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Focus
                    </h5>
                    <ul className="flex flex-col gap-2">
                      {offer.features.map((f, i) => (
                        <li key={i} className="text-xs text-gray-600 font-medium flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-red-400" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
