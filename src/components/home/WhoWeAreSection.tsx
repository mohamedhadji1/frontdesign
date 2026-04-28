"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function WhoWeAreSection() {
  const [activeTab, setActiveTab] = useState(0); // Default to the 1st tab (Team)

  const handlePrevTab = () => {
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  const handleNextTab = () => {
    setActiveTab((prev) => (prev + 1) % tabs.length);
  };

  const tabs = [
    {
      id: 0,
      title: "Team",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 mb-3 text-red-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 1,
      title: "Certifications and Distinctions",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 mb-3 text-red-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Vision, Mission, and Values",
      icon: (
        <div className="flex items-center gap-2 mb-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" className="w-10 h-10">
            <rect x="4" y="6" width="10" height="12" rx="1" fill="#ef4444" stroke="#111" strokeWidth="2" />
            <path d="M4 14h10" stroke="#111" strokeWidth="2" />
            <path d="M14 12h4v6" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="16" y="18" width="4" height="2" fill="#111" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="bg-white relative overflow-hidden">
      {/* Top Part - White Background */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h4 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">
              Who we are
            </h4>
            <h2 className="text-3xl sm:text-[2.75rem] leading-[1.2] lg:leading-[1.1] font-medium text-gray-900 mb-6 lg:mb-8">
              Keystone is an international group dedicated to the Cybersecurity industry.
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 lg:mb-6 font-medium">
              Keysteone has twenty years’ experience in red teaming, blue teaming and consulting services which has been established in the IT sector for Research, Efficiency and Solution Production.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 lg:mb-10 font-medium">
              It was not long to discover that supported to knowledge by scientific perspectives, would be the solution to the real needs of the sector.
            </p>

            <div className="flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 w-full sm:w-auto">
              <button className="bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold py-3 sm:py-4 px-6 sm:px-10 flex items-center justify-center gap-2 sm:gap-3 transition-all rounded-sm shadow-md group shrink-0">
                About Us
                <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-bold flex items-center">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>
              <a href="#" className="text-gray-900 text-xs sm:text-sm font-semibold border-b-2 border-gray-900 pb-0.5 hover:text-red-600 hover:border-red-600 transition-colors whitespace-nowrap">
                Quality Certificates
              </a>
            </div>
          </motion.div>

          {/* Right Column - Stats / Features */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0, 0, 0.2, 1] }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:justify-center gap-10 lg:gap-12 lg:pl-10 mt-8 lg:mt-0 text-center lg:text-left"
          >
            {/* Stat 1 */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start">
              <div className="shrink-0 flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="28" fill="#ef4444" stroke="#111" strokeWidth="3"/>
                  <path d="M16 32C16 32 26 20 32 20C38 20 48 32 48 32" stroke="#111" strokeWidth="3"/>
                  <path d="M16 32C16 32 26 44 32 44C38 44 48 32 48 32" stroke="#111" strokeWidth="3"/>
                  <path d="M32 4V60M4 32H60" stroke="#111" strokeWidth="3"/>
                  <path d="M32 22L24 28V36C24 41.5 28 46.5 32 48C36 46.5 40 41.5 40 36V28L32 22Z" fill="white" stroke="#111" strokeWidth="3"/>
                  <path d="M29 36L31.5 38.5L35 32.5" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-normal text-gray-900 mb-2">Projects in +24 Countries</h3>
                <p className="text-gray-500 font-medium leading-relaxed">168 companies in 24 countries use our services.</p>
                <a href="#map-section" className="inline-block mt-4 text-sm font-medium text-gray-900 border-b border-gray-900 hover:text-red-600 hover:border-red-600 transition-colors">
                  See Our Global Impact
                </a>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start">
              <div className="shrink-0 flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 24C24 20 27 16 32 16C37 16 40 20 40 24V28H24V24Z" fill="#111"/>
                  <rect x="22" y="16" width="20" height="8" rx="4" fill="white" stroke="#111" strokeWidth="3"/>
                  <rect x="16" y="28" width="32" height="32" rx="4" fill="white" stroke="#111" strokeWidth="3"/>
                  <path d="M16 48H48" stroke="#111" strokeWidth="3"/>
                  <rect x="18" y="30" width="28" height="16" fill="#ef4444"/>
                  <circle cx="32" cy="40" r="4" fill="white" stroke="#111" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-normal text-gray-900 mb-2">+40 security expert</h3>
                <p className="text-gray-500 font-medium leading-relaxed">8 billion threat signals are processed daily by our systems.</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start">
              <div className="shrink-0 flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="36" r="22" fill="white" stroke="#111" strokeWidth="3"/>
                  <circle cx="28" cy="36" r="12" fill="#ef4444" stroke="#111" strokeWidth="3"/>
                  <circle cx="28" cy="36" r="3" fill="white" stroke="#111" strokeWidth="3"/>
                  <path d="M46 18L32 32" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M48 16L38 14L48 24L48 16Z" fill="#111"/>
                  <circle cx="48" cy="48" r="12" fill="#ef4444" stroke="#111" strokeWidth="3"/>
                  <path d="M48 42V48L52 52" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-normal text-gray-900 mb-2">+200 satisfied client</h3>
                <p className="text-gray-500 font-medium leading-relaxed">850 million people use platforms secured by our team every day.</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Bottom Part - Tabs over Background Image */}
      <div className="relative w-full h-[220px] lg:h-[280px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/background/bg5.png')" }}
        />
        {/* Very subtle light overlay if required to soften bg */}
        <div className="absolute inset-0 bg-white/20 z-0 mix-blend-overlay" />
        
        {/* Overlay gradient so tabs blend in nicely at top */}
        <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-white to-transparent z-10" />

        {/* Tabs Container */}
        <div className="container mx-auto px-4 absolute bottom-0 left-0 right-0 z-20 flex justify-center items-end sm:gap-2">
          
          {/* Previous Arrow */}
          <button 
            onClick={handlePrevTab}
            className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-8 sm:w-12 h-[100px] sm:h-[120px] mb-[-1px] text-gray-500 hover:text-red-500 hover:bg-white/50 shrink-0 flex"
            style={{ transform: 'translateY(1px)' }}
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex bg-transparent w-full sm:max-w-3xl overflow-x-auto overflow-y-hidden no-scrollbar justify-start sm:justify-around items-stretch px-1 sm:px-0">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              
              return (
                <div 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-[140px] sm:w-[200px] shrink-0 h-full min-h-[100px] sm:min-h-[120px] px-2 text-center
                    ${isActive 
                        ? 'bg-white shadow-[0_-5px_15px_rgba(0,0,0,0.04)] border-t border-x border-gray-100 z-10'
                        : 'bg-white/60 hover:bg-white/80 border-t border-x border-transparent text-gray-500'}
                  `}
                  style={isActive ? { transform: 'translateY(1px)' } : {}}
                >
                  <div className={`transform transition-transform duration-300 ${isActive ? 'scale-100' : 'scale-90 opacity-70'} flex items-center justify-center h-10 w-10 mb-2 sm:mb-3 text-[#ef4444]`}>
                    {tab.icon}
                  </div>
                  <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-600'} line-clamp-2`}>
                    {tab.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Next Arrow */}
          <button 
            onClick={handleNextTab}
            className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-8 sm:w-12 h-[100px] sm:h-[120px] mb-[-1px] text-gray-500 hover:text-red-500 hover:bg-white/50 shrink-0 flex"
            style={{ transform: 'translateY(1px)' }}
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        
        {/* Base white line to anchor the tabs visually underneath */}
        <div className="absolute bottom-0 inset-x-0 h-4 bg-white z-20" />
      </div>

      {/* Tab Content Area */}
      <div className="bg-white min-h-[400px]">
        {/* Team Tab (id: 0) */}
        {activeTab === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            {/* Left Image Area */}
            <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] rounded-xl overflow-hidden shadow-2xl shadow-gray-200 group">
              <motion.div 
                className="absolute inset-0 bg-cover bg-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
                style={{ backgroundImage: "url('/images/team.jpg')" }} 
              />
            </div>
            
            {/* Right Text Area */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-[2.5rem] font-bold text-[#0a102f] mb-6">
                Our Team
              </h2>
              <p className="text-gray-600 text-[17px] leading-relaxed mb-10">
                Our team of cybersecurity specialists embodies excellence, holding an impressive array of international certifications and extensive expertise in various fields of information security. Each member brings specialized skills and extensive experience, allowing us to offer tailored solutions, adapted to the specific challenges of our clients.
              </p>
              
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
                  hidden: { opacity: 0 }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4"
              >
                {[
                  "Developed Expertise",
                  "Versatility and Impartiality",
                  "International Certifications",
                  "Objectivity and Commitment to Quality"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] } }
                    }}
                    className="flex items-center gap-4"
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#fce8e8] flex items-center justify-center text-red-500">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-[#0a102f] text-[15px] font-medium">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}

        {/* Certifications Tab (id: 1) */}
        {activeTab === 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 max-w-5xl"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Certifications and Distinctions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                At Keystone, our commitment to excellence and innovation in cybersecurity has been consistently praised by the industry. These recognitions testify to our dedication to providing top-tier security solutions and pushing the boundaries to meet the complex challenges of our time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Industry Award", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.251v-3.75a3 3 0 10-6 0v3.75h-.251c-.622 0-1.125.504-1.125 1.125v3.375m10.5-3.75h-12" /> },
                { title: "Community Accolades", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /> },
                { title: "Certifications and Accreditations", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /> }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-100 p-8 rounded-xl flex flex-col items-center text-center transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Vision / Mission Tab (id: 2) */}
        {activeTab === 2 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 max-w-6xl"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Vision, Mission, and Values
              </h2>
              <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Vision */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1">
                 <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                   <span className="text-red-500">
                     <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   </span>
                   Vision
                 </h3>
                 <p className="text-gray-600 font-medium text-lg leading-relaxed">
                   Innovative Leader in Cybersecurity, Creator of Digital Resilience
                 </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1">
                 <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                   <span className="text-red-500">
                     <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                   </span>
                   Mission
                 </h3>
                 <p className="text-gray-600 font-medium text-lg leading-relaxed">
                   Protect Digital Innovation, Ensure Global Trust
                 </p>
              </div>

              {/* Values */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1">
                 <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                   <span className="text-red-500">
                     <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>
                   </span>
                   Values
                 </h3>
                 <p className="text-gray-600 text-lg leading-relaxed">
                   We place security as our top priority, ensuring the protection of our clients data, infrastructure, and activities with unwavering vigilance.
                 </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

    </motion.section>
  );
}