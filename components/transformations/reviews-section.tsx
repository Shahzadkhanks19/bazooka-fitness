"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
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
          {reviews.map(([name,text],index) => <motion.article key={name} {...reveal} transition={{duration:.45,delay:index*.05}} className="group rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime/70 hover:shadow-[0_12px_40px_rgba(0,0,0,.28)]"><div className="flex items-start justify-between"><FcGoogle className="size-7"/><div className="flex gap-0.5 text-[#fbbc04]">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-3 fill-current"/>)}</div></div><p className="mt-4 min-h-[72px] text-[10px] leading-5 text-bazooka-text-secondary">“{text}”</p><div className="mt-5 flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-bazooka-border text-[10px] font-black text-bazooka-lime">{name.charAt(0)}</span><div><strong className="block text-[9px] text-white">{name}</strong><span className="text-[8px] text-bazooka-text-muted">Google reviewer</span><span className="mt-0.5 flex items-center gap-1 text-[7px] text-bazooka-lime"><ShieldCheck className="size-3"/> Verified Google Review</span></div></div></motion.article>)}
        </div>
      </div>
    </section>
  );
}
