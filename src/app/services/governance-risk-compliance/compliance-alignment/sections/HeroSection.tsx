"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Compliance Alignment"
      description="Structured assistance to align your business operations with national and local cybersecurity regulatory guidelines and international standards."
      heroItems={["Regulatory alignment", "Standards compliance", "Gap analysis"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "Compliance" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Align Your Compliance"
      ctaHref="/contact"
    />
  );
}
