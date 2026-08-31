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
        <motion.div {...reveal} className="grid gap-7 rounded-[5px] border border-bazooka-border-strong bg-gradient-to-r from-bazooka-surface to-bazooka-black px-7 py-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="text-[9px] font-black uppercase text-bazooka-lime">Start This Program</span>
            <h2 className="font-display mt-2 text-[32px] font-black uppercase italic leading-none sm:text-[40px]">Ready For <span className="text-bazooka-lime">{program.title}?</span></h2>
            <p className="mt-3 text-[10px] leading-5 text-bazooka-text-secondary">Book your free trial and let our team help you choose the right starting point.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
            <Link href="/programs" className={outlineButton}>Back To Programs <ArrowRight className="size-4" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
