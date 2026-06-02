"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="ISO 22301 Certification"
      description="Guidance to build a Business Continuity Management System and achieve certified crisis resilience recognized internationally."
      heroItems={["BCMS design", "ISO 22301 alignment", "Certification support"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "ISO 22301" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Get Certified"
      ctaHref="/contact"
    />
  );
}
