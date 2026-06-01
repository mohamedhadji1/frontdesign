"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const partners = [
  {
    name: "BNA Bank",
    logo: (
      <svg className="h-10 w-auto text-zinc-400 group-hover:text-zinc-800 transition-colors duration-300" viewBox="0 0 120 32" fill="currentColor">
        <path d="M10 2 L22 8 L22 24 L10 30 L2 24 L2 8 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10 8 L18 12 L18 20 L10 24 L6 20 L6 12 Z" fill="currentColor" opacity="0.3" />
        <text x="32" y="22" className="text-lg font-black tracking-widest fill-current">BNA</text>
      </svg>
    )
  },
  {
    name: "Apex Telecom",
    logo: (
      <svg className="h-10 w-auto text-zinc-400 group-hover:text-zinc-800 transition-colors duration-300" viewBox="0 0 140 32" fill="currentColor">
        <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="4" fill="currentColor" />
        <path d="M16 2 L16 10 M16 22 L16 30 M2 16 L10 16 M22 16 L30 16" stroke="currentColor" strokeWidth="1.5" />
        <text x="36" y="22" className="text-lg font-bold tracking-wider fill-current">APEX</text>
      </svg>
    )
  },
  {
    name: "Vortex Energy",
    logo: (
      <svg className="h-10 w-auto text-zinc-400 group-hover:text-zinc-800 transition-colors duration-300" viewBox="0 0 150 32" fill="currentColor">
        <path d="M16 2 L28 14 L20 18 L26 30 L8 16 L14 12 Z" fill="currentColor" />
        <text x="36" y="22" className="text-lg font-black tracking-normal fill-current">VORTEX</text>
      </svg>
    )
  },
  {
    name: "Vertex Financial",
    logo: (
      <svg className="h-10 w-auto text-zinc-400 group-hover:text-zinc-800 transition-colors duration-300" viewBox="0 0 150 32" fill="currentColor">
        <path d="M2 14 L16 4 L30 14 H28 V28 H4 V14 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="10" y="16" width="4" height="12" fill="currentColor" />
        <rect x="18" y="16" width="4" height="12" fill="currentColor" />
        <text x="38" y="22" className="text-lg font-bold tracking-wide fill-current">VERTEX</text>
      </svg>
    )
  },
  {
    name: "SecureCloud",
    logo: (
      <svg className="h-10 w-auto text-zinc-400 group-hover:text-zinc-800 transition-colors duration-300" viewBox="0 0 160 32" fill="currentColor">
        <path d="M16 4 C10 4 6 8 6 13 C6 14 6.2 15 6.5 15.8 C4 16.5 2 18.5 2 21 C2 24.5 5 27 8.5 27 H24 C27.5 27 30 24.5 30 21 C30 18 27.5 15.5 24.5 15.2 C24.2 9 20 4 16 4 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M13 18 L16 15 L19 18 M16 15 V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="36" y="22" className="text-lg font-bold tracking-tight fill-current">SCLOUD</text>
      </svg>
    )
  },
  {
    name: "Novatech",
    logo: (
      <svg className="h-10 w-auto text-zinc-400 group-hover:text-zinc-800 transition-colors duration-300" viewBox="0 0 140 32" fill="currentColor">
        <rect x="4" y="4" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="4" fill="currentColor" />
        <path d="M16 4 V10 M16 22 V28 M4 16 H10 M22 28 H22 M22 16 H28" stroke="currentColor" strokeWidth="1.5" />
        <text x="36" y="22" className="text-lg font-extrabold tracking-widest fill-current">NOVA</text>
      </svg>
    )
  }
];

// Triple the items to ensure seamless infinite looping
const tripledPartners = [...partners, ...partners, ...partners];

export function TrustedBySection() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let tween: gsap.core.Tween;

    const setupAnimation = () => {
      if (tween) tween.kill();
      
      const itemWidth = ticker.scrollWidth / 3;
      
      // Reset position
      gsap.set(ticker, { x: 0 });

      tween = gsap.to(ticker, {
        x: -itemWidth,
        ease: "none",
        duration: 16, // smooth scrolling speed
        repeat: -1,
      });
    };

    // Slight delay to ensure DOM is fully rendered
    const timer = setTimeout(setupAnimation, 100);

    const handleResize = () => {
      setupAnimation();
    };

    window.addEventListener("resize", handleResize);

    const onMouseEnter = () => tween && tween.pause();
    const onMouseLeave = () => tween && tween.play();

    ticker.addEventListener("mouseenter", onMouseEnter);
    ticker.addEventListener("mouseleave", onMouseLeave);

    return () => {
      clearTimeout(timer);
      if (tween) tween.kill();
      window.removeEventListener("resize", handleResize);
      ticker.removeEventListener("mouseenter", onMouseEnter);
      ticker.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <section className="bg-white pb-16 pt-10 relative overflow-hidden w-full">
      {/* Premium Gradient Masks for seamless entry/exit fades */}
      <div className="absolute top-0 bottom-0 left-0 w-20 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      {/* Centered Description Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-center font-medium text-sm md:text-base tracking-wide">
          We are proud to collaborate with industry leaders and trusted organizations.
        </p>
      </div>

      {/* Full-Width Carousel Outer Container */}
      <div className="w-full overflow-hidden relative py-4 z-10">
        {/* Ticker Flex Row Container */}
        <div 
          ref={tickerRef}
          className="flex items-center gap-16 sm:gap-20 md:gap-28 w-max cursor-pointer"
        >
          {tripledPartners.map((partner, index) => (
            <div 
              key={index} 
              className="group flex items-center justify-center shrink-0 h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-52 transition-transform duration-300 hover:scale-105"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
