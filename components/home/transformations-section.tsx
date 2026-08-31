"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MoveHorizontal } from "lucide-react";
import { outlineButton, reveal, shell } from "./home-shared";

export default function TransformationsSection() {
  return (
    <section className="border-b border-bazooka-border/70 py-16">
      <div className={`${shell} grid gap-8 lg:grid-cols-[260px_1fr_170px] lg:items-center`}>
        <motion.div {...reveal}>
          <h2 className="font-display text-[37px] font-black uppercase leading-[.95]">Real People.<br /><span className="text-bazooka-lime">Real Transformations.</span></h2>
          <Link href="/transformations" className={`${outlineButton} mt-6 border-bazooka-lime/70`}>See Transformation Stories <ArrowRight className="size-4" /></Link>
        </motion.div>

        <motion.div {...reveal} className="relative grid min-h-[270px] grid-cols-2 overflow-hidden rounded-[6px] border border-bazooka-border-strong">
          <div className="relative bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=90')] bg-cover bg-center grayscale"><span className="absolute left-4 top-4 text-[10px] font-black">BEFORE</span></div>
          <div className="relative bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=90')] bg-cover bg-[62%_center]"><span className="absolute right-4 top-4 text-[10px] font-black text-bazooka-lime">AFTER</span></div>
          <span className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black"><MoveHorizontal className="size-4" /></span>
        </motion.div>

        <motion.div {...reveal} className="space-y-6">
          <div><strong className="font-display text-[28px]"><span className="text-bazooka-lime">-12</span> KG</strong><small className="block text-[8px] text-bazooka-text-secondary">WEIGHT LOSS</small></div>
          <div className="font-display text-[19px] font-black">+ STRENGTH<br />+ CONFIDENCE</div>
          <div><strong className="font-display text-[28px] text-bazooka-lime">100%</strong><small className="block text-[8px] text-bazooka-text-secondary">BETTER ME</small></div>
        </motion.div>
      </div>
    </section>
  );
}
