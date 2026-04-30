"use client";

import { motion } from "framer-motion";

const methodologySteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We begin by deeply understanding your business goals, current security posture, and regulatory requirements through comprehensive assessments."
  },
  {
    step: "02",
    title: "Strategy Formulation",
    description: "Our experts design a tailored cybersecurity framework that aligns with your specific risk appetite and strategic objectives."
  },
  {
    step: "03",
    title: "Implementation Roadmapping",
    description: "We deliver a prioritized, actionable roadmap detailing the technical and organizational changes required to achieve target maturity."
  },
  {
    step: "04",
    title: "Continuous Governance",
    description: "Beyond implementation, we provide ongoing guidance to ensure your strategy adapts to emerging threats and evolving business needs."
  }
];

export function ApproachSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-24 bg-white text-gray-900 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Our <span className="text-red-600">Methodology</span></motion.h2>
          <p className="text-gray-600 text-lg max-w-3xl font-medium">
            We don't believe in one-size-fits-all. Our approach to cybersecurity strategy is highly tailored, business-aligned, and focused on tangible outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologySteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-[2rem] bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              <div className="absolute top-8 right-8 text-6xl font-black text-gray-100 group-hover:text-red-50 transition-colors duration-300 pointer-events-none select-none">
                {item.step}
              </div>
              <motion.h2 className="text-xl font-bold mb-4 text-gray-900 relative z-10 mt-8">
                {item.title}
              </motion.h2>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
