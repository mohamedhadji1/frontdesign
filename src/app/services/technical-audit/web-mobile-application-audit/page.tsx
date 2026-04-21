"use client";

import { AnimatedBreadcrumb } from "@/components/ui/AnimatedBreadcrumb";
import React from "react";
import Link from "next/link";
import { ContactCTASection } from "@/components/about/ContactCTASection";
import { CheckCircle2, Shield, Search, Lock, Code2, Server } from "lucide-react";
import { motion } from "framer-motion";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { DEFCTASection } from "../../defensive-security/soc-management/DEFCTASection";

export default function WebMobileAppAuditPage() {
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
              className="inline-flex items-center flex-wrap gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link><span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span><Link href="/services/technical-audit" className="hover:text-blue-400 transition-colors break-keep">Technical Audit</Link><span className="text-blue-500/50 flex flex-nowrap shrink-0">/</span><span className="text-blue-400">Web Mobile Application Audit</span>
              </div>
            </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Web & Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Application Audit</span>
              </h1>
              
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Code defines the business logic of our era. We hunt down architectural logic flaws, authorization bypasses, and injection vulnerabilities in React, Next.js, Java, and modern mobile frameworks before malicious actors capitalize on them. 
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25">
                  Schedule App Assessment
                </Link>
                <Link href="/services/blue-team" className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                  Back to blue Team
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-4">
                <img 
                  src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1200&auto=format&fit=crop" 
                  alt="Web & Mobile Application Audit" 
                  className="w-full h-[400px] rounded-xl object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      <CyberSectionDivider theme="blue"/>
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Advanced Application Testing Strategies
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto mb-8" />
            <p className="text-zinc-600 text-lg leading-relaxed">
              We bypass automated scanner limitations through manual, expert-driven exploitation. We combine Open Source Intelligence (OSINT), Dynamic Analysis (DAST), and intricate backend API manipulation to uncover deeply hidden logic vulnerabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Identification (DAST & SAST)</h3>
              <p className="text-zinc-600">Investigating OWASP Top 10 vulnerabilities, analyzing source code, and dynamically tracking unauthenticated input streams.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-white transition-colors duration-300">Targeted Exploitation</h3>
                <p className="text-zinc-600 group-hover:text-white/90 transition-colors duration-300">Actively launching Cross-Site Scripting (XSS), SQLi, and Business Logic Bypass payloads to ascertain impact severity.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Architecture Remediation</h3>
              <p className="text-zinc-600">Guiding developers through secure coding paradigms, input sanitization libraries, and modern DevSecOps integration.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="width-10% mx-auto">
      <CyberSectionDivider theme="blue" />
      </div>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Comprehensive Perimeter Coverage</h2>
              <p className="text-lg text-zinc-600 mb-8">
                Securing a single layer is insufficient. Our penetration testers reverse engineer binaries, inspect JWT tokens, and manipulate API schemas across the ecosystem. 
              </p>
              
              <ul className="space-y-4">
                {[
                  "Extensive OWASP Web, APIs, and Mobile testing methodology.",
                  "Broken Object Level Authorization (BOLA) and Privilege Escalation hunts.",
                  "Binary reversing and jailbreak/root detection bypass on iOS/Android.",
                  "Evaluation of GraphQL, REST, and SOAP schema architectures.",
                  "Deep repository analysis for hardcoded secrets, AWS keys, and JWT flaws.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-blue-50 rounded-3xl transform rotate-3" />
              <div className="bg-white border border-zinc-100 shadow-xl rounded-3xl p-8 relative z-10">
                <h3 className="text-xl font-bold text-zinc-900 mb-6">The Keystone Advantage</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">Manual Reverse Engineering</h4>
                      <p className="text-sm text-zinc-500 mt-1">Tools are noisy. We emphasize expert manual review to find intricate logic flaws.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">Dev-Centric Reporting</h4>
                      <p className="text-sm text-zinc-500 mt-1">Clear reproduction steps (cURL, Burp) and exact line-of-code fixes for your engineering teams.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">Post-Fix Validation</h4>
                      <p className="text-sm text-zinc-500 mt-1">Dedicated sessions to verify that every deployed patch successfully nullifies the vulnerability.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="width-10% mx-auto">
        <CyberSectionDivider theme="blue"/>
      </div>
      <DEFCTASection />
    </main>
  );
}