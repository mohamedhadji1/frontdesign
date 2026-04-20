import React from "react";
import Link from "next/link";
import { ContactCTASection } from "@/components/about/ContactCTASection";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { ShieldAlert, Activity, Search, Terminal, Siren, Globe, Eye, AlertCircle, MailWarning } from "lucide-react";
import { CombinedDeepDive } from "./CombinedDeepDive";
import { BlueSectionDivider } from "@/components/ui/BlueSectionDivider";

const steps = [
  {
    "id": "monitoring",
    "title": "Monitoring 24/7",
    "description": "Our 24/7 Security Operations Center (SOC) provides continuous, round-the-clock monitoring of your entire IT infrastructure. By aggregating global telemetry, network traffic, and endpoint logs into a centralized SIEM, our expert analysts instantly detect anomalous behaviors, lateral movement, and unauthorized access attempts in real-time, ensuring no threat goes unnoticed.",
    "icon": <Activity className="w-8 h-8 text-white" />
  },
  {
    "id": "scanning",
    "title": "Scan des vulnérabilités",
    "description": "We conduct frequent, automated vulnerability scanning and continuous attack surface management across all your assets. By leveraging enterprise-grade scanners and threat intelligence feeds, we identify, categorize, and prioritize critical security gaps, misconfigurations, and unpatched systems before malicious actors can exploit them.",
    "icon": <Search className="w-8 h-8 text-white" />
  },
  {
    "id": "incident-management",
    "title": "Gestion des incidents",
    "description": "In the event of a breach, our rapid-response digital forensics and incident response (DFIR) teams spring into action. We execute decisive containment protocols, eradicate malicious persistence mechanisms, and oversee seamless business recovery, minimizing downtime and drastically reducing the impact of the cyberattack.",
    "icon": <AlertCircle className="w-8 h-8 text-white" />
  },
  {
    "id": "threat-intel",
    "title": "Threat Intelligence",
    "description": "We proactively defend your organization by integrating actionable, real-time threat intelligence. By analyzing global threat actor campaigns, monitoring dark web activity, and extracting high-fidelity Indicators of Compromise (IOCs), we continuously tune your firewalls and EDR rules to anticipate and block targeted cyberattacks.",
    "icon": <ShieldAlert className="w-8 h-8 text-white" />
  },
  {
    "id": "antiphishing",
    "title": "Antiphishing",
    "description": "Over 90% of breaches start with an email. Our comprehensive antiphishing solutions combine advanced email filtering gateways, behavioral analysis, and automated mitigation to neutralize credential harvesting, spear-phishing, and social engineering attacks targeting your employees.",
    "icon": <MailWarning className="w-8 h-8 text-white" />
  },
  {
    "id": "vulnerability-watch",
    "title": "Veille sur les vulnérabilités",
    "description": "Empower your IT teams with our specialized technological watch. We continuously monitor zero-day disclosures, CVE databases, and exploit trends specifically relevant to your technological stack, delivering contextualized alerts and immediate remediation guidance.",
    "icon": <Eye className="w-8 h-8 text-white" />
  }
];

export const metadata = {
  title: "SOC Management | Keystone",
  description: "Comprehensive 24/7 monitoring, vulnerability scanning, incident management, threat intelligence, and anti-phishing solutions to protect your organization.",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-medium tracking-wide uppercase">Defensive Security</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                SOC<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Management</span>
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

      <section className="pt-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Our Defensive Approach
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-6" />
            <p className="text-zinc-600 text-lg">
              A rigorous methodology to bolster your resilience against cyber threats with cutting-edge telemetry, detection, and intelligence capabilities.
            </p>
          </div>
          <InteractiveProcessSection steps={steps} theme="blue"/>
        </div>
      </section>

      <BlueSectionDivider />

      <section className="bg-zinc-50 mt-20">
        <CombinedDeepDive />
      </section>

      <BlueSectionDivider />

      <ContactCTASection />
      
    </main>
  );
}