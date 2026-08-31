import type { Metadata } from "next";
import ContactHeroSection from "@/components/contact/hero-section";
import ContactMainSection from "@/components/contact/contact-main-section";
import ContactCtaSection from "@/components/contact/contact-cta-section";

export const metadata: Metadata = {
  title: "Contact Us | Bazooka Fitness",
  description: "Contact Bazooka Fitness in Sardarpura, Jodhpur for memberships, training and free trial enquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <ContactHeroSection />
      <ContactMainSection />
      <ContactCtaSection />
    </main>
  );
}
