"use client";

interface CertificationsMarqueeProps {
  className?: string;
  isAbsolute?: boolean;
}

const certImages = [
  { src: "/certif/27001.png", alt: "ISO 27001 certification badge" },
  { src: "/certif/27002.svg", alt: "ISO 27002 certification badge" },
  { src: "/certif/27005.png", alt: "ISO 27005 certification badge" },
  { src: "/certif/27701.png", alt: "ISO 27701 certification badge" },
  { src: "/certif/22301.png", alt: "ISO 22301 certification badge" },
  { src: "/certif/GDPR.webp", alt: "GDPR compliance badge" },
  { src: "/certif/Nist.webp", alt: "NIST Framework badge" },
  { src: "/certif/PCIDSS.png", alt: "PCI DSS certification badge" },
  { src: "/certif/SOC2.webp", alt: "SOC 2 certification badge" },
  { src: "/certif/SWIFT.png", alt: "SWIFT CSP badge" },
  { src: "/certif/hipaa.png", alt: "HIPAA compliance badge" },
  { src: "/certif/nistcyber.svg", alt: "NIST Cybersecurity Framework badge" }
];

const repeatedImages = [...certImages, ...certImages, ...certImages, ...certImages, ...certImages];

export function CertificationsMarquee({ className = "", isAbsolute = false }: CertificationsMarqueeProps) {
  return (
    <div className={`${isAbsolute ? "absolute bottom-0 left-0 z-10 w-full overflow-hidden pb-2 sm:pb-8 pointer-events-auto cursor-default" : "w-full overflow-hidden py-10 relative"} ${className}`}>
      <style>{`
        @keyframes marquee-cert {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track-cert {
          display: flex;
          width: max-content;
          animation: marquee-cert 60s linear infinite;
        }
        .marquee-track-cert:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-track-cert items-center gap-8 whitespace-nowrap px-4 sm:gap-16 sm:px-8 lg:gap-24">
        {repeatedImages.map((img, idx) => (
          <div
            key={idx}
            className="shrink-0 opacity-70 transition-opacity duration-300 hover:opacity-100"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              title={img.alt}
              className="h-20 w-20 object-contain sm:h-24 sm:w-24 lg:h-32 lg:w-32"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
