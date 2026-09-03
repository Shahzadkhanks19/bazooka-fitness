"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Dumbbell, Target, TrendingUp } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./transformations-shared";

const points = [
  [Target, "Clear Goal", "Know what you are working toward"],
  [ClipboardCheck, "Structured Plan", "Train with a practical approach"],
  [Dumbbell, "Coach Support", "Get guidance when you need it"],
  [TrendingUp, "Progress Focus", "Build consistency over time"],
] as const;

export default function TransformationCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-10 sm:py-12">
      <div className={shell}>
        <motion.div {...reveal} className="grid overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface lg:grid-cols-[1.12fr_.88fr]">
          <div className="relative min-h-[320px] overflow-hidden px-5 py-8 sm:min-h-[350px] sm:px-8 sm:py-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=90')] bg-cover bg-center opacity-70 transition-transform duration-700 hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/28" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
            <div className="relative z-10 flex h-full max-w-[500px] flex-col justify-center">
              <span className="text-[9px] font-black uppercase tracking-[.04em] text-bazooka-lime sm:text-[10px]">Start With A Plan</span>
              <h2 className="font-display mt-3 max-w-full text-[31px] font-black uppercase leading-[.92] min-[380px]:text-[35px] sm:text-[43px]">Your Next Chapter Starts <span className="text-bazooka-lime">Here.</span></h2>
              <p className="mt-4 max-w-[440px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">Book a free trial, experience the gym and talk through the goal you want to work on before choosing your training path.</p>
              <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap"><Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto`}>Book Free Trial <ArrowRight className="size-4"/></Link><Link href="/programs/transformation-program" className={`${outlineButton} w-full sm:w-auto`}>Explore Program <ArrowRight className="size-4"/></Link></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {points.map(([Icon,title,sub],index) => <div key={title} className={`group flex min-h-[145px] items-center gap-4 border-b border-bazooka-border px-5 py-5 transition-colors duration-300 hover:bg-bazooka-lime/[.04] sm:min-h-[175px] sm:px-6 ${index % 2 === 0 ? "sm:border-r" : ""} ${index > 1 ? "sm:border-b-0" : ""}`}><span className="grid size-11 shrink-0 place-items-center rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 text-bazooka-lime transition-transform duration-300 group-hover:scale-105"><Icon className="size-5"/></span><div className="min-w-0"><strong className="font-display block text-[14px] font-black uppercase text-white">{title}</strong><span className="mt-1 block text-[8px] leading-4 text-bazooka-text-secondary">{sub}</span></div></div>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
