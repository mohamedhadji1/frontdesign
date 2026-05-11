"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/lib/about-data";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const { testimonials } = aboutContent;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-24">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <SectionDivider title="CLIENT STORIES" className="mb-8" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-extrabold text-zinc-900 mb-8 uppercase tracking-tight"
          >
            Client Testimonials
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 leading-relaxed font-medium"
          >
            {testimonials.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-zinc-50 p-12 rounded-[3rem] border border-zinc-100 flex flex-col relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-zinc-100 group-hover:text-red-600/5 transition-colors">
                <Quote size={80} />
              </div>
              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-600"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-lg text-zinc-700 leading-relaxed font-medium italic mb-10">
                  "{item.text}"
                </p>
                <div className="mt-auto">
                  <div className="w-10 h-1 bg-red-600 mb-4" />
                  <motion.h2 
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-bold text-zinc-900 uppercase tracking-widest text-sm"
                  >
                    {item.name}
                  </motion.h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
