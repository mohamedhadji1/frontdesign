import { ContactCTASection } from "@/components/home/ContactCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroSection } from "./sections/HeroSection";
import { WhatWeTestSection } from "./sections/WhatWeTestSection";
import { WhyAuditSection } from "./sections/WhyAuditSection";
import { ApproachSection } from "./sections/ApproachSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { RedTeamCTASection } from "../sections/RedTeamCTASection";

export const metadata = {
  title: "Web & Mobile App Audit | Keystone",
  description: "Deep security assessments of business-critical web portals and mobile applications to prevent data leaks or logic abuse.",
};

export default function WebMobileAuditPage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <CyberSectionDivider />
      <WhatWeTestSection />
      <CyberSectionDivider />
      <WhyAuditSection />
      <CyberSectionDivider />
      <ApproachSection />
      <CyberSectionDivider />
      <BenefitsSection />
      <CyberSectionDivider />
      <RedTeamCTASection />
    </main>
  );
}