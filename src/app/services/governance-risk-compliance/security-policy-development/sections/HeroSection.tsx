"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Security Policy Development"
      description="Establish robust, customized security policies integrating industry best practices for comprehensive asset protection and regulatory alignment."
      heroItems={["Policy frameworks", "Industry best practices", "Asset protection"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "Security Policy" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Build Your Policy Framework"
      ctaHref="/contact"
    />
  );
}
