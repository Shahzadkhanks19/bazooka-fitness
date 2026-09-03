"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target } from "lucide-react";
import type { TransformationStory } from "./transformation-data";
import { primaryButton, reveal, shell } from "./transformations-shared";

export default function TransformationQuoteSection({ story }: { story: TransformationStory }) {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-10">
      <div className={shell}>
        <motion.div {...reveal} className="relative overflow-hidden rounded-[5px] border border-bazooka-border-strong px-6 py-8 md:px-9">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/45" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-[760px]">
              <Target className="size-9 text-bazooka-lime" />
              <span className="mt-4 block text-[8px] font-black uppercase tracking-[.08em] text-bazooka-lime">{story.name}</span>
              <h2 className="font-display mt-2 text-[28px] font-black uppercase leading-[.95] sm:text-[34px]">Turn The Goal Into <span className="text-bazooka-lime">A Plan.</span></h2>
              <p className="mt-3 max-w-[650px] text-[10px] leading-5 text-bazooka-text-secondary">Speak with the Bazooka team about your current fitness level, training preferences and the right starting point for this goal.</p>
            </div>
            <Link href="/book-free-trial" className={primaryButton}>Request Free Trial <ArrowRight className="size-4" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
