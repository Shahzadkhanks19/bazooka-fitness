import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailCtaSection from "@/components/programs/detail-cta-section";
import DetailHeroSection from "@/components/programs/detail-hero-section";
import DetailOverviewSection from "@/components/programs/detail-overview-section";
import DetailProcessSection from "@/components/programs/detail-process-section";
import { getProgramBySlug, programDetails } from "@/components/programs/program-data";

type ProgramPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return programDetails.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return { title: "Program Not Found | Bazooka Fitness" };
  }

  return {
    title: `${program.title} | Bazooka Fitness`,
    description: program.summary,
  };
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <DetailHeroSection program={program} />
      <DetailOverviewSection program={program} />
      <DetailProcessSection program={program} />
      <DetailCtaSection program={program} />
    </main>
  );
}
