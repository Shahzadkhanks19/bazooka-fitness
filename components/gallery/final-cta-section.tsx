"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Dumbbell, MapPin } from "lucide-react";
import { primaryButton, reveal, shell } from "./gallery-shared";

const points = [
  [MapPin, "Visit The Club"],
  [Dumbbell, "Explore Training"],
  [Coffee, "Cafe Bazooka"],
] as const;

export default function GalleryFinalCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-5 sm:py-6 md:pb-9">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-6 overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface px-5 py-6 sm:px-7 sm:py-7 lg:grid-cols-[1.15fr_1fr_auto] lg:items-center">
          <div className="min-w-0">
            <span className="text-[8px] font-black uppercase tracking-[.08em] text-bazooka-lime">See It In Person</span>
            <h2 className="font-display mt-2 max-w-full text-[27px] font-black uppercase leading-[.95] text-white sm:text-[31px]">Explore The Space.<br /><span className="text-bazooka-lime">Experience Bazooka.</span></h2>
            <p className="mt-3 max-w-[470px] text-[9px] leading-5 text-bazooka-text-secondary sm:text-[10px]">The gallery gives you a look at Bazooka Fitness. Visit the club to explore the facilities and speak with the team about your training goals.</p>
          </div>
          <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-3 sm:gap-3">
            {points.map(([Icon, label]) => <div key={label} className="group flex min-h-[74px] items-center gap-3 rounded-[4px] border border-bazooka-border bg-black/20 px-4 py-3 transition-colors duration-200 hover:border-bazooka-lime/60 hover:bg-bazooka-lime/[.03] min-[420px]:block min-[420px]:text-center"><Icon className="size-5 shrink-0 text-bazooka-lime min-[420px]:mx-auto" /><span className="text-[8px] font-black uppercase leading-4 text-bazooka-text-secondary min-[420px]:mt-2 min-[420px]:block">{label}</span></div>)}
          </div>
          <div className="min-w-0 lg:text-right">
            <Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto`}>Book Free Trial <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
            <p className="mt-3 text-[8px] leading-4 text-bazooka-text-secondary">Choose your visit date and time and book your free trial.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
