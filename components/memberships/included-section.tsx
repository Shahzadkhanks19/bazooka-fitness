"use client";

import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, ShowerHead, Waves } from "lucide-react";
import { reveal, shell } from "./memberships-shared";

const items = [
  [HeartPulse, "Cardio", "Dedicated cardio access as part of every listed fitness plan."],
  [Dumbbell, "Weight Training", "Strength and resistance training access across all listed plans."],
  [Waves, "Steam", "Steam access included with each current membership duration."],
  [ShowerHead, "Shower", "Shower access included with every listed fitness plan."],
] as const;

export default function IncludedSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14 md:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="mx-auto max-w-[680px] text-center">
          <span className="text-[9px] font-black uppercase tracking-[.08em] text-bazooka-lime sm:text-[10px]">Included In Every Listed Plan</span>
          <h2 className="font-display mt-3 text-[30px] font-black uppercase leading-[.94] min-[380px]:text-[33px] sm:text-[38px]">Your Core <span className="text-bazooka-lime">Bazooka Access</span></h2>
          <p className="mx-auto mt-3 max-w-[540px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">No matter which current duration you choose, these core facilities remain included.</p>
        </motion.div>

        <div className="mx-auto mt-8 grid max-w-[980px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, label, text], index) => (
            <motion.article key={label} {...reveal} transition={{ duration: .45, delay: index * .045 }} className="group min-w-0 rounded-[7px] border border-bazooka-border-strong bg-bazooka-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime hover:bg-bazooka-lime/[0.025]">
              <span className="grid size-11 place-items-center rounded-full border border-bazooka-lime/60 bg-bazooka-lime/10 text-bazooka-lime transition-all duration-300 group-hover:scale-105 group-hover:bg-bazooka-lime group-hover:text-black"><Icon className="size-5" /></span>
              <h3 className="font-display mt-4 text-[15px] font-black uppercase leading-5">{label}</h3>
              <p className="mt-2 text-[9px] leading-4 text-bazooka-text-secondary">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
