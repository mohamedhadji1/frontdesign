"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "BNA", logo: "/images/trustedby/bna.png" },
  { name: "BNA 2", logo: "/images/trustedby/bna.png" },
  { name: "BNA 3", logo: "/images/trustedby/bna.png" },
  { name: "BNA 4", logo: "/images/trustedby/bna.png" },
  { name: "BNA 5", logo: "/images/trustedby/bna.png" },
  { name: "BNA 6", logo: "/images/trustedby/bna.png" },
];

export function TrustedBySection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="bg-black/20 px-4 pb-10 pt-8 sm:px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0, 0, 0.2, 1] }}
        className="max-w-5xl mx-auto relative z-10 flex flex-col items-center"
      >
        <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-center font-medium text-sm md:text-base">
          We are proud to collaborate with industry leaders and trusted organizations.
        </p>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
          className="flex w-full flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-16"
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0, 0, 0.2, 1] } }
              }}
              whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
              className="relative h-14 w-28 cursor-pointer sm:h-16 sm:w-32 md:h-24 md:w-48"
            >
              <Image 
                src={partner.logo} 
                alt={`${partner.name} Logo`} 
                fill 
                className="object-contain transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 10rem, 12rem"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
