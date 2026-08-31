import type { Metadata } from "next";
import AllProgramsCtaSection from "@/components/programs/all-programs-cta-section";
import AllProgramsGrid from "@/components/programs/all-programs-grid";
import AllProgramsHeroSection from "@/components/programs/all-programs-hero-section";

export const metadata: Metadata = {
  title: "All Programs | Bazooka Fitness",
  description: "Explore every Bazooka Fitness training, transformation, recovery and personal coaching program.",
};

export default function AllProgramsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <AllProgramsHeroSection />
      <AllProgramsGrid />
      <AllProgramsCtaSection />
    </main>
  );
}
