"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Dumbbell, ShieldCheck, Sparkles, Waves } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./facilities-shared";

const highlights = [
  [Dumbbell, "Training Zones", "Spaces for strength, cardio and functional work"],
  [Waves, "Recovery", "Steam, shower and post-workout recovery spaces"],
  [ShieldCheck, "Clean Environment", "Member-focused spaces maintained for everyday training"],
  [Sparkles, "Complete Experience", "Training, recovery and Cafe Bazooka in one place"],
] as const;

export default function FacilitiesHeroSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black">
      <div className="relative min-h-[560px] overflow-hidden sm:min-h-[590px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-[62%_center] transition-transform duration-700 sm:bg-center sm:hover:scale-[1.015]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-transparent to-black/24" />
        <div className={`${shell} relative z-10 flex min-h-[560px] items-center py-10 sm:min-h-[590px] sm:py-14`}>
          <motion.div {...reveal} className="w-full max-w-[700px] min-w-0">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[8px] font-black uppercase sm:text-[9px]">
              <Link href="/" className="text-white transition hover:text-bazooka-lime focus-visible:text-bazooka-lime">Home</Link>
              <ChevronRight className="size-3 text-bazooka-lime" />
              <span className="text-bazooka-text-secondary">Facilities</span>
            </div>
            <span className="text-[9px] font-black uppercase tracking-[.04em] text-bazooka-lime sm:text-[10px]">Train. Recover. Recharge.</span>
            <h1 className="font-display mt-3 max-w-full text-[39px] font-black uppercase leading-[.88] min-[380px]:text-[45px] sm:text-[64px] lg:text-[82px]">
              <span className="block">Facilities</span>
              <span className="block text-bazooka-lime">Built To Perform.</span>
            </h1>
            <span className="mt-4 block h-[2px] w-8 bg-bazooka-lime" />
            <p className="mt-5 max-w-[540px] text-[11px] leading-5 text-bazooka-text-secondary sm:mt-6 sm:text-[12px] sm:leading-6">Explore dedicated training zones, recovery spaces and everyday member amenities designed to support a better gym experience from warm-up to cooldown.</p>
            <div className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap">
              <Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto`}>Book Free Trial <ArrowRight className="size-4" /></Link>
              <Link href="#facility-zones" className={`${outlineButton} w-full sm:w-auto`}>Explore Facilities <ArrowRight className="size-4" /></Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={`${shell} relative z-20 pb-8 pt-4 sm:-mt-7 sm:pt-0`}>
        <div className="grid gap-px overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(([Icon, title, text], index) => (
            <motion.div key={title} {...reveal} transition={{ duration: .45, delay: index * .04 }} className="group flex min-h-[112px] min-w-0 items-center gap-4 bg-bazooka-soft-black px-5 py-5 transition-colors hover:bg-bazooka-lime/[0.045]">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 text-bazooka-lime transition-transform duration-300 group-hover:scale-105"><Icon className="size-5" /></span>
              <div className="min-w-0"><strong className="font-display block text-[14px] font-black uppercase leading-4">{title}</strong><small className="mt-1 block text-[8px] leading-4 text-bazooka-text-secondary">{text}</small></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
