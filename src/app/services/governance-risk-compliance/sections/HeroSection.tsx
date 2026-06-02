"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Governance, Risk & Compliance"
      description="Master your risks, meet regulatory expectations, and strengthen your organization's resilience with a structured GRC approach tailored to your environment."
      heroItems={["Risk clarity", "Compliance confidence", "Governance that strengthens resilience"]}
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "GRC" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Consult an Expert"
      ctaHref="/contact"
      secondaryCtaLabel="View all services"
      secondaryCtaHref="/services"
    />
  );
}
