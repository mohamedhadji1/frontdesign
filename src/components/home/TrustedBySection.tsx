"use client";

const trainingPartners = [
  { name: "EC-Council", logo: "/trustedBy/training/EC-council.png", specialty: "Ethical Hacking & Security Certifications" },
  { name: "KnowBe4", logo: "/trustedBy/training/KnowBe4.png", specialty: "Security Awareness & Phishing Simulation" },
  { name: "PECB", logo: "/trustedBy/training/PECB.png", specialty: "ISO Standards Audit & Certifications" },
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
  // Double the list for seamless infinite loop
  const items = [...partners, ...partners];

  const animationName = direction === "rtl" ? "marquee-rtl" : "marquee-ltr";

  return (
    <div
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
                    transition: "transform 0.3s ease",
                  }}
                  className="logo-img"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function TrustedBySection() {
  return (
    <section
      style={{
        background: "#fff",
        paddingTop: "48px",
        paddingBottom: "48px",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        borderTop: "1px solid #f4f4f5",
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

        /* Pause entire track on row hover */
        .marquee-row-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        /* Card lift on hover */
        .logo-card:hover {
          transform: scale(1.04);
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          position: "relative",
          zIndex: 10,
          width: "100%",
        }}
      >
        {/* Row 1 — International partners — RTL — 35s */}
        <div className="marquee-row-wrapper" style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          <MarqueeRow partners={internationalPartners} direction="rtl" duration={35} />
        </div>

        {/* Row 2 — Gros comptes Tunisia — LTR — 38s */}
        <div className="marquee-row-wrapper" style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          <MarqueeRow partners={grosComptesPartners} direction="ltr" duration={38} />
        </div>

        {/* Row 3 — Autres partners — RTL — 42s */}
        <div className="marquee-row-wrapper" style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          <MarqueeRow partners={autresPartners} direction="rtl" duration={42} />
        </div>
      </div>
    </section>
  );
}