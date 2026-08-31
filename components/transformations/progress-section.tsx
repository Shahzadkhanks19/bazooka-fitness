"use client";

import { motion } from "framer-motion";
import type { TransformationStory } from "./transformation-data";
import { reveal, shell } from "./transformations-shared";

export default function TransformationProgressSection({ story }: { story: TransformationStory }) {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-10">
      <div className={shell}>
        <motion.div {...reveal} className="rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface p-5 md:p-6">
          <h2 className="font-display text-[26px] font-black uppercase">{story.name.replace(".", "")}’s <span className="text-bazooka-lime">Progress</span></h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {story.progress.map((item,index)=><motion.div key={item.label} {...reveal} transition={{duration:.45,delay:index*.04}} className="group relative min-h-[210px] overflow-hidden rounded-[4px] border border-bazooka-border-strong bg-cover bg-center grayscale transition hover:border-bazooka-lime hover:grayscale-0" style={{backgroundImage:`url(${item.image})`}}><div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"/><span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-[3px] bg-bazooka-lime px-3 py-1.5 text-[8px] font-black uppercase text-black">{item.label}</span></motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
