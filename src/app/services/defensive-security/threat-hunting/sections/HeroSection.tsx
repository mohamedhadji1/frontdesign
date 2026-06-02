"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Threat Hunting"
      description="Proactively search for threats that evade traditional security tools. Keystone's hunters combine threat intelligence with behavioral analysis to uncover hidden adversaries."
      heroItems={["Behavioral analysis", "Hypothesis-driven hunting", "Advanced threat detection"]}
      breadcrumbs={[{ label: "Defensive Security", href: "/services/defensive-security" }, { label: "Threat Hunting" }]}
      videoSrc="/vids/SOC.mp4"
      ctaLabel="Start Threat Hunting"
      ctaHref="/contact"
    />
  );
}
