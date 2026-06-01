"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutContent } from "@/lib/about-data";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { 
  Trophy, 
  Star, 
  ShieldCheck, 
  Globe, 
  Building2, 
  Users2, 
  Award,
  Shield, 
  Lock,
  Layers,
  ArrowUpRight
} from "lucide-react";

const categoryIcons = [Trophy, Star, ShieldCheck];

export function AwardsSection() {
  const { awards } = aboutContent;

  // Key metrics
  const stats = [
    {
      value: "4",
      label: "Strategic Offices",
      desc: "Tunis (HQ), Algiers, Tripoli, Nouakchott.",
      Icon: Building2,
    },
    {
      value: "30+",
      label: "Countries Covered",
      desc: "Active operations across Africa & Europe (EMEA).",
      Icon: Globe,
    },
    {
      value: "200+",
      label: "Enterprise Clients",
      desc: "Securing finance, government, telecom & energy.",
      Icon: Users2,
    },
    {
      value: "80+",
      label: "Certified Specialists",
      desc: "Holding CISSP, CISM, OSCP, CEH, and ISO LA.",
      Icon: ShieldCheck,
    },
  ];

  // Coalitions and Memberships
  const memberships = [
    {
      title: "FIRST (Forum of Incident Response and Security Teams)",
      role: "Official Member",
      desc: "Keystone is a recognized member of FIRST, the global leader in incident response. This prestigious coalition enables us to collaborate with security teams worldwide, exchange high-value threat intelligence, and coordinate instant incident response globally.",
      link: "https://www.first.org",
      badgeColor: "bg-red-50 text-red-600 border-red-200",
      bgImage: "/images/first-big-icon.png",
    },
    {
      title: "AfricaCERT (African Incident Response Union)",
      role: "Active Member",
      desc: "As an active member of AfricaCERT, Keystone participates directly in strengthening digital resilience, raising cybersecurity standards, and fostering collaboration on digital threats and cyber emergencies across the African continent.",
      link: "https://www.africacert.org",
      badgeColor: "bg-zinc-100 text-zinc-800 border-zinc-200",
      bgImage: "/images/AfricaCERT.png",
    },
  ];

  // Certifications and Compliance Standards
  const certifications = [
    {
      logo: "/certif/27001.png",
      title: "ISO/IEC 27001",
      desc: "Information Security Management Systems (ISMS)",
    },
    {
      logo: "/certif/22301.png",
      title: "ISO/IEC 22301",
      desc: "Business Continuity Management Systems (BCMS)",
    },
    {
      logo: "/certif/27701.png",
      title: "ISO/IEC 27701",
      desc: "Privacy Information Management Systems (PIMS)",
    },
    {
      logo: "/certif/27005.png",
      title: "ISO/IEC 27005",
      desc: "Information Security Risk Management Standard",
    },
    {
      logo: "/certif/PCIDSS.png",
      title: "PCI DSS Compliance",
      desc: "Payment Card Industry Data Security Standard",
    },
    {
      logo: "/certif/SOC2.webp",
      title: "SOC 2 Type II",
      desc: "Systems & Organization Controls - Security & Availability",
    },
    {
      logo: "/certif/SWIFT.png",
      title: "SWIFT CSP",
      desc: "Financial Messaging System Customer Security Programme",
    },
    {
      logo: "/certif/GDPR.webp",
      title: "GDPR Standards",
      desc: "General Data Protection Regulation Compliance",
    },
    {
      logo: "/certif/hipaa.png",
      title: "HIPAA Compliance",
      desc: "Health Insurance Portability and Accountability Act",
    },
    {
      logo: "/certif/nistcyber.svg",
      title: "NIST CSF Framework",
      desc: "National Institute of Standards & Technology",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white pb-32">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <SectionDivider title="RECOGNITION & CREDENTIALS" className="mb-8" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-extrabold text-zinc-900 mb-8 uppercase tracking-tight"
          >
            Trust, Audits & Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 leading-relaxed font-medium"
          >
            Keystone is built upon verified security expertise, continuous compliance audits, and prestigious global coalitions. Here is a breakdown of our certified operations and impact across the EMEA region.
          </motion.p>
        </div>

        {/* 1. Key Statistics (Stats Grid) */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.Icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative bg-zinc-50 border border-zinc-100 p-8 rounded-[2rem] hover:bg-white hover:border-red-100 hover:shadow-xl transition-all duration-500 cursor-default"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl lg:text-5xl font-black text-zinc-900 group-hover:text-red-600 transition-colors">
                      {stat.value}
                    </span>
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                      <Icon size={20} />
                    </div>
                  </div>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-lg font-bold text-zinc-800 mb-2 uppercase tracking-wide"
                  >
                    {stat.label}
                  </motion.h2>
                  <p className="text-sm font-medium text-zinc-500 leading-relaxed">
                    {stat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. Coalitions & Prestigious Memberships */}
        <div className="mb-32">
          <div className="mb-12 text-center lg:text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-red-600 mb-3">GLOBAL FEDERATIONS</h3>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-black text-zinc-900 uppercase"
            >
              Prestigious Security Memberships
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {memberships.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col bg-zinc-50 text-zinc-900 rounded-[2.5rem] p-10 border border-zinc-100 relative overflow-hidden group hover:bg-white hover:border-red-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/5 rounded-full blur-[80px] group-hover:bg-red-600/10 transition-colors duration-500 pointer-events-none" />
                
                {/* Background Image Watermark */}
                {member.bgImage && (
                  <div className="absolute right-4 bottom-4 w-60 h-60 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none z-0">
                    <Image 
                      src={member.bgImage} 
                      alt="" 
                      fill 
                      className="object-contain object-right-bottom"
                    />
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-center gap-8 relative z-10 h-full">
                  <div className="flex-1 flex flex-col h-full">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className={`px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest ${member.badgeColor}`}>
                        {member.role}
                      </div>
                    </div>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-xl lg:text-2xl font-black uppercase tracking-tight text-zinc-800 mb-4 group-hover:text-red-600 transition-colors duration-300"
                    >
                      {member.title}
                    </motion.h2>

                    <p className="text-zinc-500 font-medium leading-relaxed mb-6 flex-1 text-sm lg:text-base">
                      {member.desc}
                    </p>

                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 hover:gap-3 transition-all"
                    >
                      Official site
                      <ArrowUpRight size={14} />
                    </a>
                  </div>

                  {/* Creative Logo Branding Container */}
                  {member.bgImage && (
                    <div className={`w-full md:w-40 shrink-0 flex items-center justify-center rounded-3xl relative overflow-hidden group/logo shadow-sm transition-all duration-500 h-36 md:h-40 border ${idx === 1 ? "bg-black border-zinc-900 p-6 group-hover:border-red-900/50" : "bg-white border-zinc-200/60 p-0 group-hover:border-red-200"}`}>
                      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none z-10 ${idx === 1 ? "bg-[radial-gradient(#fff_1px,transparent_1px)]" : "bg-[radial-gradient(#000_1px,transparent_1px)]"} [background-size:12px_12px]`} />
                      {idx === 0 ? (
                        <Image
                          src={member.bgImage}
                          alt={member.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover/logo:scale-110"
                        />
                      ) : (
                        <Image
                          src={member.bgImage}
                          alt={member.title}
                          width={120}
                          height={120}
                          className="object-contain max-h-24 transition-transform duration-500 group-hover/logo:scale-110"
                        />
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Compliance & Audited Standards Grid */}
        <div className="mb-32">
          <div className="mb-16 text-center">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-red-600 mb-3">COMPLIANCE & AUDITS</h3>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl font-black text-zinc-900 uppercase"
            >
              ISO Certifications & Standards
            </motion.h2>
            <p className="max-w-2xl mx-auto mt-4 text-sm font-medium text-zinc-500">
              We operate under continuous surveillance audits aligned with the world's most rigorous cybersecurity frameworks and data protection standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex flex-col items-center text-center p-6 bg-white border border-zinc-100 rounded-[2rem] hover:border-red-200 hover:shadow-xl transition-all duration-500 group cursor-default"
              >
                <div className="w-20 h-20 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={cert.logo}
                    alt={cert.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-sm font-extrabold text-zinc-800 mb-2 uppercase tracking-wide group-hover:text-red-600 transition-colors"
                >
                  {cert.title}
                </motion.h2>
                <p className="text-[11px] font-semibold text-zinc-400 leading-snug px-1">
                  {cert.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Industry Awards (Original items) */}
        <div>
          <div className="mb-16 text-center">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-red-600 mb-3">HONORS</h3>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl font-black text-zinc-900 uppercase"
            >
              Industry Recognition & Accolades
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {awards.prizes.map((category, idx) => {
              const Icon = categoryIcons[idx % categoryIcons.length];
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="flex flex-col h-full"
                >
                  <div className="bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100 flex-1 flex flex-col hover:border-red-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                    <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-red-600/20 group-hover:scale-105 transition-transform duration-300">
                      <Icon size={32} />
                    </div>
                    <motion.h2 
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-zinc-900 mb-8 uppercase tracking-tight animate-none"
                    >
                      {category.category}
                    </motion.h2>
                    <div className="space-y-8 flex-1">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="space-y-2 group cursor-default">
                          <motion.h2
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-lg font-bold text-zinc-800 group-hover:text-red-600 transition-colors flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                            {item.title}
                          </motion.h2>
                          <p className="text-zinc-500 font-medium leading-relaxed pl-3.5">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
