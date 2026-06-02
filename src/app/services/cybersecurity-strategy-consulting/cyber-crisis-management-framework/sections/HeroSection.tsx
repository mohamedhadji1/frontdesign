"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Cyber Crisis Management"
      description="Build a comprehensive cyber crisis management framework enabling rapid detection, structured response, and coordinated recovery from major cyber incidents."
      heroItems={["Crisis detection", "Structured response", "Coordinated recovery"]}
      breadcrumbs={[{ label: "Strategy Consulting", href: "/services/cybersecurity-strategy-consulting" }, { label: "Crisis Management" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Build Crisis Capabilities"
      ctaHref="/contact"
    />
  );
}
