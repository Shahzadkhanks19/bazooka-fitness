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
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-7 md:py-10">
      <div className={shell}>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => <button key={filter} type="button" onClick={() => setActive(filter)} className={`shrink-0 rounded-[4px] border px-5 py-3 text-[8px] font-black uppercase transition ${active === filter ? "border-bazooka-lime bg-bazooka-lime text-black" : "border-bazooka-border-strong bg-bazooka-surface text-white hover:border-bazooka-lime hover:text-bazooka-lime"}`}>{filter === "All" ? "All Transformations" : filter}</button>)}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stories.map((story, index) => (
            <motion.article key={story.slug} {...reveal} transition={{ duration: .45, delay: index * .035 }} className="group overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime">
              <div className="relative grid h-[230px] grid-cols-2 overflow-hidden">
                <div className="relative bg-cover bg-center grayscale" style={{ backgroundImage: `url(${story.beforeImage})` }}><span className="absolute left-3 top-3 rounded-[3px] bg-black/70 px-2 py-1 text-[7px] font-black uppercase text-white">Before</span></div>
                <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${story.afterImage})` }}><span className="absolute right-3 top-3 rounded-[3px] bg-bazooka-lime px-2 py-1 text-[7px] font-black uppercase text-black">After</span></div>
                <span className="absolute left-3 top-3 rounded-[3px] bg-bazooka-lime px-2 py-1 text-[7px] font-black uppercase text-black">{story.category}</span>
                <span className="absolute left-1/2 top-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-bazooka-lime bg-black text-bazooka-lime">→</span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-[20px] font-black uppercase">{story.name}</h3>
                <p className="mt-1 text-[9px] text-bazooka-text-secondary">{story.result}</p>
                <div className="mt-4 flex items-center gap-5 text-[8px] text-bazooka-text-secondary"><span className="inline-flex items-center gap-1.5"><CalendarDays className="size-3.5 text-bazooka-lime"/>{story.duration}</span><span className="inline-flex items-center gap-1.5"><Dumbbell className="size-3.5 text-bazooka-lime"/>{story.metric}</span></div>
                <Link href={`/transformations/${story.slug}`} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[4px] border border-bazooka-lime px-4 py-2.5 text-[8px] font-black uppercase text-white transition hover:bg-bazooka-lime hover:text-black">View Story <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1"/></Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
