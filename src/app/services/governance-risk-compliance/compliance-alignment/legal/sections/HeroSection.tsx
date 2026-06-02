"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Legal Compliance"
      description="Align your technical infrastructure and operational data flows with regional legal and privacy obligations to reduce legal risk and ensure data sovereignty."
      heroItems={["Legal alignment", "Data sovereignty", "Privacy obligations"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "Compliance", href: "/services/governance-risk-compliance/compliance-alignment" }, { label: "Legal" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Ensure Legal Compliance"
      ctaHref="/contact"
    />
  );
}
