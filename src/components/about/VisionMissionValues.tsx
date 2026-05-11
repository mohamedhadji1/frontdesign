"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/lib/about-data";
import { Shield, Lightbulb, Scale, Users, Award, Zap, Eye, Target } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";

const valueIcons = [Shield, Lightbulb, Scale, Users, Award, Zap];

const valueColors = [
  { icon: "text-red-600", bg: "bg-red-50" },
  { icon: "text-blue-600", bg: "bg-blue-50" },
  { icon: "text-red-600", bg: "bg-red-50" },
  { icon: "text-blue-600", bg: "bg-blue-50" },
  { icon: "text-red-600", bg: "bg-red-50" },
  { icon: "text-blue-600", bg: "bg-blue-50" },
];

export function VisionMissionValues() {
  const { visionMissionValues } = aboutContent;

  return (
    <section className="bg-white">
      {/* Vision & Mission */}
      <div className="mb-20">
        <div className="max-w-7xl mx-auto">
          <SectionDivider title="OUR DIRECTION" className="mb-6" />

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-zinc-900 uppercase tracking-tight mb-12"
          >
            Vision &amp; Mission
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-zinc-200 border-l-2 border-l-red-500 rounded-2xl p-10 flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <Eye size={20} className="text-red-600" />
                </div>
                <motion.span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Vision</motion.span>
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 uppercase tracking-tight">
                {visionMissionValues.vision.subtitle}
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                {visionMissionValues.vision.description}
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-zinc-200 border-l-2 border-l-blue-500 rounded-2xl p-10 flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Target size={20} className="text-blue-600" />
                </div>
                <motion.span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Mission</motion.span>
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 uppercase tracking-tight">
                {visionMissionValues.mission.subtitle}
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                {visionMissionValues.mission.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <CyberSectionDivider />

      {/* Values */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto">
          <SectionDivider title="OUR VALUES" className="justify-center mb-6" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 uppercase tracking-tight mb-4">
              The DNA of our excellence
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              These core values guide every decision we make and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visionMissionValues.values.map((value, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              const color = valueColors[idx % valueColors.length];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className="bg-zinc-50 rounded-xl p-8 flex flex-col gap-4"
                >
                  <div className={`w-9 h-9 rounded-lg ${color.bg} flex items-center justify-center`}>
                    <Icon size={18} className={color.icon} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 uppercase tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}