import type { Metadata } from "next";
import GalleryGridSection from "@/components/gallery/gallery-grid-section";
import GalleryHeroSection from "@/components/gallery/hero-section";
import GalleryReviewsSection from "@/components/gallery/reviews-section";
import GalleryStoryCtaSection from "@/components/gallery/story-cta-section";

export const metadata: Metadata = {
  title: "Gallery | Bazooka Fitness",
  description: "Explore workouts, members, facilities and community moments from Bazooka Fitness.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <GalleryHeroSection />
      <GalleryGridSection />
      <GalleryStoryCtaSection />
      <GalleryReviewsSection />
    </main>
  );
}
