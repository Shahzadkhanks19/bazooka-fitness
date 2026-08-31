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
      <div className={`${shell} grid gap-8 lg:grid-cols-[270px_1fr] lg:items-center`}>
        <motion.div {...reveal}>
          <span className="text-[10px] font-black uppercase text-bazooka-lime">Why Join Bazooka</span>
          <h2 className="font-display mt-2 text-[36px] font-black uppercase leading-[.95]">It’s More Than<br /><span className="text-bazooka-lime">A Membership.</span></h2>
          <span className="mt-3 block h-[2px] w-8 bg-bazooka-lime" />
          <p className="mt-4 text-[10px] leading-5 text-bazooka-text-secondary">At Bazooka, you’re not just a member — you’re part of a community that motivates, challenges and pushes you to be your best.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(([Icon, title, text], index) => (
            <motion.div key={title} {...reveal} transition={{ duration: .45, delay: index * .05 }} className={`px-5 py-4 text-center ${index ? "lg:border-l lg:border-bazooka-border" : ""}`}>
              <Icon className="mx-auto size-8 text-bazooka-lime" />
              <h3 className="font-display mt-4 text-[16px] font-black">{title}</h3>
              <p className="mx-auto mt-2 max-w-[170px] text-[9px] leading-4 text-bazooka-text-secondary">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
