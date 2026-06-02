"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="System Hardening"
      description="Reduce your attack surface through systematic hardening of operating systems, middleware, and endpoint configurations across your environment."
      heroItems={["OS hardening", "Endpoint configuration", "Attack surface reduction"]}
      breadcrumbs={[{ label: "Security Assessment", href: "/services/security-assessment" }, { label: "System Hardening" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Harden Your Systems"
      ctaHref="/contact"
    />
  );
}
