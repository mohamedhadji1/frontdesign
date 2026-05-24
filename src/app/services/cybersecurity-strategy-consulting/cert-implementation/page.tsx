"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  ServerCog,
  FileCheck,
  Users,
  Gamepad2,
  Network,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { CombinedDeepDive } from "../../defensive-security/Implementation-cert/CombinedDeepDive";

const methodologies = [
  {
    title: "CERT Infrastructure Design",
    description:
      "We design the architecture and processes necessary to build a highly responsive CERT, tailored specifically to your organization's unique requirements.",
    icon: ServerCog,
  },
  {
    title: "Definition of Procedures",
    description:
      "We define clear operational roles, incident response responsibilities, and procedural blueprints to guarantee maximum responsiveness during crises.",
    icon: FileCheck,
  },
  {
    title: "Training and Recruitment",
    description:
      "We supply specialized training programs and professional recruitment guidelines to equip your CERT with elite incident handling capabilities.",
    icon: Users,
  },
  {
    title: "Simulation & Exercises",
    description:
      "We organize advanced simulation tests and real-world practical drills to continuously measure and improve your CERT's responsiveness.",
    icon: Gamepad2,
  },
  {
    title: "Integration & Cooperation",
    description:
      "We facilitate smooth cross-departmental integration and external trust partnerships, promoting rapid cooperation during major digital incidents.",
    icon: Network,
  },
];

export default function CertImplementationPage() {
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
        className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden pt-52 sm:pt-60 lg:pt-64 pb-12 bg-zinc-950"
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
              <span>Strategy Consulting</span>
              <ChevronRight size={8} />
              <span className="text-white/60">CERT Implementation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              CERT Implementation
            </h1>

            <HeroTypeLine
              items={[
                "Incident response capability",
                "CERT operating model",
                "Detection-to-response readiness",
              ]}
            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              Keystone offers its expertise in the implementation of CERTs (Computer Emergency Response Teams), teams dedicated to managing IT security incidents. We collaborate with organizations to establish CERTs capable of detecting, analyzing, and responding quickly to cyber threats.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl"
              >
                Establish Your CERT <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Infinite Certifications Marquee (Bottom of Hero) */}
        <div className="relative w-full overflow-hidden pb-2 sm:pb-8 pointer-events-auto cursor-default mt-auto">
          <style>{`
            @keyframes marquee-grc {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track-grc {
              display: flex;
              width: max-content;
              animation: marquee-grc 60s linear infinite;
            }
            .marquee-track-grc:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="marquee-track-grc items-center gap-8 whitespace-nowrap px-4 sm:gap-16 sm:px-8 lg:gap-24">
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
                  className="relative h-[80px] w-[80px] shrink-0 sm:h-[100px] sm:w-[100px] lg:h-[120px] lg:w-[120px]"
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
          </div>
        </div>

        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider />

      {/* Methodology Section */}
      <section className="mb-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <motion.div
            style={{ y: y1, rotate }}
            className="absolute top-[10%] right-[5%] w-64 h-64 border border-red-500/5 rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="OUR METHODOLOGY" className="mb-10" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Building a Responsive CERT
            </motion.h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
              Our structured approach guarantees a state-of-the-art incident response center tailored exactly to your organizational scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodologies.map((service, idx) => (
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

      {/* Embedded deep dive section for CERT specific details */}
      <section className="mb-20 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <CombinedDeepDive theme="red" />
        </div>
      </section>

      <CyberSectionDivider />

      {/* Strategic Block */}
      <section className="mb-20 bg-white">
        <SectionDivider title="YOUR STRATEGIC PARTNER" className="!justify-start mb-20" />
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
                Build High-End Capabilities
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed font-medium border-l-4 border-red-600 pl-8">
                Keystone is ready to act as your virtual partner to design, build, recruit, and test your dedicated incident response center.
              </p>
              <div className="flex flex-col gap-4 pt-6">
                {[
                  "On-Demand CERT Infrastructure Planning & Blueprints",
                  "Structured Playbooks and Responsive Standard Operational Rules",
                  "Comprehensive Expert Incident Readiness Drills and Simulations",
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
                  "Ready to build elite incident containment and strategic detection capabilities? Contact our strategy consultants today to establish your state-of-the-art CERT."
                </p>
                <div className="pt-10 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all"
                  >
                    Establish Your CERT <ArrowRight size={18} />
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
