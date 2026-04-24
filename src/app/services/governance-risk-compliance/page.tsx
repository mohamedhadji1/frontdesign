import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroSection } from "./sections/HeroSection";
import { PillarsSection } from "./sections/PillarsSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export const metadata = {
  title: "Governance, Risk & Compliance | Keystone",
  description:
    "Strengthen governance, reduce risk, and maintain continuous compliance with Keystone's Governance, Risk & Compliance services.",
};

export default function GovernanceRiskCompliancePage() {
  return (
    <main className="min-h-screen bg-black/20">
      <HeroSection />
      <CyberSectionDivider />
      <PillarsSection />
      <CyberSectionDivider />
      <WhyChooseSection />
      <CyberSectionDivider />
      <ContactCTASection />
    </main>
  );
}
