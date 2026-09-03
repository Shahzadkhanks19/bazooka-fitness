"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, LockKeyhole, ShowerHead, Waves } from "lucide-react";
import { reveal, shell } from "./facilities-shared";

const amenities = [
  [Waves, "Recovery", "Steam and recovery-focused spaces to help you reset after training."],
  [ShowerHead, "Shower Access", "Freshen up after your workout with dedicated shower facilities."],
  [LockKeyhole, "Changing Facilities", "A dedicated locker and changing area for everyday convenience."],
  [Coffee, "Cafe Bazooka", "Healthy meals, protein-focused options and refreshing post-workout fuel."],
] as const;

export default function AmenitiesSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14 sm:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[390px_1fr] lg:items-end">
          <div className="min-w-0">
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Member Experience</span>
            <h2 className="font-display mt-2 max-w-full text-[32px] font-black uppercase leading-[.94] min-[380px]:text-[36px] sm:text-[46px]">More Than <span className="text-bazooka-lime">Just Equipment.</span></h2>
            <span className="mt-3 block h-[2px] w-8 bg-bazooka-lime" />
          </div>
          <p className="max-w-[520px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px] lg:justify-self-end">The gym experience goes beyond the training floor. Recover, freshen up and refuel without leaving Bazooka.</p>
        </motion.div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map(([Icon, title, text], index) => (
            <motion.article key={title} {...reveal} transition={{ duration: .45, delay: index * .04 }} className="group flex min-h-[170px] min-w-0 flex-col rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 text-bazooka-lime transition-transform duration-300 group-hover:scale-105"><Icon className="size-5" /></span>
              <h3 className="font-display mt-5 text-[16px] font-black uppercase text-white">{title}</h3>
              <p className="mt-2 text-[9px] leading-4 text-bazooka-text-secondary">{text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div {...reveal} className="mt-6 flex justify-center">
          <Link href="/cafe-bazooka" className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-[4px] border border-bazooka-border-strong px-4 text-[9px] font-black uppercase text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-bazooka-lime hover:bg-bazooka-lime/10 hover:text-bazooka-lime active:scale-[.98] sm:w-auto">Explore Cafe Bazooka <ArrowRight className="size-4" /></Link>
        </motion.div>
      </div>
    </section>
  );
}
