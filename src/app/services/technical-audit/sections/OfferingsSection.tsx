"use client";

import { motion } from "framer-motion";
import { Server, Cloud, ShieldAlert, FileCode2, Network, ShieldCheck } from "lucide-react";

export function OfferingsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const offerings = [
    {
      title: "Cloud Environment Audit",
      desc: "Comprehensive review of AWS, Azure, and GCP setups to remediate IAM misconfigurations, exposed storage, and network flaws.",
      icon: <Cloud className="w-8 h-8 text-red-600 mb-4" />
    },
    {
      title: "Critical Infrastructure Protection",
      desc: "Deep security assessments of ICS/SCADA systems to ensure operational technology remains secure from cyber-physical disruptions.",
      icon: <ShieldAlert className="w-8 h-8 text-red-600 mb-4" />
    },
    {
      title: "Core & Internet Banking System Audit",
      desc: "Rigorous evaluation of financial platforms, payment gateways, and banking infrastructure for logic flaws and policy compliance.",
      icon: <Server className="w-8 h-8 text-red-600 mb-4" />
    },
    {
      title: "System Hardening",
      desc: "Matching core servers, workstations, and network equipment against CIS Benchmarks to enforce hardened enterprise standards.",
      icon: <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
    },
    {
      title: "Industrial System Audit",
      desc: "End-to-end vulnerability assessments of operational, industrial, and manufacturing technology networks.",
      icon: <Network className="w-8 h-8 text-red-600 mb-4" />
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50 text-gray-900 border-b border-gray-200 relative overflow-hidden">
      {/* Decorative red dot grid in background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center md:text-left mb-16 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Audit Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Go beyond surface-level scanning. We take a white-box approach to evaluate the configurations, code, and foundational architecture powering your enterprise.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {offerings.map((offer, idx) => (
            <motion.div
              key={idx}
              id={offer.title.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase()}
              className="scroll-mt-24 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm shadow-gray-200 hover:shadow-xl hover:shadow-red-900/5 transition-all group"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="transition-transform duration-300 group-hover:scale-110 origin-left">
                {offer.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                {offer.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {offer.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
