"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronRight
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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} 
      className="pb-20 pt-10 bg-white px-4 md:px-8"
      style={{
        backgroundImage: "url('/background/bg4.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "50%",
      }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <p className="text-zinc-500 max-w-2xl mx-auto mb-8 font-medium text-sm md:text-base">
            Select a sector to discover how we support digital transformation.
          </p>
        </div>

        <motion.div 
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 1, ease: "easeOut" } },
            hidden: { opacity: 0 }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[120px] gap-4 grid-flow-dense"
        >
          {sectors.map((sector, index) => {
            const isActive = index === activeIndex;
            const Icon = sector.icon;

            return (
              <motion.div
                layout
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                key={index}
                onClick={() => setActiveIndex(isActive ? -1 : index)}
                className={`relative overflow-hidden cursor-pointer flex flex-col border transition-all duration-300 rounded-[1rem] group ${
                  isActive 
                    ? "col-span-1 md:col-span-2 md:row-span-2 bg-red-600 border-red-600 shadow-xl" 
                    : "col-span-1 bg-white/70 backdrop-blur-sm border-zinc-200 hover:border-red-400 hover:shadow-sm"
                }`}
              >
                {/* Clean bright layout */}
                <motion.div 
                  layout 
                  className={`relative z-10 h-full flex flex-col ${isActive ? 'p-5 justify-start md:justify-center' : 'p-3 items-center justify-center text-center'}`}
                >
                  <motion.div layout className={`flex w-full ${isActive ? 'items-center gap-4 mb-3' : 'flex-col items-center gap-2'}`}>
                    <motion.div 
                      layout
                      className={`flex items-center justify-center rounded-full shrink-0 transition-colors duration-300 ${isActive ? 'bg-white w-12 h-12' : 'bg-red-50 group-hover:bg-red-100 w-10 h-10'}`}
                    >
                      <Icon className={`transition-colors duration-300 ${isActive ? 'w-6 h-6 text-red-600' : 'w-4 h-4 text-red-500'}`} />
                    </motion.div>
                    
                    <motion.h3 
                      layout 
                      className={`font-semibold transition-colors duration-300 ${isActive ? 'text-xl md:text-2xl text-white' : 'text-sm text-zinc-800 group-hover:text-red-600'}`}
                    >
                      {sector.title}
                    </motion.h3>
                  </motion.div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, marginTop: 0 }}
                        animate={{ opacity: 1, marginTop: 8 }}
                        exit={{ opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 overflow-y-auto pr-2 custom-scrollbar"
                      >
                        <p className="text-sm md:text-base text-white leading-relaxed font-medium">
                          {sector.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
