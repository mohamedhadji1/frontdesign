"use client";

import { motion } from "framer-motion";
import { RadioTowerIcon } from "@/components/animate-ui/icons/radio-tower";
import { GaugeIcon } from "@/components/animate-ui/icons/gauge";
import { LayersIcon } from "@/components/animate-ui/icons/layers";
import { ActivityIcon } from "@/components/animate-ui/icons/activity";

const benefits = [
  {
    title: "Protect Users & Data",
    desc: "Ensure the confidentiality and integrity of your sensitive customer information.",
    icon: <RadioTowerIcon className="w-8 h-8 text-red-500" animateOnHover={true} />
  },
  {
    title: "Identify Before Attackers",
    desc: "Proactively discover logic flaws and vulnerabilities before they can be exploited.",
    icon: <GaugeIcon className="w-8 h-8 text-red-500" animateOnHover={true} />
  },
  {
    title: "Ensure Compliance",
    desc: "Prepare for certifications and align with GDPR, PCI-DSS, and NCA regulations.",
    icon: <LayersIcon className="w-8 h-8 text-red-500" animateOnHover={true} />
  },
  {
    title: "Improve Application Quality",
    desc: "Strengthen the robustness and long-term security architecture of your software.",
    icon: <ActivityIcon className="w-8 h-8 text-red-500" animateOnHover={true} />
  }
];

export function BenefitsSection() {
  return (
    <section className="py-24 relative border-t border-zinc-900 border-b bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url("/background/internet-bg.png")' }}>
      <div className="absolute inset-0 bg-zinc-950/85 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(220,38,38,0.15),transparent_50%)] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-red-500 font-medium text-sm tracking-widest uppercase mb-4">Value Proposition</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Benefits</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -15, scale: 1.05, rotateZ: 2, rotateX: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 400, damping: 10 }}
              className="group relative flex items-start gap-6 bg-black/60 backdrop-blur-md p-8 rounded-xl border border-zinc-800/50 hover:border-red-500/60 hover:shadow-[0_20px_50px_-10px_rgba(220,38,38,0.6)] transition-all overflow-hidden z-10 hover:z-20 cursor-crosshair"
            >
              {/* Interactive Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/0 via-red-500/20 to-red-600/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out pointer-events-none" />
              
              <motion.div 
                whileHover={{ rotate: [0, -15, 15, 0], scale: 1.25 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="shrink-0 p-3 bg-black/80 rounded-lg border border-zinc-800 text-red-500 shadow-[inset_0_0_10px_rgba(220,38,38,0.1)] group-hover:bg-red-950/40 group-hover:border-red-500/60 group-hover:text-red-400 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all"
              >
                {benefit.icon}
              </motion.div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}