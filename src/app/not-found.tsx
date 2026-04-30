"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center pt-32 px-4 text-center">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />
        <div className="absolute left-1/3 top-1/3 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/5 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-red-500/20 blur-xl"
            />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <ShieldAlert className="h-12 w-12 text-red-400" />
            </div>
          </div>
        </div>

        <h1 className="mb-4 text-8xl font-black tracking-tighter text-white sm:text-9xl">
          404
        </h1>
        
        <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
          Endpoint Not Found
        </h2>
        
        <p className="mx-auto mb-10 max-w-md text-neutral-400">
          The resource you are looking for has been moved, deleted, or is protected by a security layer. Please verify the URL and try again.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-all hover:bg-red-50 hover:ring-4 hover:ring-red-500/20"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return to Dashboard
          </Link>
          
          <Link
            href="/contact"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
          >
            Report Security Issue
          </Link>
        </div>
      </motion.div>

      {/* Decorative Scan Line */}
      <motion.div
        animate={{
          top: ["0%", "100%", "0%"]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent shadow-[0_0_15px_rgba(239,68,68,0.5)]"
      />
    </div>
  );
}
