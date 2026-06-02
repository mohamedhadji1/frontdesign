"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  TimerReset,
  Zap,
  RefreshCw,
  AlertTriangle,
  ClipboardList,
  RotateCcw,
  ArrowRight,
  ChevronRight,
  Users,
  GraduationCap,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { HeroSection } from "./sections/HeroSection";

const approachItems = [
  {
    title: "Crisis Simulation Exercises",
    description: "Immersive, realistic crisis simulations to evaluate and reinforce your team's decision-making and operational reflexes under extreme pressure.",
    icon: Zap,
  },
  {
    title: "Seasoned Expert Guidance",
    description: "Benefit from direct mentoring, active feedback, and tactical insights from business continuity professionals with extensive real-world field experience.",
    icon: Users,
  },
  {
    title: "Tailored Customization",
    description: "Bespoke training programs designed specifically to match your organization's unique technical architecture, industry-specific risks, and operational needs.",
    icon: GraduationCap,
  },
];

const importanceItems = [
  { title: "Plan for Unexpected", d: "Prepare action plans to maintain operations even during major disruptions.", icon: ClipboardList },
  { title: "Strengthen Resilience", d: "Develop strategies to recover quickly and effectively after a crisis.", icon: Zap },
  { title: "Reduce Losses", d: "Minimize financial and operational losses during unforeseen situations.", icon: AlertTriangle },
];

const programs = [
  { title: "Continuity Planning", d: "Developing plans to maintain critical operations during and after a crisis.", icon: TimerReset },
  { title: "Disaster Recovery", d: "Technical strategies to recover effectively after a major interruption.", icon: RefreshCw },
  { title: "Plan Evaluation", d: "Implementing processes to test and improve continuity plans through rigor.", icon: RotateCcw },
];

export default function BcmPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  return (
    <main ref={targetRef} className="min-h-screen bg-white text-zinc-950 overflow-hidden">
      <HeroSection />
      <CyberSectionDivider />

      {/* Operational Continuity - Compact grid */}
      <section className="mb-20 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="CONTINUITY IMPORTANCE" className="mb-10" />
            <h2 className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]">
               Operational Continuity
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
               A resilient business is one that survives disruptions.
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
          <SectionDivider title="CORE BCM MODULES" className="!justify-start mb-6" />
          {/* Building Resilience - Compact Vision */}
          <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1] uppercase">
                   Building Resilience
                </h2>
                <div className="space-y-8">
                   {programs.map((item, idx) => (
                     <div key={idx} className="flex gap-6 group">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-zinc-900 text-white flex items-center justify-center group-hover:bg-red-600 transition-colors shadow-lg">
                           <item.icon size={18} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-zinc-900 uppercase tracking-tighter mb-2">{item.title}</h4>
                           <p className="text-zinc-500 text-base font-medium leading-relaxed">{item.d}</p>
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
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-tighter">Resilience Vision</h3>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-300 relative z-10 mb-12 text-center">
                  "Resilience is the ability to rebound and thrive despite adversity."
                </p>
                <div className="pt-10 border-t border-white/10 text-center">
                   <Link href="/contact" className="inline-flex items-center gap-4 bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all">
                      Consult with BCM Experts <ArrowRight size={18} />
                   </Link>
                </div>
             </motion.div>
          </div>
        </div>
      </section>
      
      <CyberSectionDivider />

      {/* Our Practical Approach Section */}
      <section className="py-24 bg-white text-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="OUR APPROACH" className="mb-10 !justify-center text-red-600" />
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tighter uppercase leading-[0.95] text-zinc-900">
              A Practical Approach to Resilience
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-medium">
              We translate theory into action, preparing your workforce to lead through high-stress operational crises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {approachItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-colors" />
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-red-600 shadow-md group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                  <item.icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-tighter group-hover:text-red-600 transition-colors flex items-center gap-3">
                  <div className="w-2 h-8 bg-red-600 rounded-full group-hover:scale-y-125 transition-transform" />
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-base font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CyberSectionDivider />
      <ContactCTASection />
    </main>
  );
}
