"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarRange, ChevronRight, Dumbbell, ShowerHead } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./memberships-shared";

const highlights = [
  [Dumbbell, "Strength & Cardio"],
  [ShowerHead, "Steam & Shower"],
  [CalendarRange, "3, 6 & 12 Months"],
] as const;

export default function MembershipsHeroSection() {
  return (
    <section className="group relative min-h-[540px] overflow-hidden border-b border-bazooka-border/70 bg-bazooka-black sm:min-h-[560px]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-[62%_center] transition-transform duration-[900ms] group-hover:scale-[1.01] sm:bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-transparent to-black/16" />
      <div className={`${shell} relative z-10 flex min-h-[540px] items-center py-10 sm:min-h-[560px] sm:py-14`}>
        <motion.div {...reveal} className="w-full max-w-[720px] min-w-0">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-[8px] font-black uppercase tracking-[0.04em] sm:mb-6 sm:text-[9px]">
            <Link href="/" className="text-bazooka-lime transition hover:text-bazooka-lime-hover">Home</Link>
            <ChevronRight className="size-3 text-bazooka-muted" />
            <span className="text-white">Memberships</span>
          </div>
          <h1 className="font-display max-w-full text-[36px] font-black uppercase leading-[.9] tracking-[-1px] min-[360px]:text-[39px] min-[390px]:text-[42px] sm:text-[58px] lg:text-[72px] xl:text-[76px]">
            <span className="block">Choose The Plan</span>
            <span className="block">That Fits Your</span>
            <span className="block text-bazooka-lime">Routine.</span>
          </h1>
          <span className="mt-4 block h-[2px] w-10 bg-bazooka-lime" />
          <p className="mt-5 max-w-[560px] text-[11px] leading-5 text-bazooka-text-secondary sm:text-[12px] sm:leading-6">Compare the published 3, 6 and 12 month membership options and the core facilities included with each plan.</p>

          <div className="mt-5 grid gap-2 min-[430px]:grid-cols-3 sm:max-w-[620px]">
            {highlights.map(([Icon, label]) => (
              <div key={label} className="flex min-h-11 items-center gap-2 rounded-[4px] border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-[2px]">
                <Icon className="size-4 shrink-0 text-bazooka-lime" />
                <span className="text-[8px] font-black uppercase tracking-[.02em] text-white">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto`}>Book Free Trial <ArrowRight className="size-4" /></Link>
            <Link href="#membership-plans" className={`${outlineButton} w-full sm:w-auto`}>View Memberships <ArrowRight className="size-4" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
