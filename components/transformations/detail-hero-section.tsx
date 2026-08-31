"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronRight, MapPin, Share2, UserRound } from "lucide-react";
import type { TransformationStory } from "./transformation-data";
import { outlineButton, primaryButton, reveal, shell } from "./transformations-shared";

export default function TransformationDetailHero({ story }: { story: TransformationStory }) {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-8 md:py-10">
      <div className={shell}>
        <div className="mb-6 flex items-center gap-2 text-[9px] font-black uppercase">
          <Link href="/" className="text-bazooka-lime">Home</Link><ChevronRight className="size-3 text-bazooka-text-muted"/><Link href="/transformations" className="text-bazooka-text-secondary hover:text-white">Transformations</Link><ChevronRight className="size-3 text-bazooka-text-muted"/><span className="text-white">{story.name}</span>
        </div>
        <div className="grid gap-7 lg:grid-cols-[360px_1fr] lg:items-stretch">
          <motion.div {...reveal} className="flex flex-col justify-center py-4">
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Transformation Story</span>
            <h1 className="font-display mt-3 text-[52px] font-black uppercase leading-[.9] md:text-[64px]">{story.name}</h1>
            <h2 className="font-display mt-3 text-[34px] font-black uppercase leading-[.9] text-bazooka-lime">Discipline Today,<br/>Strength Forever.</h2>
            <p className="mt-5 max-w-[340px] text-[12px] leading-6 text-bazooka-text-secondary">“{story.heroQuote}”</p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-[8px] text-bazooka-text-secondary">
              <div><CalendarDays className="mb-2 size-4 text-bazooka-lime"/><span className="block uppercase">Duration</span><strong className="mt-1 block text-[10px] text-white">{story.duration}</strong></div>
              <div><UserRound className="mb-2 size-4 text-bazooka-lime"/><span className="block uppercase">Age</span><strong className="mt-1 block text-[10px] text-white">{story.age}</strong></div>
              <div><MapPin className="mb-2 size-4 text-bazooka-lime"/><span className="block uppercase">Location</span><strong className="mt-1 block text-[10px] text-white">{story.location}</strong></div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3"><Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4"/></Link><button type="button" className={outlineButton}>Share Story <Share2 className="size-4"/></button></div>
          </motion.div>

          <motion.div {...reveal} className="relative grid min-h-[480px] overflow-hidden rounded-[5px] border border-bazooka-border-strong sm:grid-cols-2">
            <div className="relative bg-cover bg-center grayscale" style={{ backgroundImage: `url(${story.beforeImage})` }}><span className="absolute left-4 top-4 rounded-[3px] border border-white/20 bg-black/75 px-3 py-1.5 text-[8px] font-black uppercase text-white">Before</span></div>
            <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${story.afterImage})` }}><span className="absolute right-4 top-4 rounded-[3px] bg-bazooka-lime px-3 py-1.5 text-[8px] font-black uppercase text-black">After</span></div>
            <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-bazooka-lime bg-black text-[18px] text-bazooka-lime">›</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
