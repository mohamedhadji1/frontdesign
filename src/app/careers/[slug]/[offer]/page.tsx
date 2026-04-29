import { notFound } from "next/navigation";
import { CareersSection } from "@/components/careers/CareersSection";
import { careerSlug, careersDetails } from "@/lib/careers";

interface PageProps {
  params: Promise<{
    slug: string;
    offer: string;
  }>;
}

export default async function CareerOfferPage({ params }: PageProps) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.slug.toLowerCase();
  const offerSlug = resolvedParams.offer.toLowerCase();

  const categoryData = careersDetails.find((cat) => careerSlug(cat.category) === categorySlug);
  const selectedOffer = categoryData?.items.find((item) => careerSlug(item) === offerSlug);

  if (!categoryData || !selectedOffer) {
    notFound();
  }

  return (
    <main className="bg-[#0a0a0a]">
      <CareersSection
        category={categoryData.category}
        items={categoryData.items}
        title={selectedOffer}
        description={`Apply for the ${selectedOffer} role at Keystone. Share your background, motivation, and the security work you want to grow into.`}
        selectedOffer={selectedOffer}
      />
    </main>
  );
}

export async function generateStaticParams() {
  return careersDetails.flatMap((cat) =>
    cat.items.map((item) => ({
      slug: careerSlug(cat.category),
      offer: careerSlug(item),
    }))
  );
}
