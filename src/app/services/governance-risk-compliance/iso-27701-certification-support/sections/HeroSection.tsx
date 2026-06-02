"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="ISO 27701 Certification"
      description="Extend your ISMS with a Privacy Information Management System to ensure compliant personal data processing aligned with ISO 27701."
      heroItems={["PIMS implementation", "Privacy compliance", "ISO 27701 certification"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "ISO 27701" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Get ISO 27701 Certified"
      ctaHref="/contact"
    />
  );
}
