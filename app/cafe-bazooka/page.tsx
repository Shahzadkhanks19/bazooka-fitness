import type { Metadata } from "next";
import CafeBazookaPage from "@/components/cafe-bazooka-page";

export const metadata: Metadata = {
  title: "Cafe Bazooka | Bazooka Fitness Jodhpur",
  description: "Explore Cafe Bazooka inside Bazooka Fitness Jodhpur, including the cafe space, refreshments and currently available menu options.",
};

export default function CafeBazookaRoute() {
  return <CafeBazookaPage />;
}
