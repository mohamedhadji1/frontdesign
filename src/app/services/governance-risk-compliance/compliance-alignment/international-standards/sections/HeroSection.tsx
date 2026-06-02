"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="International Standards"
      description="Achieve and maintain compliance with international cybersecurity standards including ISO 27001, PCI-DSS, NIST, GDPR, and SWIFT CSP."
      heroItems={["ISO 27001 alignment", "PCI-DSS & GDPR", "NIST & SWIFT frameworks"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "Compliance", href: "/services/governance-risk-compliance/compliance-alignment" }, { label: "International Standards" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Achieve Compliance"
      ctaHref="/contact"
    />
  );
}
