"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Trophy, TrendingUp, UsersRound } from "lucide-react";
import { reveal, shell } from "./transformations-shared";

const stats = [[UsersRound,"1000+","Transformations"],[TrendingUp,"80%","Achieve Their Goal"],[Trophy,"50+","Success Stories"]] as const;

export default function TransformationsHeroSection() {
  return <section className="relative min-h-[520px] overflow-hidden border-b border-bazooka-border/70 bg-bazooka-black">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-[62%_center] grayscale sm:bg-center"/>
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/15"/><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15"/>
    <div className={`${shell} relative z-10 flex min-h-[520px] items-center py-10 sm:py-14`}><motion.div {...reveal} className="w-full max-w-[600px]">
      <div className="mb-6 flex flex-wrap items-center gap-2 text-[8px] font-black uppercase sm:text-[9px]"><Link href="/" className="text-bazooka-lime">Home</Link><ChevronRight className="size-3 text-bazooka-text-muted"/><span className="text-white">Transformations</span></div>
      <h1 className="font-display text-[40px] font-black uppercase leading-[.88] min-[380px]:text-[45px] sm:text-[64px] lg:text-[82px]">Real People.<br/><span className="text-bazooka-lime">Real Results.</span></h1>
      <p className="mt-5 max-w-[430px] text-[11px] leading-5 text-bazooka-text-secondary sm:mt-6 sm:text-[12px] sm:leading-6">Every transformation tells a story of consistency, dedication and the right guidance. Yours can be next.</p>
      <Link href="/book-free-trial" className="mt-7 inline-flex h-11 w-full items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime bg-bazooka-lime px-6 text-[9px] font-black uppercase text-black transition hover:bg-bazooka-lime-hover sm:w-fit">Start Your Journey <ArrowRight className="size-4"/></Link>
      <div className="mt-8 grid grid-cols-1 gap-2 sm:max-w-[560px] sm:grid-cols-3 sm:gap-3">{stats.map(([Icon,value,label])=><div key={label} className="flex min-h-[62px] items-center gap-3 rounded-[4px] border border-bazooka-border/70 bg-black/35 px-3 py-2 sm:min-h-0 sm:rounded-none sm:border-0 sm:border-r sm:bg-transparent sm:p-0 sm:pr-3 last:border-r-0"><Icon className="size-5 shrink-0 text-bazooka-lime"/><div><strong className="font-display block text-[20px] leading-none text-white sm:text-[22px]">{value}</strong><span className="mt-1 block text-[7px] text-bazooka-text-secondary">{label}</span></div></div>)}</div>
    </motion.div></div>
  </section>;
}
