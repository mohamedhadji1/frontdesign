"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Regulatory Assessment"
      description="Gap audits against national cybersecurity frameworks and mandatory government regulatory guidelines to ensure full regulatory compliance."
      heroItems={["Regulatory gap audits", "National frameworks", "Compliance roadmaps"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "IS Security Assessment", href: "/services/governance-risk-compliance/information-system-security-assessment" }, { label: "Regulatory" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Request Regulatory Audit"
      ctaHref="/contact"
    />
  );
}
