"use client";

import { motion } from "framer-motion";
import { CameraOff, Building, Users, MapPin, Search, Lock } from "lucide-react";

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
      title: "Covert Entry & Bypass",
      desc: "Simulating adversarial entry using picking, cloning, tailgate techniques, and bypassing modern electronic access control systems.",
      icon: <Lock className="w-8 h-8 text-red-600 mb-4" />
    },
    {
      title: "Facility Perimeter Breach",
      desc: "Methodical boundary analysis and testing of walls, fences, camera blind spots, and security guard patrols.",
      icon: <Building className="w-8 h-8 text-red-600 mb-4" />
    },
    {
      title: "Social Engineering (On-Site)",
      desc: "Posing as contractors, vendors, or new employees to persuade staff to grant unauthorized access to restricted areas.",
      icon: <Users className="w-8 h-8 text-red-600 mb-4" />
    },
    {
      title: "Rogue Device Implantation",
      desc: "Planting hidden network sniffers, keystroke loggers, or wireless bridging devices in server rooms or executive suites.",
      icon: <MapPin className="w-8 h-8 text-red-600 mb-4" />
    },
    {
      title: "Surveillance Evasion",
      desc: "Testing the effectiveness of CCTV coverage, motion sensors, alarms, and the response time of your security operations center.",
      icon: <CameraOff className="w-8 h-8 text-red-600 mb-4" />
    },
    {
      title: "Open-Source Intelligence (OSINT)",
      desc: "Pre-attack reconnaissance involving badge analysis, building blueprints, and employee routines gathered from public data.",
      icon: <Search className="w-8 h-8 text-red-600 mb-4" />
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
            Physical Penetration Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Your digital defenses are only as strong as the physical walls guarding them. We deploy elite operators to breach physical barriers and expose on-site operational flaws.
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