"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileCheck2 } from "lucide-react";

export function GrcCTASection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#050607,#2b2e32)] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm lg:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-red-400">
            <FileCheck2 className="h-8 w-8" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-3xl font-bold tracking-tight md:text-5xl"
          >
            Assurer une GRC robuste, une conformite continue et une reduction
            des risques
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300"
          >
            Contactez-nous pour discuter de la facon dont nos services de GRC
            peuvent soutenir votre entreprise et renforcer votre posture de
            gouvernance, de risque et de conformite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition hover:-translate-y-1 hover:bg-white/15"
            >
              Contactez-nous
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
