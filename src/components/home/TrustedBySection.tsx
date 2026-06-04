"use client";

import Image from "next/image";
import { SectionDivider } from "../ui/SectionDivider";
import { CyberSectionDivider } from "../ui/CyberSectionDivider";

const trainingPartners = [
  { name: "EC-Council", logo: "/trustedBy/training/EC-council.png", specialty: "Ethical Hacking & Security Certifications" },
  { name: "KnowBe4", logo: "/trustedBy/training/KnowBe4.png", specialty: "Security Awareness & Phishing Simulation" },
  { name: "PECB", logo: "/trustedBy/training/PECB.png", specialty: "ISO Standards Audit & Certifications" },
  { name: "OffSec", logo: "/trustedBy/training/offsec.png", specialty: "Offensive Security & Penetration Testing Training" },
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
  "ARAB TUNISIAN BANK",
  "ODDO BHF SCA",
  "alBaraka Bank",
  "SOFRECOM",
  "Poulina Group Holding",
  "Banque Zitouna",
  "BTE",
  "Jumhoria Bank",
  "SIBTEL",
  "BNA ASSURANCES (AMI)",
  "ASSURANCE ASTREE",
  "THG",
  "BIAT ASSURANCES",
  "BH ASSURANCE",
  "ADVANS TUNISIE",
  "BMCE CAPITAL",
  "Banque Tunisienne de Solidarité"
];

const smallLogos = [
  "BANK OF KIGALI",
  "Assurances M.A.E",
  "ANTIC",
  "FTUSA",
  "Ooredoo",
  "BEAC",
  "STEG",
  "BIAT",
  "Carte Assurance"
];

export function TrustedBySection() {
  return (
    <section className="bg-white py-16 relative overflow-hidden w-full border-t border-zinc-100">
      {/* CSS Styles for seamless hardware-accelerated marquee */}
      <style jsx global>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-rtl {
          display: flex;
          width: max-content;
          animation: marquee-rtl 45s linear infinite;
        }
        .animate-marquee-ltr-fast {
          display: flex;
          width: max-content;
          animation: marquee-ltr 45s linear infinite;
        }
        .animate-marquee-rtl:hover,
        .animate-marquee-ltr-fast:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Premium Gradient Masks for seamless entry/exit fades */}
      <div className="absolute top-0 bottom-0 left-0 w-20 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl text-center mb-4">
          Our Trusted Partners
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-center font-medium text-sm md:text-base tracking-wide">
          Financial institutions, major corporations, and industry leaders rely on our expertise.
        </p>
      </div>

      <div className="flex flex-col gap-10 relative z-10">
        {/* Row 1: Client Internationaux (Right to Left) */}
        <div className="space-y-3">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              International Clients
            </h3>
          </div>
          <div className="w-full overflow-hidden py-4 bg-zinc-50/50 border-y border-zinc-100/50">
            <div className="animate-marquee-rtl gap-16 md:gap-24 px-4">
              {/* Double arrays to ensure seamless loop */}
              {[...internationalPartners, ...internationalPartners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="group relative flex items-center justify-center shrink-0 h-20 w-40 md:h-24 md:w-48 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-full h-full flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-[90%] max-h-[80%] object-contain"
                      style={{ transform: smallLogos.includes(partner.name) ? "scale(0.7)" : largeLogos.includes(partner.name) ? "scale(1.35)" : "scale(1)" }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs md:text-sm font-semibold text-zinc-800 text-center line-clamp-2 px-2">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Gros comptes Tunisie (Left to Right - Faster) */}
        <div className="space-y-3">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Major Accounts Tunisia
            </h3>
          </div>
          <div className="w-full overflow-hidden py-4 bg-zinc-50/50 border-y border-zinc-100/50">
            <div className="animate-marquee-ltr-fast gap-16 md:gap-24 px-4">
              {[...grosComptesPartners, ...grosComptesPartners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="group relative flex items-center justify-center shrink-0 h-20 w-40 md:h-24 md:w-48 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-full h-full flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-[90%] max-h-[80%] object-contain"
                      style={{ transform: smallLogos.includes(partner.name) ? "scale(0.7)" : largeLogos.includes(partner.name) ? "scale(1.35)" : "scale(1)" }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs md:text-sm font-semibold text-zinc-800 text-center line-clamp-2 px-2">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Autres (Right to Left) */}
        <div className="space-y-3">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Other Partners
            </h3>
          </div>
          <div className="w-full overflow-hidden py-4 bg-zinc-50/50 border-y border-zinc-100/50">
            <div className="animate-marquee-rtl gap-16 md:gap-24 px-4">
              {[...autresPartners, ...autresPartners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="group relative flex items-center justify-center shrink-0 h-20 w-40 md:h-24 md:w-48 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-full h-full flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-[90%] max-h-[80%] object-contain"
                      style={{ transform: smallLogos.includes(partner.name) ? "scale(0.7)" : largeLogos.includes(partner.name) ? "scale(1.35)" : "scale(1)" }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs md:text-sm font-semibold text-zinc-800 text-center line-clamp-2 px-2">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider and Training Partners Section */}
      <div className="w-full flex flex-col items-center mt-16 mb-10">
        <CyberSectionDivider className="w-full mb-8" theme="red" />
        <SectionDivider title="Training Partners" theme="red" className="mb-8" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 py-8 relative z-10">
        {trainingPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="group flex flex-col items-center justify-between text-center p-6 bg-zinc-50/40 hover:bg-white border border-zinc-100/80 hover:border-zinc-200/80 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 h-56"
          >
            <div className="flex-1 flex items-center justify-center w-full h-24">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 max-w-full object-contain transition-all duration-300"
              />
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-sm text-zinc-800 tracking-wide uppercase">{partner.name}</h4>
              <p className="text-xs text-zinc-400 mt-1 max-w-[200px] mx-auto font-medium leading-relaxed">{partner.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
