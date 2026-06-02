"use client";

import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Landmark,
  AlertTriangle,
  Scale,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { HeroSection } from "./sections/HeroSection";

const importanceItems = [
  {
    title: "Establish Solid Structures",
    d: "Train professionals to set up robust governance frameworks to guide company practices and decisions.",
    icon: Landmark,
  },
  {
    title: "Manage Risks",
    d: "Proactively assess, mitigate, and manage risks to avoid adverse consequences on the business.",
    icon: AlertTriangle,
  },
  {
    title: "Ensure Compliance",
    d: "Ensure that the company respects industry standards, regulations, and best practices.",
    icon: ShieldCheck,
  },
];

const approachItems = [
  {
    title: "Practical & Realistic",
    d: "Hands-on sessions emphasizing the practical application of GRC concepts in real-world scenarios.",
    icon: BookOpen,
  },
  {
    title: "Expert Trainers",
    d: "Experienced GRC specialists sharing their expertise and providing practical, strategic advice.",
    icon: Award,
  },
  {
    title: "Customized Modules",
    d: "Training programs adapted to the specific GRC needs of different business and industrial sectors.",
    icon: Users,
  },
];

const programs = [
  {
    title: "Corporate Governance",
    d: "Development of structures for a transparent, efficient, and robust corporate governance.",
    icon: Landmark,
  },
  {
    title: "Risk Management",
    d: "Comprehensive risk assessment, identification of vulnerabilities, and implementation of robust mitigation measures.",
    icon: AlertTriangle,
  },
  {
    title: "Regulatory Compliance",
    d: "Respecting legal, regulatory, and ethical standards specific to each business sector.",
    icon: Scale,
  },
];

export default function GrcTrainingPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  return (
    <main ref={targetRef} className="min-h-screen bg-white text-zinc-950 overflow-hidden">
      <HeroSection />
      <CyberSectionDivider />

      {/* Importance Section */}
      <section className="mb-20 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="GRC SIGNIFICANCE" className="mb-10" />
            <h2 className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]">
              Importance of GRC
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
              GRC is not limited to respecting rules. It forms the strategic bedrock of secure business decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            {importanceItems.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-red-600 shadow-md group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-red-600 rounded-full group-hover:scale-y-125 transition-transform" />
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-base font-medium">{item.d}</p>
              </motion.div>
            ))}
          </div>

          <CyberSectionDivider />

          {/* Practical Approach Grid */}
          <div className="my-32 mb-20">
            <div className="max-w-3xl mx-auto mb-20 text-center">
              <SectionDivider title="OUR APPROACH" className="mb-10" />
              <h2 className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]">
                Practice-Oriented Learning
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed font-medium">
                We bridge the gap between regulatory theory and real-world executive decision making.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {approachItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="group bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-red-600 shadow-md group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                    <div className="w-2 h-8 bg-red-600 rounded-full group-hover:scale-y-125 transition-transform" />
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-base font-medium">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <CyberSectionDivider />
          <SectionDivider title="TRAINING MODULES" className="!justify-start mb-6" />

          {/* Core Programs Section */}
          <div className="mt-32 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1] uppercase">
                GRC Programs
              </h2>
              <div className="space-y-8">
                {programs.map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-zinc-900 text-white flex items-center justify-center group-hover:bg-red-600 transition-colors shadow-lg">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-zinc-900 uppercase tracking-tighter mb-2">
                        {item.title}
                      </h4>
                      <p className="text-zinc-500 text-base font-medium leading-relaxed">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group bg-zinc-900 p-12 rounded-[3rem] text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] animate-pulse" />
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-tighter">
                Protect Your Business
              </h3>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-300 relative z-10 mb-12 text-center">
                "Strengthen corporate governance, minimize operational risks, and secure a compliant, resilient future for your business."
              </p>
              <div className="pt-10 border-t border-white/10 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all"
                >
                  Consult GRC Trainers <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CyberSectionDivider />
      <ContactCTASection />
    </main>
  );
}
