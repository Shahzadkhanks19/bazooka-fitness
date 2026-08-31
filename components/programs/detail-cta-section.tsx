"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ProgramDetail } from "./program-data";
import { outlineButton, primaryButton, reveal, shell } from "./programs-shared";

export default function DetailCtaSection({ program }: { program: ProgramDetail }) {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14">
      <div className={shell}>
        <motion.div {...reveal} className="relative overflow-hidden rounded-[5px] border border-bazooka-border-strong">
          <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: `url(${program.heroImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30" />
          <div className="relative grid min-h-[250px] gap-7 px-7 py-9 md:px-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-[650px]">
              <span className="text-[9px] font-black uppercase tracking-[.04em] text-bazooka-lime">Start This Program</span>
              <h2 className="font-display mt-3 text-[34px] font-black uppercase italic leading-[.95] sm:text-[46px]">Ready For <span className="text-bazooka-lime">{program.title}?</span></h2>
              <p className="mt-4 max-w-[560px] text-[10px] leading-5 text-bazooka-text-secondary">Book your free trial, meet the coaching team and get a clear starting point for this program.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
              <Link href="/programs/all" className={outlineButton}>View All Programs <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
