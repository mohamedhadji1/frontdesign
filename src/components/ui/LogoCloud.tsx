"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoCloudProps = {
  className?: string;
  title?: string;
};

const LOGOS = [
  { name: "CREST Certified", src: "/logos/crest.svg", width: 100, height: 40 },
  { name: "ISO 27001", src: "/logos/iso27001.svg", width: 80, height: 40 },
  { name: "ISO 9001", src: "/logos/iso9001.svg", width: 80, height: 40 },
  { name: "SWIFT Cyber Security", src: "/logos/swift.svg", width: 110, height: 40 },
  { name: "PCI DSS Compliant", src: "/logos/pci.svg", width: 90, height: 40 },
  { name: "CEH Certified", src: "/logos/ceh.svg", width: 90, height: 40 },
];

export function LogoCloud({ className, title = "Trusted by leaders, certified by the highest standards" }: LogoCloudProps) {
  return (
    <div className={cn("w-full py-12 bg-white border-y border-zinc-100", className)}>
      <div className="container mx-auto px-6 lg:px-12">
        {title && (
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-8">
            {title}
          </p>
        )}
        <div className="relative w-full overflow-hidden flex items-center">
          {/* Loop marquee container */}
          <div className="flex gap-16 md:gap-24 animate-marquee whitespace-nowrap min-w-full justify-around items-center">
            {/* Display list twice for seamless marquee loop */}
            {[...LOGOS, ...LOGOS].map((logo, idx) => (
              <div
                key={idx}
                className="inline-flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-300 pointer-events-none"
              >
                <span className="text-xs font-bold tracking-tight text-zinc-500 uppercase">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
