import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TrainerDetailPage from "@/components/trainers/trainer-detail";
import { getTrainerBySlug, trainers } from "@/components/trainers/trainer-data";

export function generateStaticParams() {
  return trainers.map((trainer) => ({ slug: trainer.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const trainer = getTrainerBySlug(slug);
  if (!trainer) return {};
  return {
    title: `${trainer.name} | Bazooka Fitness Trainer`,
    description: trainer.summary,
  };
}

export default async function TrainerProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trainer = getTrainerBySlug(slug);
  if (!trainer) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <TrainerDetailPage trainer={trainer} />
    </main>
  );
}
