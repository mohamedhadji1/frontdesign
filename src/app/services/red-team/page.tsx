import { ContactCTASection } from "@/components/home/ContactCTASection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { HeroSection } from "./sections/HeroSection";
import { OfferingsSection } from "./sections/OfferingsSection";
import { MethodologySection } from "./sections/MethodologySection";
import { TestingBenefitsSection } from "./sections/TestingBenefitsSection";

export const metadata = {
  title: "Red Team & Offensive Security | Keystone",
  description: "Identify and exploit real-world vulnerabilities with our Red Team, Web & Mobile Audits, and Technical Assessment services.",
};

export default function RedTeamPage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <div className="bg-white">
        <SectionDivider title="OFFERINGS" />
        <OfferingsSection />
        <SectionDivider title="METHODOLOGY" />
        <MethodologySection />
      </div>
      <div className="bg-white">
        <SectionDivider title="BENEFITS" />
      </div>
      <TestingBenefitsSection />
      <ContactCTASection />
    </main>
  );
}