"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Technical Assessment"
      description="In-depth technical evaluation of your security controls, configurations, and posture to produce actionable findings and prioritized remediation plans."
      heroItems={["Security control review", "Configuration audit", "Remediation roadmap"]}
      breadcrumbs={[{ label: "Security Assessment", href: "/services/security-assessment" }, { label: "Technical Assessment" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Request Technical Assessment"
      ctaHref="/contact"
    />
  );
}
