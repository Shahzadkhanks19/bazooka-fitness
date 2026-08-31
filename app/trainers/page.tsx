import type { Metadata } from "next";
import TrainersHeroSection from "@/components/trainers/hero-section";
import TrainersGridSection from "@/components/trainers/trainers-grid-section";
import TrainerValuesSection from "@/components/trainers/trainer-values-section";
import TrainerReviewsCtaSection from "@/components/trainers/reviews-cta-section";

export const metadata: Metadata = {
  title: "Trainers | Bazooka Fitness",
  description: "Meet Bazooka Fitness trainers and explore their coaching specialties and experience.",
};

export default function TrainersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <TrainersHeroSection />
      <TrainersGridSection />
      <TrainerValuesSection />
      <TrainerReviewsCtaSection />
    </main>
  );
}
