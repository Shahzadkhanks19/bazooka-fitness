import type { Metadata } from "next";
import AmenitiesSection from "@/components/facilities/amenities-section";
import FacilitiesHeroSection from "@/components/facilities/hero-section";
import FacilitiesReviewsSection from "@/components/facilities/reviews-section";
import TourCtaSection from "@/components/facilities/tour-cta-section";
import FacilityZonesSection from "@/components/facilities/zones-section";

export const metadata: Metadata = {
  title: "Facilities | Bazooka Fitness",
  description: "Explore Bazooka Fitness training zones, premium equipment, recovery spaces and member amenities.",
};

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <FacilitiesHeroSection />
      <FacilityZonesSection />
      <AmenitiesSection />
      <TourCtaSection />
      <FacilitiesReviewsSection />
    </main>
  );
}
