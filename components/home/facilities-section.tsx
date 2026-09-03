"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Flame, HeartPulse } from "lucide-react";
import { outlineButton, reveal, shell } from "./home-shared";

const facilities = [
  { title: "Strength Zone", icon: Dumbbell, href: "/facilities/strength-zone", image: "bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Cardio Zone", icon: HeartPulse, href: "/facilities/cardio-zone", image: "bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Recovery Zone", icon: Flame, href: "/facilities/recovery-zone", image: "bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=90')]" },
] as const;

export default function FacilitiesSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14 sm:py-16">
      <div className={`${shell} grid gap-8 lg:grid-cols-[260px_1fr] lg:items-center`}>
        <motion.div {...reveal} className="min-w-0">
          <h2 className="font-display text-[34px] font-black uppercase leading-[.95] sm:text-[38px]">Training<br /><span className="text-bazooka-lime">Facilities</span></h2>
          <p className="mt-4 max-w-[270px] text-[11px] leading-5 text-bazooka-text-secondary">Explore strength, cardio and the post-workout amenities available at Bazooka Fitness.</p>
          <Link href="/facilities" className={`${outlineButton} mt-6 w-full border-bazooka-lime/70 sm:w-fit`}>Explore Our Gym <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.article key={facility.title} {...reveal} transition={{ duration: 0.5, delay: index * 0.07 }} className="min-w-0">
                <Link href={facility.href} className={`group relative block min-h-[240px] overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center ${facility.image} transition-all duration-500 hover:-translate-y-1 hover:border-bazooka-lime hover:shadow-[0_18px_45px_rgba(0,0,0,.32)] active:scale-[.985]`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/92 transition-colors duration-500 group-hover:from-black/0 group-hover:to-black/86" />
                  <div className="absolute inset-x-5 bottom-5 flex min-w-0 items-end justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="grid size-11 shrink-0 place-items-center rounded-[5px] border border-bazooka-lime bg-black/38 text-bazooka-lime transition-all duration-300 group-hover:bg-bazooka-lime group-hover:text-black"><Icon className="size-5" /></span>
                      <h3 className="font-display min-w-0 text-[17px] font-black uppercase">{facility.title}</h3>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-bazooka-lime transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
