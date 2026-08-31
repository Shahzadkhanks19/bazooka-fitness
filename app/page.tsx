import CafeBazookaHighlight from "@/components/cafe-bazooka-highlight";
import ExperienceSection from "@/components/home/experience-section";
import FacilitiesSection from "@/components/home/facilities-section";
import HeroSection from "@/components/home/hero-section";
import ProgramsSection from "@/components/home/programs-section";
import SocialProofSection from "@/components/home/social-proof-section";
import TransformationsSection from "@/components/home/transformations-section";
import TrialCtaSection from "@/components/home/trial-cta-section";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <HeroSection />
      <ExperienceSection />
      <ProgramsSection />
      <FacilitiesSection />
      <CafeBazookaHighlight />
      <TransformationsSection />
      <SocialProofSection />
      <TrialCtaSection />
    </main>
  );
}
