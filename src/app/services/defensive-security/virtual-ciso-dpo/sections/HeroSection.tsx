"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Virtual CISO & DPO"
      description="Get ongoing strategic cyber leadership, advisory, and privacy compliance guidance from seasoned executives — without the full-time overhead."
      heroItems={["Strategic advisory", "GDPR & privacy compliance", "Executive leadership"]}
      breadcrumbs={[{ label: "Defensive Security", href: "/services/defensive-security" }, { label: "Virtual CISO/DPO" }]}
      videoSrc="/vids/SOC.mp4"
      ctaLabel="Retain Virtual Leadership"
      ctaHref="/contact"
    />
  );
}
