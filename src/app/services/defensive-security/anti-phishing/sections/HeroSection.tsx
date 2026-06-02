"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Anti-Phishing"
      description="Detect, block, and respond to phishing attacks with multi-layered protection combining email security, user awareness, and real-time threat intelligence."
      heroItems={["Email security", "Phishing simulations", "Real-time blocking"]}
      breadcrumbs={[{ label: "Defensive Security", href: "/services/defensive-security" }, { label: "Anti-Phishing" }]}
      videoSrc="/vids/SOC.mp4"
      ctaLabel="Deploy Anti-Phishing"
      ctaHref="/contact"
    />
  );
}
