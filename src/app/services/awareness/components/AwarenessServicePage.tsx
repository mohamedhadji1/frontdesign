"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Target } from "lucide-react";
import type { AwarenessPageData } from "../data";
import { ContactCTASection } from "@/components/home/ContactCTASection";

const icons = [ShieldCheck, Sparkles, Target];

export function AwarenessServicePage({ page }: { page: AwarenessPageData }) {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative overflow-hidden bg-zinc-950 pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7f1d1d1a_1px,transparent_1px),linear-gradient(to_bottom,#7f1d1d1a_1px,transparent_1px)] bg-[size:16px_28px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.16),transparent_30%)]" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid items-center gap-12 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-300"
              >
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <Link href="/services" className="transition-colors hover:text-red-200">
                  Services
                </Link>
                <span className="text-red-500/50">/</span>
                <span>Awareness</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="mt-8 text-sm font-bold uppercase tracking-[0.35em] text-red-400"
              >
                {page.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
              >
                {page.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300"
              >
                {page.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.26 }}
                className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-400 md:text-lg"
              >
                {page.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.34 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="rounded-full bg-red-600 px-7 py-3.5 font-semibold text-white transition hover:bg-red-700"
                >
                  Contact us
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  View all services
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900/60 p-4 shadow-2xl"
            >
              {page.heroImage ? (
                <img
                  src={page.heroImage}
                  alt={page.title}
                  className="h-[420px] w-full rounded-[1.35rem] object-cover"
                />
              ) : (
                <div className="flex h-[420px] items-center justify-center rounded-[1.35rem] bg-zinc-900 text-zinc-500">
                  {page.title}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
              <span className="h-px w-8 bg-red-600/30" />
              Awareness
              <span className="h-px w-8 bg-red-600/30" />
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              {page.featureTitle ?? "What this experience delivers"}
            </h3>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {page.features.map((feature, index) => {
              const Icon = icons[index % icons.length];

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-8 shadow-lg shadow-zinc-200/40 transition hover:-translate-y-2 hover:border-red-200 hover:shadow-red-100/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-6 text-2xl font-bold text-zinc-900">
                    {feature.title}
                  </h4>
                  <p className="mt-4 text-base leading-relaxed text-zinc-600">
                    {feature.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          {page.closing ? (
            <div className="mx-auto mt-14 max-w-4xl rounded-[1.75rem] border border-zinc-200 bg-white p-8 text-center shadow-lg shadow-zinc-200/40">
              <p className="text-lg leading-relaxed text-zinc-600">{page.closing}</p>
            </div>
          ) : null}
        </div>
      </section>

      <ContactCTASection />

    </main>
  );
}
