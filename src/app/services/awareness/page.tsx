"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  TrendingDown,
  FileCheck,
  Zap,
  Users,
  BarChart3,
  Shield,
  Lightbulb,
  Lock,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const whyCrucialItems = [
  {
    title: "Protect Your Brand",
    description:
      "Avoid data breaches and reputational damage by strengthening secure behaviours within your organization. Your brand's trust is built on the vigilance of your people.",
    icon: ShieldCheck,
  },
  {
    title: "Reduce Risks",
    description:
      "Reduce vulnerabilities by actively involving your team in defending against threats. An aware workforce is the most effective security layer you can deploy.",
    icon: TrendingDown,
  },
  {
    title: "Ensure Compliance",
    description:
      "Be in compliance with safety standards and protect sensitive data by educating your team on best practices. Stay ahead of regulatory requirements.",
    icon: FileCheck,
  },
];

const awarenessApproachItems = [
  {
    title: "Captivating Content",
    description:
      "Interactive workshops, educational games, and immersive simulations that engage and educate simultaneously. We move beyond boring compliance slides to create memorable learning experiences.",
    icon: Zap,
  },
  {
    title: "Personalisation",
    description:
      "Tailored programs, adapted to the specific needs of your company and industry. Every department faces unique threats, and our training reflects that reality.",
    icon: Users,
  },
  {
    title: "Impact Measurement",
    description:
      "Advanced assessment tools to track and measure the evolution of safety-related behaviours and knowledge. Data-driven insights to continuously improve your security posture.",
    icon: BarChart3,
  },
];

export default function AwarenessPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[100vh] min-h-[100vh] flex flex-col justify-center overflow-hidden"
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
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Awareness" },
            ]}
          />
            <motion.h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              Cybersecurity{" "}
              Awareness
            </motion.h1>

            <HeroTypeLine
              items={[
                "Protect Your Business",
                "Educate Your Team",
                "Build Human Resilience",
              ]}
              className="mb-6 text-red-400"
            />

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-10 max-w-3xl mt-6 leading-relaxed">
              Cybersecurity awareness represents much more than just an initiative. It is the key to protecting your business against increasingly sophisticated and emerging threats. KEYSTONE offers a comprehensive awareness approach based on in-depth technical expertise and a customised program tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center lg:items-start">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl"
              >
                Start Your Awareness Program <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider theme="red" />
      <SectionDivider title="Awareness" />
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
                Why is Awareness Crucial?
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-700 font-light leading-relaxed max-w-2xl mt-6">
                In today&apos;s digital landscape, every business is a potential target. Cybersecurity awareness is a fundamental pillar for securing your organization from the inside out.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyCrucialItems.map((item, idx) => (
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

      {/* Section 2: Our Awareness Approach */}
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
                Our Awareness Approach
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-700 font-light leading-relaxed max-w-2xl mt-6">
                Being aware of the importance of making cybersecurity awareness captivating, relevant, and memorable, the experts at KEYSTONE have developed an approach based on security expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awarenessApproachItems.map((item, idx) => {
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

      {/* Section 3: Invest in Prevention */}
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
                Invest in Prevention, Protect Your Future
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-700 font-light leading-relaxed max-w-2xl mt-6">
                By choosing KEYSTONE, you are investing in the protection of your business against growing digital threats. We help you build a proactive security culture, thereby strengthening your resilience and competitiveness in the market.
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
                      <Shield size={28} className="text-red-600" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-zinc-900 mb-4">
                    Proactive Security Culture
                  </h3>
                  <p className="text-zinc-700 leading-relaxed font-light text-base flex-grow">
                    Transform your team from potential vulnerabilities into your strongest line of defense through continuous awareness and engagement.
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
                    Strengthened Resilience
                  </h3>
                  <p className="text-zinc-700 leading-relaxed font-light text-base flex-grow">
                    Build organizational resilience against increasingly sophisticated threats through knowledge and behavioural change.
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
                      <Lock size={28} className="text-red-600" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-zinc-900 mb-4">
                    Safer Digital Future
                  </h3>
                  <p className="text-zinc-700 leading-relaxed font-light text-base flex-grow">
                    Your safety is our priority. Together, let&apos;s educate, protect, and transform your business for a safer digital future.
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
      <ContactCTASection />
    </main>
  );
}
