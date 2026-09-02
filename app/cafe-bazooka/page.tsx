import type { Metadata } from "next";
import CafeBazookaPage from "@/components/cafe-bazooka-page";

export const metadata: Metadata = {
  title: "Cafe Bazooka | Bazooka Fitness Jodhpur",
  description: "Discover Cafe Bazooka inside Bazooka Fitness Jodhpur — healthy meals, protein-focused food, shakes, refreshments and smarter pre- and post-workout fuel.",
};

export default function CafeBazookaRoute() {
  return <CafeBazookaPage />;
}
