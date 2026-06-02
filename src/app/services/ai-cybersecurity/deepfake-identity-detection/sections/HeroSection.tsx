"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Deepfake & Identity Detection"
      description="Deploy detection capabilities to identify AI-generated deepfakes, synthetic identities, and voice cloning attacks targeting your organization."
      heroItems={["Deepfake detection", "Synthetic identity analysis", "Voice cloning defense"]}
      breadcrumbs={[{ label: "AI Cybersecurity", href: "/services/ai-cybersecurity" }, { label: "Deepfake Detection" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Detect Deepfakes"
      ctaHref="/contact"
    />
  );
}
