import type { Metadata } from "next";
import FaqPageClient from "@/components/faq/faq-page-client";

export const metadata: Metadata = {
  title: "FAQ | Bazooka Fitness",
  description: "Frequently asked questions about Bazooka Fitness memberships, training, facilities and payments.",
};

export default function FaqPage(){
  return <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text"><FaqPageClient/></main>;
}
