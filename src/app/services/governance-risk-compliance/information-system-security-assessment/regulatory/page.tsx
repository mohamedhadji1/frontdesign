"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  Search,
  Eye,
  FileCheck,
  CheckCircle,
  Scale,
  Building
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

const helpCards = [
  {
    title: "Thorough Compliance Assessment",
    description: "We conduct detailed assessments to evaluate your compliance with legal and regulatory requirements specific to your sector, identifying gaps and proposing solutions to correct them.",
    icon: Eye,
  },
  {
    title: "Risk Analysis",
    description: "Our team analyzes the risks associated with non-compliance, highlighting areas of deviation and helping you develop risk management strategies.",
    icon: Search,
  },
  {
    title: "Precise & Useful Reports",
    description: "We provide clear and detailed assessment reports, accompanied by specific recommendations to help you achieve and maintain compliance.",
    icon: FileCheck,
  },
];

const approachCards = [
  {
    title: "Personalized Approach",
    description: "We tailor our assessments to your specific needs, taking into account the regulations specific to your sector and your unique compliance targets.",
    icon: Scale,
  },
  {
    title: "Regulatory Expertise",
    description: "Our team possesses in-depth knowledge of current regulations, ensuring an accurate assessment of your compliance.",
    icon: Building,
  },
  {
    title: "Reputation Protection",
    description: "By helping you maintain compliance, we assist you in preserving your company's reputation and strengthening the trust of your stakeholders.",
    icon: CheckCircle,
  },
];

export default function RegulatoryAssessmentPage() {
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
            <source src="/vids/videoplayback.mp4" type="video/mp4" />
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
              <span>GRC</span>
              <ChevronRight size={8} />
              <span>IS Security Assessment</span>
              <ChevronRight size={8} />
              <span className="text-white/60">Regulatory Assessment</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              Regulatory Assessment
            </h1>

            <HeroTypeLine
              items={["Legal", "Regulatory", "Requirements"]}
            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              Regulatory assessment is a cornerstone for ensuring compliance with legal and regulatory requirements, strengthening stakeholder confidence. At Keystone, our regulatory assessment service is designed to assess your compliance and help you maintain a high level of alignment with legal and regulatory requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl"
              >
                Assess Compliance <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider />

      <section className="mb-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <motion.div
            style={{ y: y1, rotate }}
            className="absolute top-[10%] right-[5%] w-64 h-64 border border-red-500/5 rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="HOW WE CAN HELP YOU" className="mb-10" />
            <motion.h2
              className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Assessing Excellence
            </motion.h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
              We leverage analytical expertise and clear roadmap strategies to guarantee robust and continuous alignment to regulatory standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {helpCards.map((service, idx) => (
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CyberSectionDivider />

      <section className="mb-20 bg-zinc-50/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="OUR APPROACH" className="mb-10" />
            <motion.h2
              className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Upholding Standards
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {approachCards.map((item, idx) => (
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

      <section className="mb-20 bg-white">
        <SectionDivider title="WHY CHOOSE KEYSTONE" className="!justify-start mb-20" />
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
                Ensure Regulatory Alignment
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed font-medium border-l-4 border-red-600 pl-8">
                Keystone is your reliable partner to ensure your business remains compliant with sector-specific regulations, reducing risks and protecting operations.
              </p>
              <div className="flex flex-col gap-4 pt-6">
                {[
                  "Specialized Regulation Focus",
                  "Expert Remediation Strategy",
                  "Continuous Compliance Awareness",
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
                  "Contact us today to explore how our specialized regulatory assessment services can strengthen your business and safeguard operations."
                </p>
                <div className="pt-10 border-t border-white/10">
                  <Link
                    href="/contact"
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
