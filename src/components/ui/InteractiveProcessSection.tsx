"use client";

import { useState } from "react";
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
  title = "Process and Methodology",
  description = "Discover our detailed approach for this service.",
  steps,
  theme = "red"
}: InteractiveProcessSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!steps || steps.length === 0) return null;

  const activeColorHex = theme === "blue" ? "#2563eb" : "#ef4444";
  const textColor = theme === "blue" ? "text-blue-600" : "text-red-600";
  const bgColor = theme === "blue" ? "bg-blue-600" : "bg-red-600";
  const bgLightColor = theme === "blue" ? "bg-blue-50" : "bg-red-50";
  const borderColorLight = theme === "blue" ? "border-blue-200" : "border-red-200";
  const bgAlphaColor = theme === "blue" ? "bg-blue-600/30" : "bg-red-600/30";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`${textColor} font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4`}>
            <span className={`w-8 h-px ${bgAlphaColor}`}></span>
            Approach
            <span className={`w-8 h-px ${bgAlphaColor}`}></span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-zinc-900">
            {title}
          </h3>
          <p className="text-zinc-600 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Interactive Interactive Hub Layout (Desktop) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative min-h-[500px] items-stretch text-gray-900">
          
          {/* Left Interactive List (Titles) */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-2 relative">
            {/* SVG Connecting Line (Visible on Desktop) */}
            <div className="hidden lg:block absolute left-[100%] top-0 bottom-0 w-24 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none">
                {steps.map((_, idx) => {
                  const isActive = activeIndex === idx;
                  const itemHeight = 100 / steps.length;
                  const startY = `${(idx * itemHeight) + (itemHeight / 2)}%`;
                  const targetY = "50%";
                  const currentStrokeColor = isActive ? activeColorHex : "#e5e7eb";
                  
                  return (
                    <path
                      key={idx}
                      d={`M 0 ${startY} C 40 ${startY}, 60 ${targetY}, 100 ${targetY}`}
                      fill="none"
                      stroke={currentStrokeColor}
                      strokeWidth={isActive ? 3 : 2}
                      className="transition-colors duration-500"
                    />
                  );
                })}
              </svg>
            </div>

            {steps.map((step, idx) => {
              const isActive = activeIndex === idx;
              
              return (
                <div 
                  key={step.id}
                  className="flex justify-between items-center cursor-pointer group relative p-4 rounded-xl transition-all duration-300"
                  onClick={() => setActiveIndex(idx)}
                >
                  {/* Background element */}
                  <div 
                    className={`absolute inset-0 rounded-xl transition-colors duration-300 ${
                      isActive ? bgLightColor : 'bg-transparent group-hover:bg-gray-50'
                    }`} 
                    style={{ zIndex: 0 }}
                  />
                  
                  <span className={`relative z-10 text-[17px] font-bold transition-all duration-300 ${
                    isActive ? textColor : 'text-gray-500 group-hover:text-gray-800'
                  }`}>
                    {step.title}
                  </span>
                  
                  {/* Plus Icon Box */}
                  <span className={`relative z-10 w-8 h-8 flex items-center justify-center text-sm font-bold bg-white rounded-lg shadow-sm border transition-colors ${
                    isActive ? `${textColor} ${borderColorLight}` : 'text-gray-400 border-gray-100'
                  } hover:${borderColorLight} hover:${textColor}`}>
                    +
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Dynamic Content Pane */}
          <div className="w-full lg:w-2/3 flex items-center relative pl-0 lg:pl-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-start bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden w-full"
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${bgColor}`} />
                
                <div className={`${textColor} ${bgLightColor} p-4 rounded-2xl mb-8`}>
                  <div className="w-10 h-10 flex items-center justify-center">
                    {steps[activeIndex].icon}
                  </div>
                </div>

                <h3 className="text-2xl lg:text-[28px] font-bold text-gray-900 mb-6 leading-tight">
                  {steps[activeIndex].title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {steps[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}