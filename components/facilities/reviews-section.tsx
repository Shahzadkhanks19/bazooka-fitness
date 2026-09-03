"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Sparkles, UsersRound } from "lucide-react";
import { reveal, shell } from "./facilities-shared";

const reasons = [
  [Dumbbell, "Purpose-Built Zones", "Strength, cardio, functional training and recovery each have a dedicated place in the gym."],
  [UsersRound, "Training Support", "Explore the space, meet the team and choose the training setup that matches your goals."],
  [Sparkles, "Complete Experience", "Train, recover, change and refuel at Cafe Bazooka without leaving the facility."],
] as const;

export default function FacilitiesReviewsSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14 sm:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="mx-auto max-w-[760px] text-center">
          <span className="text-[10px] font-black uppercase text-bazooka-lime">Experience Bazooka Yourself</span>
          <h2 className="font-display mt-2 max-w-full text-[32px] font-black uppercase leading-[.94] min-[380px]:text-[36px] sm:text-[46px]">See The Space. <span className="text-bazooka-lime">Feel The Energy.</span></h2>
          <p className="mx-auto mt-4 max-w-[580px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">Instead of taking someone else&apos;s word for it, visit Bazooka, walk through the training zones and experience the gym before choosing your membership.</p>
        </motion.div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {reasons.map(([Icon, title, text], index) => (
            <motion.article key={title} {...reveal} transition={{ duration: .45, delay: index * .05 }} className="group min-w-0 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime sm:p-6">
              <span className="grid size-11 place-items-center rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 text-bazooka-lime transition-transform duration-300 group-hover:scale-105"><Icon className="size-5" /></span>
              <h3 className="font-display mt-5 text-[17px] font-black uppercase text-white">{title}</h3>
              <p className="mt-2 text-[9px] leading-4 text-bazooka-text-secondary">{text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div {...reveal} className="mt-7 grid gap-3 sm:flex sm:justify-center">
          <Link href="/book-free-trial" className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[4px] border border-bazooka-lime bg-bazooka-lime px-5 text-[9px] font-black uppercase text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-bazooka-lime-hover active:scale-[.98] sm:w-auto">Book Free Trial <ArrowRight className="size-4" /></Link>
          <Link href="/contact" className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[4px] border border-bazooka-border-strong px-5 text-[9px] font-black uppercase text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-bazooka-lime hover:bg-bazooka-lime/10 hover:text-bazooka-lime active:scale-[.98] sm:w-auto">Contact Us <ArrowRight className="size-4" /></Link>
        </motion.div>
      </div>
    </section>
  );
}
