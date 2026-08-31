"use client";

import { motion } from "framer-motion";
import { Award, BarChart3, ClipboardCheck, Target, UserRoundCheck } from "lucide-react";
import { reveal, shell } from "./programs-shared";

const steps = [
  [Target, "Assess", "We assess your current fitness, goals and lifestyle."],
  [ClipboardCheck, "Plan", "Custom training & nutrition plan designed just for you."],
  [BarChart3, "Train", "Structured workouts that build strength, endurance & skill."],
  [UserRoundCheck, "Track", "We track your progress and make data-driven adjustments."],
  [Award, "Achieve", "Stay consistent and achieve the results you deserve."],
] as const;

export default function MethodologySection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[320px_1fr] lg:items-end">
          <div>
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Our Methodology</span>
            <h2 className="font-display mt-2 text-[34px] font-black uppercase">The Bazooka Method</h2>
          </div>
          <p className="max-w-[520px] text-[11px] leading-5 text-bazooka-text-secondary lg:justify-self-end">We follow a science-backed system built around consistency, progression and personalised coaching.</p>
        </motion.div>

        <div className="mt-7 grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(([Icon, title, text], index) => (
            <motion.div key={title} {...reveal} transition={{ duration: .45, delay: index * .05 }} className="relative flex min-h-[165px] flex-col items-center justify-center px-5 text-center">
              <Icon className="size-7 text-bazooka-lime" />
              <h3 className="font-display mt-4 text-[17px] font-black uppercase">{title}</h3>
              <p className="mt-2 max-w-[165px] text-[9px] leading-4 text-bazooka-text-secondary">{text}</p>
              {index < steps.length - 1 && <span className="absolute right-0 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-bazooka-border lg:block" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
