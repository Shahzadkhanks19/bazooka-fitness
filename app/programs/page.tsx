import type { Metadata } from "next";
import LevelUpCta from "@/components/programs/level-up-cta";
import MethodologySection from "@/components/programs/methodology-section";
import ProgramGridSection from "@/components/programs/program-grid-section";
import ProgramsHeroSection from "@/components/programs/hero-section";
import TransformationProgramsSection from "@/components/programs/transformation-programs-section";

export const metadata: Metadata = {
  title: "Programs | Bazooka Fitness",
  description: "Explore strength, functional, personal training and other training programs at Bazooka Fitness.",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <ProgramsHeroSection />
      <ProgramGridSection />
      <MethodologySection />
      <LevelUpCta />
      <TransformationProgramsSection />
    </main>
  );
}
