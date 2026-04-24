"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Radar,
  Search,
  ShieldAlert,
  TimerReset,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { InteractiveExercisePanel } from "./components/InteractiveExercisePanel";

const programs = [
  {
    title: "Business Continuity Management, Resilience, and Recovery",
    description:
      "Prepare teams to maintain operations during disruption, recover quickly after crisis events, and strengthen organizational resilience.",
    href: "/services/cyber-exercise/business-continuity-management-resilience-and-recovery",
    icon: TimerReset,
  },
  {
    title: "Cybersecurity and Investigation",
    description:
      "Build advanced capabilities to protect sensitive information, investigate incidents, and analyze digital evidence with confidence.",
    href: "/services/cyber-exercise/cybersecurity-and-investigation",
    icon: Search,
  },
];

const panelItems = [
  {
    id: "detect",
    label: "Detect",
    value: "Threat visibility +34%",
    detail:
      "Interactive scenarios expose weak signals early so teams can recognize issues before they cascade.",
    icon: Radar,
  },
  {
    id: "respond",
    label: "Respond",
    value: "Response time -28%",
    detail:
      "Exercises train decision-making under pressure and improve coordination between operational roles.",
    icon: ShieldAlert,
  },
  {
    id: "recover",
    label: "Recover",
    value: "Recovery readiness 92%",
    detail:
      "Continuity and investigation tracks help organizations return to stable operations with clearer playbooks.",
    icon: TimerReset,
  },
];

export default function CyberExercisePage() {
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
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-red-400">
              <span className="h-2 w-2 shrink-0 rounded-full bg-red-500 animate-pulse" />
              <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-wide">
                <Link href="/services" className="transition-colors hover:text-red-300">
                  Services
                </Link>
                <span className="text-red-500/50">/</span>
                <span className="text-red-300">Cyber Exercise</span>
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Cyber Exercise
              <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Programs
              </span>
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
              <span className="mb-3 block text-sm font-bold uppercase tracking-[0.3em] text-red-400">
                <TypeAnimation
                  sequence={[
                    "Scenario-driven readiness",
                    1200,
                    "Interactive response drills",
                    1200,
                    "Resilience-focused cyber exercises",
                    1200,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  speed={58}
                  deletionSpeed={72}
                />
              </span>
              Keystone designs practical cyber exercise programs that help teams
              prepare for disruption, sharpen investigation skills, and respond
              with more confidence in high-pressure scenarios.
            </p>
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
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-600">
              Explore The Tracks
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 lg:text-4xl">
              Two focused programs for resilience and cyber expertise
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Choose the training path that best matches your operational
              priorities, from continuity planning to digital investigation.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <Link
                  key={program.title}
                  href={program.href}
                  className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-zinc-900">
                    {program.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-zinc-600">
                    {program.description}
                  </p>
                  <div className="inline-flex items-center gap-2 font-semibold text-red-600">
                    View program
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12">
            <InteractiveExercisePanel
              eyebrow="Interactive Simulation"
              title="Move through the exercise lifecycle"
              description="Hover the modules to preview how Keystone structures practical cyber exercises around detection, coordinated response, and resilient recovery."
              items={panelItems}
            />
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />
      <ContactCTASection />
    </main>
  );
}
