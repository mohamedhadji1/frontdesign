"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Smartphone, BellRing, ShieldX, GraduationCap } from "lucide-react";

type Theme = "red" | "blue";

interface AntiphishingTabsProps {
  theme?: Theme;
}

export function AntiphishingTabs({ theme = "blue" }: AntiphishingTabsProps) {
  const [activeTab, setActiveTab] = useState("web-social");

  const colors = {
    blue: {
      textTitle: "text-blue-600",
      bgGlow: "bg-blue-400/10",
      textActive: "text-blue-900",
      textHover: "hover:text-blue-600",
      borderActive: "border-blue-100/50",
      bgLine: "bg-blue-600",
      bgIconWrap: "from-blue-50 to-blue-100 text-blue-600 border-blue-200/50",
      textBgIcon: "text-blue-900",
    },
    red: {
      textTitle: "text-red-600",
      bgGlow: "bg-red-400/10",
      textActive: "text-red-900",
      textHover: "hover:text-red-600",
      borderActive: "border-red-100/50",
      bgLine: "bg-red-600",
      bgIconWrap: "from-red-50 to-red-100 text-red-600 border-red-200/50",
      textBgIcon: "text-red-900",
    }
  };
  const t = colors[theme];

  const tabs = [
    {
      id: "web-social",
      title: "Advanced Web & Social Media Monitoring",
      description: "Keystone uses advanced monitoring tools on the web and social media to detect suspicious activities related to phishing. This includes proactively searching for fake profiles, misleading messages, or malicious links.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      id: "mobile",
      title: "In-depth Mobile App Analysis",
      description: "Mobile applications are also scrutinized to identify phishing attempts. Keystone analyzes applications for malicious behavior or requests for unauthorized sensitive information.",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      id: "detection",
      title: "Early Threat Detection",
      description: "By combining proactive monitoring with advanced behavioral analysis, Keystone quickly detects potential warning signs. This allows for early intervention before phishing attacks can cause damage.",
      icon: <BellRing className="w-8 h-8" />
    },
    {
      id: "neutralization",
      title: "Rapid Threat Neutralization",
      description: "Upon detection, Keystone takes immediate action to neutralize threats. This can include blocking malicious URLs, removing fraudulent content, and taking actions to prevent the attack from spreading.",
      icon: <ShieldX className="w-8 h-8" />
    },
    {
      id: "training",
      title: "Specialized Awareness & Training",
      description: "In parallel, Keystone offers specific awareness programs focusing on phishing risks related to social networks and mobile applications. Targeted training is designed to educate employees on safe practices and recognizing phishing attempts through these channels.",
      icon: <GraduationCap className="w-8 h-8" />
    }
  ];

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="flex flex-col lg:flex-row min-h-[440px] w-full bg-white rounded-3xl shadow-2xl border border-zinc-100 overflow-hidden ring-1 ring-zinc-900/5">
      <div className="lg:w-2/5 bg-zinc-50/80 border-r border-zinc-100 p-6 flex flex-col gap-3 relative overflow-hidden backdrop-blur-sm">
        <motion.h2 className={`text-xs font-black tracking-widest uppercase mb-4 px-2 opacity-80 ${t.textTitle}`}>Methodology</motion.h2>

        {/* Subtle background glow */}
        <div className={`absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full blur-3xl pointer-events-none ${t.bgGlow}`} />

        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center justify-between px-6 py-4 rounded-2xl text-left transition-colors duration-300 ${isActive
                ? t.textActive
                : `text-zinc-600 hover:bg-white/50 ${t.textHover}`
                }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeAntiphishingTab"
                  className={`absolute inset-0 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border ${t.borderActive}`}
                  transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                />
              )}

              {/* Indicator line */}
              {isActive && (
                <motion.div
                  layoutId="activeAntiphishingLine"
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-r-full ${t.bgLine}`}
                  transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                />
              )}

              <span className="relative z-10 font-bold text-[15px] tracking-tight">{tab.title}</span>
            </button>
          );
        })}
      </div>

      <div className="lg:w-3/5 p-10 lg:p-16 flex flex-col justify-center bg-white relative">
        <AnimatePresence mode="wait">
          {activeContent && (
            <motion.div
              key={activeContent.id}
              initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl relative z-10"
            >
              <div className="flex flex-row gap-3 align-center">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-sm border transform-gpu hover:scale-105 transition-transform duration-500 ${t.bgIconWrap}`}>
                  {React.cloneElement(activeContent.icon as React.ReactElement<any>, {
                    className: "w-7 h-7",
                  })}
                </div>
                <motion.h2 className="text-3xl lg:text-4xl font-extrabold text-zinc-900 mb-6 tracking-tight leading-tight">{activeContent.title}</motion.h2>
              </div>
              <p className="text-xl text-zinc-600 leading-relaxed font-light">
                {activeContent.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {activeContent && (
            <motion.div
              key={`bg-${activeContent.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.04, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className={`absolute right-0 bottom-0 pointer-events-none -mb-4 -mr-4 ${t.textBgIcon}`}
            >
              {React.cloneElement(activeContent.icon as React.ReactElement<any>, {
                className: "w-40 h-40",
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
