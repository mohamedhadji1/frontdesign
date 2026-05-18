"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ArrowRight, Bug, Code2, FileText, ShieldCheck, Wrench } from "lucide-react";

const deliverables = [
  {
    title: "Detailed Findings",
    description:
      "Clear issue descriptions with business impact, technical proof, and attack paths that matter to your teams.",
    icon: Bug,
  },
  {
    title: "Remediation Guidance",
    description:
      "Recommendations tailored to your stack, workflows, and configuration choices so fixes are realistic and actionable.",
    icon: FileText,
  },
  {
    title: "Secure Coding Direction",
    description:
      "Practical guidance to improve coding practices and reduce the design mistakes that lead to recurring weaknesses.",
    icon: Code2,
  },
  {
    title: "Fix Support",
    description:
      "Hands-on assistance to help your team correct vulnerabilities and strengthen the application security baseline.",
    icon: Wrench,
  },
];

const outcomes = [
  "Application security findings prioritized for business impact",
  "Recommendations your engineering team can execute with confidence",
  "Support to reinforce the robustness and reliability of your platforms",
];

export function AssuranceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-[linear-gradient(135deg,#fffefe_0%,#fff2f2_45%,#fff9f4_100%)] py-24 text-zinc-900"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220_38_38_0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(220_38_38_0.06)_1px,transparent_1px)] bg-[size:3.25rem_3.25rem] opacity-55 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.14),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.75),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(24,24,27,0.1),transparent_28%)] pointer-events-none" />
      <div className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-red-300/45 to-transparent pointer-events-none" />
      <div className="absolute left-[-6rem] top-16 h-80 w-80 rounded-full bg-red-500/14 blur-[120px]" />
      <div className="absolute right-[-4rem] top-0 h-72 w-72 rounded-full bg-rose-300/18 blur-[120px]" />
      <div className="absolute bottom-[-5rem] right-10 h-72 w-72 rounded-full bg-zinc-900/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 text-white shadow-xl">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <SectionDivider
                title="KEYSTONE ASSURANCE"
                className="!mb-6 !items-start !justify-start"
              />
              <h2 className="mb-6 text-4xl font-bold uppercase tracking-tight text-zinc-900 md:text-6xl">
                From findings to stronger releases
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
                Keystone supports you with web and mobile application
                assessments that go beyond detection. We help you understand the
                issues, correct the vulnerabilities, and improve the way your
                applications are secured over time.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="text-base font-semibold leading-relaxed text-zinc-800">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact?service=web-mobile-application-assessment"
              className="inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-700"
            >
              Talk to Keystone
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {deliverables.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.08, duration: 0.7 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-red-300 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
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
        </div>
      </div>
    </motion.section>
  );
}
