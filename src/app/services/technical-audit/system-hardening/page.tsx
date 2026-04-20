import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldAlert, FileText, CheckCircle, Settings, Monitor, Lock, Code2 } from "lucide-react";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { ContactCTASection } from "@/components/about/ContactCTASection";

const hardeningSteps = [
  {
    id: "baseline",
    title: "Baseline Configuration Review",
    description: "Evaluating your current OS infrastructure against CIS Benchmarks and Microsoft Security Baselines to identify fundamental misconfigurations.",
    icon: <Settings className="w-8 h-8 text-white" />
  },
  {
    id: "identity",
    title: "Active Directory & Privileges",
    description: "Deep audit of Active Directory group policies (GPOs), Kerberos configurations, and IAM to prevent lateral movement and credential dumping attacks.",
    icon: <Lock className="w-8 h-8 text-white" />
  },
  {
    id: "services",
    title: "Attack Surface Reduction",
    description: "Disabling legacy protocols (SMBv1, NTLMv1), optimizing firewall rules, and removing unnecessary services that expose the underlying server layers.",
    icon: <Monitor className="w-8 h-8 text-white" />
  },
  {
    id: "memory",
    title: "Kernel & Anti-Exploitation",
    description: "Verifying the implementation of advanced memory protections like ASLR, DEP, and Credential Guard to thwart sophisticated zero-day execution.",
    icon: <Code2 className="w-8 h-8 text-white" />
  },
  {
    id: "telemetry",
    title: "Logging & Telemetry Enhancement",
    description: "Ensuring high-fidelity logs (Sysmon, Windows Event Forwarding) are correctly configured enabling SOC teams to detect malicious runtime activity.",
    icon: <Activity className="w-8 h-8 text-white" />
  },
  {
    id: "remediation",
    title: "Gold Image Integration",
    description: "Providing actionable PowerShell/Ansible scripts to integrate hardening directly into a deployable gold image for future CI/CD orchestration.",
    icon: <FileText className="w-8 h-8 text-white" />
  }
];

export const metadata = {
  title: "System Hardening Security Services | Keystone",
  description: "Reduce your infrastructure attack surface. Our system hardening services align your endpoints and servers with CIS Benchmarks.",
};

export default function SystemHardeningPage() {
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
                Endpoint & Server <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">System Hardening</span>
              </h1>
              
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Securing an environment requires more than deploying an EDR. True resilience demands closing inherent operating system loopholes. We methodically reduce the attack surface of your Windows and Linux fleets to frustrate lateral movement and persistent threats.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25">
                  Request Hardening
                </Link>
                <Link href="/services/technical-audit" className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                  Back to Audits
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                 <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Our Hardening Execution Plan
            </h2>
            <div className="h-1.5 w-20 bg-red-600 rounded-full mb-6" />
            <p className="text-zinc-600 text-lg">
              We translate abstract CIS Benchmarks and strict DoD STIG recommendations into technical, deployable parameters tailored avoiding operational downtime.
            </p>
          </div>
          <InteractiveProcessSection steps={hardeningSteps} />
        </div>
      </section>

      <ContactCTASection />
    </main>
  );
}

// Activity icon from lucide requires export
import { Activity } from "lucide-react";
