"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BookOpenCheck, HeartHandshake, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { primaryButton, reveal, shell } from "./trainers-shared";

const values = [
  [BadgeCheck, "Certified & Qualified"],
  [BookOpenCheck, "Experienced Professionals"],
  [HeartHandshake, "Passionate & Motivated"],
  [Sparkles, "Always Learning & Evolving"],
  [ShieldCheck, "Safety Focused"],
  [Trophy, "Results Driven"],
] as const;

export default function TrainerValuesSection() {
  return <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14 md:py-16"><div className={`${shell} grid gap-4 lg:grid-cols-[1.15fr_.85fr]`}>
    <motion.div {...reveal} className="relative min-h-[430px] overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-[url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1400&q=90')] bg-cover bg-center p-6 sm:p-8"><div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/25"/><div className="relative z-10 max-w-[330px]"><h2 className="font-display text-[38px] font-black uppercase leading-[.92]">Trainers Who <span className="text-bazooka-lime">Care.</span> Results That Speak.</h2><p className="mt-4 text-[10px] leading-5 text-bazooka-text-secondary">We believe in building strong relationships with our members and tailoring every workout to your unique goals.</p><ul className="mt-5 space-y-2 text-[9px] text-bazooka-text-secondary">{["Personalized Training","Continuous Support","Goal Oriented Approach","Track. Adapt. Achieve."].map((item)=><li key={item} className="flex items-center gap-2"><BadgeCheck className="size-3.5 text-bazooka-lime"/>{item}</li>)}</ul><Link href="/book-session" className={`${primaryButton} mt-6`}>Book A Session <ArrowRight className="size-4"/></Link></div></motion.div>
    <motion.div {...reveal} className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-6"><span className="text-[10px] font-black uppercase text-bazooka-lime">Our Trainers Are</span><div className="mt-5 grid gap-3 sm:grid-cols-2">{values.map(([Icon,label])=><div key={label} className="rounded-[5px] border border-bazooka-border bg-black/20 p-4"><Icon className="size-5 text-bazooka-lime"/><p className="font-display mt-3 text-[14px] font-black uppercase leading-tight">{label}</p></div>)}</div></motion.div>
  </div></section>;
}
