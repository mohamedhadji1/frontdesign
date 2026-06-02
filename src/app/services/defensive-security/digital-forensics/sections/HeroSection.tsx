"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Digital Forensics"
      description="Reconstruct incidents with forensic precision. Our experts analyze artifacts, recover evidence, and provide legally sound reports to support investigation and recovery."
      heroItems={["Evidence collection", "Malware analysis", "Legal-grade reporting"]}
      breadcrumbs={[{ label: "Defensive Security", href: "/services/defensive-security" }, { label: "Digital Forensics" }]}
      videoSrc="/vids/SOC.mp4"
      ctaLabel="Request Forensic Analysis"
      ctaHref="/contact"
    />
  );
}
