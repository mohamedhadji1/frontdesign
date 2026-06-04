"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Target,
  ClipboardCheck,
  GraduationCap,
  Briefcase,
  Search,
  BrainCircuit,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { serviceLinks } from "@/lib/services";
import Image from "next/image";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const serviceIcons: Record<string, LucideIcon> = {
  ShieldCheck: ShieldCheck,
  Target: Target,
  ClipboardCheck: ClipboardCheck,
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Search: Search,
  BrainCircuit: BrainCircuit,
};

const getServiceId = (href: string) =>
  href.includes("#")
    ? href.split("#").pop()
    : href.split("/").filter(Boolean).pop();

export function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[100vh] min-h-[100vh] flex flex-col justify-between overflow-hidden pt-36 sm:pt-44 lg:pt-48 pb-12 bg-zinc-950 text-white"
      >
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/vids/videoplayback.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>
        <div className="absolute inset-0 bg-black/30 sm:bg-linear-to-r sm:from-black/75 sm:via-black/30 sm:to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/background/vector/cyber-matrix.svg')] bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center items-center text-center lg:items-start lg:text-left py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full max-w-5xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-red-400 sm:text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-[4.5rem] font-light tracking-tight text-white leading-[1.05] uppercase"
            >
              Cybersecurity Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 font-medium tracking-wide leading-relaxed max-w-3xl animate-none"
            >
              Comprehensive cybersecurity solutions designed to protect your organization,
              anticipate threats, and strengthen your digital resilience.
            </motion.p>
          </motion.div>
        </div>

        <CertificationsMarquee className="mt-auto pointer-events-auto cursor-default pb-2 sm:pb-8" />
        <ScrollIndicator />
      </motion.section>
      <CyberSectionDivider />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="py-12 md:py-16 px-4 sm:px-6 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div>
            <SectionDivider title="SERVICES" className="mb-10" />
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.slice(0, 6).map((service) => {
              const Icon = serviceIcons[service.iconName];

              return (
                <motion.div
                  id={getServiceId(service.href)}
                  key={service.href}
                  whileHover={{ y: -6 }}
                  className="scroll-mt-28"
                >
                  <Link
                    href={service.href}
                    className="bg-white rounded-[2rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(239,68,68,0.07)] transition-all duration-300 group border border-gray-100 hover:border-red-500/20 flex flex-col h-full relative overflow-hidden"
                  >
                    {/* Soft red glow on card hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="w-12 h-12 bg-red-50/80 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm border border-red-100/50 group-hover:border-red-600 shrink-0 relative z-10">
                      <Icon className="w-5.5 h-5.5" aria-hidden="true" />
                    </div>

                    <h2 className="text-lg font-bold mb-3 text-gray-900 leading-tight relative z-10">
                      {service.name}
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100/80 flex items-center text-red-600 font-extrabold text-xs tracking-wider uppercase relative z-10">
                      Explore Service
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1.5 transition-transform duration-300" aria-hidden="true" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            {/* Featured AI & Cybersecurity Card (Spans all columns, removes last uneven card slot) */}
            {serviceLinks[6] && (
              <motion.div
                id={getServiceId(serviceLinks[6].href)}
                className="col-span-1 md:col-span-2 lg:col-span-3 scroll-mt-28 mt-2"
                whileHover={{ y: -6 }}
              >
                <div className="bg-gradient-to-br from-white via-white to-red-50/[0.04] rounded-[2rem] p-8 md:p-10 shadow-[0_12px_40px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(239,68,68,0.09)] transition-all duration-300 border border-gray-100 hover:border-red-500/20 relative overflow-hidden flex flex-col lg:flex-row gap-8 items-stretch">
                  
                  {/* Decorative glowing gradient aura */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/[0.02] rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
                  
                  {/* Left half: Main content */}
                  <div className="flex-1 flex flex-col justify-between relative z-10">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-red-500/10 bg-red-500/5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-red-600 mb-6">
                        <BrainCircuit className="w-3.5 h-3.5 animate-pulse" />
                        Featured Technology
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                        {serviceLinks[6].name}
                      </h2>
                      
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                        {serviceLinks[6].description}
                      </p>
                    </div>

                    <div>
                      <Link
                        href={serviceLinks[6].href}
                        className="inline-flex items-center text-red-600 font-extrabold text-xs tracking-wider uppercase group/btn"
                      >
                        Explore AI Solutions
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>

                  {/* Vertical divider on desktop */}
                  <div className="hidden lg:block w-px bg-gray-100 self-stretch my-2" />

                  {/* Right half: Sub-services list */}
                  <div className="flex-1 flex flex-col justify-center relative z-10">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-4">
                      Specialized AI Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { name: "AI Strategy & Governance", slug: "ai-strategy-governance" },
                        { name: "AI Solutions Implementation", slug: "ai-solutions-implementation" },
                        { name: "AI Security & Threat Defense", slug: "ai-security-threat-defense" },
                        { name: "AI for Cybersecurity Operations", slug: "ai-for-cybersecurity-operations" },
                        { name: "AI Training & Awareness", slug: "ai-training-awareness" }
                      ].map((sub, idx) => (
                        <Link
                          key={idx}
                          href={`/services/ai-cybersecurity/${sub.slug}`}
                          className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-gray-50/50 hover:bg-red-50/40 border border-gray-100/50 hover:border-red-500/10 text-gray-700 hover:text-red-600 font-bold text-xs transition-all duration-200 group/sub"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 group-hover/sub:bg-red-600 group-hover/sub:scale-125 transition-all shrink-0" />
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
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
              Protect Your Digital Assets
            </motion.p>
            <motion.h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Ready to secure your future?
            </motion.h2>
            <motion.p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
              Contact our experts today to discuss your specific cybersecurity needs
              and build a tailored defense strategy.
            </motion.p>
          </motion.div>
          <motion.div

            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
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
