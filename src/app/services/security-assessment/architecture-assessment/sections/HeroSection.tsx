"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Architecture Assessment"
      description="Evaluate the security of your technical architecture to identify design flaws, trust boundary weaknesses, and systemic vulnerabilities before they are exploited."
      heroItems={["Design flaw analysis", "Trust boundary review", "Systemic risk identification"]}
      breadcrumbs={[{ label: "Security Assessment", href: "/services/security-assessment" }, { label: "Architecture" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Assess Your Architecture"
      ctaHref="/contact"
    />
  );
}
