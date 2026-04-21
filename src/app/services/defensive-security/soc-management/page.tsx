
"use client";
import Link from "next/link";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { ShieldAlert, Activity, Search, Terminal, Siren, Globe, Eye, AlertCircle, MailWarning } from "lucide-react";
import { motion } from "framer-motion";
import { DEFCTASection } from "./DEFCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";


const steps = [
  {
    "id": "monitoring",
    "title": "Monitoring 24/7",
    "description": "Around-the-clock continuous telemetry and log ingestion from your entire infrastructure to instantly detect anomalous behaviors and potential security breaches.",
    "icon": <Activity className="w-8 h-8 text-white" />
  },
  {
    "id": "scanning",
    "title": "Scan des vulnérabilités",
    "description": "Regular, automated vulnerability scans across your network and endpoints to identify, prioritize, and patch critical security gaps before they can be exploited.",
    "icon": <Search className="w-8 h-8 text-white" />
  },
  {
    "id": "incident-management",
    "title": "Gestion des incidents",
    "description": "Rapid and decisive incident response protocols to contain threats, eradicate malicious presence, and execute seamless recovery with minimal disruption.",
    "icon": <AlertCircle className="w-8 h-8 text-white" />
  },
  {
    "id": "threat-intel",
    "title": "Threat Intelligence",
    "description": "Actionable, real-time intelligence integration analyzing global threat actor campaigns (TTPs and IOCs) to proactively tune your defenses.",
    "icon": <ShieldAlert className="w-8 h-8 text-white" />
  },
  {
    "id": "antiphishing",
    "title": "Antiphishing",
    "description": "Advanced detection and active mitigation of email-borne threats, credential harvesting, and social engineering attacks targeting your employees.",
    "icon": <MailWarning className="w-8 h-8 text-white" />
  },
  {
    "id": "vulnerability-watch",
    "title": "Veille sur les vulnérabilités",
    "description": "Continuous monitoring and intelligence gathering of zero-day vulnerabilities and exploits relevant to your specific technological stack.",
    "icon": <Eye className="w-8 h-8 text-white" />
  }
];

export default function Page() {
  
  return (
    
    <main className="flex min-h-screen flex-col bg-white">
      <CyberSectionDivider theme="blue"/>
      <section className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2">
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center flex-wrap gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link><span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span><Link href="/services/defensive-security" className="hover:text-blue-400 transition-colors break-keep">Defensive Security</Link><span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span><span className="text-blue-400">SOC Management</span>
              </div>
            </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                SOC <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Management</span>
              </h1>
              
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Comprehensive defense operations protecting your organization through 24/7 monitoring, automated vulnerability scanning, proactive threat intelligence, high-speed incident management, and advanced anti-phishing protection.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25">
                  Secure Your Defenses
                </Link>
                <Link href="/services" className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                  View All Services
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
                  alt="SOC Management" 
                  className="w-full h-[400px] rounded-xl object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-10 bg-zinc-50">
            <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-blue-600/30"></span>
              Defensive Security
              <span className="w-8 h-px bg-blue-600/30"></span>
            </h2>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto"> {/* Added text-center and mx-auto */}
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Our Defensive Approach
            </h2>
            <p className="text-zinc-600 text-lg">
              A rigorous methodology to bolster your resilience against cyber threats with cutting-edge telemetry, detection, and intelligence capabilities.
            </p>
          </div>
          <InteractiveProcessSection steps={steps} theme="blue" />
        </div>
      </section>

      <CyberSectionDivider className="mx-auto width-[0%]" theme="blue"/>
      <section className="py-10 bg-zinc-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-blue-600/30"></span>
              Defensive Security
              <span className="w-8 h-px bg-blue-600/30"></span>
            </h2>
            <div className="max-w-3xl mb-16 text-center mx-auto"> {/* Added text-center and mx-auto */}
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Why Choose us ?
            </h2>
            <p className="text-zinc-600 text-lg">
                Discover the core reasons why our clients trust us with their cybersecurity needs. We combine technology, expertise, and a proactive approach to protect your organization against evolving threats.
            </p>
          </div>
    </div>

    {/* Section: Key Benefits */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
      <div className="text-center">
        <div className="text-4xl text-blue-600 mb-4">
          <ShieldAlert />
        </div>
        <h3 className="font-semibold text-xl text-zinc-800 mb-2">Proactive Threat Detection</h3>
        <p className="text-zinc-600">With continuous monitoring, we identify threats in real-time, ensuring that potential risks are mitigated before they escalate.</p>
      </div>
      <div className="text-center">
        <div className="text-4xl text-blue-600 mb-4">
          <Terminal />
        </div>
        <h3 className="font-semibold text-xl text-zinc-800 mb-2">Automated Vulnerability Scanning</h3>
        <p className="text-zinc-600">We perform regular, automated scans across your infrastructure to identify vulnerabilities and patch them quickly, minimizing the attack surface.</p>
      </div>
      <div className="text-center">
        <div className="text-4xl text-blue-600 mb-4">
          <Globe />
        </div>
        <h3 className="font-semibold text-xl text-zinc-800 mb-2">Global Threat Intelligence</h3>
        <p className="text-zinc-600">Our approach is informed by the latest global threat intelligence, ensuring that your defenses are always up to date against the most recent attack tactics and techniques.</p>
      </div>
    </div>  
  </div>
  <div className="mx-auto width-[0%]">
    <CyberSectionDivider className="mx-auto width-[0%]" theme="blue"/>
  </div>
    <DEFCTASection />
  </section>
    </main>
  );
}