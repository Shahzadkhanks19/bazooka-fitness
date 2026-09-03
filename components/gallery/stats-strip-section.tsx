"use client";

import { motion } from "framer-motion";
import { Coffee, Dumbbell, HeartPulse, UsersRound } from "lucide-react";
import { reveal, shell } from "./gallery-shared";

const highlights = [
  [Dumbbell, "Training Zones", "Strength, cardio and functional spaces"],
  [UsersRound, "Community", "A gym environment built around consistency"],
  [HeartPulse, "Recovery", "Space to reset after demanding sessions"],
  [Coffee, "Cafe Bazooka", "Convenient post-workout food and drinks"],
] as const;

export default function GalleryStatsStripSection() {
  return (
    <section className="bg-bazooka-black py-5 sm:py-6">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(([Icon, title, text], index) => (
            <motion.article key={title} {...reveal} transition={{ duration: .4, delay: index * .04 }} className="group flex min-h-[104px] items-center gap-4 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime">
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 text-bazooka-lime transition-transform duration-300 group-hover:scale-105"><Icon className="size-5" /></span>
              <div className="min-w-0">
                <strong className="font-display block text-[15px] font-black uppercase leading-none text-white">{title}</strong>
                <span className="mt-2 block text-[8px] leading-4 text-bazooka-text-secondary">{text}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
