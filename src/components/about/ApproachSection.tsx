"use client";

import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/SectionDivider";

const approaches = [
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#334155]">
        <path d="M3 9V5a2 2 0 0 1 2-2h4" />
        <path d="M15 3h4a2 2 0 0 1 2 2v4" />
        <path d="M3 15v4a2 2 0 0 0 2 2h4" />
        <path d="M15 21h4a2 2 0 0 0 2-2v-4" />
        <circle cx="12" cy="12" r="5" stroke="#e60000" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.5" fill="#e60000" stroke="none" />
      </svg>
    ),
    title: "An adversarial mindset",
    description:
      "We harness the latest cyberoffensive intelligence to help identify and address security risks sooner.",
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#334155]">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 8h6" />
        <path d="M7 12h6" />
        <path d="M7 16h4" />
        <circle cx="17" cy="12" r="3.5" stroke="#e60000" />
        <path d="M15.5 12l1 1 2-2" stroke="#e60000" />
      </svg>
    ),
    title: "Outcome-focused",
    description:
      "We work closely with our clients to better understand and address their needs.",
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#334155]">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M11 2L9 4l2 2" stroke="#e60000" />
        <path d="M16 2l2 2-2 2" stroke="#e60000" />
      </svg>
    ),
    title: "High-quality service",
    description:
      "We strive to continually deliver the highest standards of customer support and exceed expectations.",
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#334155]">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" stroke="#e60000" />
        <path d="M12 8v8" stroke="#e60000" />
        <path d="M8 12h8" stroke="#e60000" />
        <path d="M9 3v-2" />
        <path d="M15 3v-2" />
        <path d="M9 23v2" />
        <path d="M15 23v2" />
        <path d="M3 9h-2" />
        <path d="M3 15h-2" />
        <path d="M23 9h-2" />
        <path d="M23 15h-2" />
      </svg>
    ),
    title: "Technology-agnostic",
    description:
      "We're not constrained by one set of technologies so select the best tools for each client.",
  },
];

export function ApproachSection() {
  return (
    <section className="relative w-full bg-[#f8f9fa] pt-0 pb-24 px-6 lg:px-12 border-t border-gray-200">
      
      <SectionDivider title="OUR APPROACH" className="bg-transparent mb-16 relative z-20" />

      <div className="container mx-auto max-w-[1100px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {approaches.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-8 lg:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] rounded-sm flex flex-col sm:flex-row gap-6 lg:gap-8"
            >
              <div className="shrink-0 flex items-start sm:w-16">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <div className="flex flex-col text-left">
                <h4 className="text-[19px] font-extrabold text-[#0a102f] mb-3">{item.title}</h4>
                <p className="text-[#3b475c] leading-[1.65] text-[15px] font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}