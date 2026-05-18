import { BackToTop } from "@/components/ui/BackToTop";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { ApplicationAssessmentCTASection } from "./sections/ApplicationAssessmentCTASection";
import { AssuranceSection } from "./sections/AssuranceSection";
import { CoverageSection } from "./sections/CoverageSection";
import { HeroSection } from "./sections/HeroSection";
import { WorkflowSection } from "./sections/WorkflowSection";

export default function WebMobileApplicationAssessmentPage() {
  return (
    <main className="min-h-screen bg-black/20">
      <HeroSection />
      <CyberSectionDivider />
      <CoverageSection />
      <CyberSectionDivider />
      <WorkflowSection />
      <CyberSectionDivider />
      <AssuranceSection />
      <CyberSectionDivider />
      <ApplicationAssessmentCTASection />
      <BackToTop />
    </main>
  );
}
