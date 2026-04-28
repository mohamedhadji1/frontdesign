import { notFound } from "next/navigation";
import { CareersSection } from "@/components/careers/CareersSection";
import { careersDetails } from "@/lib/careers";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CareerCategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.slug.toLowerCase();
  
  const categoryData = careersDetails.find(cat => 
    cat.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );

  if (!categoryData) {
    notFound();
  }

  return (
    <main className="bg-[#0a0a0a]">
      <CareersSection 
        category={categoryData.category} 
        items={categoryData.items}
        title={`${categoryData.category}`}
        description={`Kickstart your journey with our ${categoryData.category.toLowerCase()}. We're looking for passionate individuals to join our team.`}
      />
    </main>
  );
}

// Generate static params for all categories
export async function generateStaticParams() {
  return careersDetails.map((cat) => ({
    slug: cat.category.toLowerCase().replace(/\s+/g, '-'),
  }));
}
