"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Cyber Attack Simulation"
      description="By simulating advanced adversary tactics, we identify weaknesses in technology, processes & people and help strengthen your overall resilience."
      heroItems={["Adversary emulation", "Real-world attack paths", "Resilience under pressure"]}
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Cyber Attack Simulation" }]}
      imageSrc="/background/Offensive/Rectangle 46.png"
      ctaLabel="Request Service Now"
      ctaHref="/contact"
      secondaryCtaLabel="Immediate Incident Response"
      secondaryCtaHref="/report-incident"
    />
  );
}
