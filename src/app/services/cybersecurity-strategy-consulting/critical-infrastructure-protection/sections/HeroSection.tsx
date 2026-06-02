"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Critical Infrastructure Protection"
      description="Develop and implement protection strategies for critical national infrastructures including energy, finance, transport, and telecommunications sectors."
      heroItems={["National CIP strategies", "Sector risk assessment", "Protection frameworks"]}
      breadcrumbs={[{ label: "Strategy Consulting", href: "/services/cybersecurity-strategy-consulting" }, { label: "CIP" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Protect Critical Infrastructure"
      ctaHref="/contact"
    />
  );
}
