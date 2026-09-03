import type { Metadata } from "next";
import AboutCtaSection from "@/components/about/about-cta-section";
import AboutHero from "@/components/about/about-hero";
import CommunitySection from "@/components/about/community-section";
import FoundersSection from "@/components/about/founders-section";
import JourneySection from "@/components/about/journey-section";
import MethodologySection from "@/components/about/methodology-section";
import WhyChooseSection from "@/components/about/why-choose-section";
import CafeBazookaHighlight from "@/components/cafe-bazooka-highlight";

export const metadata: Metadata = {
  title: "About | Bazooka Fitness",
  description: "Learn about Bazooka Fitness in Jodhpur, its training approach, community and club experience.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <AboutHero />
      <JourneySection />
      <MethodologySection />
      <CommunitySection />
      <WhyChooseSection />
      <FoundersSection />
      <CafeBazookaHighlight compact />
      <AboutCtaSection />
    </main>
  );
}
