"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./programs-shared";

export default function AllProgramsCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14">
      <div className={shell}>
        <motion.div {...reveal} className="relative overflow-hidden rounded-[5px] border border-bazooka-border-strong">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/30" />
          <div className="relative grid min-h-[250px] gap-7 px-7 py-9 md:px-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-[650px]">
              <span className="text-[9px] font-black uppercase tracking-[.04em] text-bazooka-lime">Not Sure Which Program Fits?</span>
              <h2 className="font-display mt-3 text-[34px] font-black uppercase italic leading-[.95] sm:text-[46px]">Start With A <span className="text-bazooka-lime">Free Trial.</span></h2>
              <p className="mt-4 max-w-[560px] text-[10px] leading-5 text-bazooka-text-secondary">Meet the team, experience Bazooka and let us help you choose the right training path for your goal.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
              <Link href="/contact" className={outlineButton}>Talk To Us <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
