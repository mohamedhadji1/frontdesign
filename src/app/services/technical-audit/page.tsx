import { ContactCTASection } from "@/components/home/ContactCTASection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { HeroSection } from "./sections/HeroSection";
import { OfferingsSection } from "./sections/OfferingsSection";

export const metadata = {
  title: "Technical Audit & Infrastructure Security | Keystone",
  description: "Secure your critical infrastructure, cloud environments, and core banking systems with deep technical audits and architecture reviews.",
};

export default function TechnicalAuditPage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <div className="bg-white">
        <SectionDivider title="OFFERINGS" />
        <OfferingsSection />
      </div>
      <ContactCTASection />
    </main>
  );
}
