import { ContactCTASection } from "@/components/home/ContactCTASection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroSection } from "./sections/HeroSection";
import { OfferingsSection } from "./sections/OfferingsSection";
import { MethodologySection } from "./sections/MethodologySection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { CrossSellingSection } from "./sections/CrossSellingSection";

export const metadata = {
  title: "Technical Audit & Infrastructure Security | Keystone",
  description: "Secure your critical infrastructure, cloud environments, and core banking systems with deep technical audits and architecture reviews.",
};

export default function TechnicalAuditPage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <CyberSectionDivider />
      <OfferingsSection />
      <CyberSectionDivider />
      <MethodologySection />
      <CyberSectionDivider />
      <BenefitsSection />
      <CrossSellingSection />
      <CyberSectionDivider />
      <ContactCTASection />
    </main>
  );
}
