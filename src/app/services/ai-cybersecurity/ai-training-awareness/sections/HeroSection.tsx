"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="AI Training & Awareness"
      description="Educate your teams on AI security risks, responsible use principles, and how to identify adversarial AI threats in everyday business contexts."
      heroItems={["AI security awareness", "Responsible AI training", "Adversarial threat education"]}
      breadcrumbs={[{ label: "AI Cybersecurity", href: "/services/ai-cybersecurity" }, { label: "AI Training" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Train Your Team"
      ctaHref="/contact"
    />
  );
}
