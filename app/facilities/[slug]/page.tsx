import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FacilityDetailPage from "@/components/facilities/facility-detail";
import { facilityDetails, getFacilityBySlug } from "@/components/facilities/facility-data";

export function generateStaticParams() {
  return facilityDetails.map((facility) => ({ slug: facility.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);

  if (!facility) return {};

  return {
    title: `${facility.title} | Bazooka Fitness`,
    description: facility.summary,
  };
}

export default async function FacilityZonePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);

  if (!facility) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <FacilityDetailPage facility={facility} />
    </main>
  );
}
