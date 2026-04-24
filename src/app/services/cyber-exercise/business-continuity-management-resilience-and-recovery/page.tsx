"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardList,
  ShieldCheck,
  Siren,
  TimerReset,
} from "lucide-react";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";

const priorities = [
  {
    title: "Plan for the unexpected",
    description:
      "Train professionals to anticipate disruption and prepare action plans that keep operations running during major incidents.",
    icon: ClipboardList,
  },
  {
    title: "Strengthen resilience",
    description:
      "Develop practical recovery strategies so teams can restore critical capabilities quickly and effectively after a crisis.",
    icon: ShieldCheck,
  },
  {
    title: "Reduce operational loss",
    description:
      "Minimize financial and operational impact by improving readiness, coordination, and response discipline.",
    icon: BriefcaseBusiness,
  },
];

const methodology = [
  {
    title: "Simulated crisis scenarios",
    description:
      "Practical exercises help teams execute continuity plans and assess their response under pressure.",
    icon: Siren,
  },
  {
    title: "Expert guidance",
    description:
      "Experienced specialists share actionable practices for business continuity planning and resilience improvement.",
    icon: BadgeCheck,
  },
  {
    title: "Tailored programs",
    description:
      "Training is adapted to sector-specific continuity and recovery requirements rather than using generic templates.",
    icon: TimerReset,
  },
];

const offerings = [
  "Business continuity planning for critical operations during and after a crisis.",
  "Disaster recovery strategies to restore services rapidly after major disruption.",
  "Testing and evaluation processes to validate and improve continuity plans over time.",
];

export default function BusinessContinuityPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f24_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f24_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_68%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.22),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.14),transparent_28%)]" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="flex flex-col items-start gap-16 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-red-400">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500 animate-pulse" />
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-wide">
                  <Link href="/services" className="transition-colors hover:text-red-300">
                    Services
                  </Link>
                  <span className="text-red-500/50">/</span>
                  <Link
                    href="/services/cyber-exercise"
                    className="transition-colors hover:text-red-300"
                  >
                    Cyber Exercise
                  </Link>
                  <span className="text-red-500/50">/</span>
                  <span className="text-red-300">
                    Business Continuity Management
                  </span>
                </div>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Business Continuity,
                <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                  Resilience & Recovery
                </span>
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
                Prepare for disruption and recover with speed. This training
                program equips professionals with the skills needed to preserve
                critical operations, improve resilience, and organize effective
                recovery in high-stakes situations.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?service=business-continuity-management-resilience-and-recovery"
                  className="rounded-lg bg-red-600 px-8 py-3.5 font-medium text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:bg-red-700"
                >
                  Request This Program
                </Link>
                <Link
                  href="/services/cyber-exercise"
                  className="rounded-lg border border-white/10 bg-white/5 px-8 py-3.5 font-medium text-white transition-all duration-300 hover:bg-white/10"
                >
                  Back to Cyber Exercise
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 p-4 shadow-2xl backdrop-blur-sm">
                <Image
                  src="https://ziedhamdi.com/wp-content/uploads/2024/10/photo20_vertical.jpg"
                  alt="Business continuity and recovery training"
                  width={1200}
                  height={1600}
                  className="h-[440px] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-50 py-20"
      >
        <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="relative rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-xl">
              <Image
                src="https://ziedhamdi.com/wp-content/uploads/2024/10/photo11_vertcal-1.jpg"
                alt="Continuity and resilience planning workshop"
                width={1200}
                height={1600}
                className="h-[360px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-600">
              Why It Matters
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 lg:text-4xl">
              Continuity goes beyond crisis reaction
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-zinc-600">
              This program helps teams move from reactive crisis handling to
              structured continuity management. Participants learn how to keep
              critical functions operating, recover faster, and reduce the
              impact of unexpected disruption.
            </p>
            <div className="grid gap-4">
              {priorities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-zinc-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="leading-relaxed text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="bg-white py-20"
      >
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-600">
              Training Method
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 lg:text-4xl">
              Practice-led preparation for continuity and recovery
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              The program is designed around realistic exercises, practitioner
              guidance, and adaptation to real organizational needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {methodology.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="py-20 text-white"
        style={{ backgroundColor: "lab(97 0 -0.01)" }}
      >
        <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-500">
              Program Scope
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 lg:text-4xl">
              Training modules focused on real recovery readiness
            </h2>
            <div className="space-y-4">
              {offerings.map((offering) => (
                <div
                  key={offering}
                  className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-600"
                >
                  {offering}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/80 p-4 shadow-2xl backdrop-blur-sm">
            <Image
              src="https://ziedhamdi.com/wp-content/uploads/2024/10/5.jpg"
              alt="Resilience and recovery program"
              width={1200}
              height={1600}
              className="h-[400px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />
      <ContactCTASection />
    </main>
  );
}
