"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const partners = [
  { name: "BNA", logo: "/images/trustedby/bna.png" },
  { name: "BNA", logo: "/images/trustedby/bna.png" },
  { name: "BNA", logo: "/images/trustedby/bna.png" },
  { name: "BNA", logo: "/images/trustedby/bna.png" },
  { name: "BNA", logo: "/images/trustedby/bna.png" },
  { name: "BNA", logo: "/images/trustedby/bna.png" },
];

export function TrustedBySection() {
  const tickerRef = useRef<HTMLDivElement>(null);

  // Triple the items to ensure seamless infinite looping
  const tripledPartners = [...partners, ...partners, ...partners];

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
          Trusted by public and enterprise organizations that depend on resilient cybersecurity operations.
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
              className="relative h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-52 shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <Image 
                src={partner.logo} 
                alt={`${partner.name} client logo`} 
                fill 
                className="object-contain"
                sizes="(max-width: 768px) 10rem, 12rem"
                priority={index < partners.length}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
