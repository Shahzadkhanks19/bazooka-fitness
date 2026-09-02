"use client";

import { motion } from "framer-motion";
import { Building2, Dumbbell, Rocket, TrendingUp, Users } from "lucide-react";
import { reveal, shell } from "./about-shared";

const steps = [
  [Dumbbell, "2018", "THE BEGINNING", "Bazooka was born with a vision to create a premium fitness space in Jodhpur."],
  [Building2, "2019", "OUR FIRST HOME", "We opened our doors to our first 100 members and started building a family."],
  [TrendingUp, "2021", "LEVELLED UP", "Expanded our space, added advanced equipment and expert coaches."],
  [Users, "2023", "STRONGER TOGETHER", "Crossed 500+ members and became a movement of strength and health."],
  [Rocket, "2024+", "THE FUTURE", "Continuously evolving to deliver the best training experience in Jodhpur."],
] as const;

export default function JourneySection() {
  return (
    <section id="our-story" className="border-b border-bazooka-border/70 bg-bazooka-black py-14 sm:py-16 lg:py-20">
      <div className={`${shell} grid gap-10 lg:grid-cols-[260px_1fr] lg:items-center lg:gap-14`}>
        <motion.div {...reveal} className="min-w-0">
          <span className="text-[10px] font-black uppercase tracking-[.08em] text-bazooka-lime">Our Journey</span>
          <h2 className="font-display mt-3 max-w-[420px] text-[34px] font-black uppercase leading-[.94] min-[380px]:text-[38px] sm:text-[42px] lg:text-[39px]">Every Rep Has<br /><span className="text-bazooka-lime">A Reason.</span></h2>
          <p className="mt-4 max-w-[350px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">From a simple idea to one of Jodhpur&apos;s most trusted fitness destinations — our journey has been fuelled by passion, people and purpose.</p>
        </motion.div>

        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-bazooka-lime/70 to-transparent lg:block" />
          {steps.map(([Icon, year, title, text], index) => (
            <motion.article key={year} {...reveal} transition={{ duration: .5, delay: index * .07 }} className="group relative rounded-[6px] border border-bazooka-border/70 bg-bazooka-surface/45 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime/70 hover:bg-bazooka-lime/[0.035] sm:text-center lg:border-0 lg:bg-transparent lg:p-0 lg:hover:bg-transparent">
              <span className="relative z-10 grid size-12 place-items-center rounded-full border border-bazooka-lime bg-bazooka-black text-bazooka-lime shadow-[0_0_20px_rgba(255,181,46,.12)] transition-all duration-300 group-hover:scale-105 group-hover:bg-bazooka-lime group-hover:text-black sm:mx-auto lg:size-14"><Icon className="size-5 lg:size-6" /></span>
              <strong className="font-display mt-4 block text-[20px] text-white">{year}</strong>
              <h3 className="mt-2 text-[9px] font-black uppercase tracking-[.04em]">{title}</h3>
              <p className="mt-3 max-w-[260px] text-[9px] leading-4 text-bazooka-text-secondary sm:mx-auto lg:max-w-[150px]">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
