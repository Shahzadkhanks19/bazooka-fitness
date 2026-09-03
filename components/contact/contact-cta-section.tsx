"use client";

import Link from "next/link";
import { ArrowRight, Dumbbell, Headphones, MapPin, UserRoundCheck } from "lucide-react";
import { motion } from "framer-motion";
import { reveal, shell } from "./contact-shared";

const benefits = [
  [UserRoundCheck, "Meet The Team"],
  [Dumbbell, "Explore The Gym"],
  [MapPin, "Visit Sardarpura"],
] as const;

export default function ContactCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-7 sm:py-9">
      <div className={shell}>
        <motion.div {...reveal} className="relative overflow-hidden rounded-[7px] border border-bazooka-border-strong bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/45" />
          <div className="relative z-10 grid gap-7 px-5 py-9 sm:px-7 lg:grid-cols-[1fr_auto] lg:items-center lg:px-9">
            <div>
              <span className="text-[9px] font-black uppercase text-bazooka-lime">Experience Bazooka Fitness</span>
              <h2 className="font-display mt-2 text-[31px] font-black uppercase leading-[.93] min-[380px]:text-[35px] sm:text-[43px]">Come See The Club<br/><span className="text-bazooka-lime">For Yourself.</span></h2>
              <p className="mt-3 max-w-[520px] text-[10px] leading-5 text-bazooka-text-secondary">Book a free trial or speak with the team about memberships, coaching and your first visit.</p>
              <div className="mt-6 grid gap-3 min-[420px]:grid-cols-3 sm:max-w-[560px]">{benefits.map(([Icon,label])=><div key={label} className="flex items-center gap-2.5 rounded-[4px] border border-white/10 bg-black/35 px-3 py-3"><Icon className="size-4 shrink-0 text-bazooka-lime"/><span className="text-[8px] font-black uppercase leading-4 text-white">{label}</span></div>)}</div>
            </div>
            <div className="grid gap-3 sm:flex lg:grid"><Link href="/book-free-trial" className="inline-flex h-11 w-full items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime bg-bazooka-lime px-6 text-[9px] font-black uppercase text-black transition hover:bg-bazooka-lime-hover active:scale-[.98] sm:w-auto">Book Free Trial <ArrowRight className="size-4"/></Link><Link href="/book-session" className="inline-flex h-11 w-full items-center justify-center gap-3 rounded-[4px] border border-bazooka-border-strong bg-black/40 px-6 text-[9px] font-black uppercase text-white transition hover:border-bazooka-lime hover:text-bazooka-lime active:scale-[.98] sm:w-auto">Talk To A Coach <Headphones className="size-4"/></Link></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
