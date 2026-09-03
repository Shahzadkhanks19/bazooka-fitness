"use client";

import { motion } from "framer-motion";
import type { TransformationStory } from "./transformation-data";
import { reveal, shell } from "./transformations-shared";

export default function TransformationProgressSection({ story }: { story: TransformationStory }) {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-10 sm:py-12">
      <div className={shell}>
        <motion.div {...reveal} className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-6">
          <span className="text-[9px] font-black uppercase text-bazooka-lime">Progress Framework</span>
          <h2 className="font-display mt-2 max-w-full text-[28px] font-black uppercase leading-[.95] sm:text-[34px]">From Assessment To <span className="text-bazooka-lime">Review</span></h2>
          <p className="mt-3 max-w-[660px] text-[9px] leading-5 text-bazooka-text-secondary sm:text-[10px]">A simple visual framework for how a goal-focused plan can evolve. The images are illustrative training visuals, not member before-and-after photos.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {story.progress.map((item,index)=><motion.div key={item.label} {...reveal} transition={{duration:.45,delay:index*.04}} className="group relative min-h-[230px] overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-cover bg-center transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime" style={{backgroundImage:`url(${item.image})`}}><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10"/><span className="absolute left-3 top-3 rounded-[3px] border border-white/15 bg-black/60 px-2 py-1 text-[7px] font-black uppercase text-white/80">Illustrative</span><span className="absolute bottom-3 left-3 rounded-[3px] bg-bazooka-lime px-3 py-1.5 text-[8px] font-black uppercase text-black">{item.label}</span></motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
