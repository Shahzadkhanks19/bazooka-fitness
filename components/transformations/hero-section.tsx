"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Dumbbell, Target, TrendingUp } from "lucide-react";
import { reveal, shell } from "./transformations-shared";

const highlights = [
  [Target, "Goal Focused", "Train with a clear direction"],
  [Dumbbell, "Structured Training", "Progress with purpose"],
  [TrendingUp, "Consistent Progress", "Build habits that last"],
] as const;

export default function TransformationsHeroSection() {
  return (
    <section className="relative min-h-[540px] overflow-hidden border-b border-bazooka-border/70 bg-bazooka-black sm:min-h-[560px]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-[64%_center] transition-transform duration-700 sm:bg-center sm:hover:scale-[1.015]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/74 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-transparent to-black/18" />
      <div className={`${shell} relative z-10 flex min-h-[540px] items-center py-10 sm:min-h-[560px] sm:py-14`}>
        <motion.div {...reveal} className="w-full max-w-[650px] min-w-0">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-[8px] font-black uppercase sm:text-[9px]"><Link href="/" className="text-white transition hover:text-bazooka-lime focus-visible:text-bazooka-lime">Home</Link><ChevronRight className="size-3 text-bazooka-lime" /><span className="text-bazooka-text-secondary">Transformations</span></div>
          <span className="text-[9px] font-black uppercase tracking-[.04em] text-bazooka-lime sm:text-[10px]">Built Through Consistency</span>
          <h1 className="font-display mt-3 max-w-full text-[39px] font-black uppercase leading-[.88] min-[380px]:text-[44px] sm:text-[64px] lg:text-[80px]"><span className="block">Progress You</span><span className="block text-bazooka-lime">Can Build.</span></h1>
          <p className="mt-5 max-w-[500px] text-[11px] leading-5 text-bazooka-text-secondary sm:mt-6 sm:text-[12px] sm:leading-6">Transformation comes from clear goals, structured training and the consistency to keep showing up. Start with a plan that fits where you are today.</p>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap"><Link href="/book-free-trial" className="inline-flex h-11 w-full items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime bg-bazooka-lime px-6 text-[9px] font-black uppercase text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-bazooka-lime-hover active:scale-[.97] sm:w-fit">Start Your Journey <ArrowRight className="size-4" /></Link><Link href="/programs/transformation-program" className="inline-flex h-11 w-full items-center justify-center gap-3 rounded-[4px] border border-bazooka-border-strong px-6 text-[9px] font-black uppercase text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-bazooka-lime hover:text-bazooka-lime active:scale-[.97] sm:w-fit">Explore Program <ArrowRight className="size-4" /></Link></div>
          <div className="mt-8 grid gap-2 sm:max-w-[620px] sm:grid-cols-3 sm:gap-3">{highlights.map(([Icon,title,text]) => <div key={title} className="group flex min-h-[68px] items-center gap-3 rounded-[5px] border border-bazooka-border/70 bg-black/40 px-4 py-3 backdrop-blur-[2px] transition-all duration-300 hover:border-bazooka-lime/70 hover:bg-bazooka-lime/[0.06]"><Icon className="size-5 shrink-0 text-bazooka-lime transition-transform duration-300 group-hover:scale-110" /><div className="min-w-0"><strong className="font-display block text-[11px] font-black uppercase text-white">{title}</strong><span className="mt-1 block text-[7px] leading-3 text-bazooka-text-secondary">{text}</span></div></div>)}</div>
        </motion.div>
      </div>
    </section>
  );
}
