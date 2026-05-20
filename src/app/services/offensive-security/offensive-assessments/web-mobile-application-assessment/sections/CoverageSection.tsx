"use client";

import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import {
  CalendarCheck,
  Cloud,
  Gamepad2,
  Globe,
  GraduationCap,
  HeartPulse,
  Landmark,
  MessageSquareText,
  MousePointerClick,
  Navigation,
  ShoppingCart,
  Smartphone,
  Stethoscope,
  Users,
  Wallet,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { MouseEvent, useState } from "react";

type AssessmentSurface = {
  key: "web" | "mobile";
  label: string;
  number: string;
  title: string;
  intro: string;
  examples: string[];
  focusAreas: string[];
  icon: typeof Globe;
};

const surfaces: AssessmentSurface[] = [
  {
    key: "web",
    label: "Web Applications",
    number: "01",
    title: "Detailed analysis of web platforms",
    intro:
      "We examine business, customer, and operational web applications to identify vulnerabilities, exposed logic, and weak design decisions before they become entry points.",
    examples: [
      "Corporate websites and institutional platforms",
      "E-commerce stores and online sales portals",
      "Customer portals for products and digital services",
      "Online banking and financial management applications",
      "CRM, ERP, and internal management tools",
      "Cloud services and online storage platforms",
      "Enterprise collaboration environments",
      "Administrative and HR portals",
      "Telemedicine and health monitoring applications",
      "Social and professional sharing platforms",
    ],
    focusAreas: [
      "Authentication, session handling, and access control",
      "Business logic abuse across user journeys and workflows",
      "API exposure, integrations, and backend trust boundaries",
      "Administrative interfaces, configuration, and data handling",
    ],
    icon: Globe,
  },
  {
    key: "mobile",
    label: "Mobile Applications",
    number: "02",
    title: "Deep assessment of mobile channels",
    intro:
      "We assess the mobile applications your teams and users rely on every day, covering client-side behavior, API consumption, local storage, and platform-specific risks.",
    examples: [
      "iOS, Android, and cross-platform smartphone apps",
      "Mobile banking and e-wallet applications",
      "Mobile e-commerce experiences",
      "Messaging and mobile social communication apps",
      "Telemedicine, medical records, wellness, and fitness apps",
      "Education and tutoring applications",
      "Travel booking and trip management tools",
      "Mobile games and interactive entertainment",
      "Productivity apps for tasks, calendars, and coordination",
      "GPS, navigation, and geolocation applications",
    ],
    focusAreas: [
      "Client-side data storage, token handling, and secret exposure",
      "Transport security and the way the app consumes backend APIs",
      "Permissions, device trust, and local attack surface review",
      "Reverse engineering resistance and secure coding patterns",
    ],
    icon: Smartphone,
  },
];

const exampleIconSets = {
  web: [
    Globe,
    ShoppingCart,
    Users,
    Landmark,
    MousePointerClick,
    Cloud,
    Users,
    CalendarCheck,
    Stethoscope,
    MessageSquareText,
  ],
  mobile: [
    Smartphone,
    Wallet,
    ShoppingCart,
    MessageSquareText,
    HeartPulse,
    GraduationCap,
    CalendarCheck,
    Gamepad2,
    CalendarCheck,
    Navigation,
  ],
} as const;

export function CoverageSection() {
  const [activeSurface, setActiveSurface] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 1 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 1 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const activeItem = surfaces[activeSurface];
  const SurfaceIcon = activeItem.icon;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden border-y border-zinc-200 bg-white py-24 text-zinc-900"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(220,38,38,0.06), transparent 80%)`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(220_38_38_0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220_38_38_0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <SectionDivider title="APPLICATION SCOPE" className="mb-6" />
          <motion.h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Detailed Application Analysis
          </motion.h2>
          <p className="text-lg leading-relaxed text-zinc-600">
            We perform a detailed review of web and mobile applications to map
            the exposure surface, identify weak points, and understand where
            sensitive business logic is most at risk.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/90 shadow-xl backdrop-blur-md">
          <div className="flex flex-col lg:flex-row">
            <div className="border-b border-zinc-200 bg-zinc-50/70 lg:w-[30%] lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3 border-b border-zinc-200 px-5 py-4 text-xs font-medium text-zinc-500">
                <SurfaceIcon className="h-4 w-4 text-red-600" />
                <span>scope@keystone:~/applications/</span>
                <span className="ml-auto text-red-500 animate-pulse">_</span>
              </div>
              <div className="flex flex-col">
                {surfaces.map((surface, index) => {
                  const isActive = index === activeSurface;

                  return (
                    <button
                      key={surface.label}
                      type="button"
                      onMouseEnter={() => setActiveSurface(index)}
                      onFocus={() => setActiveSurface(index)}
                      className={`w-full border-l-2 px-6 py-5 text-left transition-all duration-300 ${
                        isActive
                          ? "border-red-600 bg-red-50"
                          : "border-transparent hover:bg-zinc-50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-xs font-medium ${
                            isActive ? "text-red-600" : "text-zinc-500"
                          }`}
                        >
                          [{surface.number}]
                        </span>
                        <span
                          className={`text-sm font-bold uppercase tracking-wider ${
                            isActive ? "text-zinc-900" : "text-zinc-500"
                          }`}
                        >
                          {surface.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.03)_0%,transparent_65%)] lg:w-[70%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.label}
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                  transition={{ duration: 0.25 }}
                  className="relative p-8 md:p-10"
                >
                  <div className="absolute right-8 top-6 select-none text-[140px] font-bold leading-none text-zinc-100">
                    {activeItem.number}
                  </div>

                  <div className="relative z-10 max-w-5xl">
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-200 bg-red-50 text-red-600 shadow-sm">
                      <SurfaceIcon className="h-7 w-7" />
                    </div>

                    <h3 className="mb-4 text-3xl font-bold uppercase tracking-tight text-zinc-900 md:text-4xl">
                      {activeItem.title}
                    </h3>
                    <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-zinc-600 md:text-[17px]">
                      {activeItem.intro}
                    </p>

                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                      <div>
                        <h4 className="mb-4 border-b border-zinc-200 pb-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
                          Typical Targets
                        </h4>
                        <div className="grid gap-3 md:grid-cols-2">
                          {activeItem.examples.map((example, index) => {
                            const ExampleIcon =
                              exampleIconSets[activeItem.key][index] ?? Globe;

                            return (
                              <div
                                key={example}
                                className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4"
                              >
                                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-red-600 shadow-sm">
                                  <ExampleIcon className="h-4 w-4" />
                                </div>
                                <p className="text-sm font-medium leading-relaxed text-zinc-700">
                                  {example}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 border-b border-zinc-200 pb-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
                          Assessment Angles
                        </h4>
                        <div className="space-y-3">
                          {activeItem.focusAreas.map((area) => (
                            <div
                              key={area}
                              className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
                            >
                              <p className="text-sm font-semibold leading-relaxed text-zinc-800">
                                {area}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
