"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Data Classification"
      description="Map, identify, and categorize sensitive information to apply custom security rules, access governance, and retention policies across your organization."
      heroItems={["Data mapping", "Sensitivity classification", "Access governance"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "Data Classification" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Classify Your Data"
      ctaHref="/contact"
    />
  );
}
