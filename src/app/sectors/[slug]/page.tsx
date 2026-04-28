import { notFound } from "next/navigation";
import { SectorDetailPage } from "../components/SectorDetailPage";
import { sectorPagesBySlug, sectorSlugs } from "../sectorContent";

export function generateStaticParams() {
  return sectorSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = sectorPagesBySlug[slug];

  if (!page) {
    return {
      title: "Sectors | Keystone",
    };
  }

  return {
    title: `${page.eyebrow} Sector | Keystone`,
    description: page.description,
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = sectorPagesBySlug[slug];

  if (!page) {
    notFound();
  }

  return <SectorDetailPage page={page} />;
}
