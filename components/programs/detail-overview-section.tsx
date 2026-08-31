"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock3, Gauge, UserRoundCheck } from "lucide-react";
import type { ProgramDetail } from "./program-data";
import { reveal, shell } from "./programs-shared";

const statIcons = [Clock3, Gauge, UserRoundCheck] as const;

export default function DetailOverviewSection({ program }: { program: ProgramDetail }) {
  const stats = [
    ["Session", program.duration],
    ["Level", program.level],
    ["Coaching", program.coaching],
  ] as const;

  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-16">
      <div className={`${shell} grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-start`}>
        <motion.div {...reveal}>
          <span className="text-[10px] font-black uppercase text-bazooka-lime">Program Overview</span>
          <h2 className="font-display mt-3 text-[38px] font-black uppercase leading-[.95] sm:text-[46px]">Built Around Your <span className="text-bazooka-lime">Progress.</span></h2>
          <p className="mt-5 max-w-[680px] text-[12px] leading-6 text-bazooka-text-secondary">{program.description}</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {program.benefits.map((benefit, index) => (
              <motion.div key={benefit} {...reveal} transition={{ duration: .45, delay: index * .05 }} className="flex items-center gap-3 rounded-[4px] border border-bazooka-border-strong bg-bazooka-surface/55 px-4 py-4">
                <CheckCircle2 className="size-4 shrink-0 text-bazooka-lime" />
                <span className="text-[10px] font-bold text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal} className="overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-soft-black">
          {stats.map(([label, value], index) => {
            const Icon = statIcons[index];
            return (
              <div key={label} className={`flex min-h-[108px] items-center gap-5 px-6 ${index < stats.length - 1 ? "border-b border-bazooka-border" : ""}`}>
                <span className="grid size-11 place-items-center rounded-full border border-bazooka-lime text-bazooka-lime"><Icon className="size-5" /></span>
                <div>
                  <small className="block text-[8px] font-black uppercase tracking-[.08em] text-bazooka-text-muted">{label}</small>
                  <strong className="font-display mt-1 block text-[24px] font-black uppercase leading-none">{value}</strong>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
