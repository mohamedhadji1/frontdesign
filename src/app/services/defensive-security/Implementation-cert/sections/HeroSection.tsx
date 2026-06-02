"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="CERT Implementation"
      description="Design, build, and operationalize a Computer Emergency Response Team tailored to your organization's size, sector, and threat landscape."
      heroItems={["CERT design", "Playbook development", "Team training & certification"]}
      breadcrumbs={[{ label: "Defensive Security", href: "/services/defensive-security" }, { label: "CERT Implementation" }]}
      videoSrc="/vids/SOC.mp4"
      ctaLabel="Build Your CERT"
      ctaHref="/contact"
    />
  );
}
