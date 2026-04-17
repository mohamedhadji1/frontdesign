import { ContactCTASection } from "@/components/home/ContactCTASection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { HeroSection } from "./sections/HeroSection";
import { OfferingsSection } from "./sections/OfferingsSection";
import { MethodologySection } from "./sections/MethodologySection";
import { TestingBenefitsSection } from "./sections/TestingBenefitsSection";

export const metadata = {
  title: "Physical Penetration Testing | Keystone",
  description: "Test the physical perimeter of your locations with simulated real-world intrusions, hardware attacks, and social engineering to identify robust security gaps.",
};

export default function PhysicalPenetrationTestingPage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <div className="bg-[f9fafb]">
        <SectionDivider title="OFFERINGS" />
        <OfferingsSection />
        </div>
        <div className="bg-[#faf9f6]">
        <SectionDivider title="Our Approach" />
        <MethodologySection />
      </div>
      <div className="bg-transparent">
        <SectionDivider title="BENEFITS" />
      </div>
      <TestingBenefitsSection />
      <ContactCTASection />
    </main>
  );
}