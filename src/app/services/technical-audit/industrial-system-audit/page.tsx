import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldAlert, FileText, Search, Activity, Cpu, Hexagon, Unplug } from "lucide-react";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { ContactCTASection } from "@/components/about/ContactCTASection";

const industrialSteps = [
  {
    id: "architecture",
    title: "Purdue Model Architecture Review",
    description: "Mapping the entire OT infrastructure against the Purdue Enterprise Reference Architecture to assess air-gaps, DMZs, and segregation boundaries between IT and OT.",
    icon: <Hexagon className="w-8 h-8 text-white" />
  },
  {
    id: "passive",
    title: "Passive Network Discovery",
    description: "Conducted with zero disruption. We utilize deep packet inspection to trace SCADA communications and identify rogue devices mapping the environment safely.",
    icon: <Search className="w-8 h-8 text-white" />
  },
  {
    id: "protocol",
    title: "Industrial Protocol Analysis",
    description: "Deep technical review of plaintext protocols (Modbus, DNP3, S7, IEC 60870) for authentication bypasses or command injection vulnerabilities.",
    icon: <Activity className="w-8 h-8 text-white" />
  },
  {
    id: "plc",
    title: "PLC & Firmware Vulnerability Assessment",
    description: "Safe-mode checks against programmable logic controllers and HMIs to identify out-of-date firmware, default credentials, and embedded backdoors.",
    icon: <Cpu className="w-8 h-8 text-white" />
  },
  {
    id: "physical",
    title: "Physical Layer & Endpoint Security",
    description: "Reviewing the physical security governing critical operational endpoints, engineering workstations, and their susceptibility to USB-borne malware.",
    icon: <Unplug className="w-8 h-8 text-white" />
  },
  {
    id: "report",
    title: "OT-Specific Remediation Roadmap",
    description: "Actionable roadmap tailored for industrial environments where patching isn't always viable, emphasizing compensating controls and network segregation.",
    icon: <FileText className="w-8 h-8 text-white" />
  }
];

export const metadata = {
  title: "ICS/SCADA Industrial Security Audit | Keystone",
  description: "Protect critical infrastructure. Keystone provides passive discovery and safe OT security assessments aligning with IEC 62443 and the Purdue Model.",
};

export default function IndustrialSystemAuditPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm font-medium tracking-wide uppercase">Technical Audit</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Safeguarding Critical <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">ICS & SCADA</span> Infrastructure
              </h1>
              
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                The convergence of OT and IT introduces massive kinetic risks. Our industrial audits prioritize extreme safety and availability, utilizing passive network monitoring and deep protocol analysis to secure PLCs, HMIs, and the vital components of your operations.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25">
                  Request an OT Audit
                </Link>
                <Link href="/services/technical-audit" className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                  Back to Audits
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                 <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Zero-Disruption Industrial Methodology
            </h2>
            <div className="h-1.5 w-20 bg-red-600 rounded-full mb-6" />
            <p className="text-zinc-600 text-lg">
              Understanding the fragility of Legacy OT hardware, our approach aligns strictly with IEC 62443 standards and emphasizes entirely non-disruptive analytical techniques.
            </p>
          </div>
          <InteractiveProcessSection steps={industrialSteps} />
        </div>
      </section>

      <ContactCTASection />
    </main>
  );
}