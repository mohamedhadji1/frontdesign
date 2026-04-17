"use client";

import { motion } from "framer-motion";
import { Server, Smartphone, Lock, Activity, Link2, ShieldAlert } from "lucide-react";

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
      title: "Web & Mobile Application Audit",
      desc: "Deep security assessments of business-critical web portals and mobile applications to prevent data leaks or logic abuse.",
      icon: <Smartphone className="w-8 h-8 text-red-600 mb-4" />
    },
    {
      title: "Physical Penetration Testing",
      desc: "Simulating physical intrusions to access restricted server rooms, stealing hardware, or planting rogue devices.",
      icon: <Lock className="w-8 h-8 text-red-600 mb-4" />
    },
    {
      title: "External & Internal Pentesting",
      desc: "Attempting to compromise the external perimeter while modeling insider threats to assess internal lateral movement capabilities.",
      icon: <Server className="w-8 h-8 text-red-600 mb-4" />
    },
    {
      title: "Social Engineering",
      desc: "Evaluating the human factor through advanced phishing, vishing, and pretexting targeted at employees or management.",
      icon: <Activity className="w-8 h-8 text-red-600 mb-4" />
    },
    {
      title: "Hardware Testing & Reverse Engineering",
      desc: "Tearing down IoT devices and custom hardware to extract firmware, discover hidden keys, or exploit baseband/JTAG logic.",
      icon: <Link2 className="w-8 h-8 text-red-600 mb-4" />
    },
    {
      title: "Technical Infrastructure Audit",
      desc: "Auditing cloud environments, industrial ICS/SCADA systems, and Core/Internet Banking platforms.",
      icon: <ShieldAlert className="w-8 h-8 text-red-600 mb-4" />
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
            Red Team Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            We go beyond standard vulnerability scanning. Our expert offensive unit acts as a real-world adversary across multiple vectors—digital, physical, and human.
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
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm shadow-gray-200 hover:shadow-xl hover:shadow-red-900/5 transition-all group"
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