import Image from "next/image";
import { motion } from "framer-motion";

export function CertificationsMarquee() {
  // Duplicate the array of images enough times to fill the screen twice so it loops smoothly
  const images = Array(10).fill("/public/certif/27001.png"); 

  return (
    <section className="w-full bg-white py-10 overflow-hidden border-b border-gray-100 flex items-center">
      {/* 
        This motion div moves precisely from 0 to -50% to cycle half the duplicated array constantly,
        creating an infinite scroll illusion.
      */}
      <motion.div
        className="flex whitespace-nowrap gap-16 sm:gap-24 px-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 30, // Adjust this to speed up or slow down
          repeat: Infinity,
        }}
      >
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className="relative w-32 h-16 shrink-0 filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
          >
            <Image 
              src={src} 
              alt="ISO 27001 Certification" 
              fill 
              className="object-contain" 
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}