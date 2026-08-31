"use client";

import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Trophy, UsersRound } from "lucide-react";
import { reveal, shell } from "./gallery-shared";

const stats = [
  [UsersRound, "1000+", "Happy Members"],
  [UsersRound, "50+", "Group Classes"],
  [Dumbbell, "20+", "Training Zones"],
  [Trophy, "100+", "Success Stories"],
  [HeartPulse, "Countless", "Memories"],
] as const;

export default function GalleryStatsStripSection() {
  return (
    <section className="bg-bazooka-black py-4">
      <div className={shell}>
        <motion.div {...reveal} className="grid overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface sm:grid-cols-2 lg:grid-cols-5">
          {stats.map(([Icon, value, label], index) => (
            <div key={label} className={`flex items-center justify-center gap-4 px-5 py-5 ${index ? "border-t border-bazooka-border sm:border-l sm:border-t-0" : ""}`}>
              <Icon className="size-6 text-bazooka-lime" />
              <div>
                <strong className="font-display block text-[20px] font-black leading-none text-white">{value}</strong>
                <span className="mt-1 block text-[7px] uppercase text-bazooka-text-secondary">{label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
