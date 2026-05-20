"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Zap, Search, FileText } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";

const features = [
  {
    title: "High-Level Penetration Testing Team",
    description: "Our team of pentesters is composed of seasoned experts with an in-depth knowledge of the most advanced technologies and complex attack scenarios.",
    icon: ShieldCheck,
  },
  {
    title: "Ability to Choose All Technological Challenges",
    description: "We test all technologies, from the most sophisticated firewalls to complex applications, assessing their resistance to attacks.",
    icon: Zap,
  },
  {
    title: "Simulation of Realistic Attacks",
    description: "We use advanced methodologies to simulate realistic attacks, adapting to the constant evolution of cyber threats.",
    icon: Target,
  },
  {
    title: "Deep and Versatile Assessment",
    description: "Our versatile approach thoroughly examines your systems, applications, and networks to identify potential vulnerabilities under various attack scenarios.",
    icon: Search,
  },
  {
    title: "Detailed and Precise Report",
    description: "We provide you with a comprehensive and precise report, accompanied by specific recommendations to address the discovered vulnerabilities.",
    icon: FileText,
  },
];

export function FeaturesSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220_38_38_0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(220_38_38_0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <SectionDivider title="CORE EXPERTISE" className="mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Cutting-Edge Expertise and Technological Challenges
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
