"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CertificationsMarquee() {
  const certImages = [
    { src: "/certif/27001.png", alt: "ISO 27001", slug: "iso-27001" },
    { src: "/certif/27002.svg", alt: "ISO 27002", slug: "iso-27002" },
    { src: "/certif/27005.png", alt: "ISO 27005", slug: "iso-27005" },
    { src: "/certif/27701.png", alt: "ISO 27701", slug: "iso-27701" },
    { src: "/certif/22301.png", alt: "ISO 22301", slug: "iso-22301" },
    { src: "/certif/GDPR.webp", alt: "GDPR", slug: "gdpr" },
    { src: "/certif/Nist.webp", alt: "NIST", slug: "nist-framework" },
    { src: "/certif/PCIDSS.png", alt: "PCI DSS", slug: "pci-dss" },
    { src: "/certif/SOC2.webp", alt: "SOC 2", slug: "soc-2" },
    { src: "/certif/SWIFT.png", alt: "SWIFT", slug: "swift-csp" },
    { src: "/certif/hipaa.png", alt: "HIPAA", slug: "hipaa" },
    { src: "/certif/nistcyber.svg", alt: "NIST Cybersecurity", slug: "nist-cybersecurity" }
  ];

  // Duplicate the array of images to ensure there is enough horizontal space to loop smoothly
  const repeatedImages = [...certImages, ...certImages];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full bg-white py-12 overflow-hidden border-b border-gray-100 flex flex-col items-center pointer-events-auto cursor-default"
    >
      <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 mb-8 text-center">
        Standards and frameworks we support
      </h3>
      <style>{`
        @keyframes marquee-cert {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track-cert {
          display: flex;
          width: max-content;
          animation: marquee-cert 40s linear infinite;
        }
        .marquee-track-cert:hover {
          animation-play-state: paused;
        }
      `}</style>
      {/* 
        This div moves precisely from 0 to -50% to cycle half the duplicated array constantly,
        creating an infinite scroll illusion.
      */}
      <div
        className="marquee-track-cert gap-16 sm:gap-24 px-8 items-center"
      >
        {repeatedImages.map((img, idx) => (
          <div 
            key={idx} 
            className="shrink-0 opacity-70 block transition-opacity duration-300 hover:opacity-100"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={img.src} 
              alt={img.alt} 
              className="h-20 w-auto object-contain sm:h-24 lg:h-28"
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
}