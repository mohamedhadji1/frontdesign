"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Threat Intelligence"
      description="Keystone's Threat Intelligence service offers in-depth analysis of threats and trends in cybersecurity to strengthen your security posture."
      heroItems={["Global IOC monitoring", "Deep trend analysis", "Intelligence sharing"]}
      breadcrumbs={[{ label: "Defensive Security", href: "/services/defensive-security" }, { label: "Threat Intelligence" }]}
      videoSrc="/vids/SOC.mp4"
      ctaLabel="Access Intelligence"
      ctaHref="/contact"
    />
  );
}
