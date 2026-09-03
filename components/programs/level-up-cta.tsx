"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Sparkles } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./programs-shared";

export default function LevelUpCta() {
  return (
    <section className="bg-bazooka-soft-black pb-12 pt-2 sm:pb-14">
      <div className={shell}>
        <motion.div
          {...reveal}
          className="group relative overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-[linear-gradient(110deg,#111214_0%,#101112_50%,#090909_100%)] px-5 py-7 transition-all duration-300 hover:border-bazooka-lime/60 sm:px-7 sm:py-8 lg:flex lg:items-center lg:justify-between lg:gap-8"
        >
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[65%] bg-[radial-gradient(circle_at_center,rgba(255,181,46,.10),transparent_62%)] sm:w-[50%]" />
          <div className="relative min-w-0">
            <span className="inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[.08em] text-bazooka-lime"><Sparkles className="size-3.5" /> Your Next Step</span>
            <h2 className="font-display mt-3 max-w-full text-[30px] font-black uppercase italic leading-[.94] min-[380px]:text-[34px] sm:text-[40px]">Ready To <span className="text-bazooka-lime">Level Up?</span></h2>
            <p className="mt-3 max-w-[520px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">Experience the gym, meet the team and find the training path that fits your goals.</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[8px] font-bold uppercase text-white/80">
              <span className="inline-flex items-center gap-2"><Dumbbell className="size-3.5 text-bazooka-lime" /> Expert-led training</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="size-3.5 text-bazooka-lime" /> Goal-focused programs</span>
            </div>
          </div>
          <div className="relative mt-6 grid w-full gap-3 sm:flex sm:flex-wrap lg:mt-0 lg:w-auto lg:shrink-0">
            <Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto`}>Book Free Trial <ArrowRight className="size-4" /></Link>
            <Link href="/memberships" className={`${outlineButton} w-full sm:w-auto`}>View Memberships <ArrowRight className="size-4" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
