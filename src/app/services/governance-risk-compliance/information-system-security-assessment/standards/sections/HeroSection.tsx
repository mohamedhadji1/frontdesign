"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Standards Assessment"
      description="Comprehensive alignment audits against international standards: ISO 27001, PCI-DSS, GDPR, SWIFT, and NIST frameworks."
      heroItems={["ISO 27001", "PCI-DSS & GDPR", "SWIFT & NIST"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "IS Security Assessment", href: "/services/governance-risk-compliance/information-system-security-assessment" }, { label: "Standards" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Request Standards Audit"
      ctaHref="/contact"
    />
  );
}
