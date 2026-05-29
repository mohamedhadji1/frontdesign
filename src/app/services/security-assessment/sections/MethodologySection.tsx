"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ActivityIcon as Zap } from "@/components/animate-ui/icons/activity";
import { BinaryIcon as FileText } from "@/components/animate-ui/icons/binary";
import { SearchIcon as Search } from "@/components/animate-ui/icons/search";
import { SettingsIcon as PenTool } from "@/components/animate-ui/icons/settings";
import { SignalIcon as Radar } from "@/components/animate-ui/icons/signal";
import { TerminalIcon as Terminal } from "@/components/animate-ui/icons/terminal";
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
      id: "scope",
      name: "Intelligence & Scope",
      desc: "Define the assessment perimeter, gather intelligence on external and internal assets, and map the digital footprint.",
      icon: <Search className="w-5 h-5" animateOnHover={true} />,
    },
    {
      id: "discover",
      name: "Discovery & Scanning",
      desc: "Run focused discovery across networks, cloud, identity, and critical systems to identify exposed services and known weaknesses.",
      icon: <Radar className="w-5 h-5" animateOnHover={true} />,
    },
    {
      id: "manual",
      name: "Manual Verification",
      desc: "Validate findings by hand, remove false positives, and look for chained misconfigurations that scanners often miss.",
      icon: <PenTool className="w-5 h-5" animateOnHover={true} />,
    },
    {
      id: "analysis",
      name: "Impact Analysis",
      desc: "Measure exploitability, business exposure, and operational impact without disrupting production environments.",
      icon: <Zap className="w-5 h-5" animateOnHover={true} />,
    },
    {
      id: "report",
      name: "Remediation Roadmap",
      desc: "Deliver prioritized evidence, risk ratings, and technical guidance your teams can act on immediately.",
      icon: <FileText className="w-5 h-5" animateOnHover={true} />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-10 bg-white relative border-t border-zinc-200 overflow-hidden group"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.05), transparent 80%)`,
        }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.05),transparent_50%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <div className="text-center mb-20 md:mb-10">
          <motion.h2 className="text-red-500 font-medium text-xs tracking-[0.2em] mb-4 flex items-center justify-center gap-4">
            <span className="w-4 h-px bg-red-500/50" />
            SYS.EXEC(ASSESS_FLOW)
            <span className="w-4 h-px bg-red-500/50" />
          </motion.h2>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight uppercase">
            Execution Protocol
          </motion.h2>
          <p className="text-zinc-600 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A practical workflow for exposing technical weaknesses, validating impact, and moving cleanly from evidence to remediation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group bg-white/60 backdrop-blur-sm border border-zinc-200 p-8 flex flex-col h-full hover:border-red-500/30 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-600/0 group-hover:border-red-600/50 transition-colors" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-600/0 group-hover:border-red-600/50 transition-colors" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-600/0 group-hover:border-red-600/50 transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-600/0 group-hover:border-red-600/50 transition-colors" />

              <div className="mb-6 flex items-center justify-between">
                <div className="text-red-500">{step.icon}</div>
                <div className="font-mono text-4xl font-bold text-zinc-100 group-hover:text-red-100 transition-colors">
                  0{idx + 1}
                </div>
              </div>

              <h4 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wide">
                {step.name}
              </h4>

              <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
                {step.desc}
              </p>

              <div className="mt-8 border-t border-zinc-200 pt-4 flex items-center gap-2 group-hover:text-red-600 transition-colors">
                <Terminal className="w-3 h-3 text-red-600 group-hover:text-red-500 transition-colors" animateOnHover={true} />
                <span className="font-medium text-[10px] uppercase text-zinc-500 tracking-wider">
                  {`> run_module_${step.id}()`}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
