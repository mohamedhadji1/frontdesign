"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "../ui/CyberSectionDivider";
import { CertificationsList } from "./CertificationsList";

const trainingPartners = [
  { name: "EC-Council", logo: "/certif/EC-council.png", specialty: "Ethical Hacking & Security Certifications" },
  { name: "KnowBe4", logo: "/trustedBy/training/KnowBe4.png", specialty: "Security Awareness & Phishing Simulation" },
  { name: "PECB", logo: "/certif/PECB.png", specialty: "ISO Standards Audit & Certifications" },
  { name: "OffSec", logo: "/trustedBy/training/offsec.png", specialty: "Offensive Security & Pen Testing Training" },
];

const internationalPartners = [
  { name: "Attijari Bank", logo: "/trustedBy/Attijari Bank.png" },
  { name: "VERMEG SOLUTIONS", logo: "/trustedBy/VERMEG SOLUTIONS.png" },
  { name: "BCEAO", logo: "/trustedBy/BCEAO.png" },
  { name: "BEAC", logo: "/trustedBy/BEAC.png" },
  { name: "Ooredoo", logo: "/trustedBy/Ooredoo.svg" },
  { name: "ARAB TUNISIAN BANK", logo: "/trustedBy/ARAB TUNISIAN BANK.png" },
  { name: "ODDO BHF SCA", logo: "/trustedBy/ODDO BHF SCA.png" },
  { name: "alBaraka Bank", logo: "/trustedBy/alBaraka Bank.png" },
  { name: "BGFI", logo: "/trustedBy/BGFI.png" },
  { name: "QATAR NATIONAL BANK", logo: "/trustedBy/QATAR NATIONAL BANK.png" },
  { name: "CITI BANK", logo: "/trustedBy/Citi_Bank_Logo_1.png" },
  { name: "ABC BANK", logo: "/trustedBy/Bank_ABC_idZ7Uyn2XL_8.png" },
  { name: "AGB", logo: "/trustedBy/DZ/AGB.png" },
  { name: "Al Salam Bank", logo: "/trustedBy/DZ/AL-SALAM.jpg" },
  { name: "BDL", logo: "/trustedBy/DZ/BDL-banque.jpg" },
  { name: "Fransabank", logo: "/trustedBy/DZ/fransabank.png" },
  { name: "Housing Bank", logo: "/trustedBy/DZ/HOUSINGBANK.jpg" },
  { name: "Baker Hughes", logo: "/trustedBy/DZ/bakerhughes.png" },
  { name: "CPA", logo: "/trustedBy/DZ/logo_cpa.png" },
  { name: "Mobilis", logo: "/trustedBy/DZ/logo_mobilis_arabe.png" },
];

const grosComptesPartners = [
  { name: "Poulina Group Holding", logo: "/trustedBy/poulina.png" },
  { name: "Tunisie Telecom", logo: "/trustedBy/Tunisie telecom.png" },
  { name: "SOFRECOM", logo: "/trustedBy/sofrecom.png" },
  { name: "STEG", logo: "/trustedBy/STEG.png" },
  { name: "GIMTEL", logo: "/trustedBy/GIMTEL.png" },
  { name: "MONETIQUE TUNISIE", logo: "/trustedBy/monetique.png" },
  { name: "Banque Zitouna", logo: "/trustedBy/Banque_Zitouna.png" },
  { name: "BTE", logo: "/trustedBy/BTE.png" },
  { name: "Banque de Tunisie", logo: "/trustedBy/BT.png" },
  { name: "UBCI", logo: "/trustedBy/UBCI.png" },
  { name: "Société Tunisienne de Banque", logo: "/trustedBy/stb.png" },
  { name: "ASSURANCE ASTREE", logo: "/trustedBy/Astree Assurances.png" },
  { name: "BNA ASSURANCES (AMI)", logo: "/trustedBy/BNA-ASSURANCES.png" },
  { name: "Zitouna Takaful", logo: "/trustedBy/ZTF.png" },
  { name: "DATAXION", logo: "/trustedBy/dataxion.png" },
  { name: "ANTIC", logo: "/trustedBy/Antic.png" },
  { name: "GAT ASSURANCES", logo: "/trustedBy/gat.png" },
  { name: "Banque Tuniso-Koweitienne", logo: "/trustedBy/BTK.png" },
  { name: "BANK OF KIGALI", logo: "/trustedBy/bank of kigali.jpg" },
  { name: "SIBTEL", logo: "/trustedBy/SIBTEL.png" },
  { name: "TUNISAIR", logo: "/trustedBy/Tunisair_iddm_VATV-_1.png" },
  { name: "Jumhoria Bank", logo: "/trustedBy/jumhouria bank.png" },
  { name: "Banque Centrale Benghazi", logo: "/trustedBy/CBL.png" },
  { name: "CNI", logo: "/trustedBy/cni.png" },
  { name: "BIAT", logo: "/trustedBy/biat.jpg" },
  { name: "BNA Bank DZ", logo: "/trustedBy/DZ/BNA.jpg" },
  { name: "SAA", logo: "/trustedBy/DZ/SAA.jpg" },
  { name: "Setram", logo: "/trustedBy/DZ/SETRAM.png" },
  { name: "Tassili Airlines", logo: "/trustedBy/DZ/Tassili-airlines.png" },
  { name: "EPAL", logo: "/trustedBy/DZ/epal.png" },
  { name: "Ministère du Tourisme", logo: "/trustedBy/DZ/ministere-du-tourisme.png" },
  { name: "Swissport", logo: "/trustedBy/DZ/swissport.png" },
];

const autresPartners = [
  { name: "North Africa International Bank", logo: "/trustedBy/NAIB.png" },
  { name: "Banque Nationale Agricole", logo: "/trustedBy/BNA bank.png" },
  { name: "ESPRIT", logo: "/trustedBy/esprit.png" },
  { name: "WIFAK BANK", logo: "/trustedBy/wifak.png" },
  { name: "Assurance STAR", logo: "/trustedBy/star.png" },
  { name: "THG", logo: "/trustedBy/thg.png" },
  { name: "Topnet", logo: "/trustedBy/Topnet.png" },
  { name: "BIAT ASSURANCES", logo: "/trustedBy/assurances biat.png" },
  { name: "ENDA TAMWEEL SA", logo: "/trustedBy/enda.png" },
  { name: "BH ASSURANCE", logo: "/trustedBy/bh-assurance-logo.png" },
  { name: "LLOYD TUNISIEN", logo: "/trustedBy/lloyd.png" },
  { name: "FTUSA", logo: "/trustedBy/ftusa.png" },
  { name: "UNIVERSITE CENTRALE", logo: "/trustedBy/universite central.svg" },
  { name: "ADVANS TUNISIE", logo: "/trustedBy/advans.png" },
  { name: "BMCE CAPITAL", logo: "/trustedBy/bmce capital.png" },
  { name: "Carte Assurance", logo: "/trustedBy/carte assurance.png" },
  { name: "Banque Tunisienne de Solidarité", logo: "/trustedBy/BTS.png" },
  { name: "VECTORYS", logo: "/trustedBy/VECTORYS.png" },
  { name: "Assurances M.A.E", logo: "/trustedBy/Assurances M.A.E.png" },
  { name: "Bellat", logo: "/trustedBy/DZ/BELLAT.png" },
  { name: "Biopharm", logo: "/trustedBy/DZ/BIOPHARM.png" },
  { name: "ENGTP", logo: "/trustedBy/DZ/ENGTP.jpg" },
  { name: "ENSP", logo: "/trustedBy/DZ/ENSP.jpg" },
  { name: "ONM", logo: "/trustedBy/DZ/ONM.png" },
  { name: "Vital", logo: "/trustedBy/DZ/VITAL.PNG" },
  { name: "El Kindi", logo: "/trustedBy/DZ/elkindi.jpg" },
  { name: "SRH", logo: "/trustedBy/DZ/srh.png" },
];

const largeLogos = [
  "ARAB TUNISIAN BANK", "alBaraka Bank", "SOFRECOM",
  "Poulina Group Holding", "Banque Zitouna", "BTE", "Jumhoria Bank",
  "SIBTEL", "BNA ASSURANCES (AMI)", "ASSURANCE ASTREE", "THG",
  "BIAT ASSURANCES", "BH ASSURANCE", "ADVANS TUNISIE", "BMCE CAPITAL",
  "Banque Tunisienne de Solidarité","ANTIC"
];

const smallLogos = [
  "BANK OF KIGALI", "Assurances M.A.E", "FTUSA",
  "Ooredoo", "BEAC", "STEG", "BIAT", "Carte Assurance",
  "GAT ASSURANCES", "Tunisie Telecom","ODDO BHF SCA"
];

const extraLargeLogos = [
  "Jumhoria Bank", "DATAXION", "BTE", "CITI BANK", "Zitouna Takaful"
];

const MASK = "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)";

type Partner = { name: string; logo: string };

function MarqueeRow({
  partners,
  direction,
  duration,
}: {
  partners: Partner[];
  direction: "rtl" | "ltr";
  duration: number;
}) {
  const [paused, setPaused] = useState(false);
  const items = [...partners, ...partners];
  const animationName = direction === "rtl" ? "marquee-rtl" : "marquee-ltr";

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        overflow: "hidden",
        maskImage: MASK,
        WebkitMaskImage: MASK,
        perspective: "1200px",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          margin: 0,
          padding: 0,
          gap: "48px",
          width: "max-content",
          willChange: "transform",
          animation: `${animationName} ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
        className="marquee-track"
      >
        {items.map((partner, index) => {
          const scale = extraLargeLogos.includes(partner.name)
            ? 1.50
            : smallLogos.includes(partner.name)
            ? 0.75
            : largeLogos.includes(partner.name)
            ? 1.1
            : 1;

          return (
            <li key={`${partner.name}-${index}`} style={{ flexShrink: 0 }}>
              <div
                style={{
                  width: "280px",
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px",
                  transition: "transform 0.3s ease",
                  position: "relative",
                }}
                className="logo-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    transform: `scale(${scale})`,
                    transition: "transform 0.3s ease, filter 0.3s ease",
                  }}
                  className="logo-img"
                />
                <span className="logo-tooltip">{partner.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function TrainingPartnerCard({ partner, index }: { partner: typeof trainingPartners[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="partner-card"
    >
      <div className="card-inner">
        <div className="logo-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={partner.logo} alt={partner.name} />
        </div>
        <div className="partner-info">
          <h3>{partner.name}</h3>
          <p>{partner.specialty}</p>
        </div>
      </div>
      <style jsx>{`
        .partner-card {
          height: 100%;
          perspective: 1000px;
        }
        .card-inner {
          background: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 20px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          height: 100%;
          position: relative;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .card-inner:hover {
          transform: translateY(-8px);
          border-color: rgba(37, 99, 235, 0.2);
          box-shadow: 0 12px 24px -10px rgba(37, 99, 235, 0.1);
        }
        .card-inner::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: radial-gradient(circle at center, rgba(37, 99, 235, 0.03) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        .card-inner:hover::after {
          opacity: 1;
        }
        .logo-container {
          height: 60px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .logo-container img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
          filter: grayscale(0.2);
          transition: filter 0.4s ease;
        }
        .card-inner:hover .logo-container img {
          filter: grayscale(0);
        }
        h3 {
          font-family: var(--font-gotham, sans-serif);
          font-size: 1.125rem;
          font-weight: 500;
          color: #1e293b;
          margin: 0 0 8px 0;
          letter-spacing: -0.01em;
        }
        p {
          font-family: var(--font-gotham, sans-serif);
          font-size: 0.8125rem;
          font-weight: 400;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }
      `}</style>
    </motion.div>
  );
}

export function TrustedBySection() {
  return (
    <section
      style={{
        background: "#ffffff",
        paddingTop: "60px",
        paddingBottom: "100px",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        borderTop: "1px solid #f1f5f9",
      }}
    >
      <style jsx global>{`
        @keyframes marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-ltr {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .logo-card:hover {
          transform: scale(1.04);
        }

        .logo-tooltip {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.9);
          background: rgba(15, 23, 42, 0.92);
          color: #ffffff;
          font-family: var(--font-gotham, sans-serif);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 8px 18px;
          border-radius: 10px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.25s ease, transform 0.25s ease;
          z-index: 20;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
          backdrop-filter: blur(4px);
        }

        .logo-card:hover .logo-tooltip {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .logo-card:hover .logo-img {
          filter: brightness(0.5) drop-shadow(0 2px 8px rgba(0,0,0,0.1));
        }
      `}</style>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <h3 style={{
            fontFamily: "var(--font-gotham, sans-serif)",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#64748b",
            letterSpacing: "0.2em",
            textTransform: "uppercase"
          }}>
            Global Enterprise Trust
          </h3>
        </motion.div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          position: "relative",
          zIndex: 10,
          width: "100%",
          marginBottom: "80px"
        }}
      >
        <div className="marquee-row-wrapper" style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          <MarqueeRow partners={internationalPartners} direction="rtl" duration={40} />
        </div>

        <div className="marquee-row-wrapper" style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          <MarqueeRow partners={grosComptesPartners} direction="ltr" duration={70} />
        </div>

        <div className="marquee-row-wrapper" style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          <MarqueeRow partners={autresPartners} direction="rtl" duration={50} />
        </div>
      </div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <CyberSectionDivider />
        <SectionDivider title="Partnerships" theme="red" className="mb-16" />

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
              margin: 0
            }}
          >
            Training Partners
          </motion.h1>
          <p style={{
            fontFamily: "var(--font-gotham, sans-serif)",
            fontSize: "1rem",
            color: "#64748b",
            marginTop: "16px",
            fontWeight: 400
          }}>
            Expert institutions delivering specialized cybersecurity certifications.
          </p>
        </div>

        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {trainingPartners.map((partner, index) => (
            <TrainingPartnerCard key={partner.name} partner={partner} index={index} />
          ))}
        </div>

        <CertificationsList />
      </div>
    </section>
  );
}