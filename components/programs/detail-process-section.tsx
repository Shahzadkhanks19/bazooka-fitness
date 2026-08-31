"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import type { ProgramDetail } from "./program-data";
import { reveal, shell } from "./programs-shared";

export default function DetailProcessSection({ program }: { program: ProgramDetail }) {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-16">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-6 lg:grid-cols-[360px_1fr] lg:items-end">
          <div>
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Why It Works</span>
            <h2 className="font-display mt-3 text-[38px] font-black uppercase leading-[.95] sm:text-[46px]">A Clear Plan. <span className="text-bazooka-lime">Real Progress.</span></h2>
          </div>
          <p className="max-w-[560px] text-[11px] leading-5 text-bazooka-text-secondary lg:justify-self-end">Every stage is intentional. We assess where you are, build the right training approach and keep adjusting it as you improve.</p>
        </motion.div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {program.steps.map((step, index) => (
            <motion.article key={step.title} {...reveal} transition={{ duration: .5, delay: index * .06 }} className="group relative overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-full border border-bazooka-lime text-bazooka-lime"><Check className="size-4" /></span>
                <span className="font-display text-[44px] font-black leading-none text-bazooka-lime/15">0{index + 1}</span>
              </div>
              <h3 className="font-display mt-6 text-[24px] font-black uppercase">{step.title}</h3>
              <p className="mt-3 max-w-[320px] text-[10px] leading-5 text-bazooka-text-secondary">{step.text}</p>
              {index < program.steps.length - 1 && <ArrowRight className="absolute right-5 bottom-6 hidden size-5 text-bazooka-lime/45 lg:block" />}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
