"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

interface AboutHeroSectionProps {
  title?: string;
  description?: string;
  heroItems?: string[];
}

export function AboutHeroSection({ 
  title = "About Keystone", 
  description = "Sustainable Cybersecurity: Your strategic partner determined to protect your most valuable assets.",
  heroItems = ["Your Indispensable Ally", "Sustainable Cybersecurity", "Strategic Growth Catalyst"]
}: AboutHeroSectionProps) {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="relative w-full h-[60dvh] min-h-[500px] flex flex-col justify-center overflow-hidden pt-28 pb-16 lg:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/bg8.jpeg"
          alt="Keystone Network Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark subtle overlay for text visibility */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center lg:items-start lg:text-left h-full justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl pt-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-bold tracking-tight text-white leading-[1.1] mb-6 uppercase">
            {title}
          </h1>

          <HeroTypeLine
            items={heroItems}
          />

          <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-center lg:items-start">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-colors shadow-lg whitespace-nowrap">
              Get Security Assessment
              <span className="font-bold">→</span>
            </button>
            <button className="border-b border-white hover:border-red-500 text-white hover:text-red-500 font-medium py-3 px-6 flex items-center justify-center transition-all bg-transparent w-max">
              Emergency Response
            </button>
          </div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </motion.section>
  );
}
