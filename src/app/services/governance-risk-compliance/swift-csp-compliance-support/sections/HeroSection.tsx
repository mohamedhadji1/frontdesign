"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="SWIFT CSP Compliance"
      description="Independent Customer Security Programme audits and Attestation Support on the SWIFT KYC registry to ensure financial messaging security."
      heroItems={["CSP audit", "SWIFT KYC attestation", "Financial security compliance"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "SWIFT CSP" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Achieve SWIFT Compliance"
      ctaHref="/contact"
    />
  );
}
