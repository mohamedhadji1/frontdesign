"use client";

import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "../ui/CyberSectionDivider";
import { BlossomCarousel } from "@blossom-carousel/react";

const certifications = [
  { name: "CISSP", logo: "/certif/CISSP.webp" },
  { name: "CISA", subtitle: "Certified Information System Auditor", logo: "/certif/27001.png" },
  { name: "COBIT 5 Foundation", logo: "/certif/cobit5.png" },
  { name: "EBIOS Risk Manager", logo: "/certif/MEHARI Risk Manager.png" },
  { name: "PECB certified trainer", logo: "/certif/PECB.png" },
  { name: "ISO 21502", subtitle: "Senior Lead Project Manager", logo: "/certif/ISO21502.png" },
  { name: "ISO 22301", subtitle: "Senior Lead Auditor PECB", logo: "/certif/22301 Lead Auditor.png" },
  { name: "ISO 22301", subtitle: "Senior Lead Implementer PECB", logo: "/certif/ISO 22301 Senior Lead Implementer.png" },
  { name: "ISO 27001", subtitle: "Lead Auditor", logo: "/certif/ISO 27001 Lead Auditor.png" },
  { name: "ISO 27001", subtitle: "Lead Implementer", logo: "/certif/ISO 27001 Lead Implementer.png" },
  { name: "ISO 27001:2013", subtitle: "Internal Auditor", logo: "/certif/ISO 27001 2013 Internal Auditor.png" },
  { name: "ISO 27005", subtitle: "Senior Lead Risk Manager", logo: "/certif/ISO 27005 Senior Lead Risk Manager.png" },
  { name: "ISO 31000", subtitle: "Risk Manager", logo: "/certif/ISO 31000 Risk Manager.png" },
  { name: "ISO/IEC 27034", subtitle: "Lead Application Security Auditor", logo: "/certif/ISO 27034 Lead Application Security Auditor.png" },
  { name: "ITIL V3 Foundation", logo: "/certif/ITIL V3 Foundation.png" },
  { name: "Lead Cloud Security Manager", subtitle: "PECB", logo: "/certif/Lead Cloud Security Manager.png" },
  { name: "Lead Disaster Recovery Manager", subtitle: "PECB", logo: "/certif/Lead Disaster Recovery Manager.png" },
  { name: "MEHARI Risk Manager", logo: "/certif/MEHARI Risk Manager.png" },
  { name: "NIST Cybersecurity Professional", logo: "/certif/nistcyber.svg" },
  { name: "Penetration Testing Specialist", subtitle: "CPTS", logo: "/certif/Penetration Testing Specialist (CPTS).png" },
  { name: "SMCA", subtitle: "ISO 22301 Lead Implementer", logo: "/certif/SMCA - ISO 22301 Lead Implementer.webp" },
  { name: "CSA : SOC Analyst", logo: "/certif/CSA SOC Analyst.jpg" },
  { name: "SWIFT Customer Security", logo: "/certif/SWIFT Customer Security.png" },
];

export function CertificationsList() {
  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
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
          height: 520px;
          scroll-snap-type: x mandatory;
          grid-template-rows: repeat(3, 1fr);
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
          height: 100%;
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
          overflow: hidden;
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
        }
        .cert-subtitle {
          font-family: var(--font-gotham, sans-serif);
          font-size: 0.6875rem;
          font-weight: 500;
          color: #94a3b8;
          margin-top: 4px;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .cert-carousel {
            grid-auto-columns: 180px;
            height: 440px;
            gap: 12px;
          }
          .cert-slide img {
            max-width: 80px;
            max-height: 80px;
          }
        }
      `}</style>

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
    </div>
  );
}
