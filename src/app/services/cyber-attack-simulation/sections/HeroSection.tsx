"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/Offensive/Rectangle 46.png"
          alt="Cyber Attack Simulation Background"
          fill
          priority
          className="object-cover opacity-90 object-right-top"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-[#0a1128]/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Cyber Attack Simulation
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light mb-10 leading-relaxed">
            By simulating advanced adversary tactics, we identify weaknesses in technology, processes & people — and help strengthen your overall resilience.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <Link
              href="/contact?service=cyber-attack-simulation"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center gap-2 group"
            >
              Request Service Now
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            
            <Link
              href="/incident-response"
              className="text-white hover:text-red-400 font-medium py-3 transition-colors border-b border-white hover:border-red-400 group inline-flex items-center gap-2"
            >
              Immediate Incident Response
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}