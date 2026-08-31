"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Trophy, TrendingUp, UsersRound } from "lucide-react";
import { reveal, shell } from "./transformations-shared";

const stats = [
  [UsersRound, "1000+", "Transformations"],
  [TrendingUp, "80%", "Achieve Their Goal"],
  [Trophy, "50+", "Success Stories"],
] as const;

export default function TransformationsHeroSection() {
  return (
    <section className="relative min-h-[520px] overflow-hidden border-b border-bazooka-border/70 bg-bazooka-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center grayscale" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15" />
      <div className={`${shell} relative z-10 flex min-h-[520px] items-center py-14`}>
        <motion.div {...reveal} className="max-w-[600px]">
          <div className="mb-6 flex items-center gap-2 text-[9px] font-black uppercase">
            <Link href="/" className="text-bazooka-lime">Home</Link><ChevronRight className="size-3 text-bazooka-text-muted"/><span className="text-white">Transformations</span>
          </div>
          <h1 className="font-display text-[56px] font-black uppercase leading-[.88] sm:text-[72px] lg:text-[82px]">Real People.<br/><span className="text-bazooka-lime">Real Results.</span></h1>
          <p className="mt-6 max-w-[430px] text-[12px] leading-6 text-bazooka-text-secondary">Every transformation tells a story of consistency, dedication and the right guidance. Yours can be next.</p>
          <Link href="/book-free-trial" className="mt-7 inline-flex h-11 items-center gap-3 rounded-[4px] border border-bazooka-lime bg-bazooka-lime px-6 text-[9px] font-black uppercase text-black transition hover:bg-bazooka-lime-hover">Start Your Journey <ArrowRight className="size-4"/></Link>
          <div className="mt-8 grid max-w-[560px] grid-cols-3 gap-3">
            {stats.map(([Icon,value,label]) => <div key={label} className="flex items-center gap-3 border-r border-bazooka-border pr-3 last:border-r-0"><Icon className="size-5 shrink-0 text-bazooka-lime"/><div><strong className="font-display block text-[22px] leading-none text-white">{value}</strong><span className="mt-1 block text-[7px] text-bazooka-text-secondary">{label}</span></div></div>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
