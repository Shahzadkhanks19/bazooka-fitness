"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { TransformationStory } from "./transformation-data";
import { reveal, shell } from "./transformations-shared";

export default function TransformationDetailContent({ story }: { story: TransformationStory }) {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-10">
      <div className={shell}>
        <div className="grid overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface sm:grid-cols-2 lg:grid-cols-5">
          {story.stats.map((stat,index)=><motion.div key={stat.label} {...reveal} transition={{duration:.45,delay:index*.04}} className="relative flex min-h-[92px] flex-col justify-center px-5 text-center"><strong className="font-display text-[24px] font-black text-bazooka-lime">{stat.value}</strong><span className="mt-1 text-[8px] uppercase text-bazooka-text-secondary">{stat.label}</span>{index<story.stats.length-1&&<span className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-bazooka-border lg:block"/>}</motion.div>)}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <motion.article {...reveal} className="rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface p-6">
            <h2 className="font-display text-[26px] font-black uppercase">{story.name.replace(".","")}’s <span className="text-bazooka-lime">Journey</span></h2>
            <div className="mt-5 space-y-3">{story.story.map((paragraph)=><p key={paragraph} className="text-[10px] leading-5 text-bazooka-text-secondary">{paragraph}</p>)}</div>
          </motion.article>
          <motion.article {...reveal} className="rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface p-6">
            <h2 className="font-display text-[26px] font-black uppercase">Transformation <span className="text-bazooka-lime">Details</span></h2>
            <div className="mt-5 divide-y divide-bazooka-border/70">{story.details.map((row)=><div key={row.label} className="flex items-center justify-between gap-4 py-2.5 text-[9px]"><span className="text-bazooka-text-secondary">{row.label}</span><strong className="text-right text-white">{row.value}</strong></div>)}</div>
          </motion.article>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {[
            ["Workout Plan",story.workoutPlan],
            ["Nutrition Plan",story.nutritionPlan],
            ["Key Takeaways",story.takeaways],
          ].map(([title,items])=><motion.article key={title as string} {...reveal} className="rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface p-6"><h3 className="font-display text-[22px] font-black uppercase">{String(title).split(" ")[0]} <span className="text-bazooka-lime">{String(title).split(" ").slice(1).join(" ")}</span></h3><ul className="mt-5 space-y-3">{(items as string[]).map((item)=><li key={item} className="flex items-start gap-2.5 text-[9px] leading-4 text-bazooka-text-secondary"><CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-bazooka-lime"/>{item}</li>)}</ul></motion.article>)}
        </div>
      </div>
    </section>
  );
}
