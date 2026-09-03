import type { Metadata } from "next";
import FreeTrialPage from "@/components/booking/free-trial-page";

export const metadata: Metadata = {
  title: "Book a Free Trial | Bazooka Fitness",
  description: "Book a free trial at Bazooka Fitness in Sardarpura, Jodhpur to explore the gym, meet the team and learn about memberships before joining.",
};

export default function BookFreeTrialRoute() {
  return <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text"><FreeTrialPage /></main>;
}
