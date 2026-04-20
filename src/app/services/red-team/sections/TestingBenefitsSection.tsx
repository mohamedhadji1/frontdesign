"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { SearchIcon as Eye } from "@/components/animate-ui/icons/search";
import { LockIcon as ShieldAlert } from "@/components/animate-ui/icons/lock";
import { BotIcon as Users } from "@/components/animate-ui/icons/bot";
import { SignalIcon as Zap } from "@/components/animate-ui/icons/signal";
import { CircuitBoardIcon as Map } from "@/components/animate-ui/icons/circuit-board";
import { CrossIcon as Target } from "@/components/animate-ui/icons/cross";
import { ArrowRightIcon as ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import { useState, MouseEvent } from "react";

export function TestingBenefitsSection() {
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
      title: "Identify Blind Spots",
      desc: "Discover critical vulnerabilities before a real breach occurs, mapping undocumented attack paths.",
      icon: <Eye className="w-5 h-5" animateOnHover={true} />,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Validate Defenses",
      desc: "Test your SIEM rules, SOC alertness, and incident response times under simulated fire.",
      icon: <ShieldAlert className="w-5 h-5" animateOnHover={true} />,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Stress-Test Personnel",
      desc: "Evaluate employee awareness with precision-targeted spear-phishing and social engineering.",
      icon: <Users className="w-5 h-5" animateOnHover={true} />,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Multi-Stage Readiness",
      desc: "Measure your actual resilience against complex, multi-vector Advanced Persistent Threats (APTs).",
      icon: <Zap className="w-5 h-5" animateOnHover={true} />,
      color: "from-red-600 to-orange-600"
    },
    {
      title: "Actionable Roadmaps",
      desc: "Receive exact remediation steps and architectural advice to harden your perimeter effectively.",
      icon: <Map className="w-5 h-5" animateOnHover={true} />,
      color: "from-red-400 to-orange-400"
    }
  ];

  return (
    <section 
      className="relative w-full py-24 md:py-40 px-6 md:px-12 bg-white overflow-hidden text-zinc-600 border-t border-zinc-200 group"
      onMouseMove={handleMouseMove}
    >
      {/* Heavy mesh base background */}
      <div className="absolute inset-0 bg-white z-0" />
      
      {/* Base faint mesh */}
      <div 
        className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Interactive Highlight Mesh that follows the cursor */}
      <motion.div 
        className="absolute inset-0 opacity-[0.1] z-0 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          WebkitMaskImage: useMotionTemplate`radial-gradient(500px circle at ${smoothX}px ${smoothY}px, black, transparent 80%)`,
          maskImage: useMotionTemplate`radial-gradient(500px circle at ${smoothX}px ${smoothY}px, black, transparent 80%)`,
        }}
      />

      {/* Interactive Spotlight Glow moving with user mouse */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.1), transparent 80%)`
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.05),transparent_50%)] pointer-events-none z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px]"
          animate={{ x: [-100, 50, -100] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 relative z-10">
        
        {/* Left Column / Interactive List */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 w-full space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 text-red-600 text-xs font-medium uppercase tracking-widest rounded mb-6 shadow-sm">
              <Target className="w-4 h-4" animateOnHover={true} />
              Strategic Advantage
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-zinc-900 uppercase"
          >
            Think Like an Attacker.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Act First.</span>
          </motion.h2>

          <div className="space-y-4 pt-4">
            {benefits.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setActiveIdx(idx)}
                  className={`group w-full text-left p-5 rounded-lg border transition-all duration-300 flex items-start gap-4 ${
                    activeIdx === idx 
                      ? "bg-white border-zinc-200 shadow-md ring-1 ring-red-500/10" 
                      : "bg-transparent border-transparent hover:bg-zinc-50 hover:border-zinc-200 hover:shadow-sm"
                  }`}
                >
                  <div className={`mt-0.5 p-2 rounded-md transition-colors shrink-0 ${
                    activeIdx === idx ? "bg-red-50 text-red-600" : "bg-zinc-100 text-zinc-400 group-hover:text-red-500 group-hover:bg-red-50/50"
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold mb-1 transition-colors ${
                      activeIdx === idx ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-800"
                    }`}>
                      {item.title}
                    </h4>
                    <AnimatePresence>
                      {activeIdx === idx && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-zinc-600 text-sm leading-relaxed"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className={`mt-1 shrink-0 transition-all duration-300 ${
                    activeIdx === idx 
                      ? "text-red-600 opacity-100 translate-x-1" 
                      : "text-zinc-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-red-400"
                  }`}>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Right Column / Interactive Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 w-full max-w-lg relative group h-[500px] lg:h-[700px]"
        >
          {/* Glow effect behind interactive panel */}
          <div className="absolute -inset-4 bg-gradient-to-br from-red-600/20 via-transparent to-transparent rounded-lg blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative rounded-lg overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900 h-full w-full flex flex-col">
            {/* Corner Bracket accouterments */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500 z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500 z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500 z-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500 z-20 pointer-events-none" />

            {/* Simulated terminal header */}
            <div className="h-10 bg-zinc-950 border-b border-zinc-800 flex items-center px-4 gap-2 z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-red-600/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              <span className="font-medium text-[10px] text-zinc-600 ml-2">sys_override_monitor.exe</span>
            </div>

            <div className="flex-1 relative bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.1),transparent_70%)]">
              {/* Dynamic visual representation based on activeIdx */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, filter: "blur(8px)", scale: 0.9 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(8px)", scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${benefits[activeIdx].color} mb-8 flex items-center justify-center p-0.5 shadow-[0_0_30px_rgba(220,38,38,0.3)]`}>
                    <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center">
                      <div className="text-white scale-150">
                        {benefits[activeIdx].icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">
                    {benefits[activeIdx].title}
                  </h3>
                  
                  <div className="font-medium text-zinc-500 text-sm leading-loose max-w-sm">
                    {"// Executing diagnostic..."}
                    <br/>
                    {benefits[activeIdx].desc}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Animated scan lines effect */}
              <motion.div 
                className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(220,38,38,0.15)_50%,transparent_100%)] pointer-events-none z-10"
                style={{ backgroundSize: "100% 4px" }}
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
