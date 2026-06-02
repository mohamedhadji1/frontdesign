"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Incident Response"
      description="When a breach occurs, every second counts. Keystone's incident response team deploys rapidly to contain threats, preserve evidence, and restore normal operations."
      heroItems={["Rapid containment", "Evidence preservation", "Business recovery"]}
      breadcrumbs={[{ label: "Defensive Security", href: "/services/defensive-security" }, { label: "Incident Response" }]}
      videoSrc="/vids/SOC.mp4"
      ctaLabel="Request Incident Response"
      ctaHref="/contact"
    />
  );
}
