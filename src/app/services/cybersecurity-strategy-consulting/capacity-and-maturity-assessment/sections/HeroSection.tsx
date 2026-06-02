"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Maturity Assessment"
      description="Evaluate your organization's cybersecurity maturity level and capacity to identify gaps, prioritize improvements, and build a roadmap toward cyber excellence."
      heroItems={["Maturity benchmarking", "Capacity evaluation", "Improvement roadmap"]}
      breadcrumbs={[{ label: "Strategy Consulting", href: "/services/cybersecurity-strategy-consulting" }, { label: "Maturity Assessment" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Assess Your Maturity"
      ctaHref="/contact"
    />
  );
}
