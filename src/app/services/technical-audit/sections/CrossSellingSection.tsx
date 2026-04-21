"use client";

import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

export function CrossSellingSection() {
  const services = [
    {
      title: "Web & Mobile Application Audit",
      desc: "Analyze the security of your internal, web, and mobile applications to identify OWASP vulnerabilities, business logic errors, and API weaknesses.",
      href: "/services/technical-audit"
    },
    {
      title: "Physical Penetration Testing",
      desc: "Comprehensive evaluation of premises security, including access control, surveillance evasion, and employee social engineering vectors.",
      href: "/services/physical-penetration-testing"
    },
    {
      title: "Internal & External Penetration Test",
      desc: "Realistic cyber attack simulations originating from the public Internet or a compromised host inside your internal network.",
      href: "/services/red-team"
    }
  ];

  return (
    <section className="py-10 bg-zinc-50 border-t border-zinc-200">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center gap-4 mb-6 text-red-500 font-semibold tracking-wider text-sm uppercase">
                <h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
                  <span className="w-8 h-px bg-red-600/30"></span>
                  Infrastructure Assessment
                  <span className="w-8 h-px bg-red-600/30"></span>
                </h2>            
            </div>
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-zinc-900">
            Go Beyond
          </h2>
          <p className="text-zinc-600">
            Combine your Technical Audit with our specialized offensive security and assessment services for a 360-degree view of your organization's resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.a
              href={service.href}
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group block bg-white p-8 rounded-2xl border border-zinc-200 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Link className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="text-red-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <span>→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}