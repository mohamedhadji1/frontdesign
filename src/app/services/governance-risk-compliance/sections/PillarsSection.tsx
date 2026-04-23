"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Landmark, ShieldCheck, TriangleAlert } from "lucide-react";

const pillars = [
  {
    title: "Governance",
    description:
      "We work closely with your team to establish strong governance structures that support strategic decisions, transparency, and accountability.",
    icon: <Landmark className="h-6 w-6" />,
    points: [
      "Clear roles and responsibilities",
      "Security priority governance",
      "Alignment between strategy and execution",
    ],
  },
  {
    title: "Risk management",
    description:
      "We identify, assess, and prioritize risks to build a practical and measurable control framework aligned with your exposure.",
    icon: <TriangleAlert className="h-6 w-6" />,
    points: [
      "Audits and risk assessments",
      "Threat and vulnerability mapping",
      "Risk treatment and reduction plans",
    ],
  },
  {
    title: "Compliance",
    description:
      "We help you meet regulatory and standards-based requirements while turning compliance into a driver of trust and performance.",
    icon: <BadgeCheck className="h-6 w-6" />,
    points: [
      "ISO 27001, GDPR, NCA, and local requirements",
      "Documentation and control support",
      "Continuous compliance monitoring",
    ],
  },
];

export function PillarsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.07),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(248,113,113,0.08),transparent_30%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
            <span className="h-px w-8 bg-red-600/30" />
            GRC
            <span className="h-px w-8 bg-red-600/30" />
          </h2>
          <h3 className="text-3xl font-bold tracking-tight md:text-5xl">
            A GRC approach built on three pillars
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            We combine governance, risk control, and compliance to give your
            organization a robust, durable framework that supports day-to-day
            decision-making.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-[1.75rem] border border-zinc-200 bg-white p-8 shadow-lg shadow-zinc-200/40 transition hover:-translate-y-2 hover:border-red-200 hover:shadow-red-100/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                {pillar.icon}
              </div>
              <h4 className="mt-6 text-2xl font-bold">{pillar.title}</h4>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                {pillar.description}
              </p>
              <ul className="mt-6 space-y-3">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-zinc-700">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div>
            <h4 className="text-3xl font-bold tracking-tight text-zinc-900">
              We structure your GRC program with a clear and actionable approach
            </h4>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              Our engagement helps your business establish solid foundations,
              reduce operational risk, and maintain continuous compliance across
              demanding local and international frameworks.
            </p>
            <ul className="mt-6 space-y-3 text-zinc-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-red-500" />
                Risk management
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-red-500" />
                Regulatory and standards compliance
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-[url('/background/bg10.png')] bg-cover bg-center p-10 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/30 via-zinc-900/10 to-red-700/30" />
            <div className="relative z-10 flex min-h-[280px] flex-col justify-end rounded-[1.5rem] border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-100">
                Governance, Risk & Compliance
              </p>
              <p className="mt-4 text-2xl font-bold leading-tight text-white">
                A unified vision to protect the business and align with
                information security standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
