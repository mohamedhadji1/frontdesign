"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="BCP & DRP Development"
      description="Design custom business continuity and disaster recovery plans that minimize downtime and ensure your operations recover rapidly from any disruption."
      heroItems={["Business continuity", "Disaster recovery", "Crisis resilience"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "BCP & DRP" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Build Your BCP/DRP"
      ctaHref="/contact"
    />
  );
}
