"use client";

import { motion } from "framer-motion";

import Link from "next/link";

const subServices = [
  {
    title: "Development of National and Sectoral Cybersecurity Strategy",
    slug: "development-of-national-and-sectoral-cybersecurity-strategy",
    description: "Comprehensive strategic planning to establish robust cybersecurity frameworks at national and sectoral levels."
  },
  {
    title: "CERT Implementation",
    slug: "cert-implementation",
    description: "End-to-end design and deployment of Computer Emergency Response Teams."
  },
  {
    title: "SOC Implementation",
    slug: "soc-implementation",
    description: "Building and operationalizing Security Operations Centers tailored to your environment."
  },
  {
    title: "Critical Infrastructure Protection",
    slug: "critical-infrastructure-protection",
    description: "Specialized frameworks and measures to secure essential services and infrastructure."
  },
  {
    title: "Cyber Crisis Management Framework",
    slug: "cyber-crisis-management-framework",
    description: "Developing structured processes and playbooks for handling severe cyber incidents."
  },
  {
    title: "Capacity and Maturity Assessment",
    slug: "capacity-and-maturity-assessment",
    description: "Evaluating your current cybersecurity capabilities and defining a roadmap for improvement."
  },
  {
    title: "Cyber Resilience Framework",
    slug: "cyber-resilience-framework",
    description: "Strategies to ensure business continuity and rapid recovery during and after cyber attacks."
  }
];

export function SubServicesSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-24 bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-gray-50 z-0" />
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-red-50/50 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight"
          >
            Our <span className="text-red-600">Strategic</span> Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium"
          >
            We offer comprehensive consulting services to help you establish, measure, and improve your cybersecurity posture across various domains.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/services/cybersecurity-strategy-consulting/${service.slug}`}
                className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(220,38,38,0.1)] hover:-translate-y-2 transition-all duration-300 group border border-gray-100 flex flex-col h-full block"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm border border-red-100 group-hover:border-red-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>

                <motion.h2 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
                  {service.title}
                </motion.h2>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center text-red-600 font-bold text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore Capability
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4h2" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
