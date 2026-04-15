"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionDivider } from "@/components/ui/SectionDivider";

const contactFeatures = [
  {
    icon: (
      <Image src="/icons/communicate.png" alt="Contact Us" width={56} height={56} className="object-contain" />
    ),
    title: "Contact Us",
  },
  {
    icon: (
      <Image src="/icons/working.png" alt="Work for us" width={56} height={56} className="object-contain" />
    ),
    title: "Work for us",
  },
  {
    icon: (
      <Image src="/icons/handshake.png" alt="Partner with us" width={56} height={56} className="object-contain" />
    ),
    title: "Partner with us",
  },
  {
    icon: (
      <Image src="/icons/microphone.png" alt="Media enquiries" width={56} height={56} className="object-contain" />
    ),
    title: "Media enquiries",
  }
];

export function ContactCTASection() {
  return (
    <section className="relative w-full pt-0 pb-16 bg-[#0a1224] text-white overflow-hidden">
      {/* Background Graphic Overlay */}
      <div 
        className="absolute inset-0 w-full h-full opacity-10"
        style={{
          backgroundImage: "url('/background/bg2.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "luminosity"
        }}
      />
      
      {/* Dark overlay just in case image is too bright */}
      <div className="absolute inset-0" />
        <div className="mb-[30px] bg-[#0a0a0a00]">
      <SectionDivider title="CONTACT" className="bg-transparent mb-12 relative z-20" />
        </div>
      <div className="container mx-auto px-6 lg:px-12 max-w-[1200px] relative z-20 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-3 text-white"
        >
          Get in touch with us
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-[#8d9ab3] font-medium"
        >
          We&apos;d be happy to answer any questions you have
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6 text-center pt-12 pb-4">
          {contactFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="flex flex-col items-center justify-center group cursor-pointer"
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold tracking-wide text-white">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}