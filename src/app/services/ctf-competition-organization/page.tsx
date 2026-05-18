"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  ClipboardCheck,
  Flag,
  Gamepad2,
  GraduationCap,
  MonitorPlay,
  ShieldCheck,
  Swords,
  Trophy,
  Users,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const eventFormats = [
  {
    title: "Graduated Difficulty",
    description:
      "Competitions are adapted to different skill levels, from beginner to expert, so every participant has a meaningful challenge.",
    icon: GraduationCap,
  },
  {
    title: "Tailored Themes",
    description:
      "Challenges can be built around your sector, technology stack, or the security concerns that matter most to your organization.",
    icon: Flag,
  },
  {
    title: "Flexible Duration & Format",
    description:
      "We organize short or long competitions, remotely or on-site, to match your team's rhythm and operational constraints.",
    icon: MonitorPlay,
  },
  {
    title: "Realistic Scenarios",
    description:
      "Each exercise is grounded in practical cyber scenarios that test problem-solving, collaboration, and technical reflexes.",
    icon: Swords,
  },
  {
    title: "Expert Facilitation",
    description:
      "Our team provides guidance throughout the event so participants keep learning while staying engaged and challenged.",
    icon: Users,
  },
  {
    title: "Post-Event Analysis",
    description:
      "You receive structured feedback on team performance to highlight strengths, learning progress, and improvement priorities.",
    icon: ClipboardCheck,
  },
];

const outcomes = [
  {
    title: "Practical Skill Building",
    description:
      "CTFs turn theory into hands-on action, helping teams reinforce cyber skills through realistic problem-solving.",
    icon: ShieldCheck,
  },
  {
    title: "Playful Team Engagement",
    description:
      "The game-based format increases participation, collaboration, and motivation across technical and non-technical profiles.",
    icon: Gamepad2,
  },
  {
    title: "Measurable Progress",
    description:
      "Structured scoring and debriefing make it easier to identify capability gaps and track development over time.",
    icon: BarChart3,
  },
];

export default function CtfCompetitionOrganizationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden">
      {/* 1. Deep Cyber Hero Section with Background Video */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/vids/herosection.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 sm:bg-linear-to-r sm:from-black/85 sm:via-black/45 sm:to-transparent" />
          <div className="absolute inset-0 bg-[url('/background/vector/cyber-matrix.svg')] bg-cover bg-center opacity-15 mix-blend-screen" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center lg:items-start lg:text-left h-full justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl pt-10"
          >
            <div className="mb-6 inline-flex items-center gap-3 text-red-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              <Link href="/services" className="hover:text-red-300 transition-colors">Services</Link>
              <ChevronRight size={8} />
              <span className="text-white/60">CTF Competition Organization</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              CTF Competition <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Organization</span>
            </h1>

            <HeroTypeLine
              items={["Game-based cyber training", "Capture the flag design", "Team learning through challenge"]}
              className="mb-6"
            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              Capture The Flag competitions are more than games. Keystone designs custom CTF events that transform technical challenges into an engaging and valuable learning experience for your team.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
              <Link
                href="/contact?service=ctf-competition-organization"
                className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl"
              >
                Organize a CTF Event <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider theme="red" />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-50 py-20"
      >
        <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] max-w-7xl">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-600">
              An Overview Of CTFs
            </p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl lg:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Realistic cyber exercises that train teams to Think, React & Collaborate
            </motion.h2>
            <p className="mb-6 text-lg leading-relaxed text-zinc-600">
              CTF events simulate real-world cybersecurity situations in which
              participants solve a sequence of challenges to capture the flag.
              They blend technical depth, pressure, and teamwork into a format
              that is both memorable and highly effective for upskilling.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <Trophy className="mb-3 h-6 w-6 text-red-600" />
                <p className="font-semibold text-zinc-900 text-sm uppercase tracking-wider">Immersive learning</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <Users className="mb-3 h-6 w-6 text-red-600" />
                <p className="font-semibold text-zinc-900 text-sm uppercase tracking-wider">Team coordination</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <Flag className="mb-3 h-6 w-6 text-red-600" />
                <p className="font-semibold text-zinc-900 text-sm uppercase tracking-wider">Hands-on challenge</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-red-100 via-transparent to-zinc-100 blur-2xl" />
            <div className="relative rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-xl">
              <Image
                src="https://ziedhamdi.com/wp-content/uploads/2025/01/ctf.jpg"
                alt="Cybersecurity training event for CTF competition organization"
                width={1200}
                height={800}
                className="h-[340px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="bg-white py-20"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-600">
              Our Tailored CTF Events
            </p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl lg:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Custom competitions designed around your Team & Objectives
            </motion.h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              We adapt each event to your learning goals, team maturity, and
              operational context so the experience feels relevant, demanding,
              and actionable.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {eventFormats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 opacity-70" />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-zinc-900 uppercase tracking-tighter group-hover:text-red-600 transition-colors italic">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-zinc-600 font-medium">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="py-20 text-zinc-900"
        style={{ backgroundColor: "lab(95 0 -0.01)" }}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-500">
              Why It Works
            </p>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl lg:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              A cybersecurity learning format people actually Remember
            </motion.h2>

            <p className="text-lg leading-relaxed text-zinc-600 font-medium">
              CTF competitions bring together challenge, collaboration, and feedback
              in a way that helps teams build stronger habits and sharper reflexes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {outcomes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm"
                >
                  <Icon className="mb-5 h-8 w-8 text-red-500" />

                  <h3 className="mb-3 text-xl font-bold text-zinc-900 uppercase tracking-tighter italic">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-zinc-600 font-medium">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <CyberSectionDivider theme="red" />
      <ContactCTASection />
    </main>
  );
}
