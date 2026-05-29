"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Users,
  TrendingDown,
  BookOpen,
  Award,
  Settings,
  Target,
  Lightbulb,
  GraduationCap,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const whyEssentialItems = [
  {
    title: "Strengthen Skills",
    description:
      "Develop security expertise to better detect and counter threats. Empower your team with the knowledge to act decisively when facing cyber incidents.",
    icon: Shield,
  },
  {
    title: "Create a Security Culture",
    description:
      "Involve the entire team in the protection of the company's data and assets. Security is everyone's responsibility, not just the IT department.",
    icon: Users,
  },
  {
    title: "Reduce Risks",
    description:
      "Reduce the chances of data and system compromise through better preparation. A well-trained team is your strongest line of defense.",
    icon: TrendingDown,
  },
];

const pedagogicalApproachItems = [
  {
    title: "Practical & Theoretical Courses",
    description:
      "Programs that combine theoretical knowledge and practical exercises, providing participants a complete learning experience to acquire applicable cybersecurity skills.",
    icon: BookOpen,
  },
  {
    title: "Expert Instructors",
    description:
      "Courses led by certified professionals with extensive field experience. Our instructors bring real-world scenarios and insights from the frontlines of cybersecurity.",
    icon: Award,
  },
  {
    title: "Customized Programs",
    description:
      "Training modules that can be adapted to the specific needs and maturity level of your organization, ensuring maximum relevance and impact for every participant.",
    icon: Settings,
  },
];

export default function TrainingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/vids/videoplayback.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 sm:bg-linear-to-r sm:from-black/85 sm:via-black/45 sm:to-transparent" />
          <div className="absolute inset-0 bg-[url('/background/vector/cyber-matrix.svg')] bg-cover bg-center opacity-15 mix-blend-screen" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center lg:items-start lg:text-left h-full justify-center pt-28 sm:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 text-red-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              <Link href="/services" className="hover:text-red-300 transition-colors">Services</Link>
              <ChevronRight size={8} />
              <span className="text-white/60">Training</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase"
            >
              Information Security{" "}
                Training
            </motion.h1>

            <HeroTypeLine
              items={[
                "Strengthen Key Skills",
                "Protect Your Assets",
                "Build Cyber Resilience",
              ]}
              className="mb-6 text-red-400"

            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              Information security training is a fundamental element to ensure the robustness of your organization against growing digital threats. At KEYSTONE, our training program is designed to educate and equip your team with the knowledge and skills necessary to face the current cybersecurity challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl"
              >
                Explore Training Programs <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider theme="red" />
      <SectionDivider title="Training" />
      <section className="mb-20 bg-white relative overflow-hidden">
        <div className="px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <SectionDivider title="WHY IT MATTERS" className="mb-12 lg:mb-16" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20 lg:mb-28"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-4xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
              >
                Why Information Security Training is Essential
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-700 font-light leading-relaxed max-w-2xl mt-6">
                Information security is not just a matter of technology; it relies on the skills and awareness of your team. Our training empowers every member of your organization to be a frontline defender.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyEssentialItems.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-8">
                      <div className="inline-flex p-4 bg-red-100 rounded-lg">
                        <item.icon size={28} className="text-red-600" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-light text-zinc-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-zinc-700 leading-relaxed font-light text-base flex-grow">
                      {item.description}
                    </p>
                    <motion.div
                      className="mt-8 h-0.5 w-0 rounded-full bg-red-600 group-hover:w-12 transition-all duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* Section 2: Our Pedagogical Approach */}
      <section className="mb-20 bg-white relative overflow-hidden">
        <div className="px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <SectionDivider title="OUR APPROACH" className="mb-12 lg:mb-16" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20 lg:mb-28"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-4xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
              >
                Our Pedagogical Approach
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-700 font-light leading-relaxed max-w-2xl mt-6">
                Our training programs blend theory and practice, delivered by industry experts and customized to your organization&apos;s unique threat landscape and operational needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pedagogicalApproachItems.map((item, idx) => {
                const isRed = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-8">
                        <div className={`inline-flex p-4 rounded-lg ${isRed ? 'bg-red-100' : 'bg-blue-100'}`}>
                          <item.icon size={28} className={isRed ? 'text-red-600' : 'text-blue-600'} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-light text-zinc-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-zinc-700 leading-relaxed font-light text-base flex-grow">
                        {item.description}
                      </p>
                      <motion.div
                        className={`mt-8 h-0.5 w-0 rounded-full group-hover:w-12 transition-all duration-500 ${isRed ? 'bg-red-600' : 'bg-blue-600'}`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CyberSectionDivider theme="red" />

      {/* Section 3: Invest in Skills */}
      <section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/3 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/3 rounded-full blur-3xl" />
        </div>
        <div className="px-6 lg:px-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SectionDivider title="INVESTMENT & OUTCOMES" className="mb-12 lg:mb-16" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20 lg:mb-28 flex flex-col"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-4xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.95]"
              >
                Invest in Skills
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-700 font-light leading-relaxed max-w-2xl mt-6">
                By collaborating with KEYSTONE for your training needs, you are investing in the long-term security and resilience of your organization. We support you in building a team that is prepared, vigilant, and capable of navigating the complex cybersecurity landscape.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <div className="inline-flex p-4 bg-red-100 rounded-lg">
                      <Target size={28} className="text-red-600" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-zinc-900 mb-4">
                    Targeted Expertise
                  </h3>
                  <p className="text-zinc-700 leading-relaxed font-light text-base flex-grow">
                    Build specialized competencies aligned to your organization&apos;s specific risk profile and industry requirements.
                  </p>
                  <motion.div
                    className="mt-8 h-0.5 w-0 rounded-full bg-red-600 group-hover:w-12 transition-all duration-500"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <div className="inline-flex p-4 bg-blue-100 rounded-lg">
                      <Lightbulb size={28} className="text-blue-600" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-zinc-900 mb-4">
                    Proactive Defense
                  </h3>
                  <p className="text-zinc-700 leading-relaxed font-light text-base flex-grow">
                    Transform reactive security postures into proactive defense strategies through continuous skill development.
                  </p>
                  <motion.div
                    className="mt-8 h-0.5 w-0 rounded-full bg-blue-600 group-hover:w-12 transition-all duration-500"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <div className="inline-flex p-4 bg-red-100 rounded-lg">
                      <GraduationCap size={28} className="text-red-600" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-zinc-900 mb-4">
                    Certified Excellence
                  </h3>
                  <p className="text-zinc-700 leading-relaxed font-light text-base flex-grow">
                    Achieve recognized certifications and credentials that validate your team&apos;s cybersecurity capabilities.
                  </p>
                  <motion.div
                    className="mt-8 h-0.5 w-0 rounded-full bg-red-600 group-hover:w-12 transition-all duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CyberSectionDivider />

      {/* Get Ready + Our Partners Section */}
      <section className="py-28 bg-zinc-900 relative overflow-hidden pt-10 pb-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-600/8 rounded-full blur-[120px]" />
        </div>

        <div className="px-6 lg:px-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Left: Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-12 h-1 bg-red-600 rounded-full mb-8" />
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-8 tracking-tighter uppercase leading-[0.95]">
                  Get Ready
                </h2>
                <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed">
                  Get ready to strengthen your defences, enhance your skills, and face threats with confidence through our comprehensive information security training programs.
                </p>
                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-xs py-4 px-8 rounded-full transition-all shadow-xl"
                >
                  Start Your Journey <ArrowRight size={16} />
                </Link>
              </motion.div>

              {/* Right: Partner Logos */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="flex flex-col items-center lg:items-end"
              >
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8">
                  Our Partners
                </p>
                <div className="flex items-center gap-8 flex-wrap justify-center lg:justify-end">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-red-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative rounded-2xl p-6 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/certif/PECB.png"
                        alt="PECB"
                        width={100}
                        height={100}
                        className="object-contain w-24 h-24"
                      />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-red-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative rounded-2xl p-6 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/certif/EC-council.png"
                        alt="EC-Council"
                        width={100}
                        height={100}
                        className="object-contain w-24 h-24"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
