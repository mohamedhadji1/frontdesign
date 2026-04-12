"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Managed Services",
    description: "Our managed services offer peace of mind by relieving you of the daily management of security. From continuous monitoring to incident response, we handle the entire process, ensuring proactive protection against threats and immediate problem resolution.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Offensive Security",
    description: "Our team of offensive security experts possesses in-depth knowledge of attack tactics. We simulate real attacks to identify hidden vulnerabilities in your systems, allowing for proactive remediation before they can be exploited by actual attackers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "GRC (Governance, Risk, and Compliance)",
    description: "Our approach to GRC is based on holistic risk and compliance management. We help companies establish policies and processes to meet regulatory requirements, minimize risks, and maximize compliance, while integrating a culture of security at the heart of their operations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Training & Awareness",
    description: "Our training and awareness programs are designed to change safety behaviors. Using interactive and engaging methods, we train your staff to recognize, report, and respond effectively to threats, thereby transforming each employe into a strong link in your overall security.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Strategic Advice",
    description: "Our expertise in strategic consulting goes beyond technical aspects. We establish cybersecurity strategies aligned with your business objectives, identifying potential risks and offering pragmatic solutions to strengthen your position against digital threats, while maximizing your return on investment.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Audit and Technical Assistance",
    description: "Our audit and technical assistance services provide a comprehensive assessment of your infrastructure, identifying potential gaps and offering specific recommendations to enhance security. We also assist you in implementing these recommendations to ensure enhanced security.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  }
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative pb-20 overflow-hidden" style={{ backgroundImage: "url('/background/bg1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      
      {/* Dark overlay to make the text readable if the image is dark */}
      <div className="absolute inset-0 bg-white/75 z-1 pointer-events-none" />

      {/* Section Title Header */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 mb-16 flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-600 text-lg leading-relaxed font-medium"
          >
            Comprehensive cybersecurity solutions designed to protect your organization anticipate threats, and strengthen your digital resilience.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-1 bg-red-600 mt-6 rounded-full origin-center"
          />
        </div>
      </div>

      {/* Interactive Interactive Hub Layout (Desktop) */}
      <div className="hidden lg:flex relative max-w-[1152px] mx-auto h-[600px] items-center text-gray-900 z-20 overflow-visible mt-10">
        
        {/* Background Concentric Dotted Circles for the Center Hub */}
        <div className="absolute left-[576px] top-[300px] -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
          <div className="w-[120px] h-[120px] border-2 border-gray-400 border-dotted rounded-full absolute opacity-100" />
          <div className="w-[180px] h-[180px] border-2 border-gray-400 border-dotted rounded-full absolute opacity-80" />
          <div className="w-[280px] h-[280px] border-2 border-gray-300 border-dotted rounded-full absolute opacity-100 transition-transform duration-700 hover:rotate-45" />
          <div className="w-[400px] h-[400px] border-2 border-gray-300 border-dotted rounded-full absolute opacity-80" />
          <div className="w-[550px] h-[550px] border-2 border-gray-300 border-dotted rounded-full absolute opacity-60 transition-transform duration-[2000ms] hover:-rotate-12" />
        </div>

        {/* Dynamic Curved SVG Lines connecting the Left Column to Center Hub */}
        <svg className="absolute inset-0 w-full h-[600px] pointer-events-none z-0" viewBox="0 0 1152 600">
          {services.map((_, idx) => {
            const isActive = activeIndex === idx;
            const yPos = (idx * 90) + 75; // Y positions: 75, 165, 255, 345, 435, 535
            
            // X coordinates: left list ends roughly around 380px. Center Hub is at 576px.
            const startX = 380;
            const targetX = 576;
            const targetY = 300;
            
            return (
              <g key={`connection-${idx}`}>
                {/* Connecting Curved Line */}
                <path
                  d={`M ${startX},${yPos} C ${startX + 80},${yPos} ${targetX - 80},${targetY} ${targetX},${targetY}`}
                  fill="none"
                  stroke={isActive ? '#ef4444' : '#e5e7eb'}
                  strokeWidth={isActive ? 3 : 2}
                  className="transition-colors duration-500"
                />
              </g>
            );
          })}
        </svg>

        {/* Left Interactive List (Titles) */}
        <div className="absolute left-0 top-0 h-[600px] w-[380px] z-10 flex flex-col justify-center">
          {services.map((service, idx) => {
            const isActive = activeIndex === idx;
            const yPos = (idx * 90) + 75;
            
            return (
              <div 
                key={`left-item-${idx}`}
                className="absolute right-0 flex justify-end items-center cursor-pointer group"
                style={{ top: `${yPos}px`, transform: 'translateY(-50%)', width: '500px' }}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
              >
                {/* Horizontal Gradient Tail matching the screenshot */}
                <div 
                  className={`absolute inset-y-0 right-0 left-0 bg-gradient-to-r from-transparent ${isActive ? 'to-red-50' : 'to-gray-100/50 group-hover:to-red-50/50'} -z-10 transition-colors duration-300`} 
                />
                
                <span className={`pr-4 pl-8 py-3 text-[17px] font-bold transition-all duration-300 ${isActive ? 'text-red-600 sm:text-red-600' : 'text-gray-500 sm:text-gray-600'}`}>
                  {service.title}
                </span>
                
                {/* Plus Icon Box */}
                <span className={`w-6 h-6 mr-6 flex items-center justify-center text-sm font-bold bg-white rounded-md shadow-sm border transition-colors ${isActive ? 'text-red-600 border-red-200' : 'text-gray-400 border-gray-100'} group-hover:border-red-200 group-hover:text-red-600`}>
                  +
                </span>
              </div>
            );
          })}
        </div>

        {/* Center Hub Graphic */}
        <div className="absolute left-[576px] top-[300px] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
          <div className="bg-white w-[88px] h-[88px] rounded-full shadow-lg flex items-center justify-center relative over border border-gray-100">
            
            {/* Geometric Globe Wireframe Icon */}
            <svg viewBox="0 0 24 24" className="w-[50px] h-[50px] text-red-600 z-10" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <path d="M2 12h20" />
            </svg>
          </div>
        </div>

        {/* Right Dynamic Content Pane */}
        <div className="absolute left-[680px] top-[300px] -translate-y-1/2 right-12 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-start"
            >
              <h3 className="text-[28px] font-bold text-gray-900 mb-6 leading-tight">
                {services[activeIndex].title}
              </h3>
              <p className="text-gray-600 text-[17px] leading-relaxed">
                {services[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Layout Fallback (Normal Stack Grid) */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 lg:hidden font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />
              <div className="relative z-10 flex flex-col items-start gap-5">
                <div className="text-red-600 bg-red-50 p-3 rounded-xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}