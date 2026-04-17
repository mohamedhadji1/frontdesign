"use client";

import { motion } from "framer-motion";
import { Map, Wrench, ShieldAlert, DoorOpen, HardDrive, ScrollText } from "lucide-react";

export function MethodologySection() {
  const steps = [
    {
      num: "01",
      title: "Reconnaissance & OSINT",
      desc: "Gathering blueprints, satellite imagery, employee schedules, and badge systems from open sources to map physical vulnerabilities without setting foot on-site.",
      icon: <Map className="w-6 h-6 text-red-600" />
    },
    {
      num: "02",
      title: "Pretext Development",
      desc: "Creating solid cover stories, fake badges, and uniform disguises (maintenance, delivery, inspector) tailored specifically to your company culture.",
      icon: <Wrench className="w-6 h-6 text-red-600" />
    },
    {
      num: "03",
      title: "Perimeter Breach",
      desc: "Testing your lock systems, fences, cameras, and security guards during off-hours or peak times leveraging tailgating, lockpicking, and badge cloning.",
      icon: <DoorOpen className="w-6 h-6 text-red-600" />
    },
    {
      num: "04",
      title: "Interior Movement & Exploitation",
      desc: "Navigating inside the facility to locate sensitive zones (server rooms, executive offices, R&D labs) avoiding interior cameras and employee challenges.",
      icon: <ShieldAlert className="w-6 h-6 text-red-600" />
    },
    {
      num: "05",
      title: "Objective Action",
      desc: "Demonstrating compromise by taking non-destructive actions: placing rogue access points, capturing unlocked workstations, or removing sensitive mock documents.",
      icon: <HardDrive className="w-6 h-6 text-red-600" />
    },
    {
      num: "06",
      title: "Debrief & Reporting",
      desc: "Detailing exactly how access was gained, photographic evidence of gaps, and actionable recommendations to harden your physical security posture.",
      icon: <ScrollText className="w-6 h-6 text-red-600" />
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-red-600"></span>
            <span className="text-red-500 font-semibold uppercase tracking-wider text-sm">Our Approach</span>
            <span className="w-8 h-px bg-red-600"></span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
          >
            The Physical Testing Methodology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Our operations mimic actual real-world intruders. We blend social engineering, electronic access bypass, and traditional lock defeat to stress test your entire facility.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all relative overflow-hidden group"
            >
              {/* Background Number */}
              <div className="absolute -top-4 -right-2 text-8xl font-black text-gray-50/80 group-hover:text-red-50/50 transition-colors pointer-events-none select-none z-0">
                {step.num}
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}