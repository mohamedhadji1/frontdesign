"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Activity,
  Cloud,
  Network,
  Database,
  ShieldAlert,
  Settings,
  ShieldCheck,
  Lock,
  Award,
  Handshake,
  BarChart3,
  Search,
  Radar,
  FileText,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { HeroSection } from "./sections/HeroSection";

const offerings = [
  {
    title: "Infrastructure Assessment",
    description:
      "Complete evaluation of physical/virtual networks, active servers, and foundational architecture to guarantee robust protection.",
    icon: Activity,
    href: "/services/security-assessment/infrastructure-assessment",
  },
  {
    title: "Cloud Environment Assessment",
    description:
      "Rigorous posture assessment of AWS, Azure, and GCP configurations. We identify misconfigured IAM roles, exposed buckets, and compliance gaps.",
    icon: Cloud,
    href: "/services/security-assessment/cloud-environment-assessment",
  },
  {
    title: "OT Assessment",
    description:
      "Security evaluation of automated control systems (ICS/SCADA). We detect operational risks and align with the IEC 62443 standard.",
    icon: Network,
    href: "/services/security-assessment/industrial-system-assessment",
  },
  {
    title: "Core Banking Systems Assessment",
    description:
      "Deep vulnerability testing for Core & Internet Banking platforms. We focus on transaction manipulation, API flaws, and regulatory alignment.",
    icon: Database,
    href: "/services/security-assessment/core-internet-banking-system-assessment",
  },
  {
    title: "Architecture Assessment",
    description:
      "We analyze structures, structural designs, and data flows to ensure optimal efficiency, extreme resilience, and high security baselines.",
    icon: Network,
    href: "/services/security-assessment/architecture-assessment",
  },
  {
    title: "Active Directory Assessment",
    description:
      "Deep-dive audit into AD architectures, domain controller configurations, access controls, trust relationships, and delegation structures.",
    icon: ShieldAlert,
    href: "/services/security-assessment/active-directory-assessment",
  },
  {
    title: "Technical Assistance",
    description:
      "Specialized professional and highly reactive technical support to resolve incidents, troubleshoot platforms, and optimize complex configurations.",
    icon: Settings,
    href: "/services/security-assessment/technical-assistance",
  },
  {
    title: "System Hardening",
    description:
      "We secure core servers, OS configurations, and network devices by applying strict industry guidelines: CIS Benchmarks, NIST, and SANS.",
    icon: ShieldCheck,
    href: "/services/security-assessment/system-hardening",
  },
  {
    title: "Network & Security Architecture Design",
    description:
      "Engineering next-generation secure network layouts, incorporating advanced firewall segmentation, deep traffic analysis tools, and redundancy.",
    icon: Network,
    href: "/services/security-assessment/network-security-architecture",
  },
  {
    title: "Application Security Support",
    description:
      "Ensuring application layer security by auditing code, implementing secure development lifecycle practices (SSDLC), and training dev teams.",
    icon: Lock,
    href: "/services/security-assessment/application-security-support",
  },
  {
    title: "DevSecOps",
    description:
      "Automated security scans (SAST/DAST), dependency auditing, and IaC verification built seamlessly into your build and release pipelines.",
    icon: Settings,
    href: "/services/security-assessment/devsecops",
  },
];

const steps = [
  {
    name: "Intelligence & Scope",
    desc: "Define the assessment perimeter, gather intelligence on external and internal assets, and map the digital footprint.",
    icon: Search,
  },
  {
    name: "Discovery & Scanning",
    desc: "Run focused discovery across networks, cloud, identity, and critical systems to identify exposed services and known weaknesses.",
    icon: Radar,
  },
  {
    name: "Manual Verification",
    desc: "Validate findings by hand, remove false positives, and look for chained misconfigurations that scanners often miss.",
    icon: Settings,
  },
  {
    name: "Impact Analysis",
    desc: "Measure exploitability, business exposure, and operational impact without disrupting production environments.",
    icon: Activity,
  },
  {
    name: "Remediation Roadmap",
    desc: "Deliver prioritized evidence, risk ratings, and technical guidance your teams can act on immediately.",
    icon: FileText,
  },
];

const whyKeystone = [
  {
    title: "Deep Technical Expertise",
    description:
      "Our certified consultants have in-depth experience in complex technical environments, AD infrastructure, and industrial OT environments.",
    icon: Award,
  },
  {
    title: "Actionable Deliverables",
    description:
      "We don't just hand over generic scanner reports. We provide clear, manual proof-of-concepts and verified remediation playbooks.",
    icon: Handshake,
  },
  {
    title: "Complete Security Posture",
    description:
      "From core banking applications to cloud configuration and perimeter defense, we validate your defense-in-depth security structure.",
    icon: BarChart3,
  },
];

export default function SecurityAssessmentPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <main
      ref={targetRef}
      className="min-h-screen bg-white text-zinc-950 overflow-hidden"
    >
      <HeroSection />
      <CyberSectionDivider />

      {/* Offerings Section */}
      <section className="mb-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <motion.div
            style={{ y: y1, rotate }}
            className="absolute top-[10%] right-[5%] w-64 h-64 border border-red-500/5 rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="TECHNICAL CAPABILITIES" className="mb-10" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Comprehensive Security Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg text-zinc-600 leading-relaxed font-medium"
            >
              Go beyond surface-level scanning. We evaluate the configurations, code, and foundational architecture powering your highly specialized environments.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
                className="group bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-red-600 shadow-md group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-red-600 rounded-full group-hover:scale-y-125 transition-transform" />
                  {service.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-base font-medium mb-8 flex-grow">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] text-red-600 hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* Methodology Section (Execution Protocol) */}
      <section className="mb-20 bg-zinc-50/30 py-20 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="EXECUTION PROTOCOL" className="mb-10" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Rigorous Evaluation Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg text-zinc-600 leading-relaxed font-medium"
            >
              Our structured assessment process guarantees complete coverage of your specialized environments, leaving absolutely nothing to chance.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-colors" />
                <div className="flex flex-col gap-6 flex-grow">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-zinc-900 text-white flex items-center justify-center group-hover:bg-red-600 transition-colors shadow-xl">
                    <step.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-zinc-900 mb-3 uppercase tracking-tighter group-hover:text-red-600 transition-colors">
                      {step.name}
                    </h4>
                    <p className="text-zinc-500 text-base font-medium leading-relaxed mb-4">
                      {step.desc}
                    </p>
                  </div>
                </div>
                <div className="font-mono text-4xl font-black text-zinc-100 group-hover:text-red-500/10 transition-colors text-right mt-auto">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* Why Choose Keystone Section */}
      <section className="mb-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider
              title="WHY CHOOSE KEYSTONE"
              className="mb-10"
            />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Your Trusted Security Partner
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whyKeystone.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group relative bg-zinc-50/50 p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-colors" />
                <div className="flex flex-col gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-zinc-900 text-white flex items-center justify-center group-hover:bg-red-600 transition-colors shadow-xl">
                    <item.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-zinc-900 mb-3 uppercase tracking-tighter group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-zinc-500 text-base font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* Partner Section - Vision CTA */}
      <section className="mb-20 bg-white">
        <SectionDivider
          title="YOUR ASSESSMENT PARTNER"
          className="!justify-start mb-6"
        />
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-4xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1] uppercase"
              >
                Robust Protection, Verified Security
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed font-medium border-l-4 border-red-600 pl-8">
                At Keystone, we are your trusted partner for robust protection, verified security controls, and risk reduction across your infrastructure.
              </p>
              <div className="flex flex-col gap-4 pt-6">
                {[
                  "Expose Hidden Threat Paths",
                  "Eliminate Configuration Flaws",
                  "Support Continuous Hardening",
                ].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-4 items-center group"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all">
                      ✓
                    </div>
                    <p className="text-zinc-700 text-lg font-bold uppercase tracking-tight">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-zinc-900 p-12 rounded-[3rem] text-white shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-[80px]" />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8 uppercase tracking-tighter"
                >
                  Why Keystone?
                </motion.h2>
                <p className="text-zinc-300 text-xl font-light leading-relaxed mb-12">
                  "Contact us to discuss how our security assessment services can map your threat landscape and secure your infrastructure against advanced threats."
                </p>
                <div className="pt-10 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all"
                  >
                    Get Started Now <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CyberSectionDivider />
      <ContactCTASection />
    </main>
  );
}
