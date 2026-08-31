"use client";

import { motion } from "framer-motion";
import { Apple, BadgeCheck, CalendarDays, Dumbbell, LockKeyhole, ParkingCircle, Sparkles, UsersRound, Wifi, Waves } from "lucide-react";
import { reveal, shell } from "./memberships-shared";

const items = [
  [BadgeCheck, "Free Fitness Assessment"],
  [UsersRound, "Group Classes Included"],
  [LockKeyhole, "Locker Facility"],
  [Waves, "Steam & Shower"],
  [Apple, "Nutrition Guidance"],
  [Dumbbell, "Body Composition Analysis"],
  [Sparkles, "Clean & Hygienic Environment"],
  [ParkingCircle, "Parking Available"],
  [CalendarDays, "Member Events"],
  [Wifi, "Wi-Fi Access"],
] as const;

export default function IncludedSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14">
      <div className={shell}>
        <motion.div {...reveal} className="flex items-center justify-center gap-4">
          <span className="h-px w-24 bg-bazooka-border-strong" />
          <h2 className="font-display text-center text-[30px] font-black uppercase">What’s <span className="text-bazooka-lime">Included</span></h2>
          <span className="h-px w-24 bg-bazooka-border-strong" />
        </motion.div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(([Icon, label], index) => (
            <motion.div key={label} {...reveal} transition={{ duration: .45, delay: index * .035 }} className="group flex min-h-[90px] items-center gap-4 rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime">
              <Icon className="size-7 shrink-0 text-bazooka-lime transition-transform duration-300 group-hover:scale-110" />
              <span className="font-display text-[12px] font-black uppercase leading-4">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
