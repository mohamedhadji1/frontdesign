import { CareersSection } from "@/components/careers/CareersSection";
import { careersDetails } from "@/lib/careers";

export const metadata = {
  title: "Careers | Keystone",
  description: "Join the Keystone team and help us build a more resilient digital world.",
};

export default function CareersPage() {
  // Get all items across all categories for the general careers page
  const allItems = careersDetails.flatMap(cat => cat.items);
  
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <CareersSection 
        category="General" 
        items={allItems} 
        title="Careers at Keystone"
        description="Join our world-class team of cybersecurity experts. Whether you're an intern, a junior, or a senior, we have a place for you to grow and make an impact."
      />
    </main>
  );
}
