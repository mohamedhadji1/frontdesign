"use client";

import { motion } from "framer-motion";
import { BarChart3, Compass, Target } from "lucide-react";

const reasons = [
  {
    title: "Specialized expertise",
    description:
      "Our team brings deep expertise in governance, risk management, and compliance to deliver solutions tailored to your specific needs.",
    icon: <Compass className="h-6 w-6" />,
  },
  {
    title: "Tailored approach",
    description:
      "Every organization faces different GRC challenges. We adapt our services to your context, goals, and operational constraints.",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Measurable results",
    description:
      "Our engagements reduce risk, improve compliance, and strengthen your organization&apos;s resilience in a meaningful way.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
];

export function WhyChooseSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
            <span className="h-px w-8 bg-red-600/30" />
            Why Keystone
            <span className="h-px w-8 bg-red-600/30" />
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Why choose Keystone for your GRC program?
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            We turn governance, risk, and compliance requirements into a clear,
            practical operating model that supports your teams.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.75rem] bg-[linear-gradient(135deg,#f8fafc,#eef2ff)] p-8 text-center shadow-lg shadow-zinc-200/40 transition hover:-translate-y-2 hover:shadow-red-100/30"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-red-600 shadow-sm">
                {reason.icon}
              </div>
              <h4 className="mt-6 text-2xl font-bold text-zinc-900">
                {reason.title}
              </h4>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                {reason.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
