"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Risk Assessment"
      description="Holistic evaluation to anticipate potential threats, quantify impact, and formulate strategic risk mitigation plans aligned to your business context."
      heroItems={["Threat anticipation", "Impact quantification", "Mitigation planning"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "Risk Assessment" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Request Risk Assessment"
      ctaHref="/contact"
    />
  );
}
