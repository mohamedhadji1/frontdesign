"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";
import { BinaryIcon } from "@/components/animate-ui/icons/binary";
import { LockIcon } from "@/components/animate-ui/icons/lock";
import { BotIcon } from "@/components/animate-ui/icons/bot";
import { CircuitBoardIcon } from "@/components/animate-ui/icons/circuit-board";
import { SearchIcon } from "@/components/animate-ui/icons/search";

const testItems = [
  {
    title: "Injection & Execution",
    description: "Testing for SQLi, XSS, Command Injection and other input validation flaws.",
    icon: <BinaryIcon className="w-6 h-6" animateOnHover={true} />
  },
  {
    title: "Auth & Sessions",
    description: "Identifying poor credential handling and session management vulnerabilities.",
    icon: <LockIcon className="w-6 h-6" animateOnHover={true} />
  },
  {
    title: "API Vulnerabilities",
    description: "Deep testing against the OWASP API Top 10 to ensure backend endpoints are secure.",
    icon: <CircuitBoardIcon className="w-6 h-6" animateOnHover={true} />
  },
  {
    title: "Configuration & Leaks",
    description: "Detecting configuration flaws or sensitive information disclosure in your environments.",
    icon: <SearchIcon className="w-6 h-6" animateOnHover={true} />
  },
  {
    title: "Reverse Engineering",
    description: "Assessing the resistance to reverse engineering for iOS and Android mobile apps.",
    icon: <BotIcon className="w-6 h-6" animateOnHover={true} />
  }
];

export function WhatWeTestSection() {
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
      className="py-24 relative border-t border-zinc-900 bg-cover bg-center overflow-hidden group" 
      style={{ backgroundImage: 'url("/background/vector/cyber-matrix.svg")' }}
    >
      {/* Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.15), transparent 80%)`
        }}
      />
      <div className="absolute inset-0 bg-black/80 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.1),transparent_50%)] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-red-500 font-medium text-sm tracking-widest uppercase mb-4">
            Attack Surface
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight uppercase">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Test</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15, scale: 1.08, rotateX: 5, rotateY: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 450, damping: 12 }}
              className={`bg-zinc-950/60 backdrop-blur-md border border-zinc-800/50 p-8 rounded-xl hover:bg-zinc-900/90 hover:border-red-500/80 transition-all hover:shadow-[0_20px_60px_-15px_rgba(220,38,38,0.4)] group hover:z-30 relative overflow-hidden cursor-crosshair ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Interactive scanning laser line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500/50 shadow-[0_0_10px_rgba(220,38,38,0.8)] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite] pointer-events-none" />

              <motion.div 
                whileHover={{ rotate: 720, scale: 1.25, transition: { duration: 0.8, type: "spring" } }}
                className="w-12 h-12 bg-black border border-zinc-800 rounded-lg flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform group-hover:border-red-500/80 group-hover:text-red-400 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] group-hover:bg-red-950/40 relative z-10"
              >
                {item.icon}
              </motion.div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-wide">{item.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}