"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Dumbbell } from "lucide-react";
import { useMemo, useState } from "react";
import { transformationStories } from "./transformation-data";
import { reveal, shell } from "./transformations-shared";

const filters = ["All", "Weight Loss", "Muscle Gain", "Body Transformation", "Strength", "Fat Loss", "General Fitness"] as const;

export default function TransformationsGallerySection() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const stories = useMemo(() => active === "All" ? transformationStories : transformationStories.filter((story) => story.category === active), [active]);

  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-12 sm:py-14">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[400px_1fr] lg:items-end">
          <div className="min-w-0">
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Training Goal Guides</span>
            <h2 className="font-display mt-2 max-w-full text-[32px] font-black uppercase leading-[.94] min-[380px]:text-[36px] sm:text-[46px]">Different Goals. <span className="text-bazooka-lime">Clearer Direction.</span></h2>
            <span className="mt-3 block h-[2px] w-8 bg-bazooka-lime" />
          </div>
          <p className="max-w-[560px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px] lg:justify-self-end">Explore goal-based training guides without fabricated member results or stock before-and-after claims.</p>
        </motion.div>

        <div className="mt-7 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible sm:pb-0">
          {filters.map((filter) => <button key={filter} type="button" onClick={() => setActive(filter)} aria-pressed={active === filter} className={`shrink-0 rounded-[4px] border px-4 py-3 text-[8px] font-black uppercase transition-all duration-200 active:scale-[.97] ${active === filter ? "border-bazooka-lime bg-bazooka-lime text-black" : "border-bazooka-border-strong bg-bazooka-surface text-white hover:border-bazooka-lime hover:text-bazooka-lime"}`}>{filter === "All" ? "All Goals" : filter}</button>)}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story, index) => (
            <motion.article key={story.slug} {...reveal} transition={{ duration: .45, delay: index * .035 }} className="group min-w-0 overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime">
              <div className="relative h-[245px] overflow-hidden bg-cover bg-center transition-transform duration-700" style={{ backgroundImage: `url(${story.afterImage})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10"/>
                <span className="absolute left-3 top-3 rounded-[3px] border border-bazooka-lime/70 bg-black/70 px-2.5 py-1.5 text-[7px] font-black uppercase text-bazooka-lime backdrop-blur-sm">{story.category}</span>
                <div className="absolute inset-x-4 bottom-4"><span className="text-[8px] font-black uppercase text-bazooka-lime">Illustrative Training Visual</span><h3 className="font-display mt-1 text-[24px] font-black uppercase leading-none text-white">{story.name}</h3></div>
              </div>
              <div className="p-4 sm:p-5">
                <p className="min-h-[40px] text-[9px] leading-5 text-bazooka-text-secondary">{story.result}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-[8px] text-bazooka-text-secondary"><span className="inline-flex items-center gap-1.5 rounded-[4px] border border-bazooka-border bg-black/20 px-2.5 py-2"><CalendarDays className="size-3.5 shrink-0 text-bazooka-lime"/>{story.duration}</span><span className="inline-flex items-center gap-1.5 rounded-[4px] border border-bazooka-border bg-black/20 px-2.5 py-2"><Dumbbell className="size-3.5 shrink-0 text-bazooka-lime"/>{story.metric}</span></div>
                <Link href={`/transformations/${story.slug}`} className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-[4px] border border-bazooka-lime px-4 text-[8px] font-black uppercase text-white transition-all duration-200 hover:bg-bazooka-lime hover:text-black active:scale-[.98]">Explore Guide <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1"/></Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
