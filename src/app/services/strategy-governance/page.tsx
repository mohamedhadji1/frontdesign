"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Users,
  Target,
  Layout,
  Cpu,
  Trophy,
  Activity,
  UserCheck,
  ClipboardCheck,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

const importanceItems = [
  { title: "Strategic Oversight", d: "Train managers to develop policies, manage risks, and lead security strategies with precision.", icon: Layout },
  { title: "Resilient Culture", d: "Encourage awareness at all levels and foster a proactive protection culture throughout the org.", icon: Users },
  { title: "Data-Driven Choices", d: "Equip leaders to make strategic choices aligned with business goals and risk appetite.", icon: Target },
];

const programs = [
  { title: "Risk & Compliance", d: "Strategies to assess and manage risks while respecting international standards.", icon: ClipboardCheck },
  { title: "Executive Leadership", d: "Developing leadership skills to lead high-performing technical security teams.", icon: Trophy },
  { title: "Strategic Roadmaps", d: "Developing plans for proactive security aligned with corporate objectives.", icon: ShieldCheck },
];

export default function SecurityManagementPage() {
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
            src="/background/bg10.png"
            alt="Strategic Security Management"
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
               <span>Information</span>
               <ChevronRight size={8} />
               <span className="text-white/60">Security Management</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              Security Management
            </h1>

            <HeroTypeLine
              items={["Strategic Oversight", "Executive Leadership", "Global Governance"]}
            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              Manage robust security and anticipate global threats. Equip professionals with the skills necessary to lead cybersecurity proactively.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
               <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl">
                  Enhance Leadership <ArrowRight size={18} />
               </Link>
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider />

      {/* Strategic Capability Section - Compact Grid */}
      <section className="mb-20 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="MANAGEMENT IMPORTANCE" className="mb-10" />
            <h2 className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]">
               Strategic Capability
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
               Leading security requires vision, policy, and a commitment to risk management.
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
             <SectionDivider title="CORE PROGRAMS" className="!justify-start mb-6" />

          {/* Core Programs Style vision section - Compact */}
          <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1] uppercase">
                   Leading Technical Teams
                </h2>
                <div className="space-y-8">
                   {programs.map((item, idx) => (
                     <div key={idx} className="flex gap-6 group">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-zinc-900 text-white flex items-center justify-center group-hover:bg-red-600 transition-colors shadow-lg">
                           <item.icon size={18} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-zinc-900 uppercase tracking-tighter mb-2 italic">{item.title}</h4>
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
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-tighter italic">Strategic Action</h3>
                <p className="text-xl md:text-2xl font-light italic leading-relaxed text-zinc-300 relative z-10 mb-12">
                  "Invest in strategic security management to protect your digital future."
                </p>
                <div className="pt-10 border-t border-white/10 text-center">
                   <Link href="/contact" className="inline-flex items-center gap-4 bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all">
                      Consult an Expert <ArrowRight size={18} />
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
