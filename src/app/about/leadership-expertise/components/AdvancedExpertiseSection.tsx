"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export function AdvancedExpertiseSection() {
  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="lg:pr-12">
          <motion.h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-4">
              ADVANCED EXPERTISE
          </motion.h2>
          <p
            className="text-gray-700 mb-6 leading-[1.8]"
            style={{ fontFamily: "'Gotham', sans-serif" }}
          >
            Our team of cybersecurity specialists represents excellence, holding a wide range of international certifications and extensive expertise across multiple areas of information security.
          </p>
          <p className="text-gray-700 leading-[1.8]" style={{ fontFamily: "'Gotham', sans-serif" }}>
            Each team member contributes deep knowledge and broad experience, enabling us to deliver customized solutions tailored to the unique challenges our clients face.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden w-full h-full min-h-[300px] shadow-lg">
          <Image
            src="/images/highlight-expertise.png"
            alt="Advanced Expertise"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
