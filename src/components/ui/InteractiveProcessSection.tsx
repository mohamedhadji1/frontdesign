"use client";

import { useState, isValidElement, cloneElement } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface InteractiveProcessSectionProps {
  title?: string;
  description?: string;
  steps: ProcessStep[];
  theme?: "red" | "blue";
}

export function InteractiveProcessSection({
  title = "Our Methodology",
  description = "Discover how our operatives execute high-stakes maneuvers to analyze, contain, and eradicate threats.",
  steps,
  theme = "red"
}: InteractiveProcessSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  if (!steps || steps.length === 0) return null;

  // Theme colors
  const isRed = theme === "red";
  
  const textTheme = isRed ? "text-red-600" : "text-blue-600";
  const bgTheme = isRed ? "bg-red-600" : "bg-blue-600";
  const bgLight = isRed ? "bg-red-50" : "bg-blue-50";
  const borderTheme = isRed ? "border-red-200" : "border-blue-200";
  const ringTheme = isRed ? "ring-red-500/10" : "ring-blue-500/10";
  const shadowTheme = isRed ? "shadow-red-600/20" : "shadow-blue-600/20";
  const groupHoverText = isRed ? "group-hover:text-red-500" : "group-hover:text-blue-500";
  const groupHoverBorder = isRed ? "group-hover:border-red-200" : "group-hover:border-blue-200";

  return (
    
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-5 relative overflow-hidden">
      {/* Background Effects */}
      <div className={`absolute inset-0 pointer-events-none`} />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Interactive Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3 relative">
            {/* Colored vertical progress line */}
            <div className="absolute left-6 top-8 bottom-8 w-px hidden lg:block" style={{height: `calc(100% - 4rem)`}}>
              <div className="relative w-full h-full">
                {/* Background (unfilled) */}
                <div className="absolute left-0 top-0 w-full h-full bg-zinc-200 rounded-full" />
                {/* Filled (active/progress) */}
                <div
                  className={`absolute left-0 w-full ${isRed ? 'bg-red-600' : 'bg-blue-600'} rounded-full`}
                  style={{
                    top: 0,
                    height: `${((activeTab + 1) / steps.length) * 100}%`,
                    transition: 'height 0.5s cubic-bezier(0.4,0,0.2,1)'
                  }}
                />
              </div>
            </div>
            {steps.map((step, index) => {
              const isActive = activeTab === index;
              
              const iconWithClass = isValidElement(step.icon) 
                ? cloneElement(step.icon as React.ReactElement<any>, { className: "w-5 h-5" }) 
                : step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(index)}
                  className={`group relative flex items-center gap-5 p-4 rounded-xl text-left transition-all duration-300 ${
                    isActive 
                      ? `bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border ${borderTheme} ring-1 ${ringTheme}` 
                      : "bg-transparent hover:bg-white/60 border border-transparent hover:border-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className={`absolute left-0 w-1 h-full ${bgTheme} rounded-l-xl`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm ${
                    isActive 
                      ? `${bgTheme} text-white ${shadowTheme}` 
                      : `bg-white border border-zinc-200 text-zinc-500 ${groupHoverText} ${groupHoverBorder}`
                  }`}>
                    {iconWithClass}
                  </div>
                  
                  <div>
                    <h3 className={`font-bold text-sm md:text-base tracking-wide uppercase transition-colors duration-300 ${
                      isActive ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-700"
                    }`}>
                      {step.title}
                    </h3>
                    {isActive && (
                       <motion.p 
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ opacity: 1, height: 'auto' }}
                         className={`text-xs ${textTheme} mt-1 font-mono font-medium`}
                       >
                         PHASE 0{index + 1} // ACTIVE
                       </motion.p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Display Panel */}
          <div className="lg:col-span-7 h-full min-h-[450px]">
            <div className="relative h-full rounded-3xl bg-white border border-zinc-200/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className={`absolute top-0 right-0 w-64 h-64 ${bgLight} blur-[100px] rounded-full pointer-events-none`} />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="p-8 lg:p-12 relative z-10 h-full flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="flex items-center justify-between mb-10">
                      <div className={`w-16 h-16 ${bgLight} border ${isRed ? 'border-red-100' : 'border-blue-100'} rounded-2xl flex items-center justify-center shadow-sm`}>
                        {(() => {
                          const activeIcon = steps[activeTab].icon;
                          return isValidElement(activeIcon)
                            ? cloneElement(activeIcon as React.ReactElement<any>, { className: `w-8 h-8 ${textTheme}` })
                            : activeIcon;
                        })()}
                      </div>
                      <div className="text-8xl font-black text-zinc-100 select-none">
                        0{activeTab + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-black text-zinc-900 mb-6 uppercase tracking-tight">
                      {steps[activeTab].title}
                    </h3>

                    {/* Animated horizontal progress line */}
                    <div className="relative w-full flex items-center mb-8" style={{height: 8}}>
                      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-zinc-200 rounded-full w-full" />
                      <motion.div
                        key={activeTab}
                        initial={{ width: 0 }}
                        animate={{ width: `${((activeTab + 1) / steps.length) * 100}%` }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className={`h-1 rounded-full ${bgTheme}`}
                        style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
                      />
                    </div>

                    <p className="text-lg text-zinc-600 leading-relaxed">
                      {steps[activeTab].description}
                    </p>
                    
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
