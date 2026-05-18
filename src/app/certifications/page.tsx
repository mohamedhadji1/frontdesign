"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Lock,
  Eye,
  FileCheck2,
  Layers,
  ChevronLeft,
  ChevronRight,
  Activity,
  Workflow,
  Globe2,
  Clock,
  Compass,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

interface Certification {
  slug: string;
  src: string;
  alt: string;
  title: string;
  category: "ISMS & Resilience" | "Privacy & Protection" | "Regulatory & Industry";
  categoryPill: string;
  overview: string;
  details: string;
  keyControls: string[];
  keystoneApproach: string;
}

const certificationsList: Certification[] = [
  {
    slug: "iso-27001",
    src: "/certif/27001.png",
    alt: "ISO 27001 Certification",
    title: "ISO/IEC 27001",
    category: "ISMS & Resilience",
    categoryPill: "ISO Standard",
    overview: "The international benchmark for Information Security Management (ISMS).",
    details: "Systematically manages sensitive company data so it remains secure across people, processes, and IT systems.",
    keyControls: [
      "Information Security Policies",
      "Asset & Access Controls",
      "Cryptographic Protection",
      "Physical & Ops Security"
    ],
    keystoneApproach: "Executes gap assessments, authors customized policies, and guides you through the final registrar audit."
  },
  {
    slug: "iso-27002",
    src: "/certif/27002.svg",
    alt: "ISO 27002 Security Controls",
    title: "ISO/IEC 27002",
    category: "ISMS & Resilience",
    categoryPill: "ISO Guidelines",
    overview: "The definitive reference manual for implementing information security controls.",
    details: "Provides detailed guidance on selecting, implementing, and managing controls listed in Annex A of ISO 27001.",
    keyControls: [
      "People & Org Security",
      "Physical Safeguards",
      "Vulnerability Management",
      "Secure SDLC Standards"
    ],
    keystoneApproach: "Translates abstract ISO 27002 guidelines into efficient, practical corporate operational controls."
  },
  {
    slug: "iso-27005",
    src: "/certif/27005.png",
    alt: "ISO 27005 Risk Management",
    title: "ISO/IEC 27005",
    category: "ISMS & Resilience",
    categoryPill: "ISO Guidelines",
    overview: "International guidelines for managing information security risks systematically.",
    details: "Provides robust frameworks to identify, evaluate, treat, and monitor information security risks.",
    keyControls: [
      "Risk Context Boundary",
      "Threat & Vulnerability Check",
      "Impact Assessment & Valuation",
      "Continuous Risk Registries"
    ],
    keystoneApproach: "Deploys ISO 27005 risk assessment methodologies to help executives quantify and prioritize cyber risks."
  },
  {
    slug: "iso-27701",
    src: "/certif/27701.png",
    alt: "ISO 27701 Privacy Extension",
    title: "ISO/IEC 27701",
    category: "Privacy & Protection",
    categoryPill: "ISO Extension",
    overview: "The international standard for Privacy Information Management Systems (PIMS).",
    details: "Specifies key requirements for establishing a PIMS framework to protect personally identifiable information (PII).",
    keyControls: [
      "PII Transparency & Consent",
      "Data Subject Rights Care",
      "Privacy Impact Analysis",
      "Cross-Border Transfer Compliance"
    ],
    keystoneApproach: "Integrates PIMS requirements into your ISO 27001 framework, aligning privacy compliance with GDPR."
  },
  {
    slug: "iso-22301",
    src: "/certif/22301.png",
    alt: "ISO 22301 Business Continuity",
    title: "ISO 22301",
    category: "ISMS & Resilience",
    categoryPill: "ISO Standard",
    overview: "The international standard for Business Continuity Management (BCMS).",
    details: "Establishes a solid framework to prepare for, respond to, and recover from severe operational disruptions.",
    keyControls: [
      "Business Impact Analysis",
      "Disaster Recovery Planning",
      "Crisis Management Protocols",
      "Continuity Testing & Drills"
    ],
    keystoneApproach: "Constructs business continuity runbooks and executes simulations to ensure your operations withstand any crisis."
  },
  {
    slug: "gdpr",
    src: "/certif/GDPR.webp",
    alt: "GDPR Compliance",
    title: "GDPR Alignment",
    category: "Privacy & Protection",
    categoryPill: "Global Privacy",
    overview: "The world's most comprehensive and strict data protection and privacy regulation.",
    details: "Regulates data protection, storage limits, transparency, and transfer rules for EU data subjects.",
    keyControls: [
      "Lawful & Fair Processing",
      "Data Subject Access Rights",
      "72-Hour Breach Alerting",
      "DPO Governance & SCCs"
    ],
    keystoneApproach: "Executes GDPR gap analysis, maps data storage layouts, and provides on-demand Virtual DPO services."
  },
  {
    slug: "nist-framework",
    src: "/certif/Nist.webp",
    alt: "NIST Guidelines",
    title: "NIST SP 800-53",
    category: "Regulatory & Industry",
    categoryPill: "Federal Standard",
    overview: "Security and privacy controls for federal information systems.",
    details: "A comprehensive catalog of security and privacy controls designed to protect federal assets and systems.",
    keyControls: [
      "Identification & Auth",
      "Audit Logging Controls",
      "Configuration Hardening",
      "System Integrity Validation"
    ],
    keystoneApproach: "Aligns your corporate security architecture to support federal compliance and government contract requirements."
  },
  {
    slug: "pci-dss",
    src: "/certif/PCIDSS.png",
    alt: "PCI DSS Compliance",
    title: "PCI DSS v4.0",
    category: "Regulatory & Industry",
    categoryPill: "Payment Industry",
    overview: "The global security standard for protecting credit card payment data.",
    details: "Mandates security controls to ensure all companies that process credit cards store and transmit data securely.",
    keyControls: [
      "CDE Segmentation Control",
      "Cardholder Data Encryption",
      "Vulnerability Scan Logs",
      "OS & DB Access Control"
    ],
    keystoneApproach: "Minimizes CDE scope via segmentations, performs vulnerability scans, and formats SAQ submissions."
  },
  {
    slug: "soc-2",
    src: "/certif/SOC2.webp",
    alt: "SOC 2 Audit",
    title: "SOC 2 Type I & II",
    category: "Regulatory & Industry",
    categoryPill: "Trust Services",
    overview: "The premiere audit framework for technology and cloud service organizations.",
    details: "Evaluates client systems based on AICPA trust criteria: security, availability, and confidentiality.",
    keyControls: [
      "Infrastructure Monitoring",
      "MFA & Access Reviews",
      "Software SDLC Governance",
      "System Recovery Validation"
    ],
    keystoneApproach: "Streamlines SOC 2 readiness, designs continuous control monitors, and prepares pre-audit evidence."
  },
  {
    slug: "swift-csp",
    src: "/certif/SWIFT.png",
    alt: "SWIFT CSP Alignment",
    title: "SWIFT CSP",
    category: "Regulatory & Industry",
    categoryPill: "Financial Sector",
    overview: "Critical security controls framework for the global SWIFT financial network.",
    details: "Helps financial organizations secure local environments and attest to critical security baselines annually.",
    keyControls: [
      "SWIFT Network Segregation",
      "System & DB Hardening",
      "Advanced MFA Standards",
      "Transaction Log Integrity"
    ],
    keystoneApproach: "Assesses SWIFT boundaries, performs penetration tests, and drafts independent assessment attestation reports."
  },
  {
    slug: "hipaa",
    src: "/certif/hipaa.png",
    alt: "HIPAA Compliance",
    title: "HIPAA Security",
    category: "Privacy & Protection",
    categoryPill: "Healthcare",
    overview: "U.S. standard for protecting sensitive patient health information (PHI).",
    details: "Establishes administrative, physical, and technical safeguards for protected health information.",
    keyControls: [
      "PHI Encryption & Auditing",
      "Facility Security Controls",
      "Risk Analysis Governance",
      "BAA Partner Attestations"
    ],
    keystoneApproach: "Conducts HIPAA risk assessments, audits technical safeguards, and implements encryption for health data."
  },
  {
    slug: "nist-cybersecurity",
    src: "/certif/nistcyber.svg",
    alt: "NIST CSF Alignment",
    title: "NIST CSF 2.0",
    category: "Regulatory & Industry",
    categoryPill: "Security Framework",
    overview: "A highly structured, outcome-driven framework to manage cybersecurity risk.",
    details: "Provides common taxonomy and controls across Govern, Identify, Protect, Detect, Respond, and Recover.",
    keyControls: [
      "Cybersecurity Governance",
      "Asset Risk Assessments",
      "Identity Control Policies",
      "Respond & Recover Plans"
    ],
    keystoneApproach: "Aligns your security program directly with NIST CSF 2.0 pillars, delivering clear dashboards for executives."
  }
];

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "ISMS & Resilience", "Privacy & Protection", "Regulatory & Industry"];

  const filteredCerts = activeCategory === "All"
    ? certificationsList
    : certificationsList.filter(c => c.category === activeCategory);

  // Monitor scroll movements to track active slide index for bullet indicators
  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const totalWidth = scrollWidth - clientWidth;
      if (totalWidth <= 0) return;
      const index = Math.round((scrollLeft / totalWidth) * (filteredCerts.length - 1));
      setActiveIndex(Math.min(Math.max(index, 0), filteredCerts.length - 1));
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", handleScroll);
      }
    };
  }, [filteredCerts]);

  // Handle smooth scroll on landing if there's a hash in the URL
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }, 600);
      }
    }
  }, [activeCategory]);

  // Looping scroll behavior inside arrows
  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      // Scroll by roughly 1 card width + gap on desktop
      const scrollAmount = window.innerWidth < 768 ? clientWidth * 0.85 : 444; // card (412px) + gap (32px)
      
      if (direction === "right") {
        // If we are at the end, loop back smoothly to the beginning
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
          setActiveIndex(0);
        } else {
          carouselRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
        }
      } else {
        // If we are at the beginning, loop forward smoothly to the end
        if (scrollLeft <= 15) {
          carouselRef.current.scrollTo({ left: scrollWidth - clientWidth, behavior: "smooth" });
          setActiveIndex(filteredCerts.length - 1);
        } else {
          carouselRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: "smooth" });
        }
      }
    }
  };

  const jumpToSlide = (idx: number) => {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth } = carouselRef.current;
      const totalWidth = scrollWidth - clientWidth;
      const scrollTo = (idx / (filteredCerts.length - 1)) * totalWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      setActiveIndex(idx);
    }
  };

  return (
    <main className="min-h-screen bg-white text-zinc-950 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[70svh] min-h-[500px] flex flex-col justify-center overflow-hidden"
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
          <div className="absolute inset-0 bg-black/35 sm:bg-linear-to-r sm:from-black/75 sm:via-black/40 sm:to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl pt-12"
          >
            <div className="mb-6 inline-flex items-center gap-3 text-red-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              <span>Resources</span>
              <ChevronRight size={8} />
              <span className="text-white/60">Compliance & Standards</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1] mb-6 uppercase">
              Certifications & Standards
            </h1>

            <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide max-w-3xl leading-relaxed">
              We guide your enterprise through the world's most rigorous information security frameworks. Build absolute compliance, satisfy key stakeholders, and guarantee elite-level operational resilience.
            </p>
          </motion.div>
        </div>

        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider />

      {/* Categories Filter Selector */}
      <section className="bg-zinc-50 border-b border-zinc-100 py-6 sticky top-[72px] z-30 shadow-xs backdrop-blur-md/95">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Filter Frameworks:</span>
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveIndex(0);
                    if (carouselRef.current) {
                      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                    }
                  }}
                  className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-zinc-950 text-white shadow-md scale-105"
                      : "bg-white text-zinc-600 border border-zinc-200/80 hover:bg-zinc-100 hover:text-zinc-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Certifications */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <SectionDivider title="GLOBAL STANDARDS ALIGNMENT" className="mb-10" />
            <motion.h2
              className="text-4xl lg:text-6xl font-extrabold text-zinc-950 mb-6 tracking-tighter uppercase leading-[0.95]"
            >
              Elite Compliance Portfolios
            </motion.h2>
            <p className="text-base text-zinc-600 leading-relaxed font-medium">
              Explore the detailed controls covered under each framework and discover how Keystone's advisory speeds up your compliance timeline.
            </p>
          </div>
        </div>

        {/* Carousel Container Wrapper with Overlaid Navigation Chevrons */}
        <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-16">
          
          {/* Overlaid Left Navigation Button */}
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-25 h-12 w-12 rounded-full border border-zinc-200 bg-white/95 text-zinc-950 flex items-center justify-center transition-all shadow-lg cursor-pointer hover:bg-zinc-950 hover:text-white hover:scale-105 active:scale-95"
            title="Scroll Left"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Overlaid Right Navigation Button */}
          <button
            onClick={() => scrollCarousel("right")}
            className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-25 h-12 w-12 rounded-full border border-zinc-200 bg-white/95 text-zinc-950 flex items-center justify-center transition-all shadow-lg cursor-pointer hover:bg-zinc-950 hover:text-white hover:scale-105 active:scale-95"
            title="Scroll Right"
          >
            <ChevronRight size={20} />
          </button>

          {/* Horizontal Carousel Viewport */}
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth px-8 sm:px-12 md:px-16 pb-8 no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert, idx) => (
                <motion.div
                  key={cert.slug}
                  id={cert.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group flex flex-col justify-between bg-zinc-50 border border-zinc-150 p-5 sm:p-6 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 w-[290px] sm:w-[412px] shrink-0 snap-center scroll-mt-36"
                >
                  <div>
                    {/* Header: Logo, Pill & Title */}
                    <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-zinc-200/60">
                      <div className="relative h-12 w-12 bg-white rounded-xl p-2 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
                        <Image
                          src={cert.src}
                          alt={cert.alt}
                          width={38}
                          height={38}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-extrabold text-zinc-950 tracking-tight leading-tight group-hover:text-red-650 transition-colors duration-300 uppercase">
                          {cert.title}
                        </h3>
                        <span className="text-[7.5px] font-extrabold uppercase tracking-widest text-zinc-400 bg-zinc-100 border border-zinc-200 px-1.5 py-0.5 rounded-md mt-0.5 inline-block">
                          {cert.categoryPill}
                        </span>
                      </div>
                    </div>

                    {/* Overview & Short detail */}
                    <p className="text-zinc-950 text-xs font-bold italic mb-2.5 leading-snug">
                      "{cert.overview}"
                    </p>
                    <p className="text-zinc-500 text-[11px] font-medium leading-relaxed mb-4">
                      {cert.details}
                    </p>

                    {/* Objectives Checklist (Bullets) */}
                    <div className="mb-4">
                      <h4 className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        <Layers size={10} className="text-red-500" />
                        Core Objectives
                      </h4>
                      <ul className="space-y-1.5">
                        {cert.keyControls.map((control, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="h-4 w-4 bg-red-50 text-red-600 text-[8.5px] font-extrabold flex items-center justify-center rounded-full shrink-0 mt-0.5 shadow-3xs group-hover:bg-red-600 group-hover:text-white transition-all">
                              ✓
                            </span>
                            <p className="text-zinc-800 text-[10.5px] font-bold tracking-tight">
                              {control}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Keystone Strategy & Action */}
                  <div className="pt-3 border-t border-zinc-200/60 mt-3">
                    <div className="bg-white p-3.5 rounded-xl border border-zinc-200/50 mb-4">
                      <h5 className="text-[8px] font-extrabold text-red-600 uppercase tracking-widest mb-0.5 flex items-center gap-1">
                        <Workflow size={9} />
                        Keystone's Strategy
                      </h5>
                      <p className="text-zinc-500 text-[10.5px] font-medium leading-relaxed">
                        {cert.keystoneApproach}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 py-3 px-5 text-[9.5px] font-bold uppercase tracking-wider text-white shadow-md hover:bg-red-600 transition-colors duration-300"
                    >
                      Assess Alignment
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Bullet Points Indicators (Slide Dots - inactive are grey, active is black) */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {filteredCerts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => jumpToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? "w-8 bg-zinc-950" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Elegant Trust Metrics section */}
      <section className="bg-zinc-50 border-y border-zinc-100 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
            <div className="space-y-3">
              <div className="flex justify-center text-red-600"><Globe2 size={36} /></div>
              <p className="text-4xl font-extrabold text-zinc-950 tracking-tighter">100%</p>
              <h5 className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">Global Coverage</h5>
              <p className="text-sm text-zinc-600 font-medium">Standards applicable worldwide across all tech frameworks.</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center text-red-600"><Clock size={36} /></div>
              <p className="text-4xl font-extrabold text-zinc-950 tracking-tighter">-45%</p>
              <h5 className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">Time-to-Attest</h5>
              <p className="text-sm text-zinc-600 font-medium">Automated evidence gathers and template-driven gap resolution.</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center text-red-600"><Compass size={36} /></div>
              <p className="text-4xl font-extrabold text-zinc-950 tracking-tighter">100+</p>
              <h5 className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">Audits Assisted</h5>
              <p className="text-sm text-zinc-600 font-medium">A pristine track record of helping companies satisfy auditor inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      <CyberSectionDivider />
      <ContactCTASection />
    </main>
  );
}
