"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  UserCheck,
  Target,
  Layout,
  Cpu,
  Trophy,
  Shield,
  Users,
  Zap,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const importanceItems = [
  {
    title: "Test the Preparation",
    description: "Simulate realistic scenarios to assess your team's responsiveness and readiness against potential attacks.",
    icon: Activity,
  },
  {
    title: "Identify Weaknesses",
    description: "Detect vulnerabilities in your systems, policies, and user behaviors to strengthen them.",
    icon: AlertTriangle,
  },
  {
    title: "Train in Real Situations",
    description: "Provide your team with the practical and necessary experience to better manage crises in the event of a real incident.",
    icon: UserCheck,
  },
];

const approachItems = [
  {
    title: "Realistic Simulation",
    description: "Exercises based on real scenarios to simulate attacks and assess your organization's response.",
    icon: Target,
  },
  {
    title: "Crisis Management",
    description: "Clear protocols and effective incident management to minimize damage in the event of an attack.",
    icon: Layout,
  },
  {
    title: "Technical Training",
    description: "Strengthening your team's technical skills to better anticipate and counter threats.",
    icon: Cpu,
  },
];

export default function CyberExercisePage() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden">
      {/* 1. Deep Cyber Hero Section with Background Video */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-center overflow-hidden"
      >
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
          <div className="absolute inset-0 bg-black/40 sm:bg-linear-to-r sm:from-black/85 sm:via-black/45 sm:to-transparent" />
          <div className="absolute inset-0 bg-[url('/background/vector/cyber-matrix.svg')] bg-cover bg-center opacity-15 mix-blend-screen" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center lg:items-start lg:text-left h-full justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl pt-10"
          >
            <div className="mb-6 inline-flex items-center gap-3 text-red-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              <Link href="/services" className="hover:text-red-300 transition-colors">Services</Link>
              <ChevronRight size={8} />
              <span className="text-white/60">Cyber Exercise</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              Cyber <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Exercise</span>
            </h1>

            <HeroTypeLine
              items={[
                "Strengthen Your Preparation",
                "Anticipate Threats",
                "Scenario-driven Readiness"
              ]}
              className="mb-6"
            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              The management of cyber exercises is an essential component to strengthen your company&apos;s preparedness against digital threats. At Keystone, we build immersive environments to test your resilience under real-world conditions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl"
              >
                Launch Cyber Exercise <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider theme="red" />
      <SectionDivider title="Cyber Exercise"/>

      {/* Intro Context Section */}
      <section className="pb-20 pt-10 bg-white relative overflow-hidden">
        <div className="px-6 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl lg:text-3xl text-zinc-800 leading-relaxed font-light"
            >
              The Cyber Exercise Management & Technique activity at KEYSTONE aims to transform awareness into proactive action, enabling your team to acquire the necessary skills to face any cyber scenario they may encounter.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section 1: The Importance */}
      <CyberSectionDivider />
      <section className="mb-20 bg-white relative overflow-hidden">
        <div className="px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <SectionDivider title="WHY IT MATTERS" className="mb-12 lg:mb-16" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20 lg:mb-28"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-4xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
              >
                The Importance of Cyber Exercises
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-700 font-light leading-relaxed max-w-2xl mt-6">
                Cybersecurity threats are constantly evolving. Our exercise management is crucial for maintaining a high state of readiness.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {importanceItems.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-8">
                      <div className="inline-flex p-4 bg-red-100 rounded-lg">
                        <item.icon size={28} className="text-red-600" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-light text-zinc-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-zinc-700 leading-relaxed font-light text-base flex-grow">
                      {item.description}
                    </p>
                    <motion.div 
                      className="mt-8 h-0.5 w-0 rounded-full bg-red-600 group-hover:w-12 transition-all duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* Section 2: Our Approach */}
      <section className="mb-20 bg-white relative overflow-hidden">
        <div className="px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <SectionDivider title="OUR APPROACH" className="mb-12 lg:mb-16" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20 lg:mb-28"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-4xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
              >
                Combining Management & Technical Skills
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-700 font-light leading-relaxed max-w-2xl mt-6">
                We believe in a holistic approach that integrates both strategic management and technical excellence to build true resilience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {approachItems.map((item, idx) => {
                const isRed = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-8">
                        <div className={`inline-flex p-4 rounded-lg ${isRed ? 'bg-red-100' : 'bg-blue-100'}`}>
                          <item.icon size={28} className={isRed ? 'text-red-600' : 'text-blue-600'} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-light text-zinc-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-zinc-700 leading-relaxed font-light text-base flex-grow">
                        {item.description}
                      </p>
                      <motion.div 
                        className={`mt-8 h-0.5 w-0 rounded-full group-hover:w-12 transition-all duration-500 ${isRed ? 'bg-red-600' : 'bg-blue-600'}`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CyberSectionDivider theme="red" />

      {/* Section 3: Invest in Resilience */}
      <section className="bg-white relative overflow-hidden ">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/3 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/3 rounded-full blur-3xl" />
        </div>
        <div className="px-6 lg:px-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SectionDivider title="INVESTMENT & OUTCOMES" className="mb-12 lg:mb-16" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20 lg:mb-28 flex flex-col"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-4xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
              >
                Invest in Resilience
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-700 font-light leading-relaxed max-w-2xl mt-6">
                By collaborating with KEYSTONE, you are investing in the resilience of your business. We support you in adopting practices and strategies that promote agile and effective responsiveness to cyber threats.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <div className="inline-flex p-4 bg-red-100 rounded-lg">
                      <Shield size={28} className="text-red-600" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-zinc-900 mb-4">
                    Enhanced Security
                  </h3>
                  <p className="text-zinc-700 leading-relaxed font-light text-base flex-grow">
                    Build a robust defense posture with comprehensive threat awareness and mitigation strategies.
                  </p>
                  <motion.div 
                    className="mt-8 h-0.5 w-0 rounded-full bg-red-600 group-hover:w-12 transition-all duration-500"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <div className="inline-flex p-4 bg-blue-100 rounded-lg">
                      <Users size={28} className="text-blue-600" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-zinc-900 mb-4">
                    Team Readiness
                  </h3>
                  <p className="text-zinc-700 leading-relaxed font-light text-base flex-grow">
                    Equip your teams with the skills and confidence to respond effectively to any cyber incident.
                  </p>
                  <motion.div 
                    className="mt-8 h-0.5 w-0 rounded-full bg-blue-600 group-hover:w-12 transition-all duration-500"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <div className="inline-flex p-4 bg-red-100 rounded-lg">
                      <Zap size={28} className="text-red-600" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-zinc-900 mb-4">
                    Rapid Response
                  </h3>
                  <p className="text-zinc-700 leading-relaxed font-light text-base flex-grow">
                    Minimize incident impact with faster detection, response, and recovery capabilities.
                  </p>
                  <motion.div 
                    className="mt-8 h-0.5 w-0 rounded-full bg-red-600 group-hover:w-12 transition-all duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CyberSectionDivider />
      <ContactCTASection />
    </main>
  );
}
