"use client";

import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { CircuitBoardIcon as Server } from "@/components/animate-ui/icons/circuit-board";
import { BotIcon as Smartphone } from "@/components/animate-ui/icons/bot";
import { LockIcon as Lock } from "@/components/animate-ui/icons/lock";
import { ActivityIcon as Activity } from "@/components/animate-ui/icons/activity";
import { GaugeIcon as Link2 } from "@/components/animate-ui/icons/gauge";
import { RadioTowerIcon as ShieldAlert } from "@/components/animate-ui/icons/radio-tower";
import { SignalIcon as Radar } from "@/components/animate-ui/icons/signal";
import { TerminalIcon as Terminal } from "@/components/animate-ui/icons/terminal";
import { useState, MouseEvent } from "react";

export function OfferingsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 1 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 1 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const offerings = [
    {
      title: "Web & Mobile App Audit",
      desc: "Deep security assessments of business-critical web portals and mobile applications to prevent data leaks or logic abuse.",
      icon: <Smartphone className="w-5 h-5" animateOnHover={true} />,
      number: "01",
      threats: ["Injection", "Broken Authentication", "Misconfiguration"]
    },
    {
      title: "Physical Penetration",
      desc: "Simulating physical intrusions to access restricted server rooms, stealing hardware, or planting rogue devices.",
      icon: <Lock className="w-5 h-5" animateOnHover={true} />,
      number: "02",
      threats: ["Tailgating", "Lock Picking", "Rogue Access Points"]
    },
    {
      title: "External & Internal",
      desc: "Attempting to compromise the external perimeter while modeling insider threats to assess internal lateral movement.",
      icon: <Server className="w-5 h-5" animateOnHover={true} />,
      number: "03",
      threats: ["Zero-Days", "Pivoting", "Privilege Escalation"]
    },
    {
      title: "Social Engineering",
      desc: "Evaluating the human factor through advanced phishing, vishing, and pretexting targeted at employees.",
      icon: <Activity className="w-5 h-5" animateOnHover={true} />,
      number: "04",
      threats: ["Phishing", "Pretexting", "Credential Harvesting"]
    },
    {
      title: "Hardware & IoT",
      desc: "Tearing down IoT devices and custom hardware to extract firmware, discover hidden keys, or exploit logic.",
      icon: <Link2 className="w-5 h-5" animateOnHover={true} />,
      number: "05",
      threats: ["Firmware Extraction", "JTAG Debugging", "Side-Channel"]
    },
    {
      title: "Infrastructure Audit",
      desc: "Auditing cloud environments, industrial ICS/SCADA systems, and Core/Internet Banking platforms.",
      icon: <ShieldAlert className="w-5 h-5" animateOnHover={true} />,
      number: "06",
      threats: ["IAM Misconfig", "Container Escape", "Segment Bypass"]
    }
  ];

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="py-24 md:py-32 bg-zinc-950 text-zinc-300 relative border-t border-zinc-900 overflow-hidden group"
    >
      {/* Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.1), transparent 80%)`
        }}
      />

      {/* Very faint background layer */}
      <div className="absolute inset-0 bg-[url('/background/bg1.jpg')] bg-cover bg-center opacity-[0.04] pointer-events-none mix-blend-screen" />
      
      {/* Cyber Grid Base */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220_38_38_0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(220_38_38_0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 className="text-red-600 font-medium text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-red-600"></span>
            Attack Vectors
            <span className="w-8 h-px bg-red-600"></span>
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 uppercase">
            Threat <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Landscape</span>
          </h3>
          <p className="text-zinc-500 max-w-2xl text-sm md:text-base leading-relaxed">
            Standard vulnerability scanning is obsolete. We deploy multi-vector offensive simulations that target your digital perimeter, physical facilities, and human psychology simultaneously.
          </p>
        </div>

        {/* Interactive Console Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:h-[600px] border border-zinc-800/50 rounded-xl overflow-hidden bg-zinc-950/80 backdrop-blur-md shadow-2xl relative">
          
          {/* Left panel: Directory / Menu */}
          <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-zinc-800/50 bg-zinc-950/50 flex flex-col">
            <div className="p-4 border-b border-zinc-800/50 flex items-center gap-3 text-zinc-500 text-xs font-medium">
              <Terminal className="w-4 h-4 text-red-600" animateOnHover={true} />
              <span>root@rt-ops:~/modules/</span>
              <span className="ml-auto animate-pulse text-red-500">_</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              {offerings.map((offer, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-6 transition-all duration-300 border-l-2 flex flex-col gap-2 ${
                    activeTab === idx 
                      ? "bg-red-950/20 border-red-600" 
                      : "border-transparent hover:bg-zinc-900/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-medium text-xs ${activeTab === idx ? "text-red-500" : "text-zinc-600"}`}>
                      [{offer.number}]
                    </span>
                    <span className={`font-bold uppercase tracking-wider text-sm ${activeTab === idx ? "text-white" : "text-zinc-400"}`}>
                      {offer.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right panel: Active Display */}
          <div className="lg:w-2/3 relative h-[400px] lg:h-auto flex flex-col bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05)_0%,transparent_60%)]">
            {/* Top scanning bar animation */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-1 bg-red-600/30 shadow-[0_0_10px_rgba(220,38,38,0.5)] z-20"
              animate={{ y: [0, 600, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 p-8 flex flex-col justify-center"
              >
                {/* Huge faded background number */}
                <div className="absolute right-8 top-8 text-[180px] font-bold text-zinc-900/50 leading-none select-none z-0">
                  {offerings[activeTab].number}
                </div>

                <div className="relative z-10 max-w-lg">
                  <div className="w-16 h-16 border border-red-500/30 bg-red-950/30 text-red-500 flex items-center justify-center rounded-lg mb-8 shadow-[0_0_20px_rgba(220,38,38,0.15)]">
                    {offerings[activeTab].icon}
                  </div>
                  
                  <h4 className="text-3xl lg:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
                    {offerings[activeTab].title}
                  </h4>
                  
                  <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                    {offerings[activeTab].desc}
                  </p>

                  <div className="space-y-4">
                    <h5 className="font-medium text-xs text-red-500 tracking-widest uppercase">Targeted Weaknesses //</h5>
                    <div className="flex flex-wrap gap-3">
                      {offerings[activeTab].threats.map((threat, i) => (
                        <div key={i} className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-sm">
                          <Radar className="w-3 h-3 text-red-500" animateOnHover={true} />
                          <span className="text-xs font-medium text-zinc-300 uppercase">{threat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
