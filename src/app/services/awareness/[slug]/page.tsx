import { notFound } from "next/navigation";
import { AwarenessServicePage } from "../components/AwarenessServicePage";
import { awarenessPages, awarenessPagesBySlug } from "../data";

export function generateStaticParams() {
  return awarenessPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = awarenessPagesBySlug[slug];

  if (!page) {
    return {
      title: "Awareness | Keystone",
    };
  }

  return {
    title: `${page.title} | Keystone`,
    description: page.description,
  };
}

export default async function AwarenessDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = awarenessPagesBySlug[slug];

  if (!page) {
    notFound();
  }

  return <AwarenessServicePage page={page} />;
}
