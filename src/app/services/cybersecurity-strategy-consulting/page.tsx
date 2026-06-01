"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight, Globe, Flame, Radar, ShieldAlert, ShieldCheck,
  Award, Activity, Scale, Building2, Users, RefreshCw, ChevronDown,
  type LucideIcon
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

/* ── Highlights (3rd, 4th, 5th Sections) ── */
const highlights: Card[] = [
  {
    title: "Understanding National Imperatives",
    description: "We take into account government directives, standards, and regulations at the national level to develop compliant and tailored cybersecurity strategies.",
    icon: Scale,
  },
  {
    title: "Alignment with National Objectives",
    description: "Our cybersecurity strategies are aligned with national security objectives, thereby supporting collective efforts to protect critical infrastructure and digital sovereignty.",
    icon: ShieldCheck,
  },
  {
    title: "Anticipating Strategic Threats",
    description: "We anticipate emerging threats at the national level, developing strategic plans to protect the essential interests of the state and strategic stakeholders.",
    icon: Radar,
  },
];

/* ── Collaboration & Adaptation (6th, 7th Sections) ── */
const features: Card[] = [
  {
    title: "Collaboration with Key Organizations",
    description: "We partner with key actors in the national cybersecurity landscape, fostering a holistic approach to strengthening resilience against cyber threats.",
    icon: Users,
  },
  {
    title: "Continuous Adaptation",
    description: "Our strategic advisory services evolve with changes in the national cyber landscape, ensuring continuous and proactive protection against threats.",
    icon: RefreshCw,
  },
];

/* ── Services (7 sub-services) ── */
const services = [
  {
    kicker: "Service 01",
    title: "Development of National and Sectoral Cybersecurity Strategy",
    slug: "development-of-national-and-sectoral-cybersecurity-strategy",
    description:
      "Establish resilient, comprehensive national and sectoral cybersecurity strategic frameworks to secure critical infrastructures, define national governance, and mitigate systemic cyber risk.",
    icon: Globe,
  },
  {
    kicker: "Service 02",
    title: "CERT Implementation",
    slug: "cert-implementation",
    description:
      "Design and implement fully operational Computer Emergency Response Teams (CERT/CSIRT) with advanced incident management capabilities, threat intelligence sharing, and crisis coordination protocols.",
    icon: Flame,
  },
  {
    kicker: "Service 03",
    title: "SOC Implementation",
    slug: "soc-implementation",
    description:
      "Build state-of-the-art Security Operations Centers (SOC) integrating SIEM/SOAR technology, certified analysts, playbook automation, and structured incident containment workflows.",
    icon: Radar,
  },
  {
    kicker: "Service 04",
    title: "Critical Infrastructure Protection",
    slug: "critical-infrastructure-protection",
    description:
      "Identify, categorize, and monitor Critical Information Infrastructures (CII) using advanced risk metrics and compliance baselines to shield vital national assets from hostile nation-state actors.",
    icon: Building2,
  },
  {
    kicker: "Service 05",
    title: "Cyber Crisis Management Framework",
    slug: "cyber-crisis-management-framework",
    description:
      "Author high-impact cyber crisis response runbooks, establish decision-making hierarchies, and conduct live-simulation drills to prepare executive leadership for large-scale security events.",
    icon: ShieldCheck,
  },
  {
    kicker: "Service 06",
    title: "Capacity and Maturity Assessment",
    slug: "capacity-and-maturity-assessment",
    description:
      "Measure and score your cybersecurity posture against globally recognized maturity models (CMMC, NIST, ISO) to identify capability gaps and align investments with security goals.",
    icon: Award,
  },
  {
    kicker: "Service 07",
    title: "Cyber Resilience Framework",
    slug: "cyber-resilience-framework",
    description:
      "Design and operationalize end-to-end cyber resilience architectures to guarantee continuous business operation, rapid incident recovery, and adaptive system hardening.",
    icon: Activity,
  },
];

export default function CybersecurityStrategyConsultingPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const positioningRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

      if (featuresRef.current) {
        const cards = featuresRef.current.querySelectorAll(".feature-card");
        gsap.fromTo(cards, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: featuresRef.current, start: "top 80%", once: true },
        });
      }
    });
  }, []);

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <Navbar />

      {/* ── Hero (Section 1) ── */}
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
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-2 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-red-300"
            >
              Keystone Services
            </motion.p>
            <motion.h1 className="text-3xl font-bold leading-tight tracking-tight text-white max-w-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <TypingText text="Strategic Cybersecurity Advisory" delay={0.5} />
            </motion.h1>
            <p className="mt-4 max-w-2xl text-base font-medium tracking-wide text-gray-300 sm:text-lg md:text-xl">
              <TypingText
                text="Anticipating National Strategic Challenges and establishing compliant cybersecurity strategies aligned with state and entity objectives."
                delay={2}
              />
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.8 }}
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-white sm:mt-10"
            >
              <MotionLink
                href="/contact"
                whileHover={{ x: 10 }}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg transition-colors hover:bg-red-700 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Connect with advisors
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

      {/* ── Highlights (Section 3, 4, 5) ── */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}
        className="bg-white relative z-10 pb-10"
      >
        <div ref={highlightsRef} className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="highlights-header mb-12 flex flex-col items-center justify-center">
            <CyberSectionDivider className="mb-4" />
            <SectionDivider title="Compliance / Alignment / Anticipation" />
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

      {/* ── Strategic Advisory Overview (Section 2) ── */}
      <section ref={positioningRef} className="pb-10 bg-white text-zinc-900 border-b border-gray-100 relative z-10">
        <div className="mx-auto max-w-5xl text-center px-4 sm:px-6">
          <div className="positioning-badge mb-12 flex flex-col items-center justify-center">
            <CyberSectionDivider className="mb-4" />
            <SectionDivider title="National Strategic Context" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl mb-8 positioning-title uppercase leading-[1.1]">
            Strategic Cybersecurity Advisory: Anticipate National Strategic Challenges
          </h2>
          <div className="text-gray-600 text-base md:text-lg leading-relaxed font-medium space-y-6 positioning-text max-w-4xl mx-auto">
            <p>
              KEYSTONE provides strategic cybersecurity consulting that takes into account national priorities and the specific challenges faced by entities within a national strategic context. We work closely with organizations to strengthen their security posture and meet national cybersecurity requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Accordion ── */}
      <section className="pb-16 bg-zinc-50/50 text-zinc-900 relative z-10">
        <div ref={accordionRef} className="mx-auto max-w-4xl px-4 sm:px-6 md:px-12">
          <div className="accordion-header mb-12 flex flex-col items-center justify-center">
            <CyberSectionDivider className="mb-4" />
            <SectionDivider title="Strategic Capabilities" />
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
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center gap-5 px-6 py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-red-600 text-white" : "bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-400 mb-0.5">{service.kicker}</p>
                      <h3 className={`text-base font-bold transition-colors duration-200 ${isOpen ? "text-red-600" : "text-gray-900 group-hover:text-red-600"}`}>
                        {service.title}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`shrink-0 transition-colors ${isOpen ? "text-red-500" : "text-gray-400 group-hover:text-red-400"}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

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
                          <p className="text-gray-600 text-sm leading-relaxed mt-5 mb-4">
                            {service.description}
                          </p>
                          <div className="flex justify-end">
                            <Link
                              href={`/services/cybersecurity-strategy-consulting/${service.slug}`}
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

      {/* ── Key Features (Section 6, 7) ── */}
      <section ref={featuresRef} className="py-24 bg-white relative z-10 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="mb-16 text-center">
            <CyberSectionDivider className="mb-4" />
            <SectionDivider title="Collaboration & Innovation" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="feature-card group flex flex-col gap-4 rounded-[2rem] border border-gray-100 bg-zinc-50/50 p-8 shadow-xs hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-600 border border-gray-100 group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <Icon className="w-5 h-5" />
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
      </section>

      <CyberSectionDivider />

      {/* ── CTA (Section 8) ── */}
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
              Resilience Engineered
            </motion.p>
            <motion.h2 className="text-3xl font-black tracking-tight md:text-5xl uppercase leading-[1.1]">
              KEYSTONE: Your Strategic Partner for National Cybersecurity
            </motion.h2>
            <motion.p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
              KEYSTONE is ready to be your partner in strengthening national cybersecurity, supporting strategic security initiatives and objectives. Contact us for a strategic approach to protecting national interests.
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
