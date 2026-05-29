"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Boxes, FileSearch, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";

export function CrossSellingSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 1 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 1 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const services = [
    {
      title: "Web & Mobile Assessment",
      desc: "Extend the same evidence-led testing model to applications, APIs, and mobile environments.",
      href: "/services/web-mobile-application-assessment",
      icon: FileSearch,
    },
    {
      title: "Governance Risk Compliance",
      desc: "Turn assessment evidence into policy, risk ownership, and compliance alignment.",
      href: "/services/governance-risk-compliance",
      icon: ShieldCheck,
    },
    {
      title: "Defensive Security",
      desc: "Feed validated findings into monitoring, vulnerability management, and incident readiness.",
      href: "/services/defensive-security",
      icon: Boxes,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      className="bg-white text-zinc-900 py-24 md:py-10 relative overflow-hidden group border-t border-zinc-200"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.08), transparent 80%)`,
        }}
      />

      <div className="absolute inset-0 bg-white z-0 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mb-16 mx-auto text-center">
          <motion.h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-red-600/30" />
            Connected Services
            <span className="w-8 h-px bg-red-600/30" />
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight uppercase mx-auto max-w-3xl text-center"
          >
            Go Beyond A Point-In-Time Review
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-600 text-lg md:text-xl leading-relaxed mx-auto text-center max-w-2xl"
          >
            Pair the assessment with adjacent services to strengthen applications, governance, and continuous defense.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Link
                href={service.href}
                className="flex h-full flex-col gap-6 p-6 bg-zinc-50 border border-zinc-200 transition-all hover:border-red-300 group relative overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex h-10 w-10 items-center justify-center border border-zinc-200 bg-white text-red-600 group-hover:border-red-200 transition-colors">
                  <service.icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3 uppercase tracking-wide group-hover:text-red-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 font-medium text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 transition-all group-hover:gap-4">
                  Learn More
                  <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
