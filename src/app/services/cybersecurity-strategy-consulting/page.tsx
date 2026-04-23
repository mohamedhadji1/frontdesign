import { ContactCTASection } from "@/components/home/ContactCTASection";
import { HeroSection } from "./sections/HeroSection";
import { SubServicesSection } from "./sections/SubServicesSection";
import { ApproachSection } from "./sections/ApproachSection";

export const metadata = {
  title: "Cybersecurity Strategy Consulting - Keystone",
  description: "Empower your organization with visionary cybersecurity leadership. We align your security initiatives with business objectives.",
};

export default function CybersecurityStrategyConsultingPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <SubServicesSection />
      <ApproachSection />
      <ContactCTASection />
    </main>
  );
}
