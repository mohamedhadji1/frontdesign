"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Infrastructure Assessment"
      description="Comprehensive security assessment of your on-premise and hybrid infrastructure to identify misconfigurations, vulnerabilities, and exposure risks."
      heroItems={["Network security review", "Server hardening audit", "Exposure mapping"]}
      breadcrumbs={[{ label: "Security Assessment", href: "/services/security-assessment" }, { label: "Infrastructure" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Assess Your Infrastructure"
      ctaHref="/contact"
    />
  );
}
