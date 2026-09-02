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
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-12 sm:py-14 lg:py-0">
      <div className={`${shell} grid items-stretch gap-6 lg:grid-cols-[255px_1fr_320px] lg:gap-0`}>
        <motion.div {...reveal} className="flex min-w-0 flex-col justify-center lg:py-10 lg:pr-8">
          <span className="text-[9px] font-black uppercase tracking-[.08em] text-bazooka-lime">Bazooka Community</span>
          <h2 className="font-display mt-3 text-[32px] font-black uppercase leading-[.94] min-[380px]:text-[36px] lg:text-[32px]">
            A Community<br /><span className="text-bazooka-lime">That Lifts You.</span>
          </h2>
          <p className="mt-4 max-w-[320px] text-[10px] leading-5 text-bazooka-text-secondary lg:max-w-[230px]">Bazooka is a place where everyone belongs. We train together, celebrate together and become stronger together.</p>
          <Link href="/memberships" className={`${outlineButton} mt-6 w-full sm:w-fit`}>
            View Memberships <ArrowRight className="size-3.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:px-3 lg:py-5">
          {communityStats.map(([Icon, value, label], index) => (
            <motion.div
              key={`${value}-${label}`}
              {...reveal}
              transition={{ duration: .45, delay: index * .06 }}
              className="group flex min-h-[125px] flex-col items-center justify-center rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface/55 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime hover:bg-bazooka-lime/[0.04] active:scale-[.99] lg:min-h-[150px]"
            >
              <Icon className="size-5 text-bazooka-lime transition-transform duration-300 group-hover:scale-110" />
              <strong className="font-display mt-4 text-[20px] leading-none text-white">{value}</strong>
              <small className="mt-2 max-w-[90px] text-[7px] leading-3 text-bazooka-text-secondary">{label}</small>
            </motion.div>
          ))}
        </div>

        <motion.div {...reveal} className="group relative min-h-[250px] overflow-hidden rounded-[6px] bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=90')] bg-cover bg-center sm:min-h-[300px] lg:min-h-0 lg:rounded-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent transition-colors duration-500 group-hover:from-black/55" />
          <div className="absolute bottom-5 left-5 right-5 rounded-[5px] border border-white/10 bg-black/35 p-4 backdrop-blur-[2px] sm:bottom-6 sm:left-6 sm:right-6">
            <span className="text-[8px] font-black uppercase tracking-[.12em] text-bazooka-lime">Train Together</span>
            <div className="font-display mt-2 text-[27px] font-black uppercase leading-[.88] text-white sm:text-[31px]">Stronger<br /><span className="text-bazooka-lime">Together.</span></div>
            <p className="mt-3 max-w-[240px] text-[8px] leading-4 text-white/75">A motivating space built around shared effort, accountability and progress.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
