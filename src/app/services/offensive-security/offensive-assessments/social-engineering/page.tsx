import { BackToTop } from "@/components/ui/BackToTop";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroSection } from "./sections/HeroSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { CTASection } from "./sections/CTASection";

export default function SocialEngineeringPage() {
  return (
    <main className="min-h-screen bg-black/20">
      <HeroSection />
      <CyberSectionDivider />
      <FeaturesSection />
      <CyberSectionDivider />
      <CTASection />
      <BackToTop />
    </main>
  );
}
