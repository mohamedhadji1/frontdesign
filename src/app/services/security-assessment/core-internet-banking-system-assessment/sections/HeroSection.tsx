"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Core Banking Assessment"
      description="Security assessment of core banking and internet banking systems to identify vulnerabilities in transaction processing, authentication, and data handling."
      heroItems={["Transaction security", "Authentication testing", "Core banking audit"]}
      breadcrumbs={[{ label: "Security Assessment", href: "/services/security-assessment" }, { label: "Core Banking" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Secure Your Banking Platform"
      ctaHref="/contact"
    />
  );
}
