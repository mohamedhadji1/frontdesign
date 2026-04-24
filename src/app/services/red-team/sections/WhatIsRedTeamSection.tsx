"use client";

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Crosshair } from "lucide-react";
import { useRef, MouseEvent } from "react";

// Animate UI Icons
import { TerminalIcon } from "@/components/animate-ui/icons/terminal";
import { LockIcon } from "@/components/animate-ui/icons/lock";
import { BotIcon } from "@/components/animate-ui/icons/bot";
import { SearchIcon } from "@/components/animate-ui/icons/search";
import { ActivityIcon } from "@/components/animate-ui/icons/activity";
import { CircuitBoardIcon } from "@/components/animate-ui/icons/circuit-board";
import { Disc3Icon } from "@/components/animate-ui/icons/disc-3";

export function WhatIsRedTeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 1 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 1 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
  };

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="bg-white text-zinc-900 py-24 md:py-10 relative overflow-hidden group"
    >
      {/* Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.08), transparent 80%)`
        }}
      />

      {/* Scroll-linked vertical tracking line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-zinc-200 z-0">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-600 via-red-500 to-transparent shadow-sm" 
          style={{ height: lineHeight }} 
        />
      </div>

      {/* Decorative Grid / Mesh */}
      <div className="absolute inset-0 bg-white z-0 pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05),transparent_70%)] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-12 relative z-10 pl-16 md:pl-24">
        
        {/* Top Intro */}
        <div className="max-w-4xl mb-20 mx-auto text-center">
          <h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-red-600/30"></span>
            Infrastructure Assessment
            <span className="w-8 h-px bg-red-600/30"></span>
          </h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight uppercase mx-auto max-w-3xl text-center"
          >
            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Red Teaming?</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-600 text-lg md:text-xl leading-relaxed mx-auto text-center max-w-2xl"
          >
            Unlike standard vulnerability assessments that check boxes, Red Teaming is an unrestricted, objective-based assessment. We emulate Advanced Persistent Threats (APTs) to subject your entire organization—technology, physical security, and human elements—to realistic cyberattacks.
          </motion.p>
        </div>

        {/* Two-Column Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute -left-12 top-2 w-4 h-px bg-red-600/50 hidden md:block" />
              <h3 className="text-xl font-bold text-zinc-900 mb-3 uppercase tracking-wide">Goal-Oriented Testing</h3>
              <p className="text-zinc-600 leading-relaxed font-medium text-sm">
                Instead of finding every flaw, we focus on specific goals—like stealing sensitive customer data, compromising domain administrator credentials, or breaching a physical vault. It proves true business impact.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute -left-12 top-2 w-4 h-px bg-red-600/50 hidden md:block" />
              <h3 className="text-xl font-bold text-zinc-900 mb-3 uppercase tracking-wide">Evaluating Blue Teams</h3>
              <p className="text-zinc-600 leading-relaxed font-medium text-sm">
                A true Red Team engagement measures how effectively your internal security operations (SOC and Blue Team) can detect, respond to, and mitigate a persistent, stealthy attacker in real-time.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <div className="absolute -left-12 top-2 w-4 h-px bg-red-600/50 hidden md:block" />
              <h3 className="text-xl font-bold text-zinc-900 mb-3 uppercase tracking-wide">Beyond Perimeter Defenses</h3>
              <p className="text-zinc-600 leading-relaxed font-medium text-sm">
                We assume the mindset of a determined threat actor. If the firewall is too strong, we pivot. We might drop malware on a USB drive in your parking lot, tailgate employees, or use elaborate spear-phishing campaigns.
              </p>
            </motion.div>
          </motion.div>

          {/* Vectors Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {[
              {
                title: "Cyber Offense",
                desc: "Silent network infiltration, cloud abuse, and exploiting zero-days.",
                icon: <TerminalIcon animateOnHover={true} className="text-red-600" />
              },
              {
                title: "Physical Intrusion",
                desc: "Lockpicking, badge cloning, and evading security cameras.",
                icon: <LockIcon animateOnHover={true} className="text-red-600" />
              },
              {
                title: "Human Exploitation",
                desc: "Social engineering, executive whaling, and deepfake impersonation.",
                icon: <BotIcon animateOnHover={true} className="text-red-600" />
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 p-6 bg-zinc-50 border border-zinc-200 transition-all hover:border-red-300 group relative overflow-hidden shadow-sm hover:shadow-md"
              >
                {/* Corner markers */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex-shrink-0 w-10 h-10 border border-zinc-200 bg-white flex items-center justify-center group-hover:border-red-200 transition-colors">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2 uppercase tracking-wide group-hover:text-red-700 transition-colors">{pillar.title}</h3>
                  <p className="text-zinc-600 font-medium text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Emulation process boxes ... */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-16 border-t border-zinc-200 relative"
        >
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-zinc-900 mb-4 tracking-wide uppercase">Adversary Emulation Focus</h3>
            <p className="text-zinc-600 font-medium text-sm max-w-2xl leading-relaxed">
              Unlike our broader methodological approach, this specific chain reflects the exact tactical impact an Advanced Persistent Threat (APT) brings during an active breach scenario.
            </p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                step: "01",
                title: "Reconnaissance",
                desc: "OSINT gathering, dark web leaks, and mapping the attack surface without touching your network.",
                icon: <SearchIcon className="text-current" animateOnHover={true} />
              },
              {
                step: "02",
                title: "Initial Access",
                desc: "Weaponizing payloads, spear-phishing, or bypassing physical access controls to gain a foothold.",
                icon: <ActivityIcon className="text-current" animateOnHover={true} />
              },
              {
                step: "03",
                title: "Lateral Movement",
                desc: "Escalating privileges, pivoting through network segments, and evading Endpoint Detection (EDR).",
                icon: <CircuitBoardIcon className="text-current" animateOnHover={true} />
              },
              {
                step: "04",
                title: "Action Targets",
                desc: "Exfiltrating dummy data, obtaining Domain Admin, and proving true business impact.",
                icon: <Disc3Icon className="text-current" animateOnHover={true} />
              }
            ].map((phase, i) => (
              <motion.div key={i} variants={fadeUp} className="relative p-6 bg-white shadow-sm border border-zinc-200 hover:border-red-300 hover:shadow-md transition-all group">
                <div className="absolute top-2 right-2 text-2xl font-bold text-zinc-200 select-none group-hover:text-red-100 transition-colors">
                  {phase.step}
                </div>
                <div className="w-12 h-12 rounded-none border border-zinc-200 bg-zinc-50 flex items-center justify-center mb-6 text-red-600 group-hover:border-red-300 group-hover:bg-red-50 transition-all">
                  {phase.icon}
                </div>
                <h4 className="text-base font-bold text-zinc-900 mb-3 uppercase tracking-wide">{phase.title}</h4>
                <p className="text-zinc-600 font-medium text-[11px] leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}