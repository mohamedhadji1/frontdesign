"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Eye, ShieldAlert, Zap, Map, ArrowRight } from "lucide-react";
import { useState, MouseEvent } from "react";

export function BenefitsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement for background effects
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const benefits = [
    {
      title: "OWASP Vulnerability Exploitation",
      desc: "Exploitation of OWASP Top 10 vulnerabilities is at the root of many compromises.",
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: "24/7 Critical Services Exposure",
      desc: "Your applications expose critical services that are accessible 24/7 to potential attackers.",
      icon: <ShieldAlert className="w-5 h-5" />
    },
    {
      title: "Unsecured APIs",
      desc: "REST/GraphQL APIs are often poorly secured or insufficiently tested.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Mobile App Risks",
      desc: "Mobile apps, although publicly distributed, sometimes embed secrets, keys, or critical functions.",
      icon: <Map className="w-5 h-5" />
    }
  ];

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="py-24 md:py-32 bg-white text-zinc-900 relative overflow-hidden group"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(800px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.03), transparent 70%)`
        }}
      />
      
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-50/50 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-6 text-red-600 font-semibold tracking-wider text-sm uppercase">
            <span className="w-8 h-0.5 bg-red-600"></span>
            Application Audit
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-900 tracking-tight leading-tight">
            Why Conduct an <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              Application Audit?
            </span>
          </h2>
          <p className="text-zinc-600 text-lg mb-10 leading-relaxed max-w-lg">
            Your custom applications are the core of your digital business. Auditing them ensures that business logic flaws, unprotected APIs, and mobile app secrets don't become your biggest liability.
          </p>

          <div className="flex flex-col gap-3">
            {benefits.map((benefit, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className={`group relative text-left p-5 rounded-xl transition-all duration-300 flex items-center justify-between border overflow-hidden ${
                  activeIdx === idx 
                    ? "bg-zinc-50 border-red-500/30 shadow-md shadow-red-900/5 ring-1 ring-red-500/10" 
                    : "bg-white border-zinc-100 hover:border-red-500/10 hover:bg-zinc-50/50"
                }`}
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent transition-opacity duration-300 ${
                    activeIdx === idx ? "opacity-100" : "opacity-0"
                  }`} 
                />

                <div className="flex items-center gap-4 relative z-10">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 ${
                    activeIdx === idx ? "bg-red-100 text-red-600" : "bg-zinc-100 text-zinc-500 group-hover:text-red-500"
                  }`}>
                    {benefit.icon}
                  </div>
                  <h3 className={`font-semibold text-base transition-colors duration-300 ${
                    activeIdx === idx ? "text-zinc-900" : "text-zinc-600 group-hover:text-zinc-900"
                  }`}>
                    {benefit.title}
                  </h3>
                </div>

                <div className="relative w-6 h-6 overflow-hidden flex items-center justify-center">
                  <ArrowRight className={`w-4 h-4 transition-all duration-300 text-red-600 absolute ${
                    activeIdx === idx 
                      ? "transform translate-x-0 opacity-100" 
                      : "transform -translate-x-full opacity-0 group-hover:-translate-x-1 group-hover:opacity-50"
                  }`} />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[450px] lg:h-[600px] flex items-center justify-center p-8">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-50" />
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50"
              animate={{ 
                x: [0, 20, 0],
                scale: [1, 1.1, 1] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10 w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100"
            >
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
                {benefits[activeIdx].icon}
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                {benefits[activeIdx].title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {benefits[activeIdx].desc}
              </p>
              
              <div className="mt-8 pt-8 border-t border-zinc-100">
                <div className="h-2 w-12 bg-red-600 rounded-full" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}