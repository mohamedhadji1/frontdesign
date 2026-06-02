"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="BCM Resilience & Recovery"
      description="Exercise your business continuity plans through realistic crisis scenarios to validate recovery procedures and strengthen organizational resilience."
      heroItems={["BCM exercises", "Recovery validation", "Resilience testing"]}
      breadcrumbs={[{ label: "Cyber Exercise", href: "/services/cyber-exercise" }, { label: "BCM & Resilience" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Run a BCM Exercise"
      ctaHref="/contact"
    />
  );
}
