"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="DevSecOps"
      description="Integrate security into your development pipeline with automated testing, policy-as-code, and developer training to ship secure software faster."
      heroItems={["Pipeline security", "Policy-as-code", "Shift-left security"]}
      breadcrumbs={[{ label: "Security Assessment", href: "/services/security-assessment" }, { label: "DevSecOps" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Secure Your Pipeline"
      ctaHref="/contact"
    />
  );
}
