"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight, BrainCircuit, Cpu, ShieldAlert, Radar, BookOpen,
  Lock, Scale, ChevronDown, type LucideIcon,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";

const MotionLink = motion.create(Link);

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="inline-block"
    >
      {text}
    </motion.span>
  );
}

type Card = { title: string; description: string; icon: LucideIcon };

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ── Highlights ── */
const highlights: Card[] = [
  {
    title: "AI Strategy & Governance",
    description: "Business-driven AI roadmaps aligned with cybersecurity priorities, regulatory expectations and responsible AI principles.",
    icon: BrainCircuit,
  },
  {
    title: "Secure-by-Design Implementation",
    description: "Designing, deploying and integrating AI solutions — LLMs, RAG, agents — with security, scalability and compliance built in.",
    icon: Lock,
  },
  {
    title: "Governance, Risk & Compliance",
    description: "Frameworks, policies and controls to manage AI initiatives with transparency, accountability and regulatory alignment.",
    icon: Scale,
  },
];

/* ── Services with slugs ── */
const services = [
  {
    kicker: "Service 01",
    title: "AI Strategy & Governance",
    slug: "ai-strategy-governance",
    description:
      "Keystone helps organizations define a clear, realistic and secure AI strategy aligned with business objectives, cybersecurity priorities and regulatory expectations. We support clients in identifying high-value AI use cases, prioritizing initiatives and building a practical roadmap for responsible AI adoption. Our approach also covers AI governance, helping organizations define the principles, policies, roles and controls required to manage AI initiatives with confidence, transparency and accountability.",
    icon: BrainCircuit,
  },
  {
    kicker: "Service 02",
    title: "AI Solutions Implementation",
    slug: "ai-solutions-implementation",
    description:
      "Keystone assists organizations in designing, implementing and integrating AI-based solutions that address concrete business, operational and cybersecurity needs. We help clients move from ideas and proof of concepts to usable AI solutions embedded in real processes. Our implementation services include AI models, Large Language Models, RAG architectures and AI agents — focused on business value, security, scalability and integration with existing information systems.",
    icon: Cpu,
  },
  {
    kicker: "Service 03",
    title: "AI Security & Threat Defense",
    slug: "ai-security-threat-defense",
    description:
      "As AI systems become part of business and security operations, they introduce new attack surfaces. Keystone helps organizations assess and strengthen the security of AI systems against emerging threats targeting prompts, models, data, applications and AI agents. We help clients protect AI environments against prompt injection, jailbreaks, data leakage, model abuse, adversarial attacks and misuse of generative AI technologies.",
    icon: ShieldAlert,
  },
  {
    kicker: "Service 04",
    title: "AI for Cybersecurity Operations",
    slug: "ai-for-cybersecurity-operations",
    description:
      "Keystone helps cybersecurity teams use AI to improve detection, investigation, response and decision-making. By integrating AI into cybersecurity operations, organizations can reduce repetitive tasks, accelerate analysis and improve the efficiency of SOC and security teams. Our approach focuses on practical, high-impact use cases where AI can support analysts, enrich threat intelligence, automate workflows and enhance operational visibility.",
    icon: Radar,
  },
  {
    kicker: "Service 05",
    title: "AI Training & Awareness",
    slug: "ai-training-awareness",
    description:
      "Keystone provides training and awareness programs to help executives, technical teams and end users understand Artificial Intelligence, its opportunities and its risks. Our programs are designed to make AI adoption practical, responsible and secure. We help organizations build internal awareness around secure AI usage, generative AI risks, data protection, responsible AI practices and the cybersecurity implications of AI adoption.",
    icon: BookOpen,
  },
];

export default function AICybersecurityPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const positioningRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const toggle = (idx: number) => setOpenIdx((prev) => (prev === idx ? null : idx));

  useEffect(() => {
    Promise.all([
      import("gsap"),
      import("gsap/dist/ScrollTrigger"),
    ]).then(([gsapModule, triggerModule]) => {
      const gsap = gsapModule.default;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (highlightsRef.current) {
        const header = highlightsRef.current.querySelector(".highlights-header");
        const cards = highlightsRef.current.querySelectorAll(".highlight-card");
        gsap.fromTo(header, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: highlightsRef.current, start: "top 80%", once: true },
        });
        gsap.fromTo(cards, { opacity: 0, y: 40, scale: 0.97 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: highlightsRef.current, start: "top 70%", once: true },
        });
      }

      if (positioningRef.current) {
        const badge = positioningRef.current.querySelector(".positioning-badge");
        const title = positioningRef.current.querySelector(".positioning-title");
        const textEls = positioningRef.current.querySelectorAll(".positioning-text p");
        gsap.fromTo([badge, title, ...Array.from(textEls)], { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: positioningRef.current, start: "top 80%", once: true },
        });
      }

      if (accordionRef.current) {
        const header = accordionRef.current.querySelector(".accordion-header");
        const rows = accordionRef.current.querySelectorAll(".accordion-row");
        gsap.fromTo(header, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: accordionRef.current, start: "top 80%", once: true },
        });
        gsap.fromTo(rows, { opacity: 0, y: 24 }, {
          opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: accordionRef.current, start: "top 75%", once: true },
        });
      }
    });
  }, []);

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <Navbar />

      {/* ── Hero ── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex h-[100vh] min-h-[100vh] w-full flex-col overflow-hidden bg-zinc-950"
      >
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          >
            <source src="/vids/videoplayback.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 container mx-auto flex flex-1 flex-col items-center justify-center gap-8 px-4 pt-28 pb-40 sm:px-6 sm:pt-32 sm:pb-48 lg:flex-row lg:justify-between lg:gap-0 lg:px-12 lg:pt-24 lg:pb-28 lg:overflow-visible">
          <div className="flex w-full flex-col items-center gap-4 text-center sm:gap-6 lg:w-2/3 lg:items-start lg:gap-10 lg:text-left">
            <motion.h1 className="text-3xl font-bold leading-tight tracking-tight text-white max-w-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <TypingText text="AI & Cybersecurity" delay={0.2} />
            </motion.h1>
            <p className="mt-4 max-w-2xl text-base font-medium tracking-wide text-gray-300 sm:text-lg md:text-xl">
              <TypingText
                text="Keystone helps organizations adopt Artificial Intelligence securely, responsibly and efficiently — covering the full AI lifecycle from strategy to operations."
                delay={1.2}
              />
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-white sm:mt-10"
            >
              <MotionLink
                href="/contact"
                whileHover={{ x: 10 }}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg transition-colors hover:bg-red-700 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Start your AI roadmap
                <ArrowRight className="h-4 w-4" />
              </MotionLink>
              <Link href="/services" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ x: 10 }}
                  className="flex w-full items-center justify-center gap-3 border-b border-white/50 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:border-white sm:text-base"
                >
                  Back to services <span>→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        <CertificationsMarquee isAbsolute={true} />
        <ScrollIndicator className="pointer-events-none hidden bottom-28 lg:flex xl:bottom-36" />
      </motion.section>

      {/* ── Highlights ── */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}
        className="bg-white relative z-10 pb-10"
      >
        <div ref={highlightsRef} className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="highlights-header mb-12 flex flex-col items-center justify-center">
            <CyberSectionDivider className="mb-4" />
            <SectionDivider title="Strategy / Implementation / Security" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="highlight-card group flex flex-col gap-5 rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm hover:shadow-[0_20px_40px_rgba(220,38,38,0.08)] hover:-translate-y-1.5 transition-all duration-300">
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

      {/* ── Why AI & Cybersecurity ── */}
      <section ref={positioningRef} className="pb-10 bg-white text-zinc-900 border-b border-gray-100 relative z-10">
        <div className="mx-auto max-w-5xl text-center px-4 sm:px-6">
          <div className="positioning-badge mb-12 flex flex-col items-center justify-center">
            <CyberSectionDivider className="mb-4" />
            <SectionDivider title="Why AI & Cybersecurity" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl mb-8 positioning-title uppercase leading-[1.1]">
            AI as a business accelerator and a cybersecurity enabler.
          </h2>
          <div className="text-gray-600 text-base md:text-lg leading-relaxed font-medium space-y-6 positioning-text max-w-4xl mx-auto">
            <p>
              Artificial Intelligence is transforming business operations, cybersecurity capabilities and decision-making processes. However, AI adoption also brings new challenges related to data protection, model security, governance, compliance and operational control.
            </p>
            <p>
              Keystone supports organizations in moving from AI ambition to secure and practical AI adoption, combining cybersecurity expertise with AI implementation and governance capabilities — while helping manage the new risks introduced by models, data, prompts, agents and AI-powered applications.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Accordion ── */}
      <section className="pb-16 bg-zinc-50/50 text-zinc-900 relative z-10">
        <div ref={accordionRef} className="mx-auto max-w-4xl px-4 sm:px-6 md:px-12">
          <div className="accordion-header mb-12 flex flex-col items-center justify-center">
            <CyberSectionDivider className="mb-4" />
            <SectionDivider title="Our Services" />
          </div>

          <div className="space-y-3">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isOpen = openIdx === idx;
              return (
                <div
                  key={service.title}
                  className={`accordion-row rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-red-200 bg-white shadow-[0_8px_30px_rgba(220,38,38,0.08)]"
                      : "border-gray-100 bg-white hover:border-red-100 hover:shadow-sm"
                  }`}
                >
                  {/* Header row — always visible */}
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center gap-5 px-6 py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-red-600 text-white" : "bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Kicker + title */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-400 mb-0.5">{service.kicker}</p>
                      <h3 className={`text-base font-bold transition-colors duration-200 ${isOpen ? "text-red-600" : "text-gray-900 group-hover:text-red-600"}`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`shrink-0 transition-colors ${isOpen ? "text-red-500" : "text-gray-400 group-hover:text-red-400"}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  {/* Dropdown content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-red-50">
                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed mt-5 mb-4">
                            {service.description}
                          </p>
                          <div className="flex justify-end">
                            <Link
                              href={`/services/ai-cybersecurity/${service.slug}`}
                              className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-wider group"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* ── CTA ── */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}
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
              AI-First Cybersecurity
            </motion.p>
            <motion.h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Build secure AI with Keystone.
            </motion.h2>
            <motion.p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
              From AI strategy to secure implementation, Keystone helps organizations unlock the value of Artificial Intelligence while maintaining strong cybersecurity, governance and compliance foundations.
            </motion.p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-700 sm:w-fit">
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <CyberSectionDivider />
      <Footer />
    </main>
  );
}
