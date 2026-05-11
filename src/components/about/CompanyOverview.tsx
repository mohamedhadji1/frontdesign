"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { aboutContent } from "@/lib/about-data";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const titleVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export function CompanyOverview() {
  const { companyOverview } = aboutContent;
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section ref={targetRef} id="company-overview" className="relative overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <motion.div 
          style={{ y: y1, rotate }}
          className="absolute top-[10%] right-[5%] w-64 h-64 border border-red-500/10 rounded-full" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[20%] left-[10%] w-96 h-96 border border-zinc-900/5 rounded-full" 
        />
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Title Section */}
        <div className="max-w-4xl mx-auto mb-28 text-center pt-24">
          <SectionDivider title="REGIONAL PRESENCE" className="mb-12" />
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariant}
            className="text-4xl lg:text-7xl font-extrabold text-zinc-900 mb-8 tracking-tight uppercase leading-[0.95]"
          >
            Presence in the EMEA Region
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl lg:text-2xl text-zinc-600 leading-relaxed font-medium max-w-3xl mx-auto"
          >
            {companyOverview.description}
          </motion.p>
        </div>

        {/* Commitment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10, transition: { duration: 0.4 } }}
            className="group bg-zinc-50 p-12 rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <motion.h2 
              className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-4"
            >
              <div className="w-3 h-10 bg-red-600 rounded-full group-hover:scale-y-125 transition-transform" />
              {companyOverview.engagementEMEA.title}
            </motion.h2>
            <p className="text-zinc-600 leading-relaxed text-lg font-medium">
              {companyOverview.engagementEMEA.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10, transition: { duration: 0.4 } }}
            className="group bg-zinc-900 p-12 rounded-[2.5rem] border border-zinc-800 shadow-2xl text-white overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-3xl group-hover:bg-red-600/40 transition-colors" />
            <motion.h2 
              className="text-3xl font-bold mb-6 flex items-center gap-4 relative z-10"
            >
              <div className="w-3 h-10 bg-red-500 rounded-full group-hover:scale-y-125 transition-transform" />
              {companyOverview.focusAfrica.title}
            </motion.h2>
            <p className="text-zinc-300 leading-relaxed text-lg font-medium relative z-10">
              {companyOverview.focusAfrica.description}
            </p>
          </motion.div>
        </div>

        <CyberSectionDivider />

        {/* Local Presence Grid */}
        <div className="py-32">
          <SectionDivider title="WHERE WE OPERATE" className="mb-20" />
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-20">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-extrabold text-zinc-900 uppercase tracking-tighter"
            >
              Local Presence
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="flex-1 h-[2px] bg-gradient-to-r from-zinc-200 to-transparent" 
            />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {companyOverview.localPresence.map((country, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  y: -15,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group relative bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(239,68,68,0.1)] transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Enhanced 3D Flag Animation */}
                <motion.div 
                  className="relative w-28 h-20 mb-8 shadow-2xl rounded-xl overflow-hidden border border-zinc-100"
                  animate={{ 
                    rotateY: [0, 15, -15, 0],
                    rotateX: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <img 
                    src={`https://flagcdn.com/w320/${country.code}.png`} 
                    alt={country.country}
                    className="w-full h-full object-cover scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
                </motion.div>

                <h4 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {country.country}
                </h4>
                <p className="text-zinc-500 text-base leading-relaxed font-medium">
                  {country.description}
                </p>

                <motion.div 
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CyberSectionDivider />

        {/* Future Vision Section */}
        <div className="pt-32 pb-40">
          <SectionDivider title="FUTURE VISION" className="mb-20" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <motion.h2 
                className="text-4xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] uppercase"
              >
                Our Impact & Our Vision
              </motion.h2>
              <div className="space-y-8">
                <p className="text-xl lg:text-2xl text-zinc-600 leading-relaxed font-medium border-l-4 border-red-600 pl-10">
                  {companyOverview.impactVision.description}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-red-600 p-16 rounded-[3rem] text-white flex flex-col justify-center relative overflow-hidden shadow-2xl shadow-red-600/30"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] animate-pulse" />
              <motion.h2 
                className="text-4xl font-bold mb-8 uppercase tracking-tight"
              >
                Vision for the Future
              </motion.h2>
              <p className="text-red-50 leading-relaxed text-xl mb-12 font-medium">
                Our vision is to become the preferred cybersecurity partner in the EMEA region, by continuing to offer innovative and tailored solutions, thereby strengthening digital resilience for the years to come.
              </p>
              
              <div className="pt-10 border-t border-red-500/50">
                <h4 className="font-bold text-2xl mb-6">Explore Our Cybersecurity Expertise</h4>
                <p className="text-red-100 text-lg mb-10 font-medium">
                  Discover how Keystone protects businesses and organizations in the EMEA region.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-4 font-bold uppercase tracking-widest text-sm bg-white text-red-600 px-10 py-5 rounded-full shadow-2xl hover:bg-zinc-100 transition-colors"
                >
                  Get Started Now
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
