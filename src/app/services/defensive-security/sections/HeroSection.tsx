"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Defensive Security"
      description="Build resilient defenses that detect, contain, and recover from threats. Keystone's defensive team operates your security posture around the clock."
      heroItems={["SOC Operations", "Threat Hunting", "Incident Response"]}
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Defensive Security" }]}
      videoSrc="/vids/SOC.mp4"
      ctaLabel="Strengthen Your Defenses"
      ctaHref="/contact"
      secondaryCtaLabel="View all services"
      secondaryCtaHref="/services"
    />
  );
}
