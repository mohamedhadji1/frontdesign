"use client";

import { motion } from "framer-motion";
import { BarChart3, Compass, Target } from "lucide-react";

const reasons = [
  {
    title: "Expertise pointue",
    description:
      "Notre equipe possede une expertise approfondie en gouvernance, gestion des risques et conformite pour livrer des solutions adaptees a vos besoins uniques.",
    icon: <Compass className="h-6 w-6" />,
  },
  {
    title: "Approche personnalisee",
    description:
      "Chaque entreprise fait face a des enjeux GRC differents. Nous adaptons nos services a votre contexte, vos objectifs et vos contraintes.",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Resultats concrets",
    description:
      "Nos interventions reduisent les risques, ameliorent la conformite et renforcent durablement la resilience de votre organisation.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
            <span className="h-px w-8 bg-red-600/30" />
            Pourquoi Keystone
            <span className="h-px w-8 bg-red-600/30" />
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Pourquoi choisir Keystone pour votre GRC ?
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Nous transformons les exigences de gouvernance, de risque et de
            conformite en un dispositif concret, lisible et utile pour vos
            equipes.
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
    </section>
  );
}
