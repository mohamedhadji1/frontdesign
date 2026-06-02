"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  dark?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("w-full max-w-4xl mb-12 sm:mb-16", className)}>
      {eyebrow && (
        <span className={cn(
          "text-xs font-extrabold uppercase tracking-widest block mb-4",
          dark ? "text-red-400" : "text-red-600"
        )}>
          {eyebrow}
        </span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-[1.1]",
          dark ? "text-white" : "text-zinc-950"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={cn(
            "mt-5 text-base sm:text-lg leading-relaxed max-w-2xl font-medium",
            dark ? "text-zinc-300" : "text-zinc-600"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
