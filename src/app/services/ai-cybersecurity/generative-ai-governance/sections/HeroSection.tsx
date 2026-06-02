"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Generative AI Governance"
      description="Establish governance controls for generative AI tools to prevent data leakage, hallucinations, and misuse in enterprise environments."
      heroItems={["GenAI controls", "Data leakage prevention", "Enterprise AI governance"]}
      breadcrumbs={[{ label: "AI Cybersecurity", href: "/services/ai-cybersecurity" }, { label: "Generative AI Governance" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Govern Generative AI"
      ctaHref="/contact"
    />
  );
}
