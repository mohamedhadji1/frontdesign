"use client";

import { motion } from "framer-motion";
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
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      className="relative w-full h-[100vh] min-h-[100vh] flex flex-col justify-between overflow-hidden pt-52 sm:pt-60 lg:pt-64 pb-12 text-white"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/vids/videoplayback.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25 sm:bg-linear-to-r sm:from-black/65 sm:via-black/25 sm:to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center items-center text-center lg:items-start lg:text-left py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
            {title}
          </h1>

          <HeroTypeLine
            items={heroItems}
          />

          <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-center lg:items-start">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl">
              Learn More
              <span>→</span>
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
