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
  type LucideIcon,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { serviceLinks } from "@/lib/services";
import Image from "next/image";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
};

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
};

const getServiceId = (href: string) =>
  href.includes("#")
    ? href.split("#").pop()
    : href.split("/").filter(Boolean).pop();

export function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative flex min-h-[100dvh] items-center overflow-hidden bg-zinc-950 px-6 pb-20 pt-32 text-white md:px-12"
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
        <motion.div variants={stagger} className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-red-300"
          >
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Services
          </motion.div>

          <motion.h1 variants={fadeUp} className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Cybersecurity Services
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
            Comprehensive cybersecurity solutions designed to protect your organization, 
            anticipate threats, and strengthen your digital resilience.
          </motion.p>
        </motion.div>
      </motion.section>
      <CyberSectionDivider/>
        
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        className="px-6 md:px-12 mb-20"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp}>
            <SectionDivider title="SERVICES" className="mb-12" />
          </motion.div>
          <motion.div variants={stagger} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((service) => {
              const Icon = serviceIcons[service.iconName];

              return (
                <motion.div
                  id={getServiceId(service.href)}
                  key={service.href}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="scroll-mt-28"
                >
                  <Link
                    href={service.href}
                    className="group block h-full rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-red-200 hover:bg-red-50/40"
                  >
                    <motion.div whileHover={{ rotate: -4, scale: 1.08 }}>
                      <Icon className="mb-6 h-9 w-9 text-red-600" aria-hidden="true" />
                    </motion.div>
                    <h2 className="mb-3 text-xl font-bold text-zinc-950">
                      {service.name}
                    </h2>
                    <p className="min-h-16 text-sm leading-7 text-zinc-600">
                      {service.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-red-600">
                      Explore Service
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
            
          </motion.div>
          
        </div>
      </motion.section>
      <CyberSectionDivider/>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white md:px-12"
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
            <motion.p variants={fadeUp} className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Protect Your Digital Assets
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl font-black tracking-tight md:text-5xl">
              Ready to secure your future?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
              Contact our experts today to discuss your specific cybersecurity needs 
              and build a tailored defense strategy.
            </motion.p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-700"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <CyberSectionDivider/>
    </main>
  );
}
