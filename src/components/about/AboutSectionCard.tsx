"use client";

import { motion } from "framer-motion";

interface AboutSectionCardProps {
  title: string;
  description: string;
  index: number;
  compact?: boolean;
}

export function AboutSectionCard({ title, description, index, compact }: AboutSectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group relative flex flex-col items-start rounded-2xl border border-zinc-100 bg-white p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/5 hover:-translate-y-2 ${
        compact ? "min-h-[200px]" : "min-h-[280px]"
      }`}
    >
      {/* Accent Line */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="flex w-full justify-between items-start mb-8">
        <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-inner">
          <span className="text-lg font-black tracking-tighter">0{index}</span>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-600">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>

      <h3 className={`${compact ? "text-lg" : "text-xl"} font-bold text-zinc-900 mb-4 group-hover:text-red-600 transition-colors duration-300`}>
        {title}
      </h3>

      <p className={`text-zinc-500 leading-relaxed font-medium transition-colors duration-300 group-hover:text-zinc-700 ${compact ? "text-sm" : "text-base"}`}>
        {description}
      </p>

      {/* Decorative background element */}
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-colors" />
    </motion.div>
  );
}
