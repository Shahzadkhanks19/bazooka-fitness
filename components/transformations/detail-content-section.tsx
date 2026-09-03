"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { TransformationStory } from "./transformation-data";
import { reveal, shell } from "./transformations-shared";

export default function TransformationDetailContent({ story }: { story: TransformationStory }) {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-10 sm:py-12">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {story.stats.map((stat,index)=><div key={stat.label} className="group rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface px-5 py-5 transition-all duration-300 hover:border-bazooka-lime/70"><span className="text-[7px] font-black uppercase tracking-[.08em] text-bazooka-text-secondary">0{index + 1}</span><strong className="font-display mt-3 block text-[25px] font-black leading-none text-bazooka-lime">{stat.value}</strong><span className="mt-2 block text-[8px] uppercase leading-4 text-bazooka-text-secondary">{stat.label}</span></div>)}
        </motion.div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
          <motion.article {...reveal} className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-7">
            <span className="text-[8px] font-black uppercase text-bazooka-lime">The Journey</span>
            <h2 className="font-display mt-2 text-[27px] font-black uppercase leading-[.95] sm:text-[32px]">{story.name.replace(".","")}’s <span className="text-bazooka-lime">Story</span></h2>
            <div className="mt-5 space-y-4">{story.story.map((paragraph)=><p key={paragraph} className="text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px] sm:leading-6">{paragraph}</p>)}</div>
          </motion.article>
          <motion.article {...reveal} className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-7">
            <span className="text-[8px] font-black uppercase text-bazooka-lime">Profile Snapshot</span>
            <h2 className="font-display mt-2 text-[27px] font-black uppercase leading-[.95] sm:text-[32px]">Transformation <span className="text-bazooka-lime">Details</span></h2>
            <div className="mt-5 divide-y divide-bazooka-border/70">{story.details.map((row)=><div key={row.label} className="grid grid-cols-[1fr_auto] items-center gap-4 py-3 text-[9px]"><span className="text-bazooka-text-secondary">{row.label}</span><strong className="max-w-[170px] text-right leading-4 text-white">{row.value}</strong></div>)}</div>
          </motion.article>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {[
            ["Workout Plan",story.workoutPlan],
            ["Nutrition Plan",story.nutritionPlan],
            ["Key Takeaways",story.takeaways],
          ].map(([title,items],cardIndex)=><motion.article key={title as string} {...reveal} className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-6"><span className="text-[7px] font-black uppercase tracking-[.08em] text-bazooka-text-secondary">0{cardIndex + 1}</span><h3 className="font-display mt-2 text-[22px] font-black uppercase leading-none sm:text-[24px]">{String(title).split(" ")[0]} <span className="text-bazooka-lime">{String(title).split(" ").slice(1).join(" ")}</span></h3><ul className="mt-5 space-y-3">{(items as string[]).map((item)=><li key={item} className="flex items-start gap-2.5 text-[9px] leading-4 text-bazooka-text-secondary"><CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-bazooka-lime"/><span>{item}</span></li>)}</ul></motion.article>)}
        </div>
      </div>
    </section>
  );
}
