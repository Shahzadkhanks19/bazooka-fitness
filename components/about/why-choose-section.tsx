"use client";

import { motion } from "framer-motion";
import { AlarmClock, Award, Dumbbell, ShieldCheck, UserRoundCheck } from "lucide-react";
import { reveal, shell } from "./about-shared";

const reasons = [
  [Dumbbell, "Premium Equipment", "Top-of-the-line machines for every goal."],
  [UserRoundCheck, "Expert Coaches", "Certified, experienced and passionate."],
  [ShieldCheck, "Hygienic & Safe", "Clean, sanitised and well-maintained spaces."],
  [AlarmClock, "Flexible Timings", "Open early. Close late. We fit your schedule."],
  [Award, "Results Driven", "Real programs for real transformations."],
] as const;

export default function WhyChooseSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14 sm:py-16">
      <div className={`${shell} grid gap-9 lg:grid-cols-[285px_1fr] lg:items-center lg:gap-12`}>
        <motion.div {...reveal} className="min-w-0">
          <span className="text-[9px] font-black uppercase tracking-[.08em] text-bazooka-lime sm:text-[10px]">Why Choose Bazooka?</span>
          <h2 className="font-display mt-3 text-[34px] font-black uppercase leading-[.94] sm:text-[39px]">Not Just Equipment.<br /><span className="text-bazooka-lime">An Experience.</span></h2>
          <p className="mt-4 max-w-[300px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">We obsess over the details so you can focus on becoming the best version of yourself.</p>
          <span className="mt-5 block h-0.5 w-10 bg-bazooka-lime" />
        </motion.div>

        <div className="grid gap-3 min-[430px]:grid-cols-2 lg:grid-cols-5">
          {reasons.map(([Icon, title, text], index) => (
            <motion.article
              key={title}
              {...reveal}
              transition={{ duration: .45, delay: index * .06 }}
              className="group rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface/55 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime hover:bg-bazooka-lime/[0.035] min-[430px]:text-center lg:min-h-[190px]"
            >
              <span className="grid size-11 place-items-center rounded-full border border-bazooka-lime/65 bg-black/25 text-bazooka-lime transition-all duration-300 group-hover:scale-110 group-hover:bg-bazooka-lime group-hover:text-black min-[430px]:mx-auto"><Icon className="size-5" /></span>
              <h3 className="mt-4 text-[10px] font-black uppercase text-white">{title}</h3>
              <p className="mt-2 text-[8px] leading-4 text-bazooka-text-secondary sm:text-[9px]">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
