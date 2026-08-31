import type { Metadata } from "next";
import CafeBazookaHighlight from "@/components/cafe-bazooka-highlight";
import GalleryFinalCtaSection from "@/components/gallery/final-cta-section";
import GalleryGridSection from "@/components/gallery/gallery-grid-section";
import GalleryHeroSection from "@/components/gallery/hero-section";
import GalleryInstagramJourneySection from "@/components/gallery/instagram-journey-section";
import GalleryStatsStripSection from "@/components/gallery/stats-strip-section";

export const metadata: Metadata = {
  title: "Gallery | Bazooka Fitness",
  description: "Explore workouts, members, facilities, Cafe Bazooka and community moments from Bazooka Fitness.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <GalleryHeroSection />
      <GalleryGridSection />
      <GalleryStatsStripSection />
      <CafeBazookaHighlight compact />
      <GalleryInstagramJourneySection />
      <GalleryFinalCtaSection />
    </main>
  );
}
