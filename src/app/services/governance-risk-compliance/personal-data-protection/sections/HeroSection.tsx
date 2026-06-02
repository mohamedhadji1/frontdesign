"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Personal Data Protection"
      description="Enforce responsible data management rules, user consent compliance, and privacy-by-design standards across your organization."
      heroItems={["GDPR compliance", "Privacy-by-design", "Data subject rights"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "Personal Data Protection" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Protect Personal Data"
      ctaHref="/contact"
    />
  );
}
