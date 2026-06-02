"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="AI Strategy & Governance"
      description="Develop a comprehensive AI governance framework to ensure responsible, secure, and compliant deployment of artificial intelligence systems."
      heroItems={["AI governance", "Responsible AI", "Compliance frameworks"]}
      breadcrumbs={[{ label: "AI Cybersecurity", href: "/services/ai-cybersecurity" }, { label: "AI Strategy & Governance" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Govern Your AI"
      ctaHref="/contact"
    />
  );
}
