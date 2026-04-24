
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ServerCog, FileCheck, Users, Gamepad2, Network } from "lucide-react";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { CombinedDeepDive } from "../../defensive-security/Implementation-cert/CombinedDeepDive";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export default function CertImplementationPage() {
  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: "Cybersecurity Strategy Consulting", href: "/services/cybersecurity-strategy-consulting" },
    { label: "CERT Implementation", href: "/services/cybersecurity-strategy-consulting/cert-implementation" },
  ];

  const methodologies = [
    {
      title: "CERT Infrastructure Design",
      description: "We develop the architecture and processes necessary to create a CERT, tailored to the specific needs of the organization.",
      icon: ServerCog,
    },
    {
      title: "Definition of Responsibilities and Procedures",
      description: "We define the roles, responsibilities, and operational procedures to ensure effective management of security incidents.",
      icon: FileCheck,
    },
    {
      title: "Training and Recruitment",
      description: "We offer training programs and recommendations to recruit and train experts capable of managing incidents efficiently.",
      icon: Users,
    },
    {
      title: "Simulation and Practical Exercises",
      description: "We organize practical exercises to test the CERT's responsiveness and improve its ability to respond to real incidents.",
      icon: Gamepad2,
    },
    {
      title: "Integration with Relevant Stakeholders",
      description: "We facilitate the CERT's integration with other entities, promoting effective cooperation during major incident management.",
      icon: Network,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center flex-wrap gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                  {breadcrumbs.map((crumb, idx) => (
                    <React.Fragment key={idx}>
                      <Link href={crumb.href} className="hover:text-red-400 transition-colors break-keep">
                        {crumb.label}
                      </Link>
                      {idx < breadcrumbs.length - 1 && (
                        <span className="text-red-500/50 flex flex-nowrap shrink-0">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                CERT <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Implementation</span>
              </h1>
              
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Keystone offers its expertise in the implementation of CERTs, teams dedicated to managing IT security incidents. We collaborate with organizations to establish CERTs capable of detecting, analyzing, and responding quickly to cyber threats.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25">
                  Establish Your CERT
                </Link>
                <Link href="/services/cybersecurity-strategy-consulting" className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                  Back to Strategy Consulting
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4 flex justify-center items-center h-[400px]">
                {/* SVG Illustration replacement from the original red team hero or generic */}
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
                  alt="CERT Implementation" 
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red"/>

      {/* Methodology Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-red-600/30"></span>
              OUR METHODOLOGY
              <span className="w-8 h-px bg-red-600/30"></span>
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
              Building a Responsive CERT
            </h3>
            <p className="text-zinc-600 text-lg">
              Our structured approach guarantees a state-of-the-art incident response center tailored exactly to your organizational scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {methodologies.map((method, idx) => {
              const Icon = method.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-white transition-colors duration-300">{method.title}</h3>
                    <p className="text-zinc-600 group-hover:text-white/90 transition-colors duration-300">{method.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Embedded deep dive section for CERT specific details */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-20 bg-white border-b border-zinc-200">
        <div className="container mx-auto px-6">
           <CombinedDeepDive theme="red" />
        </div>
      </motion.section>
    <CyberSectionDivider theme="red"/>
    <ContactCTASection />        
    </main>
  );
}
