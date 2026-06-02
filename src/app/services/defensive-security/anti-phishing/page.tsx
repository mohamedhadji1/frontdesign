"use client";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlueSectionDivider } from "@/components/ui/BlueSectionDivider";

import Link from "next/link";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Globe,
  Terminal,
  Search,
  Zap,
  FileText,
  ArrowRight,
  ChevronRight,
  Shield,
  Eye,
  CheckCircle2,
  Workflow,
  Compass,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { HeroSection } from "./sections/HeroSection";

const steps = [
  {
    title: "Advanced Web Monitoring",
    desc: "Proactively scanning social networks and web spaces to detect fake profiles, misleading posts, and fraudulent activities.",
    icon: Globe,
  },
  {
    title: "Mobile App Analysis",
    desc: "Scrutinizing app stores and digital repositories to identify malicious or unauthorized applications targeting your brand.",
    icon: Terminal,
  },
  {
    title: "Early Threat Detection",
    desc: "Combining intelligent behavioral scanners with manual threat watches to locate attack signals before damage is done.",
    icon: Search,
  },
];

const actionItems = [
  {
    title: "Rapid Threat Neutralization",
    desc: "Taking instantaneous countermeasures to block malicious domains, remove fraudulent profiles, and contain phishing spreads.",
    icon: Zap,
  },
  {
    title: "Specialized Awareness",
    desc: "Engineering custom training programs and mock phishing campaigns to turn employees into an active security shield.",
    icon: FileText,
  },
  {
    title: "Durable Compliance",
    desc: "Ensuring brand security practices align smoothly with key international privacy and communication regulations.",
    icon: Shield,
  },
];

const pillars = [
  {
    title: "Exhaustive Perimeter Scan",
    desc: "Leaving no stone unturned—from dark web marketplaces down to public social feeds to track down malicious scripts.",
    icon: Eye,
  },
  {
    title: "Unified Brand Intelligence",
    desc: "Correlating digital alerts and reporting vectors into single, actionable event descriptions.",
    icon: Workflow,
  },
  {
    title: "Durable Strategy Alignment",
    desc: "Helping your leadership team implement custom policy rules for absolute protection of stakeholders.",
    icon: CheckCircle2,
  },
];

export default function AntiPhishingPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <main
      ref={targetRef}
      className="min-h-screen bg-white text-zinc-950 overflow-hidden"
    >
      <Navbar />

      {/* Hero Section */}
      <HeroSection />
      <CyberSectionDivider theme="blue" />

      {/* Strategic Capability Section */}
      <section className="mb-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <motion.div
            style={{ y: y1, rotate }}
            className="absolute top-[10%] right-[5%] w-64 h-64 border border-blue-500/5 rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="BRAND SECURITY MATURITY" theme="blue" className="mb-10" />
            <h2 className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]">
              Detection & Neutralization
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
              We monitor channels for spoof files, analyze applications, block malicious URLs, and train employees to construct a solid human defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-md group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-600 rounded-full group-hover:scale-y-125 transition-transform" />
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-base font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <BlueSectionDivider />

          {/* Hardening Section */}
          <div className="max-w-3xl mx-auto mb-20 text-center mt-32">
            <SectionDivider title="PROACTIVE INTERVENTION" theme="blue" className="mb-10" />
            <h2 className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]">
              Methodical Action Channels
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
              Providing direct defensive capabilities to safeguard operational reputation:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            {actionItems.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-md group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-600 rounded-full group-hover:scale-y-125 transition-transform" />
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-base font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <BlueSectionDivider />
          <SectionDivider title="CORE ARCHITECTURE" theme="blue" className="!justify-start mb-20" />

          {/* Pillars split details section */}
          <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1] uppercase">
                Active Brand Shielding
              </h2>
              <div className="space-y-8">
                {pillars.map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-zinc-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-lg">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-zinc-900 uppercase tracking-tighter mb-2">
                        {item.title}
                      </h4>
                      <p className="text-zinc-500 text-base font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group bg-zinc-900 p-12 rounded-[3rem] text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-tighter">
                Strategic Shielding
              </h3>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-300 relative z-10 mb-12">
                "Keystone deploys an exhaustive strategy to detect, neutralize, and raise awareness against phishing attacks using the web, social networks, and mobile applications. Contact us for a proactive defense against these emerging threats."
              </p>
              <div className="pt-10 border-t border-white/10 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 bg-blue-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-all"
                >
                  Consult an Expert <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CyberSectionDivider theme="blue" />
      <Footer />
    </main>
  );
}
