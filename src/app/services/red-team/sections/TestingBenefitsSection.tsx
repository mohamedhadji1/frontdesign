"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function TestingBenefitsSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-white overflow-hidden text-zinc-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-16 relative z-10">
        
        {/* Right Column / Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Think Like an Attacker. Act First.
          </h2>
          
          <div className="text-lg text-zinc-600 space-y-4 max-w-xl">
            <p>
              Traditional audits rely heavily on automated scans. A true Red Team exercise integrates physical intrusion, custom hardware manipulation, and targeted social engineering.
            </p>
            <p>
              By finding the single path of least resistance through your layered defenses, we demonstrate how an APT (Advanced Persistent Threat) behaves.
            </p>
          </div>

          <ul className="space-y-4 pt-4 flex flex-col text-lg text-zinc-600">
            {[
              "Identify critical blind spots before a real breach.",
              "Validate defensive SIEM rules & SOC alertness.",
              "Stress-test your personnel via social engineering.",
              "Measure readiness against multi-stage, targeted attacks.",
              "Receive actionable remediation roadmaps.",
            ].map((item, idx) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-3 font-medium text-zinc-700"
              >
                <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Left Column / Image visual representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full max-w-lg relative rounded-2xl overflow-hidden shadow-2xl group"
        >
          <div className="aspect-square md:aspect-[4/5] w-full relative">
            <Image
              src="/background/Offensive/Rectangle 66.png"
              alt="Hacker terminal code visualization"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Red overlay to build atmosphere */}
            <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply transition-colors group-hover:bg-red-900/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Overlay tag */}
            <div className="absolute bottom-8 left-8">
               <div className="bg-red-600/90 backdrop-blur text-white text-xs font-bold uppercase tracking-wider py-1 px-3 inline-block rounded-sm mb-2">
                 Zero-Day Potential
               </div>
               <p className="text-white text-xl font-medium drop-shadow-md">
                 Security through full-scope emulation
               </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}