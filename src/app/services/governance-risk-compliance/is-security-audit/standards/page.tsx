"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  FileCheck,
  Compass,
  Cpu,
  Bookmark,
  Award,
  Lock,
  Globe,
  Settings,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

const complianceServices = [
  {
    title: "In-Depth Compliance Evaluation",
    description:
      "We conduct comprehensive audits to evaluate your alignment with the specific norms and standards you target, identifying gaps and proposing customized solutions to meet strict requirements.",
    icon: FileCheck,
  },
  {
    title: "Adaptation to Required Standards",
    description:
      "Our team possesses extensive expertise in each framework, tailoring our audits to your operational realities while meeting the targeted standards' requirements.",
    icon: Compass,
  },
  {
    title: "Precise & Actionable Audit Reports",
    description:
      "We deliver thorough audit reports detailing every compliance gap, complete with practical, step-by-step remediation plans to ensure quick and robust compliance.",
    icon: Cpu,
  },
];

const whyChooseKeystone = [
  {
    title: "Multi-Standard Expertise",
    description:
      "Our specialists are fully certified across a wide range of global standards, delivering highly precise, reliable, and thorough security evaluations.",
    icon: Globe,
  },
  {
    title: "Audit Personalization",
    description:
      "We customize our auditing processes to align with your business context, ensuring standard requirements are achieved smoothly without disrupting operations.",
    icon: Settings,
  },
  {
    title: "Sustainable Compliance",
    description:
      "We don't just help you pass audits; we build sustainable security processes that continuously maintain compliance, reinforcing buyer and partner trust.",
    icon: Award,
  },
];

const standardItems = [
  {
    name: "ISO 27001 / ISO 27005",
    desc: "Information Security Management System & Risk Management",
    logo: "/certif/27001.png",
    type: "image",
  },
  {
    name: "ISO 27002",
    desc: "Code of Practice for Information Security Controls",
    logo: "/certif/27002.svg",
    type: "svg",
  },
  {
    name: "PCI DSS",
    desc: "Payment Card Industry Data Security Standard",
    logo: "/certif/PCIDSS.png",
    type: "image",
  },
  {
    name: "SWIFT CSP",
    desc: "SWIFT Customer Security Programme",
    logo: "/certif/SWIFT.png",
    type: "image",
  },
  {
    name: "NIST CSF",
    desc: "NIST Cybersecurity Framework",
    logo: "/certif/nistcyber.svg",
    type: "svg",
  },
  {
    name: "GDPR",
    desc: "General Data Protection Regulation",
    logo: "/certif/GDPR.webp",
    type: "image",
  },
  {
    name: "ISO 22301",
    desc: "Business Continuity Management Systems",
    logo: "/certif/22301.png",
    type: "image",
  },
  {
    name: "ISO 27701",
    desc: "Privacy Information Management System Extension",
    logo: "/certif/27701.png",
    type: "image",
  },
  {
    name: "HIPAA",
    desc: "Health Insurance Portability and Accountability Act",
    logo: "/certif/hipaa.png",
    type: "image",
  },
  {
    name: "SOC 2",
    desc: "Trust Services Criteria for Security & Privacy",
    logo: "/certif/SOC2.webp",
    type: "image",
  },
];

export default function StandardsCompliancePage() {
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
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/vids/videoplayback.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 sm:bg-linear-to-r sm:from-black/60 sm:via-black/20 sm:to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center lg:items-start lg:text-left h-full justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl pt-10"
          >
            <div className="mb-6 inline-flex items-center gap-3 text-red-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              <span>GRC</span>
              <ChevronRight size={8} />
              <span>IS Security Audit</span>
              <ChevronRight size={8} />
              <span className="text-white/60">Standards Compliance Audit</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              Standards Compliance
            </h1>

            <HeroTypeLine
              items={["Norms", "Expertise", "Recognition"]}
            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              Normative compliance auditing is essential to respect international norms and guarantee the security of your operations. At Keystone, our audit service supports you to achieve and maintain compliance with standards such as ISO27001, ISO 27005, ISO22301, ISO27701, PCI/DSS, HIPAA, GDPR, SWIFT CSP, NIST CSF, and SOC2.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl"
              >
                Request Standards Audit <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Infinite Certifications Marquee (Bottom of Hero) */}
        <div className="pointer-events-auto absolute bottom-0 left-0 z-10 w-full overflow-hidden pb-2 sm:pb-8">
          <motion.div
            className="flex w-max items-center gap-8 whitespace-nowrap px-4 sm:gap-16 sm:px-8 lg:gap-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 60,
              repeat: Infinity,
            }}
          >
            {Array(5)
              .fill([
                { src: "/certif/SWIFT.png", alt: "SWIFT" },
                { src: "/certif/27001.png", alt: "ISO 27001" },
                { src: "/certif/27002.svg", alt: "ISO 27002" },
                { src: "/certif/PCIDSS.png", alt: "PCI DSS" },
                { src: "/certif/nistcyber.svg", alt: "NIST Cybersecurity Framework" },
                { src: "/certif/GDPR.webp", alt: "GDPR" },
                { src: "/certif/22301.png", alt: "ISO 22301" },
                { src: "/certif/27701.png", alt: "ISO 27701" },
                { src: "/certif/hipaa.png", alt: "HIPAA" },
                { src: "/certif/SOC2.webp", alt: "SOC 2" },
              ])
              .flat()
              .map((logo, idx) => (
                <div
                  key={idx}
                  className="relative h-14 w-14 shrink-0 cursor-pointer transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20 lg:h-28 lg:w-28"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
              ))}
          </motion.div>
        </div>

        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider />

      {/* Standards Showroom Section */}
      <section className="mb-20 bg-zinc-50 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="STANDARDS & REGULATORY SCOPE" className="mb-10" />
            <motion.h2
              className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Supported Frameworks
            </motion.h2>
            <p className="text-lg text-zinc-600 font-medium leading-relaxed">
              Whether you are in banking, healthcare, retail, or tech, we evaluate and prepare your teams across all critical security certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {standardItems.map((std, idx) => (
              <motion.div
                key={std.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="group bg-white p-8 rounded-[2rem] border border-zinc-150 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[280px]"
              >
                <div className="flex h-24 w-full items-center justify-center mb-6 relative">
                  <div className="relative h-20 w-40 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={std.logo}
                      alt={std.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-tight group-hover:text-red-600 transition-colors mb-1">
                    {std.name}
                  </h4>
                  <p className="text-[11px] text-zinc-500 leading-normal font-medium max-w-[160px] mx-auto">
                    {std.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* Services Section */}
      <section className="mb-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <motion.div
            style={{ y: y1, rotate }}
            className="absolute top-[10%] right-[5%] w-64 h-64 border border-red-500/5 rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="OUR STANDARDS COMPLIANCE SERVICES" className="mb-10" />
            <motion.h2
              className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Align with Global Standards
            </motion.h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
              We guide you from initial alignment assessment to successful certification and post-compliance audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
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
                  href="/contact"
                  className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] text-red-600 hover:gap-4 transition-all"
                >
                  Request Assessment <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* Why Choose Section */}
      <section className="mb-20 bg-zinc-50/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="WHY CHOOSE KEYSTONE" className="mb-10" />
            <motion.h2
              className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Auditing with Confidence
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseKeystone.map((item, idx) => (
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
                    <h4 className="text-xl font-bold text-zinc-900 mb-3 uppercase tracking-tighter group-hover:text-red-600 transition-colors italic">
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

      {/* Partner Section */}
      <section className="mb-20 bg-white">
        <SectionDivider title="YOUR COMPLIANCE PARTNER" className="!justify-start mb-6" />
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2
                className="text-4xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1] uppercase"
              >
                Assurez la Confiance
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed font-medium border-l-4 border-red-600 pl-8">
                Keystone is your trusted partner to achieve and maintain compliance across multiple international frameworks. Let us transform regulatory complexity into an active security advantage.
              </p>
              <div className="flex flex-col gap-4 pt-6">
                {[
                  "Comprehensive GAP Analysis",
                  "Expert Multi-Framework Compliance",
                  "Actionable Remediation Blueprints",
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
                  className="text-3xl font-bold mb-8 uppercase tracking-tighter italic"
                >
                  Contact Us
                </motion.h2>
                <p className="text-zinc-300 text-xl font-light italic leading-relaxed mb-12">
                  "Contact us today to discuss how our standards compliance audit services can ensure your business aligns with key international frameworks."
                </p>
                <div className="pt-10 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all"
                  >
                    Request Audit <ArrowRight size={18} />
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
