"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="SOC Management"
      description="Design, build, or optimize your Security Operations Center. From technology stack to analyst workflows, Keystone delivers a fully operational SOC capability."
      heroItems={["SOC design & build", "Analyst training", "Tool integration & SIEM"]}
      breadcrumbs={[{ label: "Defensive Security", href: "/services/defensive-security" }, { label: "SOC Management" }]}
      videoSrc="/vids/SOC.mp4"
      ctaLabel="Build Your SOC"
      ctaHref="/contact"
      theme="blue"
    />
  );
}
