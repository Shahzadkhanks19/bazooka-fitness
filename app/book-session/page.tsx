import type { Metadata } from "next";
import BookSessionPage from "@/components/booking/book-session-page";
import { getTrainerBySlug, trainers } from "@/components/trainers/trainer-data";

export const metadata: Metadata = {
  title: "Book a Session | Bazooka Fitness",
  description: "Book a one-on-one training session with a Bazooka Fitness coach.",
};

export default async function BookSessionRoute({ searchParams }: { searchParams: Promise<{ trainer?: string }> }) {
  const { trainer: trainerSlug } = await searchParams;
  const trainer = (trainerSlug && getTrainerBySlug(trainerSlug)) || trainers[0];

  return <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text"><BookSessionPage trainer={trainer} /></main>;
}
