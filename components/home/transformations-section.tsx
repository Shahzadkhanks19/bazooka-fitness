"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MoveHorizontal } from "lucide-react";
import { outlineButton, reveal, shell } from "./home-shared";

export default function TransformationsSection() {
  return (
    <section className="border-b border-bazooka-border/70 py-14 sm:py-16">
      <div className={`${shell} grid gap-7 lg:grid-cols-[260px_1fr_170px] lg:items-center lg:gap-8`}>
        <motion.div {...reveal} className="min-w-0">
          <h2 className="font-display text-[34px] font-black uppercase leading-[.95] sm:text-[37px]">Real People.<br /><span className="text-bazooka-lime">Real Transformations.</span></h2>
          <Link href="/transformations" className={`${outlineButton} mt-6 w-full border-bazooka-lime/70 sm:w-auto`}>See Transformation Stories <ArrowRight className="size-4" /></Link>
        </motion.div>

        <motion.div {...reveal} className="group relative grid min-h-[250px] grid-cols-2 overflow-hidden rounded-[6px] border border-bazooka-border-strong sm:min-h-[270px]">
          <div className="relative bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=90')] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.015]"><div className="absolute inset-0 bg-black/18"/><span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[8px] font-black uppercase text-white backdrop-blur-sm sm:left-4 sm:top-4 sm:text-[9px]">Before</span></div>
          <div className="relative bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=90')] bg-cover bg-[62%_center] transition-transform duration-700 group-hover:scale-[1.015]"><div className="absolute inset-0 bg-black/5"/><span className="absolute right-3 top-3 rounded-full border border-bazooka-lime/60 bg-black/55 px-3 py-1.5 text-[8px] font-black uppercase text-bazooka-lime backdrop-blur-sm sm:right-4 sm:top-4 sm:text-[9px]">After</span></div>
          <span className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-white text-black shadow-xl"><MoveHorizontal className="size-4" /></span>
        </motion.div>

        <motion.div {...reveal} className="grid grid-cols-3 gap-3 rounded-[6px] border border-bazooka-border bg-bazooka-surface p-4 lg:block lg:space-y-6 lg:border-0 lg:bg-transparent lg:p-0">
          <div><strong className="font-display text-[23px] sm:text-[28px]"><span className="text-bazooka-lime">-12</span> KG</strong><small className="block text-[7px] leading-3 text-bazooka-text-secondary sm:text-[8px]">WEIGHT LOSS</small></div>
          <div className="font-display text-[15px] font-black leading-5 sm:text-[19px]">+ STRENGTH<br />+ CONFIDENCE</div>
          <div><strong className="font-display text-[23px] text-bazooka-lime sm:text-[28px]">100%</strong><small className="block text-[7px] leading-3 text-bazooka-text-secondary sm:text-[8px]">BETTER ME</small></div>
        </motion.div>
      </div>
    </section>
  );
}
