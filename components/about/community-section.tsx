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
    <section className="border-b border-bazooka-border/70 bg-bazooka-black">
      <div className={`${shell} grid items-stretch gap-0 py-8 lg:grid-cols-[245px_1fr_300px] lg:py-0`}>
        <motion.div {...reveal} className="flex flex-col justify-center py-7 pr-8 lg:py-6">
          <h2 className="font-display text-[30px] font-black uppercase leading-[.94]">
            A Community
            <br />
            <span className="text-bazooka-lime">That Lifts You.</span>
          </h2>
          <p className="mt-3 max-w-[220px] text-[9px] leading-[1.65] text-bazooka-text-secondary">
            Bazooka is a place where everyone belongs. We train together, celebrate together and become stronger together.
          </p>
          <Link href="/memberships" className={`${outlineButton} mt-5 h-9 w-fit px-5 text-[8px]`}>
            Join Our Community <ArrowRight className="size-3.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 gap-2 py-4 sm:grid-cols-4 lg:px-2">
          {communityStats.map(([Icon, value, label], index) => (
            <motion.div
              key={String(value)}
              {...reveal}
              transition={{ duration: .45, delay: index * .06 }}
              className="group flex min-h-[138px] flex-col items-center justify-center rounded-[3px] border border-bazooka-border-strong bg-bazooka-surface/45 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime hover:bg-bazooka-lime/[0.035]"
            >
              <Icon className="size-5 text-bazooka-lime transition-transform duration-300 group-hover:scale-110" />
              <strong className="font-display mt-4 text-[20px] leading-none">{value}</strong>
              <small className="mt-2 text-[7px] text-bazooka-text-secondary">{label}</small>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...reveal}
          className="relative min-h-[210px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=90')] bg-cover bg-center grayscale lg:min-h-0"
        >
          <div className="absolute inset-0 bg-black/25" />
          <div className="font-display absolute left-5 top-5 text-[23px] font-black uppercase leading-[.88] text-white">
            Stronger
            <br />
            <span className="text-bazooka-lime">Together.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
