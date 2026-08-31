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
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14">
      <div className={`${shell} grid gap-10 lg:grid-cols-[270px_1fr] lg:items-center`}>
        <motion.div {...reveal}>
          <span className="text-[10px] font-black uppercase text-bazooka-text-secondary">Why Choose Bazooka?</span>
          <h2 className="font-display mt-3 text-[36px] font-black uppercase leading-[.95]">Not Just Equipment.<br /><span className="text-bazooka-lime">An Experience.</span></h2>
          <p className="mt-4 max-w-[250px] text-[10px] leading-5 text-bazooka-text-secondary">We obsess over the details so you can focus on becoming the best version of yourself.</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map(([Icon, title, text], index) => (
            <motion.article key={title} {...reveal} transition={{ duration: .45, delay: index * .06 }} className="group text-center">
              <span className="mx-auto grid size-11 place-items-center text-bazooka-lime transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"><Icon className="size-7" /></span>
              <h3 className="mt-3 text-[9px] font-black">{title}</h3>
              <p className="mt-2 text-[8px] leading-4 text-bazooka-text-secondary">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
