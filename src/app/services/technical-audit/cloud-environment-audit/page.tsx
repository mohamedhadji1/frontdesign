"use client";

import { AnimatedBreadcrumb } from "@/components/ui/AnimatedBreadcrumb";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldAlert, FileText, CheckCircle, Settings, Activity, Network, Database, Lock } from "lucide-react";
import { InteractiveProcessSection } from "@/components/ui/InteractiveProcessSection";
import { ContactCTASection } from "@/components/about/ContactCTASection";
import { motion } from "framer-motion";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { DEFCTASection } from "../../defensive-security/soc-management/DEFCTASection";
import { RedTeamCTASection } from "../../red-team/sections/RedTeamCTASection";

const cloudSteps = [
  {
    id: "architecture",
    title: "Architecture & IAM Assessment",
    description: "We analyze your multi-cloud architecture and Identity & Access Management (IAM) policies against CIS benchmarks to detect privilege escalation vectors and overly permissive roles.",
    icon: <Lock className="w-8 h-8 text-white" />
  },
  {
    id: "network",
    title: "Network & Perimeter Security",
    description: "Deep dive into Security Groups, VPC endpoints, and WAF configurations to identify exposed critical services and enforce zero-trust network boundaries.",
    icon: <Network className="w-8 h-8 text-white" />
  },
  {
    id: "storage",
    title: "Data Protection & Encryption",
    description: "Validating encryption-at-rest (KMS, HSM) and in-transit. Assessing S3, Blob Storage, and databases for public exposure and proper lifecycle policies.",
    icon: <Database className="w-8 h-8 text-white" />
  },
  {
    id: "compliance",
    title: "Compliance & Industry Standards",
    description: "Benchmarking configurations automatically against industry standards such as NIST 800-53, HIPAA, PCI-DSS, and CIS Azure/AWS Foundations.",
    icon: <CheckCircle className="w-8 h-8 text-white" />
  },
  {
    id: "vulnerability",
    title: "Control Plane & Container Audit",
    description: "Evaluating Kubernetes (EKS/AKS/GKE) configurations, serverless functions, and CI/CD pipelines for misconfigurations leading to container escape or supply chain attacks.",
    icon: <Settings className="w-8 h-8 text-white" />
  },
  {
    id: "remediation",
    title: "Actionable Roadmap & Reporting",
    description: "Comprehensive reporting with tailored remediation strategies, providing technical teams with precise CloudFormation/Terraform fixes and executive summaries.",
    icon: <FileText className="w-8 h-8 text-white" />
  }
];

export default function CloudEnvironmentAuditPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
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
                <Link href="/services" className="hover:text-red-400 transition-colors">Services</Link><span className="text-red-500/50 flex flex-nowrap shrink-0">/</span><Link href="/services/technical-audit" className="hover:text-red-400 transition-colors break-keep">Technical Audit</Link><span className="text-red-500/50 flex flex-nowrap shrink-0">/</span><span className="text-red-400">Cloud Environment Audit</span>
              </div>
            </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Hardening the Perimeter of Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Cloud Infrastructure</span>
              </h1>
              
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                As your organization scales, cloud misconfigurations become the primary attack vector. Our profound technical assessments unearth complex IAM privilege escalations, insecure storage configurations, and Kubernetes weaknesses before they can be exploited. 
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25">
                  Request a Cloud Audit
                </Link>
                <Link href="/services/technical-audit" className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                  Back to Audits
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CyberSectionDivider theme="red" /> 
      <section className="py-10 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-red-600/30"></span>
              Our Cloud Audit Methodology
              <span className="w-8 h-px bg-red-600/30"></span>
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
              Technical Steps
            </h3>
            <p className="text-zinc-600 text-lg">
              A rigorous, step-by-step technical methodology to validate the security posture and compliance of your modern cloud workloads (AWS, Azure, GCP).
            </p>
          </div>
          <InteractiveProcessSection steps={cloudSteps} theme="red"/>
        </div>
      </section>
      <div className="w-[0%] mx-auto">
        <CyberSectionDivider theme="red"/>
      </div>
      <RedTeamCTASection />
    </main>
  );
}