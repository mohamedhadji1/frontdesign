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
        className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden pt-52 sm:pt-60 lg:pt-64 pb-12 bg-zinc-950 text-white"
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
          <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-zinc-950/45 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/background/vector/cyber-matrix.svg')] bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center items-center text-center lg:items-start lg:text-left py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-red-300 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Services
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              Cybersecurity Services
            </h1>

            <motion.p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
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

          <motion.div variants={stagger} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.slice(0, 6).map((service) => {
              const Icon = serviceIcons[service.iconName];

              return (
                <motion.div
                  id={getServiceId(service.href)}
                  key={service.href}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="scroll-mt-28"
                >
                  <Link
                    href={service.href}
                    className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(220,38,38,0.1)] hover:-translate-y-2 transition-all duration-300 group border border-gray-100 flex flex-col h-full block"
                  >
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm border border-red-100 group-hover:border-red-600 shrink-0">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <motion.h2 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
                      {service.name}
                    </motion.h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center text-red-600 font-bold text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore Service
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            {/* Featured AI & Cybersecurity Card (Spans all columns to remove uneven empty slots) */}
            {serviceLinks[6] && (() => {
              const service = serviceLinks[6];
              const Icon = serviceIcons[service.iconName];
              
              return (
                <motion.div
                  id={getServiceId(service.href)}
                  className="col-span-1 md:col-span-2 lg:col-span-3 scroll-mt-28 mt-2"
                  whileHover={{ y: -8, scale: 1.005 }}
                >
                  <Link
                    href={service.href}
                    className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(220,38,38,0.1)] hover:-translate-y-2 transition-all duration-300 group border border-gray-100 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8 w-full"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-6 flex-grow">
                      <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm border border-red-100 group-hover:border-red-600 shrink-0">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-bold text-gray-900 leading-tight">
                          {service.name}
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-4 lg:pt-0 lg:pl-6 shrink-0 flex items-center text-red-600 font-bold text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-end lg:self-auto">
                      Explore Service
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                    </div>
                  </Link>
                </motion.div>
              );
            })()}
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
