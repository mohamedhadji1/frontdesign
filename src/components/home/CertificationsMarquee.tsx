import Image from "next/image";
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

  // Triplicate the array of images to ensure there is enough horizontal space to loop smoothly
  const repeatedImages = [...certImages, ...certImages, ...certImages];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full bg-white py-10 overflow-hidden border-b border-gray-100 flex items-center"
    >
      {/* 
        This motion div moves precisely from 0 to -50% to cycle half the duplicated array constantly,
        creating an infinite scroll illusion.
      */}
      <motion.div
        className="flex whitespace-nowrap gap-16 sm:gap-24 px-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 40, // Adjust this to speed up or slow down
          repeat: Infinity,
        }}
      >
        {repeatedImages.map((img, idx) => (
          <Link 
            key={idx} 
            href={`/certifications#${img.slug}`}
            className="relative w-32 h-16 shrink-0 opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer block"
          >
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              className="object-contain" 
            />
          </Link>
        ))}
      </motion.div>
    </motion.section>
  );
}