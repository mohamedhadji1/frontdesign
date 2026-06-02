"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="IS Security Assessment"
      description="Deep-dive evaluation of your information security management systems and core technical controls to identify gaps and improve your security posture."
      heroItems={["ISMS evaluation", "Technical controls audit", "Gap analysis"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "IS Security Assessment" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Request Assessment"
      ctaHref="/contact"
    />
  );
}
