"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Dark Web Monitoring"
      description="Continuously monitor dark web markets, forums, and criminal communities for leaked credentials, stolen data, and early indicators of attacks targeting your organization."
      heroItems={["Credential leak detection", "Data breach alerts", "Criminal forum monitoring"]}
      breadcrumbs={[{ label: "Defensive Security", href: "/services/defensive-security" }, { label: "Dark Web Monitoring" }]}
      videoSrc="/vids/SOC.mp4"
      ctaLabel="Start Monitoring"
      ctaHref="/contact"
    />
  );
}
