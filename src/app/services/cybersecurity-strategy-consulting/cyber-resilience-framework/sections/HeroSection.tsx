"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Cyber Resilience Framework"
      description="Design a holistic cyber resilience framework that integrates prevention, detection, response, and recovery capabilities across your entire organization."
      heroItems={["Resilience architecture", "Prevention to recovery", "Organizational alignment"]}
      breadcrumbs={[{ label: "Strategy Consulting", href: "/services/cybersecurity-strategy-consulting" }, { label: "Resilience Framework" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Build Your Framework"
      ctaHref="/contact"
    />
  );
}
