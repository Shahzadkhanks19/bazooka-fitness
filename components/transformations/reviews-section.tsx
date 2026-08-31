"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reveal, shell } from "./transformations-shared";

const reviews = [
  ["Karan Malhotra", "Bazooka doesn’t just change your body, it transforms your mindset. Forever grateful!"],
  ["Deepak Sharma", "From 92 KG to 76 KG — this journey has been life changing. The coaches and community are the best!"],
  ["Sneha Jain", "Consistency, support and the right environment — that’s Bazooka. Couldn’t have done it without them!"],
] as const;

export default function TransformationReviewsSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-12">
      <div className={shell}>
        <motion.div {...reveal} className="flex items-center justify-center gap-4"><span className="h-px w-20 bg-bazooka-border-strong"/><h2 className="font-display text-center text-[30px] font-black uppercase">What Our <span className="text-bazooka-lime">Members</span> Say</h2><span className="h-px w-20 bg-bazooka-border-strong"/></motion.div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {reviews.map(([name,text],index) => <motion.article key={name} {...reveal} transition={{duration:.45,delay:index*.05}} className="rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface p-5 transition hover:border-bazooka-lime"><div className="flex items-center gap-1 text-bazooka-lime"><span className="mr-2 grid size-7 place-items-center rounded-full bg-white text-[13px] font-black text-[#4285F4]">G</span>{Array.from({length:5}).map((_,i)=><Star key={i} className="size-3 fill-bazooka-lime stroke-bazooka-lime"/>)}</div><p className="mt-4 text-[10px] leading-5 text-bazooka-text-secondary">“{text}”</p><div className="mt-5"><strong className="font-display block text-[13px] uppercase">{name}</strong><span className="text-[8px] text-bazooka-text-muted">Bazooka Member</span></div></motion.article>)}
        </div>
      </div>
    </section>
  );
}
