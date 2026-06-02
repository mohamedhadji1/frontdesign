"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Incident Management"
      description="Establish a structured approach to detecting, containing, and recovering from security incidents with proven frameworks and seasoned incident handlers."
      heroItems={["Incident detection", "Structured response", "Post-incident recovery"]}
      breadcrumbs={[{ label: "Defensive Security", href: "/services/defensive-security" }, { label: "Incident Management" }]}
      videoSrc="/vids/SOC.mp4"
      ctaLabel="Strengthen Your Response"
      ctaHref="/contact"
    />
  );
}
