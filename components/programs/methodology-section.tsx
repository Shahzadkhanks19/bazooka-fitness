"use client";

import { motion } from "framer-motion";
import { Award, BarChart3, ClipboardCheck, Target, UserRoundCheck } from "lucide-react";
import { reveal, shell } from "./programs-shared";

const steps = [
  [Target, "Assess", "Understand your current fitness, goals and training needs."],
  [ClipboardCheck, "Plan", "Build a practical training approach around those goals."],
  [BarChart3, "Train", "Follow structured sessions with progressive challenges."],
  [UserRoundCheck, "Track", "Review progress and adjust the approach when needed."],
  [Award, "Progress", "Stay consistent and keep moving toward stronger performance."],
] as const;

export default function MethodologySection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14 sm:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[340px_1fr] lg:items-end">
          <div className="min-w-0">
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Our Methodology</span>
            <h2 className="font-display mt-2 max-w-full text-[32px] font-black uppercase leading-[.95] min-[380px]:text-[35px] sm:text-[40px]">The Bazooka <span className="text-bazooka-lime">Method.</span></h2>
            <span className="mt-3 block h-[2px] w-8 bg-bazooka-lime" />
          </div>
          <p className="max-w-[540px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px] lg:justify-self-end">A simple training framework built around clear goals, structured progression and consistent coaching support.</p>
        </motion.div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(([Icon, title, text], index) => (
            <motion.article key={title} {...reveal} transition={{ duration: .45, delay: index * .05 }} className="group relative flex min-h-[170px] min-w-0 flex-col rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime">
              <div className="flex items-center justify-between gap-3">
                <span className="grid size-10 place-items-center rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 text-bazooka-lime transition-transform duration-300 group-hover:scale-105"><Icon className="size-5" /></span>
                <span className="font-display text-[22px] font-black text-bazooka-border-strong">0{index + 1}</span>
              </div>
              <h3 className="font-display mt-5 text-[17px] font-black uppercase">{title}</h3>
              <p className="mt-2 text-[9px] leading-4 text-bazooka-text-secondary">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
