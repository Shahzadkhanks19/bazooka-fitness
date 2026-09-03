"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./programs-shared";

export default function AllProgramsCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14">
      <div className={shell}>
        <motion.div {...reveal} className="group relative overflow-hidden rounded-[6px] border border-bazooka-border-strong transition-all duration-300 hover:border-bazooka-lime/70">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/84 to-black/24" />
          <div className="relative grid min-h-[260px] gap-7 px-5 py-8 sm:px-7 md:px-10 md:py-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-[650px] min-w-0">
              <span className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[.05em] text-bazooka-lime"><Sparkles className="size-3.5" /> Not Sure Which Program Fits?</span>
              <h2 className="font-display mt-3 max-w-full text-[31px] font-black uppercase italic leading-[.94] min-[380px]:text-[34px] sm:text-[44px]">Start With A <span className="text-bazooka-lime">Free Trial.</span></h2>
              <p className="mt-4 max-w-[560px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">Experience the gym, speak with the team and get help narrowing down the training option that best matches your current goals.</p>
            </div>
            <div className="grid w-full gap-3 sm:flex sm:flex-wrap lg:w-auto lg:flex-col">
              <Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto lg:min-w-[190px]`}>Book Free Trial <ArrowRight className="size-4" /></Link>
              <Link href="/contact" className={`${outlineButton} w-full sm:w-auto lg:min-w-[190px]`}><MessageCircle className="size-4" /> Talk To Us</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
