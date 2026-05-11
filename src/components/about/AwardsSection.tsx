"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/lib/about-data";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Trophy, Star, ShieldCheck } from "lucide-react";

const categoryIcons = [Trophy, Star, ShieldCheck];

export function AwardsSection() {
  const { awards } = aboutContent;

  return (
    <section className="relative overflow-hidden bg-white pb-20">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <SectionDivider title="RECOGNITION" className="mb-8" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-extrabold text-zinc-900 mb-8 uppercase tracking-tight"
          >
            Awards & Recognition
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 leading-relaxed font-medium"
          >
            {awards.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {awards.prizes.map((category, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="flex flex-col h-full"
              >
                <div className="bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100 flex-1 flex flex-col hover:border-red-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-red-600/20">
                    <Icon size={32} />
                  </div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-zinc-900 mb-8 uppercase tracking-tight"
                  >
                    {category.category}
                  </motion.h2>
                  <div className="space-y-8 flex-1">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="space-y-2 group cursor-default">
                        <h4 className="text-lg font-bold text-zinc-800 group-hover:text-red-600 transition-colors flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                          {item.title}
                        </h4>
                        <p className="text-zinc-500 font-medium leading-relaxed pl-3.5">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
