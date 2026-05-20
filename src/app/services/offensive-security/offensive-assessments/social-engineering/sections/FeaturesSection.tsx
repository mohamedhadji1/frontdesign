"use client";

import { motion } from "framer-motion";
import { Users, Eye, ClipboardCheck, GraduationCap, FileWarning } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";

const features = [
  {
    title: "Simulation of Multifaceted Attacks",
    description: "We use a versatile approach by simulating various attacks, such as attempts at physical manipulation and fraudulent phone calls.",
    icon: Users,
  },
  {
    title: "Evaluation of Preparedness and Awareness",
    description: "We assess your staff's preparedness for physical manipulations, unauthorized access attempts, as well as their awareness of fraudulent phone calls.",
    icon: Eye,
  },
  {
    title: "Testing Policies and Procedures",
    description: "We are examining the effectiveness of your security policies regarding visitor reception, identity verification, and telephone call management.",
    icon: ClipboardCheck,
  },
  {
    title: "Enhanced Awareness",
    description: "We offer targeted training programs to strengthen your staff's resilience against social engineering attacks.",
    icon: GraduationCap,
  },
  {
    title: "Comprehensive Report on Human Vulnerabilities",
    description: "We provide a detailed report of the identified vulnerabilities, with recommendations to strengthen the human resilience of your organization.",
    icon: FileWarning,
  },
];

export function FeaturesSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220_38_38_0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(220_38_38_0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <SectionDivider title="HUMAN RESILIENCE" className="mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Comprehensive Assessment of Human Resilience
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 transition-all hover:bg-white hover:shadow-xl"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-zinc-900">{feature.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
