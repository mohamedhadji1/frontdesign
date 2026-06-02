"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Network Security Architecture"
      description="Design and validate a resilient network security architecture with segmentation, firewall review, zero-trust principles, and perimeter hardening."
      heroItems={["Network segmentation", "Firewall review", "Zero-trust design"]}
      breadcrumbs={[{ label: "Security Assessment", href: "/services/security-assessment" }, { label: "Network Security" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Harden Your Network"
      ctaHref="/contact"
    />
  );
}
