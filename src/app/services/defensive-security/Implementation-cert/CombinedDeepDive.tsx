"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThreatIntelTabs } from "./ThreatIntelTabs";
import { AntiphishingTabs } from "./AntiphishingTabs";
import { ShieldAlert, MailWarning } from "lucide-react";

export function CombinedDeepDive() {
  const [activeModule, setActiveModule] = useState<"threat" | "antiphishing">("threat");

  const tabs = [
    { id: "threat", label: "CERT Deployment Strategy", icon: ShieldAlert },
    { id: "antiphishing", label: "Security Orchestration", icon: MailWarning },
  ] as const;

  return (
    <div className="w-full relative">
      <div 
        className="absolute inset-0 z-0 opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
        <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 mb-5 ">
          Deep Dive: Specialized Modules
        </h3>
        <p className="text-zinc-600 text-lg md:text-xl leading-relaxed mb-8">
          Explore the core pillars of our advanced defensive tactics. Select a module below to expose our specialized methodologies for CERT Deployment Strategy and Antiphishing.
        </p>
        
        <div className="inline-flex relative p-1.5 bg-zinc-100/80 rounded-2xl border border-zinc-200/80 shadow-inner backdrop-blur-md">
          {tabs.map((tab) => {
            const isActive = activeModule === tab.id;
            const Icon = tab.icon;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveModule(tab.id)}
                className={`relative z-10 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold transition-colors duration-300 w-1/2 sm:w-auto ${
                  isActive 
                    ? "text-red-700" 
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeModulePill"
                    className="absolute inset-0 bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.05)] border border-black/5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2.5">
                  <Icon className={`w-5 h-5 ${isActive ? "text-red-600" : ""}`} />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait">
          {activeModule === "threat" ? (
            <motion.div
              key="threat"
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
            >
              <ThreatIntelTabs />
            </motion.div>
          ) : (
            <motion.div
              key="antiphishing"
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
            >
              <AntiphishingTabs />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </div>
  );
}

