import type { Metadata } from "next";
import FreeTrialPage from "@/components/booking/free-trial-page";

export const metadata: Metadata = {
  title: "Request a Free Trial | Bazooka Fitness",
  description: "Request a free visit to Bazooka Fitness in Sardarpura, Jodhpur to explore the gym, meet the team and ask about memberships before joining.",
};

export default function BookFreeTrialRoute() {
  return <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text"><FreeTrialPage /></main>;
}
