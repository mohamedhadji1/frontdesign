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
    <main className="flex min-h-screen flex-col bg-white">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f24_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f24_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_68%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.22),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.14),transparent_28%)]" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="flex flex-col items-start gap-16 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-red-400">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500 animate-pulse" />
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-wide">
                  <Link href="/services" className="transition-colors hover:text-red-300">
                    Services
                  </Link>
                  <span className="text-red-500/50">/</span>
                  <span className="text-red-300">CTF Competition Organization</span>
                </div>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                CTF Competition
                <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                  Organization
                </span>
              </h1>

              <p className="mb-4 max-w-2xl text-xl text-zinc-300">
                Develop cybersecurity skills through play.
              </p>

              <HeroTypeLine
                items={["Game-based cyber training", "Capture the flag design", "Team learning through challenge"]}
              />

              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
                Capture The Flag competitions are more than games. They create
                practical, engaging opportunities to strengthen cybersecurity
                capabilities. Keystone designs custom CTF events that transform
                technical challenges into a valuable learning experience for
                your team.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?service=ctf-competition-organization"
                  className="rounded-lg bg-red-600 px-8 py-3.5 font-medium text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:bg-red-700"
                >
                  Organize a CTF Event
                </Link>
                <Link
                  href="/services"
                  className="rounded-lg border border-white/10 bg-white/5 px-8 py-3.5 font-medium text-white transition-all duration-300 hover:bg-white/10"
                >
                  Back to Services
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 p-4 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/15 via-transparent to-transparent" />
                <Image
                  src="https://ziedhamdi.com/wp-content/uploads/2025/01/ctf.jpg"
                  alt="CTF competition participants solving cybersecurity challenges"
                  width={1200}
                  height={800}
                  className="relative h-[420px] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
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
        <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-600">
              An Overview Of CTFs
            </p>
            <motion.h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 lg:text-4xl">
              Realistic cyber exercises that train teams to think, react, and
              collaborate
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
                <p className="font-semibold text-zinc-900">Immersive learning</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <Users className="mb-3 h-6 w-6 text-red-600" />
                <p className="font-semibold text-zinc-900">Team coordination</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <Flag className="mb-3 h-6 w-6 text-red-600" />
                <p className="font-semibold text-zinc-900">Hands-on challenge</p>
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
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-600">
              Our Tailored CTF Events
            </p>
            <motion.h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 lg:text-4xl">
              Custom competitions designed around your team and objectives
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
                  <motion.h2 className="mb-3 text-xl font-bold text-zinc-900">
                    {item.title}
                  </motion.h2>
                  <p className="leading-relaxed text-zinc-600">
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
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-500">
              Why It Works
            </p>

            <motion.h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-4xl">
              A cybersecurity learning format people actually remember
            </motion.h2>

            <p className="text-lg leading-relaxed text-zinc-600">
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

                  <motion.h2 className="mb-3 text-xl font-semibold text-zinc-900">
                    {item.title}
                  </motion.h2>

                  <p className="leading-relaxed text-zinc-600">
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
