"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Risk Management Support"
      description="Build resilient corporate risk structures with strategic partnerships, treatment playbooks, and mitigation models aligned to your business environment."
      heroItems={["Risk frameworks", "Treatment playbooks", "Mitigation models"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "Risk Management" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Strengthen Risk Management"
      ctaHref="/contact"
    />
  );
}
