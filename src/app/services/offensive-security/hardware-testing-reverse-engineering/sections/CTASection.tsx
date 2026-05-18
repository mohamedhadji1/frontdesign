"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import { MouseEvent } from "react";

export function CTASection() {
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
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden border-t border-red-900/30 bg-black/20 bg-cover bg-center py-16 md:py-20"
      style={{ backgroundImage: 'url("/background/vector/circuit-glow.svg")' }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.2), transparent 80%)`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/45" />
      
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:gap-12 md:text-left">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center gap-3 text-red-500 md:justify-start"
          >
            <Cpu className="h-6 w-6" />
            <span className="text-sm font-medium uppercase tracking-widest">
              Keystone: Your Partner in Hardware Security
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl"
          >
            Ready to secure your hardware infrastructure?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-base font-medium leading-relaxed text-zinc-300"
          >
            Keystone&apos;s Hardware Testing and Reverse Engineering service ensures the safety and 
            reliability of your hardware components. Contact us for a comprehensive assessment.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative shrink-0"
        >
          <Link
            href="/contact?service=hardware-testing"
            className="relative inline-flex items-center gap-3 rounded-full border border-red-900/50 bg-zinc-950 px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:border-red-500 hover:bg-red-950/80"
          >
            <span>Request Assessment</span>
            <ArrowRight className="h-5 w-5 text-red-500 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
