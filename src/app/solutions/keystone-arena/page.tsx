"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Bot, ShieldAlert, UsersRound, type LucideIcon } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const MotionLink = motion.create(Link);

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05, delayChildren: delay } },
        hidden: {},
      }}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex}>
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
          {wordIndex !== words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
}

type ArenaCard = {
  title: string;
  description: string;
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

const highlights: ArenaCard[] = [
  {
    title: "CTI workflows",
    description: "Track intelligence, prioritize signals, and move from raw data to decisions faster.",
    icon: Bot,
  },
  {
    title: "Analyst collaboration",
    description: "Share context, tasks, and case progress across the teams that need it most.",
    icon: UsersRound,
  },
  {
    title: "Operational resilience",
    description: "Built to help security teams maintain focus under pressure and keep response structured.",
    icon: ShieldAlert,
  },
];

export default function KeystoneArenaPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-zinc-950">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
          >
            <source src="/vids/herosection.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-zinc-950/45" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto flex flex-1 flex-col items-center justify-center gap-8 px-4 pt-28 pb-40 sm:px-6 sm:pt-32 sm:pb-48 lg:flex-row lg:justify-between lg:gap-0 lg:px-12 lg:pt-24 lg:pb-28 lg:overflow-visible">
          {/* Left Side: Hero Text */}
          <div className="flex w-full flex-col items-center gap-4 text-center sm:gap-6 lg:w-2/3 lg:items-start lg:gap-10 lg:text-left">
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-2 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-red-300"
            >
              Keystone ARENA
            </motion.p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white max-w-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <TypingText text="CTI platform for teams that need clearer threat operations." delay={0.5} />
            </h1>

            <p className="mt-4 max-w-2xl text-base font-medium tracking-wide text-gray-300 sm:text-lg md:text-xl">
              <TypingText text="Keystone ARENA helps security teams organize threat intelligence, coordinate response, and turn noisy inputs into a structured operational picture." delay={2} />
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-white sm:mt-10"
            >
              <MotionLink
                href="/contact"
                whileHover={{ x: 10 }}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg transition-colors hover:bg-red-700 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Request a demo
                <ArrowRight className="h-4 w-4" />
              </MotionLink>
              <Link href="/solutions" className="w-full sm:w-auto">
                <motion.button whileHover={{ x: 10 }} className="flex w-full items-center justify-center gap-3 border-b border-white/50 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:border-white hover:bg-transparent sm:text-base">
                  Back to solutions
                  <span>→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Arena Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="relative z-20 mt-8 w-full max-w-md lg:mt-0 lg:ml-auto lg:w-1/3 lg:max-w-sm"
          >
            <div className="rounded-2xl border border-white/20 bg-black/40 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
              <div className="mb-6 flex items-center justify-between gap-3">
                <motion.h2 className="text-lg font-bold uppercase tracking-wider text-white sm:text-xl">Highlights</motion.h2>
              </div>

              <div className="flex flex-col gap-6">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className={`border-b border-white/10 pb-6 last:border-0 last:pb-0 ${idx > 0 ? "hidden sm:block" : ""}`}>
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-600/15 text-red-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <motion.h2 className="text-white font-bold text-lg leading-snug">{item.title}</motion.h2>
                      <p className="text-gray-300 text-sm mt-2 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
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
            {Array(40).fill("/certif/27001.png").map((src, idx) => (
              <div
                key={idx}
                className="relative h-14 w-14 shrink-0 cursor-pointer opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 sm:h-20 sm:w-20 lg:h-28 lg:w-28"
              >
                <Image
                  src={src}
                  alt="ISO 27001 Certification"
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <ScrollIndicator className="pointer-events-none hidden bottom-28 lg:flex xl:bottom-36" />
      </motion.section>

      <CyberSectionDivider />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        className="mb-16 px-4 sm:px-6 md:px-12 md:mb-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionDivider title="ARENA CAPABILITIES" className="mb-12" />
          <motion.div variants={stagger} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div key={item.title} whileHover={{ y: -8, scale: 1.01 }} className="scroll-mt-28">
                  <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(220,38,38,0.1)] hover:-translate-y-2 transition-all duration-300 group border border-gray-100 flex flex-col h-full block">
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm border border-red-100 group-hover:border-red-600 shrink-0">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-grow">{item.description}</p>
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center text-red-600 font-bold text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Request a demo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                    </div>
                  </div>
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
          <Image src="/background/vector/cyber-matrix.svg" alt="" fill className="object-cover" />
        </motion.div>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <motion.div variants={stagger} className="max-w-3xl">
            <motion.p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Building the Digital Keystone
            </motion.p>
            <motion.h2 className="text-3xl font-black tracking-tight md:text-5xl">
              See how ARENA fits your intelligence process.
            </motion.h2>
            <motion.p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
              We can walk you through the platform and discuss how it would support your CTI operations.
            </motion.p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-700 sm:w-fit">
              Request a demo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <CyberSectionDivider />
    </main>
  );
}