"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import type { TransformationStory } from "./transformation-data";
import { primaryButton, reveal, shell } from "./transformations-shared";

export default function TransformationQuoteSection({ story }: { story: TransformationStory }) {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-10">
      <div className={shell}>
        <motion.div {...reveal} className="relative overflow-hidden rounded-[5px] border border-bazooka-border-strong px-6 py-8 md:px-9">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center grayscale opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-[760px]">
              <Quote className="size-9 fill-bazooka-lime text-bazooka-lime" />
              <p className="mt-4 text-[13px] leading-6 text-white md:text-[15px]">“{story.heroQuote}”</p>
              <strong className="mt-4 block text-[9px] font-black uppercase text-bazooka-lime">— {story.name}</strong>
            </div>
            <Link href="/book-free-trial" className={primaryButton}>Start Your Story <ArrowRight className="size-4" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
