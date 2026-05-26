"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ChevronRight,
  Lock,
  DoorOpen,
  ShieldAlert,
  FileText,
  Construction,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";

const features = [
  {
    title: "Evaluation of Access and Physical Security",
    description:
      "We evaluate physical access points, security measures, and access control procedures to identify weaknesses.",
    icon: Lock,
  },
  {
    title: "Realistic Attack Simulations",
    description:
      "We conduct realistic physical attack simulations, such as espionage, theft, and unauthorized access to sensitive premises, to identify vulnerabilities.",
    icon: ShieldAlert,
  },
  {
    title: "Testing Security Procedures",
    description:
      "We are evaluating the effectiveness of physical security procedures, including identifying gaps in visitor management and facility monitoring.",
    icon: DoorOpen,
  },
];

const subFeatures = [
  {
    title: "Detailed Report and Recommendations",
    description:
      "We provide a comprehensive report of our findings, accompanied by recommendations to enhance the physical security of your facilities.",
    icon: FileText,
  },
  {
    title: "Strengthening Physical Security",
    description:
      "We support you in implementing corrective measures to enhance the security of your premises and physical installations.",
    icon: Construction,
  },
];

export default function PhysicalIntrusionTestPage() {
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
        className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden pt-52 sm:pt-60 lg:pt-64 pb-12"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/vids/herosection.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 sm:bg-linear-to-r sm:from-black/60 sm:via-black/20 sm:to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center items-center text-center lg:items-start lg:text-left py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 text-red-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              <span>Offensive Security</span>
              <ChevronRight size={8} />
              <span className="text-white/60">Physical Intrusion Test</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              Physical Intrusion Test
            </h1>

            <HeroTypeLine
              items={["Physical Security", "Access Control", "Facility Resilience"]}
            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              Keystone's physical penetration testing service assesses the resilience of your physical infrastructure by simulating realistic attacks to identify potential vulnerabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
              <Link
                href="/contact?service=physical-intrusion"
                className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl"
              >
                Request Physical Audit <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Infinite Certifications Marquee (Bottom of Hero) */}
        <CertificationsMarquee className="mt-auto pointer-events-auto cursor-default pb-2 sm:pb-8" />

        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider />

      {/* Services Section */}
      <section className="mb-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <motion.div
            style={{ y: y1, rotate }}
            className="absolute top-[10%] left-[5%] w-64 h-64 border border-red-500/5 rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="PHYSICAL SECURITY CORE" className="mb-10" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Strengthen Physical Security
            </motion.h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
              We simulate real-world physical intrusion threats to evaluate response times, alarm systems, and guard behaviors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((service, idx) => (
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
                  Consult an Expert <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* Sub Features Section */}
      <section className="mb-20 bg-zinc-50/30 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="FACILITY AND PERIMETER HARDENING" className="mb-10" />
            <motion.h2
              className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Auditing & Mitigation
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {subFeatures.map((item, idx) => (
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

      {/* Partnership Section */}
      <section className="mb-20 bg-white">
        <SectionDivider title="YOUR PHYSICAL SECURITY PARTNER" className="!justify-start mb-20" />
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
                Your Perimeter Defense Partner
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed font-medium border-l-4 border-red-600 pl-8">
                Keystone is ready to assist your organization in evaluating physical infrastructure defenses, testing staff alert protocols, and building highly resilient physical assets.
              </p>
              <div className="flex flex-col gap-4 pt-6">
                {[
                  "Lockpicking & RFID/Badge Duplication Audits",
                  "Intruder Detection & Alarm Response Timings",
                  "Detailed Remediation Guidelines for Access Infrastructure",
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
                  "Is your physical perimeter truly secure? Keystone provides its expertise to assess and strengthen the physical security of your organization. Contact us for a detailed assessment."
                </p>
                <div className="pt-10 border-t border-white/10">
                  <Link
                    href="/contact?service=physical-intrusion"
                    className="inline-flex items-center gap-4 bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all"
                  >
                    Request Assessment <ArrowRight size={18} />
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
