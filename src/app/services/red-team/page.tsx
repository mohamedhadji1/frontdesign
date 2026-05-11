import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroSection } from "./sections/HeroSection";
import { WhatIsRedTeamSection } from "./sections/WhatIsRedTeamSection";
import { OfferingsSection } from "./sections/OfferingsSection";
import { MethodologySection } from "./sections/MethodologySection";
import { TestingBenefitsSection } from "./sections/TestingBenefitsSection";
import { RedTeamCTASection } from "./sections/RedTeamCTASection";
import { BackToTop } from "@/components/ui/BackToTop";

export const metadata = {
  title: "Red Team & Offensive Security | Keystone",
  description: "Identify and exploit real-world vulnerabilities with our Red Team, Web & Mobile Assessments, and Technical Assessment services.",
};

export default function RedTeamPage() {
  return (
    <main className="min-h-screen bg-black/20">
      <HeroSection />
      <CyberSectionDivider />
      <WhatIsRedTeamSection />
      <CyberSectionDivider />
      <OfferingsSection />
      <CyberSectionDivider />
      <MethodologySection />
      <CyberSectionDivider />
      <TestingBenefitsSection />
      <CyberSectionDivider />
      <RedTeamCTASection />
      <BackToTop />
    </main>
  );
}