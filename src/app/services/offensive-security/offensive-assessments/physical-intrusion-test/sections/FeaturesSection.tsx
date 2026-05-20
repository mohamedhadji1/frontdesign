"use client";

import { motion } from "framer-motion";
import { Lock, DoorOpen, ShieldAlert, FileText, Construction } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";

const features = [
  {
    title: "Evaluation of Access and Physical Security",
    description: "We evaluate physical access points, security measures, and access control procedures to identify weaknesses.",
    icon: Lock,
  },
  {
    title: "Realistic Attack Simulations",
    description: "We conduct realistic physical attack simulations, such as espionage, theft, and unauthorized access to sensitive premises, to identify vulnerabilities.",
    icon: ShieldAlert,
  },
  {
    title: "Testing Security Procedures",
    description: "We are evaluating the effectiveness of physical security procedures, including identifying gaps in visitor management and facility monitoring.",
    icon: DoorOpen,
  },
  {
    title: "Detailed Report and Recommendations",
    description: "We provide a comprehensive report of our findings, accompanied by recommendations to enhance the physical security of your facilities.",
    icon: FileText,
  },
  {
    title: "Strengthening Physical Security",
    description: "We support you in implementing corrective measures to enhance the security of your premises and physical installations.",
    icon: Construction,
  },
];

export function FeaturesSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220_38_38_0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(220_38_38_0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <SectionDivider title="PHYSICAL SECURITY" className="mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Strengthen Your Physical Security
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
