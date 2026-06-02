"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="SOC Implementation"
      description="Design and stand up a Security Operations Center aligned to your organizational needs, from architecture and tooling to staffing and processes."
      heroItems={["SOC architecture", "Technology selection", "Analyst processes"]}
      breadcrumbs={[{ label: "Strategy Consulting", href: "/services/cybersecurity-strategy-consulting" }, { label: "SOC Implementation" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Build Your SOC"
      ctaHref="/contact"
    />
  );
}
