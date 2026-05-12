"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  GraduationCap,
  LayoutGrid,
  ShieldAlert,
  TimerReset,
  Search,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";

const informationMenu = [
  { 
    name: "Security Management", 
    href: "/services/strategy-governance", 
    desc: "Strategic oversight and policy development for complex organizations.",
    icon: LayoutGrid 
  },
  { 
    name: "Governance, Risk, and Compliance", 
    href: "/services/governance-risk-compliance", 
    desc: "Ensuring regulatory alignment and sustainable risk frameworks.",
    icon: ShieldAlert 
  },
  { 
    name: "Business Continuity & Resilience", 
    href: "/services/cyber-exercise/business-continuity-management-resilience-and-recovery", 
    desc: "Operational recovery planning for critical infrastructure.",
    icon: TimerReset 
  },
  { 
    name: "Cybersecurity & Investigation", 
    href: "/services/cyber-exercise/cybersecurity-and-investigation", 
    desc: "Deep technical analysis and incident forensic investigation.",
    icon: Search 
  }
];

const mainPrograms = [
  {
    title: "Basic Training",
    description: "Initiation to cybersecurity fundamentals for all employees to build a baseline of safety.",
    icon: GraduationCap,
  },
  {
    title: "Advanced Technical Training",
    description: "Deepening skills for IT and security teams in high-pressure technical environments.",
    icon: Cpu,
  },
  {
    title: "Bespoke Training",
    description: "Creation of custom programs adapted to your specific organizational needs and tech stack.",
    icon: ShieldCheck,
  },
];

export default function TrainingAwarenessPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

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
            src="/background/bg8.jpeg"
            alt="Keystone Training Background"
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
            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              Training & Awareness
            </h1>

            <HeroTypeLine
              items={["Build Human Resilience", "Transform Behaviors", "Strengthen Your Defense"]}
            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              Information security relies on the awareness of your team. Our training is designed to educate and equip your team with the knowledge necessary to face today's challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl">
                Get Security Assessment
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider />

      {/* Section 1: Main Programs - Compact Grid */}
      <section className="mb-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <motion.div style={{ y: y1, rotate }} className="absolute top-[10%] right-[5%] w-64 h-64 border border-red-500/5 rounded-full" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionDivider title="OUR PROGRAMS" className="mb-10" />
            <h2 className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]">
               Capability Building
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
               Transforming each employee into a strong link.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainPrograms.map((program) => (
              <motion.div
                key={program.title}
                whileHover={{ y: -10 }}
                className="group bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-red-600 shadow-md group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                   <program.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-red-600 rounded-full group-hover:scale-y-125 transition-transform" />
                  {program.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-base font-medium mb-8 flex-grow">
                  {program.description}
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] text-red-600 hover:gap-4 transition-all">
                   Explore Program <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* Section 2: Expertise (Replacing Sidebar) - Compact Cards */}
      <section className="mb-20 bg-zinc-50/30">
        <div className="container mx-auto px-6 lg:px-12">
           <div className="max-w-3xl mx-auto mb-20 text-center">
              <SectionDivider title="AREAS OF EXPERTISE" className="mb-10" />
              <h2 className="text-3xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]">
                 Strategic Impact
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {informationMenu.map((item, idx) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="group relative bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                   <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-colors" />
                   <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="h-12 w-12 shrink-0 rounded-xl bg-zinc-900 text-white flex items-center justify-center group-hover:bg-red-600 transition-colors shadow-xl">
                         <item.icon size={20} />
                      </div>
                      <div className="flex-1">
                         <h4 className="text-xl font-bold text-zinc-900 mb-3 uppercase tracking-tighter group-hover:text-red-600 transition-colors italic">{item.name}</h4>
                         <p className="text-zinc-500 text-base font-medium leading-relaxed mb-6">{item.desc}</p>
                         <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-600">
                            Visit Service <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                         </div>
                      </div>
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* Section 3: Final Impact - Compact Layout */}
      <section className="mb-20 bg-white">
        <SectionDivider title="THE VISION" className="!justify-start mb-6" />
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
             >
                
                <h2 className="text-4xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1] uppercase">
                   Security Culture
                </h2>
                <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed font-medium border-l-4 border-red-600 pl-8">
                   Information security relies on the awareness of your team.
                </p>
                <div className="flex flex-col gap-4 pt-6">
                   {[
                     "Strengthen Skills",
                     "Create Culture",
                     "Reduce Risks"
                   ].map(item => (
                     <div key={item} className="flex gap-4 items-center group">
                        <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all">✓</div>
                        <p className="text-zinc-700 text-lg font-bold uppercase tracking-tight">{item}</p>
                     </div>
                   ))}
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
             >
                <div className="relative bg-zinc-900 p-12 rounded-[3rem] text-white shadow-2xl overflow-hidden group">
                   <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-[80px]" />
                   <h2 className="text-3xl font-bold mb-8 uppercase tracking-tighter italic">Why Keystone?</h2>
                   <p className="text-zinc-300 text-xl font-light italic leading-relaxed mb-12">
                      "Our vision is to become the preferred cybersecurity partner in the EMEA region."
                   </p>
                   <div className="pt-10 border-t border-white/10">
                      <Link href="/contact" className="inline-flex items-center gap-4 bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all">
                         Get Started Now <ArrowRight size={18} />
                      </Link>
                   </div>
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
