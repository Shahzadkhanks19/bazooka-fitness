"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronRight, Dumbbell, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { TransformationStory } from "./transformation-data";
import { outlineButton, primaryButton, reveal, shell } from "./transformations-shared";

type HeroStat = readonly [icon: LucideIcon, label: string, value: string];

export default function TransformationDetailHero({ story }: { story: TransformationStory }) {
  const stats: readonly HeroStat[] = [
    [CalendarDays, "Timeline", story.duration],
    [Target, "Focus", story.focus],
    [Dumbbell, "Approach", story.approach],
  ];

  return <section className="border-b border-bazooka-border/70 bg-bazooka-black py-7 sm:py-8 md:py-10">
    <div className={shell}>
      <div className="mb-6 flex flex-wrap items-center gap-2 text-[8px] font-black uppercase sm:text-[9px]"><Link href="/" className="text-bazooka-lime transition hover:text-bazooka-lime-hover">Home</Link><ChevronRight className="size-3 text-bazooka-text-muted"/><Link href="/transformations" className="text-bazooka-text-secondary transition hover:text-white">Transformations</Link><ChevronRight className="size-3 text-bazooka-text-muted"/><span className="max-w-full truncate text-white">{story.name}</span></div>
      <div className="grid gap-7 lg:grid-cols-[360px_1fr] lg:items-stretch">
        <motion.div {...reveal} className="flex min-w-0 flex-col justify-center py-2 sm:py-4">
          <span className="text-[9px] font-black uppercase text-bazooka-lime sm:text-[10px]">Training Goal Guide</span>
          <h1 className="font-display mt-3 break-words text-[40px] font-black uppercase leading-[.9] min-[380px]:text-[44px] sm:text-[56px] md:text-[64px]">{story.name}</h1>
          <h2 className="font-display mt-3 text-[27px] font-black uppercase leading-[.9] text-bazooka-lime sm:text-[32px] md:text-[34px]">Build The Routine.<br/>Track The Progress.</h2>
          <p className="mt-5 max-w-[340px] text-[11px] leading-5 text-bazooka-text-secondary sm:text-[12px] sm:leading-6">{story.heroQuote}</p>
          <div className="mt-6 grid grid-cols-1 gap-2 text-[8px] text-bazooka-text-secondary min-[420px]:grid-cols-3 min-[420px]:gap-3">
            {stats.map(([Icon, label, value]) => <div key={label} className="flex items-center gap-3 rounded-[4px] border border-bazooka-border/70 bg-bazooka-surface/60 p-3 min-[420px]:block min-[420px]:rounded-none min-[420px]:border-0 min-[420px]:bg-transparent min-[420px]:p-0"><Icon className="size-4 shrink-0 text-bazooka-lime min-[420px]:mb-2"/><div><span className="block uppercase">{label}</span><strong className="mt-1 block break-words text-[10px] text-white">{value}</strong></div></div>)}
          </div>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap"><Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto`}>Request Free Trial <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></Link><Link href="/transformations" className={`${outlineButton} w-full sm:w-auto`}>View All Goals <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></Link></div>
        </motion.div>

        <motion.div {...reveal} className="relative min-h-[420px] overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center sm:min-h-[480px]" style={{backgroundImage:`url(${story.afterImage})`}}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10"/>
          <span className="absolute left-4 top-4 rounded-[3px] border border-bazooka-lime/60 bg-black/70 px-3 py-1.5 text-[8px] font-black uppercase text-bazooka-lime">Illustrative Training Visual</span>
          <div className="absolute bottom-5 left-5 right-5 max-w-[520px] rounded-[5px] border border-white/10 bg-black/55 p-4 backdrop-blur-sm"><span className="text-[8px] font-black uppercase text-bazooka-lime">{story.category}</span><p className="mt-2 text-[10px] leading-5 text-white/85">{story.result}</p></div>
        </motion.div>
      </div>
    </div>
  </section>;
}
