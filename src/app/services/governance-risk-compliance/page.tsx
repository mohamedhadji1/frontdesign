"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  Landmark,
  AlertTriangle,
  FileCheck,
  Award,
  Handshake,
  BarChart3,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Search,
  Key,
  Settings,
  Network,
  Users,
  FileText,
  Database,
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
  // Cybersecurity & Compliance Assessment
  {
    title: "Information Security Assessment",
    description: "Deep-dive evaluation of your information security management systems (ISMS) and core technical controls.",
    icon: ShieldCheck,
    href: "/services/governance-risk-compliance/information-system-security-assessment",
  },
  {
    title: "Regulatory Assessment",
    description: "Gap audits against national cybersecurity frameworks and mandatory government regulatory guidelines.",
    icon: Landmark,
    href: "/services/governance-risk-compliance/information-system-security-assessment/regulatory",
  },
  {
    title: "Standards Compliance Assessment",
    description: "Comprehensive alignment audits against international standards: ISO 27001, PCI-DSS, GDPR, SWIFT, NIST.",
    icon: FileCheck,
    href: "/services/governance-risk-compliance/information-system-security-assessment/standards",
  },
  {
    title: "Risk Assessment",
    description: "Holistic evaluation to anticipate potential threats, quantify impact, and formulate strategic mitigation plans.",
    icon: AlertTriangle,
    href: "/services/governance-risk-compliance/risk-assessment",
  },
  {
    title: "Authorization Assessment",
    description: "Thorough audits of directory roles, active permissions, and privileged account access to enforce least privilege.",
    icon: Key,
    href: "/services/governance-risk-compliance/access-rights-assessment",
  },

  // Regulatory Compliance & Certification
  {
    title: "Regulatory Compliance Support",
    description: "Structured assistance to align your business operations with national and local cybersecurity regulatory guidelines.",
    icon: Settings,
    href: "/services/governance-risk-compliance/compliance-alignment",
  },
  {
    title: "ISO 27001 Certification Support",
    description: "Expert consulting to design, implement, and maintain a compliant Information Security Management System (ISMS).",
    icon: Award,
    href: "/services/governance-risk-compliance/iso-27001-certification-support",
  },
  {
    title: "ISO 22301 Certification Support",
    description: "Guidance to build a Business Continuity Management System (BCMS) and achieve certified crisis resilience.",
    icon: BarChart3,
    href: "/services/governance-risk-compliance/iso-22301-certification-support",
  },
  {
    title: "ISO 27701 Certification Support",
    description: "Extend your ISMS with a Privacy Information Management System (PIMS) to ensure compliant personal data processing.",
    icon: Lock,
    href: "/services/governance-risk-compliance/iso-27701-certification-support",
  },
  {
    title: "ISO 42001 Certification Support",
    description: "Establish an Artificial Intelligence Management System (AIMS) to govern algorithmic safety and trust.",
    icon: Network,
    href: "/services/governance-risk-compliance/iso-42001-certification-support",
  },
  {
    title: "SWIFT CSP Compliance Support",
    description: "Independent Customer Security Programme (CSP) audits and Attestation Support on the SWIFT KYC registry.",
    icon: ShieldAlert,
    href: "/services/governance-risk-compliance/swift-csp-compliance-support",
  },
  {
    title: "Privacy & Data Protection",
    description: "Enforce responsible data management rules, user consent compliance, and privacy-by-design standards.",
    icon: Users,
    href: "/services/governance-risk-compliance/personal-data-protection",
  },
  {
    title: "Legal Compliance Support",
    description: "Align your technical infrastructure and operational data flows with regional legal and privacy obligations.",
    icon: FileText,
    href: "/services/governance-risk-compliance/compliance-alignment/legal",
  },

  // GRC Advisory Services
  {
    title: "Security Policy Development",
    description: "Establish robust, customized security policies integrating industry best practices for comprehensive asset protection.",
    icon: FileCheck,
    href: "/services/governance-risk-compliance/security-policy-development",
  },
  {
    title: "BCP & DRP Development",
    description: "Design custom business continuity and disaster recovery plans to minimize downtime during interruptions.",
    icon: Settings,
    href: "/services/governance-risk-compliance/bcp-drp-development",
  },
  {
    title: "Data Classification",
    description: "Map, identify, and categorize sensitive information to apply custom security rules and access governance.",
    icon: Database,
    href: "/services/governance-risk-compliance/data-classification",
  },
  {
    title: "Virtual CISO & DPO",
    description: "Get ongoing strategic cyber leadership, advisory, and privacy compliance guidance from seasoned experts.",
    icon: ShieldCheck,
    href: "/services/governance-risk-compliance/virtual-ciso-dpo",
  },
  {
    title: "Governance & Risk Management Support",
    description: "Strategic partnerships to build resilient corporate risk structures, treatment playbooks, and mitigation models.",
    icon: Handshake,
    href: "/services/governance-risk-compliance/governance-risk-management-support",
  },
];

const whyKeystone = [
  {
    title: "Deep Expertise",
    description:
      "Our team possesses in-depth expertise in risk management, compliance, and governance, delivering solutions tailored to your unique needs.",
    icon: Award,
  },
  {
    title: "Personalized Approach",
    description:
      "Every business faces specific GRC challenges. We customize our services to meet your particular needs and objectives.",
    icon: Handshake,
  },
  {
    title: "Tangible Results",
    description:
      "Our GRC services and solutions deliver real impact — reducing risks, improving compliance, and strengthening your business resilience against today's challenges.",
    icon: BarChart3,
  },
];


export default function GrcPage() {
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

      {/* GRC Services Section */}
      <section className="mb-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <motion.div
            style={{ y: y1, rotate }}
            className="absolute top-[10%] right-[5%] w-64 h-64 border border-red-500/5 rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="OUR GRC SERVICES" className="mb-10" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Comprehensive GRC Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg text-zinc-600 leading-relaxed font-medium"
            >
              From governance frameworks to risk mitigation and regulatory
              compliance — we cover every dimension of GRC.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.04 }}
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

      {/* Why Choose Keystone Section */}
      <section className="mb-20 bg-zinc-50/30">
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
              Your Trusted GRC Partner
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
                className="group relative bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
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
          title="YOUR GRC PARTNER"
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
                Robust GRC, Continuous Compliance
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed font-medium border-l-4 border-red-600 pl-8">
                At Keystone, we are your trusted partner for robust GRC,
                continuous compliance, and risk reduction.
              </p>
              <div className="flex flex-col gap-4 pt-6">
                {[
                  "Reduce Risks",
                  "Strengthen Resilience",
                  "Ensure Compliance",
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
                  "Contact us to discuss how our GRC services can support your
                  business and build lasting resilience."
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
