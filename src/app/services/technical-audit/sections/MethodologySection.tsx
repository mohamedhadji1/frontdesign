"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Search, Settings, Shield, Activity, FileText, CheckCircle2 } from "lucide-react";
import { MouseEvent } from "react";

export function MethodologySection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 1 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 1 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const steps = [
    {
      id: "analysis",
      name: "Analysis",
      desc: "Static and dynamic analysis of the application to identify structural flaws and insecure coding practices.",
      icon: <Search className="w-5 h-5" />
    },
    {
      id: "tests",
      name: "Interface & API Tests",
      desc: "Manual and automated tests focusing on user interfaces, REST/GraphQL APIs, authentication, and session management.",
      icon: <Activity className="w-5 h-5" />
    },
    {
      id: "mobile",
      name: "Mobile Review",
      desc: "In-depth review of mobile security mechanisms (Android/iOS) including local storage, permissions, and reverse engineering defenses.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: "verification",
      name: "Logic Verification",
      desc: "Verification of business logic errors, including process flow bypasses and privilege escalation attempts.",
      icon: <CheckCircle2 className="w-5 h-5" />
    }
  ];

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-10 md:py-10 bg-black/20 text-white relative overflow-hidden" onMouseMove={handleMouseMove}>
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`radial-gradient(1000px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.1), transparent 80%)`
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6 text-red-500 font-semibold tracking-wider text-sm uppercase">
            <h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-red-600/30"></span>
              OUR APPROACH
              <span className="w-8 h-px bg-red-600/30"></span>
            </h2>          
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Audit Methodology</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our structured audit process guarantees thorough coverage of your specialized environments, ensuring no misconfiguration or hidden vulnerability is overlooked.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-[#0a0a0a] border border-[#222] hover:border-red-500/30 p-8 rounded-xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-black/20 border border-[#333] group-hover:border-red-500/50 group-hover:bg-red-500/10 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-red-500 transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="text-5xl font-black text-[#111] group-hover:text-red-500/10 transition-colors duration-500 font-mono tracking-tighter">
                    0{idx + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-100 mb-4 group-hover:text-white transition-colors">
                  {step.name}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}