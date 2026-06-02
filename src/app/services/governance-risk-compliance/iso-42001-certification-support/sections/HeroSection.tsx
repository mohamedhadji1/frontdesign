"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="ISO 42001 Certification"
      description="Establish an Artificial Intelligence Management System to govern algorithmic safety, trust, and responsible AI deployment."
      heroItems={["AI governance", "Algorithmic safety", "ISO 42001 alignment"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "ISO 42001" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Get ISO 42001 Certified"
      ctaHref="/contact"
    />
  );
}
