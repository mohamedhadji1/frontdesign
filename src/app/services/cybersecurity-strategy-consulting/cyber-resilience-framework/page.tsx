"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Shield, Lock, Crosshair, GraduationCap, CheckCircle2 } from "lucide-react";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

export default function CyberResilienceFrameworkPage() {
  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: "Cybersecurity Strategy Consulting", href: "/services/cybersecurity-strategy-consulting" },
    { label: "Cyber Resilience Framework", href: "/services/cybersecurity-strategy-consulting/cyber-resilience-framework" },
  ];

  const methodologies = [
    {
      title: "In-depth Risk Analysis",
      description: "We conduct a comprehensive risk analysis to understand the potential threats facing your organization.",
      icon: Search,
    },
    {
      title: "Development of Resilience Strategies",
      description: "We design proactive strategies to strengthen your organization's ability to withstand attacks and maintain critical operations.",
      icon: Shield,
    },
    {
      title: "Business Continuity Planning",
      description: "We develop detailed business continuity plans to ensure rapid recovery after a cyberattack, thereby minimizing impacts.",
      icon: Lock,
    },
    {
      title: "Integration of Detection Mechanisms",
      description: "We implement advanced detection mechanisms to quickly identify and respond to security incidents.",
      icon: Crosshair,
    },
    {
      title: "Training and Awareness",
      description: "We offer training programs to raise awareness among your staff regarding cyber resilience and incident response.",
      icon: GraduationCap,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center flex-wrap gap-2 text-red-400 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                  {breadcrumbs.map((crumb, idx) => (
                    <React.Fragment key={idx}>
                      <Link href={crumb.href} className="hover:text-red-400 transition-colors break-keep">
                        {crumb.label}
                      </Link>
                      {idx < breadcrumbs.length - 1 && (
                        <span className="text-red-500/50 flex flex-nowrap shrink-0">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Cyber Resilience <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Framework Development</span>
              </h1>
              <HeroTypeLine
                items={["Resilience architecture", "Preparedness and recovery", "Adaptive cyber operations"]}
              />

              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Keystone offers expertise in the development and implementation of cyber resilience frameworks. We work with organizations to develop robust strategies to prevent, detect, and respond to cyber incidents, while ensuring rapid recovery after an attack.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25">
                  Schedule Assessment
                </Link>
                <Link href="/services/cybersecurity-strategy-consulting" className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                  Back to Strategy Consulting
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                <img
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?q=80&w=1200&auto=format&fit=crop"
                  alt="Cyber Resilience Framework"
                  className="w-full h-[400px] rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      {/* Methodology Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <motion.h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-red-600/30"></span>
              OUR METHODOLOGY
              <span className="w-8 h-px bg-red-600/30"></span>
            </motion.h2>
            <motion.h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
              Building Robust Defenses
            </motion.h2>
            <p className="text-zinc-600 text-lg">
              We leverage an end-to-end framework methodology to ensure your organization can maintain operational continuity under adverse cyber conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {methodologies.map((method, idx) => {
              const Icon = method.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <motion.h2 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-white transition-colors duration-300">{method.title}</motion.h2>
                    <p className="text-zinc-600 group-hover:text-white/90 transition-colors duration-300">{method.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>
      <CyberSectionDivider theme="red" />
      <ContactCTASection />
    </main>
  );
}
