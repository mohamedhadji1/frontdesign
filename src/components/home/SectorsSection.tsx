"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Cpu,
  Truck,
  Zap,
  Rocket,
  Building2,
  Tv,
  Factory,
  Landmark,
} from "lucide-react";

const sectors = [
  {
    title: "Healthcare",
    description: "Innovative technological solutions for the medical sector and public health. We design robust systems to improve care efficiency and patient data management.",
    icon: HeartPulse,
  },
  {
    title: "Telecom & IT",
    description: "Digital infrastructures, cybersecurity, and telecommunication networks. Our expertise guarantees fluid communications and cutting-edge security for your vital systems.",
    icon: Cpu,
  },
  {
    title: "Transportation",
    description: "Logistics optimization, fleet management, and smart mobility. Face tomorrow's challenges with our connected transport regulation platforms.",
    icon: Truck,
  },
  {
    title: "Energy",
    description: "Resource management, renewable energies, and smart grids. We deploy innovative solutions to control, optimize, and secure the energy supply.",
    icon: Zap,
  },
  {
    title: "Fintech & Start-ups",
    description: "Technological support, digital payments, and financial innovations. Accelerate your growth with reliable and scalable transactional ecosystems.",
    icon: Rocket,
  },
  {
    title: "Finance",
    description: "Banking, insurance, and risk management through data analytics tools. Robust security solutions to protect transactions and ensure regulatory compliance.",
    icon: Building2,
  },
  {
    title: "Media",
    description: "Broadcasting strategies, content management, and digital platforms. Modernize your information distribution with our highly available infrastructures.",
    icon: Tv,
  },
  {
    title: "Industrial",
    description: "In the industrial domain, we strengthen the security of control systems and manufacturing processes, protecting operations against cyber threats and interruptions.",
    icon: Factory,
  },
  {
    title: "Government & Public Sector",
    description: "Smart city, e-administration, and modernization of public services. Protect critical state data and make citizen access to services smoother and more secure.",
    icon: Landmark,
  },
];

export function SectorsSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }}
      className="bg-white bg-[length:0%] bg-no-repeat px-4 pt-10 pb-16 sm:px-6 md:bg-[length:50%] md:bg-[position:right_center] md:px-8 md:pb-20"
      style={{ backgroundImage: "url('/background/bg4.png')" }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <p className="text-zinc-500 max-w-2xl mx-auto mb-8 font-medium text-sm md:text-base">
            Select a sector to discover how we support digital transformation.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 1, ease: [0, 0, 0.2, 1] } },
            hidden: { opacity: 0 }
          }}
          className="grid grid-cols-1 grid-flow-dense gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:auto-rows-[120px]"
        >
          {sectors.map((sector, index) => {
            const isActive = index === activeIndex;
            const Icon = sector.icon;

            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0, 0, 0.2, 1] } }
                }}
                key={index}
                onClick={() => setActiveIndex(isActive ? -1 : index)}
                className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-[1rem] border transition-all duration-500 ${isActive
                  ? "col-span-1 min-h-[220px] border-red-600 bg-red-600 shadow-xl md:col-span-2 md:row-span-2 md:min-h-0"
                  : "col-span-1 min-h-[104px] border-zinc-200 bg-white/70 backdrop-blur-sm hover:border-red-400 hover:shadow-sm"
                  }`}
              >
                  <div
                    className={`relative z-10 flex h-full flex-col ${isActive ? 'justify-start p-5 md:justify-center' : 'items-center justify-center p-3 text-center'}`}
                  >
                  <div className={`flex w-full ${isActive ? 'items-center gap-4 mb-3' : 'flex-col items-center gap-2'}`}>
                    <div
                      className={`flex shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isActive ? 'h-12 w-12 bg-white' : 'h-10 w-10 bg-red-50 group-hover:bg-red-100'}`}
                    >
                      <Icon className={`transition-colors duration-300 ${isActive ? 'w-6 h-6 text-red-600' : 'w-4 h-4 text-red-500'}`} />
                    </div>

                    <motion.h2
                      className={`font-semibold transition-colors duration-300 ${isActive ? 'text-lg text-white md:text-2xl' : 'text-sm text-zinc-800 group-hover:text-red-600'}`}
                    >
                      {sector.title}
                    </motion.h2>
                  </div>

                  <div
                    className={`custom-scrollbar mt-2 flex-1 overflow-visible pr-0 transition-opacity duration-300 md:overflow-y-auto md:pr-2 ${isActive ? 'opacity-100 delay-200' : 'pointer-events-none opacity-0'
                      }`}
                  >
                    <p className="text-sm md:text-base text-white leading-relaxed font-medium">
                      {sector.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
