"use client";

import { useState } from "react";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { BackToTop } from "@/components/ui/BackToTop";
import { aboutContent } from "@/lib/about-data";
import { MapSection } from "@/components/home/MapSection";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Cpu,
  Truck,
  Rocket,
  Building2,
  Tv,
  Landmark,
} from "lucide-react";

const sectorIcons = [
  Landmark,
  HeartPulse,
  Building2,
  Cpu,
  Rocket,
  Tv,
  Truck,
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  },
  viewport: { once: true }
};

import { CompanyOverview } from "@/components/about/CompanyOverview";

export default function AboutPage() {
  const { mainAbout } = aboutContent;
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <AboutHeroSection />
      <CyberSectionDivider />

      {/* 1. MISSION */}
      <SectionDivider title="OUR MISSION" />
      <section className="relative w-full py-24 flex items-center overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            {...fadeInUp}
            className="w-full lg:w-1/2 space-y-8 z-10"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-[1.1]"
            >
              {mainAbout.hero.subtitle}
            </motion.h2>
            <p className="text-xl text-zinc-600 leading-relaxed font-medium">
              {mainAbout.hero.description}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative h-[450px] overflow-hidden"
          >
            <Image
              src="/background/bg10.png"
              alt="Strategic Cybersecurity"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* 2. COMPANY OVERVIEW - REGIONAL PRESENCE */}
      <SectionDivider title="COMPANY OVERVIEW" className="bg-[#FCFCFC]" />
      <CompanyOverview />

      <CyberSectionDivider />

      {/* 3. Services */}
      <SectionDivider title="OUR SERVICES" className="bg-[#FCFCFC]" />
      <section className="py-12 bg-zinc-50/50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16"
          >
            {mainAbout.services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="flex gap-8 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-16 h-16 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-red-600 font-black text-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm"
                >
                  0{idx + 1}
                </motion.div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-red-600 transition-colors">{service.title}</h3>
                  <p className="text-zinc-600 leading-relaxed max-w-md">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CyberSectionDivider />
      <SectionDivider title="Commercial Excellence" className="bg-[#FCFCFC]" />
      {/* 3. Commitment */}
      <section className="relative w-full py-10 overflow-hidden bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl lg:text-5xl font-bold text-zinc-900 uppercase tracking-tighter">Our Commitment</motion.h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-4"
          >
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-12 left-0 right-0 h-[1px] bg-zinc-200 hidden md:block" 
            />
            
            {mainAbout.commitment.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative z-10 flex flex-col items-center text-center space-y-6 flex-1 px-4"
              >
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="w-24 h-24 rounded-full bg-white border-2 border-red-600 flex items-center justify-center text-red-600 shadow-xl group hover:bg-red-600 hover:text-white transition-all duration-500"
                >
                  {idx === 0 && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
                  {idx === 1 && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
                  {idx === 2 && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>}
                </motion.div>
                <h3 className="text-xl font-bold text-zinc-900">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* 4. Intervention Areas */}
      <SectionDivider title="WHO WE SERVE" />
      <section className="relative py-10 bg-zinc-50/50 overflow-hidden" style={{ backgroundImage: "url('/background/bg4.png')", backgroundSize: "50%", backgroundPosition: "right center", backgroundRepeat: "no-repeat" }}>
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <motion.div 
            {...fadeInUp}
            className="max-w-4xl mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-8 uppercase tracking-tighter">Strategic Impact</h2>
            <p className="text-xl text-zinc-600 leading-relaxed font-medium border-l-4 border-red-600 pl-6">
              {mainAbout.forWhom}
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              hidden: { opacity: 0 }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-dense gap-4 md:auto-rows-[120px]"
          >
            {mainAbout.areas.map((area, index) => {
              const isActive = index === activeIndex;
              const Icon = sectorIcons[index];

              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border transition-all duration-500 ${
                    isActive
                    ? "col-span-1 min-h-[220px] border-red-600 bg-red-600 shadow-xl md:col-span-3 md:row-span-2 md:min-h-0"
                    : "col-span-1 min-h-[104px] border-zinc-200 bg-white/70 backdrop-blur-sm hover:border-red-400 hover:shadow-sm"
                  }`}
                >
                  <div className={`relative z-10 flex h-full flex-col ${isActive ? 'justify-start p-8 md:justify-center' : 'items-center justify-center p-4 text-center'}`}>
                    <div className={`flex w-full ${isActive ? 'items-center gap-6 mb-6' : 'flex-col items-center gap-2'}`}>
                      <div className={`flex shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${isActive ? 'h-16 w-16 bg-white shadow-xl shadow-red-600/10' : 'h-10 w-10 bg-red-50 group-hover:bg-red-100'}`}>
                        {Icon && <Icon className={`transition-colors duration-300 ${isActive ? 'w-8 h-8 text-red-600' : 'w-4 h-4 text-red-500'}`} />}
                      </div>
                      <h3 className={`font-bold transition-colors duration-300 ${isActive ? 'text-2xl text-white' : 'text-sm text-zinc-800 group-hover:text-red-600'}`}>
                        {area.title}
                      </h3>
                    </div>

                    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0 delay-200' : 'pointer-events-none opacity-0 translate-y-4 h-0'}`}>
                      <p className="text-sm md:text-lg text-white leading-relaxed font-medium">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* Global Presence */}
      <SectionDivider title="GLOBAL PRESENCE" />
      <MapSection />

      {/* Shared Home CTA Section */}
      <ContactCTASection />

      <BackToTop />
    </main>
  );
}
