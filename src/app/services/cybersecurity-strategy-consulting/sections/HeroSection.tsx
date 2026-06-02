"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Cybersecurity Strategy Consulting"
      description="Build a cyber-resilient organization with a strategic approach. Keystone helps you design, implement, and operate a complete cybersecurity strategy aligned with your goals."
      heroItems={["National cyber strategies", "CERT & SOC implementation", "Crisis management frameworks"]}
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Strategy Consulting" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Start Your Strategy"
      ctaHref="/contact"
      secondaryCtaLabel="View all services"
      secondaryCtaHref="/services"
    />
  );
}
