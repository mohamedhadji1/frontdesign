"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Security Assessment"
      description="Keystone combines automated discovery, manual verification, and technical assistance to evaluate your critical systems, expose weaknesses, and implement durable fixes."
      heroItems={["Infrastructure exposure mapping", "Configuration and hardening validation", "Actionable remediation support"]}
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Security Assessment" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Schedule an Assessment"
      ctaHref="/contact"
      secondaryCtaLabel="View all services"
      secondaryCtaHref="/services"
    />
  );
}
