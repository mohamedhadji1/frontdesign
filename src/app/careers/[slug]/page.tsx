import { notFound } from "next/navigation";
import { CareersSection } from "@/components/careers/CareersSection";
import { careerSlug, careersDetails } from "@/lib/careers";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CareerCategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.slug.toLowerCase();
  
  const categoryData = careersDetails.find(cat => 
    careerSlug(cat.category) === categorySlug
  );

  if (!categoryData) {
    notFound();
  }

  return (
    <main className="bg-[#0a0a0a]">
      <CareersSection 
        category={categoryData.category} 
        items={categoryData.items}
        title={categoryData.category}
        description={categoryData.description}
      />
    </main>
  );
}

// Generate static params for all categories
export async function generateStaticParams() {
  return careersDetails.map((cat) => ({
    slug: careerSlug(cat.category),
  }));
}
