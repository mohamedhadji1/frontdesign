"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";
import Link from "next/link";
import { TerminalIcon } from "@/components/animate-ui/icons/terminal";

export function RedTeamCTASection() {
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
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} 
      onMouseMove={handleMouseMove}
      className="relative py-16 md:py-20 overflow-hidden border-t border-red-900/30 bg-cover bg-center group bg-black/20" 
      style={{ backgroundImage: 'url("/background/vector/circuit-glow.svg")' }}
    >
      {/* Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 md:group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.2), transparent 80%)`
        }}
      />
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(220,38,38,0.15) 0%, transparent 60%)' }}></div>
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-red-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex flex-col text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-3 mb-4 text-red-500"
          >
            <TerminalIcon className="w-6 h-6" animateOnHover />
            <span className="font-medium text-sm tracking-widest uppercase">Initiate Attack Simulation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight uppercase"
          >
            Don't Wait For A <span className="text-red-500">Real Breach</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-400 font-medium max-w-2xl leading-relaxed"
          >
            Uncover your blind spots before adversaries do. Engage our elite Red Team to pressure-test your physical, human, and digital perimeters.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="shrink-0 relative group"
        >
          {/* Neon Glow effect on hover */}
          <div className="absolute -inset-1 bg-red-600/50 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
          
          <Link
            href="/contact"
            className="relative flex items-center gap-3 bg-zinc-950 hover:bg-red-950/80 text-white font-medium uppercase tracking-wider py-4 px-8 rounded-full border border-red-900/50 hover:border-red-500 transition-all duration-300 shadow-sm"
          >
            <span>Request Assessment</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}