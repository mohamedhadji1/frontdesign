"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";
import { LayersIcon } from "@/components/animate-ui/icons/layers";
import { SettingsIcon } from "@/components/animate-ui/icons/settings";
import { BinaryIcon } from "@/components/animate-ui/icons/binary";
import { ActivityIcon } from "@/components/animate-ui/icons/activity";

const steps = [
  {
    phase: "01",
    title: "Analysis",
    description: "Deep static and dynamic analysis of the application architecture.",
    icon: <LayersIcon className="w-5 h-5" animateOnHover={true} />
  },
  {
    phase: "02",
    title: "Testing",
    description: "Manual and automated testing on interfaces, APIs, authentication mechanisms, and sessions.",
    icon: <SettingsIcon className="w-5 h-5" animateOnHover={true} />
  },
  {
    phase: "03",
    title: "Review",
    description: "Review of mobile security parameters (Android/iOS): local storage, permissions, reverse engineering.",
    icon: <BinaryIcon className="w-5 h-5" animateOnHover={true} />
  },
  {
    phase: "04",
    title: "Verification",
    description: "Rigorous verification of business logic errors, including flow bypass and privilege escalation.",
    icon: <ActivityIcon className="w-5 h-5" animateOnHover={true} />
  }
];

export function ApproachSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 1 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 1 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="py-32 relative overflow-hidden bg-cover bg-fixed group" 
      style={{ backgroundImage: 'url("/background/vector/network-nodes.svg")' }}
    >
      {/* Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.1), transparent 80%)`
        }}
      />
      <div className="absolute inset-0 bg-[#09090b]/50 pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-red-900/15 rounded-full blur-[100px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-red-500 font-medium text-sm tracking-[0.2em] mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-red-500/50"></span>
            Methodology
            <span className="w-8 h-px bg-red-500/50"></span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900">Approach</span>
          </h3>
        </div>

        {/* Timeline Layout */}
        <div className="relative w-full max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-px bg-gradient-to-b from-red-900/0 via-red-900 to-red-900/0 transform md:-translate-x-1/2" />

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative flex items-center mb-16 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              
              {/* Timeline Dot positioned exactly on the vertical line */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-red-600 transform -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                <div className="absolute inset-0.5 rounded-full bg-red-900/50 animate-pulse" />
              </div>

              {/* Content Panel */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16 text-left origin-left' : 'md:pr-16 md:text-right origin-right'}`}>
                <motion.div 
                  whileHover={{ y: -15, scale: 1.05, rotateX: 3, rotateY: idx % 2 === 0 ? -5 : 5 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 450, damping: 15 }}
                  className={`group relative bg-zinc-950/60 p-8 rounded-xl border border-zinc-800/50 hover:border-red-500/80 transition-all backdrop-blur-sm flex flex-col hover:bg-black/90 hover:shadow-[0_20px_60px_-15px_rgba(220,38,38,0.5)] z-10 hover:z-30 cursor-crosshair overflow-hidden ${idx % 2 === 0 ? 'items-start' : 'md:items-end'}`}
                >
                  {/* Interactive Shine Effect */}
                  <div className={`absolute top-0 left-0 w-full h-[2px] bg-red-500/50 shadow-[0_0_10px_rgba(220,38,38,0.8)] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite] pointer-events-none`} />
                  <div className={`absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/10 to-red-600/0 opacity-0 group-hover:opacity-100 transform ${idx % 2 === 0 ? '-translate-x-full group-hover:translate-x-full' : 'translate-x-full group-hover:-translate-x-full'} transition-transform duration-1000 ease-in-out pointer-events-none`} />

                  <div className={`flex items-center gap-4 mb-4 ${idx % 2 === 0 ? 'flex-row' : 'md:flex-row-reverse flex-row'}`}>
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.25 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className="w-12 h-12 bg-black text-red-500 rounded-lg flex items-center justify-center border border-zinc-800 group-hover:border-red-500/80 group-hover:shadow-[0_0_25px_rgba(220,38,38,0.8)] group-hover:bg-red-950/40 transition-all relative z-20"
                    >
                      {step.icon}
                    </motion.div>
                    <span className="font-medium text-xl tracking-wider text-zinc-500 group-hover:text-red-400/80 transition-colors">
                      PHASE.{step.phase}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-red-50">
                    {step.title}
                  </h4>
                  
                  <p className={`text-sm leading-relaxed max-w-sm text-zinc-400 group-hover:text-zinc-300`}>
                    {step.description}
                  </p>
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}