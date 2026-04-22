"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7f1d1d1a_1px,transparent_1px),linear-gradient(to_bottom,#7f1d1d1a_1px,transparent_1px)] bg-[size:16px_28px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.16),transparent_30%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl lg:p-12">
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
            <span>Governance, Risk & Compliance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Gouvernance, <span className="text-red-500">risque</span> et conformite
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300"
          >
            Maitrisez vos risques, respectez les normes, et renforcez la
            resilience de votre organisation avec une approche GRC structuree,
            pragmatique et adaptee a votre contexte.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-400 md:text-lg"
          >
            La gestion efficace de la gouvernance, du risque et de la
            conformite est essentielle dans un environnement reglementaire en
            evolution constante. Chez Keystone, nous aidons votre entreprise a
            proteger ses activites, reduire son exposition et respecter les
            standards lies a la securite de l&apos;information.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="rounded-full bg-red-600 px-7 py-3.5 font-semibold text-white transition hover:bg-red-700"
            >
              Contactez-nous
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Voir tous les services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
