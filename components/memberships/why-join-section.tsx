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
    <section className="border-b border-bazooka-border/70 py-14">
      <div className={`${shell} grid gap-9 lg:grid-cols-[320px_1fr] lg:items-center xl:grid-cols-[350px_1fr]`}>
        <motion.div {...reveal} className="min-w-0">
          <span className="text-[10px] font-black uppercase text-bazooka-lime">Why Join Bazooka</span>
          <h2 className="font-display mt-2 max-w-full text-[34px] font-black uppercase leading-[.94] sm:text-[38px] lg:text-[36px] xl:text-[40px]">
            <span className="block">It’s More Than</span>
            <span className="block text-bazooka-lime sm:whitespace-nowrap">A Membership.</span>
          </h2>
          <span className="mt-3 block h-[2px] w-8 bg-bazooka-lime" />
          <p className="mt-4 max-w-[320px] text-[10px] leading-5 text-bazooka-text-secondary">At Bazooka, you’re not just a member — you’re part of a community that motivates, challenges and pushes you to be your best.</p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {reasons.map(([Icon, title, text], index) => (
            <motion.article
              key={title}
              {...reveal}
              transition={{ duration: .45, delay: index * .05 }}
              className={`group min-w-0 rounded-[5px] border border-bazooka-border bg-bazooka-surface px-5 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime lg:rounded-none lg:border-y-0 lg:border-r-0 lg:bg-transparent ${index ? "lg:border-l lg:border-bazooka-border" : "lg:border-l-0"}`}
            >
              <Icon className="mx-auto size-8 text-bazooka-lime transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-display mt-4 text-[16px] font-black leading-5">{title}</h3>
              <p className="mx-auto mt-2 max-w-[180px] text-[9px] leading-4 text-bazooka-text-secondary">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
