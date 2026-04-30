"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Gamepad2,
  Trophy,
  Users,
  ShieldCheck,
  Target,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import Image from "next/image";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const trainingServices = [
  {
    title: "Awareness Programs",
    description: "Interactive programs designed to transform employees into a strong link in your security chain. From workshops to gamified experiences, we build a durable security culture.",
    href: "/services/awareness/awareness-workshops",
    icon: ShieldCheck,
    color: "bg-blue-600",
    shadow: "shadow-blue-600/20",
    features: ["Workshops", "Escape Rooms", "Serious Games"]
  },
  {
    title: "Cyber Exercise",
    description: "Scenario-driven readiness and interactive response drills. Prepare your teams for disruption, sharpen investigation skills, and respond with confidence in high-pressure scenarios.",
    href: "/services/cyber-exercise",
    icon: Target,
    color: "bg-red-600",
    shadow: "shadow-red-600/20",
    features: ["Crisis Management", "Incident Response", "Business Continuity"]
  },
  {
    title: "CTF Competition Organization",
    description: "Develop cybersecurity skills through play. Custom-designed Capture The Flag events that transform technical challenges into a valuable learning experience for your team.",
    href: "/services/ctf-competition-organization",
    icon: Trophy,
    color: "bg-zinc-900",
    shadow: "shadow-zinc-950/20",
    features: ["Technical Challenges", "Team Building", "Skill Assessment"]
  }
];

export default function TrainingAwarenessPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative flex min-h-[70dvh] items-center overflow-hidden bg-zinc-950 px-6 pb-20 pt-32 text-white md:px-12"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f24_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f24_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_68%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.15),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.1),transparent_28%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div

            className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-red-300"
          >
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <Link href="/services" className="hover:text-red-200 transition-colors">Services</Link>
            <span className="text-red-500/50">/</span>
            <span>Training & Awareness</span>
          </motion.div>

          <motion.h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Training & <span className="text-red-600">Awareness</span>
          </motion.h1>
          <motion.p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
            Empower your workforce with the knowledge and skills needed to defend against modern cyber threats through immersive, gamified, and practical learning experiences.
          </motion.p>
        </div>
        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider />

      {/* Main Content */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="px-6 py-24 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div >
            <SectionDivider title="OUR PROGRAMS" className="mb-16" />
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {trainingServices.map((service) => (
              <motion.div
                key={service.title}

                whileHover={{ y: -8 }}
                className="group relative flex flex-col rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:border-red-200 hover:shadow-xl"
              >
                <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${service.color} text-white shadow-lg ${service.shadow}`}>
                  <service.icon className="h-8 w-8" />
                </div>

                <motion.h2 className="mb-4 text-2xl font-bold text-zinc-950 group-hover:text-red-600 transition-colors">
                  {service.title}
                </motion.h2>

                <p className="mb-8 flex-grow text-base leading-relaxed text-zinc-600">
                  {service.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-red-600 group/link"
                >
                  Explore Program
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider />

      {/* Why Training Matters */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        className="bg-zinc-50 py-24 px-6 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-600">The Human Element</p>
              <motion.h2 className="mb-6 text-3xl font-black tracking-tight text-zinc-950 md:text-5xl">
                Turning your weakest link into your strongest defense.
              </motion.h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-600">
                Technology alone isn't enough. Our training programs are built on the principle that an informed and vigilant workforce is the most effective barrier against cyberattacks. We don't just provide information; we build lasting security habits.
              </p>

              <div className="space-y-4">
                {[
                  "80%+ of breaches involve a human element",
                  "Gamified learning improves retention by up to 60%",
                  "Practical exercises build real-world confidence"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-zinc-800">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative aspect-square overflow-hidden rounded-3xl border border-zinc-200 bg-white p-4 shadow-2xl">
              <Image
                src="https://ziedhamdi.com/wp-content/uploads/2025/01/ctf.jpg"
                alt="Cybersecurity Training Session"
                fill
                className="object-cover rounded-2xl p-4"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider />
      <ContactCTASection />
    </main>
  );
}
