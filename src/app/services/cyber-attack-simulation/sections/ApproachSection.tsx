"use client";

import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/SectionDivider";

const steps = [
  { id: "1", title: "Identify", },
  { id: "2", title: "Exploit", },
  { id: "3", title: "Validate", },
  { id: "4", title: "Report", },
];

export function ApproachSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="bg-[#05080f] text-white pb-10 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left md:text-center shrink-0 w-full"
        >
          <SectionDivider title="OUR APPROACH" />
        </motion.div>

        <div className="w-full flex-1">
          <div className="relative flex flex-col md:flex-row justify-between items-center w-full max-w-4xl mx-auto">
            {/* The dashed line connecting the circles (desktop only) */}
            <div className="absolute top-12 left-10 right-10 h-px border-t border-dashed border-[#8b0000]/50 hidden md:block z-0" />

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center mb-12 md:mb-0"
              >
                <div className="w-24 h-24 rounded-full bg-[#8b0000] border-4 border-[#05080f] flex items-center justify-center text-xl font-bold mb-6 text-white shadow-lg shadow-black">
                  {step.id}
                </div>
                <h3 className="text-lg font-semibold tracking-wide text-gray-100">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}