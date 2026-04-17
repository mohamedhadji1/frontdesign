"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { GaugeIcon } from "@/components/animate-ui/icons/gauge";
import { BinaryIcon } from "@/components/animate-ui/icons/binary";
import { TerminalIcon } from "@/components/animate-ui/icons/terminal";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-20"
      style={{
        backgroundImage: "url('/background/bg10.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay to ensure text is visible */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Animated Cyber Glowing Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] bg-red-600/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[10%] w-[40rem] h-[40rem] bg-red-900/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-red-500/20 bg-red-500/5 backdrop-blur-sm rounded-full mb-8 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-red-400 text-xs font-medium tracking-wider uppercase">
                Application Vulnerability Assessment
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 uppercase leading-[0.9]">
              Web & Mobile <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-950 font-bold">
                Audit
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed border-l-2 border-red-600 pl-6 backdrop-blur-sm py-2">
              Deep security assessments of business-critical web portals and mobile applications to prevent data leaks, unauthorized access, or logic abuse.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider overflow-hidden rounded-sm transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-800 transition-all duration-300 group-hover:scale-105" />
                <span className="relative flex items-center gap-3">
                  Request an Audit
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Side Visual Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 w-full relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-[500px] ml-auto">
              {/* Central Glowing Element */}
              <div className="absolute inset-0 border border-red-500/20 rounded-full animate-spin-slow flex items-center justify-center border-t-red-500" style={{ animationDuration: '15s' }}></div>
              <div className="absolute inset-4 border border-red-500/10 rounded-full animate-spin-reverse-slow flex items-center justify-center border-b-red-500" style={{ animationDuration: '20s' }}></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-red-950/40 rounded-full border-2 border-red-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.4)] backdrop-blur-md">
                   <TerminalIcon className="w-12 h-12 text-red-500" animateOnHover />
                </div>
              </div>

              {/* Floating Orbiting Icons */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] left-[10%] w-16 h-16 bg-black/80 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-red-500 hover:border-red-500/50 transition-colors shadow-xl"
              >
                <GaugeIcon className="w-8 h-8" animateOnHover />
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] right-[10%] w-16 h-16 bg-black/80 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-red-500 hover:border-red-500/50 transition-colors shadow-xl"
              >
                <BinaryIcon className="w-8 h-8" animateOnHover />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}