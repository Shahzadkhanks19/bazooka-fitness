"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Dumbbell, Music2, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./facilities-shared";

const stats = [[UsersRound,"25,000+","Sq. Ft. Area"],[Dumbbell,"100+","Premium Equipment"],[Sparkles,"20+","Training Zones"],[ShieldCheck,"100%","Hygienic & Safe"],[Music2,"Music","High Energy Vibes"]] as const;

export default function FacilitiesHeroSection() {
  return <section className="border-b border-bazooka-border/70 bg-bazooka-black">
    <div className="relative min-h-[560px] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-[62%_center] transition-transform duration-700 sm:bg-center sm:hover:scale-[1.015]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/74 to-black/8" /><div className="absolute inset-0 bg-gradient-to-t from-black/78 via-transparent to-black/26" />
      <div className={`${shell} relative z-10 flex min-h-[560px] items-center py-10 sm:py-14`}><motion.div {...reveal} className="w-full max-w-[680px] min-w-0">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-[8px] font-black uppercase sm:text-[9px]"><Link href="/" className="text-white transition hover:text-bazooka-lime focus-visible:text-bazooka-lime">Home</Link><ChevronRight className="size-3 text-bazooka-lime" /><span className="text-bazooka-text-secondary">Facilities</span></div>
        <span className="text-[9px] font-black uppercase tracking-[.04em] text-bazooka-lime sm:text-[10px]">Premium Equipment. Premium Experience.</span>
        <h1 className="font-display mt-3 max-w-full text-[40px] font-black uppercase leading-[.88] min-[380px]:text-[45px] sm:text-[64px] lg:text-[82px]"><span className="block">Facilities</span><span className="block text-bazooka-lime">That Inspire.</span></h1>
        <p className="mt-5 max-w-[520px] text-[11px] leading-5 text-bazooka-text-secondary sm:mt-6 sm:text-[12px] sm:leading-6">World-class equipment, modern amenities and a high-energy environment — everything you need to train smarter, recover better and live stronger.</p>
        <div className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap"><Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto`}>Book Free Trial <ArrowRight className="size-4" /></Link><Link href="#facility-zones" className={`${outlineButton} w-full sm:w-auto`}>Take A Tour <ArrowRight className="size-4" /></Link></div>
      </motion.div></div>
    </div>
    <div className={`${shell} relative z-20 pb-8 pt-4 sm:-mt-7 sm:pt-0`}><div className="grid grid-cols-2 overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-soft-black lg:grid-cols-5">{stats.map(([Icon,value,label],index)=><motion.div key={String(label)} {...reveal} transition={{duration:.45,delay:index*.04}} className="group relative flex min-h-[92px] min-w-0 items-center justify-center gap-3 border-b border-r border-bazooka-border/50 px-3 py-4 transition-colors hover:bg-bazooka-lime/[0.045] sm:gap-4 sm:px-4 lg:border-b-0 lg:border-r-0"><Icon className="size-5 shrink-0 text-bazooka-lime transition-transform duration-300 group-hover:scale-110 sm:size-6"/><div className="min-w-0"><strong className="font-display block text-[18px] font-black uppercase leading-none sm:text-[22px]">{value}</strong><small className="mt-1 block text-[7px] font-bold uppercase leading-3 text-bazooka-text-secondary">{label}</small></div>{index<stats.length-1&&<span className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-bazooka-border lg:block"/>}</motion.div>)}</div></div>
  </section>;
}
