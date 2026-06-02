"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Offensive Assessments"
      description="Comprehensive attack-surface evaluation combining multiple offensive disciplines to identify and exploit vulnerabilities across your entire digital estate."
      heroItems={["Attack surface mapping", "Exploit research", "Vulnerability chaining"]}
      breadcrumbs={[{ label: "Offensive Security", href: "/services/offensive-security" }, { label: "Offensive Assessments" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Request Assessment"
      ctaHref="/contact"
    />
  );
}
