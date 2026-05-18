"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BrainCircuit,
  Bot,
  Radar,
  ShieldAlert,
  Fingerprint
} from "lucide-react";

const offerings = [
  {
    title: "LLM Security Assessment",
    desc: "Rigorous testing of Large Language Models to identify prompt injection, data leakage, and jailbreaking vulnerabilities.",
    icon: <Bot className="w-8 h-8" />,
    threats: ["Prompt Injection", "Training Data Extraction"],
    features: ["Model Sandboxing", "Input Sanitization"],
    href: "/contact",
  },
  {
    title: "AI-Powered Threat Detection",
    desc: "Implementing machine learning algorithms to detect anomalies, behavioral drifts, and zero-day attacks in real-time.",
    icon: <Radar className="w-8 h-8" />,
    threats: ["Zero-Day Exploits", "Advanced Persistent Threats"],
    features: ["Behavioral Analytics", "Automated Threat Hunting"],
    href: "/contact",
  },
  {
    title: "Adversarial Machine Learning Defense",
    desc: "Protecting classification and prediction models from adversarial attacks that attempt to trick or poison the AI.",
    icon: <ShieldAlert className="w-8 h-8" />,
    threats: ["Data Poisoning", "Evasion Attacks"],
    features: ["Robust Training", "Adversarial Training Tests"],
    href: "/contact",
  },
  {
    title: "Generative AI Governance",
    desc: "Establishing governance and compliance frameworks for secure and ethical adoption of Generative AI within the enterprise.",
    icon: <BrainCircuit className="w-8 h-8" />,
    threats: ["Compliance Violations", "Unregulated AI Usage"],
    features: ["AI Policy Creation", "Ethical AI Audits"],
    href: "/contact",
  },
  {
    title: "Deepfake & Deep Identity Detection",
    desc: "Using advanced AI tools to verify digital identities and detect AI-generated voice or video cloning (Deepfakes).",
    icon: <Fingerprint className="w-8 h-8" />,
    threats: ["Identity Theft", "Social Engineering"],
    features: ["Biometric Validation", "Synthetic Media Detection"],
    href: "/contact",
  },
];

export function OfferingsSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-10 md:py-10 bg-zinc-50 border-y border-zinc-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-200/50 via-zinc-50 to-zinc-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-red-600/30"></span>
            Next-Generation Defense
            <span className="w-8 h-px bg-red-600/30"></span>
          </motion.h2>
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-zinc-900">
            AI Capabilities
          </motion.h2>
          <p className="text-zinc-600 text-lg leading-relaxed">
            From protecting your proprietary models against adversarial attacks to leveraging AI as a core defensive mechanism, we bring cutting-edge strategies to the AI era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
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

                <motion.h2 className="text-xl font-bold text-gray-900 leading-tight">
                  {offer.title}
                </motion.h2>

                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {offer.desc}
                </p>

                <div className="grid grid-cols-2 gap-4 mt-4 border-t border-gray-100 pt-6">
                  <div>
                    <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Radar className="w-3.5 h-3.5" /> Threats
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

                <Link
                  href={offer.href}
                  className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}