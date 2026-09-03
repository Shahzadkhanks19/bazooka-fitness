"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BookOpenCheck, HeartHandshake, ShieldCheck, Sparkles, Target } from "lucide-react";
import { primaryButton, reveal, shell } from "./trainers-shared";

const values = [
  [BadgeCheck, "Clear Coaching"],
  [BookOpenCheck, "Structured Training"],
  [HeartHandshake, "Member Support"],
  [Sparkles, "Progressive Approach"],
  [ShieldCheck, "Safety Minded"],
  [Target, "Goal Focused"],
] as const;

export default function TrainerValuesSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14 sm:py-16">
      <div className={`${shell} grid gap-4 lg:grid-cols-[1.15fr_.85fr]`}>
        <motion.div {...reveal} className="group relative min-h-[430px] overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-[url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1400&q=90')] bg-cover bg-center transition-all duration-500 hover:border-bazooka-lime/60">
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/78 to-black/25" />
          <div className="relative z-10 flex min-h-[430px] max-w-[430px] flex-col justify-end p-5 sm:p-8 lg:justify-center">
            <span className="text-[9px] font-black uppercase tracking-[.05em] text-bazooka-lime">Coaching At Bazooka</span>
            <h2 className="font-display mt-3 max-w-full text-[32px] font-black uppercase leading-[.92] min-[380px]:text-[36px] sm:text-[42px]">Support That Keeps You <span className="text-bazooka-lime">Moving.</span></h2>
            <p className="mt-4 text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">Good coaching is more than counting reps. It is about helping you train with purpose, understand the plan and keep making progress over time.</p>
            <ul className="mt-5 grid gap-2 text-[9px] text-bazooka-text-secondary sm:grid-cols-2">
              {["Personalised guidance", "Consistent support", "Goal-led sessions", "Progress check-ins"].map((item) => <li key={item} className="flex items-center gap-2"><BadgeCheck className="size-3.5 shrink-0 text-bazooka-lime" />{item}</li>)}
            </ul>
            <Link href="/book-session" className={`${primaryButton} mt-6 w-full sm:w-fit`}>Book A Session <ArrowRight className="size-4" /></Link>
          </div>
        </motion.div>

        <motion.div {...reveal} className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-6">
          <span className="text-[10px] font-black uppercase text-bazooka-lime">What To Expect</span>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {values.map(([Icon, label]) => (
              <div key={label} className="group rounded-[5px] border border-bazooka-border bg-black/20 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-bazooka-lime/70 hover:bg-bazooka-lime/[.035]">
                <span className="grid size-9 place-items-center rounded-full border border-bazooka-lime/40 bg-bazooka-lime/10 text-bazooka-lime transition-transform duration-300 group-hover:scale-105"><Icon className="size-4.5" /></span>
                <p className="font-display mt-4 text-[14px] font-black uppercase leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
