"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function DetailsSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="relative w-full py-24 px-6 md:px-12 bg-white overflow-hidden text-zinc-900">
      {/* Background pattern if provided, roughly estimated by radial gradient or simple shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-400 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          <motion.h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Cyber Attack Simulation
          </motion.h2>

          <div className="text-lg text-zinc-600 space-y-4 max-w-xl">
            <p>
              We replicate real-world cyberattacks to uncover vulnerabilities,
              test your defenses, and help your team respond more effectively.
            </p>
            <p>
              A proactive way to strengthen your security before real threats occur.
            </p>
          </div>

          <ul className="space-y-4 pt-4 flex flex-col text-lg text-zinc-600">
            {[
              "Adversary Emulation",
              "Red Team Exercises",
              "Technical Exploits",
              "Incident Response Evaluation",
              "Custom Attack Scenarios",
            ].map((item, idx) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-3 font-medium text-zinc-600"
              >
                <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column / Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full max-w-lg relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-[4/3] w-full relative">
            <Image
              src="/background/Offensive/Rectangle 71.png"
              alt="Hacker with laptop"
              fill
              className="object-cover"
            />
            {/* Gradient to darken the image for text readability overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

            {/* Overlay Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
              <div className="mb-4 text-left w-full pl-6">
                <p className="text-red-600 font-semibold text-sm tracking-wide mb-1">
                  Typical Investment
                </p>
                <p className="text-red-600 font-semibold text-sm mb-6">
                  £15,000
                </p>
              </div>

              <p className="text-white text-base md:text-lg font-medium leading-snug mb-10 max-w-[85%] text-left pl-6 w-full">
                Protect your website or web application from real-world cyber threats.
              </p>

              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-red-600/30"
              >
                Request Service
                <span className="group-hover:translate-x-1 transition-transform font-bold ml-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}