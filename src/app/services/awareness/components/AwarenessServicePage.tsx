"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ShieldCheck, Sparkles, Target, ArrowRight, ChevronRight } from "lucide-react";
import type { AwarenessPageData } from "../data";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

const icons = [ShieldCheck, Sparkles, Target];

export function AwarenessServicePage({ page }: { page: AwarenessPageData }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  return (
    <main ref={targetRef} className="min-h-screen bg-white text-zinc-950 overflow-hidden">
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="relative w-full h-[60dvh] min-h-[600px] flex flex-col justify-center overflow-hidden pt-28 pb-16 lg:pt-32"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={page.heroImage || "/background/bg8.jpeg"}
            alt={page.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60 sm:bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center lg:items-start lg:text-left h-full justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl pt-10"
          >
            <div className="mb-6 inline-flex items-center gap-3 text-red-500 font-bold uppercase tracking-[0.2em] text-[10px]">
               <Link href="/services/awareness" className="hover:text-white transition-colors">Awareness</Link>
               <ChevronRight size={8} />
               <span className="text-white/60">Service Details</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              {page.title}
            </h1>

            <HeroTypeLine
              items={[page.eyebrow, "Strategic Training", "Behavioral Transformation"]}
            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              {page.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
               <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl">
                  Book Session <ArrowRight size={18} />
               </Link>
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider />

      {/* Experience Outcomes - Compact Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="EXPERIENCE OUTCOMES" className="mb-10" />
            <h2 className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]">
               Strategic Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.features.map((feature, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -10 }}
                  className="group bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-red-600 shadow-md group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                     <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                    <div className="w-2 h-8 bg-red-600 rounded-full group-hover:scale-y-125 transition-transform" />
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-base font-medium mb-4">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* Closing Thought - Compact Vision Card */}
      {page.closing && (
        <section className="py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
               <SectionDivider title="THE VISION" className="mb-12" />
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative group bg-zinc-900 p-12 rounded-[3rem] text-white shadow-2xl overflow-hidden"
               >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] animate-pulse" />
                  <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-zinc-300 relative z-10 text-center">
                    "{page.closing}"
                  </p>
                  <div className="mt-12 text-center relative z-10 border-t border-white/10 pt-10">
                     <Link href="/contact" className="inline-flex items-center gap-4 bg-red-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all">
                        Consult with Experts <ArrowRight size={18} />
                     </Link>
                  </div>
               </motion.div>
            </div>
          </div>
        </section>
      )}

      <CyberSectionDivider />
      <ContactCTASection />
    </main>
  );
}
