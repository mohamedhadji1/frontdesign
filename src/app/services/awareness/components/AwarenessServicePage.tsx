"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Animation refs
  const linesRef = useRef<(SVGPathElement | null)[]>([]);
  const hexagon1Ref = useRef<SVGSVGElement>(null);
  const hexagon2Ref = useRef<SVGSVGElement>(null);
  const hexagon3Ref = useRef<SVGSVGElement>(null);
  const centerHubRef = useRef<HTMLDivElement>(null);

  const numFeatures = page.features.length;
  const itemSpacing = numFeatures > 1 ? 480 / (numFeatures - 1) : 0;

  // Scroll-based active index tracking using IntersectionObserver
  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    if (window.innerWidth < 1024) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportCenter = window.innerHeight / 2;
      const progress = Math.max(0, Math.min(1, (viewportCenter - rect.top) / sectionHeight));
      const step = 1 / numFeatures;
      let index = Math.floor(progress / step);
      if (index >= numFeatures) index = numFeatures - 1;
      if (index < 0) index = 0;
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [numFeatures]);

  // Apply CSS transitions for hexagon rotations when activeIndex changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (hexagon1Ref.current) {
      hexagon1Ref.current.style.transition = "transform 0.8s cubic-bezier(0.33, 1, 0.68, 1)";
      hexagon1Ref.current.style.transform = `rotate(${activeIndex * 120}deg)`;
    }
    if (hexagon2Ref.current) {
      hexagon2Ref.current.style.transition = "transform 0.8s cubic-bezier(0.33, 1, 0.68, 1)";
      hexagon2Ref.current.style.transform = `rotate(${-activeIndex * 120}deg)`;
    }
    if (hexagon3Ref.current) {
      hexagon3Ref.current.style.transition = "transform 0.8s cubic-bezier(0.33, 1, 0.68, 1)";
      hexagon3Ref.current.style.transform = `rotate(${activeIndex * 60}deg)`;
    }
    if (centerHubRef.current) {
      centerHubRef.current.style.transition = "transform 0.3s ease";
      centerHubRef.current.style.transform = "scale(1.05)";
      setTimeout(() => {
        if (centerHubRef.current) {
          centerHubRef.current.style.transform = "scale(1)";
        }
      }, 300);
    }
  }, [activeIndex]);

  return (
    <main className="min-h-screen bg-white text-zinc-950 overflow-x-hidden">
      
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[100vh] min-h-[100vh] flex flex-col justify-between overflow-hidden pt-36 sm:pt-44 lg:pt-48 pb-12 text-white bg-zinc-950"
      >
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/vids/videoplayback.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 sm:bg-linear-to-r sm:from-black/75 sm:via-black/30 sm:to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[url('/background/vector/cyber-matrix.svg')] bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none" />
        </div>

        <div 
          className="relative z-10 container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center items-center text-center lg:items-start lg:text-left py-12 lg:py-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full max-w-5xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-red-400 sm:text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              {page.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-[4.5rem] font-light tracking-tight text-white leading-[1.05] uppercase"
            >
              {page.title}
            </motion.h1>

            <HeroTypeLine
              items={[page.eyebrow, "Strategic Training", "Behavioral Transformation"]}
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 font-medium tracking-wide leading-relaxed max-w-3xl"
            >
              {page.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start"
            >
               <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl">
                  Book Session <ArrowRight size={18} />
               </Link>
            </motion.div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider />

      {/* Experience Outcomes Section - Pinned on Desktop scroll via GSAP */}
      <section 
        ref={sectionRef} 
        className="py-24 bg-white relative w-full overflow-hidden flex flex-col justify-center h-[100vh] min-h-[100vh] lg:min-h-0"
      >
        {/* Soft Background Spotlight Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/[0.01] rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <SectionDivider title="EXPERIENCE OUTCOMES" className="mb-8" />
            <h2 className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-4 tracking-tighter uppercase leading-[0.95]">
               Strategic Impact
            </h2>
            <p className="hidden lg:block text-xs font-semibold uppercase tracking-widest text-red-600 animate-pulse mt-2">
              ↓ Scroll down to explore the program stages in depth
            </p>
          </div>

          {/* Desktop Interactive Hub Layout (ServicesSection.tsx style) */}
          <div
            className="hidden lg:flex relative max-w-[1152px] mx-auto h-[600px] items-center text-gray-900 overflow-visible mt-6"
          >
            {/* Background Concentric Dotted Hexagons */}
            <div className="absolute left-[576px] top-[300px] -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex items-center justify-center">
              <svg ref={hexagon1Ref} width="120" height="120" viewBox="0 0 120 120" className="absolute opacity-30 pointer-events-none">
                <polygon points="60,0 111.96,30 111.96,90 60,120 8.04,90 8.04,30" fill="none" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              <svg ref={hexagon2Ref} width="180" height="180" viewBox="0 0 180 180" className="absolute opacity-20 pointer-events-none">
                <polygon points="90,0 167.94,45 167.94,135 90,180 12.06,135 12.06,45" fill="none" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              <svg ref={hexagon3Ref} width="280" height="280" viewBox="0 0 280 280" className="absolute opacity-20 cursor-pointer hover:stroke-red-400">
                <polygon points="140,0 261.24,70 261.24,210 140,280 18.76,210 18.76,70" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="6 6" />
              </svg>

              <svg width="400" height="400" viewBox="0 0 400 400" className="absolute opacity-10 pointer-events-none">
                <polygon points="200,0 373.2,100 373.2,300 200,400 26.8,300 26.8,100" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="6 6" />
              </svg>

              <svg width="550" height="550" viewBox="0 0 550 550" className="absolute opacity-10 cursor-pointer">
                <polygon points="275,0 513.15,137.5 513.15,412.5 275,550 36.85,412.5 36.85,137.5" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="8 8" />
              </svg>
            </div>

            {/* Curved Connecting Laser Lines with Active Particle Flows */}
            <svg className="absolute inset-0 w-full h-[600px] pointer-events-none z-0" viewBox="0 0 1152 600">
              {page.features.map((_, idx) => {
                const isActive = activeIndex === idx;
                const yPos = (idx * itemSpacing) + 60;

                const startX = 380;
                const targetX = 576;
                const targetY = 300;
                const pathD = `M ${startX},${yPos} C ${startX + 80},${yPos} ${targetX - 80},${targetY} ${targetX},${targetY}`;

                return (
                  <g key={`connection-${idx}`}>
                    <path
                      ref={(el) => { linesRef.current[idx] = el; }}
                      d={pathD}
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="2"
                      className="transition-all duration-500"
                      style={{
                        stroke: isActive ? "#ef4444" : "#e5e7eb",
                        strokeWidth: isActive ? 3 : 2,
                      }}
                    />
                    {isActive && (
                      <circle r="4.5" fill="#ef4444" style={{ filter: "drop-shadow(0 0 6px rgba(239,68,68,0.95))" }}>
                        <animateMotion
                          dur="2s"
                          repeatCount="indefinite"
                          path={pathD}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Left Interactive Selection List */}
            <div className="absolute left-0 top-0 h-[600px] w-[380px] z-10 flex flex-col justify-center">
              {page.features.map((feature, idx) => {
                const isActive = activeIndex === idx;
                const yPos = (idx * itemSpacing) + 60;

                return (
                  <div
                    key={`left-item-${idx}`}
                    className="absolute right-0 flex justify-end items-center cursor-pointer group"
                    style={{ top: `${yPos}px`, transform: 'translateY(-50%)', width: '500px' }}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <div
                      className={`absolute inset-y-0 right-0 left-0 bg-gradient-to-r from-transparent ${isActive ? 'to-red-50/70' : 'to-gray-55/30 group-hover:to-red-50/50'} -z-10 transition-colors duration-300`}
                    />

                    <span className={`pr-4 pl-8 py-3 text-[17px] font-bold transition-all duration-350 ${isActive ? 'text-red-600' : 'text-zinc-500 group-hover:text-zinc-900'}`}>
                      {feature.title}
                    </span>

                    <span className={`w-7 h-7 mr-6 flex items-center justify-center bg-white rounded-full shadow-sm border transition-all duration-300 relative ${isActive ? 'text-red-600 border-red-200 translate-x-1' : 'text-gray-400 border-gray-100'} group-hover:border-red-200 group-hover:text-red-600 group-hover:translate-x-1`}>
                      {isActive && (
                        <span className="absolute inset-0 rounded-full border border-red-500/50 animate-ping opacity-75 pointer-events-none" />
                      )}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Center Logo Hub Graphic */}
            <div className="absolute left-[576px] top-[300px] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
              <div 
                ref={centerHubRef}
                className="bg-white w-[100px] h-[100px] shadow-lg flex items-center justify-center border border-gray-100" 
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <Image
                  src="/logos/site icon black.png"
                  alt="Keystone Icon"
                  width={50}
                  height={50}
                  style={{ width: "auto", height: "auto" }}
                  className="z-10 object-contain drop-shadow-sm"
                />
              </div>
            </div>

            {/* Right Dynamic Description Pane - Using AnimatePresence to completely prevent overlapping stack bugs */}
            <div className="absolute left-[680px] top-[300px] -translate-y-1/2 right-12 z-10 w-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: -20, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col items-start"
                >
                  <h2 className="text-[28px] font-bold text-gray-900 mb-6 leading-tight uppercase flex items-center gap-3">
                    <span className="w-2.5 h-8 bg-red-600 rounded-full shrink-0" />
                    {page.features[activeIndex].title}
                  </h2>
                  <p className="text-gray-650 text-[17px] leading-relaxed font-medium border-l-2 border-slate-100 pl-6">
                    {page.features[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Fallback Stack Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:hidden font-sans mt-6">
            {page.features.map((feature, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                  className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-5 shadow-xl sm:p-8"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />
                  <div className="relative z-10 flex flex-col items-start gap-5">
                    <div className="text-red-600 bg-red-50 p-3 rounded-xl">
                      <Icon size={24} />
                    </div>
                    <motion.h2 className="text-xl font-bold text-gray-900 leading-tight uppercase">
                      {feature.title}
                    </motion.h2>
                    <p className="text-gray-650 text-sm leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* Closing Thought Vision Card */}
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
                  <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-300 relative z-10 text-center">
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
