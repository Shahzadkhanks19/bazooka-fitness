"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { ProgramDetail } from "./program-data";
import { primaryButton, outlineButton, reveal, shell } from "./programs-shared";

export default function DetailHeroSection({ program }: { program: ProgramDetail }) {
  return (
    <section className="relative min-h-[560px] overflow-hidden border-b border-bazooka-border/70">
      <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: `url(${program.heroImage})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

      <div className={`${shell} relative z-10 flex min-h-[560px] items-center py-16`}>
        <motion.div {...reveal} className="max-w-[720px]">
          <div className="mb-7 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.04em]">
            <Link href="/" className="text-bazooka-lime transition hover:text-bazooka-lime-hover">Home</Link>
            <ChevronRight className="size-3 text-bazooka-text-muted" />
            <Link href="/programs" className="text-bazooka-text-secondary transition hover:text-white">Programs</Link>
            <ChevronRight className="size-3 text-bazooka-text-muted" />
            <span className="text-white">{program.title}</span>
          </div>

          <span className="text-[10px] font-black uppercase tracking-[0.04em] text-bazooka-lime">{program.eyebrow}</span>
          <h1 className="font-display mt-3 max-w-[780px] text-[52px] font-black uppercase leading-[.9] sm:text-[68px] lg:text-[82px]">{program.title}</h1>
          <p className="mt-6 max-w-[620px] text-[13px] leading-6 text-bazooka-text-secondary sm:text-[14px]">{program.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
            <Link href="/memberships" className={outlineButton}>View Memberships <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
