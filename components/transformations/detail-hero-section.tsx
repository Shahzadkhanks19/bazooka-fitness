"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronRight, MapPin, Share2, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { TransformationStory } from "./transformation-data";
import { outlineButton, primaryButton, reveal, shell } from "./transformations-shared";

type HeroStat = readonly [icon: LucideIcon, label: string, value: string | number];

export default function TransformationDetailHero({ story }: { story: TransformationStory }) {
  const stats: readonly HeroStat[] = [
    [CalendarDays, "Duration", story.duration],
    [UserRound, "Age", story.age],
    [MapPin, "Location", story.location],
  ];

  return <section className="border-b border-bazooka-border/70 bg-bazooka-black py-7 sm:py-8 md:py-10">
    <div className={shell}>
      <div className="mb-6 flex flex-wrap items-center gap-2 text-[8px] font-black uppercase sm:text-[9px]"><Link href="/" className="text-bazooka-lime">Home</Link><ChevronRight className="size-3 text-bazooka-text-muted"/><Link href="/transformations" className="text-bazooka-text-secondary hover:text-white">Transformations</Link><ChevronRight className="size-3 text-bazooka-text-muted"/><span className="max-w-full truncate text-white">{story.name}</span></div>
      <div className="grid gap-7 lg:grid-cols-[360px_1fr] lg:items-stretch">
        <motion.div {...reveal} className="flex min-w-0 flex-col justify-center py-2 sm:py-4">
          <span className="text-[9px] font-black uppercase text-bazooka-lime sm:text-[10px]">Transformation Story</span>
          <h1 className="font-display mt-3 break-words text-[40px] font-black uppercase leading-[.9] min-[380px]:text-[44px] sm:text-[56px] md:text-[64px]">{story.name}</h1>
          <h2 className="font-display mt-3 text-[27px] font-black uppercase leading-[.9] text-bazooka-lime sm:text-[32px] md:text-[34px]">Discipline Today,<br/>Strength Forever.</h2>
          <p className="mt-5 max-w-[340px] text-[11px] leading-5 text-bazooka-text-secondary sm:text-[12px] sm:leading-6">“{story.heroQuote}”</p>
          <div className="mt-6 grid grid-cols-1 gap-2 text-[8px] text-bazooka-text-secondary min-[420px]:grid-cols-3 min-[420px]:gap-3">
            {stats.map(([Icon, label, value]) => (
              <div key={label} className="flex items-center gap-3 rounded-[4px] border border-bazooka-border/70 bg-bazooka-surface/60 p-3 min-[420px]:block min-[420px]:rounded-none min-[420px]:border-0 min-[420px]:bg-transparent min-[420px]:p-0">
                <Icon className="size-4 shrink-0 text-bazooka-lime min-[420px]:mb-2"/>
                <div><span className="block uppercase">{label}</span><strong className="mt-1 block break-words text-[10px] text-white">{value}</strong></div>
              </div>
            ))}
          </div>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap"><Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto`}>Book Free Trial <ArrowRight className="size-4"/></Link><button type="button" className={`${outlineButton} w-full sm:w-auto`}>Share Story <Share2 className="size-4"/></button></div>
        </motion.div>

        <motion.div {...reveal} className="relative grid min-h-[420px] overflow-hidden rounded-[5px] border border-bazooka-border-strong sm:min-h-[480px] sm:grid-cols-2">
          <div className="relative min-h-[210px] bg-cover bg-center grayscale sm:min-h-0" style={{backgroundImage:`url(${story.beforeImage})`}}><span className="absolute left-4 top-4 rounded-[3px] border border-white/20 bg-black/75 px-3 py-1.5 text-[8px] font-black uppercase text-white">Before</span></div>
          <div className="relative min-h-[210px] bg-cover bg-center sm:min-h-0" style={{backgroundImage:`url(${story.afterImage})`}}><span className="absolute right-4 top-4 rounded-[3px] bg-bazooka-lime px-3 py-1.5 text-[8px] font-black uppercase text-black">After</span></div>
          <span className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 rotate-90 place-items-center rounded-full border border-bazooka-lime bg-black text-[18px] text-bazooka-lime sm:size-11 sm:rotate-0">›</span>
        </motion.div>
      </div>
    </div>
  </section>;
}
