import type { Metadata } from "next";
import FreeTrialPage from "@/components/booking/free-trial-page";

export const metadata: Metadata = {
  title: "Book Free Trial | Bazooka Fitness",
  description: "Book a free trial at Bazooka Fitness and experience the gym, trainers and facilities before you commit.",
};

export default function BookFreeTrialRoute() {
  return <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text"><FreeTrialPage /></main>;
}
