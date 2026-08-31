"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Clock3, Gauge, UserRoundCheck } from "lucide-react";
import type { ProgramDetail } from "./program-data";
import { primaryButton, outlineButton, reveal, shell } from "./programs-shared";

export default function DetailHeroSection({ program }: { program: ProgramDetail }) {
  const stats = [
    [Clock3, "Session", program.duration],
    [Gauge, "Level", program.level],
    [UserRoundCheck, "Coaching", program.coaching],
  ] as const;

  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black">
      <div className="relative min-h-[540px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: `url(${program.heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className={`${shell} relative z-10 flex min-h-[540px] items-center py-14`}>
          <motion.div {...reveal} className="max-w-[730px]">
            <div className="mb-7 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.04em]">
              <Link href="/" className="text-bazooka-lime transition hover:text-bazooka-lime-hover">Home</Link>
              <ChevronRight className="size-3 text-bazooka-text-muted" />
              <Link href="/programs" className="text-bazooka-text-secondary transition hover:text-white">Programs</Link>
              <ChevronRight className="size-3 text-bazooka-text-muted" />
              <span className="text-white">{program.title}</span>
            </div>

            <span className="text-[10px] font-black uppercase tracking-[0.04em] text-bazooka-lime">{program.eyebrow}</span>
            <h1 className="font-display mt-3 max-w-[800px] text-[54px] font-black uppercase leading-[.88] sm:text-[70px] lg:text-[84px]">{program.title}</h1>
            <p className="mt-5 max-w-[600px] text-[12px] leading-6 text-bazooka-text-secondary sm:text-[13px]">{program.summary}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
              <Link href="/programs/all" className={outlineButton}>View All Programs <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={`${shell} grid overflow-hidden border-x border-bazooka-border-strong bg-bazooka-soft-black sm:grid-cols-3`}>
        {stats.map(([Icon, label, value], index) => (
          <motion.div key={label} {...reveal} transition={{ duration: .4, delay: index * .05 }} className="relative flex min-h-[92px] items-center justify-center gap-4 px-5 py-4">
            <Icon className="size-5 text-bazooka-lime" />
            <div>
              <small className="block text-[8px] font-black uppercase tracking-[.08em] text-bazooka-text-muted">{label}</small>
              <strong className="font-display mt-1 block text-[20px] font-black uppercase leading-none text-white">{value}</strong>
            </div>
            {index < stats.length - 1 && <span className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-bazooka-border sm:block" />}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
