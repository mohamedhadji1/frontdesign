"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Red Team Operations"
      description="Test the limits of your perimeter. Identify zero-day vulnerabilities, physical weaknesses, and social engineering risks through full-scale adversarial emulation."
      heroItems={["Adversarial simulation", "Physical and digital intrusion paths", "Real attack behavior"]}
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Red Team" }]}
      videoSrc="/vids/cover red team.mp4"
      ctaLabel="Schedule an Assessment"
      ctaHref="/contact"
    />
  );
}
