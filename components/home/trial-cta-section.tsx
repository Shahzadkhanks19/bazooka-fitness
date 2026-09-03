"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Dumbbell, MapPin, Users } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./home-shared";

const benefits = [
  [CalendarDays, "Choose a time", "Plan your visit"],
  [Dumbbell, "Explore the gym", "See the space"],
  [Users, "Meet the team", "Ask your questions"],
  [MapPin, "Visit Bazooka", "Sardarpura, Jodhpur"],
] as const;

export default function TrialCtaSection() {
  return (
    <section className="group relative overflow-hidden border-b border-bazooka-border/70 py-14 sm:py-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1900&q=90')] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.015]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.94)_0%,rgba(5,5,5,.82)_48%,rgba(5,5,5,.62)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />
      <motion.div {...reveal} className={`${shell} relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10`}>
        <div className="min-w-0">
          <span className="text-[9px] font-black uppercase tracking-[.08em] text-bazooka-lime">Experience Bazooka</span>
          <h2 className="font-display mt-3 text-[34px] font-black uppercase leading-[.96] sm:text-[38px]">See The Gym.<br /><span className="text-bazooka-lime">Book A Free Trial.</span></h2>
          <p className="mt-4 max-w-[560px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">Visit Bazooka Fitness, explore the training environment, meet the team and learn about the membership options available to you.</p>
          <div className="mt-6 grid gap-3 min-[420px]:grid-cols-2 sm:grid-cols-4 sm:gap-4">
            {benefits.map(([Icon, title, subtitle]) => <span key={title} className="flex min-w-0 items-start gap-2 rounded-[5px] border border-white/10 bg-black/30 p-3 backdrop-blur-[2px] transition-all duration-300 hover:border-bazooka-lime/50 hover:bg-bazooka-lime/[.05]"><Icon className="mt-0.5 size-4 shrink-0 text-bazooka-lime" /><span className="min-w-0"><b className="block text-[9px] text-white">{title}</b><small className="mt-0.5 block text-[8px] leading-3 text-bazooka-text-secondary">{subtitle}</small></span></span>)}
          </div>
        </div>
        <div className="flex w-full flex-col gap-3 lg:w-[220px]">
          <Link href="/book-free-trial" className={`${primaryButton} w-full`}>Book Free Trial <ArrowRight className="size-4" /></Link>
          <Link href="/memberships" className={`${outlineButton} w-full`}>View Memberships <ArrowRight className="size-4" /></Link>
        </div>
      </motion.div>
    </section>
  );
}
