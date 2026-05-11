"use client";

import React from "react";
import { motion } from "framer-motion";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { SectionDivider } from "@/components/ui/SectionDivider";

import { AboutHeroSection } from "./AboutHeroSection";

interface AboutSubPageProps {
  title: string;
  subtitle?: string;
  description: string;
  sections?: { title: string; description: string }[];
}

export function AboutSubPage({ title, subtitle, description, sections }: AboutSubPageProps) {
  return (
    <div className="w-full bg-white">
      {/* Hero Section - Using standardized AboutHeroSection */}
      <AboutHeroSection title={title} description={description} />

      <CyberSectionDivider />

      {/* Main Content Sections */}
      {sections && sections.length > 0 && (
        <>
          <SectionDivider title="DETAILS" />
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {sections.map((section, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex flex-col items-start p-8 rounded-xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:border-red-600/20 transition-all duration-500"
                  >
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <span className="text-lg font-bold">0{idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-red-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      {section.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
