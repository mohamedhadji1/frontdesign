"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Cpu, Database, BrainCircuit, Lock, type LucideIcon } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";

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

type HighlightCard = {
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

const highlights: HighlightCard[] = [
  {
    title: "AI Model Deployment",
    description: "Transitioning from concepts to scalable operational AI models embedded in production.",
    icon: Cpu,
  },
  {
    title: "LLM & RAG Architecture",
    description: "Engineering next-generation RAG systems for intelligent data querying and context awareness.",
    icon: Database,
  },
  {
    title: "Secure Agent Workflows",
    description: "Developing autonomous AI agents capable of coordinating and accelerating business operations.",
    icon: BrainCircuit,
  },
];

const capabilities = [
  {
    title: "LLM Engineering",
    description: "Fine-tuning models and customizing open-source LLMs to align perfectly with your domain specific data requirements.",
    icon: Cpu,
  },
  {
    title: "RAG Architecture",
    description: "Build scalable vector databases and ingestion pipelines, delivering prompt contextual data directly to models.",
    icon: Database,
  },
  {
    title: "Agent Orchestration",
    description: "Design goal-directed autonomous agents that carry out complex workflows, reducing manual overhead.",
    icon: BrainCircuit,
  },
  {
    title: "System Optimization",
    description: "Assess models for token efficiency, latency overhead, and accuracy parameters to maximize deployment performance.",
    icon: Lock,
  },
];

const offers = [
  "AI model implementation",
  "Large Language Model implementation",
  "RAG architecture design and deployment",
  "AI agent development",
  "AI-powered process automation",
  "Secure AI integration with existing systems",
  "Proof of Concept design and implementation",
  "AI solution testing, tuning and optimization",
];

export default function AISolutionsImplementationPage() {
  const positioningRef = useRef<HTMLDivElement>(null);
  const offerRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Promise.all([
      import("gsap"),
      import("gsap/dist/ScrollTrigger")
    ]).then(([gsapModule, triggerModule]) => {
      const gsap = gsapModule.default;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (positioningRef.current) {
        const badge = positioningRef.current.querySelector(".positioning-badge");
        const title = positioningRef.current.querySelector(".positioning-title");
        const textElements = positioningRef.current.querySelectorAll(".positioning-text p");

        gsap.fromTo([badge, title, ...Array.from(textElements)],
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: positioningRef.current,
              start: "top 80%",
              once: true,
            }
          }
        );
      }

      if (offerRef.current) {
        const badge = offerRef.current.querySelector(".offer-badge");
        const title = offerRef.current.querySelector(".offer-title");
        const items = offerRef.current.querySelectorAll(".offer-item");

        gsap.fromTo([badge, title],
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: offerRef.current,
              start: "top 80%",
              once: true,
            }
          }
        );

        gsap.fromTo(items,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: offerRef.current,
              start: "top 70%",
              once: true,
            }
          }
        );
      }

      if (highlightsRef.current) {
        const header = highlightsRef.current.querySelector(".highlights-header");
        const cards = highlightsRef.current.querySelectorAll(".highlight-card");

        gsap.fromTo(header,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: highlightsRef.current,
              start: "top 80%",
              once: true,
            }
          }
        );

        gsap.fromTo(cards,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: highlightsRef.current,
              start: "top 70%",
              once: true,
            }
          }
        );
      }
    });
  }, []);

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
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          >
            <source src="/vids/videoplayback.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto flex flex-1 flex-col items-center justify-center gap-8 px-4 pt-28 pb-40 sm:px-6 sm:pt-32 sm:pb-48 lg:flex-row lg:justify-between lg:gap-0 lg:px-12 lg:pt-24 lg:pb-28 lg:overflow-visible">
          {/* Hero Text */}
          <div className="flex w-full flex-col items-center gap-4 text-center sm:gap-6 lg:w-2/3 lg:items-start lg:gap-10 lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-2 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-red-300"
            >
              Service 02
            </motion.p>
            <motion.h2 className="text-3xl font-bold leading-tight tracking-tight text-white max-w-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase">
              <TypingText text="AI Solutions Implementation" delay={0.5} />
            </motion.h2>

            <p className="mt-4 max-w-2xl text-base font-medium tracking-wide text-gray-300 sm:text-lg md:text-xl">
              <TypingText text="Engineer and deploy resilient AI models, context-aware RAG pipelines, and autonomous workflows securely." delay={2} />
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
              <Link href="/services/ai-cybersecurity" className="w-full sm:w-auto">
                <motion.button whileHover={{ x: 10 }} className="flex w-full items-center justify-center gap-3 border-b border-white/50 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:border-white hover:bg-transparent sm:text-base">
                  Back to AI Services
                  <span>→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Infinite Certifications Marquee */}
        <CertificationsMarquee isAbsolute={true} />

        <ScrollIndicator className="pointer-events-none hidden bottom-28 lg:flex xl:bottom-36" />
      </motion.section>

      {/* Highlights Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="bg-white relative z-10 pb-10"
      >
        <div ref={highlightsRef} className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="highlights-header mb-12 flex flex-col items-center justify-center">
            <CyberSectionDivider className="mb-4" />
            <SectionDivider title="Engineering / Integration / Scaling" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="highlight-card group flex flex-col gap-5 rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm hover:shadow-[0_20px_40px_rgba(220,38,38,0.08)] hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 border border-red-100 group-hover:border-red-600 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Market Positioning Section */}
      <section
        ref={positioningRef}
        className="pb-10 bg-white text-zinc-900 border-b border-gray-100 relative z-10"
      >
        <div className="mx-auto max-w-5xl text-center px-4 sm:px-6">
          <div className="positioning-badge mb-12 flex flex-col items-center justify-center">
            <CyberSectionDivider className="mb-4" />
            <SectionDivider title="Market Positioning" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl mb-8 positioning-title uppercase leading-[1.1]">
            Turn complex AI possibilities into stable enterprise capabilities.
          </h2>
          <div className="text-gray-600 text-base md:text-lg leading-relaxed font-medium space-y-6 positioning-text max-w-4xl mx-auto">
            <p>
              Many organizations struggle to bridge the gap between pilot PoCs and resilient enterprise scale AI. Deploying models requires careful planning of ingestion schemas, vector architectures, API integrations, and robust latency bounds.
            </p>
            <p>
              Keystone delivers specialized, security-first implementation services. We construct operational AI models, design and deploy enterprise RAG platforms, build autonomous task coordinate agents, and tune active deployments for peak efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section
        ref={offerRef}
        className="pb-10 bg-zinc-50/50 text-zinc-900 relative z-10"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="offer-badge mb-12 flex flex-col items-center justify-center">
            <CyberSectionDivider className="mb-4" />
            <SectionDivider title="What We Offer" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl mb-12 offer-title uppercase leading-[1.1] text-center">
            Our Deployment Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-[1.5rem] p-6 shadow-sm flex items-start gap-4 offer-item hover:shadow-md transition-shadow"
              >
                <span className="h-2 w-2 rounded-full bg-red-600 mt-2.5 shrink-0 animate-pulse" />
                <span className="text-gray-800 text-base font-semibold">{offer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Details Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="mb-16 px-4 sm:px-6 md:px-12 md:mb-20 relative z-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-center justify-center">
            <CyberSectionDivider className="mb-4" />
            <SectionDivider title="TECHNICAL CAPABILITIES" />
          </div>
          <motion.div variants={stagger} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div key={item.title} whileHover={{ y: -8, scale: 1.01 }} className="scroll-mt-28">
                  <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(220,38,38,0.1)] hover:-translate-y-2 transition-all duration-300 group border border-gray-100 flex flex-col h-full block">
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm border border-red-100 group-hover:border-red-600 shrink-0">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">{item.description}</p>
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

      {/* CTA Section */}
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
              Resilience Engineered
            </motion.p>
            <motion.h2 className="text-3xl font-black tracking-tight md:text-5xl uppercase leading-[1.1]">
              Deploy secure AI applications at scale.
            </motion.h2>
            <motion.p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
              Partner with Keystone to architect and integrate resilient Large Language Models, vectors, and automated workflows into your platform.
            </motion.p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-700 sm:w-fit">
              Contact Keystone
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <CyberSectionDivider />
    </main>
  );
}
