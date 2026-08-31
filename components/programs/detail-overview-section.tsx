"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { ProgramDetail } from "./program-data";
import { reveal, shell } from "./programs-shared";

export default function DetailOverviewSection({ program }: { program: ProgramDetail }) {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-16">
      <div className={`${shell} grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-stretch`}>
        <motion.div {...reveal} className="relative min-h-[360px] overflow-hidden rounded-[5px] border border-bazooka-border-strong">
          <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: `url(${program.heroImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="font-display absolute bottom-6 left-6 text-[30px] font-black uppercase leading-[.9] text-white">
            Stronger Every<br /><span className="text-bazooka-lime">Rep.</span>
          </div>
        </motion.div>

        <motion.div {...reveal} className="flex flex-col justify-center">
          <span className="text-[10px] font-black uppercase text-bazooka-lime">Program Overview</span>
          <h2 className="font-display mt-3 text-[38px] font-black uppercase leading-[.95] sm:text-[46px]">Built Around Your <span className="text-bazooka-lime">Progress.</span></h2>
          <p className="mt-5 max-w-[680px] text-[12px] leading-6 text-bazooka-text-secondary">{program.description}</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {program.benefits.map((benefit, index) => (
              <motion.div key={benefit} {...reveal} transition={{ duration: .45, delay: index * .05 }} className="group flex items-center gap-3 rounded-[4px] border border-bazooka-border-strong bg-bazooka-surface/55 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-bazooka-lime">
                <CheckCircle2 className="size-4 shrink-0 text-bazooka-lime" />
                <span className="text-[10px] font-bold text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
