import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TransformationDetailContent from "@/components/transformations/detail-content-section";
import TransformationDetailHero from "@/components/transformations/detail-hero-section";
import TransformationProgressSection from "@/components/transformations/progress-section";
import TransformationQuoteSection from "@/components/transformations/detail-quote-section";
import { getTransformationBySlug, transformationStories } from "@/components/transformations/transformation-data";

type TransformationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return transformationStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: TransformationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getTransformationBySlug(slug);

  if (!story) return { title: "Training Guide Not Found | Bazooka Fitness" };

  return {
    title: `${story.name} | Bazooka Fitness`,
    description: `${story.result} Explore the Bazooka Fitness training direction for this goal.`,
  };
}

export default async function TransformationStoryPage({ params }: TransformationPageProps) {
  const { slug } = await params;
  const story = getTransformationBySlug(slug);

  if (!story) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <TransformationDetailHero story={story} />
      <TransformationDetailContent story={story} />
      <TransformationProgressSection story={story} />
      <TransformationQuoteSection story={story} />
    </main>
  );
}
