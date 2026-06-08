"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/lib/about-data";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { CheckCircle2, ShieldCheck, Globe, Cpu } from "lucide-react";
import { ContactCTASection } from "../home/ContactCTASection";
import { CertificationsList } from "../home/CertificationsList";

const expertiseIcons = [ShieldCheck, Globe, Cpu, CheckCircle2];

export function TeamSection() {
  const { team } = aboutContent;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <SectionDivider title="OUR EXPERTS" className="mb-8" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-extrabold text-zinc-900 mb-8 uppercase tracking-tight"
          >
            International Expertise & Specialization
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 leading-relaxed font-medium"
          >
            {team.description}
          </motion.p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          {team.expertise.map((item, idx) => {
            const Icon = expertiseIcons[idx % expertiseIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100 hover:border-red-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-600/20">
                    <Icon size={28} />
                  </div>
                  <motion.h2
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-zinc-900 group-hover:text-red-600 transition-colors"
                  >
                    {item.title}
                  </motion.h2>
                </div>
                <p className="text-zinc-600 leading-relaxed font-medium text-lg">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <CertificationsList className="mb-20" />
      <CyberSectionDivider />
      <ContactCTASection />
    </section>
  );
}
