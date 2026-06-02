"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Active Directory Assessment"
      description="Audit your Active Directory environment for misconfigurations, privilege escalation paths, and persistence mechanisms used by real-world attackers."
      heroItems={["AD misconfiguration audit", "Privilege escalation paths", "Persistence detection"]}
      breadcrumbs={[{ label: "Security Assessment", href: "/services/security-assessment" }, { label: "Active Directory" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Request AD Assessment"
      ctaHref="/contact"
    />
  );
}
