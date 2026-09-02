"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Sparkles, Users } from "lucide-react";
import { outlineButton, reveal } from "./home-shared";

const highlights = [
  [Dumbbell, "Premium Training"],
  [Users, "Strong Community"],
  [Sparkles, "Better Everyday Fitness"],
] as const;

export default function ExperienceSection() {
  return (
    <section className="grid border-b border-bazooka-border/70 bg-bazooka-soft-black md:min-h-[470px] md:grid-cols-[49%_51%]">
      <motion.div {...reveal} className="flex items-center justify-end bg-[linear-gradient(135deg,#050505_0%,#090909_70%,#0d0d0d_100%)]">
        <div className="w-full max-w-[590px] px-5 py-12 min-[380px]:px-6 sm:px-8 sm:py-14 md:py-16 md:pr-16 lg:pr-24">
          <span className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[.08em] text-bazooka-lime sm:text-[10px]"><span className="size-1.5 rounded-full bg-bazooka-lime shadow-[0_0_12px_rgba(255,181,46,.7)]" /> The Bazooka Experience</span>
          <h2 className="font-display mt-4 max-w-[470px] text-[34px] font-black uppercase leading-[.94] min-[380px]:text-[38px] sm:text-[44px] lg:text-[50px]">
            <span className="block">It’s Not Just A Gym.</span>
            <span className="block text-bazooka-lime">It’s A Movement.</span>
          </h2>
          <span className="mt-4 block h-0.5 w-12 bg-bazooka-lime" />
          <p className="mt-5 max-w-[430px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[12px] sm:leading-6">World-class equipment, expert coaching and a community that keeps you accountable — all built to help you train with purpose and stay consistent.</p>

          <div className="mt-6 grid gap-2 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {highlights.map(([Icon, label]) => (
              <div key={label} className="flex min-h-11 items-center gap-2 rounded-[5px] border border-bazooka-border bg-bazooka-black/70 px-3 py-2 transition-all duration-300 hover:border-bazooka-lime/60 hover:bg-bazooka-lime/[.05]">
                <Icon className="size-4 shrink-0 text-bazooka-lime" />
                <span className="text-[8px] font-black uppercase leading-4 text-bazooka-text-secondary">{label}</span>
              </div>
            ))}
          </div>

          <Link href="/about" className={`${outlineButton} mt-7 w-full border-bazooka-lime/70 sm:w-fit`}>Discover Bazooka <ArrowRight className="size-4" /></Link>
        </div>
      </motion.div>

      <motion.div {...reveal} className="group relative min-h-[360px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1500&q=90')] bg-cover bg-center sm:min-h-[420px] md:min-h-full">
        <div className="absolute inset-0 transition-transform duration-[900ms] group-hover:scale-[1.015]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/42 via-black/18 to-black/5" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 to-transparent" />
        <div className="relative z-10 flex h-full min-h-[360px] items-end px-5 pb-6 sm:min-h-[420px] sm:px-8 sm:pb-8 md:min-h-full md:items-center md:px-12 lg:px-14">
          <div className="w-full max-w-[560px] rounded-[6px] border border-white/12 bg-black/30 px-5 py-5 backdrop-blur-[2px] sm:w-fit sm:px-6 sm:py-6">
            <div className="font-display text-[34px] font-black uppercase leading-[.9] tracking-[-.02em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,.75)] min-[380px]:text-[38px] sm:text-[44px] lg:text-[50px]">
              Better <span className="text-bazooka-lime">People.</span><br />
              A Stronger<br />
              <span className="text-bazooka-lime">Jodhpur.</span>
            </div>
            <span className="mt-4 block h-0.5 w-12 bg-bazooka-lime" />
            <p className="mt-4 max-w-[360px] text-[9px] leading-5 text-white/75 sm:text-[10px]">Train better. Feel stronger. Carry that energy into everything outside the gym.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
