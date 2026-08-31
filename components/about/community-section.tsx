"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Dumbbell, Users } from "lucide-react";
import { outlineButton, reveal, shell } from "./about-shared";

const communityStats = [
  [Users, "500+", "Happy Members"],
  [Dumbbell, "Daily", "Group Classes"],
  [CalendarDays, "Events", "& Challenges"],
  [Users, "Supportive", "Environment"],
] as const;

export default function CommunitySection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14">
      <div className={`${shell} grid overflow-hidden rounded-[4px] border border-bazooka-border-strong lg:grid-cols-[260px_1fr_330px]`}>
        <motion.div {...reveal} className="bg-bazooka-black p-7">
          <h2 className="font-display text-[34px] font-black uppercase leading-[.96]">A Community<br /><span className="text-bazooka-lime">That Lifts You.</span></h2>
          <p className="mt-4 text-[10px] leading-5 text-bazooka-text-secondary">Bazooka is a place where everyone belongs. We train together, celebrate together and become stronger together.</p>
          <Link href="/memberships" className={`${outlineButton} mt-6 h-10`}>Join Our Community <ArrowRight className="size-4" /></Link>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {communityStats.map(([Icon, value, label], index) => (
            <motion.div key={String(value)} {...reveal} transition={{ duration: .45, delay: index * .06 }} className="flex min-h-[185px] flex-col items-center justify-center border-l border-bazooka-border p-4 text-center transition hover:bg-bazooka-lime/[0.04]">
              <Icon className="size-6 text-bazooka-lime" />
              <strong className="font-display mt-5 text-[22px]">{value}</strong>
              <small className="mt-1 text-[8px] text-bazooka-text-secondary">{label}</small>
            </motion.div>
          ))}
        </div>
        <motion.div {...reveal} className="relative min-h-[260px] bg-[url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=90')] bg-cover bg-center grayscale lg:min-h-0">
          <div className="absolute inset-0 bg-black/20" />
          <div className="font-display absolute left-6 top-6 text-[25px] font-black uppercase leading-[.9] text-white">Stronger<br /><span className="text-bazooka-lime">Together.</span></div>
        </motion.div>
      </div>
    </section>
  );
}
