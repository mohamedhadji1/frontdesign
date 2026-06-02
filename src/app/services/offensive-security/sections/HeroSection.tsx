"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Offensive Security"
      description="Expose attack paths before adversaries do. Our offensive team simulates real-world breaches to validate your defenses, harden your perimeter, and protect critical assets."
      heroItems={["Penetration Testing", "Attack Simulations", "Exploit Research"]}
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Offensive Security" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Request Assessment"
      ctaHref="/contact"
      secondaryCtaLabel="View all services"
      secondaryCtaHref="/services"
    />
  );
}
