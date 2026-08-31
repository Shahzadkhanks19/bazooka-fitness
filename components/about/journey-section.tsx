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
    <section id="our-story" className="border-b border-bazooka-border/70 bg-bazooka-black py-16">
      <div className={`${shell} grid gap-12 lg:grid-cols-[260px_1fr] lg:items-center`}>
        <motion.div {...reveal}>
          <span className="text-[10px] font-black uppercase text-bazooka-lime">Our Journey</span>
          <h2 className="font-display mt-3 text-[39px] font-black uppercase leading-[.95]">Every Rep Has<br /><span className="text-bazooka-lime">A Reason.</span></h2>
          <p className="mt-4 max-w-[250px] text-[11px] leading-5 text-bazooka-text-secondary">From a simple idea to Jodhpur&apos;s most trusted fitness destination — our journey has been fuelled by passion, people and purpose.</p>
        </motion.div>

        <div className="relative grid gap-7 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-bazooka-lime/50 lg:block" />
          {steps.map(([Icon, year, title, text], index) => (
            <motion.div key={year} {...reveal} transition={{ duration: .5, delay: index * .07 }} className="relative text-center">
              <span className="relative z-10 mx-auto grid size-14 place-items-center rounded-full border border-bazooka-lime bg-bazooka-black text-bazooka-lime shadow-[0_0_20px_rgba(182,240,0,.08)]"><Icon className="size-6" /></span>
              <strong className="font-display mt-4 block text-[20px]">{year}</strong>
              <h3 className="mt-2 text-[9px] font-black uppercase">{title}</h3>
              <p className="mx-auto mt-3 max-w-[150px] text-[9px] leading-4 text-bazooka-text-secondary">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
