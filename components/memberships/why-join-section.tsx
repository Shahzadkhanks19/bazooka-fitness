"use client";

import { motion } from "framer-motion";
import { ChartNoAxesCombined, Dumbbell, UsersRound, UserRoundCheck } from "lucide-react";
import { reveal, shell } from "./memberships-shared";

const reasons = [
  [UserRoundCheck, "Expert Guidance", "Certified trainers to guide you at every step."],
  [Dumbbell, "Premium Equipment", "Top of the line machines for every fitness goal."],
  [UsersRound, "Supportive Community", "Train with like-minded people who inspire you to grow."],
  [ChartNoAxesCombined, "Results Driven", "Structured programs designed to deliver real results."],
] as const;

export default function WhyJoinSection() {
  return (
    <section className="border-b border-bazooka-border/70 py-14 sm:py-16">
      <div className={`${shell} grid gap-9 lg:grid-cols-[320px_1fr] lg:items-center xl:grid-cols-[350px_1fr]`}>
        <motion.div {...reveal} className="min-w-0">
          <span className="text-[10px] font-black uppercase text-bazooka-lime">Why Join Bazooka</span>
          <h2 className="font-display mt-2 max-w-full text-[32px] font-black uppercase leading-[.94] min-[380px]:text-[34px] sm:text-[38px] lg:text-[36px] xl:text-[40px]">
            <span className="block">It’s More Than</span>
            <span className="block text-bazooka-lime sm:whitespace-nowrap">A Membership.</span>
          </h2>
          <span className="mt-3 block h-[2px] w-9 bg-bazooka-lime" />
          <p className="mt-4 max-w-[320px] text-[10px] leading-5 text-bazooka-text-secondary">At Bazooka, you’re not just a member — you’re part of a community that motivates, challenges and pushes you to be your best.</p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(([Icon, title, text], index) => (
            <motion.article
              key={title}
              {...reveal}
              transition={{ duration: .45, delay: index * .05 }}
              className="group min-w-0 rounded-[6px] border border-bazooka-border bg-bazooka-surface px-5 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime hover:bg-bazooka-lime/[0.035] active:scale-[.99]"
            >
              <span className="mx-auto grid size-12 place-items-center rounded-full border border-bazooka-lime/60 bg-bazooka-black text-bazooka-lime transition-all duration-300 group-hover:border-bazooka-lime group-hover:bg-bazooka-lime group-hover:text-black">
                <Icon className="size-5" />
              </span>
              <h3 className="font-display mt-4 text-[16px] font-black leading-5">{title}</h3>
              <p className="mx-auto mt-2 max-w-[190px] text-[9px] leading-4 text-bazooka-text-secondary">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
