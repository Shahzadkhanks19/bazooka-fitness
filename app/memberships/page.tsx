import type { Metadata } from "next";
import MembershipFaqPreview from "@/components/memberships/faq-preview-section";
import MembershipsHeroSection from "@/components/memberships/hero-section";
import IncludedSection from "@/components/memberships/included-section";
import MembershipCtaSection from "@/components/memberships/membership-cta-section";
import MembershipPlansSection from "@/components/memberships/plans-section";
import WhyJoinSection from "@/components/memberships/why-join-section";

export const metadata: Metadata = {
  title: "Memberships | Bazooka Fitness",
  description: "Explore Bazooka Fitness membership plans, benefits and inclusions.",
};

export default function MembershipsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <MembershipsHeroSection />
      <MembershipPlansSection />
      <WhyJoinSection />
      <IncludedSection />
      <MembershipCtaSection />
      <MembershipFaqPreview />
    </main>
  );
}
