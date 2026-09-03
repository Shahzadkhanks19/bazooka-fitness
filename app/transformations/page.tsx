import type { Metadata } from "next";
import TransformationsHeroSection from "@/components/transformations/hero-section";
import TransformationsGallerySection from "@/components/transformations/gallery-section";
import TransformationCtaSection from "@/components/transformations/transformation-cta-section";
import TransformationReviewsSection from "@/components/transformations/reviews-section";

export const metadata: Metadata = {
  title: "Training Goal Guides | Bazooka Fitness",
  description: "Explore Bazooka Fitness goal-based training guides for fat loss, strength, muscle gain, body recomposition and general fitness.",
};

export default function TransformationsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <TransformationsHeroSection />
      <TransformationsGallerySection />
      <TransformationCtaSection />
      <TransformationReviewsSection />
    </main>
  );
}
