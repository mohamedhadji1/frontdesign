"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Search,
  FileSearch,
  ShieldAlert,
  Fingerprint,
  HardDrive,
  Network,
  Cpu,
  Microscope,
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
    title: "Hands-on Virtual Labs",
    description: "Learn inside sandboxed lab environments, simulating high-severity malware threats and conducting deep forensic examinations in a safe space.",
    icon: Cpu,
  },
  {
    title: "Elite Security Trainers",
    description: "Benefit from direct training, coaching, and tactical insights from active security researchers and threat hunters operating at the highest levels.",
    icon: Users,
  },
  {
    title: "Real-world Incident Case Studies",
    description: "Walk through actual security incident lifecycles to understand modern threat actor vectors, lateral movement, and advanced forensic workflows.",
    icon: Fingerprint,
  },
];

const importanceItems = [
  { title: "Threat Prevention", d: "Detect and counter sophisticated cyber attacks before they cause damage.", icon: ShieldAlert },
  { title: "Digital Investigation", d: "Develop skills to conduct deep forensic analysis in case of incidents.", icon: FileSearch },
  { title: "Data Protection", d: "Guarantee information security and ensure the absolute confidentiality of data.", icon: ShieldCheck },
];

const programs = [
  { title: "Advanced Cybersecurity", d: "Strengthening technical skills to protect infrastructures against sophisticated attacks.", icon: HardDrive },
  { title: "Digital Investigation", d: "Acquiring skills to conduct thorough investigations of security incidents.", icon: Search },
  { title: "Forensic Analysis", d: "Learning methods to examine and analyze digital evidence for legal use.", icon: Fingerprint },
];

export default function CybersecurityInvestigationPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  return (
    <main ref={targetRef} className="min-h-screen bg-white text-zinc-950 overflow-hidden">
      <HeroSection />
      <CyberSectionDivider />

      {/* Forensic Prowess - Compact Grid */}
      <section className="mb-20 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="EXPERT ANALYSIS" className="mb-10" />
            <h2 className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]">
               Forensic Prowess
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
               Technical excellence is at the heart of our mission.
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
          <SectionDivider title="EXPERTISE PROGRAMS" className="!justify-start mb-6" />

          {/* Advanced Defense Section - Compact vision style */}
          <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1] uppercase">
                   Advanced Defense
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
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-tighter">Technical Perimeter</h3>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-300 relative z-10 mb-12 text-center">
                  "Master the tools of forensic science to protect your digital perimeter."
                </p>
                <div className="pt-10 border-t border-white/10 text-center">
                   <Link href="/contact" className="inline-flex items-center gap-4 bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all">
                      Consult an Analyst <ArrowRight size={18} />
                   </Link>
                </div>
             </motion.div>
          </div>
        </div>
      </section>
      
      <CyberSectionDivider />

      {/* Our Technical Approach Section */}
      <section className="py-24 bg-white text-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="OUR APPROACH" className="mb-10 !justify-center text-red-600" />
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tighter uppercase leading-[0.95] text-zinc-900">
              An Elite Approach to Technical Expertise
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-medium">
              We focus on intense, hands-on, lab-driven learning experiences that cultivate deep tactical reflexes.
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
