"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="ISO 27001 Certification"
      description="Expert consulting to design, implement, and maintain a compliant Information Security Management System aligned with ISO 27001."
      heroItems={["ISMS design", "ISO 27001 alignment", "Certification support"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "ISO 27001" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Get ISO 27001 Certified"
      ctaHref="/contact"
    />
  );
}
