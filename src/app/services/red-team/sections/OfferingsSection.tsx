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
      title: "Web & Mobile Application Audit",
      desc: "We conduct exhaustive black-box and gray-box assessments of your business-critical web portals, APIs, and mobile applications. Our experts manually hunt for complex vulnerabilities that automated scanners miss, including severe business logic flaws, unauthorized access chains, and cryptographic weaknesses.",
      icon: <Smartphone className="w-5 h-5" animateOnHover={true} />,
      number: "01",
      threats: ["Injection", "Broken Authentication", "Misconfiguration", "API Abuse"],
      features: ["Source Code Analysis", "API & Microservices Fuzzing", "Runtime & Memory Tampering"]
    },
    {
      title: "Physical Penetration Testing",
      desc: "We simulate determined physical intrusions to access restricted facilities. By bypassing physical controls, cloning building badges, and planting rogue network devices (dropboxes), we measure the true resilience of your physical perimeter and security guard responses.",
      icon: <Lock className="w-5 h-5" animateOnHover={true} />,
      number: "02",
      threats: ["Tailgating", "Lock Picking", "Rogue Access Points", "Social Engineering"],
      features: ["RFID Badge Cloning", "Lock Defeat & Bypassing", "Rogue Device Placement"]
    },
    {
      title: "External & Internal Penetration Testing",
      desc: "Our team mimics advanced persistent threats (APTs) to map and exploit your external exposed assets, moving laterally across internal networks. We aim to escalate privileges, compromise Active Directory environments, and prove access to sensitive corporate data.",
      icon: <Server className="w-5 h-5" animateOnHover={true} />,
      number: "03",
      threats: ["Zero-Days", "Pivoting", "Privilege Escalation", "Active Directory Abuse"],
      features: ["Active Directory Exploitation", "Lateral Movement Maps", "Internal Post-Exploitation"]
    },
    {
      title: "Social Engineering",
      desc: "We evaluate the human layer of your security by executing highly targeted spear-phishing, vishing (voice), and pretexting operations. We assess whether employees will surrender credentials or internal knowledge under pressure from sophisticated psychological manipulation.",
      icon: <Activity className="w-5 h-5" animateOnHover={true} />,
      number: "04",
      threats: ["Phishing", "Pretexting", "Credential Harvesting", "Vishing"],
      features: ["Targeted Spear-Phishing", "Voice Emulation (Vishing)", "On-site Pretexting"]
    },
    {
      title: "Hardware Testing & Reverse Engineering",
      desc: "We physically tear down IoT devices, embedded systems, and custom hardware. Our engineers extract and reverse-engineer firmware, probe debug interfaces, discover hidden cryptographic keys, and exploit undocumented hardware logic.",
      icon: <Link2 className="w-5 h-5" animateOnHover={true} />,
      number: "05",
      threats: ["Firmware Extraction", "JTAG Debugging", "Side-Channel", "Logic Analysis"],
      features: ["JTAG/UART Debugging", "Firmware Reverse Engineering", "Hardware Side-Channel Attacks"]
    }
  ];

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="py-24 md:py-10 bg-white text-zinc-600 relative border-t border-zinc-200 overflow-hidden group"
    >
      {/* Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.05), transparent 80%)`
        }}
      />

      {/* Very faint background layer */}
      <div className="absolute inset-0 bg-[url('/background/bg1.jpg')] bg-cover bg-center opacity-[0.02] pointer-events-none mix-blend-multiply" />
      
      {/* Cyber Grid Base */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220_38_38_0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220_38_38_0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 className="text-red-600 font-medium text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-red-600"></span>
            Attack Vectors
            <span className="w-8 h-px bg-red-600"></span>
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mb-6 uppercase">
            Threat <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Landscape</span>
          </h3>
          <p className="text-zinc-600 max-w-2xl text-sm md:text-base leading-relaxed">
            Standard vulnerability scanning is obsolete. We deploy multi-vector offensive simulations that target your digital perimeter, physical facilities, and human psychology simultaneously.
          </p>
        </div>

        {/* Interactive Console Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:h-[600px] border border-zinc-200 rounded-xl overflow-hidden bg-white/80 backdrop-blur-md shadow-xl relative">
          
          {/* Left panel: Directory / Menu */}
          <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-zinc-200 bg-zinc-50/50 flex flex-col">
            <div className="p-4 border-b border-zinc-200 flex items-center gap-3 text-zinc-500 text-xs font-medium">
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
                      ? "bg-red-50 border-red-600" 
                      : "border-transparent hover:bg-zinc-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-medium text-xs ${activeTab === idx ? "text-red-600" : "text-zinc-500"}`}>
                      [{offer.number}]
                    </span>
                    <span className={`font-bold uppercase tracking-wider text-sm ${activeTab === idx ? "text-zinc-900" : "text-zinc-500"}`}>
                      {offer.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right panel: Active Display */}
          <div className="lg:w-2/3 relative h-[400px] lg:h-auto flex flex-col bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.02)_0%,transparent_60%)]">
            {/* Top scanning bar animation */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-1 bg-red-500/30 shadow-[0_0_10px_rgba(220,38,38,0.5)] z-20"
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
                <div className="absolute right-8 top-8 text-[180px] font-bold text-zinc-100 leading-none select-none z-0">
                  {offerings[activeTab].number}
                </div>

                <div className="relative z-10 max-w-lg">
                  <div className="w-16 h-16 border border-red-200 bg-red-50 text-red-600 flex items-center justify-center rounded-lg mb-8 shadow-sm">
                    {offerings[activeTab].icon}
                  </div>
                  
                  <h4 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 uppercase tracking-tight">
                    {offerings[activeTab].title}
                  </h4>
                  
                  <p className="text-zinc-600 text-[15px] lg:text-[17px] leading-relaxed mb-10 max-w-xl">
                    {offerings[activeTab].desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {/* Column 1: Weaknesses */}
                    <div className="space-y-4">
                      <h5 className="font-bold text-xs text-zinc-400 tracking-widest uppercase border-b border-zinc-200 pb-2">Targeted Weaknesses</h5>
                      <div className="flex flex-col gap-2">
                        {offerings[activeTab].threats.map((threat, i) => (
                          <div key={i} className="flex items-center gap-2 group/threat w-fit cursor-default">
                            <Radar className="w-3.5 h-3.5 text-zinc-400 group-hover/threat:text-red-600 transition-colors" animateOnHover={true} />
                            <span className="text-[13px] font-semibold text-zinc-800 group-hover/threat:text-red-700 transition-colors">{threat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Key Features */}
                    <div className="space-y-4">
                      <h5 className="font-bold text-xs text-zinc-400 tracking-widest uppercase border-b border-zinc-200 pb-2">Core Focus</h5>
                      <ul className="space-y-2">
                        {offerings[activeTab].features?.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 font-medium">
                            <span className="text-red-500 mt-[2px] opacity-70">▹</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
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
