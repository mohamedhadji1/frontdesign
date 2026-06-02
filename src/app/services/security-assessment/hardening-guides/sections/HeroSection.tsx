"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Hardening Guides"
      description="Reduce your attack surface with expert-authored hardening guides for operating systems, applications, network devices, and cloud services."
      heroItems={["OS hardening", "Application hardening", "Network device security"]}
      breadcrumbs={[{ label: "Security Assessment", href: "/services/security-assessment" }, { label: "Hardening Guides" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Get Hardening Guidance"
      ctaHref="/contact"
    />
  );
}
