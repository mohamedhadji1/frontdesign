"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function OurLeaderSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="bg-black/20 py-24 relative overflow-hidden" style={{ fontFamily: "'Gotham', sans-serif" }}>
      {/* Optional faint background pattern overlay */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-1/2 h-full z-0">
         {/* Faint pattern usually goes here */}
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
        <h2 className="text-[#FF1111] font-bold tracking-[0.25em] mb-12 uppercase text-sm md:text-base">
          Our Leader
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Portrait Placeholder */}
          <div className="w-full lg:w-[400px] xl:w-[450px] aspect-square bg-[#D9D9D9] relative flex-shrink-0">
            {/* An <Image /> component can be added inside here when you have the real picture */}
          </div>
          
          {/* Info Details */}
          <div className="w-full lg:flex-1 flex flex-col justify-center text-white mt-4">
            <h3 className="text-3xl lg:text-[32px] font-bold mb-3 tracking-wide">
            </h3>
            <p className="text-gray-300 text-lg mb-10 tracking-wide font-light">
              Fondateur & Directeur Général de KEYSTONE Group Tunisie
            </p>
            
            <p className="text-gray-300 leading-[1.9] mb-14 text-[15px] lg:text-base font-light">
            </p>
            
            <div className="flex flex-col gap-6">
              {/* Mail Contact */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#3D0A0A] flex items-center justify-center text-[#FF1111]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <span className="text-gray-300 font-light tracking-wide text-[15px]"></span>
              </div>
              
              {/* LinkedIn Contact */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#3D0A0A] flex items-center justify-center text-[#FF1111] font-bold text-lg">
                  in
                </div>
                <span className="text-gray-300 font-light tracking-wide text-[15px]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
