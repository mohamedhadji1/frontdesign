"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Access Rights Assessment"
      description="Audit directory roles, active permissions, and privileged account access to enforce least privilege and prevent unauthorized escalation."
      heroItems={["Directory audit", "Privilege enforcement", "Access governance"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "Access Rights" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Request Assessment"
      ctaHref="/contact"
    />
  );
}
