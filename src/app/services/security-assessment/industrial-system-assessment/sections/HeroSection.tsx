"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Industrial Systems Assessment"
      description="Assess OT/ICS environments, SCADA systems, and industrial control networks to protect critical infrastructure from cyber threats."
      heroItems={["OT/ICS security", "SCADA assessment", "Industrial network audit"]}
      breadcrumbs={[{ label: "Security Assessment", href: "/services/security-assessment" }, { label: "Industrial Systems" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Secure Industrial Systems"
      ctaHref="/contact"
    />
  );
}
