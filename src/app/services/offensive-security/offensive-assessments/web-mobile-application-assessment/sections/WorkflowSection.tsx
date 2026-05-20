"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Code2, FileText, Search, ShieldCheck, Wrench } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { MouseEvent } from "react";

const workflow = [
  {
    step: "01",
    title: "Deep Security Testing",
    description:
      "We perform thorough security testing, including penetration testing, to verify the resilience of the protections already in place.",
    icon: Search,
  },
  {
    step: "02",
    title: "Coding Practice Review",
    description:
      "We assess coding practices, implementation choices, and configurations to detect design mistakes that can lead to exploitable weaknesses.",
    icon: Code2,
  },
  {
    step: "03",
    title: "Detailed Reporting",
    description:
      "We provide a complete report of our findings with business context, proof of impact, and practical recommendations to address each issue.",
    icon: FileText,
  },
  {
    step: "04",
    title: "Security Improvement",
    description:
      "We help your team correct the discovered vulnerabilities and reinforce the overall security posture of your applications over time.",
    icon: Wrench,
  },
];

const validationPoints = [
  "OWASP-aligned testing for web, APIs, and mobile exposure",
  "Manual verification of complex exploit chains and weak logic",
  "Review of sensitive configurations and security control coverage",
  "Clear remediation priorities for engineering and security teams",
];

export function WorkflowSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 1 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 1 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden bg-white py-24 text-zinc-900"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(580px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.05), transparent 80%)`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.08),transparent_45%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <SectionDivider title="ASSESSMENT WORKFLOW" className="mb-6" />
          <motion.h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            How We Strengthen Application Security
          </motion.h2>
          <p className="text-lg leading-relaxed text-zinc-600">
            Our workflow combines hands-on testing, secure coding review, and
            practical remediation support so your team can move from findings to
            measurable improvements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {workflow.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                whileHover={{ y: -6 }}
                className="group/card relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-red-300 hover:shadow-lg"
              >
                <div className="absolute right-6 top-4 text-5xl font-bold text-zinc-100 transition-colors group-hover/card:text-red-100">
                  {item.step}
                </div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-red-600 transition-colors group-hover/card:border-red-200 group-hover/card:bg-red-50">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-bold uppercase tracking-tight text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-10 border-t border-zinc-200 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 shadow-sm">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-3xl font-bold uppercase tracking-tight text-zinc-900">
              Thorough validation beyond checklists
            </h3>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-600">
              The goal is not only to enumerate issues. We validate how
              vulnerabilities can affect real workflows, how coding and
              configuration decisions shape risk, and what your team needs to do
              next to improve resilience.
            </p>
          </div>

          <div className="grid gap-3">
            {validationPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4"
              >
                <p className="text-sm font-semibold leading-relaxed text-zinc-800">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
