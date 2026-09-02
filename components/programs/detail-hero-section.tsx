"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Clock3, Gauge, UserRoundCheck } from "lucide-react";
import type { ProgramDetail } from "./program-data";
import { primaryButton, outlineButton, reveal, shell } from "./programs-shared";

export default function DetailHeroSection({ program }: { program: ProgramDetail }) {
  const stats = [[Clock3,"Session",program.duration],[Gauge,"Level",program.level],[UserRoundCheck,"Coaching",program.coaching]] as const;
  return <section className="border-b border-bazooka-border/70 bg-bazooka-black">
    <div className="relative min-h-[540px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-[62%_center] sm:bg-center" style={{backgroundImage:`url(${program.heroImage})`}}/><div className="absolute inset-0 bg-gradient-to-r from-black via-black/76 to-black/16"/><div className="absolute inset-0 bg-gradient-to-t from-black/76 via-transparent to-black/18"/>
      <div className={`${shell} relative z-10 flex min-h-[540px] items-center py-10 sm:py-14`}><motion.div {...reveal} className="w-full max-w-[730px]">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-[8px] font-black uppercase tracking-[0.04em] sm:mb-7 sm:text-[9px]"><Link href="/" className="text-bazooka-lime transition hover:text-bazooka-lime-hover">Home</Link><ChevronRight className="size-3 text-bazooka-text-muted"/><Link href="/programs" className="text-bazooka-text-secondary transition hover:text-white">Programs</Link><ChevronRight className="size-3 text-bazooka-text-muted"/><span className="max-w-full truncate text-white">{program.title}</span></div>
        <span className="text-[9px] font-black uppercase tracking-[0.04em] text-bazooka-lime sm:text-[10px]">{program.eyebrow}</span>
        <h1 className="font-display mt-3 max-w-[800px] break-words text-[40px] font-black uppercase leading-[.88] min-[380px]:text-[45px] sm:text-[62px] lg:text-[84px]">{program.title}</h1>
        <p className="mt-5 max-w-[600px] text-[11px] leading-5 text-bazooka-text-secondary sm:text-[13px] sm:leading-6">{program.summary}</p>
        <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap"><Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto`}>Book Free Trial <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></Link><Link href="/programs/all" className={`${outlineButton} w-full sm:w-auto`}>View All Programs <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></Link></div>
      </motion.div></div>
    </div>
    <div className={`${shell} grid overflow-hidden rounded-b-[5px] border-x border-b border-bazooka-border-strong bg-bazooka-soft-black sm:grid-cols-3`}>{stats.map(([Icon,label,value],index)=><motion.div key={label} {...reveal} transition={{duration:.4,delay:index*.05}} className="relative flex min-h-[82px] items-center gap-4 border-b border-bazooka-border px-4 py-4 last:border-b-0 sm:min-h-[92px] sm:justify-center sm:border-b-0 sm:px-5"><Icon className="size-5 shrink-0 text-bazooka-lime"/><div><small className="block text-[8px] font-black uppercase tracking-[.08em] text-bazooka-text-muted">{label}</small><strong className="font-display mt-1 block break-words text-[18px] font-black uppercase leading-none text-white sm:text-[20px]">{value}</strong></div>{index<stats.length-1&&<span className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-bazooka-border sm:block"/>}</motion.div>)}</div>
  </section>;
}
