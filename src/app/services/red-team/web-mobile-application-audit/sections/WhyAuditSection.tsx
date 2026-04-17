"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";
import { TerminalIcon } from "@/components/animate-ui/icons/terminal";
import { SettingsIcon } from "@/components/animate-ui/icons/settings";

const whyAuditReasons = [
  "Exploitation of OWASP Top 10 vulnerabilities is the root cause of many compromises.",
  "Your applications expose critical services accessible 24/7.",
  "REST/GraphQL APIs are often poorly secured or insufficiently tested.",
  "Mobile apps, though publicly distributed, sometimes embed secrets, keys, or critical functions."
];

const whyKeystoneReasons = [
  "Recognized penetration testers specifically chosen for deep application expertise.",
  "Extensive experience defending critical systems in banking, energy, and healthcare.",
  "Security testing methodology strictly aligned with OWASP, NIST, and SANS.",
  "Educational, collaborative approach that empowers your development teams."
];

export function WhyAuditSection() {
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
      className="py-24 relative border-t border-zinc-900 border-b bg-cover bg-center group" 
      style={{ backgroundImage: 'url("/background/vector/hex-grid.svg")' }}
    >
      {/* Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.15), transparent 80%)`
        }}
      />
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[#050505]/80 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Why Perform an Audit */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8 text-red-500">
              <TerminalIcon className="w-8 h-8" animateOnHover={true} />
              <h3 className="text-3xl font-bold text-white uppercase tracking-tight">The <span className="text-red-600">Risk</span> Factor</h3>
            </div>
            
            <p className="text-zinc-400 mb-8 font-medium text-sm uppercase tracking-widest border-l-2 border-red-800 pl-4 py-1">
              Why perform an application audit?
            </p>

            <ul className="space-y-6">
              {whyAuditReasons.map((reason, idx) => (
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 15, y: -5, scale: 1.03 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 400, damping: 10 }}
                  key={idx} 
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-black/80 transition-all cursor-crosshair border border-transparent hover:border-red-500/50 hover:shadow-[0_10px_30px_-10px_rgba(220,38,38,0.4)] relative overflow-hidden"
                >
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/10 to-red-600/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                  <span className="text-red-600 font-bold font-medium select-none mt-0.5 group-hover:text-red-400 group-hover:animate-pulse">{"//"}</span>
                  <span className="text-zinc-300 leading-relaxed text-sm group-hover:text-white transition-colors relative z-10">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Why Keystone */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8 text-red-500 group cursor-default">
              <motion.div whileHover={{ rotate: 180, scale: 1.2 }} transition={{ type: 'spring', duration: 0.8 }}>
                <SettingsIcon className="w-8 h-8 group-hover:text-red-400 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] transition-all" animateOnHover={true} />
              </motion.div>
              <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Why <span className="text-red-600 group-hover:text-red-400 transition-colors">Keystone</span>?</h3>
            </div>

            <p className="text-zinc-400 mb-8 font-medium text-sm uppercase tracking-widest border-l-2 border-red-800 pl-4 py-1">
              The advanced offensive approach
            </p>

            <ul className="space-y-6">
              {whyKeystoneReasons.map((reason, idx) => (
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: -15, y: -5, scale: 1.03 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, type: "spring", stiffness: 400, damping: 10 }}
                  key={idx} 
                  className="flex items-start gap-4 relative group cursor-crosshair z-10 hover:z-30"
                >
                  <span className="text-red-600 font-bold font-medium select-none text-xl mt-[-4px] group-hover:scale-[2] group-hover:text-red-400 group-hover:drop-shadow-[0_0_10px_rgba(220,38,38,0.8)] transition-all">›</span>
                  <span className="text-zinc-300 leading-relaxed text-sm bg-zinc-900/30 backdrop-blur-sm p-4 rounded-xl w-full border border-zinc-800/30 group-hover:border-red-500/60 group-hover:bg-black/90 group-hover:shadow-[0_15px_40px_-10px_rgba(220,38,38,0.5)] group-hover:text-white transition-all overflow-hidden relative">
                     {/* Glossy sweep */}
                     <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/10 to-red-600/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-in-out pointer-events-none" />
                     {reason}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}