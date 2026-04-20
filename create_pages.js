const fs = require('fs');

const template = `
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactCTASection } from "@/components/about/ContactCTASection";
import { {{ICONS}} } from "lucide-react";

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {{FEATURES}}
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#09090b]">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-semibold tracking-wide uppercase">Defensive Security</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
              >
                {{TITLE_1}} <wbr/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">{{TITLE_2}}</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl font-light"
              >
                {{DESCRIPTION}}
              </motion.p>
            </div>

            <div className="lg:w-1/2 w-full mt-12 lg:mt-0 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 to-transparent blur-3xl rounded-full opacity-70" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 aspect-video lg:aspect-[4/3] group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent z-10 opacity-80" />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay" />
                <img 
                  src="{{IMAGE}}" 
                  alt="{{TITLE_1}} {{TITLE_2}}" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 flex-grow border-b border-zinc-200/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Our Methodology
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-6" />
            <p className="text-zinc-600 text-lg max-w-2xl">
              Discover how our service operates in detail to analyze and counter every threat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 flex flex-col gap-3">
              {features.map((feature, index) => {
                const isActive = activeTab === index;
                const Icon = feature.icon;

                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(index)}
                    className={\`group relative flex items-center justify-between gap-4 p-5 rounded-2xl text-left transition-all duration-300 \${
                      isActive 
                        ? "bg-white shadow-lg shadow-zinc-200/50 border border-zinc-200" 
                        : "hover:bg-zinc-200/50 border border-transparent"
                    }\`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={\`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 \${
                        isActive ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                      }\`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className={\`text-lg font-semibold transition-colors duration-300 \${
                          isActive ? "text-blue-900" : "text-zinc-700 group-hover:text-blue-600"
                        }\`}>
                          {feature.title}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full"
                >
                  <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-zinc-200/50 border border-zinc-200 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                        {React.createElement(features[activeTab].icon, { className: "w-7 h-7" })}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900">
                        {features[activeTab].title}
                      </h3>
                    </div>
                    
                    <div className="prose prose-zinc max-w-none">
                      <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                        {features[activeTab].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />
      <Footer />
    </main>
  );
}
`;

const pages = [
  {
    path: "src/app/services/defensive-security/digital-forensics/page.tsx",
    title1: "Digital",
    title2: "Forensics",
    desc: "Keystone conducts in-depth forensic analysis to collect, preserve, and analyze digital evidence, identifying intrusion schemas and origins.",
    img: "https://images.unsplash.com/photo-1614064641913-a520faff3f89?auto=format&fit=crop&q=80&w=800",
    icons: "Search, Cpu, Activity, Database, Gavel",
    features: `
    {
      id: "deep-forensic",
      title: "Deep Forensic Analysis",
      description: "Extract and examine detailed storage and volatile data memory to understand the origin and exact impact of incidents.",
      icon: Search,
    },
    {
      id: "attack-id",
      title: "Attack & Compromise Identification",
      description: "Our experts identify vectors of attack, intrusion schemas, and compromised points to prevent future intrusions.",
      icon: Activity,
    },
    {
      id: "timeline",
      title: "Event Timeline Reconstruction",
      description: "We reconstruct event sequences chronologically to understand exactly how and why the incident occurred.",
      icon: Cpu,
    },
    {
      id: "evidence",
      title: "Digital Evidence Collection",
      description: "Collect and analyze artifacts like logs, metadata, and systemic files to support internal and external actions.",
      icon: Database,
    },
    {
      id: "reporting",
      title: "Expert Testimony & Reporting",
      description: "Provide detailed technical discoveries, clear explanations, and expert testimony for legal or internal proceedings.",
      icon: Gavel,
    }
    `
  },
  {
    path: "src/app/services/defensive-security/incident-response/page.tsx",
    title1: "Incident",
    title2: "Response",
    desc: "Immediate and decisive action to contain, eradicate, and recover from cybersecurity breaches before they escalate.",
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800",
    icons: "ShieldAlert, Zap, Layers, RefreshCw, ClipboardList",
    features: `
    {
      id: "early-detection",
      title: "Early Threat Detection",
      description: "Identifying vulnerabilities and active threats instantly within the network to contain them before damage is realized.",
      icon: ShieldAlert,
    },
    {
      id: "immediate-action",
      title: "Immediate Intervention",
      description: "Swift deployment of our emergency teams to abruptly stop ongoing attacks and secure critical perimeters.",
      icon: Zap,
    },
    {
      id: "incident-analysis",
      title: "Incident Management",
      description: "A coordinated triage approach to isolate affected systems, identify root causes, and minimize business fallout.",
      icon: Layers,
    },
    {
      id: "recovery",
      title: "Eradication & Recovery",
      description: "Removing the threat from the network entirely and restoring systems back to full operational integrity.",
      icon: RefreshCw,
    },
    {
      id: "post-incident",
      title: "Post-Incident Reporting",
      description: "Applying tactical lessons learned via highly detailed technical reporting to reinforce future security postures.",
      icon: ClipboardList,
    }
    `
  },
  {
    path: "src/app/services/defensive-security/malware-analysis/page.tsx",
    title1: "Malware",
    title2: "Analysis",
    desc: "Advanced reverse engineering to understand the nature, intent, and system impact of sophisticated malicious software.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    icons: "Code, Microscope, Shield, AlertTriangle, Lightbulb",
    features: `
    {
      id: "static-analysis",
      title: "Static Code Analysis",
      description: "Examining the malware's binary structure, linked libraries, and embedded strings without actively executing the code.",
      icon: Code,
    },
    {
      id: "dynamic-analysis",
      title: "Dynamic Behavior Analysis",
      description: "Executing the malware inside safely isolated, instrumented sandbox environments to observe its real-time actions.",
      icon: Microscope,
    },
    {
      id: "reverse-engineering",
      title: "Reverse Engineering",
      description: "Deep decompilation and reverse-assembly of the malicious code to dissect its core logic, encryption, and C2 paths.",
      icon: Shield,
    },
    {
      id: "threat-impact",
      title: "Threat Impact Assessment",
      description: "Charting exactly what data the malware targeted and how it leveraged network vulnerabilities to spread.",
      icon: AlertTriangle,
    },
    {
      id: "actionable-intelligence",
      title: "Actionable Intelligence",
      description: "Providing actionable IOCs (Indicators of Compromise), YARA rules, and defensive strategies to neutralize the threat.",
      icon: Lightbulb,
    }
    `
  }
];

pages.forEach(p => {
  let content = template.replace('{{TITLE_1}}', p.title1)
    .replace('{{TITLE_2}}', p.title2)
    .replace('{{TITLE_1}}', p.title1)
    .replace('{{TITLE_2}}', p.title2)
    .replace('{{DESCRIPTION}}', p.desc)
    .replace('{{IMAGE}}', p.img)
    .replace('{{ICONS}}', p.icons)
    .replace('{{FEATURES}}', p.features);

  fs.writeFileSync(p.path, content);
  console.log('Wrote ' + p.path);
});