"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "../ui/CyberSectionDivider";
import { BlossomCarousel } from "@blossom-carousel/react";

const nonIsoCertifications = [
  { name: "CISSP", subtitle: "Certified Information Systems Security Professional", logo: "/certif/CISSP.webp" },
  { name: "CISA", subtitle: "Certified Information Systems Auditor", logo: "/certif/CISA.webp" },
  { name: "COBIT 5 Foundation", logo: "/certif/cobit5.png" },
  { name: "PECB certified trainer", logo: "/certif/PECB trainer.webp" },
  { name: "ITIL Foundation", logo: "/certif/ITIL V3 Foundation.png" },
  { name: "PRINCE2 Foundation", logo: "/certif/PRINCE2 Foundation.png" },
  { name: "PRINCE2 Practitioner", logo: "/certif/PRINCE2 Practitioner.png" },
  { name: "PMP", subtitle: "Project Management Professional", logo: "/certif/PMP.png" },
  { name: "NIST Cybersecurity Consultant", logo: "/certif/nistcyber.svg" },
  { name: "CEH", subtitle: "Certified Ethical Hacker", logo: "/certif/CEH.png" },
  { name: "CEH Master", subtitle: "Certified Ethical Hacker Master", logo: "/certif/CEHmaster.png" },
  { name: "CSA", subtitle: "Certified SOC Analyst", logo: "/certif/CSA SOC Analyst.png" },
  { name: "CompTIA Security+", logo: "/certif/CompTIASecurity+.png" },
  { name: "eWPT", subtitle: "Web Application Penetration Tester", logo: "/certif/eWPT.svg" },
  { name: "eWPTXv2", subtitle: "Web Application Penetration Tester", logo: "/certif/eWPTXv2.webp" },
  { name: "eWAPTX", subtitle: "Web Application Penetration Tester eXtreme", logo: "/certif/eWAPTX.svg" },
  { name: "eCPPT", subtitle: "Professional Penetration Tester", logo: "/certif/eCPPT.svg" },
  { name: "CRTP", subtitle: "Red Team Professional", logo: "/certif/CRTP.png" },
  { name: "CRTL", subtitle: "Certified Red Team Lead", logo: "/certif/CRTL.png" },
  { name: "CRTO", subtitle: "Certified Red Team Operator", logo: "/certif/CRTO.png" },
  { name: "CRTE", subtitle: "Certified Red Team Expert", logo: "/certif/CRTE.png" },
  { name: "Penetration Testing Specialist", subtitle: "CPTS", logo: "/certif/Penetration Testing Specialist (CPTS).png" },
  { name: "SWIFT CSP", subtitle: "Certified Assessor", logo: "/certif/SWIFT Customer Security.png" },
];

const isoCertifications = [
  { name: "ISO 21502", subtitle: "Senior Lead Project Manager", logo: "/certif/ISO21502.png" },
  { name: "ISO 22301", subtitle: "Senior Lead Auditor PECB", logo: "/certif/22301 Lead Auditor.png" },
  { name: "ISO 22301", subtitle: "Senior Lead Implementer PECB", logo: "/certif/ISO 22301 Senior Lead Implementer.png" },
  { name: "ISO 27001", subtitle: "Senior Lead Auditor", logo: "/certif/ISO 27001 Lead Auditor.png" },
  { name: "ISO 27001", subtitle: "Senior Lead Implementer", logo: "/certif/ISO 27001 Lead Implementer.png" },
  { name: "ISO 27001:2013", subtitle: "Internal Auditor", logo: "/certif/ISO 27001 2013 Internal Auditor.png" },
  { name: "ISO 27005", subtitle: "Senior Lead Risk Manager", logo: "/certif/ISO 27005 Senior Lead Risk Manager.png" },
  { name: "ISO/IEC 27701", subtitle: "Senior Lead Implementer", logo: "/certif/ISO 27001 Lead Implementer.png" },
  { name: "ISO 31000", subtitle: "Risk Manager", logo: "/certif/ISO 31000 Risk Manager.png" },
  { name: "MEHARI Avancé", subtitle: "Risk Manager", logo: "/certif/MEHARI Risk Manager.png" },
  { name: "EBIOS Risk Manager", logo: "/certif/EBIOS Risk Manager.webp" },
  { name: "Lead Disaster Recovery Manager", subtitle: "PECB", logo: "/certif/Lead Disaster Recovery Manager.png" },
  { name: "Lead Cloud Security Manager", subtitle: "PECB", logo: "/certif/Lead Cloud Security Manager.png" },
  { name: "ISO/IEC 27034", subtitle: "Lead Application Security Auditor", logo: "/certif/ISO 27034 Lead Application Security Auditor.png" },
  { name: "SMCA", subtitle: "ISO 22301 Lead Implementer", logo: "/certif/SMCA - ISO 22301 Lead Implementer.webp" },
];

const certifications = [...nonIsoCertifications, ...isoCertifications];

export function CertificationsList({ className }: { className?: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const getCarouselEl = useCallback(
    () => wrapperRef.current?.querySelector<HTMLElement>(".cert-carousel") ?? null,
    [],
  );

  const updateScrollState = useCallback(() => {
    const el = getCarouselEl();
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, [getCarouselEl]);

  useEffect(() => {
    const el = getCarouselEl();
    if (!el) return;

    updateScrollState();

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(el);
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      resizeObserver.disconnect();
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [getCarouselEl, updateScrollState]);

  const scrollLeft = () => {
    getCarouselEl()?.scrollBy({ left: -480, behavior: "smooth" });
  };

  const scrollRight = () => {
    getCarouselEl()?.scrollBy({ left: 480, behavior: "smooth" });
  };

  return (
    <div
      className={className}
      style={{
        maxWidth: "1400px",
        marginInline: "auto",
        padding: "0 24px",
        position: "relative",
        zIndex: 10,
        marginTop: "80px",
      }}
    >
      <CyberSectionDivider />
      <SectionDivider title="Credentials" theme="red" className="mb-16" />

      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-gotham, sans-serif)",
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            fontWeight: 400,
            color: "#0f172a",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Team Certifications
        </motion.h1>
        <p
          style={{
            fontFamily: "var(--font-gotham, sans-serif)",
            fontSize: "1rem",
            color: "#64748b",
            marginTop: "16px",
            fontWeight: 400,
          }}
        >
          Internationally recognized certifications held by our cybersecurity specialists.
        </p>
      </div>

      <style>{`
        .cert-carousel {
          display: grid !important;
          grid-auto-columns: 220px;
          height: auto;
          min-height: 520px;
          scroll-snap-type: x mandatory;
          grid-template-rows: repeat(3, minmax(170px, auto));
          grid-auto-flow: column dense;
          gap: 16px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .cert-carousel::-webkit-scrollbar {
          display: none;
        }
        .cert-slide {
          width: 100%;
          height: auto;
          min-height: 100%;
          background: #fafafa;
          border: 1px solid #f1f5f9;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px 16px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: default;
          overflow: visible;
        }
        .cert-slide:hover {
          background: #ffffff;
          border-color: rgba(220, 38, 38, 0.2);
          box-shadow: 0 12px 32px -8px rgba(220, 38, 38, 0.1);
          transform: translateY(-4px);
        }
        .cert-slide:nth-child(3n+2) {
          grid-column: span 2;
        }
        .cert-slide:nth-child(4n+1) {
          scroll-snap-align: center;
        }
        .cert-slide:nth-child(1),
        .cert-slide:nth-child(6),
        .cert-slide:nth-child(13) {
          grid-row: span 2;
        }
        .cert-slide img {
          max-width: 110px;
          max-height: 110px;
          object-fit: contain;
          margin-bottom: 12px;
          transition: transform 0.4s ease;
        }
        .cert-slide:nth-child(1) img,
        .cert-slide:nth-child(6) img,
        .cert-slide:nth-child(13) img {
          max-width: 140px;
          max-height: 140px;
        }
        .cert-slide:hover img {
          transform: scale(1.08);
        }
        .cert-name {
          font-family: var(--font-gotham, sans-serif);
          font-size: 0.8125rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.3;
          letter-spacing: -0.01em;
          overflow-wrap: break-word;
        }
        .cert-subtitle {
          font-family: var(--font-gotham, sans-serif);
          font-size: 0.6875rem;
          font-weight: 500;
          color: #94a3b8;
          margin-top: 4px;
          line-height: 1.4;
          overflow-wrap: break-word;
        }

        .cert-carousel-wrapper {
          position: relative;
        }
        .cert-scroll-hint {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 88px;
          display: flex;
          align-items: center;
          pointer-events: none;
          z-index: 2;
          transition: opacity 0.3s ease;
        }
        .cert-scroll-hint.is-hidden {
          opacity: 0;
        }
        .cert-scroll-hint-left {
          left: 0;
          justify-content: flex-start;
          padding-left: 8px;
          background: linear-gradient(to right, rgba(255, 255, 255, 0.98) 35%, rgba(255, 255, 255, 0));
        }
        .cert-scroll-hint-right {
          right: 0;
          justify-content: flex-end;
          padding-right: 8px;
          background: linear-gradient(to left, rgba(255, 255, 255, 0.98) 35%, rgba(255, 255, 255, 0));
        }
        .cert-scroll-arrow {
          pointer-events: auto;
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          border: 1px solid #f1f5f9;
          background: #ffffff;
          color: #dc2626;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px -6px rgba(220, 38, 38, 0.25);
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .cert-scroll-arrow-right {
          animation: cert-scroll-pulse-right 2s ease-in-out infinite;
        }
        .cert-scroll-arrow-left {
          animation: cert-scroll-pulse-left 2s ease-in-out infinite;
        }
        .cert-scroll-arrow-right:hover {
          background: #dc2626;
          color: #ffffff;
          transform: translateX(2px);
          animation: none;
        }
        .cert-scroll-arrow-left:hover {
          background: #dc2626;
          color: #ffffff;
          transform: translateX(-2px);
          animation: none;
        }
        @keyframes cert-scroll-pulse-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        @keyframes cert-scroll-pulse-left {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-4px); }
        }

        @media (max-width: 768px) {
          .cert-carousel {
            grid-auto-columns: 180px;
            min-height: 440px;
            gap: 12px;
          }
          .cert-slide img {
            max-width: 80px;
            max-height: 80px;
          }
          .cert-scroll-hint {
            width: 64px;
          }
          .cert-scroll-arrow {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>

      <div ref={wrapperRef} className="cert-carousel-wrapper">
        <BlossomCarousel className="cert-carousel">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cert.logo} alt={cert.name} />
              <span className="cert-name">{cert.name}</span>
              {cert.subtitle && (
                <span className="cert-subtitle">{cert.subtitle}</span>
              )}
            </div>
          ))}
        </BlossomCarousel>

        <div className={`cert-scroll-hint cert-scroll-hint-left${canScrollLeft ? "" : " is-hidden"}`}>
          <button
            type="button"
            className="cert-scroll-arrow cert-scroll-arrow-left"
            onClick={scrollLeft}
            aria-label="Scroll certifications left"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>
        </div>

        <div className={`cert-scroll-hint cert-scroll-hint-right${canScrollRight ? "" : " is-hidden"}`}>
          <button
            type="button"
            className="cert-scroll-arrow cert-scroll-arrow-right"
            onClick={scrollRight}
            aria-label="Scroll certifications right"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
