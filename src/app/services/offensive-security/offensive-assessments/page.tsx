"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Smartphone, Server, Users, Key, Cpu, type LucideIcon } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

type OffensiveCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const offensiveCards: OffensiveCard[] = [
  {
    title: "Web & Mobile Application Assessment",
    description: "In-depth dynamic and static assessments of your web and mobile applications to identify critical vulnerabilities before attackers can exploit them.",
    href: "/services/offensive-security/offensive-assessments/web-mobile-application-assessment",
    icon: Smartphone,
  },
  {
    title: "External & Internal Penetration Testing",
    description: "Simulating real-world attacks from both outside and inside your network to evaluate the effectiveness of your security perimeters.",
    href: "/services/offensive-security/offensive-assessments/external-internal-penetration-testing",
    icon: Server,
  },
  {
    title: "Social Engineering",
    description: "Testing the human element of your security through carefully crafted phishing, vishing, and impersonation campaigns.",
    href: "/services/offensive-security/offensive-assessments/social-engineering",
    icon: Users,
  },
  {
    title: "Physical Intrusion Test",
    description: "Evaluating the physical security controls of your facilities by attempting unauthorized access to restricted areas.",
    href: "/services/offensive-security/offensive-assessments/physical-intrusion-test",
    icon: Key,
  },
  {
    title: "Hardware Testing & Reverse Engineering",
    description: "Deep technical analysis of hardware components and firmware to uncover latent vulnerabilities and backdoors.",
    href: "/services/offensive-security/offensive-assessments/hardware-testing-reverse-engineering",
    icon: Cpu,
  },
];

export default function OffensiveAssessmentsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative flex min-h-[100svh] items-center overflow-hidden bg-zinc-950 px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-20 sm:pt-32 md:px-12"
      >
        <motion.div
          animate={{ scale: [1, 1.06, 1], x: ["0%", "-3%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <video
            src="/vids/herosection.mp4"
            poster="/background/Rectangle 59.png"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-45"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-zinc-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25" />
        <div className="absolute inset-0 bg-[url('/background/vector/cyber-matrix.svg')] bg-cover bg-center opacity-15 mix-blend-screen" />
        <motion.div variants={stagger} className="relative z-10 mx-auto max-w-7xl w-full">
          <motion.div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-red-300 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Advanced Penetration Testing
          </motion.div>

          <motion.h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl md:text-7xl mb-6">
            Offensive Assessments
          </motion.h1>
          <motion.p className="max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg md:text-xl md:leading-8 mb-10">
            Uncover the blind spots in your technology, processes, and people. Our offensive assessments simulate advanced real-world threats, providing you with actionable insights and strategic remediation guidance to fortify your digital borders.
          </motion.p>
          
          <motion.div className="flex gap-4">
            <Link
              href="#explore-assessments"
              className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-xl shadow-red-500/20"
            >
              Explore Assessments <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
        <ScrollIndicator className="hidden md:flex" />
      </motion.section>

      <CyberSectionDivider />

      <motion.section
        id="explore-assessments"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="py-24 px-4 sm:px-6 md:px-12 bg-white"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div className="mb-16">
            <SectionDivider title="ADVANCED ASSESSMENTS" className="mb-8" />
            <h2 className="text-3xl lg:text-5xl font-extrabold text-zinc-900 tracking-tighter uppercase leading-tight max-w-2xl">
              Exposing Vulnerabilities Before They Exploit You
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offensiveCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.href}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="scroll-mt-28"
                >
                  <Link
                    href={card.href}
                    className="bg-zinc-50 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(220,38,38,0.1)] hover:-translate-y-2 transition-all duration-300 group border border-zinc-100 flex flex-col h-full overflow-hidden relative"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-colors" />
                    
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm border border-red-50 group-hover:border-red-600 shrink-0 relative z-10">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <motion.h3 className="text-xl font-bold mb-4 text-zinc-900 leading-tight relative z-10 flex items-center gap-3">
                      <div className="w-1 h-6 bg-red-600 rounded-full group-hover:h-8 transition-all" />
                      {card.title}
                    </motion.h3>
                    <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8 flex-grow relative z-10 font-medium">
                      {card.description}
                    </p>
                    <div className="mt-auto pt-6 border-t border-zinc-200 flex items-center text-red-600 font-bold text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                      Explore detailed offering
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <CyberSectionDivider />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        className="relative overflow-hidden bg-zinc-950 px-4 py-16 text-white sm:px-6 sm:py-20 md:px-12 md:py-24"
      >
        <motion.div
          animate={{ x: ["0%", "-4%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 opacity-20"
        >
          <Image
            src="/background/vector/cyber-matrix.svg"
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <motion.div variants={stagger} className="max-w-3xl">
            <motion.p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Building the Digital Keystone
            </motion.p>
            <motion.h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Do not fight cyber threats alone.
            </motion.h2>
            <motion.p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
              Work with Keystone to strengthen offensive testing, uncover hidden weaknesses, and prepare for the next attack before it happens.
            </motion.p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact?service=offensive-security"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-700 sm:w-fit"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <CyberSectionDivider />
    </main>
  );
}