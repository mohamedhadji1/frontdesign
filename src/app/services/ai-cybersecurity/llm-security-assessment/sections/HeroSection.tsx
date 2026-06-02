"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="LLM Security Assessment"
      description="Evaluate the security of large language model deployments for prompt injection, data poisoning, model theft, and output manipulation vulnerabilities."
      heroItems={["Prompt injection testing", "Data poisoning detection", "Model security audit"]}
      breadcrumbs={[{ label: "AI Cybersecurity", href: "/services/ai-cybersecurity" }, { label: "LLM Security" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Assess Your LLM"
      ctaHref="/contact"
    />
  );
}
