"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Technical Assistance"
      description="On-demand technical expertise to support your security team with complex implementations, incident investigations, and capability uplift."
      heroItems={["Expert support", "Incident assistance", "Capability uplift"]}
      breadcrumbs={[{ label: "Security Assessment", href: "/services/security-assessment" }, { label: "Technical Assistance" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Request Technical Support"
      ctaHref="/contact"
    />
  );
}
