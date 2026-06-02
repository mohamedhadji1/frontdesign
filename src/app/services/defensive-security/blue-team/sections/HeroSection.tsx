"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Blue Team"
      description="A dedicated team of defenders that monitors, detects, and responds to threats in real-time, working continuously to protect your organization's digital assets."
      heroItems={["Real-time monitoring", "Threat detection", "Incident containment"]}
      breadcrumbs={[{ label: "Defensive Security", href: "/services/defensive-security" }, { label: "Blue Team" }]}
      videoSrc="/vids/SOC.mp4"
      ctaLabel="Deploy Blue Team"
      ctaHref="/contact"
    />
  );
}
