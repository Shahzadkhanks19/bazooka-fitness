"use client";

import Link from "next/link";
import { ArrowRight, ClipboardCheck, Dumbbell, Headphones, Salad } from "lucide-react";
import { reveal, shell } from "./contact-shared";
import { motion } from "framer-motion";

const benefits = [
  [ClipboardCheck, "Free Fitness", "Consultation"],
  [Dumbbell, "Body Composition", "Analysis"],
  [Dumbbell, "Personalized", "Workout Plan"],
  [Salad, "Nutrition", "Guidance"],
] as const;

export default function ContactCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-7">
      <div className={shell}>
        <motion.div {...reveal} className="relative overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/94 to-black/50" />
          <div className="relative z-10 grid gap-7 px-6 py-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <h2 className="font-display text-[34px] font-black uppercase leading-[.95] sm:text-[42px]">Ready <span className="text-bazooka-lime">To Transform?</span></h2>
              <p className="mt-3 max-w-[500px] text-[10px] leading-5 text-bazooka-text-secondary">Start your fitness journey today with a free consultation and personalized plan.</p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">{benefits.map(([Icon,a,b])=><div key={a} className="flex items-start gap-2"><Icon className="size-4 text-bazooka-lime"/><span className="text-[8px] leading-4">{a}<br/><span className="text-bazooka-text-secondary">{b}</span></span></div>)}</div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link href="/book-free-trial" className="inline-flex h-11 items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime bg-bazooka-lime px-6 text-[9px] font-black uppercase text-black transition hover:bg-bazooka-lime-hover">Book Your Free Trial <ArrowRight className="size-4"/></Link><Link href="/trainers" className="inline-flex h-11 items-center justify-center gap-3 rounded-[4px] border border-bazooka-border-strong bg-black/35 px-6 text-[9px] font-black uppercase text-white transition hover:border-bazooka-lime hover:text-bazooka-lime">Talk To A Coach <Headphones className="size-4"/></Link></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
